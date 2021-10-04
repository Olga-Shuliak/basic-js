import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix ) {
  let result = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === 0) {
        result += matrix[row][col];
      }
      else {
        if (matrix[row - 1][col] !== 0) {
          result += matrix[row][col];
        }
      }
    }
  }
  return result;
}
