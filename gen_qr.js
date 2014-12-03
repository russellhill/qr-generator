var qr = require('qr-image');  
var uuid = require('node-uuid');
var fs = require('fs');

for(loop=0;loop<52;loop++) {
	var guid = uuid.v4();
	var code = qr.image(guid, { type: 'svg' });

	var output = fs.createWriteStream(guid + '.svg')
	code.pipe(output);
}
