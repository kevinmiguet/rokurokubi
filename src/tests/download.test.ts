import 'should';
import {Chrome} from 'navalia';
import * as fs from 'fs';
import { scrapeImagesSrc, scrapeChaptersUrl } from "../Helpers";

require('events').EventEmitter.prototype._maxListeners = 10000;

describe('downloader', async() => {
    it('should get the urls of all chapters', async() => {
        await scrapeChaptersUrl('https://mangareader.site/manga/saturn-apartments_104', '._2U6DJ')
        .then((summary: string[])=>{
            summary.should.eql(
            [
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-26.5",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-26",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-25",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-24",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-23",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-22",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-21",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-20",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-19",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-18",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-16",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-15",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-14",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-13",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-12",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-11",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-10",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-9",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-8.5",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-8",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-7",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-6",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-5",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-4",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-3",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-2",
            "https://mangareader.site/chapter/saturn-apartments_103/chapter-1"
            ])
        })
    });
    it('should find the images src in the page', async() => {
        await scrapeImagesSrc('https://mangareader.site/chapter/saturn-apartments_104/chapter-14', 'img[src*="imghub"]')
        .then((images: string[])=>{
            images[0].should.eql('https://cdn.mangahub.io/file/imghub/dosei-mansion/14/1.jpg')
        })
    })

})