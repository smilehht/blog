---
layout: post
title: full-screen
date: 2019-04-13 14:16:37
tags:
    - full-screen
---
### 启动全屏模式
可以通过Fullscreen API中的requestFullScreen方法来实现。由于该方法还未标准化，因此还需要加上特定浏览器前缀。

<!-- more -->

```
// 找到正确的方法  
function launchFullScreen(element) {  
  if(element.requestFullScreen) {  
    element.requestFullScreen();  
  } else if(element.mozRequestFullScreen) {  
    element.mozRequestFullScreen();  
  } else if(element.webkitRequestFullScreen) {  
    element.webkitRequestFullScreen();  
  }  
}
// 启动全屏模式  
launchFullScreen(document.documentElement); // 整个页面  
launchFullScreen(document.getElementById("videoElement")); // 单独元素
```
### 取消全屏模式
```
function cancelFullscreen() {  
  if(document.cancelFullScreen) {  
    document.cancelFullScreen();  
  } else if(document.mozCancelFullScreen) {  
    document.mozCancelFullScreen();  
  } else if(document.webkitCancelFullScreen) {  
    document.webkitCancelFullScreen();  
  }  
}
// 取消全屏  
cancelFullscreen();
```
需要注意的是，cancelFullScreen只被文档对象调用，无需单个元素调用

### 全屏属性和事件
document.fullScreenElement：当前全屏显示的元素。
document.fullScreenEnabled：判断浏览器是否支持全屏。
fullscreenchange事件：全屏状态改变事件。