async function createPdf(resumeJson, fileName, theme, format) {
  
  const puppeteer = require('puppeteer');
  const btoa = require('btoa');

  const themePkg = require(theme);
  const puppeteerLaunchArgs = [];

  if (process.env.RESUME_PUPPETEER_NO_SANDBOX) {
    puppeteerLaunchArgs.push('--no-sandbox');
  }

  const html = await themePkg.render(resumeJson);
  const browser = await puppeteer.launch({
    args: puppeteerLaunchArgs
  });
  const page = await browser.newPage();
  await page.emulateMediaType(themePkg.pdfRenderOptions && themePkg.pdfRenderOptions.mediaType || 'screen');
  await page.goto(`data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`, {
    waitUntil: 'networkidle0'
  });

  if (themePkg.pdfViewport) {
    await page.setViewport(themePkg.pdfViewport);
  }

  let pdf = await page.pdf({
    path: fileName + format,
    format: 'Letter',
    printBackground: true,
    ...themePkg.pdfRenderOptions
  });
  await browser.close();
  return pdf;
};

module.exports = createPdf;