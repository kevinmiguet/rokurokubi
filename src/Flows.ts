
import { createFileName, createPath } from "./config";
import { downloadOneImage } from "./ChromeUtils";
import { scrapeChaptersUrl, scrapeImagesSrc } from "./Helpers";
import { WebsiteData } from "./WebsitesData";

export async function standardDownloader(websiteData: WebsiteData, url: string, mangaName: string, limit?: number): Promise<void> {
    const {chapterSelector, imageSelector} = websiteData;
    console.log('parsing summary...')   
    const chaptersUrls = await scrapeChaptersUrl(url, chapterSelector).then(chapters => chapters.reverse());
    const downloadFrom = (limit && limit-1)|0;
    
    // For each chapter page 
    // gets images src. @TODO: download by fetch instead of going on each image page
    for (let i = downloadFrom; i < chaptersUrls.length; i++){
        const chapterNb = i+1;
        console.log(`getting image src of chapter ${chapterNb}...`)
        const imagesUrl = await scrapeImagesSrc(chaptersUrls[i], imageSelector)
        
        // go to each image src and download the image
        console.log(`downloading images of chapter ${chapterNb}...`)
        for (let i=0; i < imagesUrl.length; i++){
            const src = imagesUrl[i];
            const filename = createFileName(mangaName, chapterNb, i);
            const path = createPath(mangaName, chapterNb, i);
            await downloadOneImage(src, filename, path);
        }
        console.log(`finished work on chapter ${chapterNb}...`)        
    }
    console.log('finished all Jobs')
    return Promise.resolve();
};


