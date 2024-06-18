import{D as b,l as d,c as P,y as x}from"./vendor.098d91b9.js";import{T as k}from"./App.4c9c79ce.js";import{j as e,a as n}from"./index.4673389d.js";const G=[{title:"SYS ARCHIVO",address:"Ugel - Interno",text:"Sistema de gesti\xF3n de resoluciones para  profesores y I.E.E",src:["sys-arc-0.JPG","sys-arc-1.JPG","sys-arc-2.JPG"],icons:["php","jquery","javascript","bootstrap"]},{title:"SYS RECIBOS",address:"Ugel - Interno",text:"Sistema de control y gesti\xF3n de recibos para las I.E.E",src:["sys-rec-0.JPG","sys-rec-1.JPG","sys-rec-2.JPG"],icons:["php","vuejs","bootstrap","nodejs"]},{title:"SYS I.E.E",address:"Ugel - Administrativo",text:"Sistema de acceso y control para I.E.E y Directores.",src:["sys-ie-0.JPG","sys-ie-1.JPG","sys-ie-2.JPG","sys-ie-3.JPG"],icons:["php","vuejs","bootstrap","nodejs"]},{title:"SYS Proveedores",address:"HLC - Administrativo",text:"Sistema de evaluaci\xF3n, administraci\xF3n y gesti\xF3n de proveedores.",src:["sys-pro-0.png","sys-pro-1.png","sys-pro-2.png"],icons:["php","react","bootstrap","nodejs"]},{title:"Audio App",address:"Personal",text:"Reproductor de audio con lista de canciones y patr\xF3n de lineas.",src:["app-audio-0.JPG","app-audio-1.JPG","app-audio-2.JPG"],icons:["html5","css3","javascript"],link:"https://juan1307.github.io/AudioApp/"},{title:"Acui Game",address:"Personal",text:"Juego 2D, con el fin de concientizar el cuidado del oc\xE9ano.",src:["app-acui-0.JPG","app-acui-1.JPG","app-acui-2.JPG"],icons:["html5","css3","javascript","tailwind-css"],link:"https://juan1307.github.io/AcuiApp/"},{title:"Open User",address:"Personal",text:"Demo Blog de usuarios, integrado con datos p\xFAblicos.",src:["app-blog-0.JPG","app-blog-1.JPG","app-blog-2.JPG"],icons:["react","javascript","bootstrap"],link:"https://juan1307.github.io/OpenUser/"}],N=[{title:"Git y GitHub",address:"Sistema Control de versiones",text:"Control y gestion de repositorios en github.",src:"pla-github.JPG",icons:["github","git"]},{title:"Trello",address:"Flujo de trabajo y Desarrollo",text:"Control de procesos de desarrollo para Aplicaciones.",src:"pla-trello.JPG",icons:["trello"]},{title:"Heroku",address:"Despliegue de Aplicaciones",text:"Hosting para Aplicaciones Front-End y Back-End.",src:"pla-heroku.JPG",icons:["heroku"]},{title:"Star UML",address:"Modelo de Aplicaciones",text:"Lenguaje de modelado para procesos de desarrollo.",src:"pla-staruml.JPG"},{title:"Balsamiq",address:"Prototipado de Aplicaciones",text:"Dise\xF1o y prototipado de aplicaciones.",src:"pla-balsamiq.JPG"}],J=[{title:"UI categorias",address:"Codepen",text:"Dise\xF1o Ui con tailwind css.",src:"src-categorias.JPG",icons:["html5","tailwind-css"],link:"https://codepen.io/antik133up/pen/abWNNML"},{title:"CSS animaciones",address:"Codepen",text:"Animaciones a cajas con css.",src:"src-animaciones.JPG",icons:["html5","css3"],link:"https://codepen.io/antik133up/pen/MWpmYVZ"},{title:"UI cartas pokem\xF3n",address:"Codepen",text:"Dise\xF1o de Cartas pokem\xF3n.",src:"src-pokemon.JPG",icons:["html5","css3"],link:"https://codepen.io/antik133up/pen/VwPJzYQ"},{title:"Usuarios Api",address:"Codepen",text:"Renderizado de Comentarios con Api.",src:"src-comentarios.JPG",icons:["html5","css3","javascript"],link:"https://codepen.io/antik133up/pen/QWpwVVZ"},{title:"Galeria de Im\xE1genes",address:"Codepen",text:"Renderizado de im\xE1genes con Api.",src:"src-galeria.JPG",icons:["html5","css3","javascript"],link:"https://codepen.io/antik133up/pen/VwPGKvr"},{title:"Web Portfolio",address:"github",text:"Landing Page UX de prueba.",src:"src-portfolio.JPG",icons:["html5","css3","javascript"],link:"https://juan1307.github.io/WebPortfolio/"}],j=[G,N,J];var f=j;const v=b(),C=b();function A(){return P(v)}function y(){return P(C)}function I({children:t}){const[o,i]=d(!1),[l,c]=d(0),a=()=>i(s=>!s);return e(v.Provider,{value:{modal:o,index:l},children:e(C.Provider,{value:{toggleModal:a,setIndex:c},children:t})})}const w=({data:t})=>e("div",{className:"portfolio-icons",children:t.map((o,i)=>e("div",{className:"portfolio-icons-btn",children:e("i",{className:`bx bxl-${o}`})},i))}),S=({index:t})=>{const{toggleModal:o,setIndex:i}=y();return e("div",{className:"portfolio-more overflow-hidden",children:n("button",{className:"portfolio-more-btn",onClick:()=>{o(),i(t)},children:[e("i",{className:"ri-fullscreen-line align-middle"})," Ver m\xE1s"]})})},E=({data:t,index:o})=>{const{title:i,text:l,src:c,icons:a,address:s,link:r}=t,p=Array.isArray(c),m=p?c[0]:c;return n("div",{className:"portfolio-box",children:[n("picture",{className:"portfolio-box-img h-full w-full",children:[" ",e("img",{className:"object-cover object-center w-full h-40",src:`/Antik/imgs/${m}`,alt:m}),p&&e(S,{index:o}),a&&e(w,{data:a})]}),n("article",{className:"portfolio-box-text",children:[n("div",{className:"flex justify-between",children:[e("span",{className:"uppercase underline underline-offset-4",children:i}),r&&n("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-sky-600",children:[e("i",{className:"ri-arrow-right-s-line align-middle"}),e("span",{className:"hover:underline decoration-2 hover:underline-offset-4",children:"Demo"})]})]}),s&&n("span",{className:"text-xs uppercase",children:[" ",s," "]}),e("p",{children:l})]})]})},F=["Proyectos","Plataformas","Temas y Scripts"],M=({list:t})=>{var g;const{modal:o,index:i}=A(),{setIndex:l,toggleModal:c}=y(),{src:a}=(g=t[i])!=null?g:t[0],[s,r]=d(0),[p,m]=d(a[0]),h=u=>{u<0||u>a.length-1||(r(u),m(a[u]))};return x(()=>l(0),[t,l]),x(()=>{r(0),m(a[0])},[a]),e("div",{className:`portfolio-modal-bg ${o&&"active"}`,children:n("div",{className:"portfolio-modal h-1/5 sm:h-4/5 w-4/5",children:[e("picture",{className:"flex h-full w-full",children:e("img",{className:`h-full object-contain m-auto transition-visible-in ease-in-out scale-0 ${o&&"scale-100"}`,loading:"lazy",src:`/Antik/imgs/${p}`,alt:p})}),n("div",{className:"portfolio-modal-buttons",children:[e("button",{type:"button",className:"portfolio-modal-btn",onClick:()=>h(s-1),children:e("i",{className:"ri-arrow-left-s-line ri-fw"})}),e("button",{type:"button",className:"portfolio-modal-btn",onClick:()=>h(s+1),children:e("i",{className:"ri-arrow-right-s-line ri-fw"})})]}),e("button",{className:"text-white absolute -top-8 right-0",onClick:()=>c(),children:e("i",{className:"ri-close-line ri-fw text-4xl"})})]})})};function O(){const[t,o]=d(0),[i,l]=d(f[0]),c=s=>{o(s),l(f[s])},a=s=>s===t&&"active";return e(I,{children:n("div",{className:"h-full",children:[e(k,{title:"PORTFOLIO"}),e(M,{list:i}),e("ul",{className:"portfolio-nav",children:F.map((s,r)=>n("li",{className:`portfolio-nav-item ${a(r)}`,onClick:()=>c(r),children:[e("i",{className:"ri-arrow-right-s-line ri-fw align-middle"}),e("span",{children:s})]},r))}),e("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-3 md:gap-4 xl:gap-6",children:i.map((s,r)=>e(E,{data:s,index:r},r))})]})})}export{O as default};
//# sourceMappingURL=ThePortfolio.c9644d93.js.map
