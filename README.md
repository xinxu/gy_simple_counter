## 题目要求

### 前端要求

使用react+webpack搭建前端页面，完成自动化构建，要求不打包react.js到最终的输出包，页面中采用redux完成一个计数器，计数操作的触发由后台socket推送完成。

### 后端要求

使用Django搭建后台服务，建立一个socket服务器，在首次跟前端连接成功后每秒执行一次告知前台进行计数的推送。

## 解决方案
### 技术栈
后端：django+channels

前端：react+redux
### 搭建环境
```
pip install django
pip install channels
pip install django-webpack-loader
```
### channels核心概念
1. 把http和websockets包成了更大的抽象ASGI
2. Scope和Event概念抽象了底层的http或者websockets
3. channels把新连接通过routing table映射到consumer上面
4. consumer是独立线程的，可以运行blocking操作
5. consumer有异步版本AsyncConsumer
6. 支持跨进程
7. 支持django多数feature
