## 程式短訊：PROLOG 語言與開發工具

說到了 LISP 就不能不談談 PROLOG，這兩個語言在人工智慧領域一直都具有非常重要的地位。
LISP 是以 λ 演算為基礎的函數式語言，而 PROLOG 則是以邏輯的 Horn Clause 推論為理論
根據的邏輯式語言。

PROLOG 最初被運用於自然語言等研究領域。現在它已廣泛的應用在人工智慧的研究中，
它經常被用來建造專家系統、自然語言理解、智慧知識庫等方面的程式。

Prolog 語言最早由 Aix-Marseille 大學的 Alain Colmerauer 與 Phillipe Roussel 等人於 60 
年代末開始研究開發，並於 1972 年正式誕生。

Prolog一直在北美和歐洲被廣泛使用。日本政府曾經為了建造智慧電腦而用 Prolog 來開發 ICOT 
第五代電腦系統。在早期的機器智慧研究領域，Prolog曾經是主要的開發工具。

80年代 Borland 開發的Turbo Prolog，進一步普及了 Prolog 的使用，1995年確定了ISO Prolog標準。

現在若您想使用 Prolog 的話，有很多種開發環境可供選擇，像是 BProlog，GNU Prolog, Quintus, 
SICStus, Strawberry、SWI-Prolog、YAP-Prolog 等等。

以 SWI-Prolog 為例，您可以從以下網站中下載此一開發環境：

* <http://www.swi-prolog.org/>

以下是筆者下載並安裝 SWI-Prolog 的過程，有興趣的讀者可以參考看看：

* SWI Prolog 的下載與安裝過程 -- <http://youtu.be/beIL207y7rI>

以下是一個 prolog 的簡易程式，用來判斷某些人之間是否有「親-子」關係或「兄弟」關係的。

檔案：parent.pl

```prolog
mother_child(trude, sally).
 
father_child(tom, sally).
father_child(tom, erica).
father_child(mike, tom).
 
sibling(X, Y)      :- parent_child(Z, X), parent_child(Z, Y).
 
parent_child(X, Y) :- father_child(X, Y).
parent_child(X, Y) :- mother_child(X, Y).
```

當您寫完上述程式之後，就可以存檔並執行，然後開始詢問某些邏輯問句，Prolog 系統將會回答您，例如：

```prolog
?- sibling(sally, erica).
Yes
```

如果您想要執行上述的 parent.pl 程式，然後開始詢問問題的話，可以先用任何編輯器，編好 parent.pl 的
內容並存檔，此時 parent.pl 這個檔案的圖示會是一隻貓頭鷹，您點選兩下後就會呼叫 SWI-Prolog 來執行它。
接著您就可以輸入問句了，以下是筆者的執行過程錄影。

* 在 SWI Prolog 中載入並執行程式 -- <http://youtu.be/xzz2L30T03g>

在筆者學習程式的漫長歷史當中，一直認為 PROLOG 是個相當奇特的語言，因為很少程式語言是從「邏輯推論」
這個角度切入的，這讓 PROLOG 成為用來撰寫知識型專家系統的首選語言，因為 PROLOG 天生就是邏輯推論高手阿！

最近在 [程式人雜誌社團] 中，網友「KuoE0」貼了一篇 [prolog 入門] 的文章，有機會我們將在後續的雜誌中
刊登這一系列的文章，請讀者拭目以待！

### 參考文獻
* 維基百科:Prolog -- <https://zh.wikipedia.org/zh-tw/Prolog>
* Wikipedia:Prolog -- <https://en.wikipedia.org/wiki/Prolog>
* [prolog 入門]-- <http://kuoe0.ch/2288/prolog-tutorial/>

[prolog 入門]:http://kuoe0.ch/2288/prolog-tutorial/



【本文由陳鍾誠取材並修改自維基百科】


