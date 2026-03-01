import{_ as d,I as e,o as r,c as E,j as i,a,J as n,w as g,ab as l}from"./chunks/framework.CEw9AoTv.js";const w=JSON.parse('{"title":"手动集成参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh-Hans/guide/manual-integrate.md","filePath":"zh-Hans/guide/manual-integrate.md"}'),o={name:"zh-Hans/guide/manual-integrate.md"},c={class:"info custom-block"},_={id:"generic-hooks",tabindex:"-1"},y={id:"faccessat-hook",tabindex:"-1"},f={id:"sys-reboot-hook",tabindex:"-1"},u={id:"input-hooks",tabindex:"-1"},b={id:"setuid-hooks",tabindex:"-1"},A={id:"sys-read-hook",tabindex:"-1"},m={id:"how-to-backport-path-umount",tabindex:"-1"};function D(v,s,C,O,F,N){const p=e("CopyOrDownloadAsMarkdownButtons"),h=e("VPNolebaseInlineLinkPreview"),t=e("Badge"),k=e("NolebaseGitChangelog");return r(),E("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1772251583000"},[s[26]||(s[26]=i("div",{style:{display:"none"},hidden:"true","aria-hidden":"true"},"Are you an LLM? You can read better optimized documentation at /zh-Hans/guide/manual-integrate.md for this page in Markdown format",-1)),s[27]||(s[27]=i("h1",{id:"hooks",tabindex:"-1"},[a("手动集成参考 "),i("a",{class:"header-anchor",href:"#hooks","aria-label":"Permalink to “手动集成参考”"},"​")],-1)),n(p),s[28]||(s[28]=i("h2",{id:"scope-minimized-hooks",tabindex:"-1"},[a("手动挂钩 "),i("a",{class:"header-anchor",href:"#scope-minimized-hooks","aria-label":"Permalink to “手动挂钩”"},"​")],-1)),s[29]||(s[29]=i("div",{class:"danger custom-block"},[i("p",{class:"custom-block-title"},"Notice："),i("p",null,[a("ReSukiSU 将会检查此处每一条 hook，如果缺少，将会"),i("strong",null,"导致编译失败")])],-1)),i("div",c,[s[2]||(s[2]=i("p",{class:"custom-block-title"},"提示",-1)),i("p",null,[s[1]||(s[1]=a("这一部分的钩子，改编于 ",-1)),n(h,{href:"https://github.com/backslashxx/KernelSU/issues/5",target:"_blank",rel:"noreferrer"},{default:g(()=>[...s[0]||(s[0]=[i("code",null,"backslashxx/KernelSU #5",-1)])]),_:1})])]),i("h3",_,[s[3]||(s[3]=a("通用钩子 ",-1)),n(t,{type:"danger",text:"必加"}),s[4]||(s[4]=a()),s[5]||(s[5]=i("a",{class:"header-anchor",href:"#generic-hooks","aria-label":"Permalink to “通用钩子”"},"​",-1))]),s[30]||(s[30]=l(`<div class="vp-code-group"><div class="tabs"><input type="radio" name="group-21" id="tab-22" checked><label data-title="exec.c" for="tab-22">exec.c</label><input type="radio" name="group-21" id="tab-23"><label data-title="stat.c" for="tab-23">stat.c</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/exec.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/exec.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -1886,12 +1886,26 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static int do_execveat_common(int fd, struct filename *filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return retval;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+__attribute__((hot))</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_execveat(int *fd, struct filename **filename_ptr,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				void *argv, void *envp, int *flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> int do_execve(struct filename *filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	const char __user *const __user *__argv,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	const char __user *const __user *__envp)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	struct user_arg_ptr argv = { .ptr.native = __argv };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	struct user_arg_ptr envp = { .ptr.native = __envp };</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_execveat((int *)AT_FDCWD, &amp;filename, &amp;argv, &amp;envp, 0);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return do_execveat_common(AT_FDCWD, filename, argv, envp, 0);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -1919,6 +1933,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static int compat_do_execve(struct filename *filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		.is_compat = true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		.ptr.compat = __envp,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	};</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK // 32-bit ksud and 32-on-64 support</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_execveat((int *)AT_FDCWD, &amp;filename, &amp;argv, &amp;envp, 0);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return do_execveat_common(AT_FDCWD, filename, argv, envp, 0);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/stat.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/stat.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -353,6 +353,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE2(newlstat, const char __user *, filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return cp_new_stat(&amp;stat, statbuf);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+__attribute__((hot)) </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_stat(int *dfd, const char __user **filename_user,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				int *flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern void ksu_handle_newfstat_ret(unsigned int *fd, struct stat __user **statbuf_ptr);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#if defined(__ARCH_WANT_STAT64) || defined(__ARCH_WANT_COMPAT_STAT64)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern void ksu_handle_fstat64_ret(unsigned long *fd, struct stat64 __user **statbuf_ptr); // optional</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #if !defined(__ARCH_WANT_STAT64) || defined(__ARCH_WANT_SYS_NEWFSTATAT)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(newfstatat, int, dfd, const char __user *, filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		struct stat __user *, statbuf, int, flag)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -360,6 +364,9 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(newfstatat, int, dfd, const char __user *, filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	struct kstat stat;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	int error;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_stat(&amp;dfd, &amp;filename, &amp;flag);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	error = vfs_fstatat(dfd, filename, &amp;stat, flag);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		return error;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -504,6 +511,9 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(fstatat64, int, dfd, const char __user *, filename,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	struct kstat stat;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	int error;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK // 32-bit su</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_stat(&amp;dfd, &amp;filename, &amp;flag); </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	error = vfs_fstatat(dfd, filename, &amp;stat, flag);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		return error;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -364,X +364,XX @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SYSCALL_DEFINE2(newfstat, unsigned int, fd, struct stat __user *, statbuf)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	struct kstat stat;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	int error = vfs_fstat(fd, &amp;stat);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	if (!error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		error = cp_new_stat(&amp;stat, statbuf);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_newfstat_ret(&amp;fd, &amp;statbuf);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	return error;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -490,X +497,X @@</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SYSCALL_DEFINE2(fstat64, unsigned long, fd, struct stat64 __user *, statbuf)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	struct kstat stat;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	int error = vfs_fstat(fd, &amp;stat);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	if (!error)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		error = cp_new_stat64(&amp;stat, statbuf);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK // for 32-bit</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_fstat64_ret(&amp;fd, &amp;statbuf);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	return error;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,1)),i("h3",y,[s[6]||(s[6]=a("faccessat hook ",-1)),n(t,{type:"danger",text:"必加"}),s[7]||(s[7]=a()),s[8]||(s[8]=i("a",{class:"header-anchor",href:"#faccessat-hook","aria-label":"Permalink to “faccessat hook”"},"​",-1))]),s[31]||(s[31]=l(`<p>对于此 hook，不同版本内核不一致，此处单独说明</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-31" id="tab-32" checked><label data-title="4.19+" for="tab-32">4.19+</label><input type="radio" name="group-31" id="tab-33"><label data-title="4.19-" for="tab-33">4.19-</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/open.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/open.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -450,8 +450,16 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> long do_faccessat(int dfd, const char __user *filename, int mode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+__attribute__((hot)) </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_faccessat(int *dfd, const char __user **filename_user,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				int *mode, int *flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE3(faccessat, int, dfd, const char __user *, filename, int, mode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_faccessat(&amp;dfd, &amp;filename, &amp;mode, NULL);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return do_faccessat(dfd, filename, mode);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/open.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/open.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -354,6 +354,11 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(fallocate, int, fd, int, mode, loff_t, offset, loff_t, len)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return error;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+__attribute__((hot)) </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_faccessat(int *dfd, const char __user **filename_user,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				int *mode, int *flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * access() needs to use the real uid/gid, not the effective uid/gid.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * We do this by temporarily clearing all FS-related capabilities and</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -369,6 +374,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE3(faccessat, int, dfd, const char __user *, filename, int, mode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	int res;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	unsigned int lookup_flags = LOOKUP_FOLLOW;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_faccessat(&amp;dfd, &amp;filename, &amp;mode, NULL);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (mode &amp; ~S_IRWXO)	/* where&#39;s F_OK, X_OK, W_OK, R_OK? */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		return -EINVAL;</span></span></code></pre></div></div></div>`,2)),i("h3",f,[s[9]||(s[9]=a("sys_reboot hook ",-1)),n(t,{type:"danger",text:"必加"}),s[10]||(s[10]=a()),s[11]||(s[11]=i("a",{class:"header-anchor",href:"#sys-reboot-hook","aria-label":"Permalink to “sys_reboot hook”"},"​",-1))]),s[32]||(s[32]=l(`<p>对于此 hook，不同版本内核不一致，此处单独说明</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-41" id="tab-42" checked><label data-title="3.11+" for="tab-42">3.11+</label><input type="radio" name="group-41" id="tab-43"><label data-title="3.11-" for="tab-43">3.11-</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/kernel/reboot.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/kernel/reboot.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -277,6 +277,11 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static DEFINE_MUTEX(reboot_mutex);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  *</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * reboot doesn&#39;t sync: do that yourself before calling this.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_sys_reboot(int magic1, int magic2, unsigned int cmd, void __user **arg);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(reboot, int, magic1, int, magic2, unsigned int, cmd,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		void __user *, arg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -284,6 +289,9 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(reboot, int, magic1, int, magic2, unsigned int, cmd,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	char buffer[256];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	int ret = 0;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ksu_handle_sys_reboot(magic1, magic2, cmd, &amp;arg);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	/* We only trust the superuser with rebooting the system. */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (!ns_capable(pid_ns-&gt;user_ns, CAP_SYS_BOOT))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		return -EPERM;</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">diff --git a/kernel/sys.c b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index a3bef5bd..08d196f5 100644</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -455,6 +455,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EXPORT_SYMBOL_GPL(kernel_power_off);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static DEFINE_MUTEX(reboot_mutex);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_sys_reboot(int magic1, int magic2, unsigned int cmd, void __user **arg);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * Reboot system call: for obvious reasons only root may call it,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * and even root needs to set up some magic numbers in the registers</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -470,6 +474,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE4(reboot, int, magic1, int, magic2, unsigned int, cmd,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        char buffer[256];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        int ret = 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+       ksu_handle_sys_reboot(magic1, magic2, cmd, &amp;arg);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        /* We only trust the superuser with rebooting the system. */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (!ns_capable(pid_ns-&gt;user_ns, CAP_SYS_BOOT))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                return -EPERM;</span></span></code></pre></div></div></div>`,2)),i("h3",u,[s[12]||(s[12]=a("input hooks ",-1)),n(t,{type:"tip",text:"按需必加"}),s[13]||(s[13]=a()),s[14]||(s[14]=i("a",{class:"header-anchor",href:"#input-hooks","aria-label":"Permalink to “input hooks”"},"​",-1))]),s[33]||(s[33]=l(`<div class="warning custom-block"><p class="custom-block-title">一般无需此手动 hook</p><p>对于 input handler 未损坏的内核，只需保证 <code>CONFIG_KSU_MANUAL_HOOK_AUTO_INPUT_HOOK</code> 处于启用状态，此 hook 即可通过 input_hanlder 自动应用</p></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-53" id="tab-54" checked><label data-title="input.c" for="tab-54">input.c</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/drivers/input/input.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/drivers/input/input.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -436,11 +436,22 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static void input_handle_event(struct input_dev *dev,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * to &#39;seed&#39; initial state of a switch or initial position of absolute</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * axis, etc.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern bool ksu_input_hook __read_mostly;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern __attribute__((cold)) int ksu_handle_input_handle_event(</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+			unsigned int *type, unsigned int *code, int *value);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> void input_event(struct input_dev *dev,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		 unsigned int type, unsigned int code, int value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	unsigned long flags;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (unlikely(ksu_input_hook))</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		ksu_handle_input_handle_event(&amp;type, &amp;code, &amp;value);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (is_event_supported(type, dev-&gt;evbit, EV_MAX)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		spin_lock_irqsave(&amp;dev-&gt;event_lock, flags);</span></span></code></pre></div></div></div>`,2)),i("h3",b,[s[15]||(s[15]=a("setuid hooks ",-1)),n(t,{type:"warning",text:"6.8+ 必加"}),s[16]||(s[16]=a()),n(t,{type:"warning",text:"4.2- 必加"}),s[17]||(s[17]=a()),s[18]||(s[18]=i("a",{class:"header-anchor",href:"#setuid-hooks","aria-label":"Permalink to “setuid hooks”"},"​",-1))]),s[34]||(s[34]=l(`<div class="warning custom-block"><p class="custom-block-title">大部分版本不需要此手动 hook</p><p>对于 4.2~6.8 (不包括 6.8) 的内核，只需保证 <code>CONFIG_KSU_MANUAL_HOOK_AUTO_SETUID_HOOK</code> 处于启用状态，此 hook 即可通过 LSM 自动应用</p></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-64" id="tab-65" checked><label data-title="4.17+" for="tab-65">4.17+</label><input type="radio" name="group-64" id="tab-66"><label data-title="4.17-" for="tab-66">4.17-</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">diff --git a/kernel/sys.c b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index 4a87dc5fa..aac25df8c 100644</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -679,6 +679,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE1(setuid, uid_t, uid)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_setresuid(uid_t ruid, uid_t euid, uid_t suid);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * This function implements a generic ability to update ruid, euid,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * and suid.  This allows you to implement the 4.4 compatible seteuid().</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -692,6 +696,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> long __sys_setresuid(uid_t ruid, uid_t euid, uid_t suid)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        kuid_t kruid, keuid, ksuid;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bool ruid_new, euid_new, suid_new;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+       (void)ksu_handle_setresuid(ruid, euid, suid);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        kruid = make_kuid(ns, ruid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        keuid = make_kuid(ns, euid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ksuid = make_kuid(ns, suid);</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">diff --git a/kernel/sys.c b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index a3bef5bd..0b116d7c 100644</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/kernel/sys.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -835,6 +843,9 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return retval;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern int ksu_handle_setresuid(uid_t ruid, uid_t euid, uid_t suid);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * This function implements a generic ability to update ruid, euid,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -848,6 +859,10 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE3(setresuid, uid_t, ruid, uid_t, euid, uid_t, suid)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        int retval;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        kuid_t kruid, keuid, ksuid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+       (void)ksu_handle_setresuid(ruid, euid, suid);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        kruid = make_kuid(ns, ruid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        keuid = make_kuid(ns, euid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ksuid = make_kuid(ns, suid);</span></span></code></pre></div></div></div>`,2)),i("h3",A,[s[19]||(s[19]=a("sys_read hook ",-1)),n(t,{type:"warning",text:"6.8+ 必加"}),s[20]||(s[20]=a()),n(t,{type:"warning",text:"4.2- 必加"}),s[21]||(s[21]=a()),s[22]||(s[22]=i("a",{class:"header-anchor",href:"#sys-read-hook","aria-label":"Permalink to “sys_read hook”"},"​",-1))]),s[35]||(s[35]=l(`<div class="warning custom-block"><p class="custom-block-title">大部分版本不需要此手动 hook</p><p>对于 4.2~6.8 (不包括 6.8) 的内核，只需保证 <code>CONFIG_KSU_MANUAL_HOOK_AUTO_INITRC_HOOK</code> 处于启用状态，此 hook 即可通过 LSM 自动应用</p></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-76" id="tab-77" checked><label data-title="4.19+" for="tab-77">4.19+</label><input type="radio" name="group-76" id="tab-78"><label data-title="4.19-" for="tab-78">4.19-</label></div><div class="blocks"><div class="language-diff active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/read_write.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/read_write.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -586,8 +586,18 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssize_t ksys_read(unsigned int fd, char __user *buf, size_t count)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return ret;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern bool ksu_init_rc_hook __read_mostly;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern __attribute__((cold)) int ksu_handle_sys_read(unsigned int fd,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				char __user **buf_ptr, size_t *count_ptr);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE3(read, unsigned int, fd, char __user *, buf, size_t, count)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (unlikely(ksu_init_rc_hook)) </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		ksu_handle_sys_read(fd, &amp;buf, &amp;count);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	return ksys_read(fd, buf, count);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/read_write.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/read_write.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -568,11 +568,21 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static inline void file_pos_write(struct file *file, loff_t pos)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		file-&gt;f_pos = pos;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern bool ksu_init_rc_hook __read_mostly;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+extern __attribute__((cold)) int ksu_handle_sys_read(unsigned int fd,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+				char __user **buf_ptr, size_t *count_ptr);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SYSCALL_DEFINE3(read, unsigned int, fd, char __user *, buf, size_t, count)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	struct fd f = fdget_pos(fd);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	ssize_t ret = -EBADF;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#ifdef CONFIG_KSU_MANUAL_HOOK</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (unlikely(ksu_init_rc_hook)) </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		ksu_handle_sys_read(fd, &amp;buf, &amp;count);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+#endif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 	if (f.file) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		loff_t pos = file_pos_read(f.file);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 		ret = vfs_read(f.file, buf, count, &amp;pos);</span></span></code></pre></div></div></div>`,2)),i("h2",m,[s[23]||(s[23]=a("path_umount ",-1)),n(t,{type:"info",text:"可选"}),s[24]||(s[24]=a()),s[25]||(s[25]=i("a",{class:"header-anchor",href:"#how-to-backport-path-umount","aria-label":"Permalink to “path_umount”"},"​",-1))]),s[36]||(s[36]=l(`<div class="info custom-block"><p class="custom-block-title">Notes</p><p>这是一个可选选项，你可以不移植这一部分</p></div><p>你可以通过从 K5.9 向旧版本移植 <code>path_umount</code>，在 GKI 之前的内核上获得卸载模块的功能。你可以通过以下补丁作为参考:</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">--- a/fs/namespace.c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+++ b/fs/namespace.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-light-font-weight:bold;--shiki-dark:#B392F0;--shiki-dark-font-weight:bold;">@@ -1739,6 +1739,39 @@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static inline bool may_mandlock(void)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #endif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+static int can_umount(const struct path *path, int flags)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+{</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	struct mount *mnt = real_mount(path-&gt;mnt);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (flags &amp; ~(MNT_FORCE | MNT_DETACH | MNT_EXPIRE | UMOUNT_NOFOLLOW))</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EINVAL;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (!may_mount())</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EPERM;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (path-&gt;dentry != path-&gt;mnt-&gt;mnt_root)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EINVAL;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (!check_mnt(mnt))</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EINVAL;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (mnt-&gt;mnt.mnt_flags &amp; MNT_LOCKED) /* Check optimistically */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EINVAL;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (flags &amp; MNT_FORCE &amp;&amp; !capable(CAP_SYS_ADMIN))</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		return -EPERM;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	return 0;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+int path_umount(struct path *path, int flags)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+{</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	struct mount *mnt = real_mount(path-&gt;mnt);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	int ret;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	ret = can_umount(path, flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	if (!ret)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+		ret = do_umount(mnt, flags);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	/* we mustn&#39;t call path_put() as that would clear mnt_expiry_mark */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	dput(path-&gt;dentry);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	mntput_no_expire(mnt);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+	return ret;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * Now umount can handle mount points as well as block devices.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  * This is important for filesystems which use unnamed block devices.</span></span></code></pre></div>`,3)),n(k)])}const L=d(o,[["render",D]]);export{w as __pageData,L as default};
