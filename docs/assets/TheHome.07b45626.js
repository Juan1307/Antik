import{l as x,y as p}from"./vendor.7216a956.js";import{S as f}from"./Assets.b0158ad2.js";import{B as u,a as g}from"./App.8c3999fa.js";import{d as N,a as s,j as e}from"./index.c853d202.js";const t=["Creando nuevas soluciones. ","Basado en componentes din\xE1micos. ","Modular, Reactivo y Progresivo. "];function A(){const[r,b]=x(0),{setWord:d,letter:c}=N(t[r],250);p(()=>{t[r]===c&&b(n=>{const o=n+1,h=t.length===o?0:o;return d(t[h]),h})},[r,c,d]);const[l,m]=x(0),i=(a,n)=>a===n?"active":null;return p(()=>{const a=setInterval(()=>{m(l===3?0:n=>n+1)},2e3);return()=>clearInterval(a)},[l]),s("div",{className:"h-full grid grid-cols-1 sm:grid-cols-2 gap-5 items-center",children:[s("figure",{className:"relative",children:[e("picture",{className:"home-svg-main flex overflow-hidden",children:e(f,{name:"DevSVG"})}),s("figcaption",{className:"absolute inset-y-0 g hidden md:flex -ml-4 lg:ml-6 xl:ml-10 h-full w-[8rem] items-center justify-center flex-col space-y-3",children:[s("button",{className:`btn btn-outline btn-show translate-x-3 ${i(l,0)}`,children:[e("i",{class:"ri-terminal-line ri-fw"}),e("span",{className:"ml-2",children:" Despliegue "})]}),s("button",{className:`btn btn-outline btn-show -translate-x-6 ${i(l,1)}`,children:[e("i",{class:"ri-share-circle-line ri-fw"}),e("span",{className:"ml-2",children:" Integraci\xF3n "})]}),s("button",{className:`btn btn-outline btn-show -translate-x-2  ${i(l,2)}`,children:[e("i",{class:"ri-device-line ri-fw"}),e("span",{className:"ml-2",children:" Adaptativo "})]}),s("button",{className:`btn -translate-x-6 btn-outline btn-show ${i(l,3)}`,children:[e("i",{class:"ri-shield-star-line ri-fw"}),e("span",{className:"ml-2",children:" Seguridad "})]})]}),e("div",{className:"absolute left-6 flex flex-col top-[30%] sm:hidden space-y-4",children:e(u,{})})]}),s("div",{className:"text-skin-base-sub text-center sm:text-left ml-0 -mt-[2%] xs:-mt-[7%] sm:-ml-4 md:ml-1 lg:ml-8 xl:ml-8",children:[e("h4",{className:"home-text-logo font-major",children:"ANTIK"}),s("div",{className:"my-7 sm:my-4 lg:my-5 xl:my-7",children:[s("div",{className:"text-slogan font-thin",children:[s("p",{children:["Desarrollo de ",e("span",{className:"inline-flex sm:hidden md:inline-flex",children:"Sitios Web y "})," ",e("span",{className:"bg-text hidden xl:inline-flex",children:" Aplicaciones Web "}),e("span",{className:"bg-text inline-flex sm:hidden md:inline-flex xl:hidden",children:" Web Apps"}),e("span",{className:"bg-text hidden sm:inline-flex md:hidden",children:" Aplicaciones Web"})]}),s("p",{children:[e("span",{className:"bg-text",children:" progresivas"}),", ",e("span",{className:"inline-flex sm:hidden md:inline-flex",children:"multiplataforma "})," para "]}),s("p",{children:["diferentes ",e("span",{className:"bg-text",children:"dispositivos"}),"."]})]}),s("div",{className:"home-type-writer bg-skin-alpha text-skin-base",children:[e("i",{class:"ri-arrow-right-s-line align-middle"}),e("span",{className:"text-sm sm:text-xs lg:text-base animate-blink border-r-2 border-skin-third pl-1",children:c})]})]}),e("div",{children:e(g,{})})]})]})}export{A as default};
//# sourceMappingURL=TheHome.07b45626.js.map
