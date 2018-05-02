import { websitesData } from "./WebsitesData";


export const websiteData = websitesData.mangakalot
export const landingUrl = 'https://mangareader.site/manga/saturn-apartments_105'
export const mangaName = 'saturn_apartments'

export function createPath(mangaName: string, chapterNb: number, i: number): string {
   return `./${mangaName}/`;
}

export function createFileName(mangaName: string, chapterNb: number, i: number): string {
   return `${mangaName}-Ch${chapterNb}-${i}.png`;
}

export const gotoOpt = {
    coverage: true,
    onload: true,
    timeout: 1000 * 15,
}