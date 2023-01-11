"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=g(n),u=a,b=s["".concat(l,".").concat(u)]||s[u]||p[u]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=n(7462),a=(n(7294),n(3905));const o={slug:"git-blog",title:"git\u5e38\u89c1\u95ee\u9898",tags:["git","github"]},i="\u5408\u5e76\u591a\u4e2acommit\uff1a",c={permalink:"/blog/git-blog",source:"@site/blog/git\u5e38\u89c1\u95ee\u9898.md",title:"git\u5e38\u89c1\u95ee\u9898",description:"\u539f\u56e0\u662f\u6ca1\u6709\u5bf9upstream\u8fdb\u884crebase\uff0c\u8fdb\u884cgit rebase upstream master \u5e76\u5904\u7406\u51b2\u7a81\u5373\u53ef\u3002",date:"2023-01-11T01:38:18.000Z",formattedDate:"January 11, 2023",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"github",permalink:"/blog/tags/github"}],readingTime:1.355,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"git-blog",title:"git\u5e38\u89c1\u95ee\u9898",tags:["git","github"]},nextItem:{title:"First Blog Post",permalink:"/blog/first-blog-post"}},l={authorsImageUrls:[]},g=[],m={toc:g};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git log -4 # 4\u8868\u793a\u663e\u793a4\u6761\u8bb0\u5f55\n# \u8bb0\u5f55\n'''\n85d5d8fa468b06bb9a62fafde01d80cbb7396682 # \u6211\u6539\u7684\n621ca4121f971d9604e395556763551427d799d9 # \u6211\u6539\u7684\nf744d2e91916ab7831f3a7695d1d1825916db164 # \u6211\u6539\u7684\n5c135e49e683563fa470d7f5c281050ec1d73af9 # \u6211\u6539\u7684\n295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # \u522b\u4eba\u6539\u7684\n'''\n\n# \u65b9\u6cd51.\ngit reset --soft 295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # \u522b\u4eba\u6539\u7684commitID\n\n# \u65b9\u6cd52.\ngit rebase -i HEAD~4\n\ngit add -u\ngit commit -m \"msg\"\ngit push <...> -f #\u5f3a\u5236push\n")),(0,a.kt)("h1",{id:"\u63d0\u4ea4pr\u65f6\u91cd\u590d\u51fa\u73b0\u5df2\u7ecfmr\u7684commit\u4fe1\u606f\u5e72\u6270diff\u67e5\u770b"},"\u63d0\u4ea4PR\u65f6\uff0c\u91cd\u590d\u51fa\u73b0\u5df2\u7ecfMR\u7684commit\u4fe1\u606f\uff0c\u5e72\u6270diff\u67e5\u770b"),(0,a.kt)("p",null,"\u539f\u56e0\u662f\u6ca1\u6709\u5bf9upstream\u8fdb\u884crebase\uff0c\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase upstream master")," \u5e76\u5904\u7406\u51b2\u7a81\u5373\u53ef\u3002"),(0,a.kt)("h1",{id:"git\u5e38\u7528\u547d\u4ee4"},"git\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b branch-name # \u65b0\u5efa\u5206\u652f\u5e76\u5207\u6362\ngit checkout branch-name # \u5207\u6362\u5230\u76ee\u6807\u5206\u652f\ngit checkout -b branch-name origin/up-branch-name #\u65b0\u5efa\u5206\u652f\u5e76\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f\ngit branch # \u67e5\u770b\u6240\u6709\u672c\u5730\u5206\u652f\ngit branch -D # \u76f4\u63a5\u5220\u9664\u672c\u5730\u5206\u652f\ngit reset --soft commitID # \u64a4\u9500commit\u5e76\u5c06\u6539\u52a8\u653e\u5230\u6682\u5b58\u533a\ngit log -[number] # \u67e5\u770blog\u8bb0\u5f55\uff0c\u663e\u793anumber\u6761\ngit log --oneline # \u67e5\u770blog\u8bb0\u5f55\uff0c\u4ec5\u663e\u793a\u7b80\u5355\u4fe1\u606f\ngit log --graph # \u67e5\u770blog\u8bb0\u5f55\uff0c\u663e\u793a\u5173\u7cfb\u56fe\ngit commit --amend # \u5c06\u6682\u5b58\u533a\u7684\u6539\u52a8\u8ffd\u52a0\u8fdb\u4e0a\u4e00\u6b21commit\n")))}s.isMDXComponent=!0}}]);