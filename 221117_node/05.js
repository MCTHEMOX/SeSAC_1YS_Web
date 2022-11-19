const url = require("url");
console.log( url );
console.log( url.parse );
var obj = url.parse('https://post.naver.com/viewer/postView.naver?volumeNo=34757530&memberNo=11959051');
console.log( obj );
console.log( obj.protocol );

var string = new url.URL("https://post.naver.com/viewer/postView.naver?volumeNo=34757530&memberNo=11959051");
console.log(string.searchParams.keys());
string.searchParams.append('age','20' );
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age'));