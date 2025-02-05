const btoa = require('btoa');
const dotenv = require('dotenv');
dotenv.config();

const theme = require('../theme');


async function htmlToPDF(resumeJson) {
  let pdf;
  let puppeteer;
  let executablePath;
  let args;

  // Get html from theme
  const html = await theme.render(resumeJson);

  // If it's in production, use mini version of chromium
  if (process.env.NODE_ENV === 'production') {
    puppeteer = require("puppeteer-core");
    executablePath =  await require("@sparticuz/chromium").executablePath();
    args = require("@sparticuz/chromium").args;
  } 

  // If it's in development, use local verion of chromium
  else {
    puppeteer = require('puppeteer');
  }
  
  // Launch browser
  let browser = await puppeteer.launch({
    executablePath: executablePath,
    args: args,
    headless: true,
  });
  
  // Open new page
  const page = await browser.newPage();
  await page.emulateMediaType(theme.pdfRenderOptions && theme.pdfRenderOptions.mediaType || 'screen');
  
  // Load the resume
  await page.goto(`data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`, {
    waitUntil: 'networkidle0'
  });
  
  if (theme.pdfViewport) {
    await page.setViewport(theme.pdfViewport);
  }
  
  // Inject some CSS to make the resume look better in print
  await page.addStyleTag({
    content: `
      @page {
        margin: 0.8cm;
      }
      #resume {
        margin: 0cm;
        width: auto;
      }
    `,
  });

  // Generate PDF
  pdf = await page.pdf(
    {
      printBackground: true,
      format: 'Letter',
      preferCSSPageSize: true
    }
  );

  await browser.close();
  return pdf;
};

module.exports = { htmlToPDF };