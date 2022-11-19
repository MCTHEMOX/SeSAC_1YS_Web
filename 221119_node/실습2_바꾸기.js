const fs = require("fs");




fs.rename('sesac3.txt', 'new.txt', function(err){
    if( err ) throw err;
    console.log('File Renamed!');
});