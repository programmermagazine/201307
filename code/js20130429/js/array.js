var log = console.log;
var br = "";

if (typeof(document) == 'undefined') {
  log = console.log;
} else {
  log = document.write;
  br = "<br/>";
}

var x;
var friends = new Array();
friends[0] = "John";
friends[1] = "Mary";
friends[2] = "George";
for (p in friends) {
  log(p + ":"+ friends[p] + br);
}