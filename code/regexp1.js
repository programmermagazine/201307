var log = console.log;

text = "name=ccc age=43 email=[ccckmit@gmail.com,ccc@nqu.edu.tw] website=http://ccckmit.wikidot.com/ job=teacher";
log("===text.replace(\d+, <number>)===\n%j\n", text.replace(/\d+/, "<number>"));    // ���N�Ʀr�� <number>
log("===text.split(\s+)===\n%j\n", text.split(/\s+/));                              // �Ϊťզr�����Φr��
log("===text.match(\d+)===\n%j\n", text.match(/\d+/));                              // �����o�Ʀr
log("===text.search(\d+)===\n%j\n", text.search(/\d+/));                            // �����o�Ʀr����m
log("===text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, <url>)===\n%j\n",                // ���N���}�� <url>
    text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, "<url>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, <email>)===\n%j\n",           // ���N�l���}�� <email>�A�u���N�@��
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, "<email>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, <email>)===\n%j\n",          // ���N�Ҧ��l���}�� <email>�C
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, "<email>"));