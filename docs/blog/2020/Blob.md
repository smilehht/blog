# Blob

## 1、Blob是什么

Blob 对象表示一个不可变、原始数据的类文件对象。

[File](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。(MDN)

## 2、使用方法

### (1)、创建实例
创建blob实例，new Blob(arr, options)，arr是是一个由ArrayBuffer、 ArrayBufferView、 Blob、 DOMString 等对象构成的 Array。options为object，默认属性type和endings
```js
let blob = new Blob(['blog'], {type: 'text/plain'});
```

### (2)、属性
- Blob.size：Blob 对象中所包含数据的字节大小
- Blob.type：MIME 类型，即为创建实例时options的type

### (3)、方法
- slice([start[, end[, contentType]]])：返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。
- stream()：返回一个能读取 blob 内容的 ReadableStream。
- text()：返回一个 Promise 对象且包含 blob 所有内容的 UTF-8 格式的 USVString。
- arrayBuffer()：返回一个 Promise 对象且包含 blob 所有内容的二进制格式的 ArrayBuffer。


## 3、应用场景
### (1)、分片上传
```js
// file对象继承blob对象
let blob = document.getElementById("file").files[0];

let chunkSize = 1000;
for (let start = 0; start < blob.size; start += chunkSize) {
    // 对每片内容进行上传
    let chunk = blob.slice(start, start + chunkSize + 1);

    const fd = new FormData();
    fd.append("data", chunk);

      // 发送请求
    ajax({
        url,
        data: fd
    });
}
```

### (2)、下载文件、地址隐藏
```js
let link = document.createElement('a');
//  设置下载文件名
link.download = 'text.txt';
// 文件内容
let blob = new Blob(['这里是文件内容']);
// 链接以createObjectURL方式，避免显式暴露
link.href = window.URL.createObjectURL(blob);

// 模拟点击事件
link.click();

// 释放url，节约内存
URL.revokeObjectURL(link.href);
```

### (3)、http请求数据存储到 Blob 对象
```js
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'blob';
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.response);
    }
}
```
