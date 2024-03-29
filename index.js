
"use strict";

const ts = require('tools-ts')('tools:vfs');
const FS = require('./FS.js');

const fs = new FS();

if (ts.isBrowser){
	window.ts = ts;
	if (window.abv) window.abv.fs = fs;
	else window.abv = {fs: fs}
}

module.exports = fs;
