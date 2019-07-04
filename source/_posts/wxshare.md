---
title: 微信分享朋友、朋友圈
date: 2019-06-08 12:11:44
tags:
    - 微信分享
---

微信分享朋友、朋友圈的探索也是一部血泪史，充满了焦虑、迷茫、辛酸。

微信是一款常用的社交工具，在微信中通过分享传播来提高PV/UV是一种重要的营销方式。

<!-- more -->

## 微信分享的步骤

* 公众号绑定域名（这个域名值页面的域名，而非后端接口的域名，因为分享出去的是前端链接）

* 引入JS文件（http://res2.wx.qq.com/open/js/jweixin-1.4.0.js ）

* 通过config接口注入权限验证配置

```
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [] // 必填，需要使用的JS接口列表
});
```


* 分享好友，分享朋友圈

```
wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    
    // 分享给好友
    wx.updateAppMessageShareData({ 
        title: '', // 分享标题
        desc: '', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 设置成功
        }
    })

    // 分享朋友圈
    wx.updateAppMessageShareData({ 
        title: '', // 分享标题
        desc: '', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          // 设置成功
        }
    })
    
});
```

### 问题
经过说明文档的一系列设置，觉得应该没问题的，然而事实跟预想不太一样。在Android下能分享成功，在iOS下分享不成功。

在获取签名的时候需要将当前页面的url传给后端，然后后端生成wx.config所需要的各种参数。

* 问题一

在开发中页面使用的history的路由模式，经过查验发现iOS对于push路由的解析方式不同，导致获取当前页面的url是上一个页面的而非分享页面，为了解决这个问题，在跳转到分享页时通过window.location.href的方式跳转，而非采用框架中跳转路由的方法。

* 问题二

iOS在分享过程中并不会出现每次都分享成功的情况。经过调试发现（wx.config中debug字段设为true），wx.config没有问题，wx.updateAppMessageShareData的方法执行不成功，时而成功，时而失败，为了解决问题，在网上搜索了各种解决问题方案，都不太好使。由于项目希望尽快上线，所以在处理的时候采用了兼容性方案，如下：

```
function wxH5Share(config) {
    /* 
    config示例：
    {
        title: 'xxxxx',
        desc: 'xxxxx',
        link: 'https://xxxx',
        imgUrl: 'https://xxxx'
    }
    */
    if (!config) {
        return;
    }
    let {title, desc, link, imgUrl} = config;
    if (!(title && desc && link && imgUrl)) {
        return;
    }
    
    wx.ready(() => {
        // 设置分享朋友圈标题内容图片
        if (wx.onMenuShareAppMessage) {
            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                fail: () => {
                    // 如果wx.onMenuShareAppMessage失败，则用updateAppMessageShareData分享
                    if (wx.updateAppMessageShareData) {
                        wx.updateAppMessageShareData(config);
                    }
                }
            });
        } else if (wx.updateAppMessageShareData) {
            // 如果wx.onMenuShareAppMessage不存在，则用updateAppMessageShareData分享
            wx.updateAppMessageShareData(config);
        }
        
        // 设置分享朋友圈标题内容图片
        if(wx.onMenuShareTimeline) {
            wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                fail: () => {
                    // 如果wx.onMenuShareTimeline失败，则用updateTimelineShareData分享
                    if (wx.updateTimelineShareData) {
                        wx.updateTimelineShareData(config);
                    }
                }
            });
        } else if (wx.updateTimelineShareData) {
            // 如果wx.onMenuShareTimeline不存在，则用updateTimelineShareData分享
            wx.updateTimelineShareData(config);
        }
    });
}
```

在分享时，先采用老的分享接口wx.onMenuShareAppMessage，如果老的分享接口不存在或者分享失败，则采用新的分享接口，这样双重验证，保证了在绝大多数情况下能分享成功。

以上的问题困扰了好几天，然后通过读文档，搜索问题，每个环节进行验证，不断探索解决方案，最后终于实现了所需的功能，长吁一口气，终于好了。
