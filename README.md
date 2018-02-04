## 题目要求

### 前端要求

使用react+webpack搭建前端页面，完成自动化构建，要求不打包react.js到最终的输出包，页面中采用redux完成一个计数器，计数操作的触发由后台socket推送完成。

### 后端要求

使用Django搭建后台服务，建立一个socket服务器，在首次跟前端连接成功后每秒执行一次告知前台进行计数的推送。

## 解决方案

### 前端部分

webpack+react+redux

#### 几个关键点

1. 使用react-css-modules集成css
2. webpack配置文件进行了开发/生产环境分离
3. 对websocket的处理使用redux-websocket-bridge插件

#### babel配置

```
{
	"presets": ["react", "env"],
    "plugins": ["transform-object-rest-spread"]
}
```

### 后端部分

django+channels

#### 几个关键点

1. 使用asyncio来调度计时器
2. 使用webpack_loader简化模版使用webpack bundle的操作

## 技术栈版本
1. webpack 3.10.0
2. react 16.2.0
3. redux 3.7.2
4. python 3.6.1
5. django 2.0.2
6. channels 2.0.0

## 搭建环境
```
pip install django
pip install channels
pip install django-webpack-loader
```
