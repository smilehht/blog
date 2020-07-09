# 前端调试

控制面板快捷键： Command + Option + I（Mac）或 Control + Shift + I（Windows，Linux）


## css调试

**1.查看css**

<img src='~@imgUrl/debug/css.png' width='50%' >

**2. 查看伪元素样式**

<img src='~@imgUrl/debug/pseudo.png' width='50%' >

**3.添加或修改css样式**

1.直接在原class中添加新样式
2.在新class中添加新样式
3.复选框切换样式声明

<img src='~@imgUrl/debug/style.png' width='50%' >



**4.快捷键修改声明值**

- 编辑声明的值时，可以使用以下键盘快捷键将值递增固定量

```
步长1：Up 将值更改为1
步长0.1：Option+ Up（Mac）或Alt+ Up （Windows，Linux）增加0.1。
步长10：Shift+ Up增加10。
步长100：Shift+ Command+ Up（Mac）或 Shift+ Page Up（Windows，Linux）将值增加100
```

- 快速修改盒模型尺寸



**查看当前元素的事件**

- Ancestors：当前选定节点 + 祖先节点的事件(冒泡)
- Framework listeners：安装在chrome上的插件的事件

**5.使用Coverage选项卡查看CSS和js的使用情况**

打开Coverage方法：
- 打开devtools
- 点击右上角...
- More tools 
- Coverage

快捷键：Command+ Shift+ P（Mac）或 Control+ Shift+ P（Windows，Linux，Chrome OS），输入coverage


## js调试
 - 输出测试
 - 断点调试
     - DOM断点调试
     - js执行断点调试
     - http request 断点调试

**1. 输出调试**

alert、[console](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)、document.write、innerHTML等
 
**控制台**

快捷键： Ctrl+Shift+J (Windows / Linux) 或者 Cmd+Opt+J (Mac)。

- console.log( )
- console.error( )
- console.warn( )
- console.info( )
- console.table( )
- console.time( )、console.timeEnd( )
- console.clear( )
- console.assert( )
- console.group( )、console.groupEnd( )
- console.count( ) 
- copy( )
- 。。。

**格式化输出**

- console.log('%c不一样的console.log', 'font-size: 20px; color: blue');

<img src='~@imgUrl/debug/format.png' width='50%' >

**2.断点调试**



<img src='~@imgUrl/debug/sources.png' width='50%' >


**断点**
- 普通断点
- 条件断点

debugger断点调试

<img src='~@imgUrl/debug/disturb.png' width='50%' >

- Watch：查看自定义表达式的值
- Call stack ：调用栈
- Scope：作用域
- Breakpoints：管理代码断点
- XHR/fetch Breakpoints：[http 请求断点](https://re.m.jd.com/ks/item/999992.html)
- DOM Breakpoints：DOM断点

### source面板
 Control + P or Command + P (Mac)
<img src='~@imgUrl/debug/openfile.png' width='50%' >


## network 

查看资源加载情况

- 设置是否启用缓存
- 网络加载速度
- 捕捉页面渲染瞬间

**Filter 文本框：过滤请求**

**Group by frame**
http://www.w3school.com.cn/tiy/t.asp?f=html_iframe

**在页面加载期间捕获屏幕截图**：Capture screenshots 捕获屏幕截图 

```
1、将鼠标指针悬停在屏幕截图上以查看捕获屏幕截图的时间点。 Overview 窗格中将显示一条黄线。
2、点击屏幕截图的缩略图以过滤捕获屏幕截图后出现的任何请求。
3、双击缩略图进行放大。
```
<img src='~@imgUrl/debug/screenshot-hover.png' width='50%' >



**跨页面加载保存请求**: Preserve log 复选框

<img src='~@imgUrl/debug/preserve.png' width='50%' >


**Disable cache**：停用浏览器缓存 —— 模拟新用户的体验

**Network Throttling**：模拟 2G、3G 和其他连接速度

**手动清除浏览器缓存、cookie**

<img src='~@imgUrl/debug/clear-browser-cookies.png' width='50%' >


**Hide data URLs**：隐藏数据网址，data: 开头的所有请求都是数据网址

**添加或移除列**
<img src='~@imgUrl/debug/add-column.png' width='50%' >

**[waterfall说明](https://developers.google.com/web/tools/chrome-devtools/network-performance/understanding-resource-timing)**

- Queueing：请求排队
- Stalled：请求等待发送所用的时间
- Waiting(TTFB)：浏览器正在等待响应的第一个字节。 TTFB 表示 Time To First Byte（至第一字节的时间）。此时间包括 1 次往返延迟时间及服务器准备响应所用的时间。
- Content Download：浏览器正在接收响应。



## 性能调试

tips：无痕模式下分析，快捷键ctrl + shift + N

- 查看页面渲染过程
- 统计页面各个环节的耗时
- 模拟各个配置下运行情况

<img src='~@imgUrl/debug/chromePerformance2.png' width='50%' >



<img src='~@imgUrl/debug/overview-annotated.jpg' width='50%' >


- FPS(帧率)：绿色竖线越高，FPS越高，红色的话表示长时间帧，很可能会出现卡顿，所在测试的时候要特别注意红色部分
- CPU：CPU的使用情况，面积图指示消耗 CPU 资源的事件类型
- NET：每条色彩横线表示一种资源，越长表示检索资源所需的时间越长

#**三条竖线：**
- 蓝色：DCL —— DOMContentLoaded
- 绿色：FCP —— First Contentful Paint
- 红色：L —— Load

**[页面生命周期](https://www.jianshu.com/p/3b581af02ebf)：**
- DOMContentLoaded
- load
- beforeunload/unload 

**document.readyState**
- loading(加载中)
- interactive(完成加载，文档已被解析)
- complete(所有资源完成加载，load事件将被触发)

### 火焰图

<img src='~@imgUrl/debug/js-profile.png' width='50%' >


<img src='~@imgUrl/debug/pai.png' width='50%' >

* 蓝色(Loading)：网络通信和HTML解析        
* 黄色(Scripting)：JavaScript执行     
* 紫色(Rendering)：样式计算和布局，即重排     
* 绿色(Painting)：重绘      
* 灰色(other)：其它事件花费的时间       
* 白色(Idle)：空闲时间


<img src='~@imgUrl/debug/20180324151603563.png' width='50%' >

* Send Request                发送网络请求时触发
* Receive Response         响应头报文到达时触发
* Receive Data                 请求的响应数据到达事件，如果响应数据很大（拆包），可能会多次触发该事件
* Finish Loading               网络请求完毕事件
* Parse HTML                   浏览器执行HTML解析
* Update Layer Tree        
* Paint                              确定渲染树上的节点的大小和位置后，便可以对节点进行渲染
* Composite Layers         合成层；当渲染树上的节点涂鸦完毕后，便生成位图（bitmap），浏览器把此位图从CPU传输到GPU




**模拟移动端加载过程**
- 设置网络状态
- 设置CPU倍速
<img src='~@imgUrl/debug/cpu.png' width='50%' >


## Application
缓存 + 离线存储

* 查看和修改本地存储与会话存储。
* 检查和修改 IndexedDB 数据库。
* 对 Web SQL 数据库执行语句。
* 查看应用缓存和服务工作线程缓存。
* 点击一次按钮即可清除所有存储、数据库、缓存和服务工作线程。

**manifest**：离线缓存
**service worker**： Web Worker，可以拦截网络请求、缓存资源或从缓存中检索资源、传递推送消息
**clear storage**：清空所有数据

**IndexDB**
- 数据库的安全源、名称和版本
<img src='~@imgUrl/debug/idb-db.png' width='50%' >

- 查看其键值对
<img src='~@imgUrl/debug/idb-kvps.png' width='50%' >

**Web SQL**
- 用SQL来操纵客户端数据库
<img src='~@imgUrl/debug/web-sql-console.png' width='50%' >


## Security
调试当前网页的安全和认证等问题并确保您已经在你的网站上正确地实现HTTPS

<img src='~@imgUrl/debug/security.png' width='50%' >

- not secure
<img src='~@imgUrl/debug/nonsecuremain.png' width='50%' >

- not secure （混合内容）：页面的主要来源是安全的，但页面请求来自非安全来源的资源
<img src='~@imgUrl/debug/mixedoverview.png' width='50%' >



## Audits
对当前网页进行网络利用情况、网页性能方面的诊断，并给出一些优化建议

<img src='~@imgUrl/debug/audits-2.png' width='50%' >

## 性能测试网站
- lighthouse
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [pingdom](https://tools.pingdom.com/)
- 。。。



##  h5页面调试
- Chrome DevTools 模拟手机调试
- Chrome 远程调试(Android) + safari远程调试(iPhone)

<img src='~@imgUrl/debug/screenshot.png' width='50%' >

- fiddler + WiFi + 手机

- Eruda —— 手机网页前端调试面板，[npm](https://www.npmjs.com/package/eruda)，[预览](https://eruda.liriliri.io/)

<img src='~@imgUrl/debug/link.png' width='50%' >

<img src='~@imgUrl/debug/WechatIMG28.jpeg' width='50%' >

- weinre远程调试工具：不能调试JS,也不支持打断点调试，仅能用于调试页面样式，使用场景有限

## 其他调试
- 模拟设备感应器：More tools -> Sensors



### 参考文章
- https://developers.google.com/web/tools/chrome-devtools/open
- https://blog.csdn.net/userkang/article/details/85161244
- https://blog.csdn.net/userkang/article/details/85252644
- https://www.jianshu.com/p/b6f87bac5381
- https://www.jianshu.com/p/a43417b28280

