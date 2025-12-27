# 安装 ReSukiSU {#install}

ReSukiSU 提供了以下两种方式来安装 ReSukiSU

## LKM 安装 {#LKM}

在安装好 ReSukiSU 管理器后，如果内核版本 >= 5.10 ，点击`未安装`后会跳转到安装界面并显示LKM修补/安装。

根据管理器的提示，选择好boot/init_boot/vendor_boot文件，点击`下一步`。

::: info tips
需要修补`vendor_boot`的设备相当少见，所以一般只需要修补`init_boot`文件即可
:::


管理器会快速地将根据系统的KMI决定LKM文件，并将其提供的镜像文件进行修补，并以`KernelSU_patched_*.img`输出至下载目录

之后需要通过一些方法，把修补后的镜像文件**刷入**进对应分区，便大功告成了

## GKI2/GKI1/非GKI内核（Anykernel3）安装 {#builtin}

ReSukiSU管理器虽然内置了Anykernel3的安装方式，但是在管理器未获得**ROOT权限**时，这个安装方法不会被显示出来。您可能需要以下操作才可使用

1.通过[LKM安装](#LKM)获取root后再进行刷入AnyKernel3包

2.使用`magiskboot`手动修改boot镜像

### 手动修改boot镜像


