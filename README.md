# 任务更新进度以及一些笔记

# 12月16日
## 添加了`Body`中的组件（只创建了文件）
1. 只创建了文件
2. 所有的超链接、按钮等暂用`div`代替
## 已经解决的问题
问题：
1. 浏览器默认内外边距不为零

    解决方案：

    自己猜测`base.scss`中为初始化浏览器的默认值，并尝试添加

        *{
            margin:0;
            padding:0;
        }
    问题得到解决。
## 未解决的问题
问题：

1. 使用

        .a{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    后发现当浏览器窗口缩放时，效果与实际不一致。
2. 当鼠标移到相应超链接时，自动出现下拉框的效果未实现。