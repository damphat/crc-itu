crc-itu
=======

Install:

```
npm install https://github.com/damphat/crc-itu.git
```

Usage:

```
var lib = require('crc-itu');

// with string and encoding
var ret = lib.crc16('0d0103588990501766460026', 'hex');
console.log(ret.toString(16)); // 7bf9

// with buffer
var buff = new Buffer('0d0103588990501766460026', 'hex');
var ret = lib.crc16(buff);
console.log(ret.toString(16)); // 7bf9
```
