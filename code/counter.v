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
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 先印出變數初值
  #10 reset = 1; clock=0; // 10ns 之後，將啟動重置訊號，並將 clock 初值設為 0
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出變數值觀察
  #10 reset = 0;  // 又經過 10ns 之後，重置完畢，將 reset 歸零
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出變數值觀察
  #500 $finish; // 再經過 500ns 之後，結束程式
end

always #40 begin // 延遲 40ns 之後，開始作下列動作
  clock=~clock; // 將時脈反轉 (0 變 1 、1 變 0)
  #10;          // 再延遲 10ns 之後
  $display("%4dns: reset=%d clock=%d i=%d", $stime, reset, clock, i); // 印出變數值觀察
end

endmodule
