// os 모듈 - 운영체제
const os = require("os");
console.log( "freemem: ", os.freemem() );
console.log( "totalmem: ", os.totalmem() );
console.log( "homedir: ", os.homedir() );

// path 모듈
const path = require("path");
const file = __filename;
const dir = __dirname;
console.log( "separator : ", path.sep );
console.log( "basename: ", path.basename(path.extname(file)) );
console.log( "path.parse : ", path.parse(file) );