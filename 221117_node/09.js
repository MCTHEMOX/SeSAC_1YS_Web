function login( id, pw, cb) {
    setTimeout(() => {
        console.log("사용자입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb) {
    setTimeout(function() {
        console.log( id + "의 비디오 리스트");
        cb( ['아바타','라라랜드']);
    }, 2000 );
}
function getDetail(video, cb) {
    setTimeout(function() {
        cb("비디오 제목 : " + video);
    }, 1000);
}

login( 'Mox','1234', function(user){
    getVideo(user, function(videos){
        getDetail(videos[0], function(msg){
            console.log( msg );
        })
    });
});
// 4번째
//cb = function(user){
//    getVideo(user, );
//}
//10번째
//cb = function(videos){
//    getDetail(videos[0], );
//}
// 15번째
//cb = function(msg){
//    console.log( msg );
//}