import{L as r,o as c}from"./core-qH_pqHwH-C9_6Qe8-.js";import"./preload-helper-Ct5FWWRu.js";let d=!1;function f(){d=!0}function a(e){if(d)return;const n=document.createElement("div");n.className="py-error",n.textContent=e,n.style.cssText=`
    border: 1px solid red;
    background: #ffdddd;
    color: black;
    font-family: courier, monospace;
    white-space: pre;
    overflow-x: auto;
    padding: 8px;
    margin-top: 8px;
  `,document.body.append(n)}r.main.onReady.add(function e(n){r.main.onReady.delete(e);const{stderr:s}=n.io,t=(o,...i)=>(a(o.message||o),s(o,...i));n.io.stderr=n.type==="py"?t:c(t),addEventListener("error",({message:o})=>{o.startsWith("Uncaught PythonError")&&a(o)})});export{f as notOnDOM,a as notify};
