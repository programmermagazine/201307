log = console.log;

// 第一種寫法，將匿名函數指定給變數。
add = function(a,b) {     
  return a+b;
}
// 第二種寫法，直接宣告函數，該函式是一個函數物件
function sub(a,b) {         
  return a-b;
}

log("add(3,5)="+add(3,5) +" sub(7,2)="+sub(7,2));