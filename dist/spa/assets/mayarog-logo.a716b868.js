import{x as n,y as i,z as a,A as p,B as d,d as c,i as g,C as u,c as l,D as f}from"./index.3a455fa8.js";var m=n({name:"QPageContainer",setup(y,{slots:s}){const{proxy:{$q:r}}=l(),e=i(p,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;d(f,!0);const o=c(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>g("div",{class:"q-page-container",style:o.value},u(s.default))}}),$="/assets/mayarog-logo.e06dbd4c.png";export{m as Q,$ as _};