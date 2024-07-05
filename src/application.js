import puppeteer from "puppeteer";

class Application {
    static async main() {
        const browser = await puppeteer.launch({headless: 'shell'});
        const page = await browser.newPage();  
        await page.setContent('<html><body><h1>Test</h1></body></html>', { waitUntil: 'domcontentloaded' });
        const pdfBuffer = await page.pdf({
           // format: 'A4',
            path: './test.pdf',
            printBackground: true
        });
        await browser.close()
    }
}

export default Application;