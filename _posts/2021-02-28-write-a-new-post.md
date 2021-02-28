---
title: 根据模板撰写博客
author: 阿喵阿汪
date: 2021-02-28 20:37:00 +0800
categories: [工具, 博客]
tags: [博客]
---

## 博客的路径和命名

所有博客都放在`_posts`路径下，并且命名为`YYYY-MM-DD-TITLE.md`或`YYYY-MM-DD-TITLE.markdown`。

## 博客的基本属性

在博客的开头，添加下列[基本属性](https://jekyllrb.com/docs/front-matter/)：

```yaml
---
title: TITLE
author: AUTHOR
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG]
---
```

注意以下要点：

- 不需要添加`layout: post`，因为已默认添加。
- 需要为`date`属性提供时区，如`+0800`。
- `categories`属性最多只能包含2个元素。
- `tags`属性可以包含0到无穷个元素。

## 目录

默认情况下，博客的目录（TOC）会显示在右侧。有两种方法可以关闭目录：

1. 在`_config.yml`文件中，将`toc`设置为`false`（全局设置）。
2. 在博客的开头添加下列属性（局部设置）：

    ```yaml
    ---
    toc: false
    ---
    ```

## 评论

默认情况下，博客的[评论](https://disqus.com/)将自动加载，有两种方法可以关闭评论：

1. 在`_config.yml`文件中，将`comments`设置为`false`（全局设置）。
2. 在博客的开头添加下列属性（局部设置）：

    ```yaml
    ---
    comments: false
    ---
    ```

## 数学公式

默认情况下，不会开启数学公式，需要在博客的开头添加下列属性开启：

```yaml
---
math: true
---
```

## Mermaid

在博客的开头添加下列属性，从而开启`Mermaid`：

```yml
---
mermaid: true
---
```

## 图片

如果需要在博客的开头显示一张图片，则添加下列属性：

```yaml
---
image:
  src: /path/to/image/file
  alt: image alternative text
---
```

### 图片的标题

在图片的下一行添加斜体文字，这些文字将成为图片的标题显示在下面。

```markdown
![img-description](/path/to/image)
_Image Caption_
```

### 图片的大小

使用`width`和`height`设置图片的大小。

```markdown
![Desktop View](/assets/img/sample/mockup.png){: width="400"}
```

### 图片的位置

默认情况下，图片会居中放置，可以设置为`normal`，`left`和`right`等其他放置方式。需要注意的是，一旦设置了图片的放置方式，就不允许添加图片的标题了。

- Normal（左对齐）

  ```markdown
  ![Desktop View](/assets/img/sample/mockup.png){: .normal}
  ```

- Left

  ```markdown
  ![Desktop View](/assets/img/sample/mockup.png){: .left}
  ```

- Right

  ```markdown
  ![Desktop View](/assets/img/sample/mockup.png){: .right}
  ```

### CDN URL

如果用到的图片都在CDN上，可以将`_config.yml`文件中的`img_cdn`设置为CDN的URL，从而使该URL自动添加到所有以`/`开头的图片路径上。

```yaml
img_cdn: https://cdn.com
```

## 置顶

可以将多篇博客进行置顶，方式如下：

```yaml
---
pin: true
---
```

## 更多

参考[此处](https://jekyllrb.com/docs/posts/)了解更多。