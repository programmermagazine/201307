var log = console.log;
text = "i=3; /* hello \r\n world! */\r\n add=function(a,b) { return a+b; }";

// �������ӥ� .*? �Ӥ�� /*...*/ ���Ѫ��A�� javascript �� . �ä��]�t \n, �]���� \s\S �N�� . �N�i�H�F�C
// �[�W��m�ݸ� *?, +? �N��D�g������� (non greedy), m �N��h����Ҧ� (multiline)
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