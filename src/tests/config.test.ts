import 'should';
import { createFileName, createPath } from "../config";

const reStringWithFileExtension = /\.[^\.\/]{1,6}$/i;

describe('createFileName', () => {
    const resultFileName = createFileName('Naruto', 12, 5);
    it('should return a string', () => {
        const type = typeof(resultFileName);
        type.should.eql('string');
    })
    it('should not return a string containing a slash', () => {
        (resultFileName.indexOf('/') !== -1).should.be.eql(false);
    })
    it('should return a string containing a file extension', () => {
        (resultFileName.match(reStringWithFileExtension) !== null).should.be.eql(true);
    })
})

describe('createPath', () => {
    const resultPath = createPath('Naruto', 12, 5);
    it('should return a string', () => {
        const type = typeof(resultPath);
        type.should.eql('string');
    })
    it('should return a string containing at least a slash', () => {
        (resultPath.indexOf('/') !== -1).should.be.eql(true);
    })
    it('should return a string whose last char is a slash', () => {
        (resultPath[resultPath.length-1]).should.be.eql('/');
    })
    it('should not return a string containing a file extension', () => {
        (resultPath.match(reStringWithFileExtension) === null).should.be.eql(true);
    })
})