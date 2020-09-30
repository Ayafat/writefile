var fs =require('fs')

fs.writeFile('mynew.txt',"It's better to have some useful changes to this file",function(err){
    if (err)throw err;
    console.log('here it is');
});