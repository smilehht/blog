---
title: 复制到剪切板
date: 2019-06-08 10:49:21
tags:
    - copy
---

# 复制到剪切板

在工作中有一个业务场景是在移动端复制内容，而移动端可能会在Android、iOS和PC端的浏览器运行，这就要求复制内容这一功能具有很强的兼容性。

经过调研发现可以有以下两种方法可以实现复制功能：
* 使用clipboard.js实现复制
* 原生方式实现复制

<!-- more -->

## 1、clipboard.js

[clipboard.js](https://clipboardjs.com/)是非常强大的复制工具，可以实现复制、剪切，而且js包的体积也非常小，仅有3kb，使用起来也非常简单，兼容性也很好。

**使用方法**

```
<!--引入js-->
<script src="dist/clipboard.min.js"></script>

<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>

<!--js-->
new ClipboardJS('.btn');
```

**兼容性**

<img src="~@imgUrl/clipboard/1.png" />

**其他功能**

* 支持剪切功能

```
<!--剪切功能-->
<!-- Target -->
<textarea id="bar">Mussum ipsum cacilds...</textarea>

<!-- Trigger -->
<button class="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
    Cut to clipboard
</button>
```
* 支持事件反馈

```
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
```

尽管clipboard.js功能很强大，兼容性很好，但是还是引入了3kb的js包，如果能用原生的方式实现是不是更好呢？

## 2、原生方式

废话不多说，上代码：

```
<!--html-->
<input id="title1" type="text" value="复制功能测试" readonly="readonly" />

<!--js-->
function copyToClipboard() {

    var Url2 = document.getElementById("title1");//要复制文字的节点
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {//区分iPhone设备
        window.getSelection().removeAllRanges();//这段代码必须放在前面否则无效
        var range = document.createRange();
        // 选中需要复制的节点
        range.selectNode(Url2);
        // 执行选中元素
        window.getSelection().addRange(range);
        // 执行 copy 操作
        var successful = document.execCommand('copy');

        // 移除选中的元素
        window.getSelection().removeAllRanges();
    } else {
        Url2.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
    }
    
}
```
上述是在网络上找的复制代码的方式，经过测试发现在大多数机型下复制到剪切板是没有问题的，但是在iOS下的某些机型复制不成功，如iPhone 7、iPhone 8等其他机型。

 那么问题来了，如何才能复制成功呢？见以下代码：
 
```
<!--html-->
<textarea id='share-link' value='待复制的内容' className='share-link' readonly='readonly'>
</textarea>
            
<!--js-->  
function copyToClipboard() {

    let url = document.getElementById('share-link');//要复制文字的节点
    url.select(); // 选择对象
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {//区分iPhone设备
        url.setSelectionRange(0, 待复制的内容的长度)
    }
    document.execCommand('Copy'); // 执行浏览器复制命令
    
}
```

注意：原生方式需要对iOS系统做兼容处理，不然复制不上。示例中用的是textarea，亦可用input。

在实际项目开发中，我选择原生的方式，相比clipboard.js方式，原生的代码更简单，而且不用引入第三方库，理论上加载速度会更快，用户体验更流畅


## 3、总结
复制功能在很多场景都会用到，如今把自己踩得坑写下来，记录那些难忘的补坑经历，然后一步步的成长，享受这种痛并快乐的时光。

以上总结了两种复制到剪切板的方法，前者为第三方库，功能强大，可实现各种场景的复制功能。后者为原生方式，代码量并不多，可实现基本的复制功能。在写代码时可根据自己所需选择合适的复制方式。


