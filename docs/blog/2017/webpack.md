---
title: webpack使用参数说明
date: 2017-06-22
tags:
    - webpack
---

### 1、entry 用来定义入口文件，可以是字符串或者是对象

<!-- more -->

``` js
1、entry值为字符串，如
    entry: __dirname + './index.js'
    
2、entry值为数组，表示数组里面的文件最后导出到一个js，如
    entry: ['index1.js', 'index2.js']
    
3、entry值为对象，表示输出多个文件，输出文件也应做相应的配置，如

    entry: {
        home: './home.js',
        index: ['./index1.js', './index2.js'],
        register: './register.js',
        error: './error.js',
        vendor: ['react', 'react-dom']
    }

```
### 2、output 用来定义输出文件，对象类型

```
1、path属性: 用来定义打包后文件的输出路径，如
    path: './public/js'
2、filename属性: 用来定义输出文件的文件名，可以是一个字符串
    如果entry为字符串或数组，表示生成到统一个文件，直接可以这样写，如
        filename: 'build.js'
    如果entry为对象，可以根据entry的key值构建到不同的js包中，如
        filename: '[name].bundle.js'
    如上述entry对象分别会打包到不同js包中，依次会打包到home.bundle.js、index.bundle.js、register.bundle.js、error.bundle.js
3、publicPath属性: 指定被引用的URL地址，一般为public
    publicPath: '/assets/'

```
### 3、module 模块加载器，对象类型

``` js
module: {
    loaders: {
        // 正则匹配，匹配到的会进行打包
        test: /\.js$/,
        // 设置加载器
        loader: 'babel-loader',
        // 不打包的文件夹
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
    },
    ...
}

```
### 4、resolve用于配置中补全的后缀

``` js
resolve: {
    // 自动扩展文件的后缀名
    extensions: ['', '.', '.json'],
    // 设置查找路径
    root: 'resource/components/',
    // 模块别名定义，方便后续直接引用别名，不需要写很长的地址
    alias: {
        requestData: 'js/api/ajax.js'
    }
}

```
### 5、plugins 添加各种额外的插件

``` js
plugins: [
    // 单独将entry中的文件进行打包
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js'
    }),
    // 代码压缩UglifyJsPlugin
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warning: false   
        }
    })
]

```
### 6、externals 通过script引入类库，但不希望webpack打包到输出文件中
``` js
externels: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'router': 'window.ReactRouter',
    'echarts': 'window.echarts'
}
```