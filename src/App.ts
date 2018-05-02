import { standardDownloader } from './Flows';
import { landingUrl, mangaName, websiteData } from './config'
require('events').EventEmitter.prototype._maxListeners = 10000;
let downloader: Function;

switch (websiteData.flow) {
    case 'classic': 
        downloader = standardDownloader
        break
    default: 
        console.log('this flow is not supported yet. Time to code the downloader ?')
        break
}

if (downloader !== null) downloader(websiteData, landingUrl, mangaName)