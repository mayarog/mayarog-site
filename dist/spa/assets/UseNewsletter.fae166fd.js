import{bb as a}from"./index.3a455fa8.js";function c(){const{supabase:t}=a();return{subscribe:async({email:s})=>{const e={email:s,created_at:new Date().toISOString().split("T")[0]},{error:r}=await t.from("NewsletterRegister").insert(e);if(r)throw r},unsubscribe:async({email:s})=>{const{error:e}=await t.from("NewsletterRegister").delete().eq("email",s);if(e)throw e}}}export{c as U};