var fs =require('fs');
console .log('첫째에요')
var date=fs.readFile('sample.txt',{encoding:'utf-8'},function(err,data){ if (err) throw err;
  console.log(data);
});
console .log('둘째에요')
