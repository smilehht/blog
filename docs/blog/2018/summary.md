---
title: 日常小知识点
date: 2018-08-02
tags:
---

**写代码是一件很慎重的事情，对自己的每一句代码负责**

### 1、使用gulp-minify-css对css进行压缩时，会丢弃css hack代码
```
解决办法：使用gulp-clean-css打包
```

<!-- more -->

### 2、在IE中mouseover会有闪烁
```
解决办法：使用mouseenter

知识点:
mouseover事件与mouseenter事件的区别：
(1).mouseover——不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件，对应mouseout
(2).mouseenter——只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件，对应mouseleave

mouseenter子元素不会反复触发事件，否则在IE中经常有闪烁情况发生
```

### 3.arr.sort(fn)
```
在自定义排序规则的时候，需要传入fn，fn的返回值为数字，分别为正数、0、负数，而非Boolean类型
```
### 4.一个DIV实现两个背景
```
background-color与background-image配合使用
```

### 5.多个item设有margin-right时，最后一个因margin-right的存在被显示到了下一行
```
解决办法：给item增加一个父级元素，给父级的div加宽，宽度=原宽度 + margin-right，原父级元素的宽度保持不变，并设置overflow：hidden
```


### 6.模态框父级透明，子级会发生继承的问题
```
原因：父级设置了opacity，而该属性是会被子元素继承，导致子元素透明
解决办法：父元素通过background-color: raba(0, 0, 0, 0.5)来设置透明度
```

### 7.跨域的解决办法 


```
// MAC, 在控制台执行:
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/hunter(用户名)/MyChromeDevUserData/

// windows:
新建一个chrome快捷方式，右键“属性”，“快捷方式”选项卡里选择“目标”，添加--args --disable-web-security --user-data-dir
```


### 8.scss循环
``` css
// 模板的数量
$num: 4;
$bg_color: #6D43DF #E02DB4 #EB8900 #2D69E0;
$headline_color: #5A4D80 #804D73 #806A4D #4D5D80;

// 模板
@for $i from 1 through $num {

    $back_color: nth($bg_color, $i);
    $title_color: nth($headline_color, $i);

    .template#{$i} {
        .top-sale {
            background-image: url(~imgUrl/brand-top-bg-#{$i}.png);
            background-size: 100% 100%;

            .pro-item {
                background-color: $back_color !important;
            }
        }
        .headline-title {
            color: $title_color;
        }

    }
}
```


