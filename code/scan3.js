var log = console.log;
text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";

// 本來應該用 .*? 來比對 /*...*/ 註解的，但 javascript 的 . 並不包含 \n, 因此用 \s\S 代替 . 就可以了。
// 加上後置問號 *?, +? 代表非貪婪式比對 (non greedy), m 代表多行比對模式 (multiline)
re = new RegExp(/(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm);
var types = [ "", "blockcomment", "linecomment", "string", "int", "float", "id", "br", "space", "op" ];
var tokens = [];
var m;
var lines = 1;
while((m = re.exec(text)) !== null) {
  var token = m[0], type;
  for (i=1; i<=8; i++) { 
    if (m[i] !== undefined)
      type = types[i];
  }
  tokens.push({ "token":token, "type":type, "lines":lines });
  log("token="+token+" type="+type+" lines="+lines);
  lines += token.split(/\n/).length-1;
}