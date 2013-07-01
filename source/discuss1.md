## 程式語言討論 – 除了 C++ 以外的快速物件導向語言

2013 年 6 月 15 日，網友於 [程式人雜誌社團] 分享的一篇文章引發了討論

* facebook 分享連結： <https://www.facebook.com/groups/programmerMagazine/permalink/658912237458829/>

> 陳○○：：不知道有沒有人跟我一樣，很不喜歡 C++，但是又需要速度與 OO 當然 Java 跟 Python 都是我的愛，
C 也很棒，但是缺了好的 OO (我曾試過用 C OO 化，但相對的，看起來變複雜了）
> 
> 因此我最近也在搜尋，有沒有編譯出來比較快的語言，阿我的平台都是在 linux 所以我看到了 Vala 感覺上還不錯，
當然也在看 Go 跟 Obtivec-C 不知道有沒有人想分享一下這些語言的特色呀？當然我還是希望 linux 支援度優先的語言 ^^
> (我是不太喜歡 Go 宣告的 type 是擺在後面啦）<https://live.gnome.org/Vala/>

雖然這個問題感覺有點困難，社團的朋友們還是提出了很多的可能，如下回應所示：

* 徐○○： Linux 支援度？那Objective-C你還是跳過好了
* 鄭○○： Java 不適合你用嗎?
* 陳○○： 喔 Java 呀，很適合呀，但有時候又想要一個編譯成機器碼的語言
* 陳○○： 感覺 Vala 還蠻適合我的理想，因為我實在恨透了 C++ 中，一個 class 分成指標要 new 然後非指標不用 new
一下子是 A->a 這樣抓東西出來 一下子 A.a ，這真的是為了相容 C ，而變形的東西
* T○○： 可是其實c++的programming style中這不太會混用的
* 鄭○○： 不太覺得這個例子裡，C++ 有什麼不好耶......
* S○○： 可以試試看gcj
* 鄭○○： 應該說，需要手動記憶體管理的都會有這種 syntax......
* 鄭○○： 還是用 (*pA).x 就會和 A.x 一致呢?
* 陳○○： 可能是我有被 python 的哲學小小影響，同樣的事情，只有一種方法作到
* J○○： C++你可能需要去看一下一些人的程式碼，學習他們怎麼管理跟編程習慣，有些命名原則跟習慣可以讓你減少很多麻煩，還有事前的規劃也很重要，只要知道物件之間的相依關係如何，就連繼承也不太會搞混，甚至於整個專案的效能都會提高很多。不過我C++幾乎忘光光了，以前是有研究過std的vector動態陣列的類神經網路程式碼，那時候套用了一些別人的設計模式，效能比我原先寫的還要高3倍。
* 鄭○○： Python 這種不需要自己管記憶體的語言，吃那麼好，語法當然不用分啊。
* 陳○○： 這個嘛～我當然知道要去看人家的 coding standard 啦，喔！還有記憶體管理問題，語法跟記憶體管理應該可以分兩邊來看的說，要作到記憶體管理，語法也是可以設計的。
* 陳○○： 還有一件事 像是 constructor，變數初始化可以放在 xxx() : a(0), b(0) {} 但是也有人喜歡 xxx() {a = 0;
b = 0;} 總覺得這是同樣的事情，如果真的說這樣效能有差，也可以統一只用一個語法，然後實現的時候用效能最好的那個
* 陳○○： S○○： gcj 似乎出到 1.5 就沒動靜了
* T○○： list並不等價於寫在constructor中喔
* 鄭○○： 這完全不一樣啊。前者是用 a, b 的 constructors，後者是讓 a, b create 出來之後再 assign 值。用法不同。
* 陳○○： 所以這就是我說的，如果效率上有差，或是動作有差，但既然都叫做 constructor 了，應該可以分辨出語法，抓出 constructor 來做同樣的事情
* 鄭○○： 不對，後者不是 constructor，只是單純的給值而己。
* T○○： 問題是這種不確定的行為在許多狀態是無法接受的 特別是記憶體受限的時候，暫存的物件多生一個少生一個都差很多
* 鄭○○： C++ 不幫你做太多事情。事實上已經很多人抱怨它做很多事情了。
* 鄭○○： C++ 讓你對物件生成，記憶體配置有很高的控制權。你可以很清楚知道物件是用什麼方法配置與初始的。其代價就是寫錯要自己負責。
* T○○： 為了把記憶體管理的複雜hide起來,java和C#(.net),python都作了很多很辛苦的事情的...
* T○○： 而GC是非常昂貴的成本 在許多狀況下無法忍受
* 陳○○： 我知道那是 assign 啦，這不是批鬥我 c++ 用不深或怎麼樣的，我是在探討優美的程度，java 之所以出現，不也是抓出他們認為 C++ 令人詬病的地方，然後縮減嗎？如果要什麼都管的話，我會用 C，
但我現在希望探討的是語法的美感，而不是實際受限的問題，畢竟 C++ 多了一個 OO，但這很需要美感呀
* 鄭○○： 在這邊舉的例子，說實在都不是 C++ 語言的缺點。
* T○○： c++設計上就是為了讓施工的人可以作自己的鑽頭啊...
* 鄭○○： C++ 的美感是靠 programmer 用 coding style, convention 來維護的。
* T○○： 我想你不會想用C實現COM之類的東西的.....
* 鄭○○： 要說美感問題，我覺得 C++ 的 enum hacking 才是比較不美的例子。
* 陳○○： OK！不過這都不是我想探討的方向啦，不然 Go 也不會出現
* 陳○○： 像 python 就根本不太需要 conding standard 就能讓人很舒服, 所以我在找，有沒有方向是跟 C++ 差不多，讀起來舒服的語言。
* 鄭○○： Go 有 GC 啊......
* 陳○○： 好吧，我的錯，先不要糾結在 GC 上, 我相信不 GC 也能有美感的, 像我現在找的 Vala 他也有 destructor
* 鄭○○： 好吧，我以前有用過一陣子 pascal
* T○○： 使用者就要負責把最髒的東西處理好啊...可以參考webkit底層自己實現的跨平台的smartpointer
* 陳○○： 我也蠻喜歡 pascal 的，, 不過 begin, end 到時候多起來可真的就不好看了, 不然真的很美
* T○○： delphi的object pascal?
* 陳○○： 我是用 fpc
* 鄭○○： 然後我不知道 Obj-C 在 Linux 上表現怎麼樣。
* 鄭○○： Free Pascal http://www.freepascal.org/
* 陳○○： 因為單純看 Vala 真的很像 C++ 的語法（他出現的目的就是不想用 C++，然後最後會轉成 C 然後套上 GObjC，但是重點是他的語法) 所以想提出來探討看看，https://live.gnome.org/Vala/Tutorial 。
鄭○○： Objective-C on Linux http://stackoverflow.com/questions/7133728/objective-c-in-linux
* 陳○○： 然後目前我在看，都還沒看到我剛剛講的，我不喜歡的那些, 看來他們是真的也不喜歡我講的那幾段語法
* T○○： 老實說這繞來繞去最後都一個樣耶XD 這不是C#嗎, 
* 陳○○： 我其實更希望的是更像 java ，我偏向砍功能, 只是 gcj 還在 1.5, 還有希望不是靠 vm 跑.
* T○○： java正在往c#靠啊...
* 陳○○： 有同感，我希望能夠有個語言擁有 java 的初衷
* 鄭○○： :Although Vala manages the memory for you, you might need to add your own destructor if you choose to do manual memory management with pointers (more on that later) or if you have to release other resources. "
* 鄭○○： 因為有 gc 才不用管 mem 嘛。
* T○○： 我不覺的那有甚麼不好啊...我個人非常喜歡C#
* T○○： 雖然只是reference counting, 應該是smartpointer
* T○○： 喔 他是用gnu oc runtime當sandbox啦
* 林○○： 把 jvm 當 lib 看待就好
* T○○： jvm不是lib 是sandbox
* 鄭○○： 我是說，你不喜歡的語法，正是因為沒有 GC 才不得不存在的。你拿有 GC 的語言出來，當然不需要這些語法。
* 陳○○： 好吧 ，又跳回原點了，看來 pascal 似乎才符合可能是我想要的
* 鄭○○： Pascal library 很少喔......
* 陳○○： 我也沒打算用他啦，只是想問有沒有用過較多語言的大大, 有沒有不用 vm 又有 oo 語法優美，有 GC 可的語言
意者私訊 ㄏㄏ～
* T○○： 我說...就算pascal還是有.還有^.的差別啊
* T○○： 除非你 pass object 通通不用 pointer
* 陳○○： 嗯，我就是因為 ^ 一下子在前一下子在後, 還有 begin, end 海，所以才沒打算
* T○○： 有gc就是下面有sandbox啊...不然誰幫你gc呢
* T○○： 只是那個sandbox怎麼存在就是了
* 鄭○○： LiveScript + node.js ?
* 陳○○： OK 我這幾天去看看
* 鄭○○： C# ? http://www.mono-project.com/Main_Page
* 陳○○： mono 有在用
* T○○： 說真的已"需要compile成bytecode" C#吧
* 鄭○○： Ruby ?
* 鄭○○： Scala ?
* T○○： python....
* 陳○○： 我想找的不是到 VM 那麼大顆，或者是 interpreter
* 陳○○： 這樣的話 ，我本來就很愛 python, java了, vala 剛剛看了，他並沒有說用到整顆 VM, 應該頂多是 GC 在背景跑
* 鄭○○： Lua ?
* T○○： lua本身甚麼都沒有啊...XD
* 陳○○： 這些應該都還算是 interpreter 去跑的 script
* T○○： 那只有C#了
* 陳○○： 好吧 感謝各位，有點晚了，驚擾到各位了，謝謝大家陪我尋找
* 鄭○○： 把這些語言想一遍還蠻有意思的。
* 盧○○： GCJ 根本要作古了吧.....http://gcc.gnu.org/ml/java/2013-01/msg00001.html
* 盧○○： 上面提的幾個Scripting Lang備後幾乎都有interpreter在跑吧 = =", 用C#背後也是.net Framework架在CLI上跑，free lunch is over~
* 陳○○： 所以我才說沒有要採用 VM 但可以接受 GC, 所以目前都沒看到其他合適的語言，目前還是 Vala 和 Go
* Unri Gooper 之前曾經想過有沒有能編譯成native machine code、同時又有優美的OOP語法、大量好用的standard lib的程式語言（或許這是原PO原文的重點）, 不過把這個問題拿去問大學教授，得到的答案是：
只有聽過三種能編譯出native code的語言，C、C++、（更正）Fortran
* 不知道在這些老牌語言發展這麼多年之後，有沒有能編譯成native code的「新生」語言
* 陳○○： 沒錯，我就有跟大大一樣的想法, 所以這些語言才生出來，只是前面幾位大大認為 GC 這點似乎就無法像 C++ 一樣了, 但小弟我認為這是可以接受的東西，我只是要個 native 的語言, 然後消除不好看的語法
* E○○： 繼續使用C語言中......XD
* 鮑○○： http://www.mono-project.com/Mono_LLVM
* 傅○○： 用Vala來寫GLib-based的程式很方便，內建GObject，D-Bus，Async method 等，同時又引入一些額外的feature，如Closure。然後，澄清一下，Vala並沒有GC的機制，它是用GObject裡的reference counter來管理物件﹙也可以不用，自己管理﹚，章節4.3。在Vala/Tutorial裡有章節﹙9, 10﹚在介紹Weak reference和Ownership的觀念，還有一篇文章特別來介紹Vala/ReferenceHandling。我個人也是覺得C++做太多事了，所以，比較喜歡C，一切掌握在自己手裡。但，想一想其實C也有一樣的問題，只是比C++少。Python是一個生產力很高的PL，但，不代表不需要coding standard。不管什麼PL都要，不然，多人合作開發會有很痛苦的經驗。用了幾個programming language﹙以下簡稱PL﹚後，認為美感來源不是PL，PL只是讓工程師用不同的思維來思考問題的方法。美感的來源是日後檢視原始碼時的公眾評價，以及工程師主觀的認定。最後，不管是C/C++，Java，Scala，Python，Ruby，Google Go，Java Script，PL好不好用，取決於用它的人，能不能接受PL背後的哲學，以及善用它built-in features。
* Y○○： 我個人也不喜歡C++...都只用C或是Java
* 黃○○： 如果是你自己創造新語言，難保你不會步入c++的後塵。
* T○○： 其實昨天就說了 那些"不好看"的語法能不見就是因為有人幫忙把骯髒事情作掉了, 如果你需要控制這些東西 那就沒有好不好看的問題
* T○○： 我有看到 所以我才說vala用的是smart pointer
* T○○： 更嚴格來說 那其實就是java/c#等等使用的機制, 只是沒有一個bytecode層次的東西幫你再抽像化一次記憶體管理
* 吳○○： Scheme.......XD
* S○○： 其實你一開始談到的需求是"速度"與"OO"，談到速度其實就是你在意程式的效能不是嗎？既然牽扯效能那麼你應該看的不只是語言本身，當然C/C++甚至是組合語言是目前執行速度最快的，但是你的執行硬體等級、作業系統調較、若有VM那麼VM本身的調較、系統程式的寫法(有沒用多執行緒寫法來加速)與架構，這四個面向是否有全面的兼顧到呢？千萬別只是單方面認為程式語言本身就是效能的保證，因為程式員本身的能力還是效能的最大因素，畢竟程式是人寫出來的。以上是個人小小的看法！
* 林○○： bytecode層次的記憶體管理不曉得要管理到什麼層次, 如果要像 C 的變數存放, 呼叫DLL用的JNA其實就能做到(當然效能是代價), 但如果要管到function handle, c#有delegate, 而 JAVA 則必須要用 interface 包起來變成物件
* 陳○○： 我的速度，大概就是指，可以用 native 的速度來執行，用 VM 去跑，速度下滑很多。我不是要求到兩種 native 在比速度，native 跟 native 比，應該是不會有 native 跟 vm 差得多
* 陳○○： 還有我不希望又跳到硬體層面去思考，或許各位用太久的 C++，語法層次已經被 C++, 限制了，要作到同樣的事情，理應也能有很棒的語法。
* 鄧○○： 就是習慣而已，C派跟J派已經吵很久了。C++卡在一個很尷尬的位置上。C++已經不能單從C++去看了，要連同STD，Boost，以及他的下游函式庫一起比較。這樣與其他後起之秀比起來才客觀。單看C++就只能看到二十到三十年前訂下來的規範。當然會覺得他落伍，只是我們是從二十到三十年後的角度去看。C 1972出世, C++ 1983出世, Java是1995出世.
* T○○： c++11早就普及了吧
* 鄭○○： C++11 還沒"那麼"普及。
* 陳○○： 至少 g++ 還沒預設
* 鄭○○： 其實我最喜歡 Perl 
* 陳○○： 說到 Perl ，問一下 Perl 6 會上去主線嗎？還是打算一直當作不同的分支下去？？
* 鄧○○： 去仔細看C++11多出來的那些語法.事實上沒那麼多人知道,會用,真的實用.
* 鄭○○： Perl 6 和 Perl 5 相當不同，但 Perl 5 已經從 Perl 6 得到不少東西。我相它們會一直不同下去。
* 鄭○○： 我知道最完整的 Perl 6 impl 是這個。 http://rakudo.org/
* 陳○○： 原來還是會不同下去呀，聽說 perl6 的語法跟 ruby 很像，雖然我是還沒研究過啦，害我有點興趣了，不過這根本篇主旨無關
* 盧○○： C11也多了很多「未普及」的語法(__generic這個例子最特別)
至於compiler flag,真要說的話，〝 The default, if no C language dialect options are given, is -std=gnu90 〞 FYI:gcc.gnu.org/onlinedocs/gcc/Standards.html 你沒告訴它足夠的資訊，它怎知要開哪個std？
* 吳○○： Larry 還是唐鳳曾經說過「Ruby 就是 OO 版的 Perl5」Perl6 會引入一些 FPL 的特性，所以使用上，只是語法像 Perl5，概念上則會不同
* W○○： 如果要有 C++ 的 performance (no VM)，又能夠有好很多的語言設計，我想到的是 OCaml。這是 ML-family 的語言，也影響到 F# 的設計。
* 至於 GHC 版的 Haskell 應該也是可以變得很 performant，但是我以前玩的經驗是 compiler 好像很慢 (對 lazy language 的 optimization 應該不易)。
* W○○： 我倒是比較喜歡type放後面, 那是另一種思考方式, 如果能推論型別的話, 不寫type更好.
* W○○： 如果會寫.net語言的話, c++11應該也很好入門, 很多特性都是一樣的.
* 盧○○： Wei-Ting Cho: 詳細希望
* W○○： 自己看 cheat sheet 啊！網路上不是有很多了.... http://isocpp.org/blog/2012/12/c11-a-cheat-sheet-alex-sinyakov 每次想到c++有async&get, 就覺得c++突然追上c#上, 還遠遠超過java...
* W○○： 其實就是這樣啊 XDD 我真的沒想要花時間說明什麼, 我也覺得想要知道什麼自己查就行了. 如果熟.net的人, 應該一看完cheat sheet後就能了解我說的, 當然我不是單指C++/CLI, 如果以C#來看也一樣. 像是std裡的新東西不就跟.net裡的一模一樣? 其他很多特性也都差不多.
* 陳鍾誠 推 Node.js
* 廖○○： 如果你3D引擎有興趣的話，可以把RenderWare拿來研究看看，他的程式碼就是C Base，沒有Class的包裝，但因為使用者大都為C++ Base，所以他就用C來模擬出C++物件導向的程式碼。
* P○○：推 LISP. 可以 compile 成 native code, 也有 OO.
6月16日 15:25來自手機 · 讚
* N○○： 的 D 語言，就是想要 C++ 的 native 優勢、又討厭 C++ 某些語言特性的人設計出來的。據我所知 Andrei Alexandrescu 也花了一些時間在上面。它也有自己的新問題，投入的人好像也很有限，我個人大概還是傾向於 C++11 吧。
* 陳○○： 其實剛剛看了一下 Novus Chou 兄說的 D 語言，之前就有聽聞，原來真的就是想改造 C++ ，只是 wiki 上面關於他的問題似乎真的蠻多的，說真的，這個 D 語言似乎真的聽到我的問題了。


我自己也常常覺得某些語言用得不夠順手，這幾乎是程式人都會碰到的一個問題，因此我從 Pascal, C, C++, Java, C#, R, JavaScript, Verilog 一路學過來，
發現其實各個語言都有其特色與好處。

即便在這個網路發達的時代，要找一個完全符合自己要求的語言仍然是不容易的，或許我們只能適應「程式環境」的現況，從現有語言當中挑一個順手的語言，然後在
必需要講求速度時，再用像 C/C++ 等語言來加速了！

【本文由陳鍾誠編採自 [程式人雜誌社團] 的討論訊息】

