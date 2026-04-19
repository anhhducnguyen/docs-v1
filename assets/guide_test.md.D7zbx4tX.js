import{D as e,f as t,u as n}from"./chunks/runtime-core.esm-bundler.DKQjezWN.js";import{t as r}from"./chunks/plugin-vue_export-helper.Bz49raAe.js";const i=JSON.parse(`{"title":"","description":"","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://anhhducnguyen.github.io/docs-v1/guide/test"}],["meta",{"property":"og:title","content":""}],["meta",{"property":"og:description","content":"Vite & Vue powered static site generator."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en_US"}],["meta",{"property":"og:site_name","content":""}],["meta",{"property":"og:image","content":"https://anhhducnguyen.github.io/docs-v1/vitepress-og.jpg"}],["meta",{"property":"og:image:secure_url","content":"https://anhhducnguyen.github.io/docs-v1/vitepress-og.jpg"}],["meta",{"property":"og:image:type","content":"image/jpeg"}],["meta",{"property":"og:image:width","content":"1280"}],["meta",{"property":"og:image:height","content":"640"}],["meta",{"property":"og:image:alt","content":""}],["link",{"rel":"canonical","href":"https://anhhducnguyen.github.io/docs-v1/guide/test"}]]},"headers":[],"relativePath":"guide/test.md","filePath":"en/guide/test.md","lastUpdated":1775814308000}`);var a={name:`guide/test.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<div style="display:none;" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /docs-v1/guide/test.md for this page in Markdown format</div><p><img src="/docs-v1/test.png" alt="An image"></p><h2 id="_1-tao-script-thuc-thi-o-moi-noi" tabindex="-1">1. Tạo script thực thi ở mọi nơi <a class="header-anchor" href="#_1-tao-script-thuc-thi-o-moi-noi" aria-label="Permalink to “1. Tạo script thực thi ở mọi nơi”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo nano /usr/local/bin/setupterminal</span></span></code></pre></div><h2 id="_2-them-noi-dung" tabindex="-1">2. Thêm nội dung <a class="header-anchor" href="#_2-them-noi-dung" aria-label="Permalink to “2. Thêm nội dung”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>echo &quot;🚀 Setting up your beautiful terminal...&quot;</span></span>
<span class="line"><span>sudo apt update -y &amp;&amp; sudo apt install zsh git curl -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Cài Oh My Zsh</span></span>
<span class="line"><span>if [ ! -d &quot;$HOME/.oh-my-zsh&quot; ]; then</span></span>
<span class="line"><span>  sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Cài plugin phổ biến</span></span>
<span class="line"><span>git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</span></span>
<span class="line"><span>git clone https://github.com/zsh-users/zsh-autosuggestions.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Cài theme Powerlevel10k</span></span>
<span class="line"><span>git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Cập nhật ~/.zshrc</span></span>
<span class="line"><span>sed -i &#39;s/^ZSH_THEME=.*/ZSH_THEME=&quot;powerlevel10k\\/powerlevel10k&quot;/&#39; ~/.zshrc</span></span>
<span class="line"><span>sed -i &#39;s/^plugins=(.*/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/&#39; ~/.zshrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;🎨 Done! Restart terminal or run: source ~/.zshrc&quot;</span></span></code></pre></div><h2 id="_3-cho-phep-thuc-thi" tabindex="-1">3. Cho phép thực thi <a class="header-anchor" href="#_3-cho-phep-thuc-thi" aria-label="Permalink to “3. Cho phép thực thi”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod +x /usr/local/bin/setupterminal</span></span>
<span class="line"><span>setupterminal</span></span></code></pre></div><h2 id="_4-vao-file" tabindex="-1">4. Vào file <a class="header-anchor" href="#_4-vao-file" aria-label="Permalink to “4. Vào file”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>code ~/.zshrc</span></span></code></pre></div><h2 id="_5-them-noi-dung" tabindex="-1">5. Thêm nội dung <a class="header-anchor" href="#_5-them-noi-dung" aria-label="Permalink to “5. Thêm nội dung”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># If you come from bash you might have to change your $PATH.</span></span>
<span class="line"><span># export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Enable command auto-completion</span></span>
<span class="line"><span>autoload -U compinit</span></span>
<span class="line"><span>compinit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Path to your Oh My Zsh installation.</span></span>
<span class="line"><span>export ZSH=&quot;$HOME/.oh-my-zsh&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set name of the theme to load --- if set to &quot;random&quot;, it will</span></span>
<span class="line"><span># load a random theme each time Oh My Zsh is loaded, in which case,</span></span>
<span class="line"><span># to know which specific one was loaded, run: echo $RANDOM_THEME</span></span>
<span class="line"><span># See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</span></span>
<span class="line"><span>ZSH_THEME=&quot;bira&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set list of themes to pick from when loading at random</span></span>
<span class="line"><span># Setting this variable when ZSH_THEME=&quot;devcontainers&quot;</span></span>
<span class="line"><span># a theme from this variable instead of looking in $ZSH/themes/</span></span>
<span class="line"><span># If set to an empty array, this variable will have no effect.</span></span>
<span class="line"><span># ZSH_THEME_RANDOM_CANDIDATES=( &quot;robbyrussell&quot; &quot;agnoster&quot; )</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to use case-sensitive completion.</span></span>
<span class="line"><span># CASE_SENSITIVE=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to use hyphen-insensitive completion.</span></span>
<span class="line"><span># Case-sensitive completion must be off. _ and - will be interchangeable.</span></span>
<span class="line"><span># HYPHEN_INSENSITIVE=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment one of the following lines to change the auto-update behavior</span></span>
<span class="line"><span># zstyle &#39;:omz:update&#39; mode disabled  # disable automatic updates</span></span>
<span class="line"><span># zstyle &#39;:omz:update&#39; mode auto      # update automatically without asking</span></span>
<span class="line"><span># zstyle &#39;:omz:update&#39; mode reminder  # just remind me to update when it&#39;s time</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to change how often to auto-update (in days).</span></span>
<span class="line"><span># zstyle &#39;:omz:update&#39; frequency 13</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line if pasting URLs and other text is messed up.</span></span>
<span class="line"><span># DISABLE_MAGIC_FUNCTIONS=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to disable colors in ls.</span></span>
<span class="line"><span># DISABLE_LS_COLORS=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to disable auto-setting terminal title.</span></span>
<span class="line"><span># DISABLE_AUTO_TITLE=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to enable command auto-correction.</span></span>
<span class="line"><span># ENABLE_CORRECTION=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line to display red dots whilst waiting for completion.</span></span>
<span class="line"><span># You can also set it to another string to have that shown instead of the default red dots.</span></span>
<span class="line"><span># e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting...%f&quot;</span></span>
<span class="line"><span># Caution: this setting can cause issues with multiline prompts in zsh &lt; 5.7.1 (see #5765)</span></span>
<span class="line"><span># COMPLETION_WAITING_DOTS=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line if you want to disable marking untracked files</span></span>
<span class="line"><span># under VCS as dirty. This makes repository status check for large repositories</span></span>
<span class="line"><span># much, much faster.</span></span>
<span class="line"><span># DISABLE_UNTRACKED_FILES_DIRTY=&quot;true&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Uncomment the following line if you want to change the command execution time</span></span>
<span class="line"><span># stamp shown in the history command output.</span></span>
<span class="line"><span># You can set one of the optional three formats:</span></span>
<span class="line"><span># &quot;mm/dd/yyyy&quot;|&quot;dd.mm.yyyy&quot;|&quot;yyyy-mm-dd&quot;</span></span>
<span class="line"><span># or set a custom format using the strftime function format specifications,</span></span>
<span class="line"><span># see &#39;man strftime&#39; for details.</span></span>
<span class="line"><span># HIST_STAMPS=&quot;mm/dd/yyyy&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Would you like to use another custom folder than $ZSH/custom?</span></span>
<span class="line"><span># ZSH_CUSTOM=/path/to/new-custom-folder</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Which plugins would you like to load?</span></span>
<span class="line"><span># Standard plugins can be found in $ZSH/plugins/</span></span>
<span class="line"><span># Custom plugins may be added to $ZSH_CUSTOM/plugins/</span></span>
<span class="line"><span># Example format: plugins=(rails git textmate ruby lighthouse)</span></span>
<span class="line"><span># Add wisely, as too many plugins slow down shell startup.</span></span>
<span class="line"><span>plugins=(</span></span>
<span class="line"><span>  git</span></span>
<span class="line"><span>  zsh-autosuggestions</span></span>
<span class="line"><span>  zsh-syntax-highlighting</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>source $ZSH/oh-my-zsh.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span># User configuration</span></span>
<span class="line"><span></span></span>
<span class="line"><span># export MANPATH=&quot;/usr/local/man:$MANPATH&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># You may need to manually set your language environment</span></span>
<span class="line"><span># export LANG=en_US.UTF-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Preferred editor for local and remote sessions</span></span>
<span class="line"><span># if [[ -n $SSH_CONNECTION ]]; then</span></span>
<span class="line"><span>#   export EDITOR=&#39;vim&#39;</span></span>
<span class="line"><span># else</span></span>
<span class="line"><span>#   export EDITOR=&#39;nvim&#39;</span></span>
<span class="line"><span># fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Compilation flags</span></span>
<span class="line"><span># export ARCHFLAGS=&quot;-arch $(uname -m)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Set personal aliases, overriding those provided by Oh My Zsh libs,</span></span>
<span class="line"><span># plugins, and themes. Aliases can be placed here, though Oh My Zsh</span></span>
<span class="line"><span># users are encouraged to define aliases within a top-level file in</span></span>
<span class="line"><span># the $ZSH_CUSTOM folder, with .zsh extension. Examples:</span></span>
<span class="line"><span># - $ZSH_CUSTOM/aliases.zsh</span></span>
<span class="line"><span># - $ZSH_CUSTOM/macos.zsh</span></span>
<span class="line"><span># For a full list of active aliases, run \`alias\`.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Example aliases</span></span>
<span class="line"><span># alias zshconfig=&quot;mate ~/.zshrc&quot;</span></span>
<span class="line"><span># alias ohmyzsh=&quot;mate ~/.oh-my-zsh&quot;</span></span>
<span class="line"><span>DISABLE_AUTO_UPDATE=true</span></span>
<span class="line"><span>DISABLE_UPDATE_PROMPT=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>alias ls=&#39;lsd --group-dirs=first --long --icon=never&#39;</span></span></code></pre></div><h2 id="_6-dung-lenh" tabindex="-1">6. Dùng lệnh <a class="header-anchor" href="#_6-dung-lenh" aria-label="Permalink to “6. Dùng lệnh”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zsh</span></span></code></pre></div><h2 id="_7-thuc-thi" tabindex="-1">7. Thực thi <a class="header-anchor" href="#_7-thuc-thi" aria-label="Permalink to “7. Thực thi”">​</a></h2><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>echo &#39;if [ -t 1 ]; then exec zsh; fi&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>source ~/.bashrc</span></span></code></pre></div><div class="language-"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>https://github.com/holman/dotfiles</span></span></code></pre></div>`,17)]])}var s=r(a,[[`render`,o]]);export{i as __pageData,s as default};