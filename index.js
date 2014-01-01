var nativeCRC = require('./build/Release/crc-itu');

exports.crc16 = function (strOrBuffer, encoding) {
	var buffer = null;

	if(typeof strOrBuffer === 'string') {
		buffer = new Buffer(strOrBuffer, encoding);
	} else if(strOrBuffer.constructor === Buffer) {
		buffer = strOrBuffer;
	} else {
		throw TypeError('Syntaxs: crc16(string, encoding) -OR- crc16(Buffer)');
	}

	return nativeCRC.crc16(buffer);
}