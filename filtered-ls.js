const fs = require('fs')
const path = require('path');
var fileExt = '.' + process.argv[3];
fs.readdir(process.argv[2], (err, list) => {
    for (i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === fileExt) {
            console.log(list[i]); }
    }
   });