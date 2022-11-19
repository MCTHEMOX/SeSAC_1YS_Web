function call(name) {
    setImmediate(function() {
        console.log("사용자는 " + name);
        calll()
    }, 0);
}
function calll() {
    setTimeout(function() {
        console.log("시작은 call");
        back();
    }, 2000);
}
function back() {
    setTimeout(function() {
        console.log("두번째는 back" );
        hell();
    }, 1000);
}
function hell() {
    setTimeout(function() {
        console.log("세번째는 hell" );
    }, 500);
}
var a = call('kim');
