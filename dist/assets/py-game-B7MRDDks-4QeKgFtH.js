import{_ as f}from"./preload-helper-Ct5FWWRu.js";import{D as d,K as w,j as h,m as b,w as v,v as E,q as P,c as _}from"./core-qH_pqHwH-C9_6Qe8-.js";const k=_("py-game");let l=!0;const A={main:{onReady:async(t,e)=>{l&&(l=!1,console.warn("⚠️ EXPERIMENTAL `py-game` FEATURE"));let r={};if(e.hasAttribute("config")){const i=e.getAttribute("config"),{json:o,toml:u,text:c,url:m}=await w(i);if(o)r=JSON.parse(c);else if(u){const{parse:a}=await f(()=>import("./toml-Blg7Izee-CVjRshTZ.js"),[],import.meta.url);r=a(c)}if(r.packages){await t.interpreter.loadPackage("micropip");const a=t.interpreter.pyimport("micropip");await a.install(r.packages,{keep_going:!0}),a.destroy()}await((a,...y)=>h(b.get(a),...y))("py-game",k,t.interpreter,r,m?new URL(m,location.href).href:location.href)}t.interpreter.registerJsModule("_pyscript",{PyWorker(){throw new Error("Unable to use PyWorker in py-game scripts")},js_import:(...i)=>Promise.all(i.map(o=>import(o))),get target(){return e.id}}),await t.interpreter.runPythonAsync(v),t.interpreter.runPython(`
import builtins
def input(prompt=""):
    import js
    return js.prompt(prompt)

builtins.input = input
del builtins
del input
`);let n=E(e.textContent);e.src&&(n=await fetch(e.src).then(P));const g=e.getAttribute("target")||"canvas",p=document.getElementById(g);t.interpreter.canvas.setCanvas2D(p);const s=new CustomEvent("py-game",{bubbles:!0,cancelable:!0,detail:{canvas:p,code:n,config:r,wrap:t}});e.dispatchEvent(s),s.defaultPrevented||await t.interpreter.runPythonAsync(n)}}};d("py-game",{config:{packages:["pygame-ce"]},configURL:new URL("./config.txt",location.href).href,interpreter:"pyodide",env:"py-game",hooks:A});
