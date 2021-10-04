import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let curr = 0;
    for (let el of arr) {
      if (Array.isArray(el)) {
        curr = this.calculateDepth(el);

        if (curr > depth) {
          depth = curr;
          curr = 0;
        }
      }
    }
    return depth + 1;

  }
}
