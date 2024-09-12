2024-09-12
# 进度报告

### 修正了Twitter-X 的autofocus暗影

之前popup modal点开的时候，推特的图标会有一个暗暗的背景（它在focus状态中)。

这个autofocus已修复。现在点开popup modal这个暗影不会再有。


### 移除掉了不再需要的image-preloading服务


### 移除掉了主页的音频控制图标

现在海浪的声音播放与否取决于popup modal是否被点开。

我们现在不需要这个图标控制海浪声音的播放，所以移除了这个图标和它相关联的控制程序。

---

2024-09-10
# 进度报告

### 固定按钮位置
上一次报告我们谈到可以把popup modal的按钮固定住，这样不管图片加载出来了没有，按钮们都是固定的，避免了突然平移的突兀感。

不过这样有一个问题：电子产品的屏幕们大小都不一样。（有解决方案）

如果我们要定义一个元素的位置，我们需要告诉浏览器 “这个元素在屏幕(100px, 200px)这个坐标上”，“元素定位在离页面顶部 80px，离页面左侧 20px 的位置”，“离页面顶部 30%，离页面左侧 20% 的位置”。

我们的图片和按钮都需要在中间，但是每个设备的中间那个位置的定位参数都不一样。

你现在如果分别用电脑和手机点开网站的图，会发现按钮们在电脑端紧紧地贴着图片，在手机端却不是。

如果我们想按钮们不管在哪个设备上都紧紧地贴着图片，那就需要relative的position。按钮们随机应变地紧紧贴着图片。但是这样按钮们的位置就不固定了，就会在图片加载后平移。

##### 解决方案：

在所有图片都是同一个大小的情况下（目前有些图片大小不太一样），我可以计算每个设备类型上图片和按钮的最佳位置（手机宽300px，平板700px，桌面1200px），然后为每一个设备种类写一个图片和按钮的css。

这个在一些edge cases上面（大小非常奇怪的电子设备上）有几率翻车，但是我现在顾不上他们了...！

### default图片的取消

按钮漂移主要是最开始打开网页的时候发生。关掉popup modal的互动窗后这个问题就没有了。再加一个default图片只会让最开始的load负担更严重。后面漂移问题也不发生了，也不需要这个default图了。

---

2024-08-29

TL;DR

1. 放弃secret loading 策略 
2. alternative: 回到之前的default popup image transitioning into the selected quote image
3. Progressive jpegs
4. Blur-up

- 放弃secret loading 策略

在以下scenario的时候，secret loading没有任何用：

a) 用户进入landing page, 后台secret select 并 secret load对应quote图片
b) 用户点开红按钮，图片立马出现在屏幕
c) 用户快速点出图片再点击红按钮
d) popup modal又开始慢慢load图片

secret loading这个策略假设了用户退出popup modal后和再次点进modal时，这两个events之间有一个较长的时间差。

Secret loading在图片比较少的时候，图片固定的时候会更合适。

- Default popup image transitioning into the selected quote image

我想到的alternative是：

a) secret load一个default图
b) 点开按钮后popup modal上面的图是default图
c) 在quote image 加载完后default图变成quote image

default图变成quote image的transition可以有很多种方式：

- Progressive JPEGs

海报图可以变成Progressive JPEG的格式。该JPEG格式的图片 allows loading an image in multiple passes. 

The first pass a low-resolution version. As more passes are loaded, the image gets improved gradually.

This technique doesn't improve the actual load time but the perceived load time.

It doesn't completely solve the 卡顿问题。

- Blur-up

之前的报告里面有讲过。不累述。

It doesn't completely solve the 卡顿问题。

---

2024-08-01

TL;DR

1. Static pages generated from a template en batch is done. 

2. 主页面git 的 branches 比较混乱，我需要时间清理它。

3. railway的nginx deployment怪怪的。但是现在还能凑合着用。


- Static Pages

现在这些页面都有了自己的缩略图。推特和telegram是ok的。

还没测试whatsapp，你好奇的话可以发给我试试。

在研究怎么样子徒手用html css javascript写出好看的responsive页面。

Static 頁面可以通過angular來serve，不一定需要另開一個服務：
https://stackoverflow.com/questions/53416871/routing-to-static-html-page-in-angular-6

- git

主页面因为最开始没有想好去哪里deploy，所以它的branch的父子关系比较混乱。

一般来说应该是：纯代码版本是爸爸，每一个deployment的方式都是爸爸的儿子。儿子们之间没有父子关系。

但是由于最开始没有想到会换deployment平台，所以这些儿子们也有父子关系，netlify这个还是纯代码的爸爸。

我们虽然还没有完全定下来用哪个deployment （railway？digitalocean?),但是不管在哪个平台，这个git都最好要有一个清晰的qingxi父子關係。


---

2024-07-28

TL;DR

1. 背景视频可以动了 （请参考netlify上push的版本）
2. 背景音乐因为google chrome的隐私设置不可以自动播放，但是可以点了按钮之后开始播放。


- 现在video可以动了。

之前不能动是浏览器的原因：https://stackoverflow.com/questions/53756695/angular-html-fullscreen-video-autoplay-not-working

具体原因是因为谷歌从2017年开始就不允许视频自动播放了： https://developer.chrome.com/blog/autoplay/

具体到angular层面：https://github.com/angular/angular/issues/27252

用了链接里的方案（把视频explicitly静音）就可以了。

链接方案：

<video loop muted autoplay oncanplay="this.play()" onloadedmetadata="this.muted = true">
    <source src="video.mp4" type="video/mp4">
</video>

- 背景音乐没法自己autoplay，因为和视频一样的原因。

谷歌不允许autoplay声音，但是允许互动后放一些声音。

Chrome's autoplay policies are simple:

- Muted autoplay is always allowed.
- Autoplay with sound is allowed if:
- The user has interacted with the domain (click, tap, etc.).
- On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
- The user has added the site to their home screen on mobile or installed the PWA on desktop.
- Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.