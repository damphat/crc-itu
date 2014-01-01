var crc = require('./');
var assert = require('assert');

//////////////////////////////////////////////
// start  --------data------------  crc   end
// 7878   0d0103588990501766460026  7bf9  0d0a
// 7878   0d010358899050176646002a  b195  0d0a
// 7878   0d010358899050176646002b  a01c  0d0a

assert.equal(crc.crc16('0d0103588990501766460026', 'hex').toString(16), '7bf9');
assert.equal(crc.crc16('0d010358899050176646002a', 'hex').toString(16), 'b195');
assert.equal(crc.crc16('0d010358899050176646002b', 'hex').toString(16), 'a01c');

console.log('DONE!!!!!!!')
