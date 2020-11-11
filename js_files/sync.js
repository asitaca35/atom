var fs=require('fs') //파일함수 호출
console.log("첫째에요");
var data = fs.readFileSync('sample.txt', {encoding:'utf-8'})
console.log(data);
console.log("둘째에요");
