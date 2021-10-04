import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const N = 26;
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    let result = '';
    let j = 0;
    let index = 0;
    let newKey = '';

    if (!(message && key)) throw new Error("Incorrect arguments!");
    message = message.toString().toUpperCase();
    key = key.toString().toUpperCase();

    for (let i = 0; i < message.length; i++) {
      j = ((message[i].charCodeAt(0) + key[index].charCodeAt(0)) % N) + 65;
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        newKey = String.fromCharCode(j); // возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16.
      } else {
        newKey = message[i]
        index--;
      }
      result += newKey;
      if (index === key.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }
    if (this.type === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }


  decrypt(message, key) {

    let result = '';
    let j = 0;
    let index = 0;
    let newKey = '';

    if (!(message && key)) throw new Error("Incorrect arguments!");

    message = message.toString().toUpperCase();
    key = key.toString().toUpperCase();

    for (let i = 0; i < message.length; i++) {
      j = ((message[i].charCodeAt(0) + N - key[index].charCodeAt(0)) % N) + 65;
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        newKey = String.fromCharCode(j);
      } else {
        newKey = message[i];
        index--;
      }
      result += newKey;
      if(index === key.length - 1) {
        index = 0;
      } else {
        index ++;
      }
    }
    if (this.type === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}
