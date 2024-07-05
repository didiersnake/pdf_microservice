import puppeteer from "puppeteer";

const defaultOPtions = {
  format: "A4",
  printBackground: true,
};
//parse default options if no option is set when calling funtion
async function htmlToPdf(html, options = defaultOPtions) {
  const browser = await puppeteer.launch({ headless: "shell" });
  const page = await browser.newPage();
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });
  const pdfBuffer = await page.pdf(options);
  await browser.close();

  return pdfBuffer;
}

export default htmlToPdf;
