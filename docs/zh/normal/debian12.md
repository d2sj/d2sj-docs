# debian12.7

## 安装流程(云服务器安装一般不需要这些流程,一键安装即可)

```
#注:如果选项是横着的你就按tab键(键盘Q左边那个长条按键)切换/选择你要的选项
	  如果选项是竖着的你就按键盘↑↓选择你要的选项
	  然后回车确认你的选项
	
#安装桌面版
Gaphical install
#安装服务器版
Install (此处选择这个)

#Select a language (选择语言)
English

#Select your location (选择地区)
United States

#Configure the keyboard (选择键盘)
American English

#Configure the network , network autoconfiguration failed (网络自动配置失败,回车即可)
Continue

#Configure the network , Network configuration method (手工配置网络参数)
Configure network manually

#Configure the network , IP address,设置你的ip,例如192.168.30.30 这个格式(别和我写一样的)
192.168.30.30

#Configure the network , Netmask (配置子网掩码,默认255.255.255.0,回车即可)
255.255.255.0

#Configure the network , Gateway (配置网关,默认为192.168.30.1,取决于你设置的ip,默认即可)
192.168.30.1

#Configure the network , Hostname (这里是配置dns,默认回车即可)
192.168.30.1

#Configure the network , Domain name (设置主机名,默认debian即可)
debian

#Configure the network , Domain name (设置域名,默认为空,回车即可)
回车

#Set up users and passwords , Root passwrod(设置root用户的密码,随便,只要你别忘了就行,例如d2sj)
d2sj

#Set up users and passwords , Re-enter password to verify(再次输入你的密码)
d2sj

#Set up users and passwords , Full name for the new user(创建一个普通用户)
zhang

#Set up users and passwords , Username for your account(为你创建的普通用户zhang设置一个用户名,一般设置相同的即可)
zhang

#Set up users and passwords , Choose a password for the new user(设置普通用户zhang的密码,这里设置为zhang,你设置你自己的)
zhang

#Set up users and passwords , Re-enter password to verify(再次输入你的密码)
zhang

#Configure the clock , Select your time zone(设置你的时区,选择Eastern(东部))
Eastern

#Partition disks , Partitioning method(磁盘分区方法)
Guided - use entire disk (使用整块磁盘,自动分区)

#Partition disks , Select disk to partition(选择磁盘)
默认第一块盘,回车即可

#Partition disks , Partitioning scheme(分区方案)
All files in one partition (recommended for new users)一个分区中的所有文件（建议新用户使用）

#Partition disks
Finish partitioning and write changes to disk(完成分区并将更改写入磁盘)

#Partition disks , Write the changes to disk(使用tab切换选项)
Yes

#Configure the package manager , Scan extra installation media?(是否使用外置光盘)
No

#Configure the package manager , Use a network mirror?(是否使用网络镜像)
No

#Configuring popularity-contest(不参与网络调查)
No

#Software selection , Choose software to install:(目前只安装了核心服务,选择安装其他服务)
#按↑↓到对应选项空格取消和选中,不要回车,回车就下一步了,如果回车了按ctrl+z还可以重新选择
服务器版只选择SSH server 和 standard system utilities即可,回车

#Configuring grub-pc , Install the GRUB boot loader to your primary drive?(是否安装grub)
Yes

#Configuring grub-pc , Device for boot loader installation:(安装到本地)
/dev/sda

#Finish the installation , Please choose <Continue> to reboot(安装完成)
Continue
```



## 配置外网连接(如果你的机器是可以连接外网的话)

### 查看网卡信息

```
ip a
```

### 一件设置静态ip(修改ip和网关为你自己的配置,然后整个粘贴复制进去即可)

`>` 表示覆盖原文内容所有内容,如果你需要保留原配置,请使用 `>>` 追加内容,并修改对应的网卡名称信息(新手无需修改)

```
cat > /etc/network/interfaces <<EOF
# allow-hotplug表示接口在系统检测到插入时使用，如需接口始终可用请使用auto
allow-hotplug ens32
iface ens32 inet static
	#改成你自己的ip
    address 192.168.27.246
    netmask 255.255.255.0
    #改成你自己的网关
    gateway 192.168.22.1
EOF
```

### 查看dns

```
cat /etc/resolv.conf
```

### 配置DNS

```
cat > /etc/resolv.conf <<EOF
nameserver 114.114.114.114
nameserver 8.8.8.8
nameserver 8.8.8.4
EOF
```

### 重启网络配置

```
systemctl restart networking
```

### 测试外网是否可用

```
ping qq.com
```

## 配置SSH可连接

### 手动修改镜像源

打开 `/etc/apt/sources.list` 文件后,使用 `ctrl+k` 剪切当前行,手动输入第一行配置,然后使用 `ctrl+k` 剪切当前行,使用 `ctrl+u` 粘贴4次,然后只需要修改其中不同的部分即可

```
 nano /etc/apt/sources.list
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
```

### 一键修改镜像源

```
cat > /etc/apt/sources.list <<EOF
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
# deb-src https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
EOF
```

### 安装OpenSSH Server

```
apt update
apt install openssh-server
```

### 启动ssh服务

```
systemctl start ssh
systemctl enable ssh

//验证ssh服务是否可用,返回enabled表示已启用
systemctl is-enabled ssh

//查看当前服务状态,返回active(running)为运行中
systemctl status ssh

//ssh配置文件修改
nano /etc/ssh/sshd_config
//将PermitRootLogin注释解除,值换为yes,表示允许root用户通过SSH登录系统

//重启ssh服务使配置生效
systemctl restart ssh
```

