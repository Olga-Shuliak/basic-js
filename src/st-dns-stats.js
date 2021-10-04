import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains) {
  const rg = /\.\w+/ig;
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = (`.${domains[i]}`).match(rg).reverse();
    for (let j = 0; j < domain.length; j++) {
      if (obj[domain[j]]) {
        obj[domain[j]] += 1;
      } else {
        obj[domain[j]] = 1;
      }
      if (j !== domain.length - 1) {
        domain[j + 1] = domain[j] + domain[j + 1];
      }
    }
  }
  return obj;
}
