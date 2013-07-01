if (typeof(document) == 'undefined') {
  out = new Object();
  out.write = console.log;
  br = "";
} else {
  out = document;
  br = "<br/>";
}

var x;
var friends = new Array();
friends[0] = "John";
friends[1] = "Mary";
friends[2] = "George";
for (p in friends) {
  out.write(p + ":"+ friends[p] + br);
}
