console.log( "--filename : " + __filename );
console.log( "__dirname : " + __dirname);
console.log("------------------------------------");
// process객체 = 현재 실행 중인 노드 프로세스 정보

console.log("process,varsion : ", process.version );
console.log("proccess.arch : ", process.arch );
console.log("process.platform : ",process.platform );
console.log("process.cpuUsage : ",process.cpuUsage());
console.log("------------------------------------");
// os 모듈 - 운영체제
const os = require("os");
console.log( "os.type: ", os.type() );
console.log( "os.cpus : ", os.homedir() );
console.log( "os.homedir : ", os.homedir() );
console.log( "os.freemem : ", os.freemem() );
console.log("------------------------------------");
//path 모듈

const path = require("path");
const file = __filename;
console.log( "path.extname : ", path.extname(file) );
console.log( "path.parse : ", path.parse(file) );
