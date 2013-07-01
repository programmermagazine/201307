var fs = require('fs'); /* 引用檔案物件 */
var text = fs.readFileSync(process.argv[2], "utf8"); /* 讀取檔案 */
re = /(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm; /* g 代表全域，m 代表多行的比對方式。*/
console.log("text.match(re)=%j", text.match(re));   /* 印出比對後得到的陣列。*/
