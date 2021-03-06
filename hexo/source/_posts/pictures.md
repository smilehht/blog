---
title: 图片格式介绍
date: 2018-08-01
tags:
    - pictures
---


### 1、图片格式有哪些？
> BMP、JPEG、GIF、PSD、PNG、TIFF、TGA、EPS、SVG、webP、CDR、PCX、EXIF、FPX、PCD、DXF、UFO、AI、HDRI、RAW、WMF、FLIC、EMF、ICO、iconfont、、、

<!-- more -->

### 2、图片分类
<img src="./pictures/%E5%9B%BE%E7%89%87%E5%88%86%E7%B1%BB.png" width = "50%" />


**（1）. 矢量图 **
> 矢量图：由数学向量来记录的图像是矢量图
> 特点：放大后图片依旧清晰——放大后重新构图
> 缺点：很难表现自然度高的写实图像


<img src="./pictures/%E7%9F%A2%E9%87%8F%E5%9B%BE.png" width = "50%" />



**（2）、位图(Bitmap)**
位图的构成原理 + 有损压缩/无损压缩
> 位图：由一系列像素点组成的图像是位图，位图也称为点阵图
> 特点：
>(1)、放大会看到像素点，呈现锯齿状——放大后单位面积的像素点减少
>(2)、dpi决定图像的清晰度
>(3)、RGB彩色图像——色彩丰富

 
 
<img src="./pictures/%E4%BD%8D%E5%9B%BE.png" width = "50%" />


**两者差别**

   类型     | 位图            | 矢量图
---------------|-------------|---------
构图方式    | 像素点          | 向量
色彩       | 色彩丰富         | 色彩变化少
失真       | 放大、缩小易失真  | 不失真，良好的缩放性
大小       |  大(面积越大,色彩越丰富,越大)           | 小
分类       |  bpm、jpg、gif、psd、png、... | wmf、ai、EPS、SVG、cdr、emf、dxf、...


**位图不同格式的区别 —— 有损压缩、无损压缩**
`
不同格式的图像在记录这些数据时的方式不一样，涉及到有损压缩和无损压缩的区别
`

**（3）.有损压缩**
> 概念：并不完全真是的记录图像上每个像素点的数据信息，去掉那些图像上会被人眼忽略的细节，然后使用附近的颜色通过渐变或其他形式进行填充。
> 
> 特点：能大大降低图像信息的数据量，又不会影响图像的还原效果
> 
> 格式：jpg


**（4）.无损压缩**
> 概念：真实的记录图像上每个像素点的数据信息，为了压缩图像文件的大小会采用一些特殊的算法
> 
> 压缩原理：先判断图像上哪些区域的颜色是相同的，哪些是不同的然后把这些相同的数据信息进行压缩记录，（例如一片蓝色的天空只需要记录起点和终点的位置就可以了），而把不同的数据另外保存（例如天空上的白云和渐变等数据）
> 
> 格式：
> 1、PNG（对图像上所有出现的颜色进行索引，我们把这些颜色成为索引色，PNG8(索引256色)、PNG24(真彩16.7million色)、PNG32(真彩16.7million色)）
> 2、GIF，索引256色，支持动画


### 3、常用格式介绍

介绍 png、jpg、psd、svg、webp、iconfont

**png —— 主要特性是半透明**

png压缩的原理

```
1、压缩比高于GIF，支持图像透明，无损压缩，质量高
2、可以利用Alpha通道调节图像的透明度(实验)
3、逐次逼近显示，先用低分辨率显示图像，然后逐步提高它的分辨率
4、透明性，用来创建一些有特色的图像
5、流式读/写性能，允许连续读出和写入图像数据
6、PNG的开发目标是改善并取代GIF,PNG 8除了不支持动画外，PNG8有GIF所有的特点，但是比GIF更加具有优势的是它支持alpha透明和更优的压缩（GIF仅支持索引透明）
7、占内存大
8、能在保证不失真的情况下尽可能压缩图像文件的大小
9、对于需要高保真的较复杂的图像，PNG虽然能无损压缩，但图片文件较大，不适合应用在web页面上
10、颜色数越少，文件体积越小
```

**jpg**
```
1、应用最广泛
2、有损压缩
3、将不易被人眼察觉的图像颜色删除
4、较大的压缩比(可达到2:1甚至40:1)
5、尺寸较小，下载速度快，但不支持透明
6、位图，由像素构成，放大变虚
7、JPEG图像存储格式既满足了人眼对色彩和分辨率的要求，又适当的去除了图像中很难被人眼所分辨出的色彩
8、编辑和重新保存JPG格式图像，清晰度下降损失会累积
9、JPG不适用于所含颜色较少、具有大块颜色相近的区域或亮度差异十分明显的较简单的图片
```
“基线”格式的JPG加载过程

<img src="./pictures/%E2%80%9C%E5%9F%BA%E7%BA%BF%E2%80%9D%E6%A0%BC%E5%BC%8F%E7%9A%84JPG%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.gif" width = "50%" />

“连续”格式的JPG加载过程

<img src="./pictures/%E2%80%9C%E8%BF%9E%E7%BB%AD%E2%80%9D%E6%A0%BC%E5%BC%8F%E7%9A%84JPG%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.gif" width = "50%" />

jpg格式保存方式

<img src="./pictures/jpg%E6%A0%BC%E5%BC%8F%E4%BF%9D%E5%AD%98%E6%96%B9%E5%BC%8F.png" width = "50%" />


**psd**
```
1、Photoshop的专用图像格式
2、保存图片的完整信息，图层，透明，通道，文字
3、文件一般较大
```
**svg**
通过记录坐标的形式存储图形信息，SVG使用基于XML的语义化标签结构，由于是DOM结构，你可以通过ID获取SVG元素，并操纵它们

```
1、采用文本来描述对象
2、矢量图形、点阵图像、文本
3、不适用于写实图像和有许多细节的复杂图片
4、可用于数据可视化
5、支持动画、透明、缩放
```

**webp —— 谷歌发明的新格式，存在兼容性（chrome、opera）**

目标：减少文件大小，但达到和JPEG格式相同的图片质量，希望能够减少图片档在网络上的发送时间

重点看一下

```
1、支持动画
2、牺牲图片质量来降低图片文件大小
3、相同质量的情况下比JPEG文件尺寸小巧许多
4、支持有损压缩和无损压缩的图片文件格式
5、无损压缩后的 WebP 比 PNG 文件少了 45％ 的文件大小，即使png经过压缩，webp可以减少28%的大小
6、更小的图片体积
7、在 JPEG 和 PNG 上的转化效果都非常优秀、稳定和统一
```

**iconfont**
```
1、矢量图标
2、引入字体
3、便于调整大小、颜色
```
**gif**
```
1、动画
2、支持透明背景
3、适用于多种操作系统，压缩比高
4、色域不太广,只支持256种颜色
```

### 4、应用介绍

**1、前端使用何种图片格式**
```
1、一般层次丰富颜色较多的图像采用JPG存储，而颜色简单对比强烈的则需要采用PNG
2、有些矢量工具绘制的图像由于采用较多的滤镜特效也会形成丰富的色彩层次，这个时候就需要采用JPG进行存储了
3、基本视觉元素，如容器的背景、按钮、导航的背景等应该尽量用PNG格式进行存储，这样才能更好的保证设计品质


照片用 JPG。
动画用 GIF。
Logo、Icon 等小图用 PNG-8。
```
<img src="./pictures/%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%E5%9B%BE%E7%89%87.jpeg" width = "50%" />


**2、加载的图片太多、太大怎么办**
```
1、将图片和应用分离，防止高I/O负载而崩溃，同一时间对同一域名下的资源的并发请求数目限制
2、压缩
3、懒加载
4、css雪碧图css Sprites
5、将图片压缩成base64格式来节约请求
```

**3、前端图像处理工具**
1、[tinypng.com](https://tinypng.com/)
2、[腾讯智图](http://zhitu.isux.us/)
3、[pngcrush](https://pngcrush.com/)
4、...



**[tinypng.com](https://tinypng.com/)**
> 更好的压缩算法，而且通过智能地减少颜色数，达到有效的压缩。
> 压缩比高，失真小

**[腾讯智图](http://zhitu.isux.us/)**
> 除了 PNG 和 JPG ，还支持 WebP
> 可以直接看到压缩后的图片大小

**[pngcrush](https://pngcrush.com/)**
> 
> 可以批量压缩图片
> 可减少40%的大小



#### 4、图片懒加载的原理


<img src="./pictures/%E6%87%92%E5%8A%A0%E8%BD%BD.png" width = "50%" />