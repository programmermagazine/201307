## LISP 的發明人 – John McCarthy

John McCarthy (約翰·麥卡錫)（1927年9月4日－2011年10月24日），生於美國麻薩諸塞州波士頓，計算機科學家。
他因在人工智慧領域的貢獻而在 1971 年獲得圖靈獎。實際上，正是他在 1955 年的達特矛斯會議上
提出了「人工智慧」這個概念。

John McCarthy 在 1960 年創造出了 LISP（全名LISt Processor，即列表處理語言）這個程式語言，
是一種有強烈數學基礎 (基於 λ演算) 的函數式語言。

LISP有很多種方言，各個實作中的語言不完全一樣。1980年代 Guy L. Steele 編寫了Common Lisp 試圖
進行標準化，這個標準被大多數直譯器和編譯器所接受。在Unix/Linux系統中，還有一種和 Emacs 一起的 
Emacs Lisp（而Emacs正是用Lisp作為擴充功能語言進行功能擴充功能的）非常流行，並建立了自己的標準。

LISP語言的主要現代版本包括 Common Lisp 和 Scheme。

雖然 LISP 是個通用型的語言，但是最常被使用在人工智慧領域，以下是一個用 LISP 計算 n! (n 階層) 
函數的程式範例：

```LISP
 (defun factorial (n)
   (if (<= n 1)
       1
       (* n (factorial (- n 1)))))
```

即便現在 LISP 的使用者並不像 Java, Python, Ruby 等語言那麼多，但仍然有許多人在使用，像是 <http://lisp.tw/> 
這個網站中就介紹了很多 LISP 相關的程式與資訊，

如果您現在想使用 LISP 的話，像是 [Allegro Common Lisp]、[LispWorks]、[GNU Common Lisp] 等，您可以自行選用
適合的開發環境，以便學習或使用 LISP 語言。

### 參考文獻
* 維基百科:[約翰·麥卡錫](https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%BF%B0%C2%B7%E9%BA%A6%E5%8D%A1%E9%94%A1)
* Wikipedia:[Lisp](https://en.wikipedia.org/wiki/Lisp_%28programming_language%29)
* [GCL - an implementation of Common Lisp](http://www.gnu.org/software/gcl/)
* <http://lisp.tw/>
* 維基教科書:[Lisp 入門](http://zh.wikibooks.org/zh-tw/Lisp_%E5%85%A5%E9%96%80)
* [ANSI Common Lisp 中文翻譯版](http://acl.readthedocs.org/en/latest/)

[Allegro Common Lisp]:http://www.franz.com/downloads/clp/survey
[LispWorks]:http://www.lispworks.com/products/lispworks.html#personal
[GNU Common Lisp]:http://www.gnu.org/software/gcl/

【本文由陳鍾誠取材並修改自維基百科】


