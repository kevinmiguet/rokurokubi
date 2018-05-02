import { getElementsAttributeOnPage } from "./ChromeUtils";

export async function scrapeChaptersUrl(url: string, selector: string): Promise<string[]> {
    return scrapeInfoFrom(url, selector, 'href', 1500);
}

export async function scrapeImagesSrc(url: string, selector: string): Promise<string[]> {
    return scrapeInfoFrom(url, selector, 'src', 3000);
}

async function scrapeInfoFrom(url: string, selector: string, attribute: string, timeout?: number): Promise<string[]>{
    const result = await getElementsAttributeOnPage(url, selector, attribute, timeout);
    return result;  
 }