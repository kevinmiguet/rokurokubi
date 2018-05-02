export const websitesData: { [w in Website]: WebsiteData} = {
    mangakalot: {
        domain: 'http://mangakalot.com/',
        chapterSelector : 'a[title*="chapter"]',
        imageSelector : 'img[alt*="page"]',
        flow : 'classic',
    },

    mangareader: {
        domain : 'https://mangareader.site/',
        chapterSelector : '._2U6DJ',
        imageSelector : 'img[src*="imghub"]',
        flow: 'classic',
    },
}

export type WebsiteData = {
    flow: 'classic' | 'button';
    domain: string;
    chapterSelector: string;
    imageSelector: string;
    buttonSelector?: string;
};

export type Website = 'mangakalot' | 'mangareader'
