text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";                     // 程式字串
re = /(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm; // g 代表全域，m 代表多行的比對方式。
console.log("text.match(re)=%j", text.match(re));   // 印出比對後得到的陣列。
