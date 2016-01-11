crc-itu [![Build Status](https://travis-ci.org/damphat/crc-itu.png?branch=master)](https://travis-ci.org/damphat/crc-itu)
=======

Requirement:
- Node 0.11+
- Compiler: g++ 4.8 or later

Install:

```
npm install crc-itu
```

Usage:

```
var crc16 = require('crc-itu').crc16;

// with string and encoding
var ret = crc16('0d0103588990501766460026', 'hex');
console.log(ret.toString(16)); // 7bf9

// with buffer
var buff = new Buffer('0d0103588990501766460026', 'hex');
var ret = crc16(buff);
console.log(ret.toString(16)); // 7bf9
```
