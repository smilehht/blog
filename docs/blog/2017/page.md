---
title: 页面开发小心得
date: 2017-08-29
tags:
---

### 1、总体规划
1.设计入口——用户通过什么样的方式可以访问这个页面
2.拆分组件——对于组件化开发来说，如何拆分是首选要考虑的问题
3.组件交互——组件之间并非独立的，如何实现组件间的通信也是需要考虑的问题

<!-- more -->

### 2、需求完善
1.确定业务需求流程，页面开发的同时了解业务
2.确定细节，每一个细节都考虑有没有更好地方案

### 3、细节优化——提升用户体验
1.设置导航栏，让用户了解所处的位置，同时也方便进入上一级
2.小按钮是否可以通过鼠标划入，添加小动画
3.输入框、下拉框是否支持搜索，便捷用户输入
4.必须输入值，在输入框附近给予提示，点击查询或提交没有填写的话，给予温馨提示
5.设置默认值，减少用户的输入
6.展示列表是否支持轮询or推送，每次更新数据后，同时应该更新相应的数据
7.隐含功能小提示，对于新用户第一次接触页面，很难发现隐藏功能，小提示让页面更加优化

持续总结中。。。