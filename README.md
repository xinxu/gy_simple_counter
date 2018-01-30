## 题目要求

### 前端要求

使用react+webpack搭建前端页面，完成自动化构建，要求不打包react.js到最终的输出包，页面中采用redux完成一个计数器，计数操作的触发由后台socket推送完成。

### 后端要求

使用Django搭建后台服务，建立一个socket服务器，在首次跟前端连接成功后每秒执行一次告知前台进行计数的推送。

