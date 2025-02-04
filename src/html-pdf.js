const dotenv = require('dotenv');
dotenv.config();

async function createPdf(resumeJson, theme) {
  
  const btoa = require('btoa');
  
  const themePkg = require(theme);
  
  const html = await themePkg.render(resumeJson);

  let browser;
  let args = [      
    '--single-process',
    '--no-sandbox',
    '--disable-web-security'
  ]
  if (process.env.NODE_ENV === 'production') {
    let puppeteerCore =  require("puppeteer-core");
    let chromium =  require("@sparticuz/chromium");
    const executablePath = await chromium.executablePath();
    

    browser = await puppeteerCore.launch({
      args: args,
      executablePath,

      headless: chromium.headless,
    });
  } else {
    let puppeteer =  require("puppeteer");
    browser = await puppeteer.launch({
      args: args,
    });
  }
  
  const page = await browser.newPage();
  await page.emulateMediaType(themePkg.pdfRenderOptions && themePkg.pdfRenderOptions.mediaType || 'screen');
  
  
  await page.goto(`data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`, {
    waitUntil: 'networkidle0'
  });
  await page.addStyleTag({
    content: `
      html {
        font-family: Arial !important;
      }
      @page {
        margin: 0.8cm;
      }
      #resume {
        margin: 0cm;
        width: auto;
      }
    `,
  });


  if (themePkg.pdfViewport) {
    await page.setViewport(themePkg.pdfViewport);
  }

  let res = await page.pdf(
    {
      printBackground: true,
      format: 'Letter',
      preferCSSPageSize: true
    }
    // {
  //   // format: 'Letter',
  //   // size: 'Letter',
  //   // margin: 0,
  //   // printBackground: true,
  //   // ...themePkg.pdfRenderOptions
  // }
);






  await browser.close();
  return res;
};

module.exports = createPdf;