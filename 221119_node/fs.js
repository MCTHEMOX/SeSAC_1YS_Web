const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if ( err ) throw err; 

    console.log( "data : ", data );
    console.log( "data2 : ", data.toString());  
});



const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data) => {
        console.log( "promise - data : ", data );
    })

fs2.writeFile("./파일명.txt ", '내용')
    .then(function(){
        return fs.readFile('./파일명.txt')
    })
    .then(function(data) {
        console.log( data.toString());
    });


    