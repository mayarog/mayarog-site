import{c as s,h as i}from"./QSpinner.f42d8770.js";import{e as p,f as a,p as c,c as u,h as d,j as g,J as f,g as l}from"./index.c57a98a7.js";var $=s({name:"QPageContainer",setup(h,{slots:o}){const{proxy:{$q:r}}=l(),e=p(g,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;c(f,!0);const n=u(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>d("div",{class:"q-page-container",style:n.value},i(o.default))}});export{$ as Q};