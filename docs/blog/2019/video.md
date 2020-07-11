---
title: video使用总结
date: 2019-09-01 10:42:16
tags:
    - video
---

# video使用总结

最近使用h5的video，遇到一些问题，总结一下。

## 1、video标签的属性

[video支持的属性](https://www.w3school.com.cn/tags/tag_video.asp)

<!-- more -->

**常用属性:**
- autoplay: 自动播放
- controls: 显示播放控件
- poster: 视频预览图
- preload: 视频预加载
- loop: 是否循环播放
- muted: 静音

## 2、video DOM对象属性和支持的事件

video DOM对象属于媒体对象，比一般DOM对象的属性多，[video DOM的属性、事件](https://www.w3school.com.cn/jsref/dom_obj_video.asp)


## 3、隐藏video控件
- 1、video标签去除controls属性
- 2、部分机型仍会显示video控件，可通过css来隐藏
``` css
video::-webkit-media-controls-enclosure {
    display:none !important;
    -webkit-appearance: none;
}
video::-webkit-media-controls-panel {
    display: none!important;
    -webkit-appearance: none;
}
video::-webkit-media-controls-panel-container {
    display: none!important;
    -webkit-appearance: none;
}
video::--webkit-media-controls-play-button {
    display: none!important;
    -webkit-appearance: none;
}
video::-webkit-media-controls-start-playback-button {
    display: none!important;
    -webkit-appearance: none;
}
video::-webkit-media-controls {
    display: none!important;
    -webkit-appearance: none;
}
```
除此以外，在部分机型通过上面两种方法也不能隐藏控件，隐藏控件仍然存在一定的兼容性


## 4、通过canvas的drawImage实现视频播放效果

对于不支持隐藏控件的浏览器，还有另一种解决办法，它的原理是将视频的每一帧通过canvas来展示，通过控制canvas来控制视频的播放，进而控制了canvas的显示，具体代码如下
``` html
<div class='video'>
    <video id='video' controls autoplay src="video.mp4"></video>
</div>
<div class='video'>
    <canvas id='canvas' class='canvas'></canvas>
</div>
<script>
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var stop;
    function animation() {
        if (video.paused) {
            // 视频暂停了
            cancelAnimationFrame(stop)
            return;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        stop = requestAnimationFrame(animation);
    }
    video.addEventListener('play', function() {
        animation()
    });
</script>
```

这种方式实现起来并不复杂，但是对于清晰的要求高的场合可能不太适用，通过drawImage会损失图片的清晰度，对于图片清晰度要求不高的可以考虑使用这种方法

## 5、小窗口播放
在移动端中，有些机型点击视频默认全屏播放，但是有些时候需要在小窗口中播放，可以通过设置playsInline属性实现小窗口播放
``` html
<video
    src='xxxx.mp4'
    playsInline
    webkit-playsinline
    x5-playsinline
   /> 
```

## 6、设置播放器的方向(横屏、竖屏)
``` html
横屏
<video x5-video-player-type="h5" x5-video-orientation="landscape"/>

竖屏
<video x5-video-player-type="h5" x5-video-orientation="portrait"/>

跟随手机自动旋转
<video x5-video-player-type="h5" x5-video-orientation="landscape|portrait"/>
```

## 7、获取视频播放进度
1、视频的播放: vedio_dom.play();
2、视频的当前播放时间: vedio_dom.currentTime
3、视频的总时长: vedio_dom.duration
4、视频的播放进度: 每隔一定时间获取currentTime，通过计算currentTime / duration即可得到视频的播放进度

``` js
<!-- vue示例 -->
function countProgress() {
    this.timer = setInterval(() => {
        let vedio = this.$refs.vedio;
        let ratio = this.ratio;
        if (vedio.currentTime && vedio.duration) {
            this.ratio = vedio.currentTime * 100 / vedio.duration;
        }
        // loading状态
        this.isLoading = !this.ratio || ratio == this.ratio;
        if (this.ratio > 99) {
            this.isPlay = false;
            clearInterval(this.timer)
        }
    }, 200)
}
```

## 8、从指定位置播放
通过改变video_dom.currentTime的方式来改变视频的播放进度，然而，这种方式有时会不起效。在视频准备好可以播放前设置currentTime不会生效，解决方法如下：
``` js
video_dom.addEventListener('loadedmetadata', () => {
    video_dom.currentTime = 100
    video_dom.play();
});
```