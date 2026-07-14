---
title: "ctf-web 总体框架 "
date: 2026-07-14
description: "这是我的第一篇文章-web方向总览"
head:
  meta:
    - name: "ctf-web"
      content: "搭好了框架才知道自己要学什么，才不容易走错路"
---

先来看看探姬师傅的web 方向的知识点总结喵

![image-20260714233547076](C:\Users\lliu\AppData\Roaming\Typora\typora-user-images\image-20260714233547076.png)
网址在这里哟  https://hello-ctf.com/hc-web/

CTF Web 完整知识导图与防走弯路指南

在网络安全领域，Web 方向往往是最贴近真实业务、技术迭代最快的分支。CTF 中的 Web 题型千变万化，但万变不离其宗。为了避免在浩如烟海的技术栈中迷失，我们需要建立一个稳固的、自下而上的知识框架。

搭好了框架，才知道自己要学什么，才不容易走错路。

🧭 第一阶段：筑基期（不要跳过！）

很多新手容易犯的第一个错误，就是连 HTTP 协议都没搞懂，就直接去背 SQL 注入的 Payload。基础不牢，地动山摇。

🌐 网络基础（重中之重）

HTTP/HTTPS 协议： 深刻理解请求头 (Headers)、响应头、Cookie、Session、状态码 (200, 302, 403, 500 等)。

抓包与重放： 理解数据在客户端与服务端之间是如何传输的。

🖥️ 前端基础（能看懂即可）

HTML/CSS： 知道页面的基本结构，能看懂表单 (Form) 是如何提交数据的。

JavaScript： 了解基本的 JS 语法，知道 DOM 操作，这对于学习 XSS 至关重要。

浏览器安全策略： 同源策略 (SOP)、跨域资源共享 (CORS)。

⚙️ 后端与底层环境

Linux 基础命令： CTF 靶机 99% 是 Linux，你需要熟悉文件操作、权限、管道符。

数据库基础： 掌握 MySQL 基础语法 (SELECT, UNION, JOIN, WHERE)。

一门后端语言： 首推 PHP（CTF 考得最多），其次了解基本的 Python。不需要写出大型项目，但必须能看懂代码逻辑。

⚔️ 第二阶段：核心漏洞图谱（OWASP Top 10）

这个阶段你要掌握 Web 安全中最经典的漏洞模型。不仅要知道“怎么黑”，更要知道“为什么能黑”（成因）以及“怎么修”（防御）。

💉 注入类漏洞 (Injection)

SQL 注入： 联合注入 (Union)、报错注入、盲注 (布尔/时间盲注)、堆叠注入。

命令注入 (RCE)： 各种管道符 (|, &, ;) 的使用，无回显命令执行，绕过空格和敏感字符限制。

📂 文件操作漏洞

文件上传： 前端绕过、MIME 绕过、黑白名单绕过、解析漏洞。

文件包含 (LFI/RFI)： 伪协议利用 (如 php://filter, data://)、日志包含、Session 包含。

🎭 客户端漏洞

XSS (跨站脚本攻击)： 反射型、存储型、DOM型。重点理解如何窃取 Cookie 和绕过 HttpOnly。

CSRF (跨站请求伪造)： 理解与 XSS 的区别。

🧠 逻辑漏洞

越权访问 (垂直/水平越权)。

验证码绕过、支付逻辑漏洞。

🚀 第三阶段：进阶与现代 Web 安全

当基础漏洞掌握得差不多后，就需要挑战 CTF 比赛中拉开差距的高阶考点了。

📦 反序列化漏洞 (Deserialization)

PHP 反序列化： 魔术方法 (__wakeup, __destruct 等)、POP 链构造、原生类利用、Phar 反序列化。

Java 反序列化： (难度较高) CC 链、Fastjson 漏洞。

Python 反序列化： Pickle、PyYAML。

🪞 服务端伪造与外部实体

SSRF (服务端请求伪造)： 内网探测、Gopher 协议打 Redis/MySQL。

XXE (XML外部实体注入)： 利用 DTD 读取本地敏感文件。

🧩 模板注入 (SSTI)

Jinja2 (Python/Flask)、Twig (PHP)、Smarty 等引擎的沙箱逃逸技巧。

🧬 现代前端与云安全

Node.js 原型链污染 (Prototype Pollution)。

JWT (JSON Web Token) 伪造与爆破。

🛠️ 必备兵器库（手熟是关键）

工具是黑客的延伸，不要做“脚本小子”，但一定要善用工具。

Burp Suite： 绝对的核心！熟练掌握 Proxy（抓包改包）、Repeater（重放）、Intruder（爆破）。

脚本编写 (Python)： 掌握 requests 库，遇到盲注等需要大量重复请求的题目时，自己写脚本是唯一的出路。

Docker： 学会用 Docker 搭建漏洞复现环境 (如 Vulhub)，用完即删，非常方便。

常用扫描与目录爆破： dirsearch, ffuf。

代码编辑器： VS Code (配合各种代码审计插件)。

🛑 防走弯路指南（避坑必看）

🚫 戒掉对自动化工具的依赖： 新手期绝对不要一开始就用 Sqlmap 或 AWVS。如果连手动注入的闭合都没搞懂，扫描器只会让你知其然而不知其所以然。

🔍 看重源码，学会本地调试： 遇到黑盒题目做不出，试着在本地写一段类似的 PHP 代码，var_dump() 打印一下变量，看看底层到底发生了什么。

📖 赛后复盘重于比赛本身： 比赛时做不出很正常。比赛结束后，一定要去看别人的 Writeup！学习大佬的切入点和 Bypass 思路。

🧱 不要盲目追求“奇技淫巧”： 很多 CTF 题目的 Trick 非常偏门，不要花太多时间死记硬背偏门函数，优先掌握底层的核心机制。

写在最后： Web 安全的学习是一个螺旋上升的过程，会遇到很多挫折。保持好奇心，遇到报错不要慌，学会通过搜索引擎和官方文档寻找答案。祝我们在网络安全的世界里，都能找到自己的 One Love！


CTF Web 核心知识体系导图

CTF (Capture The Flag) Web 方向涉及的技术栈极其广泛。本导图旨在对 Web 安全领域的关键技术和常见漏洞进行系统性分类与总结，构建完整的知识体系框架，作为日常学习与解题的速查索引。

一、 协议与网络基础层

Web 安全的本质建立在网络协议的交互之上，深刻理解底层协议是挖掘和利用漏洞的前提。

HTTP/HTTPS 协议

请求结构： Request Method (GET, POST, OPTIONS, PUT 等), URI, Version

关键请求头 (Headers)： Host, User-Agent, Referer, X-Forwarded-For (伪造 IP), Cookie, Accept

关键响应头： Set-Cookie, Server, Location (重定向)

状态码机制： 20x (成功), 30x (重定向), 40x (客户端错误), 50x (服务端错误)

HTTPS 机制： SSL/TLS 握手过程、证书校验

状态保持机制

Cookie 的属性与安全性 (HttpOnly, Secure, SameSite)

Session 的工作原理与劫持

JWT (JSON Web Token) 的结构、签名机制与常见伪造漏洞

同源策略 (SOP) 与跨域

SOP (Same-Origin Policy) 的限制范围

CORS (Cross-Origin Resource Sharing) 配置与绕过

JSONP 劫持

二、 前端安全机制与漏洞

前端安全主要侧重于客户端浏览器环境中的代码执行与数据窃取。

HTML/JS/CSS DOM 基础

DOM 树的操作与事件监听

XSS (跨站脚本攻击)

分类： 反射型 (Reflected)、存储型 (Stored)、DOM 型

核心利用： 窃取 Cookie、键盘记录、CSRF 伪造、XSS 蠕虫

Bypass 技巧： 编码绕过 (URL, HTML 实体, Unicode)、闭合标签、利用事件处理器 (onerror, onload)

CSRF (跨站请求伪造)

攻击模型与成因

防御与绕过：验证 Referer、Anti-CSRF Token

其他前端风险

点击劫持 (Clickjacking)

CORS 配置不当引起的敏感信息泄露

HTML5 安全特性引入的新风险 (如 postMessage 滥用)

三、 后端语言基础与特性

CTF 题目通常围绕特定语言的内置特性和逻辑缺陷展开，PHP 和 Python 是重中之重。

PHP (CTF 最常见)

弱类型比较： == 与 === 的区别、哈希碰撞 (Magic Hash)、strcmp() 漏洞

内置函数缺陷： is_numeric(), in_array(), md5(), preg_match() 回溯限制

伪协议： php://filter (任意文件读取/Bypass)、php://input, data://, phar:// (触发反序列化)

变量覆盖： extract(), parse_str(), $$ 导致的关键变量被修改

Python (Flask/Django/Tornado)

沙箱逃逸： 深入理解 Python 的 __builtins__, __class__, __bases__, __mro__ 等魔术属性，利用继承链寻找危险函数 (如 os.popen, eval)。

Pickle/PyYAML 反序列化机制

Java (Spring/Tomcat)

反序列化链： CommonsCollections (CC链)、Fastjson、Log4j2 (JNDI 注入)

内存马 (MemShell) 技术

四、 核心漏洞图谱 (服务端)

这是获取 Server 权限和 Flag 的主要途径。

1. 注入类漏洞 (Injection)

SQL 注入 (SQLi)

类型： 联合查询注入 (Union)、报错注入 (Error-based)、布尔盲注 (Boolean-based)、时间盲注 (Time-based)、堆叠查询 (Stacked)

数据库特性： MySQL (常见表 information_schema), SQLite, PostgreSQL

Bypass： 绕过空格、逗号、单引号、特定关键字 (SELECT, UNION)

高阶利用： 无列名注入、DNSLog 外带数据、读写文件 (INTO OUTFILE)

命令注入 (OS Command Injection / RCE)

管道符利用： |, ||, &, &&, ;

无回显 RCE： 反弹 Shell、DNSLog 外带

Bypass： 空格绕过 (${IFS}, <), 黑名单字符绕过 (变量拼接, Base64 解码, 八进制/十六进制), 长度限制绕过

2. 文件操作漏洞

文件包含 (LFI / RFI)

目录穿越 (../)、截断利用 (%00)

包含日志文件 (Log Poisoning)、包含 Session 文件以实现 RCE

文件上传 (File Upload)

前端绕过： 修改 MIME 类型、禁用 JS

黑白名单绕过： 寻找罕见后缀 (如 .phtml, .php5), 大小写绕过, 双写绕过

解析漏洞： Apache/Nginx/IIS 特定版本解析机制缺陷

内容检测绕过： 文件头伪造 (GIF89a)、图片马 (Exif 数据注入)

3. 服务端伪造与实体漏洞

SSRF (服务端请求伪造)

内网端口扫描与服务探测

支持协议利用：file:// (读文件), dict://, gopher:// (核心：构造攻击 Redis, MySQL, FastCGI 的数据包)

Bypass 限制：IP 格式转换、302 跳转、DNS 重绑定 (DNS Rebinding)

XXE (XML 外部实体注入)

内部实体与外部实体 (DTD)

利用方式：读取本地文件、执行 SSRF、Blind XXE (利用 OOB 带外数据)

4. 高阶利用机制

反序列化漏洞 (Deserialization)

成因：不受信任的数据被恢复为对象时触发魔术方法。

PHP 反序列化：利用 __wakeup(), __destruct(), __toString() 构造 POP 链 (Property-Oriented Programming)。

模板注入 (SSTI)

成因：用户输入被当做模板引擎的执行代码。

常见引擎：Jinja2 (Python), Twig/Smarty (PHP)

利用目标：沙箱逃逸执行命令或读取配置信息。

五、 现代架构与高级特性

随着 Web 架构的演进，CTF 中也涌现出新的考点。

Node.js 安全

原型链污染 (Prototype Pollution)：修改 Object.prototype 影响全局业务逻辑或导致 RCE。

VM 沙箱逃逸

缓存与代理问题

HTTP 请求走私 (HTTP Request Smuggling)：利用前端代理 (如 HAProxy) 和后端服务器 (如 Tomcat) 对 Content-Length 和 Transfer-Encoding 解析不一致。

云原生安全

Docker API 暴露、容器逃逸机制。

云服务提供商 (AWS, Aliyun) 的 Metadata (元数据) 服务 SSRF 利用，窃取 AccessKey。


