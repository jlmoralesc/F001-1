(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{102:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(98),m=t(94),i=t(101),c=t(96),o=t(104),s=t(97),g=t(51),v=t.n(g),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,g,u,d=e.children,p=e.frontMatter,_=e.metadata,h=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,f=_.date,k=_.permalink,w=_.tags,y=_.readingTime,I=p.author,x=p.title,M=p.image,P=p.keywords,R=p.author_url||p.authorURL,J=p.author_title||p.authorTitle,T=p.author_image_url||p.authorImageURL,A=Object(s.a)(M,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,P&&P.length&&r.a.createElement("meta",{name:"keywords",content:P.join(",")}),M&&r.a.createElement("meta",{property:"og:image",content:A}),M&&r.a.createElement("meta",{property:"twitter:image",content:A}),M&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=f.substring(0,10).split("-"),n=t[0],g=E[parseInt(t[1],10)-1],u=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",v.a.blogPostTitle)},N?x:r.a.createElement(c.a,{to:k},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:f,className:v.a.blogPostDate},g," ",u,", ",n," ",y&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},T&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:R,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:T,alt:I})),r.a.createElement("div",{className:"avatar__intro"},I&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:R,target:"_blank",rel:"noreferrer noopener"},I)),r.a.createElement("small",{className:"avatar__subtitle"},J)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},d)),(w.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),w.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:_.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More"))))))}},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(100),m=t(102),i=t(96);var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,o=n.description,s=n.nextItem,g=n.prevItem,v=n.editUrl;return r.a.createElement(l.a,{title:i,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:s,prevItem:g}))))))}}}]);