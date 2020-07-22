(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(131)),c={id:"basic",title:"Conceptos B\xe1sicos",sidebar_label:"Conceptos"},o={id:"basic",isDocsHomePage:!1,title:"Conceptos B\xe1sicos",description:"La facturaci\xf3n electr\xf3nica implica conocer algunos aspectos que difieren de la facturaci\xf3n tradicional, antes de empezar la implementaci\xf3n.",source:"@site/docs\\basic.md",permalink:"/docs/basic",editUrl:"https://github.com/thegreenter/F001-1/edit/master/website/docs/basic.md",sidebar_label:"Conceptos",sidebar:"docs",previous:{title:"FE Primer",permalink:"/docs/"},next:{title:"Convertirse en emisor electr\xf3nico",permalink:"/docs/autorization"}},l=[{value:"Comprobantes electr\xf3nicos",id:"comprobantes-electr\xf3nicos",children:[]},{value:"Series y correlativos",id:"series-y-correlativos",children:[{value:"Factura",id:"factura",children:[]},{value:"Boleta de Venta",id:"boleta-de-venta",children:[]}]},{value:"Firma digital",id:"firma-digital",children:[]},{value:"Env\xedo a SUNAT",id:"env\xedo-a-sunat",children:[]},{value:"Terceras partes",id:"terceras-partes",children:[{value:"Proveedor de Servicios Electr\xf3nicos (PSE)",id:"proveedor-de-servicios-electr\xf3nicos-pse",children:[]},{value:"Operador de Servicios Electr\xf3nicos (OSE)",id:"operador-de-servicios-electr\xf3nicos-ose",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"La facturaci\xf3n electr\xf3nica implica conocer algunos aspectos que difieren de la facturaci\xf3n tradicional, antes de empezar la implementaci\xf3n."),Object(i.b)("h2",{id:"comprobantes-electr\xf3nicos"},"Comprobantes electr\xf3nicos"),Object(i.b)("p",null,"Hay una lista de comprobantes que se pueden emitir electr\xf3nicamente, aunque no todos se pueden emitir desde los sistemas del contribuyente (SEE)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Compobante"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SEE"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Factura"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boleta"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nota de cr\xe9dito"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nota de d\xe9bito"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comprobante de Retenci\xf3n"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comprobante de Percepci\xf3n"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recibo por honorarios"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2796")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Recibo de servicios p\xfablicos"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gu\xeda de remisi\xf3n"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Liquidaci\xf3n de compra"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2796")))),Object(i.b)("h2",{id:"series-y-correlativos"},"Series y correlativos"),Object(i.b)("p",null,"Al emitir comprobantes electr\xf3nicos ya no necesita autorizar o informar a SUNAT las series que utilizar\xe1, pero debe seguir ciertos criterios que ver\xe1 a continuaci\xf3n, en el caso de los correlativos siguen siendo num\xe9ricos."),Object(i.b)("h3",{id:"factura"},"Factura"),Object(i.b)("p",null,"La serie de facturas empiezan con la letra ",Object(i.b)("inlineCode",{parentName:"p"},"F"),", seguido de 3 caracterse alfanumericos.",Object(i.b)("br",{parentName:"p"}),"\n","Ejemplos v\xe1lidos e inv\xe1lidos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"F001")," "),Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"FAAA")),Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"FB01")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"0001")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"B001")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"F03"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Notas de Cr\xe9dito y D\xe9bito")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Si una nota de credito/debito se emite referenciando a una factura, esta debe cumplir con el mismo formato de serie, es decir para el caso de Facturas, sus notas de credito/debito deben tener series que empiecen con la letra ",Object(i.b)("inlineCode",{parentName:"p"},"F"),"."))),Object(i.b)("h3",{id:"boleta-de-venta"},"Boleta de Venta"),Object(i.b)("p",null,"La serie de boletas de venta empiezan con la letra ",Object(i.b)("inlineCode",{parentName:"p"},"B"),", seguido de 3 caracterse alfanumericos.",Object(i.b)("br",{parentName:"p"}),"\n","Ejemplos v\xe1lidos e inv\xe1lidos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"B001")," "),Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"BAAZ")),Object(i.b)("li",{parentName:"ul"},"\u2714\ufe0f ",Object(i.b)("inlineCode",{parentName:"li"},"BA03")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"0001")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"F001")),Object(i.b)("li",{parentName:"ul"},"\u274c ",Object(i.b)("inlineCode",{parentName:"li"},"B01"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Notas de Cr\xe9dito y D\xe9bito")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Si una nota de credito/debito se emite referenciando a una boleta, esta debe cumplir con el mismo formato de serie, es decir para el caso de Facturas, sus notas de credito/debito deben tener series que empiecen con la letra ",Object(i.b)("inlineCode",{parentName:"p"},"B"),"."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Las series tipo ",Object(i.b)("inlineCode",{parentName:"p"},"E001-1"),", lo poseen comprobantes emitidos desde el Portal de SUNAT.  "))),Object(i.b)("h2",{id:"firma-digital"},"Firma digital"),Object(i.b)("p",null,"Los comprobantes electr\xf3nicos t\xe9cnicamente son archivos en formato XML, que siguen las especificaciones de ",Object(i.b)("strong",{parentName:"p"},"OASIS Universal Business Language (UBL)"),", existen varias versiones, actualmente SUNAT exige utilizar la versi\xf3n ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.datypic.com/sc/ubl21/ss.html"}),"UBL v2.1"),"."),Object(i.b)("p",null,"Adem\xe1s de generar estos archivos XML, se necesita firmarlos digitalmente con un certificado digital v\xe1lido; existen varias herramientas para realizar esta firma y tambi\xe9n diferentes proveedores que ofrecen este certificado, y que veremos m\xe1s adelante."),Object(i.b)("h2",{id:"env\xedo-a-sunat"},"Env\xedo a SUNAT"),Object(i.b)("p",null,"SUNAT expone varios ",Object(i.b)("inlineCode",{parentName:"p"},"webservices")," basados en ",Object(i.b)("inlineCode",{parentName:"p"},"SOAP")," (para pruebas y producci\xf3n), para recepcionar los comprobantes electr\xf3nicos de las empresas, aunque previamente tendremos que comprimir nuestros comprobantes (XML firmados) en formato ",Object(i.b)("inlineCode",{parentName:"p"},"zip"),", ya que es la entrada de datos que espera el webservices."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Plazos")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Los comprobantes deberian ser comunicados a SUNAT lo mas pronto posible, posterior a su emisi\xf3n, aunque tienen ",Object(i.b)("strong",{parentName:"p"},"un plazo de 7 dias"),"."))),Object(i.b)("h2",{id:"terceras-partes"},"Terceras partes"),Object(i.b)("p",null,"Sunat ha delegado cierta responsibilidad sobre algunas empresas para llevar a cabo el proceso de facturaci\xf3n electr\xf3nica en el pais, hay una clasificacion de esto."),Object(i.b)("h3",{id:"proveedor-de-servicios-electr\xf3nicos-pse"},"Proveedor de Servicios Electr\xf3nicos (PSE)"),Object(i.b)("p",null,"En la pr\xe1ctica utilizan sus certificados digitales para firmar los comprobantes electr\xf3nicos (XML) de otras empresas, esto quiere decir que la empresa no tendra que adquirir un certificado digital por su cuenta.",Object(i.b)("br",{parentName:"p"}),"\n","Adem\xe1s guian en la implementaci\xf3n de la ",Object(i.b)("inlineCode",{parentName:"p"},"FE")," en los sistemas del contribuyente, muchos de ellos ofrecen formatos alternativos a los XML (",Object(i.b)("inlineCode",{parentName:"p"},"json"),", ",Object(i.b)("inlineCode",{parentName:"p"},"text"),") para el env\xedo desde los sistemas de sus clientes, posteriormente ellos se encargaran de generar los archivos XML, firmarlos, enviarlos a SUNAT y cumplir con otras obligaciones que exige SUNAT.   "),Object(i.b)("h3",{id:"operador-de-servicios-electr\xf3nicos-ose"},"Operador de Servicios Electr\xf3nicos (OSE)"),Object(i.b)("p",null,"Ayuda a SUNAT en la recepci\xf3n de los comprobantes electr\xf3nicos, en teoria mantiene la interoperabilidad con los ",Object(i.b)("inlineCode",{parentName:"p"},"webservices")," expuestos por SUNAT, de modo que el proceso de cambiar de un operador a otro seria muy sencillo. "))}s.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);