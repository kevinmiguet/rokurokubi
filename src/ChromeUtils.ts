import * as puppeteer from "puppeteer";
import { gotoOpt } from "./config";
import * as mkdirpRaw from "mkdirp";
import * as fs from 'fs';


export async function getElementsAttributeOnPage(url: string, selector: string, attribute: string, timeout?: number): Promise<string[]>{
    const page = await _initChromePage();
    await page.goto(url, gotoOpt)

    return await page.waitFor(timeout | 0)
    .then(async () => {
        return await page.evaluate((selector: string, attribute: string) => {
            let result: string[] = [];
            document.querySelectorAll(selector).forEach(el => {
                result.push(el.getAttribute(attribute));
            });
            return result;
        }, selector, attribute)
    });
}

export async function downloadOneImage(url: string, filename: string, path: string): Promise<void>{
    const page = await _initChromePage();
    const output = `${path}${filename}`;
    await page.goto(url, gotoOpt);
    await page.waitForSelector('img');
    await page.$('img')
        .then((img) => img.screenshot({omitBackground:true}))
        .then((buffer) => {
            _mkdirp(path).then( () => fs.writeFileSync(output, buffer))
        })
}

async function _initChromePage(): Promise<puppeteer.Page> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({height: 3000, width: 3000});
    return Promise.resolve(page);
}

async function _mkdirp(dir: string, opts?: any) {
  return new Promise((resolve, reject) => {
    mkdirpRaw(dir, opts, (err, made) => err === null ? resolve(made) : reject(err))
  })
}