import assert from 'assert';
import Typwrtr from '../src/index';

const testSamples = ["It was a bright cold day in April, and the clocks were striking thirteen.", "It was a pleasure to burn."];

describe('Array', () => {
    it('should create Typwrtr object', () => {
      assert.equal(() => {
        let typwrtr = new Typwrtr(testSamples);
        return typwrtr;
      }, true)
    })
})
