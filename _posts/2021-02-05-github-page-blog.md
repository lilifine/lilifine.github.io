---
title: 基于Github Page和Jekyll搭建个人博客
author: 阿喵阿汪
date: 2021-02-06 17:23:00 +0800
categories: [Git与Github, Github]
tags: [博客, Github Page, Jekyll]
---

本文介绍如何基于`Github Page`和`Jekyll`搭建个人博客，当前博客就是示例。相比于在`CSDN`等网站上写博客，或者自己构建和维护一个网站，好处在于：

- 可以自由选择和定制喜欢的博客界面。
- 不会弹出广告。
- 可以基于`Markdown`写文章。
- 搭建过程简单，后期基本不需要维护。
- 博客和文章都托管在`Github`上，自带版本控制。
- 利用`VSCode`可以轻松实现在本地写文章、预览、上传到`Github`的操作。

## 准备工作
---

首先，需要申请一个[Github](https://github.com/)账户。

其次，参考[Jekyll文档](https://jekyllrb.com/docs/installation/)在本地安装`Ruby`和`Jekyll`。以`Windows`系统为例：

1. 从[RubyInstaller官网](https://rubyinstaller.org/downloads/)下载`Ruby+Devkit`，下载完成后双击安装，安装时使用默认选项。
    - 如果要修改安装路径，一定要确保其中没有空格，否则后面会报错。
    - 在最后一步，勾选下列选项后，点击`finish`，此时将自动打开一个`cmd`窗口。

        ![Desktop View](/assets/img/github-page-blog/install-ruby-final-step.png)

    - 如果忘记勾选上述选项，则手动打开一个`cmd`窗口，并输入：

        ```
        ridk install
        ```

2. 在`cmd`窗口中输入`3`并回车。

    ![Desktop View](/assets/img/github-page-blog/install-ruby-dev-tool.png)

3. 重新打开一个`cmd`窗口，输入下列命令，确认`Ruby`和`RubyGem`已正确安装：

    ```
    C:\Users\86186>ruby -v
    ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x64-mingw32]

    C:\Users\86186>gem -v
    3.1.4
    ```

4. 替换`RubyGem`的源，从而提高后续的下载速度：

    ```console
    C:\Users\86186>gem source    
    *** CURRENT SOURCES ***
    https://rubygems.org/ 

    C:\Users\86186>gem source -r https://rubygems.org/ 
    http://rubygems.org/ removed from sources

    C:\Users\86186>gem source
    *** CURRENT SOURCES ***

    C:\Users\86186>gem source -a http://gems.ruby-china.com
    http://gems.ruby-china.com added to sources

    C:\Users\86186>gem source
    *** CURRENT SOURCES ***
    http://gems.ruby-china.com
    ```
6.  安装`Jekyll`和`Bundle`：

    ```
    C:\Users\86186>gem install jekyll bundler
    ```

7. 重新打开一个`cmd`窗口，确认`Jekyll`和`Bundle`已正确安装：

    ```
    C:\Users\86186>jekyll -v
    jekyll 4.2.0

    C:\Users\86186>bundle -v
    Bundler version 2.2.8
    ```

8. 为`Bundle`添加国内的镜像映射：

    ```console
    C:\Users\86186>bundle config
    Settings are listed in order of priority. The top value will be used.

    C:\Users\86186>bundle config mirror.https://rubygems.org/ https://gems.ruby-china.com

    C:\Users\86186>bundle config
    Settings are listed in order of priority. The top value will be used.
    mirror.https://rubygems.org/
    Set for your local app (C:/Users/86186/.bundle/config): "https://gems.ruby-china.com"
    Set for the current user (C:/Users/86186/.bundle/config): "https://gems.ruby-china.com"
    ```

    > 删除镜像映射：bundle config  --delete 'mirror.https://rubygems.org/'

## 搭建博客
---

接下来开始搭建博客。

首先，在[Jekyll主题官网](http://jekyllthemes.org/)选择一个模板，点击`Homepage`进入对应的`Github`仓库。

![Desktop View](/assets/img/github-page-blog/choose-jekyll-theme.png)

然后，根据`Github`仓库的介绍进行操作。以[Chirpy主题](https://github.com/cotes2020/jekyll-theme-chirpy/)为例：

1. 在`Github`上`Fork`该仓库，并将`Fork`的仓库`clone`到本地。
2. 在本地仓库的路径下，打开`Git Bash`，运行下列命令，从而安装依赖：

    ```
    $ bundle
    ```

3. 接着执行文件初始化：

    ```
    $ bash tools/init.sh
    ```

4. 打开本地仓库中的`_config.yml`文件，根据注释修改相应的配置。最重要的是将`url`改成`'https://<username>.github.io'`，其中`<username>`是`Github`的用户名。

5. 运行以下命令后，在浏览器中打开[http://localhost:4000](http://localhost:4000)，进行本地预览：

    ```
    $ bundle exec jekyll s
    ```

6. 将远端仓库改名为`<username>.github.io`，其中`<username>`是`Github`的用户名。

7. 将本地仓库的`commit`推送到远端分支`origin/main`。

8. 确认远端仓库出现了一个新分支`gh-pages`后，通过`Settings → Options → GitHub Pages → Source`选择`gh-pages`分支。

    ![Desktop View](/assets/img/github-page-blog/choose-github-page-source.png)

    - 如果始终没有出现`gh-pages`分支，再从本地仓库推送新的`commit`到远端分支`origin/main`。
    - 等待片刻，页面上将出现一行绿色的提示，表示网站已部署成功，如上图所示。

9. 打开`https://<username>.github.io`，访问博客。

最后，如果了解一些前端的知识，可以进一步修改博客的界面。当前博客就是基于[Chirpy主题](https://github.com/cotes2020/jekyll-theme-chirpy/)修改而来。

## 使用博客
---

博客的文章需要基于`Markdown`撰写，具体的格式参考[此博客](https://chirpy.cotes.info/posts/write-a-new-post/)和[此示例](https://github.com/cotes2020/jekyll-theme-chirpy/tree/master/_posts)。

推荐在本地使用[VSCode](https://code.visualstudio.com/)写文章，下载插件`Markdown Preview Enhanced`后，按`Ctrl + Shift + P`，再选择`Markdown: Markdown Preview Enhanced...`。

![Desktop View](/assets/img/github-page-blog/open-markdown-preview.png)

这样，就可以很方便地一边写`Markdown`文本，一边预览结果了。

![Desktop View](/assets/img/github-page-blog/preview-markdown.png)

此外，用`VSCode`还可以很方便地将本地的修改提交并推送到远端仓库。

![Desktop View](/assets/img/github-page-blog/use-vscode-git.png)