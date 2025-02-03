const dotenv = require('dotenv');
dotenv.config();

async function createPdf(resumeJson, theme) {
  
  const btoa = require('btoa');
  
  const themePkg = require(theme);
  const puppeteerLaunchArgs = [];
  
  if (process.env.RESUME_PUPPETEER_NO_SANDBOX) {
    puppeteerLaunchArgs.push('--no-sandbox');
  }
  
  const html = await themePkg.render(resumeJson);

  let browser;
  if (process.env.NODE_ENV === 'production') {
    let puppeteerCore =  require("puppeteer-core");
    let chromium =  require("@sparticuz/chromium");
    const executablePath = await chromium.executablePath();
    
    let args = [
      // '--allow-pre-commit-input',
      // '--disable-background-networking',
      // '--disable-background-timer-throttling',
      // '--disable-backgrounding-occluded-windows',
      // '--disable-breakpad',
      // '--disable-client-side-phishing-detection',
      // '--disable-component-extensions-with-background-pages',
      // '--disable-component-update',
      // '--disable-default-apps',
      // '--disable-dev-shm-usage',
      // '--disable-extensions',
      // '--disable-hang-monitor',
      // '--disable-ipc-flooding-protection',
      // '--disable-popup-blocking',
      // '--disable-prompt-on-repost',
      // '--disable-renderer-backgrounding',
      // '--disable-sync',
      // '--enable-automation',
      // '--enable-blink-features=IdleDetection',
      // '--export-tagged-pdf',
      // '--force-color-profile=srgb',
      // '--metrics-recording-only',
      // '--no-first-run',
      // '--password-store=basic',
      // '--use-mock-keychain',
      // '--disable-domain-reliability',
      // '--disable-print-preview',
      // '--disable-speech-api',
      // '--disable-features=Translate,BackForwardCache,AcceptCHFrame,MediaRouter,OptimizationHints,AudioServiceOutOfProcess,IsolateOrigins,site-per-process',
      // '--enable-features=NetworkServiceInProcess2,SharedArrayBuffer',
      // '--hide-scrollbars',
      // '--ignore-gpu-blocklist',
      // '--in-process-gpu',
      // '--window-size=1920,1080',
      // '--disk-cache-size=33554432',
      // '--mute-audio',
      // '--no-default-browser-check',
      // '--no-pings',
      // '--font-render-hinting=none',
      // '--use-gl=angle',
      // '--use-angle=swiftshader',
      // '--allow-running-insecure-content',
      // '--disable-setuid-sandbox',
      // '--disable-site-isolation-trials',
      // "--headless='shell'"
      // '--disable-web-security',
      // '--no-zygote',
      
      
  
      '--single-process',
      '--no-sandbox',
    ]

    console.log(chromium.args);
    browser = await puppeteerCore.launch({
      args: args,
      // defaultViewport: chromium.defaultViewport,
      executablePath,
      // headless: chromium.headless,
    });
  } else {
    let puppeteer =  require("puppeteer");
    browser = await puppeteer.launch({
      args: puppeteerLaunchArgs
    });
  }
  

  const page = await browser.newPage();
  await page.emulateMediaType(themePkg.pdfRenderOptions && themePkg.pdfRenderOptions.mediaType || 'screen');
  await page.goto(`data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`, {
    waitUntil: 'networkidle0'
  });

  if (themePkg.pdfViewport) {
    await page.setViewport(themePkg.pdfViewport);
  }

  let pdf = await page.pdf({
    format: 'Letter',
    printBackground: true,
    ...themePkg.pdfRenderOptions
  });
  await browser.close();
  return pdf;
};

module.exports = createPdf;