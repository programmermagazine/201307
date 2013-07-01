## Verilog (2) – 硬體語言的基礎 (作者：陳鍾誠)

在本文中、我們將介紹 Verilog 的基本語法，以便讓讀者能很快的進入 Verilog 硬體設計的領域。

### 基本型態

在一般的程式語言當中，資料的最基本型態通常是「位元」(bit)，但是在 Verilog 這種「硬體描述語言」當中，
我們必須有「面向硬體」的思考方式，因此最基本的型態從「位元」轉換為「線路」(wire)。

一條線路的可能值，除了 0 與 1 之外，還有可能是未定值 X ，以及高阻抗 Z，如下表所示：

值	意義	說明
--- ------- ----------------------------------------------------------------------------
0	低電位	布林代數中的假值
1	高電位	布林代數中的真值
Z	高阻抗	三態緩衝器的輸出，高阻抗斷線
X	未定值	像是線路未初始化之前，以及有 0,1 兩者衝突的線路值，或者是輸入為 Z 的輸出值

其中的 0 對應到低電位、 1 對應到高電位，這是比較容易理解的部分，但是未定值 X 與高阻抗 Z 各代表甚麼意義呢？

對於一條沒有阻抗的線路而言，假如我們在某點對該線路輸出 1, 另一點對該線路輸出 0，那麼這條線路到底應該是
高電位還是低電位呢？

![圖、造成未定值 X 的情況](../img/VerilogWireX.jpg)

對於這種衝突的情況，Verilog 採用 X 來代表該線路的值。

而高阻抗，則基本上是代表斷線，您可以想像該線路如果是「非導體」，例如「塑膠、木頭、開關開路、或者是處於高阻抗
情況的半導體」等，就會使用者種 Z 值來代表。

根據這樣的四種線路狀態，一個原本簡易的 AND 閘，在數位邏輯中只要用 2*2 的真值表就能表示了，但在 Verilog 當中則有
4*4 種可能的情況，如下所示：

AND	0	1	X	Z
--- --- --- --- ---
0	0	0	0	0
1	0	1	X	X
X	0	X	X	X
Z	0	X	X	X

同樣的，讀者應該可以自行寫出 OR、XOR、NOT 等閘的「真值表」。

在 Verilog 當中，如果我們要宣告一條線路，只要用下列語法就可以了：

```verilog
wire w1;
```

如果我們想一次宣告很多條線路，那麼我們可以用很多個變數描述：

```verilog
wire w, x, y, z;
```

但是如果我們想宣告一整個排線 (例如匯流排)，那我們就可以用下列的陣列語法：

```verilog
wire [31:0] bus;
```

如果想要一次宣告很多組排線，那我們就可以用下列的陣列群語法：

```verilog
wire [31:0] bus [0:3];
```

當然、除了線路之外，Verilog 還有可以穩定儲存位元的型態，稱為 reg (暫存器)，reg 可以用來
儲存位元，而非像線路一樣只是「一種連接方式」而已，以下是一些 reg 的宣告方式：

```verilog
reg w;                 // 宣告一位元的暫存器變數 w
reg x, y, z;           // 宣告三個一位元的暫存器變數 x, y, z
reg [31:0] r1;         // 宣告 32 位元的暫存器 r1
reg [31:0] R [0:15];   // 宣告 16 個 32 位元的暫存器群組 R[0..15]
```

在 Verilog 中，wire 與 reg 是比較常用的基本型態，另外還有一些較不常用的基本型態，
像是 tri (三態線路)、trireg (三態暫存器)、integer (整數) 等，在此我們先不進行介紹。

### 基本邏輯閘

Verilog 既然是硬體描述語言，那當然會有邏輯閘的表示法，Verilog 提供的邏輯閘有 and, nand, or, nor, xor, xnor, not 
等元件，因此您可以用下列 Verilog 程式描述一個全加器：

```verilog
module fulladder (input a, b, c_in, output sum, c_out);
wire s1, c1, c2;

xor g1(s1, a, b);
xor g2(sum, s1, c_in);
and g3(c1, a,b);
and g4(c2, s1, c_in) ;
or g5(c_out, c2, c1) ;

endmodule
```

上述程式所對應的電路如下圖所示：

![全加器電路圖](../img/FullAdder.jpg)

這些邏輯閘並不受限於兩個輸入，也可以是多個輸入的，例如以下範例中的 g 閘，就一次將三個輸入 a, b, c_in 進行 xor 
運算，產生輸出 sum 的結果。

```verilog
xor g(sum, a, b, c_in);
```

在上一期當中，我們有給出全加器的完整測試程式範例以及執行結果，該範例可以清楚的說明 Verilog 的閘級 (Gate Level) 
程式之寫法，因此我們就不再重複說明了。

在本文當中，我們想要詳細說明的重點是，高階的暫存器轉換 (RTL) 語法。

### 高階的 RTL 語法

所謂 RTL 是 Register Transfer Language 的縮寫，也就是暫存器轉換語言，這種寫法與 C, Java 等高階語言非常相似，
因此讓「程式人」也有機會透過 Verilog 設計自己的硬體。

舉例而言，在數位邏輯當中，多工器是一個很有用的電路，假如我們想設計一個二選一的多工器，那麼我們可以很直覺得
用以下的 RTL 寫法，去完成這樣的電路設計。

```verilog
module mux(f, a, b, sel);
output f;
input a, b, sel;
reg f; // reg 型態會記住某些值，直到被某個 assign 指定改變為止

always @(a or b or sel) // 當任何變數改變的時候，會執行內部區塊
  if (sel) f = a; // Always 內部的區塊採用 imperative 程式語言的寫法。
  else f = b;
endmodule
```

對於上述程式，您還可以進一步的將參數部分化簡，將型態寫入到參數中，成為以下的形式：

```verilog
module mux(output reg f, input a, b, sel);
always @(a or b or sel) // 當任何變數改變的時候，會執行內部區塊
  if (sel) f = a; // Always 內部的區塊採用 imperative 程式語言的寫法。
  else f = b;
endmodule
```

在 verilog 當中，if, case 等陳述一定要放在 always 或 initial 的理面，always @(cond) 代表在 cond 的
條件之下要執行該區塊，例如上述的 always @(a or b or sel)  則是在 a, b, 或 sel 有改變的時後，就必須
執行裏面的動作。

有時我們只希望在波型的「正邊緣」或「負邊緣」時，才執行某些動作，這時候就可以用 posedge 或 negedge 這
兩個修飾詞，例如以下的程式：

```verilog
always @(posedge clock) begin // 當 clock 時脈在正邊緣時才執行
  f = a;
end
```

而 initial 則通常是在測試程式 test bench 當中使用的，在一開始初始化的時後，可以透過 initial 設定初值，
例如以下的程式：

```verilog
initial begin // 當 clock 時脈在正邊緣時才執行
  clock = 0
end
```

Verilog 程式的許多地方，都可以用 #delay 指定時間延遲，例如 #50 就是延遲 50 單位的時間 (通常一單位時間
是一奈秒 ns)。舉例而言，假如我們想要每個 50 奈秒讓 clock 變化一次，那麼我們就可以用下列寫法達到目的：

```verilog
always #50 begin
  clock = ~clock; // 將 clock 反相 (0 變 1 、1 變 0)
end
```

以上的延遲也可以寫在裡面，而不是直接寫在 always 後面，例如改用以下寫法，也能得到相同的結果。

```verilog
always begin
  #50; 
  clock = ~clock; // 將 clock 反相 (0 變 1 、1 變 0)
end
```

### 整合的範例

接著、讓我們用一個整合的計數器範例，來示範這些語法的實際用途，以下是我們的程式內容。

檔案：counter.v

```verilog
 // 定義計數器模組 counter，包含重置 reset, 時脈 clock 與暫存器 count
module counter(input reset, clock, output reg [7:0] count); 
  always @(reset)                   // 當 reset 有任何改變時
    if (reset) count = 0;           //   如果 reset 是 1 ，就將 count 重置為 0
  always @(posedge clock) begin     // 在 clock 時脈的正邊緣時
    count = count + 1;              //   將 count 加 1
  end
endmodule

module main; // 測試主程式開始
wire [7:0] i; // i:計數器的輸出值
reg reset, clock; // reset:重置訊號, clock:時脈

// 宣告一個 counter 模組 c0、計數器的值透過線路 i 輸出，以便觀察。
counter c0(reset, clock, i); 

initial begin
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出  0ns: reset=x clock=x i=  x
  #10 reset = 1; clock=0; // 10ns 之後，將啟動重置訊號，並將 clock 初值設為 0
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 10ns: reset=1 clock=0 i=  x
  #10 reset = 0;  // 又經過 10ns 之後，重置完畢，將 reset 歸零
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 20ns: reset=0 clock=0 i=  0
  #500 $finish; // 再經過 500ns 之後，結束程式
end

always #40 begin // 延遲 40ns 之後，開始作下列動作
  clock=~clock; // 將時脈反轉 (0 變 1 、1 變 0)
  #10;          // 再延遲 10ns 之後
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 reset, clock 與 i 等變數值
end

endmodule

```

在上述程式中，`$display()` 函數可以用來顯示變數的內容，其作用就像 C 語言的 printf() 一樣。不過、
由於 Verilog 設計的是硬體，因此像 `$display()` 這樣前面有錢字 `$` 符號的指令，其實是不會被合成為電路的，
只是方便除錯時使用而已。

以下是我們用 icarus 軟體編譯並執行上述程式的過程與輸出結果：

```
D:\Dropbox\Public\pmag\201307\code>iverilog -o counter counter.v

D:\Dropbox\Public\pmag\201307\code>vvp counter
   0ns: reset=x clock=x i=  x
  10ns: reset=1 clock=0 i=  x
  20ns: reset=0 clock=0 i=  0
  50ns: reset=0 clock=1 i=  1
 100ns: reset=0 clock=0 i=  1
 150ns: reset=0 clock=1 i=  2
 200ns: reset=0 clock=0 i=  2
 250ns: reset=0 clock=1 i=  3
 300ns: reset=0 clock=0 i=  3
 350ns: reset=0 clock=1 i=  4
 400ns: reset=0 clock=0 i=  4
 450ns: reset=0 clock=1 i=  5
 500ns: reset=0 clock=0 i=  5
```

您可以看到，在一開始的時候以下的 initial 區塊會被執行，但由於此時 reset, clock, i 都尚未被賦值，
所以第一個 `$display()` 印出了代表未定值的 x 符號。

```verilog
initial begin
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出  0ns: reset=x clock=x i=  x
  #10 reset = 1; clock=0; // 10ns 之後，將啟動重置訊號，並將 clock 初值設為 0
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 10ns: reset=1 clock=0 i=  x
  #10 reset = 0;  // 又經過 10ns 之後，重置完畢，將 reset 歸零
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 20ns: reset=0 clock=0 i=  0
  #500 $finish; // 再經過 500ns 之後，結束程式
end
```

接著 `#10 reset = 1; clock=0` 指令在延遲 10ns 後，執行 reset=1; clock=0，於是後來的 `$display()` 
就印出了 `10ns: reset=1 clock=0 i=  x` 的結果。

但是就在 reset 被設為 1 的時候，由於 reset 的值有所改變，因此下列模組中的 `always @(reset)` 被觸發了，
於是開始執行 `if (reset) count = 0` 這個陳述，將 count 暫存器設定為 0。

```verilog
module counter(input reset, clock, output reg [7:0] count); 
  always @(reset)                   // 當 reset 有任何改變時
    if (reset) count = 0;           //   如果 reset 是 1 ，就將 count 重置為 0
  always @(posedge clock) begin     // 在 clock 時脈的正邊緣時
    count = count + 1;              //   將 count 加 1
  end
endmodule
```

然後 `#10 reset = 0` 指令又在延遲 10ns 後執行了 reset = 0，之後再用 `$display()` 時，由於 count 已經
被設定為 0，所以此時印出的結果為 `20ns: reset=0 clock=0 i=  0`。

initial 區塊的最後一個陳述，`#500 $finish`，會在 520ns 的時候才執行，執行時 `$finish` 會將整個測試程式
結束。

但在程式結束之前，以下的程式會在延遲 40ns 之後，開始將 clock 反相，然後再等待 10ns 之後用 `$display()` 
印出變數內容，因此整個區塊每 50ns (=40ns+10ns) 會被執行一次。

```verilog
always #40 begin // 延遲 40ns 之後，開始作下列動作
  clock=~clock; // 將時脈反轉 (0 變 1 、1 變 0)
  #10;          // 再延遲 10ns 之後
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出 reset, clock 與 i 等變數值
end
```

所以、您才會看到像下面的輸出結果，如果仔細觀察，會發現 clock 每 50ns 變換一次，符合上述的程式邏輯，而且每當 clock 
從 0 變成 1 的正邊緣，就會觸發 counter 模組，讓 count 變數加 1 ，並且透過線路 i 的輸出被我們觀察到。

```
  50ns: reset=0 clock=1 i=  1
 100ns: reset=0 clock=0 i=  1
 150ns: reset=0 clock=1 i=  2
 200ns: reset=0 clock=0 i=  2
 250ns: reset=0 clock=1 i=  3
 300ns: reset=0 clock=0 i=  3
```

(註：或許您有注意到上期當中我們用 `$monitor()` 來觀察全加器的輸出，`$display()` 與 `$monitor()` 的語法
幾乎一模一樣，但是 `$display()` 是顯示該時間點的變數內容，而 `$monitor()` 則會在受觀察的變數有改變時就
列印變數內容，兩者的的功能有明顯的差異)。

### 結語

在本文中，我們初淺的介紹了 Verilog 的基本語法，包含基本型態、閘級語法、以及 RTL 層級的語法等，
並且在最後用一個完整的計數器範例說明 RTL 層級的程式寫法。

雖然這樣的說明仍然太過粗淺，不過應該可以讓讀者看出 Verilog 語言的大致樣貌，這也是本系列文章所想要
傳達的訊息，希望讀者能夠透過本文打開硬體設計之門。

### 參考文獻
* [陳鍾誠的網站/免費電子書：Verilog 電路設計](http://ccckmit.wikidot.com/ve:main)

