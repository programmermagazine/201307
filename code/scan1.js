text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";                     // �{���r��
re = /(\/\*[\s\S]*?\*\/)|(\/\/[^\r\n])|(".*?")|(\d+(\.\d*)?)|([a-zA-Z]\w*)|(\r?\n)|(\s+)|(.)/gm; // g �N�����Am �N��h�檺���覡�C
console.log("text.match(re)=%j", text.match(re));   // �L�X����o�쪺�}�C�C
