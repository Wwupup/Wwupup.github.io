"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"git-blog","metadata":{"permalink":"/blog/git-blog","source":"@site/blog/git\u5e38\u89c1\u95ee\u9898.md","title":"git\u5e38\u89c1\u95ee\u9898","description":"\u539f\u56e0\u662f\u6ca1\u6709\u5bf9upstream\u8fdb\u884crebase\uff0c\u8fdb\u884cgit rebase upstream master \u5e76\u5904\u7406\u51b2\u7a81\u5373\u53ef\u3002","date":"2023-01-11T01:38:18.000Z","formattedDate":"January 11, 2023","tags":[{"label":"git","permalink":"/blog/tags/git"},{"label":"github","permalink":"/blog/tags/github"}],"readingTime":1.355,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"git-blog","title":"git\u5e38\u89c1\u95ee\u9898","tags":["git","github"]},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"```bash\\ngit log -4 # 4\u8868\u793a\u663e\u793a4\u6761\u8bb0\u5f55\\n# \u8bb0\u5f55\\n\'\'\'\\n85d5d8fa468b06bb9a62fafde01d80cbb7396682 # \u6211\u6539\u7684\\n621ca4121f971d9604e395556763551427d799d9 # \u6211\u6539\u7684\\nf744d2e91916ab7831f3a7695d1d1825916db164 # \u6211\u6539\u7684\\n5c135e49e683563fa470d7f5c281050ec1d73af9 # \u6211\u6539\u7684\\n295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # \u522b\u4eba\u6539\u7684\\n\'\'\'\\n\\n# \u65b9\u6cd51.\\ngit reset --soft 295ac3b842b4ecb6eff1c9954a281a4606a8bc84 # \u522b\u4eba\u6539\u7684commitID\\n\\n# \u65b9\u6cd52.\\ngit rebase -i HEAD~4\\n\\ngit add -u\\ngit commit -m \\"msg\\"\\ngit push <...> -f #\u5f3a\u5236push\\n```\\n# \u63d0\u4ea4PR\u65f6\uff0c\u91cd\u590d\u51fa\u73b0\u5df2\u7ecfMR\u7684commit\u4fe1\u606f\uff0c\u5e72\u6270diff\u67e5\u770b\\n\u539f\u56e0\u662f\u6ca1\u6709\u5bf9upstream\u8fdb\u884crebase\uff0c\u8fdb\u884c`git rebase upstream master` \u5e76\u5904\u7406\u51b2\u7a81\u5373\u53ef\u3002\\n\\n# git\u5e38\u7528\u547d\u4ee4\\n```bash\\ngit checkout -b branch-name # \u65b0\u5efa\u5206\u652f\u5e76\u5207\u6362\\ngit checkout branch-name # \u5207\u6362\u5230\u76ee\u6807\u5206\u652f\\ngit checkout -b branch-name origin/up-branch-name #\u65b0\u5efa\u5206\u652f\u5e76\u62c9\u53d6\u8fdc\u7a0b\u5206\u652f\\ngit branch # \u67e5\u770b\u6240\u6709\u672c\u5730\u5206\u652f\\ngit branch -D # \u76f4\u63a5\u5220\u9664\u672c\u5730\u5206\u652f\\ngit reset --soft commitID # \u64a4\u9500commit\u5e76\u5c06\u6539\u52a8\u653e\u5230\u6682\u5b58\u533a\\ngit log -[number] # \u67e5\u770blog\u8bb0\u5f55\uff0c\u663e\u793anumber\u6761\\ngit log --oneline # \u67e5\u770blog\u8bb0\u5f55\uff0c\u4ec5\u663e\u793a\u7b80\u5355\u4fe1\u606f\\ngit log --graph # \u67e5\u770blog\u8bb0\u5f55\uff0c\u663e\u793a\u5173\u7cfb\u56fe\\ngit commit --amend # \u5c06\u6682\u5b58\u533a\u7684\u6539\u52a8\u8ffd\u52a0\u8fdb\u4e0a\u4e00\u6b21commit\\n```"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"git\u5e38\u89c1\u95ee\u9898","permalink":"/blog/git-blog"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);