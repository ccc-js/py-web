const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./deprecations-manager-BOMNTki5-BkDLwCb0.js","./error-Cedsh0vW-D6l2vNzC.js","./preload-helper-Ct5FWWRu.js","./donkey-pplT2O8W-Xs_F1WAX.js","./py-editor-_2KyvtxC-CrXOlxVn.js","./py-game-B7MRDDks-4QeKgFtH.js","./py-terminal-ryIeASnj-BufOkCkb.js","./codemirror-CcGcOibd-BVsXGh2A.js","./codemirror_view-C6Wj-LSg-6ooZVm47.js","./codemirror_state-BIAL8JKm-Be3YhqMm.js","./codemirror_language-CGC3ORqm-mPRFkECd.js","./codemirror_commands-7YlBSWsE-CXNltha8.js","./index-BHhYCC-h-tj7oHza8.js","./codemirror_lang-python-DTyea3yJ-BZasxBoF.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper-Ct5FWWRu.js";try{crypto.randomUUID()}catch{location.href.startsWith("http://0.0.0.0")&&(location.href=location.href.replace("0.0.0.0","localhost"))}const yn=(e,t,n=globalThis)=>{const r=Symbol.for(e),s=r in n;return[s?n[r]:Object.defineProperty(n,r,{value:t})[r],s]};var X=Promise.withResolvers.bind(Promise);const U=new WeakMap,be=e=>{const t=e||console,n={buffered:pt,stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...r)=>n.stderr(...r),stdout:(...r)=>n.stdout(...r),async get(r){const s=await r;return U.set(s,n),s}}},Kr=new TextDecoder,pt=(e,t=10)=>{const n=[];return r=>{if(r instanceof Uint8Array)for(const s of r)s===t?e(Kr.decode(new Uint8Array(n.splice(0)))):n.push(s);else e(r)}},Wt=Object.getOwnPropertyDescriptors(Response.prototype),Ut=e=>typeof e=="function",Vr={get:(e,t)=>Wt.hasOwnProperty(t)?((n,r,{get:s,value:o})=>s||!Ut(o)?n.then(a=>a[r]):(...a)=>n.then(i=>i[r](...a)))(e,t,Wt[t]):((n,r)=>Ut(r)?r.bind(n):r)(e,e[t])};var ne=(e,...t)=>new Proxy(fetch(e,...t).then(n=>n.ok?n:Promise.reject(new Error(`[${n.status}] Unable to fetch ${e}`))),Vr);const{assign:Ke}=Object,Ve="entries",Be="readonly",Xe="readwrite",Ye={durability:"default",prefix:"IDBMap"},fe=({target:{result:e}})=>e;class We extends EventTarget{#e;#t;#r;async#n(t,n){const r=(await this.#e).transaction(Ve,n,this.#t);return new Promise((s,o)=>Ke(t(r.objectStore(Ve)),{onsuccess:s,onerror:o}))}constructor(t,{durability:n=Ye.durability,prefix:r=Ye.prefix}=Ye){super(),this.#r=r,this.#t={durability:n},this.#e=new Promise((s,o)=>{Ke(indexedDB.open(`${this.#r}/${t}`),{onupgradeneeded({target:{result:a,transaction:i}}){a.objectStoreNames.length||a.createObjectStore(Ve),i.oncomplete=()=>s(a)},onsuccess(a){s(fe(a))},onerror(a){o(a),this.dispatchEvent(a)}})}).then(s=>{const o=this.dispatchEvent.bind(this);for(const a in s)a.startsWith("on")&&(s[a]=o);return s})}dispatchEvent(t){const{type:n,message:r,isTrusted:s}=t;return super.dispatchEvent(s?Ke(new Event(n),{message:r}):t)}async close(){(await this.#e).close()}get size(){return this.#n(t=>t.count(),Be).then(fe)}async clear(){await this.#n(t=>t.clear(),Xe)}async delete(t){await this.#n(n=>n.delete(t),Xe)}async entries(){const t=await this.keys();return Promise.all(t.map(n=>this.get(n).then(r=>[n,r])))}async forEach(t,n=this){for(const[r,s]of await this.entries())await t.call(n,s,r,this)}async get(t){return await this.#n(n=>n.get(t),Be).then(fe)}async has(t){return await this.#n(n=>n.getKey(t),Be).then(fe)!==void 0}async keys(){return await this.#n(t=>t.getAllKeys(),Be).then(fe)}async set(t,n){return await this.#n(r=>r.put(n,t),Xe),this}async values(){const t=await this.keys();return Promise.all(t.map(n=>this.get(n)))}get[Symbol.toStringTag](){return this.#r}}class Ee extends Map{#e;#t;constructor(...t){super(),this.#e=new We(...t),this.#t=this.#e.entries().then(n=>{for(const[r,s]of n)super.set(r,s)})}async close(){await this.#t,await this.#e.close()}async sync(){await this.#t}clear(){return this.#t=this.#t.then(()=>this.#e.clear()),super.clear()}delete(t){return this.#t=this.#t.then(()=>this.#e.delete(t)),super.delete(t)}set(t,n){return this.#t=this.#t.then(()=>this.#e.set(t,n)),super.set(t,n)}}const Xr={object(...e){return this.string((function(t){for(var n=t[0],r=1,s=arguments.length;r<s;r++)n+=arguments[r]+t[r];return n})(...e))},string(e){for(const t of e.split(/[\r\n]+/))if(t.trim().length){/^(\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},{replace:Yr}="",Zr=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,Qr={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},es=e=>Qr[e],L=(e,...t)=>Xr[typeof e](e,...t),hn=e=>Yr.call(e,Zr,es),{isArray:gn}=Array,{assign:q,create:St,defineProperties:ts,defineProperty:te,entries:ft}=Object,{all:ve,resolve:An}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),ue=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href;function wn(e){return e.startsWith(".")?ue(e,this):e}let ns=0;const bn=(e,t)=>({id:e.id||(e.id=`${t}-w${ns++}`),tag:e.tagName}),le=(e,t,n,r=!1,s=CustomEvent)=>{e.dispatchEvent(new s(`${t}:${n}`,{bubbles:!0,detail:{worker:r}}))},rs=(e,t,n,r)=>({type:t,config:n,interpreter:r,io:U.get(r),run:(s,...o)=>e.run(r,s,...o),runAsync:(s,...o)=>e.runAsync(r,s,...o),runEvent:(...s)=>e.runEvent(r,...s)}),Jt=e=>e.replace(/^(?:\n|\r\n)/,""),ss=(e,t,n,r)=>{const s=e[t].bind(e);e[t]=t==="run"?(o,a,...i)=>{n&&s(o,n,...i);const l=s(o,Jt(a),...i);return r&&s(o,r,...i),l}:async(o,a,...i)=>{n&&await s(o,n,...i);const l=await s(o,Jt(a),...i);return r&&await s(o,r,...i),l}},Rt=Symbol.for("polyscript.js_modules"),xt=new Map;te(globalThis,Rt,{value:xt});const $e=new Proxy(xt,{get:(e,t)=>e.get(t),has:(e,t)=>e.has(t),ownKeys:e=>[...e.keys()]}),os=(e,t)=>!t.startsWith("_"),as=(e,t)=>new Proxy(e,{has:os,get:(n,r)=>n[t][r]}),En=(e,t,n,r)=>{if(e==="pyodide")return;const s="polyscript.js_modules";for(const o of Reflect.ownKeys(r))t.registerJSModule(n,`${s}.${o}`,as(r,o));t.registerJSModule(n,s,r)},dt=(e,t)=>import(e).then(n=>{xt.set(t,{...n})}),vn=e=>new Promise((t,n)=>{document.querySelector(`link[rel="stylesheet"][href="${e}"]`)?t():document.head.append(q(document.createElement("link"),{rel:"stylesheet",href:e,onload:t,onerror:n}))}),is=e=>/\.css$/i.test(new URL(e).pathname),Te=e=>/^(?:false|0|no)$/i.test(e.getAttribute("async")),qt=!globalThis.window,mt=({FS:e,PATH:t,PATH_FS:n},r,s)=>{const o=n.resolve(r),a=t.dirname(o);return e.mkdirTree?e.mkdirTree(a):Dt(e,a),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},ls=e=>{const t=e.split("/");return t.pop(),t.join("/")},Dt=(e,t)=>{const n=[];for(const r of t.split("/"))r!=="."&&r!==".."&&(n.push(r),r&&e.mkdir(n.join("/")))},cs=(e,t)=>{const n=[];for(const r of t.split("/"))switch(r){case"":case".":break;case"..":n.pop();break;default:n.push(r)}return[e.cwd()].concat(n).join("/").replace(/^\/+/,"/")},Ze=e=>{const t=e.map(n=>n.trim().replace(/(^[/]*|[/]*$)/g,"")).filter(n=>n!==""&&n!==".").join("/");return e[0].startsWith("/")?`/${t}`:t},Bn=(e,t)=>ne(ue(e,t)).arrayBuffer(),Ue=(e,t,n,r)=>ve((s=>{for(const{files:o,to_file:a,from:i=""}of s){if(o!==void 0&&a!==void 0)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(o===void 0&&a===void 0&&i.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${i}, please supply 'to_file' parameter.`)}return s.flatMap(({from:o="",to_folder:a=".",to_file:i,files:l})=>{if(gn(l))return l.map(u=>({url:Ze([o,u]),path:Ze([a,u])}));const c=i||o.slice(1+o.lastIndexOf("/"));return[{url:o,path:Ze([a,c])}]})})(n).map(({url:s,path:o})=>Bn(s,r).then(a=>e.writeFile(t,o,a)))),us=(e,t)=>t.endsWith("/")?`${t}${e.split("/").pop()}`:t,Qe=(e,t)=>e.replace(/\{.+?\}/g,n=>{if(!t.has(n))throw new SyntaxError(`Invalid template: ${n}`);return t.get(n)}),Je=(e,t,n,r)=>ve((s=>{const o=new Map,a=new Set,i=[];for(const[l,c]of ft(s))if(/^\{.+\}$/.test(l)){if(o.has(l))throw new SyntaxError(`Duplicated template: ${l}`);o.set(l,Qe(c,o))}else{const u=Qe(l,o),f=us(u,Qe(c||"./",o));if(a.has(f)&&!f.endsWith("/*"))throw new SyntaxError(`Duplicated destination: ${f}`);a.add(f),i.push({url:u,path:f})}return i})(n).map(({url:s,path:o})=>Bn(s,r).then(a=>e.writeFile(t,o,a,s)))),qe=({main:e,worker:t},n)=>{const r=[];if(t&&qt)for(let[s,o]of ft(t))s=ue(s,n),r.push(dt(s,o));if(e&&!qt)for(let[s,o]of ft(e))s=ue(s,n),is(s)?vn(s):r.push(dt(s,o));return ve(r)},Cn=e=>t=>{dispatchEvent(new CustomEvent(`${e}:progress`,{detail:t}))};let R=0;const kn=R++,jn=R++,ps=R++,Sn=R++,Rn=R++,xn=R++,Dn=R++,$n=R++,Tn=R++,Fn=R++,Pn=R++,Mn=R++,On=R++,Ln=R++,In=R++,Nn=R++,Hn=R++,Wn=R++,Un=R++,Jn=R++,qn=R++,Gn=R++,zn=R++,Kn=R++,Vn=R++,Xn=R++,$t=globalThis.ImageData||class{},fs=new TextDecoder,ds=new TextEncoder,ms=new Map(Reflect.ownKeys(Symbol).map(e=>[Symbol[e],`@${String(e)}`])),Tt=e=>{switch(e[0]){case"@":return Symbol[e.slice(1)];case"#":return Symbol.for(e.slice(1));case"!":return Symbol(e.slice(1));default:return Symbol()}},Ft=e=>ms.get(e)||((t,n)=>n===void 0?"?":Symbol.keyFor(t)===void 0?`!${n}`:`#${n}`)(e,e.description),_s=Object.defineProperty,Gt=Object.assign,ys=Array.from,Se=Array.isArray,Yn=ArrayBuffer.isView,J=(e,t)=>[e,t],et=e=>e,Zn={},tt=e=>(t,n=new Map)=>{for(let r=0,s=t.length;r<s;r++)t[r]=e(t[r],n);return t},Y=([e,t])=>e===0?t:Tt(t),hs=e=>typeof e=="string"?J(0,e):J(16,Ft(e)),Qn=(e,t)=>{for(let n=e.push,r=0,s=t.length;r<s;r+=32767)n.apply(e,t.subarray(r,r+32767))},er=new ArrayBuffer(8),K=new DataView(er),C=new Uint8Array(er),I=(e,t,n)=>(e.set(t,n),n),nt=e=>{C[0]=e[S++],C[1]=e[S++],C[2]=e[S++],C[3]=e[S++],C[4]=e[S++],C[5]=e[S++],C[6]=e[S++],C[7]=e[S++]},Z=e=>(C[0]=e[S++],C[1]=e[S++],C[2]=e[S++],C[3]=e[S++],K.getUint32(0,!0)),$=(e,t)=>{switch(e[S++]){case Rn:return nt(e),K.getFloat64(0,!0);case xn:return e[S++];case qn:{const n=I(t,S-1,{});for(let r=0,s=Z(e);r<s;r++)n[$(e,t)]=$(e,t);return n}case Nn:{const n=I(t,S-1,[]);for(let r=0,s=Z(e);r<s;r++)n.push($(e,t));return n}case Kn:{const n=S-1,r=$(e,t);return I(t,n,new globalThis[r]($(e,t)))}case Hn:{const n=S-1,r=Z(e);return I(t,n,e.slice(S,S+=r).buffer)}case Ln:{const n=S-1,r=Z(e);return I(t,n,fs.decode(e.slice(S,S+=r)))}case Wn:return I(t,S-1,new Date($(e,t)));case Jn:{const n=I(t,S-1,new Map);for(let r=0,s=Z(e);r<s;r++)n.set($(e,t),$(e,t));return n}case zn:{const n=I(t,S-1,new Set);for(let r=0,s=Z(e);r<s;r++)n.add($(e,t));return n}case Un:{const n=$(e,t),r=$(e,t),s=$(e,t),o=new(globalThis[n]||Error)(r);return I(t,S-1,_s(o,"stack",{value:s}))}case Vn:{const n=$(e,t),r=$(e,t),s=$(e,t),o=$(e,t),a=$(e,t);return I(t,S-1,new $t(n,r,s,{colorSpace:o,pixelFormat:a}))}case Gn:{const n=$(e,t),r=$(e,t);return I(t,S-1,new RegExp(n,r))}case kn:return!1;case jn:return!0;case Dn:return NaN;case $n:return 1/0;case Tn:return-1/0;case Fn:return 0;case Pn:return-0;case Sn:return null;case Mn:return nt(e),K.getBigInt64(0,!0);case On:return nt(e),K.getBigUint64(0,!0);case In:return Tt($(e,t));case Xn:return t.get(Z(e));default:return}};let S=0;class gs{static push(t,n){t.sync(!1),t._(n,n.length)}constructor(t,n){const r=[];this.l=0,this.o=r,this.v=new Uint8Array(t,n),this.push=r.push.bind(r)}get length(){return this.l+this.o.length}sync(t){const n=this.o,r=n.length;r&&this._(t?n:n.splice(0),r)}_(t,n){const{buffer:r,byteOffset:s}=this.v,o=this.l;this.l+=n,n+=s+o,r.byteLength<n&&r.grow(n),this.v.set(t,o)}}const{getPrototypeOf:As}=Object,{construct:ws}=Reflect,{toStringTag:bs}=Symbol,{toString:Aa}=Zn,Pt=(e,t=e[bs])=>t in globalThis?t:Pt(ws(As(e.constructor),[0])),{isNaN:Es,isFinite:vs,isInteger:Bs}=Number,{ownKeys:Cs}=Reflect,{is:ks}=Object,rt=(e,t,n)=>{const r=n.get(e),s=!r;return s?(K.setUint32(0,t.length,!0),n.set(e,[C[0],C[1],C[2],C[3]])):t.push(Xn,r[0],r[1],r[2],r[3]),s},oe=(e,t,n)=>{K.setUint32(0,n,!0),e.push(t,C[0],C[1],C[2],C[3])},D=(e,t,n)=>{switch(typeof e){case"number":e&&vs(e)?Bs(e)&&e<256&&-1<e?t.push(xn,e):(K.setFloat64(0,e,!0),t.push(Rn,C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7])):Es(e)?t.push(Dn):e?t.push(e<0?Tn:$n):t.push(ks(e,0)?Fn:Pn);break;case"object":switch(!0){case e===null:t.push(Sn);break;case!rt(e,t,n):break;case Se(e):{const r=e.length;oe(t,Nn,r);for(let s=0;s<r;s++)D(e[s],t,n);break}case Yn(e):if(t.push(Kn),D(Pt(e),t,n),e=e.buffer,!rt(e,t,n))break;case e instanceof ArrayBuffer:{const r=new Uint8Array(e);oe(t,Hn,r.length),Fe(t,r);break}case e instanceof Date:t.push(Wn),D(e.getTime(),t,n);break;case e instanceof Map:oe(t,Jn,e.size);for(const[r,s]of e)D(r,t,n),D(s,t,n);break;case e instanceof Set:oe(t,zn,e.size);for(const r of e)D(r,t,n);break;case e instanceof Error:t.push(Un),D(e.name,t,n),D(e.message,t,n),D(e.stack,t,n);break;case e instanceof $t:t.push(Vn),D(e.data,t,n),D(e.width,t,n),D(e.height,t,n),D(e.colorSpace,t,n),D(e.pixelFormat,t,n);break;case e instanceof RegExp:t.push(Gn),D(e.source,t,n),D(e.flags,t,n);break;default:if("toJSON"in e){const r=e.toJSON();D(r===e?null:r,t,n)}else{const r=Cs(e),s=r.length;oe(t,qn,s);for(let o=0;o<s;o++){const a=r[o];D(a,t,n),D(e[a],t,n)}}}break;case"string":if(rt(e,t,n)){const r=ds.encode(e);oe(t,Ln,r.length),Fe(t,r)}break;case"boolean":t.push(e?jn:kn);break;case"symbol":t.push(In),D(Ft(e),t,n);break;case"bigint":{let r=Mn;9223372036854775807n<e?(K.setBigUint64(0,e,!0),r=On):K.setBigInt64(0,e,!0),t.push(r,C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7]);break}default:t.push(ps)}};let Fe=Qn;const tr=({byteOffset:e=0,Array:t=gs}={})=>(n,r)=>{const s=new t(r,e);Fe=t.push,D(n,s,new Map);const o=s.length;return s.sync(!0),o},js={parse:e=>(S=0,$(e,new Map)),stringify:e=>{const t=[];return Fe=Qn,D(e,t,new Map),t}},Mt=new WeakMap,nr=async(e,t,n,r,s)=>{r.files&&(t("Loading files"),await Je(e,n,r.files,s),t("Loaded files")),r.fetch&&(t("Loading fetch"),await Ue(e,n,r.fetch,s),t("Loaded fetch")),r.js_modules&&(t("Loading JS modules"),await qe(r.js_modules,s),t("Loaded JS modules"))},rr=(e,t,n)=>{t==="polyscript"&&(n.lazy_py_modules=async(...r)=>(await Mt.get(e)(r),r.map(s=>e.pyimport(s))),n.storage=async r=>{const s=new Ee(r);return await s.sync(),s},n.JSON=js),e.registerJsModule(t,n)},sr=(e,t)=>{if(e.endsWith("/*")){if(/\.(zip|whl|tgz|tar(?:\.gz)?)$/.test(t))return RegExp.$1;throw new Error(`Unsupported archive ${t}`)}return""},or=(e,t,...n)=>{try{return e.runPython(L(t),...n)}catch(r){U.get(e).stderr(r)}},ar=async(e,t,...n)=>{try{return await e.runPythonAsync(L(t),...n)}catch(r){U.get(e).stderr(r)}},ir=async(e,t,n)=>{const[r,...s]=t.split(".");let o,a=e.globals.get(r);for(const i of s)[o,a]=[a,a[i]];try{await a.call(o,n)}catch(i){U.get(e).stderr(i)}},lr=new Map,cr=e=>lr.get(e),zt=(e,t)=>{try{return Function("require",t)(cr)}catch(n){U.get(e).stderr(n)}};var Ss={type:"dummy",module:()=>"data:text/javascript,",engine:e=>be().get(e),registerJSModule(e,t,n){lr.set(t,n)},run:zt,runAsync:zt,runEvent:async(e,t,n)=>{try{await Function("require","e",`return ${t}(e)`)(cr,n)}catch(r){U.get(e).stderr(r)}},transform:(e,t)=>t,writeFile(){}},Rs=new TextEncoder().encode(`_F='github:'
_E='user-agent'
_D=True
_C=False
_B='/'
_A=None
from uio import StringIO
import sys
class Response:
	def __init__(A,f):A.raw=f;A.encoding='utf-8';A._cached=_A
	def close(A):
		if A.raw:A.raw.close();A.raw=_A
		A._cached=_A
	@property
	def content(self):
		A=self
		if A._cached is _A:
			try:A._cached=A.raw.read()
			finally:A.raw.close();A.raw=_A
		return A._cached
	@property
	def text(self):return str(self.content,self.encoding)
	def json(A):import ujson;return ujson.loads(A.content)
HEADERS_TO_IGNORE=_E,
try:import js
except Exception as err:raise OSError('This version of urequests can only be used in the browser')
HEADERS_TO_IGNORE=_E,
def request(method,url,data=_A,json=_A,headers={},stream=_A,auth=_A,timeout=_A,parse_headers=_D):
	E=timeout;D=method;C=data;from js import XMLHttpRequest as G;A=G.new();A.withCredentials=_C
	if auth is not _A:import ubinascii;H,I=auth;A.open(D,url,_C,H,I)
	else:A.open(D,url,_C)
	for(F,J)in headers.items():
		if F.lower()not in HEADERS_TO_IGNORE:A.setRequestHeader(F,J)
	if E:A.timeout=int(E*1000)
	if json is not _A:assert C is _A;import ujson;C=ujson.dumps(json);A.setRequestHeader('Content-Type','application/json')
	A.send(C);B=Response(StringIO(A.responseText));B.status_code=A.status;B.reason=A.statusText;B.headers=A.getAllResponseHeaders();return B
def get(url,**A):return request('GET',url,**A)
_PACKAGE_INDEX=const('https://micropython.org/pi/v2')
_CHUNK_SIZE=128
def _ensure_path_exists(path):
	import os;A=path.split(_B)
	if not A[0]:A.pop(0);A[0]=_B+A[0]
	B=''
	for C in range(len(A)-1):
		B+=A[C]
		try:os.stat(B)
		except:os.mkdir(B)
		B+=_B
def _chunk(src,dest):
	A=memoryview(bytearray(_CHUNK_SIZE))
	while _D:
		B=src.readinto(A)
		if B==0:break
		dest(A if B==_CHUNK_SIZE else A[:B])
def _check_exists(path,short_hash):
	A=short_hash;import os
	try:
		import binascii as C,hashlib as D
		with open(path,'rb')as E:B=D.sha256();_chunk(E,B.update);F=str(C.hexlify(B.digest())[:len(A)],'utf-8');return F==A
	except:return _C
def _rewrite_url(url,branch=_A):
	B=branch;A=url
	if not B:B='HEAD'
	if A.startswith(_F):A=A[7:].split(_B);A='https://raw.githubusercontent.com/'+A[0]+_B+A[1]+_B+B+_B+_B.join(A[2:])
	return A
def _download_file(url,dest):
	B=dest;A=get(url)
	try:
		if A.status_code!=200:print('Error',A.status_code,'requesting',url);return _C
		print('Copying:',B);_ensure_path_exists(B)
		with open(B,'wb')as C:_chunk(A.raw,C.write)
		return _D
	finally:A.close()
def _install_json(package_json_url,index,target,version,mpy):
	K='File not found: {} {}';I=version;H=index;G=package_json_url;D=target;E=get(_rewrite_url(G,I))
	try:
		if E.status_code!=200:print('Package not found:',G);return _C
		F=E.json()
	finally:E.close()
	for(A,C)in F.get('hashes',()):
		B=D+_B+A
		if _check_exists(B,C):print('Exists:',B)
		else:
			L='{}/file/{}/{}'.format(H,C[:2],C)
			if not _download_file(L,B):print(K.format(A,C));return _C
	for(A,J)in F.get('urls',()):
		B=D+_B+A
		if not _download_file(_rewrite_url(J,I),B):print(K.format(A,J));return _C
	for(M,N)in F.get('deps',()):
		if not _install_package(M,H,D,N,mpy):return _C
	return _D
def _install_package(package,index,target,version,mpy):
	D=index;C=target;B=version;A=package
	if A.startswith('http://')or A.startswith('https://')or A.startswith(_F):
		if A.endswith('.py')or A.endswith('.mpy'):print('Downloading {} to {}'.format(A,C));return _download_file(_rewrite_url(A,B),C+_B+A.rsplit(_B)[-1])
		else:
			if not A.endswith('.json'):
				if not A.endswith(_B):A+=_B
				A+='package.json'
			print('Installing {} to {}'.format(A,C))
	else:
		if not B:B='latest'
		print('Installing {} ({}) from {} to {}'.format(A,B,D,C));E=sys.implementation._mpy&255 if mpy and hasattr(sys.implementation,'_mpy')else'py';A='{}/package/{}/{}/{}.json'.format(D,'py',A,B)
	return _install_json(A,D,C,B,mpy)
def install(package,index=_A,target=_A,version=_A,mpy=_D):
	B=target;A=index
	if not B:
		for C in sys.path:
			if C.endswith('/lib'):B=C;break
		else:print('Unable to find lib dir in sys.path');return
	if not A:A=_PACKAGE_INDEX
	if _install_package(package,A.rstrip(_B),B,version,mpy):print('Done')
	else:print('Package may be partially installed')`);const ur=async e=>(await M(async()=>{const{parse:t}=await import("./toml-BK2RWy-G-D6MuNyGF.js");return{parse:t}},[],import.meta.url)).parse(e);async function Kt(e,t){return new Promise((n,r)=>{e.syncfs(t,s=>{s?r(s):n()})})}function xs(e){const t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(o){if(!o.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(o,a,i)=>{try{const l=s.getLocalSet(o),c=await s.getRemoteSet(o),u=a?c:l,f=a?l:c;await s.reconcile(o,u,f),i(null)}catch(l){i(l)}},getLocalSet:o=>{let a=Object.create(null);function i(u){return u!=="."&&u!==".."}function l(u){return f=>r.join2(u,f)}let c=t.readdir(o.mountpoint).filter(i).map(l(o.mountpoint));for(;c.length;){let u=c.pop(),f=t.stat(u);t.isDir(f.mode)&&c.push.apply(c,t.readdir(u).filter(i).map(l(u))),a[u]={timestamp:f.mtime,mode:f.mode}}return{type:"local",entries:a}},getRemoteSet:async o=>{const a=Object.create(null),i=await Ds(o.opts.fileSystemHandle);for(const[l,c]of i)l!=="."&&(a[r.join2(o.mountpoint,l)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:a,handles:i}},loadLocalEntry:o=>{const a=t.lookupPath(o).node,i=t.stat(o);if(t.isDir(i.mode))return{timestamp:i.mtime,mode:i.mode};if(t.isFile(i.mode))return a.contents=n.getFileDataAsTypedArray(a),{timestamp:i.mtime,mode:i.mode,contents:a.contents};throw new Error("node type not supported")},storeLocalEntry:(o,a)=>{if(t.isDir(a.mode))t.mkdirTree(o,a.mode);else{if(!t.isFile(a.mode))throw new Error("node type not supported");t.writeFile(o,a.contents,{canOwn:!0})}t.chmod(o,a.mode),t.utime(o,a.timestamp,a.timestamp)},removeLocalEntry:o=>{var a=t.stat(o);t.isDir(a.mode)?t.rmdir(o):t.isFile(a.mode)&&t.unlink(o)},loadRemoteEntry:async o=>{if(o.kind==="file"){const a=await o.getFile();return{contents:new Uint8Array(await a.arrayBuffer()),mode:s.FILE_MODE,timestamp:a.lastModifiedDate}}if(o.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+o.kind)},storeRemoteEntry:async(o,a,i)=>{const l=o.get(r.dirname(a)),c=t.isFile(i.mode)?await l.getFileHandle(r.basename(a),{create:!0}):await l.getDirectoryHandle(r.basename(a),{create:!0});if(c.kind==="file"){const u=await c.createWritable();await u.write(i.contents),await u.close()}o.set(a,c)},removeRemoteEntry:async(o,a)=>{await o.get(r.dirname(a)).removeEntry(r.basename(a)),o.delete(a)},reconcile:async(o,a,i)=>{let l=0;const c=[];Object.keys(a.entries).forEach(function(m){const d=a.entries[m],_=i.entries[m];(!_||t.isFile(d.mode)&&d.timestamp.getTime()>_.timestamp.getTime())&&(c.push(m),l++)}),c.sort();const u=[];if(Object.keys(i.entries).forEach(function(m){a.entries[m]||(u.push(m),l++)}),u.sort().reverse(),!l)return;const f=a.type==="remote"?a.handles:i.handles;for(const m of c){const d=r.normalize(m.replace(o.mountpoint,"/")).substring(1);if(i.type==="local"){const _=f.get(d),y=await s.loadRemoteEntry(_);s.storeLocalEntry(m,y)}else{const _=s.loadLocalEntry(m);await s.storeRemoteEntry(f,d,_)}}for(const m of u)if(i.type==="local")s.removeLocalEntry(m);else{const d=r.normalize(m.replace(o.mountpoint,"/")).substring(1);await s.removeRemoteEntry(f,d)}}};return e.FS.filesystems.NATIVEFS_ASYNC=s,async function(o,a){if(a.constructor.name!=="FileSystemDirectoryHandle")throw new TypeError("Expected argument 'fileSystemHandle' to be a FileSystemDirectoryHandle");return(function(i){t.mkdirTree?t.mkdirTree(i):Dt(t,i);const{node:l}=t.lookupPath(i,{follow_mount:!1});if(t.isMountpoint(l))throw new Error(`path '${i}' is already a file system mount point`);if(!t.isDir(l.mode))throw new Error(`path '${i}' points to a file not a directory`);for(const c in l.contents)throw new Error(`directory '${i}' is not empty`)})(o),t.mount(t.filesystems.NATIVEFS_ASYNC,{fileSystemHandle:a},o),await Kt(t,!0),{syncfs:async()=>await Kt(t,!1)}}}const Ds=async e=>{const t=[];await(async function r(s){for await(const o of s.values())t.push(o),o.kind==="directory"&&await r(o)})(e);const n=new Map;n.set(".",e);for(const r of t){const s=(await e.resolve(r)).join("/");n.set(s,r)}return n},Vt=(e,t)=>{try{e.mkdir(t)}catch{}},de=Cn("mpy");var $s={type:"micropython",module:(e="1.27.0-preview-256")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,n,r){const{stderr:s,stdout:o,get:a}=be({stderr:pt(console.error),stdout:pt(console.log)});n=n.replace(/\.m?js$/,".wasm"),de("Loading MicroPython");const i=await a(e({linebuffer:!1,stderr:s,stdout:o,url:n}));globalThis[Rt].set("-T-",this.transform.bind(this,i));const l=Ts.bind(this,i,r);return Mt.set(i,l),await nr(this,de,i,t,r),this.writeFile(i,"./mip.py",Rs),t.packages&&(de("Loading packages"),await l(t.packages.map(wn,r)),de("Loaded packages")),de("Loaded MicroPython"),i.mountNativeFS||(i.mountNativeFS=xs(i._module)),i},registerJSModule:rr,run:or,runAsync:ar,runEvent:ir,transform:(e,t)=>e.PyProxy.toJs(t),writeFile:(e,t,n,r)=>{const{FS:s,_module:{PATH:o,PATH_FS:a}}=e,i={FS:s,PATH:o,PATH_FS:a},l=sr(t,r);if(l){const c=t.slice(0,-1);switch(c!=="./"&&s.mkdir(c),l){case"whl":case"zip":{const u=new Blob([n],{type:"application/zip"});return M(()=>import("./zip-CnaQd2o5-rrTuRTLd.js"),[],import.meta.url).then(async({BlobReader:f,Uint8ArrayWriter:m,ZipReader:d})=>{const _=new d(new f(u));for(const y of await _.getEntries()){const{directory:p,filename:g}=y,B=c+g;if(p)Vt(s,B);else{Vt(s,o.dirname(B));const k=await y.getData(new m);s.writeFile(B,k,{canOwn:!0})}}_.close()})}case"tgz":case"tar.gz":{const u="./_.tar.gz";return mt(i,u,n),void e.runPython(`
                        import os, gzip, tarfile
                        tar = tarfile.TarFile(fileobj=gzip.GzipFile(fileobj=open("${u}", "rb")))
                        for f in tar:
                            name = f"${c}{f.name}"
                            if f.type == tarfile.DIRTYPE:
                                if f.name != "./":
                                    os.mkdir(name.strip("/"))
                            else:
                                dir = os.path.dirname(name)
                                if not os.path.exists(dir):
                                    os.mkdir(dir)
                                source = tar.extractfile(f)
                                with open(name, "wb") as dest:
                                    dest.write(source.read())
                                    dest.close()
                        tar.close()
                        os.remove("${u}")
                    `)}}}return mt(i,t,n)}};async function Ts(e,t,n){let r;for(const s of n)if(s.endsWith(".whl")){const o=ue(s,t),a=await ne(o).arrayBuffer();await this.writeFile(e,"./*",a,o)}else r||(r=e.pyimport("mip")),r.install(s)}const Fs={dict_converter:Object.fromEntries},{stringify:pr}=JSON,{apply:Pe}=Reflect,Ps=Function.prototype,st=e=>function(...t){return Pe(e,this,t)};let _t,yt;const Ms=e=>{const t=new WeakMap,n=r=>{for(let s,o=0;o<r.length;o++)switch(typeof(s=r[o])){case"object":if(s===null)break;case"function":if(_t in s&&!s[_t].shared?.gcRegistered){e=!1;let a=t.get(s)?.deref();if(!a){a=yt(s);const i=new WeakRef(a);t.set(s,i),t.set(a,i)}r[o]=a,e=!0}}};Object.defineProperties(Ps,{apply:{value(r,s){return e&&n(s),Pe(this,r,s)}},call:{value(r,...s){return e&&n(s),Pe(this,r,s)}}})},ae=Cn("py"),ht=new WeakMap;var Os={type:"pyodide",module:(e="0.28.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e,version:t},n,r,s){ae("Loading Pyodide");let{packages:o,index_urls:a}=n;o&&(o=o.map(wn,s)),ae("Loading Storage");const i=r.slice(0,r.lastIndexOf("/")),l=new Ee(`${i}@${t}`),c={indexURL:i},u=n.packages_cache!=="never"&&t!=="0.28.0";if(await l.sync(),u){if(o)if(n.packages_cache==="passthrough")c.packages=o,o=null,l.clear();else{o=o.sort();const p=pr(o);if(l.has(p)){const g=l.get(p);if(c.packages=o.map(B=>B.split(/[>=<]=/)[0]),t.startsWith("0.27")){const B=new Blob([g],{type:"application/json"});c.lockFileURL=URL.createObjectURL(B)}else c.lockFileContents=g;o=null}}}else l.clear();ae("Loaded Storage");const{stderr:f,stdout:m,get:d}=be(),_=await d(e({stderr:f,stdout:m,...c}));globalThis[Rt].set("-T-",this.transform.bind(this,_)),n.debug&&_.setDebug(!0);const y=Ls.bind(_);return a&&ht.set(_,a),Mt.set(_,y),await nr(this,ae,_,n,s),o&&await y(o,l,u),await l.close(),c.lockFileURL&&URL.revokeObjectURL(c.lockFileURL),ae("Loaded Pyodide"),n.experimental_create_proxy==="auto"&&(_.runPython(["import js","from pyodide.ffi import to_js","o=js.Object.fromEntries","js.experimental_create_proxy=lambda r:to_js(r,dict_converter=o)"].join(";"),{globals:_.toPy({})}),yt=globalThis.experimental_create_proxy,delete globalThis.experimental_create_proxy,[_t]=Reflect.ownKeys(yt).filter(p=>typeof p=="symbol"&&String(p)==="Symbol(pyproxy.attrs)"),Ms(!0)),_},registerJSModule:rr,run:st(or),runAsync:st(ar),runEvent:st(ir),transform:(e,t)=>Pe(fr,e,[t]),writeFile:(e,t,n,r)=>{const s=sr(t,r);if(s)return e.unpackArchive(n,s,{extractDir:t.slice(0,-1)});const{FS:o,PATH:a,_module:{PATH_FS:i}}=e;return mt({FS:o,PATH:a,PATH_FS:i},t,n)}};function fr(e){const{ffi:{PyProxy:t}}=this;if(e&&typeof e=="object"){if(e instanceof t)return e.toJs(Fs);if(e instanceof Map)return new Map([...e.entries()]);if(gn(e))return e.map(fr,this)}return e}async function Ls(e,t,n=!1){const{log:r}=console,s=(a,...i)=>{r(a,...i),console.log=r,ae(a),console.log=s};console.log=s,await this.loadPackage("micropip");const o=this.pyimport("micropip");if(ht.has(this)&&o.set_index_urls(ht.get(this)),await o.install(e,{keep_going:!0}),console.log=r,n&&t instanceof Ee){const a=o.freeze();t.set(pr(e),a)}o.destroy()}const gt="ruby-wasm-wasi",Xt=gt.replace(/\W+/g,"_");var Is={type:gt,experimental:!0,module:(e="2.7.1")=>`https://cdn.jsdelivr.net/npm/@ruby/3.2-wasm-wasi@${e}/dist/browser/+esm`,async engine({DefaultRubyVM:e},t,n,r){n=n.replace(/\/browser\/\+esm$/,"/ruby.wasm");const s=await ne(n).arrayBuffer(),o=await WebAssembly.compile(s),{vm:a}=await e(o);return t.files&&await Je(this,a,t.files,r),t.fetch&&await Ue(this,a,t.fetch,r),t.js_modules&&await qe(t.js_modules,r),a},registerJSModule(e,t,n){t=t.replace(/\W+/g,"__");const r=`__module_${Xt}_${t}`;globalThis[r]=n,this.run(e,`require "js";$${t}=JS.global[:${r}]`),delete globalThis[r]},run:(e,t,...n)=>e.eval(L(t),...n),runAsync:(e,t,...n)=>e.evalAsync(L(t),...n),async runEvent(e,t,n){if(/^xworker\.(on\w+)$/.test(t)){const{$1:r}=RegExp,s=`__module_${Xt}_event`;globalThis[s]=n,this.run(e,`require "js";$xworker.call("${r}",JS.global[:${s}])`),delete globalThis[s]}else await this.run(e,`method(:${t})`).call(t,e.wrap(n))},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${gt}`)}},Ns={type:"wasmoon",module:(e="1.16.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},n,r,s){const{stderr:o,stdout:a,get:i}=be(),l=await i(new e().createEngine());return l.global.getTable(t.Base,c=>{l.global.setField(c,"print",a),l.global.setField(c,"printErr",o)}),n.files&&await Je(this,l,n.files,s),n.fetch&&await Ue(this,l,n.fetch,s),n.js_modules&&await qe(n.js_modules,s),l},registerJSModule:(e,t,n)=>{e.global.set(t,n)},run:(e,t,...n)=>{try{return e.doStringSync(L(t),...n)}catch(r){U.get(e).stderr(r)}},runAsync:async(e,t,...n)=>{try{return await e.doString(L(t),...n)}catch(r){U.get(e).stderr(r)}},runEvent:async(e,t,n)=>{const[r,...s]=t.split(".");let o,a=e.global.get(r);for(const i of s)[o,a]=[a,a[i]];try{await a.call(o,n)}catch(i){U.get(e).stderr(i)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,n)=>((r,s,o)=>(Dt(r,ls(s)),s=cs(r,s),r.writeFile(s,new Uint8Array(o),{canOwn:!0})))(e,t,n)};const dr=new WeakMap,Hs=new FinalizationRegistry(e=>e()),Yt=async(e,t)=>{const{shelter:n,destroy:r,io:s}=dr.get(e),{output:o,result:a}=await n.captureR(L(t));for(const{type:i,data:l}of o)s[i](l);return Hs.register(a,r),a};var Ws={type:"webr",experimental:!0,module:(e="0.5.6")=>`https://cdn.jsdelivr.net/npm/webr@${e}/dist/webr.mjs`,async engine(e,t,n,r){const{get:s}=be(),o=new e.WebR;await s(o.init().then(()=>o));const a=await new o.Shelter;return dr.set(o,{module:e,shelter:a,destroy:a.destroy.bind(a),io:U.get(o)}),t.files&&await Je(this,o,t.files,r),t.fetch&&await Ue(this,o,t.fetch,r),t.js_modules&&await qe(t.js_modules,r),o},registerJSModule(e,t){console.warn(`Experimental interpreter: module ${t} is not supported (yet)`)},run:Yt,runAsync:Yt,async runEvent(e,t,n){await e.evalRVoid(`${t}(event)`,{env:{event:{type:[n.type]}}})},transform:(e,t)=>t,writeFile:()=>{}};const W=new Map,mr=new Map,At=[],re=[],Us=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[o,...a]=t.split("@"),i=W.get(o),l=/^(?:\.?\.?\/|[a-z0-9-]+:\/\/)/i.test(a)?a.join("@"):i.module(...a);e.set(t,{url:l,module:import(l),engine:i.engine.bind(i)})}const{url:n,module:r,engine:s}=e.get(t);return(o,a)=>r.then(i=>(mr.set(t,o),s(i,o,n,a)))}}),Js=e=>{for(const t of[].concat(e.type))W.set(t,e),At.push(`script[type="${t}"]`),re.push(`${t}-`)};for(const e of[Ss,$s,Os,Is,Ns,Ws])Js(e);const pe=(e,t=document)=>[...t.querySelectorAll(e)],_r=(e,t=document)=>{const n=new XPathEvaluator().createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),r=[];for(let s=0,{snapshotLength:o}=n;s<o;s++)r.push(n.snapshotItem(s));return r},Ot=new Proxy(new Map,{get:(e,t)=>(e.has(t)||e.set(t,X()),e.get(t))}),qs=new Set(["__dict__","constructor","get","has","includes","next","set","then"]),yr=new Proxy(Object.freeze({}),{get:(e,t)=>typeof t!="string"||qs.has(t)?void 0:Ot[t].promise.then(n=>n.sync)});let T=0;const Zt=T++,Gs=T++,zs=T++,Ks=T++,Vs=T++,Qt=T++,Xs=T++,Ys=T++,Zs=T++,Qs=T++,eo=T++,to=T++,no=T++,ro=T++,so=T++;T++;const oo=T++,ao=T++,en=(e,t)=>[t?e:ys(new Uint8Array(e)),e.resizable?e.maxByteLength:0],io=/\[('|")?(.+?)\1\]/g,lo=(e,t)=>e?.[t];var Re=(e,t)=>t.replace(io,".$2").split(".").reduce(lo,e),co=(e,...t)=>t.map(uo,e);function uo(e){return typeof e=="string"?Re(this,e):this[e]}const po=globalThis.Node||class{},{apply:ot,construct:fo,defineProperty:mo,deleteProperty:_o,get:yo,getOwnPropertyDescriptor:tn,getPrototypeOf:nn,has:ho,isExtensible:go,ownKeys:Ao,set:wo,setPrototypeOf:bo}=Reflect;var Eo=({reflect:e=et,transform:t=et,remote:n=et,module:r=a=>import(a),buffer:s=!1,timeout:o=-1}=Zn)=>{const a=(E,v=new Map)=>{if(!Se(E))return E;const[h,A]=E;switch(h){case 2:{if(A===null)return globalThis;let b=v.get(E);if(!b){b=A,v.set(E,A);for(const w in A)A[w]=a(A[w],v)}return b}case 4:return v.get(E)||(v.set(E,A),l(A,v));case 8:{let b=g.get(A),w=b?.deref();return w||(b&&k.unregister(b),w=function(...j){n.apply(this,j);for(let x=0,O=j.length;x<O;x++)j[x]=i(j[x]);return e(Qt,A,i(this),j).then(a)},b=new WeakRef(w),g.set(A,b),k.register(w,A,b)),w}case 16:return Tt(A);default:return 1&h?d(A):A}},i=E=>{switch(typeof E){case"object":{if(E===null)break;if(E===globalThis)return B;const v=t(E);return P&&F.has(v)||v instanceof $t?J(0,v):Yn(v)?J(68,((h,A)=>{const{BYTES_PER_ELEMENT:b,byteOffset:w,buffer:j,length:x}=h;return[Pt(h),en(j,A),w,x!==(j.byteLength-w)/b?x:0]})(v,s)):v instanceof ArrayBuffer?J(64,en(v,s)):J(Se(v)?5:3,m(v))}case"function":return J(9,m(t(E)));case"symbol":return J(16,Ft(E));case"bigint":return J(32,E.toString())}return E},l=tt(a),c=tt(Y),u=tt(hs),{clear:f,id:m,ref:d,unref:_}=((E=0,v=new Map,h=new Map)=>({clear:()=>{v.clear(),h.clear()},id:A=>{let b=h.get(A);if(b===void 0){for(;v.has(b=E++););v.set(b,A),h.set(A,b)}return b},ref:A=>v.get(A),unref:A=>(h.delete(v.get(A)),v.delete(A))}))(),y=/^(?:[0-9]+|length)$/,p=-1<o,g=new Map,B=J(2,null),k=new FinalizationRegistry(E=>{g.delete(E),e(Zt,E)});let F,P=!1;return{assign:Gt,gather:co,query:Re,direct:E=>(P||(P=!0,F=new WeakSet),F.add(E),E),evaluate:(E,...v)=>ot(E,null,v),reflect(E,v,...h){const A=v===null,b=A?globalThis:d(v);switch(E){case Qs:{const w=Y(h[0]),j=A&&w==="import",x=j?r:yo(b,w),O=i(x);if(!p)return O;let G,ze=j,se=b;if(!j&&!(se instanceof po||Se(se)&&typeof w=="string"&&y.test(w)))if(w in b){for(;!(G=tn(se,w))&&(se=nn(se),se););ze=!!G&&"value"in G}else ze=!0;return[ze,O]}case Qt:{const w=new Map;return i(ot(b,a(h[0],w),l(h[1],w)))}case oo:return wo(b,Y(h[0]),a(h[1]));case no:return ho(b,Y(h[0]));case so:return u(Ao(b),g);case Xs:return i(fo(b,l(h[0])));case eo:{const w=tn(b,Y(h[0]));if(w)for(const j in w)w[j]=i(w[j]);return w}case Ys:return mo(b,Y(h[0]),a(h[1]));case Zs:return _o(b,Y(h[0]));case to:return i(nn(b));case ao:return bo(b,a(h[0]));case Gs:return void Gt(b,a(h[0]));case zs:{const w=a(h[0]),j=Function(`return(${w}).apply(null,arguments)`);return i(ot(j,null,l(h[1])))}case Ks:for(let w,j=0,x=(h=c(h[0],g)).length;j<x;j++)w=h[j],h[j]=i(typeof w=="string"?Re(b,w):b[w]);return h;case Vs:return i(Re(b,h[0]));case Zt:return _(v);case ro:return go(b)}},terminate(){for(const E of g.values())k.unregister(E);g.clear(),f()}}};const{addEventListener:vo}=EventTarget.prototype,wt=new WeakMap;Reflect.defineProperty(EventTarget.prototype,"addEventListener",{value(e,t,n){const r=n?.invoke;if(r){let s=wt.get(this);s||wt.set(this,s=new Map),s.set(e,[].concat(r)),delete n.invoke}return vo.apply(this,arguments)}});const hr="37e4b92b",gr="="+hr,Ar="-"+hr;var wr=(e=t=>t)=>{const t=new Map;let n=0;return[()=>{let r;do r=e(n++);while(t.has(r));const s=X();return t.set(r,s),[r,s.promise]},(r,s,o)=>{const a=t.get(r);t.delete(r),o?a?.reject(o):a?.resolve(s)}]};const rn=[],bt=new WeakSet,Bo=(...e)=>(bt.add(e),e);let{SharedArrayBuffer:sn}=globalThis,ce=!0;try{new sn(4,{maxByteLength:8})}catch{ce=!1,sn=class extends ArrayBuffer{get growable(){return super.resizable}grow(t){super.resize(t)}}}const{assign:Co,create:ko}=Object,br=`coincident-${ce?crypto.randomUUID():Math.random().toString(36).substring(2)}`,jo={byteOffset:2*Int32Array.BYTES_PER_ELEMENT},So=(e,t,n)=>{const r=t!=="then";return r&&(e[t]=n),r},Er=e=>{e.stopImmediatePropagation(),e.preventDefault()},Me=(e,t=-1)=>e?.reflected_ffi_timeout??t,{defineProperty:Ro}=Object,[xo,at]=wr();let[it,xe]=xo(),vr=()=>xe,{Atomics:_e,MessageChannel:Et,Worker:vt}=globalThis;if(ce)at(it);else{const e=new Map,t=(n,...r)=>{n.addEventListener(...r)};if("importScripts"in globalThis){t(globalThis,"message",l=>{Er(l),at(it,l.data)},{once:!0});const{wait:n}=_e,{parse:r}=JSON,s=l=>{const c=new XMLHttpRequest;try{if(c.timeout=3e3,c.open("POST",`${i}?sabayon`,!1),c.setRequestHeader("Content-Type","application/json"),c.send(`["${a}",${e.get(l)}]`),c.status===200)return c;throw c}catch{return c.abort(),s(l)}},o=(l,c)=>(l.set(r(c.responseText)),"ok");let a,i;_e={wait:(l,...c)=>e.has(l)?o(l,s(l)):n(l,...c)},xe=xe.then(l=>{[a,i]=l})}else{const n=[br,Math.random()].join("-").replace(/\W/g,"-"),r=new BroadcastChannel("dc78209b-186c-4f83-80e9-406becb7d9f3");r.onmessage=async c=>{const[u,f,m]=c.data;if(f===n){for(const[d,[_,y]]of e)if(_===m){await y.promise;let p=d.length;for(;p--&&!d[p];);r.postMessage([u,d.slice(0,p+1)]);break}}};const s=c=>{const[u,f,m]=c.data;e.set(f,[u,X()]),Ro(c,"data",{value:m})};Et=class extends Et{constructor(){super(),t(this.port1,"message",s)}},vt=class extends vt{constructor(c,u){super(c,u),super.postMessage([n,a])}};const{notify:o}=_e;_e={notify(c,...u){const f=e.get(c);return f?(f[1].resolve(),0):o(c,...u)}};let a="",i=null;const l=(c,u)=>{let f,m=!0;c.getRegistration(a).then(d=>d??c.register(a,u)).then(function d(_){const{controller:y}=c;if(m=m&&!!y,f=_.installing||_.waiting||_.active,f.state==="activated"){if(m){if(y.scriptURL===a)return at(it);_.unregister()}location.reload()}else t(f,"statechange",()=>d(_),{once:!0})})};vr=(c,u)=>{if(!i){const f=new URL(c,location.href);a=`${f.protocol}//${f.host}${f.pathname}`,l(navigator.serviceWorker,u),i=xe}return i}}}const lt="InstallTrigger"in globalThis?br:"",Do=e=>e,on=e=>e===gr?"main":e===Ar?"worker":e;class $o extends Event{#e;constructor(t){super("message"),this.#e=t}get data(){return this.#e}}var To=e=>{const t=e?.transform,n=Me(e),r=(e?.encoder||tr)(jo),s=e?.transfer!==!1;return{Worker:class extends vt{constructor(o,a){const i=ce?"":a?.serviceWorker||"",{notify:l}=i?_e:Atomics,{port1:c,port2:u}=new(i?Et:MessageChannel),[f,m]=wr(Do),d=new Map,_=ko(null);i&&vr(i);let y="";super(o,Co({type:"module"},a)),this.proxy=new Proxy(_,{get:(p,g)=>{if(g==="then")return;let B=d.get(g);return B||d.set(g,B=(...k)=>{const F=((v,h)=>{let A=rn;return v&&bt.has(h.at(-1)||rn)&&(A=h.pop(),bt.delete(A)),A})(s,k),[P,E]=f();return c.postMessage([P,g,t?k.map(t):k],F),((v,h)=>{if(y){const A=setTimeout(console.warn,3e3,`💀🔒 - is proxy.${on(y)}() awaiting proxy.${on(h)}() ?`);v=v.then(b=>(clearTimeout(A),b),b=>(clearTimeout(A),Promise.reject(b)))}return v})(E,g)}),B},set:So}),lt&&(ce||i)&&super.addEventListener("message",p=>{const{data:g}=p;g?.ID===lt&&(Er(p),c.dispatchEvent(new $o(g.data)))}),super.postMessage([lt,i,Me(a,n)],[u]),c.addEventListener("message",async({data:p})=>{const g=p[0],B=typeof g;if(B==="number")m.apply(null,p);else if(y=p[1],await(async(k,F,P)=>{try{const E=await F[k[1]].apply(null,k[2]);k[1]=P?P(E):E,k[2]=null}catch(E){k[2]=E}})(p,_,t),y="",B==="string")c.postMessage(p);else{const k=p[2]||p[1];g[1]=k===void 0?0:r(k,g.buffer),g[0]=1,l(g,0)}}),c.start()}},native:ce,transfer:Bo}};const{url:Fo}=import.meta,Po=/import\((['"])([^)]+?\.js)\1\)/g,Mo=(e,t,n)=>`import(${t}${new URL(n,Fo).href}${t})`,Oo=Symbol.for("polyscript.js_modules");let an;const{Worker:Lo}=(e=>{const t=e?.import,n=Me(e),r=To({...e,encoder:e?.encoder||tr});class s extends r.Worker{#e;constructor(a,i){const{proxy:l}=super(a,i),c=Eo({...i,buffer:!0,reflect:l[Ar],timeout:Me(i,n),remote(u){u instanceof Event&&(f=>{const{currentTarget:m,target:d,type:_}=f,y=wt.get(m||d)?.get(_);if(y)for(const p of y)f[p]()})(u)},module:i?.import||t||(u=>import(new URL(u,location).href))});this.#e=c.terminate,this.ffi={assign:c.assign,direct:c.direct,evaluate:c.evaluate,gather:c.gather,query:c.query},l[gr]=c.reflect}terminate(){this.#e(),super.terminate()}}return{...r,Worker:s}})({transfer:!1,transform:e=>(an||(an=globalThis[Oo]?.get("-T-")))?.(e)??e}),{parse:Io}=JSON,Br=(e,t="./config.txt")=>{let n=typeof e;return n==="string"&&/\.(json|toml|txt)$/.test(e)?n=RegExp.$1:e=t,[ue(e),n]},Cr=(e,t,n={})=>{const[r,s]=Br(e,t);return s==="json"?n=ne(r).json():s==="toml"?n=ne(r).text().then(ur):s==="string"?n=ln(e):s==="object"&&e?n=e:s==="txt"&&typeof n=="string"&&(n=ln(n)),[n,e=r]},ln=e=>{try{return Io(e)}catch{return ur(e)}},No=(e,t,n,r={})=>(t&&([r,t]=Cr(t,n,r)),An(r).then(s=>Us[e](s,t))),kr=(e,t="")=>`${e}@${t}`.replace(/@$/,"");function Ho(e=this){return String(e).replace(/^(async\s*)?(\bfunction\b)?(.*?)\(/,(t,n,r,s)=>s&&!r?`${n||""}function ${s}(`:t)}const Oe="BeforeRun",Le="AfterRun",Bt=[`code${Oe}`,`code${Oe}Async`,`code${Le}`,`code${Le}Async`],Ie=["onWorker","onReady",`on${Oe}`,`on${Oe}Async`,`on${Le}`,`on${Le}Async`];function Wo(e,t){const{run:n,runAsync:r}=W.get(this.type);return{...e,run:n.bind(this,t),runAsync:r.bind(this,t)}}const Uo=(e,t,n,r,s,o)=>{if(s||o){const a=Wo.bind(e,t),i=r?"runAsync":"run",l=e[i];e[i]=r?async function(c,u,...f){s&&await s.call(this,a(c),n);const m=await l.call(this,c,u,...f);return o&&await o.call(this,a(c),n),m}:function(c,u,...f){s&&s.call(this,a(c),n);const m=l.call(this,c,u,...f);return o&&o.call(this,a(c),n),m}}};let Ne=class{constructor(e,t={}){const{main:n,worker:r}=t;this.interpreter=e,this.onWorker=n?.onWorker;for(const s of Ie.slice(1))this[s]=r?.[s];for(const s of Bt)this[s]=r?.[s]}toJSON(){const e={};for(const t of Ie.slice(1))this[t]&&(e[t]=Ho(this[t]));for(const t of Bt)this[t]&&(e[t]=L(this[t]()));return e}};var Lt=(...e)=>function(t,n){if(e.length){const[u,f]=e;(n=q({},n||{type:u,version:f})).type||(n.type=u)}const[r]=Br(n.config,n.configURL),s=((...u)=>new Lo(URL.createObjectURL(new Blob(["/*@*/"+'const{assign:e}=Object,t="entries",n="readonly",r="readwrite",s={durability:"default",prefix:"IDBMap"},o=({target:{result:e}})=>e;class a extends EventTarget{#e;#t;#n;async#r(n,r){const s=(await this.#e).transaction(t,r,this.#t);return new Promise((r,o)=>e(n(s.objectStore(t)),{onsuccess:r,onerror:o}))}constructor(n,{durability:r=s.durability,prefix:a=s.prefix}=s){super(),this.#n=a,this.#t={durability:r},this.#e=new Promise((r,s)=>{e(indexedDB.open(`${this.#n}/${n}`),{onupgradeneeded({target:{result:e,transaction:n}}){e.objectStoreNames.length||e.createObjectStore(t),n.oncomplete=()=>r(e)},onsuccess(e){r(o(e))},onerror(e){s(e),this.dispatchEvent(e)}})}).then(e=>{const t=this.dispatchEvent.bind(this);for(const n in e)n.startsWith("on")&&(e[n]=t);return e})}dispatchEvent(t){const{type:n,message:r,isTrusted:s}=t;return super.dispatchEvent(s?e(new Event(n),{message:r}):t)}async close(){(await this.#e).close()}get size(){return this.#r(e=>e.count(),n).then(o)}async clear(){await this.#r(e=>e.clear(),r)}async delete(e){await this.#r(t=>t.delete(e),r)}async entries(){const e=await this.keys();return Promise.all(e.map(e=>this.get(e).then(t=>[e,t])))}async forEach(e,t=this){for(const[n,r]of await this.entries())await e.call(t,r,n,this)}async get(e){return await this.#r(t=>t.get(e),n).then(o)}async has(e){return void 0!==await this.#r(t=>t.getKey(e),n).then(o)}async keys(){return await this.#r(e=>e.getAllKeys(),n).then(o)}async set(e,t){return await this.#r(n=>n.put(t,e),r),this}async values(){const e=await this.keys();return Promise.all(e.map(e=>this.get(e)))}get[Symbol.toStringTag](){return this.#n}}class i extends Map{#s;#o;constructor(...e){super(),this.#s=new a(...e),this.#o=this.#s.entries().then(e=>{for(const[t,n]of e)super.set(t,n)})}async close(){await this.#o,await this.#s.close()}async sync(){await this.#o}clear(){return this.#o=this.#o.then(()=>this.#s.clear()),super.clear()}delete(e){return this.#o=this.#o.then(()=>this.#s.delete(e)),super.delete(e)}set(e,t){return this.#o=this.#o.then(()=>this.#s.set(e,t)),super.set(e,t)}}const c="37e4b92b",l="="+c,u="-"+c;let p=0;const d=p++,f=p++,h=p++,y=p++,m=p++,g=p++,w=p++,_=p++,b=p++,A=p++,E=p++,v=p++,k=p++,S=p++,$=p++,x=p++,j=p++,B=p++,M=p++,F=p++,P=p++,T=p++,R=p++,D=p++,O=p++,L=p++;const C=globalThis.ImageData||class{},I=new TextDecoder,H=new TextEncoder,U=new Map(Reflect.ownKeys(Symbol).map(e=>[Symbol[e],`@${String(e)}`])),W=e=>{switch(e[0]){case"@":return Symbol[e.slice(1)];case"#":return Symbol.for(e.slice(1));case"!":return Symbol(e.slice(1));default:return Symbol()}},N=e=>U.get(e)||((e,t)=>void 0===t?"?":void 0===Symbol.keyFor(e)?`!${t}`:`#${t}`)(e,e.description),q=Object.defineProperty,J=Object.assign,z=Array.isArray,K=ArrayBuffer.isView,G=(e,t)=>[e,t],V=e=>e,X=[],Y={},Z=function(){},Q=e=>(t,n=new Map)=>{for(let r=0,s=t.length;r<s;r++)t[r]=e(t[r],n);return t},ee=([e,t])=>0===e?t:W(t),te=e=>"string"==typeof e?G(0,e):G(16,N(e)),ne=(e,t)=>{for(let n=e.push,r=0,s=t.length;r<s;r+=32767)n.apply(e,t.subarray(r,r+32767))},re=new ArrayBuffer(8),se=new DataView(re),oe=new Uint8Array(re),ae=(e,t,n)=>(e.set(t,n),n),ie=e=>{oe[0]=e[ue++],oe[1]=e[ue++],oe[2]=e[ue++],oe[3]=e[ue++],oe[4]=e[ue++],oe[5]=e[ue++],oe[6]=e[ue++],oe[7]=e[ue++]},ce=e=>(oe[0]=e[ue++],oe[1]=e[ue++],oe[2]=e[ue++],oe[3]=e[ue++],se.getUint32(0,!0)),le=(e,t)=>{switch(e[ue++]){case m:return ie(e),se.getFloat64(0,!0);case g:return e[ue++];case P:{const n=ae(t,ue-1,{});for(let r=0,s=ce(e);r<s;r++)n[le(e,t)]=le(e,t);return n}case x:{const n=ae(t,ue-1,[]);for(let r=0,s=ce(e);r<s;r++)n.push(le(e,t));return n}case D:{const n=ue-1,r=le(e,t);return ae(t,n,new globalThis[r](le(e,t)))}case j:{const n=ue-1,r=ce(e);return ae(t,n,e.slice(ue,ue+=r).buffer)}case S:{const n=ue-1,r=ce(e);return ae(t,n,I.decode(e.slice(ue,ue+=r)))}case B:return ae(t,ue-1,new Date(le(e,t)));case F:{const n=ae(t,ue-1,new Map);for(let r=0,s=ce(e);r<s;r++)n.set(le(e,t),le(e,t));return n}case R:{const n=ae(t,ue-1,new Set);for(let r=0,s=ce(e);r<s;r++)n.add(le(e,t));return n}case M:{const n=le(e,t),r=le(e,t),s=le(e,t),o=new(globalThis[n]||Error)(r);return ae(t,ue-1,q(o,"stack",{value:s}))}case O:{const n=le(e,t),r=le(e,t),s=le(e,t),o=le(e,t),a=le(e,t);return ae(t,ue-1,new C(n,r,s,{colorSpace:o,pixelFormat:a}))}case T:{const n=le(e,t),r=le(e,t);return ae(t,ue-1,new RegExp(n,r))}case d:return!1;case f:return!0;case w:return NaN;case _:return 1/0;case b:return-1/0;case A:return 0;case E:return-0;case y:return null;case v:return ie(e),se.getBigInt64(0,!0);case k:return ie(e),se.getBigUint64(0,!0);case $:return W(le(e,t));case L:return t.get(ce(e));default:return}};let ue=0;const pe=e=>(ue=0,le(e,new Map)),de=({byteOffset:e=0}={})=>(t,n)=>pe(new Uint8Array(n,e,t));let fe=0;const he=fe++,ye=fe++,me=fe++,ge=fe++,we=fe++,_e=fe++,be=fe++,Ae=fe++,Ee=fe++,ve=fe++,ke=fe++,Se=fe++,$e=fe++,xe=fe++,je=fe++;fe++;const Be=fe++,Me=fe++,{getPrototypeOf:Fe}=Object,{construct:Pe}=Reflect,{toStringTag:Te}=Symbol,{toString:Re}=Y,De=(e,t=Re.call(e).slice(8,-1))=>t in globalThis?t:De(Fe(e)||Y),Oe=(e,t=e[Te])=>t in globalThis?t:Oe(Pe(Fe(e.constructor),[0])),Le=(e,t)=>new ArrayBuffer(e,{maxByteLength:t}),Ce=([e,t],n)=>{const r=n?e.byteLength:e.length;if(n){if(t){const n=Le(r,t);new Uint8Array(n).set(new Uint8Array(e)),e=n}}else{const n=t?Le(r,t):new ArrayBuffer(r);new Uint8Array(n).set(e),e=n}return e};const Ie=/\\[(\'|")?(.+?)\\1\\]/g,He=(e,t)=>e?.[t];var Ue=e=>{const t=[],n=e=>{const n=t.splice(e);for(;e<n.length;)n[e++].delete(n[e++])};return class r extends Map{static keys=Symbol();static proto=Symbol();drop(e,t){return e!==r.proto&&super.delete(r.keys),super.delete(e),t}set(r,s){return((r,s)=>{t.push(r,s)<3&&setTimeout(n,e,0)})(super.set(r,s),r),s}}},We=({reflect:e=V,transform:t=V,released:n=V,buffer:r=!1,timeout:s=-1}=Y)=>{const o=Q(ee),a=Q(te),i=e=>{if(!z(e))return e;const[t,n]=e;if(1&t)return u(t,n);switch(t){case 2:return $;case 0:return n;case 16:return W(n);case 32:return BigInt(n);case 68:return(([e,t,n,r],s)=>{const o=Ce(t,s),a=globalThis[e];return r?new a(o,n,r):new a(o,n)})(n,r);case 64:return Ce(n,r)}},c=(e,n=new Map)=>{switch(typeof e){case"object":{if(null===e)break;if(e===globalThis)return S;if(k in e)return g;let r=n.get(e);if(!r){const s=t(e);if(w||!m.has(s)){if(z(s)){const t=[];r=G(4,t),n.set(e,r);for(let e=0,r=s.length;e<r;e++)t[e]=c(s[e],n);return r}if(!(K(s)||s instanceof ArrayBuffer||"Object"!==De(s))){const t={};r=G(2,t),n.set(e,r);for(const e in s)t[e]=c(s[e],n);return r}}r=G(0,s),n.set(e,r)}return r}case"function":{if(k in e)return g;let r=n.get(e);if(!r){const s=t(e);r=G(8,b(s)),n.set(e,r)}return r}case"symbol":return G(16,N(e))}return e},l=Q(c),u=(e,t)=>{let n=v.get(t),r=n?.deref();return r||(n&&x.unregister(n),r=9===e?new Proxy(Z,new y(e,t)):new Proxy(3===e?Y:X,new h(e,t)),n=new WeakRef(r),v.set(t,n),x.register(r,t,n)),r},p=e=>{switch(typeof e){case"object":if(null===e)break;case"function":return k in e}return!1},d=-1<s,f=d?Ue(s):Map;class h{constructor(e,t){this.t=e,this.v=t,d&&(this.$=new f)}get(t,n){if(d&&this.$.has(n))return this.$.get(n);const r=e(ve,this.v,te(n));return d?r[0]?this.$.set(n,i(r[1])):i(r[1]):i(r)}set(t,n,r){const s=e(Be,this.v,te(n),c(r));return d?this.$.drop(n,s):s}has(t,n){return n===k?(g=[this.t,this.v],!0):e($e,this.v,te(n))}_oK(){return o(e(je,this.v),v)}ownKeys(e){return d?this.$.has(f.keys)?this.$.get(f.keys):this.$.set(f.keys,this._oK()):this._oK()}getOwnPropertyDescriptor(t,n){const r=i(e(ke,this.v,te(n)));if(r)for(const e in r)r[e]=i(r[e]);return r}defineProperty(t,n,r){const s=e(Ae,this.v,te(n),c(r));return d?this.$.drop(n,s):s}deleteProperty(t,n){const r=e(Ee,this.v,te(n));return d?this.$.drop(n,r):r}_gPO(){return i(e(Se,this.v))}getPrototypeOf(e){return d?this.$.has(f.proto)?this.$.get(f.proto):this.$.set(f.proto,this._gPO()):this._gPO()}setPrototypeOf(t,n){const r=e(Me,this.v,c(n));return d?this.$.drop(f.proto,r):r}isExtensible(t){return e(xe,this.v)}preventExtensions(e){return!1}}class y extends h{construct(t,n){return i(e(be,this.v,l(n)))}apply(t,n,r){const s=new Map;return i(e(_e,this.v,c(n,s),l(r,s)))}get(e,t){switch(t){case"apply":return(t,n)=>this.apply(e,t,n);case"call":return(t,...n)=>this.apply(e,t,n);default:return super.get(e,t)}}}let m,g,w=!0;const{apply:_}=Reflect,{id:b,ref:A,unref:E}=((e=0,t=new Map,n=new Map)=>({clear:()=>{t.clear(),n.clear()},id:r=>{let s=n.get(r);if(void 0===s){for(;t.has(s=e++););t.set(s,r),n.set(r,s)}return s},ref:e=>t.get(e),unref:e=>(n.delete(t.get(e)),t.delete(e))}))(),v=new Map,k=Symbol("reflected-ffi"),S=G(2,null),$=new Proxy(Y,new h(2,null)),x=new FinalizationRegistry(t=>{v.delete(t),e(he,t)});return{global:$,isProxy:p,assign(t,...n){const r=p(t),s=J(r?{}:t,...n);return r&&e(ye,g[1],c(s)),t},direct:e=>(w&&(w=!1,m=new WeakSet),m.add(e),e),evaluate:(t,...n)=>i(e(me,null,function(e=this){return String(e).replace(/^(async\\s*)?(\\bfunction\\b)?(.*?)\\(/,(e,t,n,r)=>r&&!n?`${t||""}function ${r}(`:e)}(t),l(n))),gather(t,...n){const r=p(t),s=r?i:e=>t[e];r&&(n=e(ge,g[1],a(n,v)));for(let e=0;e<n.length;e++)n[e]=s(n[e]);return n},query:(t,n)=>p(t)?i(e(we,g[1],n)):((e,t)=>t.replace(Ie,".$2").split(".").reduce(He,e))(t,n),reflect:async(e,t,...r)=>{switch(e){case _e:{const[e,n]=r;for(let e=0,t=n.length;e<t;e++)n[e]=i(n[e]);return c(await _(A(t),i(e),n))}case he:return n(A(t)),E(t)}}}};var Ne=Promise.withResolvers.bind(Promise),qe=(e=e=>e)=>{const t=new Map;let n=0;return[()=>{let r;do{r=e(n++)}while(t.has(r));const s=Ne();return t.set(r,s),[r,s.promise]},(e,n,r)=>{const s=t.get(e);t.delete(e),r?s?.reject(r):s?.resolve(n)}]};const Je=[],ze=new WeakSet,Ke=(...e)=>(ze.add(e),e);let{SharedArrayBuffer:Ge}=globalThis,Ve=!0;try{new Ge(4,{maxByteLength:8})}catch(e){Ve=!1,Ge=class extends ArrayBuffer{get growable(){return super.resizable}grow(e){super.resize(e)}}}const{create:Xe}=Object,Ye=`coincident-${Ve?crypto.randomUUID():Math.random().toString(36).substring(2)}`,Ze=2*Int32Array.BYTES_PER_ELEMENT,Qe={byteOffset:Ze},et=(e,t,n)=>{const r="then"!==t;return r&&(e[t]=n),r},tt=e=>{e.stopImmediatePropagation(),e.preventDefault()},[nt,rt]=qe();let[st,ot]=nt(),at=()=>ot,it=()=>{},{Atomics:ct,MessagePort:lt,SharedArrayBuffer:ut,postMessage:pt}=globalThis;if(Ve)rt(st);else{ut=Ge;const e=new Map,t=(e,...t)=>{e.addEventListener(...t)};if("importScripts"in globalThis){it=t=>{e.set(t,null)};const n=t=>{const n=t[0],r=p++;return e.set(n,r),[r,n,t]},r=pt;pt=function(e,t){if(u){const s={ID:e.ID,data:n(e.data)};r(s,t)}else ot.then(()=>this.postMessage(e,t))},lt=class extends lt{postMessage(e,t){u?super.postMessage(n(e),t):ot.then(()=>this.postMessage(e,t))}},t(globalThis,"message",e=>{tt(e),rt(st,e.data)},{once:!0});const{wait:s}=ct,{parse:o}=JSON,a=t=>{const n=new XMLHttpRequest;try{if(n.timeout=3e3,n.open("POST",`${l}?sabayon`,!1),n.setRequestHeader("Content-Type","application/json"),n.send(`["${c}",${e.get(t)}]`),200===n.status)return n;throw n}catch{return n.abort(),a(t)}},i=(e,t)=>(e.set(o(t.responseText)),"ok");ct={wait:(t,...n)=>e.has(t)?i(t,a(t)):s(t,...n)};let c,l,u=!1,p=Math.random();ot=ot.then(e=>{[c,l]=e,u=!0})}else{const n=[Ye,Math.random()].join("-").replace(/\\W/g,"-"),r=new BroadcastChannel("dc78209b-186c-4f83-80e9-406becb7d9f3");r.onmessage=async t=>{const[s,o,a]=t.data;if(o===n)for(const[t,[n,o]]of e)if(n===a){await o.promise;let e=t.length;for(;e--&&!t[e];);r.postMessage([s,t.slice(0,e+1)]);break}};const{notify:s}=ct;ct={notify(t,...n){const r=e.get(t);return r?(r[1].resolve(),0):s(t,...n)}};let o="",a=null;const i=(e,n)=>{let r,s=!0;e.getRegistration(o).then(t=>t??e.register(o,n)).then(function n(a){const{controller:i}=e;if(s=s&&!!i,r=a.installing||a.waiting||a.active,"activated"===r.state){if(s){if(i.scriptURL===o)return rt(st);a.unregister()}location.reload()}else t(r,"statechange",()=>n(a),{once:!0})})};at=(e,t)=>{if(!a){const n=new URL(e,location.href);o=`${n.protocol}//${n.host}${n.pathname}`,i(navigator.serviceWorker,t),a=ot}return a}}}const{setPrototypeOf:dt}=Reflect;let{postMessage:ft}=globalThis;const ht=Ne(),yt=lt.prototype;addEventListener("message",e=>{tt(e);const[t,n,r]=e.data,[s]=e.ports;n&&(dt(s,yt),t&&(ft=pt)),ht.resolve([t,n,r,s])},{once:!0});var mt=async e=>{const[t,n,r,s]=await at().then(()=>ht.promise),o=!!t,a=Ve||!!n,i=e?.transform,c=(e?.decoder||de)(Qe),l=!1!==e?.transfer;let u,p,d,f;if(a){const t=new(n?ut:SharedArrayBuffer)(e?.minByteLength||32767,{maxByteLength:e?.maxByteLength||16777216});u=new Int32Array(t),n?(({wait:f}=ct),it(u)):(({load:p,pause:d,wait:f}=Atomics),d&&(f=(e,t)=>{do{d()}while(p(e,t)<1)}))}const[h,y]=qe(String),m=new Map,g=Xe(null),w=new Proxy(g,{get(e,n){if("then"===n)return;let r=m.get(n);return r||m.set(n,r=(...e)=>{const r=((e,t)=>{let n=Je;return e&&ze.has(t.at(-1)||Je)&&(n=t.pop(),ze.delete(n)),n})(l,e),p=[u,n,i?e.map(i):e];if(a){o?ft({ID:t,data:p},r):s.postMessage(p,r),f(u,0),u[0]=0;const e=u[1]?c(u[1],u.buffer):void 0;if(e instanceof Error)throw e;return e}{const[e,t]=h();return p[0]=e,s.postMessage(p,r),t}}),r},set:et});return s.addEventListener("message",async({data:e})=>{"string"==typeof e[0]?y.apply(null,e):(await(async(e,t,n)=>{try{const r=await t[e[1]].apply(null,e[2]);e[1]=n?n(r):r,e[2]=null}catch(t){e[2]=t}})(e,g,i),s.postMessage(e))}),s.start(),{native:Ve,proxy:w,ffi_timeout:r,sync:a,transfer:Ke}};const gt={object(...e){return this.string(function(e){for(var t=e[0],n=1,r=arguments.length;n<r;n++)t+=arguments[n]+e[n];return t}(...e))},string(e){for(const t of e.split(/[\\r\\n]+/))if(t.trim().length){/^(\\s+)/.test(t)&&(e=e.replace(new RegExp("^"+RegExp.$1,"gm"),""));break}return e}},wt=new WeakMap,_t=e=>{const t=e||console,n={buffered:At,stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>n.stderr(...e),stdout:(...e)=>n.stdout(...e),async get(e){const t=await e;return wt.set(t,n),t}}},bt=new TextDecoder,At=(e,t=10)=>{const n=[];return r=>{if(r instanceof Uint8Array)for(const s of r)s===t?e(bt.decode(new Uint8Array(n.splice(0)))):n.push(s);else e(r)}},Et=(e,...t)=>gt[typeof e](e,...t),{isArray:vt}=Array,{assign:kt,create:St,defineProperty:$t,entries:xt}=Object,{all:jt,resolve:Bt}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Mt=(e,t=location.href)=>new URL(e,t.replace(/^blob:/,"")).href;function Ft(e){return e.startsWith(".")?Mt(e,this):e}const Pt=(e,t,n,r=!1,s=CustomEvent)=>{e.dispatchEvent(new s(`${t}:${n}`,{bubbles:!0,detail:{worker:r}}))},Tt=e=>Function(`\'use strict\';return (${e})`)(),Rt=e=>e.replace(/^(?:\\n|\\r\\n)/,""),Dt=Symbol.for("polyscript.js_modules"),Ot=new Map;$t(globalThis,Dt,{value:Ot}),new Proxy(Ot,{get:(e,t)=>e.get(t),has:(e,t)=>e.has(t),ownKeys:e=>[...e.keys()]});const Lt=(e,t)=>!t.startsWith("_"),Ct=(e,t)=>new Proxy(e,{has:Lt,get:(e,n)=>e[t][n]}),It=(e,t)=>import(e).then(e=>{Ot.set(t,{...e})}),Ht=e=>new Promise((t,n)=>{document.querySelector(`link[rel="stylesheet"][href="${e}"]`)?t():document.head.append(kt(document.createElement("link"),{rel:"stylesheet",href:e,onload:t,onerror:n}))}),Ut=e=>/\\.css$/i.test(new URL(e).pathname),Wt=(e,t)=>e.has(t),Nt=e=>[...e.keys()];var qt=(e,t,n,r)=>{const s=globalThis[Dt];if(n)for(let[e,t]of xt(n)){let n=s.get(t);n&&!vt(n)||(s.set(t,n||(n=[])),n.push(e))}return((e,t,n,r)=>new Proxy(e,{has:Wt,ownKeys:Nt,get:(e,s)=>{let o=e.get(s);if(vt(o)){let a=o;o=null;for(let e of a)e=Mt(e,r),Ut(e)?n.importCSS(e):(n.importJS(e,s),o=t[Dt].get(s));e.set(s,o)}return o}}))(s,e,t,r)};const Jt=new Map,zt=e=>Jt.get(e),Kt=(e,t)=>{try{return Function("require",t)(zt)}catch(t){wt.get(e).stderr(t)}};var Gt={type:"dummy",module:()=>"data:text/javascript,",engine:e=>_t().get(e),registerJSModule(e,t,n){Jt.set(t,n)},run:Kt,runAsync:Kt,runEvent:async(e,t,n)=>{try{await Function("require","e",`return ${t}(e)`)(zt,n)}catch(t){wt.get(e).stderr(t)}},transform:(e,t)=>t,writeFile(){}};const Vt=Object.getOwnPropertyDescriptors(Response.prototype),Xt=e=>"function"==typeof e,Yt={get:(e,t)=>Vt.hasOwnProperty(t)?((e,t,{get:n,value:r})=>n||!Xt(r)?e.then(e=>e[t]):(...n)=>e.then(e=>e[t](...n)))(e,t,Vt[t]):((e,t)=>Xt(t)?t.bind(e):t)(e,e[t])};var Zt=(e,...t)=>new Proxy(fetch(e,...t).then(t=>t.ok?t:Promise.reject(new Error(`[${t.status}] Unable to fetch ${e}`))),Yt);const Qt=!globalThis.window,en=({FS:e,PATH:t,PATH_FS:n},r,s)=>{const o=n.resolve(r),a=t.dirname(o);return e.mkdirTree?e.mkdirTree(a):nn(e,a),e.writeFile(o,new Uint8Array(s),{canOwn:!0})},tn=e=>{const t=e.split("/");return t.pop(),t.join("/")},nn=(e,t)=>{const n=[];for(const r of t.split("/"))"."!==r&&".."!==r&&(n.push(r),r&&e.mkdir(n.join("/")))},rn=(e,t)=>{const n=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":n.pop();break;default:n.push(e)}return[e.cwd()].concat(n).join("/").replace(/^\\/+/,"/")},sn=e=>{const t=e.map(e=>e.trim().replace(/(^[/]*|[/]*$)/g,"")).filter(e=>""!==e&&"."!==e).join("/");return e[0].startsWith("/")?`/${t}`:t},on=(e,t)=>Zt(Mt(e,t)).arrayBuffer(),an=(e,t,n,r)=>jt((e=>{for(const{files:t,to_file:n,from:r=""}of e){if(void 0!==t&&void 0!==n)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===n&&r.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${r}, please supply \'to_file\' parameter.`)}return e.flatMap(({from:e="",to_folder:t=".",to_file:n,files:r})=>{if(vt(r))return r.map(n=>({url:sn([e,n]),path:sn([t,n])}));const s=n||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:sn([t,s])}]})})(n).map(({url:n,path:s})=>on(n,r).then(n=>e.writeFile(t,s,n)))),cn=(e,t)=>t.endsWith("/")?`${t}${e.split("/").pop()}`:t,ln=(e,t)=>e.replace(/\\{.+?\\}/g,e=>{if(!t.has(e))throw new SyntaxError(`Invalid template: ${e}`);return t.get(e)}),un=(e,t,n,r)=>jt((e=>{const t=new Map,n=new Set,r=[];for(const[s,o]of xt(e))if(/^\\{.+\\}$/.test(s)){if(t.has(s))throw new SyntaxError(`Duplicated template: ${s}`);t.set(s,ln(o,t))}else{const e=ln(s,t),a=cn(e,ln(o||"./",t));if(n.has(a)&&!a.endsWith("/*"))throw new SyntaxError(`Duplicated destination: ${a}`);n.add(a),r.push({url:e,path:a})}return r})(n).map(({url:n,path:s})=>on(n,r).then(r=>e.writeFile(t,s,r,n)))),pn=({main:e,worker:t},n)=>{const r=[];if(t&&Qt)for(let[e,s]of xt(t))e=Mt(e,n),r.push(It(e,s));if(e&&!Qt)for(let[t,s]of xt(e))t=Mt(t,n),Ut(t)?Ht(t):r.push(It(t,s));return jt(r)},dn=e=>t=>{dispatchEvent(new CustomEvent(`${e}:progress`,{detail:t}))},{isNaN:fn,isFinite:hn,isInteger:yn}=Number,{ownKeys:mn}=Reflect,{is:gn}=Object,wn=(e,t,n)=>{const r=n.get(e),s=!r;return s?(se.setUint32(0,t.length,!0),n.set(e,[oe[0],oe[1],oe[2],oe[3]])):t.push(L,r[0],r[1],r[2],r[3]),s},_n=(e,t,n)=>{se.setUint32(0,n,!0),e.push(t,oe[0],oe[1],oe[2],oe[3])},bn=(e,t,n)=>{switch(typeof e){case"number":e&&hn(e)?yn(e)&&e<256&&-1<e?t.push(g,e):(se.setFloat64(0,e,!0),t.push(m,oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7])):fn(e)?t.push(w):e?t.push(e<0?b:_):t.push(gn(e,0)?A:E);break;case"object":switch(!0){case null===e:t.push(y);break;case!wn(e,t,n):break;case z(e):{const r=e.length;_n(t,x,r);for(let s=0;s<r;s++)bn(e[s],t,n);break}case K(e):if(t.push(D),bn(Oe(e),t,n),e=e.buffer,!wn(e,t,n))break;case e instanceof ArrayBuffer:{const n=new Uint8Array(e);_n(t,j,n.length),An(t,n);break}case e instanceof Date:t.push(B),bn(e.getTime(),t,n);break;case e instanceof Map:_n(t,F,e.size);for(const[r,s]of e)bn(r,t,n),bn(s,t,n);break;case e instanceof Set:_n(t,R,e.size);for(const r of e)bn(r,t,n);break;case e instanceof Error:t.push(M),bn(e.name,t,n),bn(e.message,t,n),bn(e.stack,t,n);break;case e instanceof C:t.push(O),bn(e.data,t,n),bn(e.width,t,n),bn(e.height,t,n),bn(e.colorSpace,t,n),bn(e.pixelFormat,t,n);break;case e instanceof RegExp:t.push(T),bn(e.source,t,n),bn(e.flags,t,n);break;default:if("toJSON"in e){const r=e.toJSON();bn(r===e?null:r,t,n)}else{const r=mn(e),s=r.length;_n(t,P,s);for(let o=0;o<s;o++){const s=r[o];bn(s,t,n),bn(e[s],t,n)}}}break;case"string":if(wn(e,t,n)){const n=H.encode(e);_n(t,S,n.length),An(t,n)}break;case"boolean":t.push(e?f:d);break;case"symbol":t.push($),bn(N(e),t,n);break;case"bigint":{let n=v;9223372036854775807n<e?(se.setBigUint64(0,e,!0),n=k):se.setBigInt64(0,e,!0),t.push(n,oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6],oe[7]);break}default:t.push(h)}};let An=ne;const En={parse:pe,stringify:e=>{const t=[];return An=ne,bn(e,t,new Map),t}},vn=new WeakMap,kn=async(e,t,n,r,s)=>{r.files&&(t("Loading files"),await un(e,n,r.files,s),t("Loaded files")),r.fetch&&(t("Loading fetch"),await an(e,n,r.fetch,s),t("Loaded fetch")),r.js_modules&&(t("Loading JS modules"),await pn(r.js_modules,s),t("Loaded JS modules"))},Sn=(e,t,n)=>{"polyscript"===t&&(n.lazy_py_modules=async(...t)=>(await vn.get(e)(t),t.map(t=>e.pyimport(t))),n.storage=async e=>{const t=new i(e);return await t.sync(),t},n.JSON=En),e.registerJsModule(t,n)},$n=(e,t)=>{if(e.endsWith("/*")){if(/\\.(zip|whl|tgz|tar(?:\\.gz)?)$/.test(t))return RegExp.$1;throw new Error(`Unsupported archive ${t}`)}return""},xn=(e,t,...n)=>{try{return e.runPython(Et(t),...n)}catch(t){wt.get(e).stderr(t)}},jn=async(e,t,...n)=>{try{return await e.runPythonAsync(Et(t),...n)}catch(t){wt.get(e).stderr(t)}},Bn=async(e,t,n)=>{const[r,...s]=t.split(".");let o,a=e.globals.get(r);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,n)}catch(t){wt.get(e).stderr(t)}};var Mn=(new TextEncoder).encode("_F=\'github:\'\\n_E=\'user-agent\'\\n_D=True\\n_C=False\\n_B=\'/\'\\n_A=None\\nfrom uio import StringIO\\nimport sys\\nclass Response:\\n\\tdef __init__(A,f):A.raw=f;A.encoding=\'utf-8\';A._cached=_A\\n\\tdef close(A):\\n\\t\\tif A.raw:A.raw.close();A.raw=_A\\n\\t\\tA._cached=_A\\n\\t@property\\n\\tdef content(self):\\n\\t\\tA=self\\n\\t\\tif A._cached is _A:\\n\\t\\t\\ttry:A._cached=A.raw.read()\\n\\t\\t\\tfinally:A.raw.close();A.raw=_A\\n\\t\\treturn A._cached\\n\\t@property\\n\\tdef text(self):return str(self.content,self.encoding)\\n\\tdef json(A):import ujson;return ujson.loads(A.content)\\nHEADERS_TO_IGNORE=_E,\\ntry:import js\\nexcept Exception as err:raise OSError(\'This version of urequests can only be used in the browser\')\\nHEADERS_TO_IGNORE=_E,\\ndef request(method,url,data=_A,json=_A,headers={},stream=_A,auth=_A,timeout=_A,parse_headers=_D):\\n\\tE=timeout;D=method;C=data;from js import XMLHttpRequest as G;A=G.new();A.withCredentials=_C\\n\\tif auth is not _A:import ubinascii;H,I=auth;A.open(D,url,_C,H,I)\\n\\telse:A.open(D,url,_C)\\n\\tfor(F,J)in headers.items():\\n\\t\\tif F.lower()not in HEADERS_TO_IGNORE:A.setRequestHeader(F,J)\\n\\tif E:A.timeout=int(E*1000)\\n\\tif json is not _A:assert C is _A;import ujson;C=ujson.dumps(json);A.setRequestHeader(\'Content-Type\',\'application/json\')\\n\\tA.send(C);B=Response(StringIO(A.responseText));B.status_code=A.status;B.reason=A.statusText;B.headers=A.getAllResponseHeaders();return B\\ndef get(url,**A):return request(\'GET\',url,**A)\\n_PACKAGE_INDEX=const(\'https://micropython.org/pi/v2\')\\n_CHUNK_SIZE=128\\ndef _ensure_path_exists(path):\\n\\timport os;A=path.split(_B)\\n\\tif not A[0]:A.pop(0);A[0]=_B+A[0]\\n\\tB=\'\'\\n\\tfor C in range(len(A)-1):\\n\\t\\tB+=A[C]\\n\\t\\ttry:os.stat(B)\\n\\t\\texcept:os.mkdir(B)\\n\\t\\tB+=_B\\ndef _chunk(src,dest):\\n\\tA=memoryview(bytearray(_CHUNK_SIZE))\\n\\twhile _D:\\n\\t\\tB=src.readinto(A)\\n\\t\\tif B==0:break\\n\\t\\tdest(A if B==_CHUNK_SIZE else A[:B])\\ndef _check_exists(path,short_hash):\\n\\tA=short_hash;import os\\n\\ttry:\\n\\t\\timport binascii as C,hashlib as D\\n\\t\\twith open(path,\'rb\')as E:B=D.sha256();_chunk(E,B.update);F=str(C.hexlify(B.digest())[:len(A)],\'utf-8\');return F==A\\n\\texcept:return _C\\ndef _rewrite_url(url,branch=_A):\\n\\tB=branch;A=url\\n\\tif not B:B=\'HEAD\'\\n\\tif A.startswith(_F):A=A[7:].split(_B);A=\'https://raw.githubusercontent.com/\'+A[0]+_B+A[1]+_B+B+_B+_B.join(A[2:])\\n\\treturn A\\ndef _download_file(url,dest):\\n\\tB=dest;A=get(url)\\n\\ttry:\\n\\t\\tif A.status_code!=200:print(\'Error\',A.status_code,\'requesting\',url);return _C\\n\\t\\tprint(\'Copying:\',B);_ensure_path_exists(B)\\n\\t\\twith open(B,\'wb\')as C:_chunk(A.raw,C.write)\\n\\t\\treturn _D\\n\\tfinally:A.close()\\ndef _install_json(package_json_url,index,target,version,mpy):\\n\\tK=\'File not found: {} {}\';I=version;H=index;G=package_json_url;D=target;E=get(_rewrite_url(G,I))\\n\\ttry:\\n\\t\\tif E.status_code!=200:print(\'Package not found:\',G);return _C\\n\\t\\tF=E.json()\\n\\tfinally:E.close()\\n\\tfor(A,C)in F.get(\'hashes\',()):\\n\\t\\tB=D+_B+A\\n\\t\\tif _check_exists(B,C):print(\'Exists:\',B)\\n\\t\\telse:\\n\\t\\t\\tL=\'{}/file/{}/{}\'.format(H,C[:2],C)\\n\\t\\t\\tif not _download_file(L,B):print(K.format(A,C));return _C\\n\\tfor(A,J)in F.get(\'urls\',()):\\n\\t\\tB=D+_B+A\\n\\t\\tif not _download_file(_rewrite_url(J,I),B):print(K.format(A,J));return _C\\n\\tfor(M,N)in F.get(\'deps\',()):\\n\\t\\tif not _install_package(M,H,D,N,mpy):return _C\\n\\treturn _D\\ndef _install_package(package,index,target,version,mpy):\\n\\tD=index;C=target;B=version;A=package\\n\\tif A.startswith(\'http://\')or A.startswith(\'https://\')or A.startswith(_F):\\n\\t\\tif A.endswith(\'.py\')or A.endswith(\'.mpy\'):print(\'Downloading {} to {}\'.format(A,C));return _download_file(_rewrite_url(A,B),C+_B+A.rsplit(_B)[-1])\\n\\t\\telse:\\n\\t\\t\\tif not A.endswith(\'.json\'):\\n\\t\\t\\t\\tif not A.endswith(_B):A+=_B\\n\\t\\t\\t\\tA+=\'package.json\'\\n\\t\\t\\tprint(\'Installing {} to {}\'.format(A,C))\\n\\telse:\\n\\t\\tif not B:B=\'latest\'\\n\\t\\tprint(\'Installing {} ({}) from {} to {}\'.format(A,B,D,C));E=sys.implementation._mpy&255 if mpy and hasattr(sys.implementation,\'_mpy\')else\'py\';A=\'{}/package/{}/{}/{}.json\'.format(D,\'py\',A,B)\\n\\treturn _install_json(A,D,C,B,mpy)\\ndef install(package,index=_A,target=_A,version=_A,mpy=_D):\\n\\tB=target;A=index\\n\\tif not B:\\n\\t\\tfor C in sys.path:\\n\\t\\t\\tif C.endswith(\'/lib\'):B=C;break\\n\\t\\telse:print(\'Unable to find lib dir in sys.path\');return\\n\\tif not A:A=_PACKAGE_INDEX\\n\\tif _install_package(package,A.rstrip(_B),B,version,mpy):print(\'Done\')\\n\\telse:print(\'Package may be partially installed\')");const Fn=async e=>(await import("./toml-BK2RWy-G.js")).parse(e);async function Pn(e,t){return new Promise((n,r)=>{e.syncfs(t,e=>{e?r(e):n()})})}function Tn(e){const t=e.FS,n=e.FS.filesystems.MEMFS,r=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(e){if(!e.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(e,t,n)=>{try{const r=s.getLocalSet(e),o=await s.getRemoteSet(e),a=t?o:r,i=t?r:o;await s.reconcile(e,a,i),n(null)}catch(e){n(e)}},getLocalSet:e=>{let n=Object.create(null);function s(e){return"."!==e&&".."!==e}function o(e){return t=>r.join2(e,t)}let a=t.readdir(e.mountpoint).filter(s).map(o(e.mountpoint));for(;a.length;){let e=a.pop(),r=t.stat(e);t.isDir(r.mode)&&a.push.apply(a,t.readdir(e).filter(s).map(o(e))),n[e]={timestamp:r.mtime,mode:r.mode}}return{type:"local",entries:n}},getRemoteSet:async e=>{const t=Object.create(null),n=await Rn(e.opts.fileSystemHandle);for(const[o,a]of n)"."!==o&&(t[r.join2(e.mountpoint,o)]={timestamp:"file"===a.kind?(await a.getFile()).lastModifiedDate:new Date,mode:"file"===a.kind?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:t,handles:n}},loadLocalEntry:e=>{const r=t.lookupPath(e).node,s=t.stat(e);if(t.isDir(s.mode))return{timestamp:s.mtime,mode:s.mode};if(t.isFile(s.mode))return r.contents=n.getFileDataAsTypedArray(r),{timestamp:s.mtime,mode:s.mode,contents:r.contents};throw new Error("node type not supported")},storeLocalEntry:(e,n)=>{if(t.isDir(n.mode))t.mkdirTree(e,n.mode);else{if(!t.isFile(n.mode))throw new Error("node type not supported");t.writeFile(e,n.contents,{canOwn:!0})}t.chmod(e,n.mode),t.utime(e,n.timestamp,n.timestamp)},removeLocalEntry:e=>{var n=t.stat(e);t.isDir(n.mode)?t.rmdir(e):t.isFile(n.mode)&&t.unlink(e)},loadRemoteEntry:async e=>{if("file"===e.kind){const t=await e.getFile();return{contents:new Uint8Array(await t.arrayBuffer()),mode:s.FILE_MODE,timestamp:t.lastModifiedDate}}if("directory"===e.kind)return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+e.kind)},storeRemoteEntry:async(e,n,s)=>{const o=e.get(r.dirname(n)),a=t.isFile(s.mode)?await o.getFileHandle(r.basename(n),{create:!0}):await o.getDirectoryHandle(r.basename(n),{create:!0});if("file"===a.kind){const e=await a.createWritable();await e.write(s.contents),await e.close()}e.set(n,a)},removeRemoteEntry:async(e,t)=>{const n=e.get(r.dirname(t));await n.removeEntry(r.basename(t)),e.delete(t)},reconcile:async(e,n,o)=>{let a=0;const i=[];Object.keys(n.entries).forEach(function(e){const r=n.entries[e],s=o.entries[e];(!s||t.isFile(r.mode)&&r.timestamp.getTime()>s.timestamp.getTime())&&(i.push(e),a++)}),i.sort();const c=[];if(Object.keys(o.entries).forEach(function(e){n.entries[e]||(c.push(e),a++)}),c.sort().reverse(),!a)return;const l="remote"===n.type?n.handles:o.handles;for(const t of i){const n=r.normalize(t.replace(e.mountpoint,"/")).substring(1);if("local"===o.type){const e=l.get(n),r=await s.loadRemoteEntry(e);s.storeLocalEntry(t,r)}else{const e=s.loadLocalEntry(t);await s.storeRemoteEntry(l,n,e)}}for(const t of c)if("local"===o.type)s.removeLocalEntry(t);else{const n=r.normalize(t.replace(e.mountpoint,"/")).substring(1);await s.removeRemoteEntry(l,n)}}};return e.FS.filesystems.NATIVEFS_ASYNC=s,async function(e,n){if("FileSystemDirectoryHandle"!==n.constructor.name)throw new TypeError("Expected argument \'fileSystemHandle\' to be a FileSystemDirectoryHandle");return function(e){t.mkdirTree?t.mkdirTree(e):nn(t,e);const{node:n}=t.lookupPath(e,{follow_mount:!1});if(t.isMountpoint(n))throw new Error(`path \'${e}\' is already a file system mount point`);if(!t.isDir(n.mode))throw new Error(`path \'${e}\' points to a file not a directory`);for(const t in n.contents)throw new Error(`directory \'${e}\' is not empty`)}(e),t.mount(t.filesystems.NATIVEFS_ASYNC,{fileSystemHandle:n},e),await Pn(t,!0),{syncfs:async()=>await Pn(t,!1)}}}const Rn=async e=>{const t=[];await async function e(n){for await(const r of n.values())t.push(r),"directory"===r.kind&&await e(r)}(e);const n=new Map;n.set(".",e);for(const r of t){const t=(await e.resolve(r)).join("/");n.set(t,r)}return n},Dn=(e,t)=>{try{e.mkdir(t)}catch(e){}},On=dn("mpy");var Ln={type:"micropython",module:(e="1.27.0-preview-256")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,n,r){const{stderr:s,stdout:o,get:a}=_t({stderr:At(console.error),stdout:At(console.log)});n=n.replace(/\\.m?js$/,".wasm"),On("Loading MicroPython");const i=await a(e({linebuffer:!1,stderr:s,stdout:o,url:n}));globalThis[Dt].set("-T-",this.transform.bind(this,i));const c=Cn.bind(this,i,r);return vn.set(i,c),await kn(this,On,i,t,r),this.writeFile(i,"./mip.py",Mn),t.packages&&(On("Loading packages"),await c(t.packages.map(Ft,r)),On("Loaded packages")),On("Loaded MicroPython"),i.mountNativeFS||(i.mountNativeFS=Tn(i._module)),i},registerJSModule:Sn,run:xn,runAsync:jn,runEvent:Bn,transform:(e,t)=>e.PyProxy.toJs(t),writeFile:(e,t,n,r)=>{const{FS:s,_module:{PATH:o,PATH_FS:a}}=e,i={FS:s,PATH:o,PATH_FS:a},c=$n(t,r);if(c){const r=t.slice(0,-1);switch("./"!==r&&s.mkdir(r),c){case"whl":case"zip":{const e=new Blob([n],{type:"application/zip"});return import("./zip-CnaQd2o5.js").then(async({BlobReader:t,Uint8ArrayWriter:n,ZipReader:a})=>{const i=new a(new t(e));for(const e of await i.getEntries()){const{directory:t,filename:a}=e,i=r+a;if(t)Dn(s,i);else{Dn(s,o.dirname(i));const t=await e.getData(new n);s.writeFile(i,t,{canOwn:!0})}}i.close()})}case"tgz":case"tar.gz":{const t="./_.tar.gz";return en(i,t,n),void e.runPython(`\\n                        import os, gzip, tarfile\\n                        tar = tarfile.TarFile(fileobj=gzip.GzipFile(fileobj=open("${t}", "rb")))\\n                        for f in tar:\\n                            name = f"${r}{f.name}"\\n                            if f.type == tarfile.DIRTYPE:\\n                                if f.name != "./":\\n                                    os.mkdir(name.strip("/"))\\n                            else:\\n                                dir = os.path.dirname(name)\\n                                if not os.path.exists(dir):\\n                                    os.mkdir(dir)\\n                                source = tar.extractfile(f)\\n                                with open(name, "wb") as dest:\\n                                    dest.write(source.read())\\n                                    dest.close()\\n                        tar.close()\\n                        os.remove("${t}")\\n                    `)}}}return en(i,t,n)}};async function Cn(e,t,n){let r;for(const s of n)if(s.endsWith(".whl")){const n=Mt(s,t),r=await Zt(n).arrayBuffer();await this.writeFile(e,"./*",r,n)}else r||(r=e.pyimport("mip")),r.install(s)}const In={dict_converter:Object.fromEntries},{stringify:Hn}=JSON,{apply:Un}=Reflect,Wn=Function.prototype,Nn=e=>function(...t){return Un(e,this,t)};let qn,Jn;const zn=e=>{const t=new WeakMap,n=n=>{for(let r,s=0;s<n.length;s++)switch(typeof(r=n[s])){case"object":if(null===r)break;case"function":if(qn in r&&!r[qn].shared?.gcRegistered){e=!1;let o=t.get(r)?.deref();if(!o){o=Jn(r);const e=new WeakRef(o);t.set(r,e),t.set(o,e)}n[s]=o,e=!0}}};Object.defineProperties(Wn,{apply:{value(t,r){return e&&n(r),Un(this,t,r)}},call:{value(t,...r){return e&&n(r),Un(this,t,r)}}})},Kn=dn("py"),Gn=new WeakMap;var Vn={type:"pyodide",module:(e="0.28.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e,version:t},n,r,s){Kn("Loading Pyodide");let{packages:o,index_urls:a}=n;o&&(o=o.map(Ft,s)),Kn("Loading Storage");const c=r.slice(0,r.lastIndexOf("/")),l=new i(`${c}@${t}`),u={indexURL:c},p="never"!==n.packages_cache&&"0.28.0"!==t;if(await l.sync(),p){if(o)if("passthrough"===n.packages_cache)u.packages=o,o=null,l.clear();else{o=o.sort();const e=Hn(o);if(l.has(e)){const n=l.get(e);if(u.packages=o.map(e=>e.split(/[>=<]=/)[0]),t.startsWith("0.27")){const e=new Blob([n],{type:"application/json"});u.lockFileURL=URL.createObjectURL(e)}else u.lockFileContents=n;o=null}}}else l.clear();Kn("Loaded Storage");const{stderr:d,stdout:f,get:h}=_t(),y=await h(e({stderr:d,stdout:f,...u}));globalThis[Dt].set("-T-",this.transform.bind(this,y)),n.debug&&y.setDebug(!0);const m=Yn.bind(y);return a&&Gn.set(y,a),vn.set(y,m),await kn(this,Kn,y,n,s),o&&await m(o,l,p),await l.close(),u.lockFileURL&&URL.revokeObjectURL(u.lockFileURL),Kn("Loaded Pyodide"),"auto"===n.experimental_create_proxy&&(y.runPython(["import js","from pyodide.ffi import to_js","o=js.Object.fromEntries","js.experimental_create_proxy=lambda r:to_js(r,dict_converter=o)"].join(";"),{globals:y.toPy({})}),Jn=globalThis.experimental_create_proxy,delete globalThis.experimental_create_proxy,[qn]=Reflect.ownKeys(Jn).filter(e=>"symbol"==typeof e&&"Symbol(pyproxy.attrs)"===String(e)),zn(!0)),y},registerJSModule:Sn,run:Nn(xn),runAsync:Nn(jn),runEvent:Nn(Bn),transform:(e,t)=>Un(Xn,e,[t]),writeFile:(e,t,n,r)=>{const s=$n(t,r);if(s)return e.unpackArchive(n,s,{extractDir:t.slice(0,-1)});const{FS:o,PATH:a,_module:{PATH_FS:i}}=e;return en({FS:o,PATH:a,PATH_FS:i},t,n)}};function Xn(e){const{ffi:{PyProxy:t}}=this;if(e&&"object"==typeof e){if(e instanceof t)return e.toJs(In);if(e instanceof Map)return new Map([...e.entries()]);if(vt(e))return e.map(Xn,this)}return e}async function Yn(e,t,n=!1){const{log:r}=console,s=(e,...t)=>{r(e,...t),console.log=r,Kn(e),console.log=s};console.log=s,await this.loadPackage("micropip");const o=this.pyimport("micropip");if(Gn.has(this)&&o.set_index_urls(Gn.get(this)),await o.install(e,{keep_going:!0}),console.log=r,n&&t instanceof i){const n=o.freeze();t.set(Hn(e),n)}o.destroy()}const Zn="ruby-wasm-wasi",Qn=Zn.replace(/\\W+/g,"_");var er={type:Zn,experimental:!0,module:(e="2.7.1")=>`https://cdn.jsdelivr.net/npm/@ruby/3.2-wasm-wasi@${e}/dist/browser/+esm`,async engine({DefaultRubyVM:e},t,n,r){n=n.replace(/\\/browser\\/\\+esm$/,"/ruby.wasm");const s=await Zt(n).arrayBuffer(),o=await WebAssembly.compile(s),{vm:a}=await e(o);return t.files&&await un(this,a,t.files,r),t.fetch&&await an(this,a,t.fetch,r),t.js_modules&&await pn(t.js_modules,r),a},registerJSModule(e,t,n){t=t.replace(/\\W+/g,"__");const r=`__module_${Qn}_${t}`;globalThis[r]=n,this.run(e,`require "js";$${t}=JS.global[:${r}]`),delete globalThis[r]},run:(e,t,...n)=>e.eval(Et(t),...n),runAsync:(e,t,...n)=>e.evalAsync(Et(t),...n),async runEvent(e,t,n){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,r=`__module_${Qn}_event`;globalThis[r]=n,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${r}])`),delete globalThis[r]}else{const r=this.run(e,`method(:${t})`);await r.call(t,e.wrap(n))}},transform:(e,t)=>t,writeFile:()=>{throw new Error(`writeFile is not supported in ${Zn}`)}};var tr={type:"wasmoon",module:(e="1.16.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},n,r,s){const{stderr:o,stdout:a,get:i}=_t(),c=await i((new e).createEngine());return c.global.getTable(t.Base,e=>{c.global.setField(e,"print",a),c.global.setField(e,"printErr",o)}),n.files&&await un(this,c,n.files,s),n.fetch&&await an(this,c,n.fetch,s),n.js_modules&&await pn(n.js_modules,s),c},registerJSModule:(e,t,n)=>{e.global.set(t,n)},run:(e,t,...n)=>{try{return e.doStringSync(Et(t),...n)}catch(t){wt.get(e).stderr(t)}},runAsync:async(e,t,...n)=>{try{return await e.doString(Et(t),...n)}catch(t){wt.get(e).stderr(t)}},runEvent:async(e,t,n)=>{const[r,...s]=t.split(".");let o,a=e.global.get(r);for(const e of s)[o,a]=[a,a[e]];try{await a.call(o,n)}catch(t){wt.get(e).stderr(t)}},transform:(e,t)=>t,writeFile:({cmodule:{module:{FS:e}}},t,n)=>((e,t,n)=>(nn(e,tn(t)),t=rn(e,t),e.writeFile(t,new Uint8Array(n),{canOwn:!0})))(e,t,n)};const nr=new WeakMap,rr=new FinalizationRegistry(e=>e()),sr=async(e,t)=>{const{shelter:n,destroy:r,io:s}=nr.get(e),{output:o,result:a}=await n.captureR(Et(t));for(const{type:e,data:t}of o)s[e](t);return rr.register(a,r),a};var or={type:"webr",experimental:!0,module:(e="0.5.6")=>`https://cdn.jsdelivr.net/npm/webr@${e}/dist/webr.mjs`,async engine(e,t,n,r){const{get:s}=_t(),o=new e.WebR;await s(o.init().then(()=>o));const a=await new o.Shelter;return nr.set(o,{module:e,shelter:a,destroy:a.destroy.bind(a),io:wt.get(o)}),t.files&&await un(this,o,t.files,r),t.fetch&&await an(this,o,t.fetch,r),t.js_modules&&await pn(t.js_modules,r),o},registerJSModule(e,t){console.warn(`Experimental interpreter: module ${t} is not supported (yet)`)},run:sr,runAsync:sr,async runEvent(e,t,n){await e.evalRVoid(`${t}(event)`,{env:{event:{type:[n.type]}}})},transform:(e,t)=>t,writeFile:()=>{}};const ar=new Map,ir=new Map,cr=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[n,...r]=t.split("@"),s=ar.get(n),o=/^(?:\\.?\\.?\\/|[a-z0-9-]+:\\/\\/)/i.test(r)?r.join("@"):s.module(...r);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:n,module:r,engine:s}=e.get(t);return(e,o)=>r.then(r=>(ir.set(t,e),s(r,e,n,o)))}}),lr=e=>{for(const t of[].concat(e.type))ar.set(t,e)};for(const e of[Gt,Ln,Vn,er,tr,or])lr(e);const{parse:ur}=JSON,pr=(e,t,n={})=>{const[r,s]=((e,t="./config.txt")=>{let n=typeof e;return"string"===n&&/\\.(json|toml|txt)$/.test(e)?n=RegExp.$1:e=t,[Mt(e),n]})(e,t);return"json"===s?n=Zt(r).json():"toml"===s?n=Zt(r).text().then(Fn):"string"===s?n=dr(e):"object"===s&&e?n=e:"txt"===s&&"string"==typeof n&&(n=dr(n)),[n,e=r]},dr=e=>{try{return ur(e)}catch(t){return Fn(e)}},fr="BeforeRun",hr="AfterRun",yr=[`code${fr}`,`code${fr}Async`,`code${hr}`,`code${hr}Async`],mr=["onWorker","onReady",`on${fr}`,`on${fr}Async`,`on${hr}`,`on${hr}Async`];function gr(e,t){const{run:n,runAsync:r}=ar.get(this.type);return{...e,run:n.bind(this,t),runAsync:r.bind(this,t)}}const wr=(e,t,n,r,s,o)=>{if(s||o){const a=gr.bind(e,t),i=r?"runAsync":"run",c=e[i];e[i]=r?async function(e,t,...r){s&&await s.call(this,a(e),n);const i=await c.call(this,e,t,...r);return o&&await o.call(this,a(e),n),i}:function(e,t,...r){s&&s.call(this,a(e),n);const i=c.call(this,e,t,...r);return o&&o.call(this,a(e),n),i}}};let _r,br,Ar;const Er=(e,t)=>{addEventListener(e,t||(async t=>{try{await _r,br(`xworker.on${e}`,t)}catch(e){postMessage(e)}}),!!t&&{once:!0})},{proxy:vr,sync:kr,native:Sr,window:$r,isWindowProxy:xr,ffi:jr}=await(async e=>{const t=await mt({...e,decoder:e?.decoder||de}),n=We({...e,buffer:!0,reflect:t.proxy[l],timeout:t.ffi_timeout});return t.proxy[u]=n.reflect,{...t,window:n.global,isWindowProxy:n.isProxy,ffi:{assign:n.assign,direct:n.direct,evaluate:n.evaluate,gather:n.gather,query:n.query}}})({transfer:!1,transform:e=>Ar?Ar(e):e}),Br={polyfill:kr,sync:vr,window:Sr||kr?$r:null,isWindowProxy:xr,onmessage:console.info,onerror:console.error,onmessageerror:console.warn,postMessage:postMessage.bind(self)};Er("message",({data:{options:e,config:t,configURL:n,code:r,hooks:s}})=>{_r=(async()=>{try{const{id:o,tag:c,type:l,custom:u,version:p,config:d,async:f}=e,h=((e,t="")=>`${e}@${t}`.replace(/@$/,""))(l,p),y=await((e,t,n,r={})=>(t&&([r,t]=pr(t,n,r)),Bt(r).then(n=>cr[e](n,t))))(h,t,n,d),{js_modules:m}=ir.get(h),g=m?.main,w=St(ar.get(l)),_=((e,t,n,r)=>({type:t,config:n,interpreter:r,io:wt.get(r),run:(t,...n)=>e.run(r,t,...n),runAsync:(t,...n)=>e.runAsync(r,t,...n),runEvent:(...t)=>e.runEvent(r,...t)}))(w,u||l,d||{},y);let b="run";if(f&&(b+="Async"),s){let e,t,n="",r="";for(const e of yr){const t=s[e];if(t){const s=e.endsWith("Async");(s&&f||!s&&!f)&&(e.startsWith("codeBefore")?n=t:r=t)}}(n||r)&&((e,t,n,r)=>{const s=e[t].bind(e);e[t]="run"===t?(e,t,...o)=>{n&&s(e,n,...o);const a=s(e,Rt(t),...o);return r&&s(e,r,...o),a}:async(e,t,...o)=>{n&&await s(e,n,...o);const a=await s(e,Rt(t),...o);return r&&await s(e,r,...o),a}})(w,b,n,r);for(const n of mr.slice(2)){const r=s[n];if(r){const s=n.endsWith("Async");if(s&&f||!s&&!f){const s=Tt(r);n.startsWith("onBefore")?e=s:t=s}}}wr(w,_,Br,f,e,t)}let A,E,v,k=null,S="";(Sr||kr)&&(({CustomEvent:A,document:E}=$r),k=o&&E.getElementById(o)||null,v=e=>Pt(k,u||l,e,!0,A));const $=qt($r,vr,g,t);if(((e,t,n,r)=>{if("pyodide"===e)return;const s="polyscript.js_modules";for(const e of Reflect.ownKeys(r))t.registerJSModule(n,`${s}.${e}`,Ct(r,e));t.registerJSModule(n,s,r)})(l,w,y,$),w.registerJSModule(y,"polyscript",{IDBMap:a,IDBMapSync:i,xworker:Br,currentScript:k,config:_.config,js_modules:$,ffi:jr,get target(){return!S&&k&&("SCRIPT"===c?k.after(kt($r.document.createElement(`script-${u||l}`),{id:S=`${o}-target`})):(S=o,k.replaceChildren(),k.style.display="block")),S}}),br=w.runEvent.bind(w,y),Ar=w.transform.bind(w,y),k&&v("ready"),s?.onReady&&Tt(s?.onReady).call(w,gr.call(w,_,y),Br),await w[b](y,r),["micropython","pyodide"].includes(w.type)){const e="polyscript",t=`__${e}_workers__`,n="__export__";y.runPython([`import js as ${t}`,`${t}.${t} = "${n}" in locals() and ${n} or []`,`del ${t}`].join("\\n"));const r=[...globalThis[t]];delete globalThis[t],r.length&&y.runPython([`from ${e} import xworker as ${t}`,...r.map(e=>`${t}.sync.${e} = ${e}`),`del ${t}`].join("\\n"))}return k&&v("done"),postMessage("polyscript:done"),y}catch(e){postMessage(e)}})(),Er("error"),Er("message"),Er("messageerror"),(Sr||kr)&&addEventListener("py:progress",({type:e,detail:t})=>{$r.dispatchEvent(new $r.CustomEvent(e,{detail:t}))})});\n'.replace(Po,Mo)],{type:"text/javascript"})),...u))({serviceWorker:n?.serviceWorker||n?.service_worker,reflected_ffi_timeout:globalThis.reflected_ffi_timeout??-1}),{postMessage:o}=s,a=this instanceof Ne,i=q(s.proxy,{importJS:dt,importCSS:vn}),l=X();let c=ne(t).text().then(u=>{const f=a?this.toJSON():void 0;o.call(s,{options:n,config:r,code:u,hooks:f})}).then(()=>{c={then:u=>u()}});return ts(s,{sync:{value:i},ready:{value:l.promise},postMessage:{value:(u,...f)=>c.then(()=>o.call(s,u,...f))},onerror:{writable:!0,configurable:!0,value:console.error}}),s.addEventListener("message",u=>{const{data:f}=u,m=f instanceof Error;(m||f==="polyscript:done")&&(u.stopImmediatePropagation(),m?(l.reject(f),s.onerror(St(u,{type:{value:"error"},error:{value:f}}))):l.resolve(s))}),a&&this.onWorker?.(this.interpreter,s),s};const jr="Invalid content";var Sr=e=>{const{src:t,worker:n}=e.attributes;if(n){let{value:r}=n;if(r)throw new SyntaxError("Invalid worker attribute");if(r=t?.value,!r){if(t)throw new SyntaxError("Invalid worker attribute");if(e.childElementCount){const{innerHTML:s,localName:o,type:a}=e,i=a||o.replace(/-script$/,"");r=hn(s),console.warn(`Deprecated: use <script type="${i}"> for an always safe content parsing:
`,r)}else r=e.textContent;return URL.createObjectURL(new Blob([L(r)],{type:"text/plain"}))}return r}if(t&&e.textContent.replace(/\/\*[\s\S]*?\*\//g,"").replace(/^\s*(?:\/\/|#).*/gm,"").trim())throw new SyntaxError(jr)};const It=(e,t)=>{const n=(r=>{let s=r;for(;s.parentNode;)s=s.parentNode;return s})(e);return n.getElementById(t)||((r,s=document)=>s.querySelector(r))(t,n)},ye=new WeakMap,Jo={get(){let e=ye.get(this);return e||(e=document.createElement(`${this.type}-script`),ye.set(this,e),He(this)),e},set(e){typeof e=="string"?ye.set(this,It(this,e)):(ye.set(this,e),He(this))}},Ce=new WeakMap,H=new Map,ct=(e,t)=>{const n=e?.value;return n?t+n:""},Rr=(e,t,n,r,s,o,a=e)=>{if(!H.has(t)){const i={interpreter:No(n,s,o),queue:An(),XWorker:Lt(e,r)};H.set(t,i),H.has(e)||H.set(e,i),H.has(a)||H.set(a,i)}return H.get(t)},He=async e=>{if(Ce.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{config:t,env:n,name:r,target:s,version:o,"service-worker":a},src:i,type:l}=e,c=!Te(e),u=o?.value,f=kr(l,u);let m=ct(t,"|");const d=ct(n,"")||`${f}${m}`;m=m.slice(1);const _=Sr(e);if(_){const B=new(Lt(l,u))(_,{...bn(e,l),version:u,async:c,config:m,serviceWorker:a?.value});Ce.set(te(e,"xworker",{value:B}),{xworker:B});const k=r?.value;return void(k&&Ot[k].resolve(B.ready))}const y=ct(s,""),p=Rr(l,d,f,u,m);Ce.set(te(e,"target",Jo),p),y&&ye.set(e,It(e,y));const g=i?ne(i).text():e.textContent;p.queue=p.queue.then(()=>(async(B,k,F,P)=>{const{type:E}=B,v=W.get(E);v.experimental&&console.warn(`The ${E} interpreter is experimental`);const[h,A]=await ve([Ce.get(B).interpreter,k]);try{En(E,v,h,$e),v.registerJSModule(h,"polyscript",{IDBMap:We,IDBMapSync:Ee,XWorker:F,currentScript:B,js_modules:$e,workers:yr}),le(B,E,"ready"),te(document,"currentScript",{configurable:!0,get:()=>B});const b=le.bind(null,B,E,"done");let w=v[P?"runAsync":"run"](h,A);return P&&(w=await w),b(),w}finally{delete document.currentScript}})(e,g,p.XWorker,c))}},xr=new Proxy(St(null),{get:(e,t)=>new Promise(queueMicrotask).then(()=>Dr(t))}),Dr=async e=>{if(H.has(e)){const{interpreter:n,queue:r}=H.get(e);return(await ve([n,r]))[0]}const t=H.size?`Available interpreters are: ${[...H.keys()].map(n=>`"${n}"`).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},$r=async e=>{const{type:t,currentTarget:n}=e;if(re.length)for(let{name:r,value:s,ownerElement:o}of _r(`./@*[${re.map(a=>`name()="${a}${t}"`).join(" or ")}]`,n)){r=r.slice(0,-(t.length+1));const a=await Dr(o.getAttribute(`${r}-env`)||r);W.get(r).runEvent(a,s,e)}},Ct=e=>{if(re.length)for(let{name:t,ownerElement:n}of _r(`.//@*[${re.map(r=>`starts-with(name(),"${r}")`).join(" or ")}]`,e)){const r=t.lastIndexOf("-"),s=t.slice(r+1);s!=="env"&&(n.addEventListener(s,$r),"disabled"in n&&!n.disabled&&(n.disabled=!0,xr[t.slice(0,r)].then(()=>{n.disabled=!1})))}},Tr=Lt(),ge=[],Fr=new Map,Pr=new Map,Ae=new Map,kt=async e=>{for(const t of ge)if(e.matches(t)){const n=Pr.get(t),r=De.get(n),{resolve:s}=Ae.get(n),{options:o,known:a}=r;if(a.has(e))return;a.add(e);for(const[h,A]of Fr)e.matches(h)&&await A(e);const{interpreter:i,configURL:l,config:c,version:u,env:f,onerror:m,hooks:d}=o;let _;try{const h=Sr(e);if(h){let A=u,b=l,w=e.getAttribute("config")||c||{};if(!A||!w){const[O,G]=Cr(w,l);w=await O,b=G,A=w.version||w.interpreter,A&&/\.m?js$/.test(A)&&(A=new URL(A,b).href)}Number.isSafeInteger(w?.experimental_ffi_timeout)&&(globalThis.reflected_ffi_timeout=w.experimental_ffi_timeout);const j=Tr.call(new Ne(null,d),h,{...bn(e,n),configURL:b,version:A,type:i,custom:n,config:w,async:!Te(e),serviceWorker:e.getAttribute("service-worker")});te(e,"xworker",{value:j}),s({type:n,xworker:j});const x=e.getAttribute("name");return void(x&&Ot[x].resolve(j.ready))}}catch(h){_=h}const y=kr(i,u),p=f||`${y}${c?`|${c}`:""}`,{interpreter:g,XWorker:B}=Rr(n,p,y,u,c,l,i),k=await g,F=St(W.get(i)),P=new Ne(k,d),E=function(...h){return B.apply(P,h)},v={...rs(F,n,structuredClone(mr.get(y)),k),XWorker:E};En(i,F,k,$e),F.registerJSModule(k,"polyscript",{IDBMap:We,IDBMapSync:Ee,XWorker:E,config:v.config,currentScript:n.startsWith("_")?null:e,js_modules:$e,workers:yr});for(const h of["Run","RunAsync"]){let A,b,w="",j="";for(const x of Bt){const O=d?.main?.[x];O&&x.endsWith(h)&&(x.startsWith("codeBefore")?w=L(O()):j=L(O()))}(w||j)&&ss(F,`r${h.slice(1)}`,w,j);for(let x=2;x<Ie.length;x++){const O=Ie[x],G=d?.main?.[O];G&&O.endsWith(h)&&(O.startsWith("onBefore")?A=G:b=G)}Uo(F,v,e,h.endsWith("Async"),A,b)}r.queue=r.queue.then(()=>(s(v),_&&m?.(_,e),d?.main?.onReady?.(v,e)))}},De=new Map;let qo=0;const cn=e=>(Ae.has(e)||Ae.set(e,X()),Ae.get(e).promise),[{customObserver:wa,define:Go,whenDefined:zo,env:ba,Hook:Ko,XWorker:Vo},Xo]=yn("polyscript",{customObserver:Fr,define:(e,t)=>{let n=e==null;if(n)e="_ps"+qo++;else if(W.has(e)||De.has(e))throw new Error(`<script type="${e}"> already registered`);if(!W.has(t?.interpreter))throw new Error("Unspecified interpreter");W.set(e,W.get(t.interpreter));const r=[`script[type="${e}"]`];if(cn(e),n){const{hooks:s}=t,o=s?.main?.onReady;t={...t,hooks:{...s,main:{...s?.main,onReady(a,i){ge.splice(ge.indexOf(e),1),W.delete(e),De.delete(e),Ae.delete(e),i.remove(),o?.(a)}}}},document.head.append(q(document.createElement("script"),{type:e}))}else r.push(`${e}-script`),re.push(`${e}-`);for(const s of r)Pr.set(s,e);ge.push(...r),De.set(e,{options:q({env:e},t),known:new WeakSet,queue:Promise.resolve()}),n||Ct(document),pe(r.join(",")).forEach(kt)},whenDefined:cn,env:xr,Hook:Ne,XWorker:Tr});if(!Xo){const e=new MutationObserver(s=>{const o=At.join(",");for(const{type:a,target:i,attributeName:l,addedNodes:c}of s){if(a==="attributes"){const u=l.lastIndexOf("-")+1;if(u){const f=l.slice(0,u);for(const m of re)if(f===m){const d=l.slice(u);if(d!=="env"){const _=i.hasAttribute(l)?"add":"remove";i[`${_}EventListener`](d,$r)}break}}continue}for(const u of c)u.nodeType===1&&(Ct(u),o&&u.matches(o)?He(u):t(o,u,!0))}}),t=(s,o,a)=>{s&&pe(s,o).forEach(He),(s=ge.join(","))&&(a&&kt(o),pe(s,o).forEach(kt))},n=s=>(e.observe(s,{childList:!0,subtree:!0,attributes:!0}),s),{attachShadow:r}=Element.prototype;q(Element.prototype,{attachShadow(s){return n(r.call(this,s))}}),queueMicrotask(()=>{Ct(n(document)),t(At.join(","),document,!1)})}var Ge=new Map([["py","pyodide"],["mpy","micropython"]]);const Mr=[];for(const[e]of Ge){const t=[`script[type="${e}"]`,`${e}-script`];for(const n of document.querySelectorAll(t.join(","))){const{promise:r,resolve:s}=X();Mr.push(r),n.addEventListener(`${e}:done`,s,{once:!0})}}Promise.all(Mr).then(()=>{dispatchEvent(new Event("py:all-done"))});var Yo={codemirror:()=>Promise.resolve().then(function(){return fa}),"deprecations-manager":()=>M(()=>import("./deprecations-manager-BOMNTki5-BkDLwCb0.js"),__vite__mapDeps([0,1,2]),import.meta.url),donkey:()=>M(()=>import("./donkey-pplT2O8W-Xs_F1WAX.js"),__vite__mapDeps([3,2]),import.meta.url),error:()=>M(()=>import("./error-Cedsh0vW-D6l2vNzC.js"),__vite__mapDeps([1,2]),import.meta.url),"py-editor":()=>M(()=>import("./py-editor-_2KyvtxC-CrXOlxVn.js"),__vite__mapDeps([4,2,1]),import.meta.url),"py-game":()=>M(()=>import("./py-game-B7MRDDks-4QeKgFtH.js"),__vite__mapDeps([5,2]),import.meta.url),"py-terminal":()=>M(()=>import("./py-terminal-ryIeASnj-BufOkCkb.js"),__vite__mapDeps([6,2,1]),import.meta.url)};const z={CONFLICTING_CODE:"PY0409",BAD_CONFIG:"PY1000",FETCH_ERROR:"PY0001",FETCH_UNAUTHORIZED_ERROR:"PY0401",FETCH_FORBIDDEN_ERROR:"PY0403",FETCH_NOT_FOUND_ERROR:"PY0404",FETCH_SERVER_ERROR:"PY0500",FETCH_UNAVAILABLE_ERROR:"PY0503"};class Zo extends Error{constructor(t,n="",r="text"){super(`(${t}): ${n}`),this.errorCode=t,this.messageType=r,this.name="UserError"}}class Q extends Zo{constructor(t,n){super(t,n),this.name="FetchError"}}const Or=e=>e.text();async function Lr(e,t){let n;try{n=await fetch(e,t)}catch(r){const s=r;let o;throw o=e.startsWith("http")?`Fetching from URL ${e} failed with error '${s.message}'. Are your filename and path correct?`:`Polyscript: Access to local files
        (using [[fetch]] configurations in &lt;py-config&gt;)
        is not available when directly opening a HTML file;
        you must use a webserver to serve the additional files.
        See <a style="text-decoration: underline;" href="https://github.com/pyscript/pyscript/issues/257#issuecomment-1119595062">this reference</a>
        on starting a simple webserver with Python.
            `,new Q(z.FETCH_ERROR,o)}if(!n.ok){const r=`Fetching from URL ${e} failed with error ${n.status} (${n.statusText}). Are your filename and path correct?`;switch(n.status){case 404:throw new Q(z.FETCH_NOT_FOUND_ERROR,r);case 401:throw new Q(z.FETCH_UNAUTHORIZED_ERROR,r);case 403:throw new Q(z.FETCH_FORBIDDEN_ERROR,r);case 500:throw new Q(z.FETCH_SERVER_ERROR,r);case 503:throw new Q(z.FETCH_UNAVAILABLE_ERROR,r);default:throw new Q(z.FETCH_ERROR,r)}}return n}const{BAD_CONFIG:Ir,CONFLICTING_CODE:Qo}=z,ea=async(e,t)=>{let n=e?.trim(),r="",s=!1,o=/^{/.test(n)&&/}$/.test(n);if(!o&&/\.(\w+)(?:\?\S*)?$/.test(n)){const a=RegExp.$1;a==="json"&&t!=="toml"?o=!0:a==="toml"&&t!=="json"?s=!0:((i,l="")=>{let c=`(${Ir}): Invalid URL: ${i}`;throw l&&(c+=`
expected ${l} content`),new Error(c)})(n,t),r=n,n=(await Lr(r).then(Or)).trim()}return{json:o,toml:s||!o&&!!n,text:n,url:r}},ut=e=>new Error(`(${Qo}): ${e}`),Nr=(e,t=location.href)=>new URL(e,t).href,un=(e,t,{message:n})=>{let r=`(${Ir}): Invalid ${e}`;return t&&(r+=` @ ${t}`),new SyntaxError(`${r}
${n}`)},Nt=new Map;for(const[e]of Ge){let t,n,r,s,o,a,i,l=pe(`${e}-config`),c=pe([`script[type="${e}"][config]:not([worker])`,`${e}-script[config]:not([worker])`].join(","));if(l.length>1?r=ut(`Too many ${e}-config`):l.length&&c.length?r=ut(`Ambiguous ${e}-config VS config attribute`):l.length?([i]=l,o=i.getAttribute("src")||i.textContent,a=i.getAttribute("type")):c.length&&([i,...c]=c,o=i.getAttribute("config"),c.some(u=>u.getAttribute("config")!==o)&&(r=ut("Unable to use different configs on main"))),!r&&o)try{const{json:u,toml:f,text:m,url:d}=await ea(o,a);if(d&&(s=Nr(d)),o=m,u||a==="json")try{n=JSON.parse(m)}catch(_){r=un("JSON",d,_)}else if(f||a==="toml")try{const{parse:_}=await M(()=>import("./toml-Blg7Izee-CVjRshTZ.js"),[],import.meta.url);n=_(m)}catch(_){r=un("TOML",d,_)}}catch(u){r=u}t=async()=>{const u=[];for(const[f,m]of Object.entries(Yo))r?f==="error"&&m().then(({notify:d})=>d(r.message)):n?.plugins?.includes(`!${f}`)?f==="error"&&u.push(m().then(({notOnDOM:d})=>d())):u.push(m().then(({default:d})=>d));return await Promise.all(u)},Number.isSafeInteger(n?.experimental_ffi_timeout)&&(globalThis.reflected_ffi_timeout=n?.experimental_ffi_timeout),Nt.set(e,{config:n,configURL:s,plugins:t,error:r})}const pn=e=>{e.preventDefault(),e.stopImmediatePropagation()},Hr="@pyscript.fs",jt="storage permissions not granted",he=new We(Hr),Wr=async e=>{if(!("showDirectoryPicker"in globalThis))return Promise.reject(new Error("showDirectoryPicker is not supported"));const{promise:t,resolve:n,reject:r}=X(),s={id:"pyscript",mode:"readwrite",...e};e.hint&&(s.startIn=e.hint);const o=async()=>{try{const a=await showDirectoryPicker(s);if(await a.requestPermission(s)==="granted")return n(a),!0}catch({message:a}){console.warn(a)}return!1};if(navigator.userActivation?.isActive)await o()||r(new Error(jt));else{const a=q(document.createElement("dialog"),{className:"pyscript-fs",innerHTML:["<strong>ℹ️ Persistent FileSystem</strong><hr>","<p><small>PyScript would like to access a local folder.</small></p>","<div><button title='ok'>✅ Authorize</button>","<button title='cancel'>❌</button></div>"].join("")}),[i,l]=pe("button",a);i.addEventListener("click",async c=>{pn(c),await o()&&a.close()}),l.addEventListener("click",async c=>{pn(c),r(new Error(jt)),a.close()}),document.body.appendChild(a).showModal()}return t};var ta=Object.freeze({__proto__:null,ERROR:jt,NAMESPACE:Hr,getFileSystemDirectoryHandle:Wr,idb:he}),Ur={is_pyterminal:()=>!1,sleep:e=>new Promise(t=>setTimeout(t,1e3*e)),storeFSHandler:async(e,t={})=>!!await he.has(e)||Wr(t).then(async n=>(await he.set(e,n),!0),()=>!1),async deleteFSHandler(e){const t=await he.has(e);return t&&await he.delete(e),t}};const na=e=>{te(document,"currentScript",{configurable:!0,get:()=>e})},ra=()=>{delete document.currentScript};var ke=async(e,t,n,r)=>{const s=r.endsWith("Async");(r.startsWith("onBefore")?na:ra)(n);for(const o of e(r))s?await o(t,n):o(t,n)};const sa=()=>!0,oa=e=>{throw new TypeError(e)},aa=(e,t)=>{const n=[];if(e)for(const r of e.split(/\s*\|\s*/))r==="object"?n.push(s=>s!==null&&typeof s===r):r==="null"?n.push(s=>s===null):n.push(s=>typeof s===r);if(t)for(const r of[].concat(t))n.push(s=>s instanceof r);switch(n.length){case 0:return sa;case 1:return n[0];default:return r=>n.some(s=>s(r))}},ia=(e,t,n,r=oa)=>s=>{const o=[`Invalid ${typeof s} ${n}: expected `];e&&(o.push(e),t&&o.push(" or ")),t&&(o.push("an instanceof "),o.push([].concat(t).map(({name:a})=>a).join(" | "))),r(o.join(""),s)},Jr=(e=>t=>{const[n,r]=((s,o="value")=>{const a=s?.typeof,i=s?.instanceof;return[aa(a,i),ia(a,i,o,s?.onerror)]})(t);return class extends e{add(s){return n(s)?super.add(s):r(s)}}})(Set);function fn(e=this){return String(e).replace(/^(async\s*)?(\bfunction\b)?(.*?)\(/,(t,n,r,s)=>s&&!r?`${n||""}function ${s}(`:t)}const{entries:la}=Object,we=["import os as _os","from pathlib import Path as _Path","_path = None"],ie=new class extends Array{#e=!1;#t;#r;constructor(e,...t){super(),this.#r=e,this.#t=t}push(...e){return this.#e&&super.push(...e),this.#r.push(...e)}path(e){for(const t of this.#t)if(this.#e=e.startsWith(t))break}}(we,"-"),qr=(e,t)=>{for(const[n,r]of la(t))if(ie.path(`${e}/${n}`),ie.push(`_path = _Path("${e}/${n}")`),typeof r=="string"){const s=JSON.stringify(r);ie.push(`_path.write_text(${s},encoding="utf-8")`)}else ie.push(`if not _os.path.exists("${e}/${n}"):`),ie.push("    _path.mkdir(parents=True, exist_ok=True)"),qr(`${e}/${n}`,r)};qr(".",{pyscript:{"__init__.py":`from polyscript import lazy_py_modules as py_import
from pyscript.magic_js import RUNNING_IN_WORKER,PyWorker,config,current_target,document,js_import,js_modules,sync,window
from pyscript.display import HTML,display
from pyscript.fetch import fetch
from pyscript.storage import Storage,storage
from pyscript.websocket import WebSocket
from pyscript.events import when,Event
if not RUNNING_IN_WORKER:from pyscript.workers import create_named_worker,workers`,"display.py":`_K='_repr_mimebundle_'
_J='image/svg+xml'
_I='application/json'
_H='__repr__'
_G='savefig'
_F='text/html'
_E='image/jpeg'
_D='application/javascript'
_C='utf-8'
_B='text/plain'
_A='image/png'
import base64,html,io,re
from pyscript.magic_js import current_target,document,window
from pyscript.ffi import is_none
_MIME_METHODS={_G:_A,'_repr_javascript_':_D,'_repr_json_':_I,'_repr_latex':'text/latex','_repr_png_':_A,'_repr_jpeg_':_E,'_repr_pdf_':'application/pdf','_repr_svg_':_J,'_repr_markdown_':'text/markdown','_repr_html_':_F,_H:_B}
def _render_image(mime,value,meta):
	A=value
	if isinstance(A,bytes):A=base64.b64encode(A).decode(_C)
	B=re.compile('^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$')
	if len(A)>0 and not B.match(A):A=base64.b64encode(A.encode(_C)).decode(_C)
	C=f"data:{mime};charset=utf-8;base64,{A}";D=' '.join(['{k}="{v}"'for(A,B)in meta.items()]);return f'<img src="{C}" {D}></img>'
def _identity(value,meta):return value
_MIME_RENDERERS={_B:html.escape,_F:_identity,_A:lambda value,meta:_render_image(_A,value,meta),_E:lambda value,meta:_render_image(_E,value,meta),_J:_identity,_I:_identity,_D:lambda value,meta:f"<script>{value}<\\\\/script>"}
class HTML:
	def __init__(A,html):A._html=html
	def _repr_html_(A):return A._html
def _eval_formatter(obj,print_method):
	B=obj;A=print_method
	if A==_H:return repr(B)
	if hasattr(B,A):
		if A==_G:C=io.BytesIO();B.savefig(C,format='png');C.seek(0);return base64.b64encode(C.read()).decode(_C)
		return getattr(B,A)()
	if A==_K:return{},{}
def _format_mime(obj):
	C=obj
	if isinstance(C,str):return html.escape(C),_B
	D=_eval_formatter(C,_K)
	if isinstance(D,tuple):E,I=D
	else:E=D
	A,F=None,[]
	for(H,B)in _MIME_METHODS.items():
		if B in E:A=E[B]
		else:A=_eval_formatter(C,H)
		if is_none(A):continue
		if B not in _MIME_RENDERERS:F.append(B);continue
		break
	if is_none(A):
		if F:window.console.warn(f"Rendered object requested unavailable MIME renderers: {F}")
		A=repr(A);B=_B
	elif isinstance(A,tuple):A,G=A
	else:G={}
	return _MIME_RENDERERS[B](A,G),B
def _write(element,value,append=False):
	B=element;C,D=_format_mime(value)
	if C=='\\\\n':return
	if append:A=document.createElement('div');B.append(A)
	else:
		A=B.lastElementChild
		if is_none(A):A=B
	if D in(_D,_F):E=document.createRange().createContextualFragment(C);A.append(E)
	else:A.innerHTML=C
def display(*E,target=None,append=True):
	D=append;A=target
	if is_none(A):A=current_target()
	elif not isinstance(A,str):C=f"target must be str or None, not {A.__class__.__name__}";raise TypeError(C)
	elif A=='':C='Cannot have an empty target';raise ValueError(C)
	elif A.startswith('#'):A=A[1:]
	B=document.getElementById(A)
	if is_none(B):C=f"Invalid selector with id={A}. Cannot be found in the page.";raise ValueError(C)
	if B.tagName=='SCRIPT'and hasattr(B,'target'):B=B.target
	for F in E:
		if not D:B.replaceChildren()
		_write(B,F,append=D)`,"events.py":`import asyncio,inspect,sys
from functools import wraps
from pyscript.magic_js import document
from pyscript.ffi import create_proxy
from pyscript.util import is_awaitable
from pyscript import config
class Event:
	def __init__(A):A._listeners=[]
	def trigger(C,result):
		B=result
		for A in C._listeners:
			if is_awaitable(A):asyncio.create_task(A(B))
			else:A(B)
	def add_listener(B,listener):
		A=listener
		if is_awaitable(A)or callable(A):
			if A not in B._listeners:B._listeners.append(A)
		else:C='Listener must be callable or awaitable.';raise ValueError(C)
	def remove_listener(A,*B):
		if B:
			for C in B:A._listeners.remove(C)
		else:A._listeners=[]
def when(target,*B,**D):
	G='handler';C=target;E=None
	if B and(callable(B[0])or is_awaitable(B[0])):E=B[0]
	elif callable(D.get(G))or is_awaitable(D.get(G)):E=D.pop(G)
	if isinstance(C,str):
		A=B[0]if B else D.pop('selector')
		if not A:I='No selector provided.';raise ValueError(I)
		from pyscript.web import Element as J,ElementCollection as K
		if isinstance(A,str):F=document.querySelectorAll(A)
		elif isinstance(A,J):F=[A._dom_element]
		elif isinstance(A,K):F=[A._dom_element for A in A]
		else:F=A if isinstance(A,list)else[A]
	def H(func):
		E='positional arguments';D='takes';A=func
		if config['type']=='mpy':
			if is_awaitable(A):
				async def B(*C,**F):
					try:return await A(*C,**F)
					except TypeError as B:
						if D in str(B)and E in str(B):return await A()
						raise
			else:
				def B(*C,**F):
					try:return A(*C,**F)
					except TypeError as B:
						if D in str(B)and E in str(B):return A()
						raise
		else:
			G=inspect.signature(A)
			if G.parameters:
				if is_awaitable(A):
					async def B(event):return await A(event)
				else:B=A
			elif is_awaitable(A):
				async def B(*B,**C):return await A()
			else:
				def B(*B,**C):return A()
		B=wraps(A)(B)
		if isinstance(C,Event):C.add_listener(B)
		elif isinstance(C,list)and all(isinstance(A,Event)for A in C):
			for H in C:H.add_listener(B)
		else:
			for I in F:I.addEventListener(C,create_proxy(B))
		return B
	return H(E)if E else H`,"fetch.py":`import json,js
from pyscript.util import as_bytearray
class _Response:
	def __init__(A,response):A._response=response
	def __getattr__(A,attr):return getattr(A._response,attr)
	async def arrayBuffer(B):
		A=await B._response.arrayBuffer()
		if hasattr(A,'to_py'):return A.to_py()
		return memoryview(as_bytearray(A))
	async def blob(A):return await A._response.blob()
	async def bytearray(A):B=await A._response.arrayBuffer();return as_bytearray(B)
	async def json(A):return json.loads(await A.text())
	async def text(A):return await A._response.text()
class _DirectResponse:
	@staticmethod
	def setup(promise,response):A=promise;A._response=_Response(response);return A._response
	def __init__(B,promise):A=promise;B._promise=A;A._response=None;A.arrayBuffer=B.arrayBuffer;A.blob=B.blob;A.bytearray=B.bytearray;A.json=B.json;A.text=B.text
	async def _response(A):
		if not A._promise._response:await A._promise
		return A._promise._response
	async def arrayBuffer(A):B=await A._response();return await B.arrayBuffer()
	async def blob(A):B=await A._response();return await B.blob()
	async def bytearray(A):B=await A._response();return await B.bytearray()
	async def json(A):B=await A._response();return await B.json()
	async def text(A):B=await A._response();return await B.text()
def fetch(url,**B):C=js.JSON.parse(json.dumps(B));D=lambda response,*B:_DirectResponse.setup(A,response);A=js.fetch(url,C).then(D);_DirectResponse(A);return A`,"ffi.py":`try:
	import js;from pyodide.ffi import create_proxy as _cp,to_js as _py_tjs,jsnull;from_entries=js.Object.fromEntries;is_none=lambda value:value is None or value is jsnull
	def _tjs(value,**A):
		B='dict_converter'
		if not hasattr(A,B):A[B]=from_entries
		return _py_tjs(value,**A)
except:from jsffi import create_proxy as _cp;from jsffi import to_js as _tjs;import js;jsnull=js.Object.getPrototypeOf(js.Object.prototype);is_none=lambda value:value is None or value is jsnull
create_proxy=_cp
to_js=_tjs
try:
	from polyscript import ffi as _ffi;direct=_ffi.direct;gather=_ffi.gather;query=_ffi.query
	def assign(source,*B):
		A=source
		for C in B:_ffi.assign(A,to_js(C))
		return A
except:
	import js;_assign=js.Object.assign;direct=lambda source:source
	def assign(source,*B):
		A=source
		for C in B:_assign(A,to_js(C))
		return A`,"flatted.py":`import json as _json
class _Known:
	def __init__(A):A.key=[];A.value=[]
class _String:
	def __init__(A,value):A.value=value
def _array_keys(value):
	A=[];B=0
	for C in value:A.append(B);B+=1
	return A
def _object_keys(value):
	A=[]
	for B in value:A.append(B)
	return A
def _is_array(value):return isinstance(value,(list,tuple))
def _is_object(value):return isinstance(value,dict)
def _is_string(value):return isinstance(value,str)
def _index(known,input,value):B=value;A=known;input.append(B);C=str(len(input)-1);A.key.append(B);A.value.append(C);return C
def _loop(keys,input,known,output):
	A=output
	for B in keys:
		C=A[B]
		if isinstance(C,_String):_ref(B,input[int(C.value)],input,known,A)
	return A
def _ref(key,value,input,known,output):
	B=known;A=value
	if _is_array(A)and A not in B:B.append(A);A=_loop(_array_keys(A),input,B,A)
	elif _is_object(A)and A not in B:B.append(A);A=_loop(_object_keys(A),input,B,A)
	output[key]=A
def _relate(known,input,value):
	B=known;A=value
	if _is_string(A)or _is_array(A)or _is_object(A):
		try:return B.value[B.key.index(A)]
		except:return _index(B,input,A)
	return A
def _transform(known,input,value):
	B=known;A=value
	if _is_array(A):
		C=[]
		for F in A:C.append(_relate(B,input,F))
		return C
	if _is_object(A):
		D={}
		for E in A:D[E]=_relate(B,input,A[E])
		return D
	return A
def _wrap(value):
	A=value
	if _is_string(A):return _String(A)
	if _is_array(A):
		B=0
		for D in A:A[B]=_wrap(D);B+=1
	elif _is_object(A):
		for C in A:A[C]=_wrap(A[C])
	return A
def parse(value,*C,**D):
	A=value;E=_json.loads(A,*C,**D);B=[]
	for A in E:B.append(_wrap(A))
	input=[]
	for A in B:
		if isinstance(A,_String):input.append(A.value)
		else:input.append(A)
	A=input[0]
	if _is_array(A):return _loop(_array_keys(A),input,[A],A)
	if _is_object(A):return _loop(_object_keys(A),input,[A],A)
	return A
def stringify(value,*D,**E):
	B=_Known();input=[];C=[];A=int(_index(B,input,value))
	while A<len(input):C.append(_transform(B,input,input[A]));A+=1
	return _json.dumps(C,*D,**E)`,"fs.py":`_A='pyscript'
mounted={}
async def mount(path,mode='readwrite',root='',id=_A):
	E=path;import js;from _pyscript import fs as A,interpreter as I;from pyscript.ffi import to_js as H;from pyscript.magic_js import RUNNING_IN_WORKER as J,sync;js.console.warn('experimental pyscript.fs ⚠️');B=None;C=f"{E}@{id}";F={'id':id,'mode':mode}
	if root!='':F['startIn']=root
	if J:
		G=sync.storeFSHandler(C,H(F))
		if isinstance(G,bool):D=G
		else:D=await G
		if D:from polyscript import IDBMap as K;L=K.new(A.NAMESPACE);B=await L.get(C)
		else:raise RuntimeError(A.ERROR)
	else:
		D=await A.idb.has(C)
		if D:B=await A.idb.get(C)
		else:B=await A.getFileSystemDirectoryHandle(H(F));await A.idb.set(C,B)
	mounted[E]=await I.mountNativeFS(E,B)
async def revoke(path,id=_A):
	from _pyscript import fs,interpreter as C;from pyscript.magic_js import RUNNING_IN_WORKER as D,sync;B=f"{path}@{id}"
	if D:A=sync.deleteFSHandler(B)
	else:
		A=await fs.idb.has(B)
		if A:A=await fs.idb.delete(B)
	if A:C._module.FS.unmount(path)
	return A
async def sync(path):await mounted[path].syncfs()
async def unmount(path):from _pyscript import interpreter as A;await sync(path);A._module.FS.unmount(path)`,"magic_js.py":`import json,sys,js as globalThis
from polyscript import config as _config,js_modules
from pyscript.util import NotSupported
RUNNING_IN_WORKER=not hasattr(globalThis,'document')
config=json.loads(globalThis.JSON.stringify(_config))
if'MicroPython'in sys.version:config['type']='mpy'
else:config['type']='py'
class JSModule:
	def __init__(A,name):A.name=name
	def __getattr__(B,field):
		A=field
		if not A.startswith('_'):return getattr(getattr(js_modules,B.name),A)
for name in globalThis.Reflect.ownKeys(js_modules):sys.modules[f"pyscript.js_modules.{name}"]=JSModule(name)
sys.modules['pyscript.js_modules']=js_modules
if RUNNING_IN_WORKER:
	import polyscript;PyWorker=NotSupported('pyscript.PyWorker','pyscript.PyWorker works only when running in the main thread')
	try:import js;window=polyscript.xworker.window;document=window.document;js.document=document;js_import=window.Function('return (...urls) => Promise.all(urls.map((url) => import(url)))')()
	except:message='Unable to use \`window\` or \`document\` -> https://docs.pyscript.net/latest/faq/#sharedarraybuffer';globalThis.console.warn(message);window=NotSupported('pyscript.window',message);document=NotSupported('pyscript.document',message);js_import=None
	sync=polyscript.xworker.sync
	def current_target():return polyscript.target
else:
	import _pyscript;from _pyscript import PyWorker as _PyWorker,js_import;from pyscript.ffi import to_js
	def PyWorker(url,**A):return _PyWorker(url,to_js(A))
	window=globalThis;document=globalThis.document;sync=NotSupported('pyscript.sync','pyscript.sync works only when running in a worker')
	def current_target():return _pyscript.target`,"media.py":`from pyscript import window
from pyscript.ffi import to_js
class Device:
	def __init__(A,device):A._dom_element=device
	@property
	def id(self):return self._dom_element.deviceId
	@property
	def group(self):return self._dom_element.groupId
	@property
	def kind(self):return self._dom_element.kind
	@property
	def label(self):return self._dom_element.label
	def __getitem__(A,key):return getattr(A,key)
	@classmethod
	async def load(E,audio=False,video=True):
		C='video';B=video;A={};A['audio']=audio
		if isinstance(B,bool):A[C]=B
		else:
			A[C]={}
			for D in B:A[C][D]=B[D]
		return await window.navigator.mediaDevices.getUserMedia(to_js(A))
	async def get_stream(A):B=A.kind.replace('input','').replace('output','');C={B:{'deviceId':{'exact':A.id}}};return await A.load(**C)
async def list_devices():return[Device(A)for A in await window.navigator.mediaDevices.enumerateDevices()]`,"storage.py":`_C='memoryview'
_B='bytearray'
_A='generic'
from polyscript import storage as _storage
from pyscript.flatted import parse as _parse
from pyscript.flatted import stringify as _stringify
from pyscript.ffi import is_none
def _to_idb(value):
	A=value
	if is_none(A):return _stringify(['null',0])
	if isinstance(A,(bool,float,int,str,list,dict,tuple)):return _stringify([_A,A])
	if isinstance(A,bytearray):return _stringify([_B,list(A)])
	if isinstance(A,memoryview):return _stringify([_C,list(A)])
	B=f"Unexpected value: {A}";raise TypeError(B)
def _from_idb(value):
	C=value;A,B=_parse(C)
	if A=='null':return
	if A==_A:return B
	if A==_B:return bytearray(B)
	if A==_C:return memoryview(bytearray(B))
	return C
class Storage(dict):
	def __init__(B,store):A=store;super().__init__({A:_from_idb(B)for(A,B)in A.entries()});B.__store__=A
	def __delitem__(A,attr):A.__store__.delete(attr);super().__delitem__(attr)
	def __setitem__(B,attr,value):A=value;B.__store__.set(attr,_to_idb(A));super().__setitem__(attr,A)
	def clear(A):A.__store__.clear();super().clear()
	async def sync(A):await A.__store__.sync()
async def storage(name='',storage_class=Storage):
	if not name:A='The storage name must be defined';raise ValueError(A)
	return storage_class(await _storage(f"@pyscript/{name}"))`,"util.py":`import js,sys,inspect
def as_bytearray(buffer):
	A=js.Uint8Array.new(buffer);B=A.length;C=bytearray(B)
	for D in range(B):C[D]=A[D]
	return C
class NotSupported:
	def __init__(A,name,error):object.__setattr__(A,'name',name);object.__setattr__(A,'error',error)
	def __repr__(A):return f"<NotSupported {A.name} [{A.error}]>"
	def __getattr__(A,attr):raise AttributeError(A.error)
	def __setattr__(A,attr,value):raise AttributeError(A.error)
	def __call__(A,*B):raise TypeError(A.error)
def is_awaitable(obj):
	A=obj;from pyscript import config as B
	if B['type']=='mpy':
		if'<closure <generator>'in repr(A):return True
		return inspect.isgeneratorfunction(A)
	return inspect.iscoroutinefunction(A)`,"web.py":`_C='htmlFor'
_B='on_'
_A=None
from pyscript import document,when,Event
from pyscript.ffi import create_proxy,is_none
def wrap_dom_element(dom_element):return Element.wrap_dom_element(dom_element)
class Element:
	element_classes_by_tag_name={}
	@classmethod
	def get_tag_name(A):return A.__name__.replace('_','')
	@classmethod
	def register_element_classes(B,element_classes):
		for A in element_classes:C=A.get_tag_name();B.element_classes_by_tag_name[C]=A
	@classmethod
	def unregister_element_classes(A,element_classes):
		for B in element_classes:C=B.get_tag_name();A.element_classes_by_tag_name.pop(C,_A)
	@classmethod
	def wrap_dom_element(A,dom_element):B=dom_element;C=A.element_classes_by_tag_name.get(B.tagName.lower(),A);return C(dom_element=B)
	def __init__(A,dom_element=_A,classes=_A,style=_A,**F):
		C=dom_element;A._dom_element=document.createElement(type(A).get_tag_name())if is_none(C)else C;A._on_events={};D={}
		for(B,E)in F.items():
			if B.startswith(_B):G=A.get_event(B);G.add_listener(E)
			else:D[B]=E
		A._classes=Classes(A);A._style=Style(A);A.update(classes=classes,style=style,**D)
	def __eq__(A,obj):return isinstance(obj,Element)and obj._dom_element==A._dom_element
	def __getitem__(B,key):
		A=key
		if isinstance(A,(int,slice)):return B.children[A]
		return B.find(A)
	def __getattr__(B,name):
		A=name
		if A.startswith(_B):return B.get_event(A)
		if A.endswith('_'):A=A[:-1]
		if A=='for':A=_C
		return getattr(B._dom_element,A)
	def __setattr__(C,name,value):
		B=value;A=name
		if A.startswith('_'):super().__setattr__(A,B)
		else:
			if A.endswith('_'):A=A[:-1]
			if A=='for':A=_C
			if A.startswith(_B):C._on_events[A]=B
			setattr(C._dom_element,A,B)
	def get_event(A,name):
		B=name
		if not B.startswith(_B):C="Event names must start with 'on_'.";raise ValueError(C)
		D=B[3:]
		if not hasattr(A._dom_element,D):C=f"Element has no '{D}' event.";raise ValueError(C)
		if B in A._on_events:return A._on_events[B]
		E=Event();A._on_events[B]=E;A._dom_element.addEventListener(D,create_proxy(E.trigger));return E
	@property
	def children(self):return ElementCollection.wrap_dom_elements(self._dom_element.children)
	@property
	def classes(self):return self._classes
	@property
	def parent(self):
		if is_none(self._dom_element.parentElement):return
		return Element.wrap_dom_element(self._dom_element.parentElement)
	@property
	def style(self):return self._style
	def append(B,*C):
		for A in C:
			if isinstance(A,Element):B._dom_element.appendChild(A._dom_element)
			elif isinstance(A,ElementCollection):
				for D in A:B._dom_element.appendChild(D._dom_element)
			elif isinstance(A,(list,tuple)):
				for E in A:B.append(E)
			else:
				try:A.tagName;B._dom_element.appendChild(A)
				except AttributeError:
					try:
						A.length
						for F in A:B._dom_element.appendChild(F)
					except AttributeError:G=f'Element "{A}" is a proxy object, "but not a valid element or a NodeList.';raise TypeError(G)
	def clone(B,clone_id=_A):A=Element.wrap_dom_element(B._dom_element.cloneNode(True));A.id=clone_id;return A
	def find(A,selector):return ElementCollection.wrap_dom_elements(A._dom_element.querySelectorAll(selector))
	def show_me(A):A._dom_element.scrollIntoView()
	def update(A,classes=_A,style=_A,**D):
		C=style;B=classes
		if B:A.classes.add(B)
		if C:A.style.set(**C)
		for(E,F)in D.items():setattr(A,E,F)
class Classes:
	def __init__(A,element):A._element=element;A._class_list=A._element._dom_element.classList
	def __contains__(A,item):return item in A._class_list
	def __eq__(C,other):
		A=other
		if isinstance(A,Classes):B=list(A._class_list)
		else:
			try:B=iter(A)
			except TypeError:return False
		return set(C._class_list)==set(B)
	def __iter__(A):return iter(A._class_list)
	def __len__(A):return A._class_list.length
	def __repr__(A):return f"Classes({", ".join(A._class_list)})"
	def __str__(A):return' '.join(A._class_list)
	def add(B,*C):
		for A in C:
			if isinstance(A,list):
				for D in A:B.add(D)
			else:B._class_list.add(A)
	def contains(A,class_name):return class_name in A
	def remove(B,*C):
		for A in C:
			if isinstance(A,list):
				for D in A:B.remove(D)
			else:B._class_list.remove(A)
	def replace(A,old_class,new_class):A.remove(old_class);A.add(new_class)
	def toggle(A,*C):
		for B in C:
			if B in A:A.remove(B)
			else:A.add(B)
class HasOptions:
	@property
	def options(self):
		A=self
		if not hasattr(A,'_options'):A._options=Options(A)
		return A._options
class Options:
	def __init__(A,element):A._element=element
	def __getitem__(A,key):return A.options[key]
	def __iter__(A):yield from A.options
	def __len__(A):return len(A.options)
	def __repr__(A):return f"{A.__class__.__name__} (length: {len(A)}) {A.options}"
	@property
	def options(self):return[Element.wrap_dom_element(A)for A in self._element._dom_element.options]
	@property
	def selected(self):return self.options[self._element._dom_element.selectedIndex]
	def add(D,value=_A,html=_A,text=_A,before=_A,**B):
		C=value;A=before
		if C is not _A:B['value']=C
		if html is not _A:B['innerHTML']=html
		if text is not _A:B['text']=text
		E=option(**B)
		if A and isinstance(A,Element):A=A._dom_element
		D._element._dom_element.add(E._dom_element,A)
	def clear(A):
		while len(A)>0:A.remove(0)
	def remove(A,index):A._element._dom_element.remove(index)
class Style:
	def __init__(A,element):A._element=element;A._style=A._element._dom_element.style
	def __getitem__(A,key):return A._style.getPropertyValue(key)
	def __setitem__(A,key,value):A._style.setProperty(key,value)
	def remove(A,key):A._style.removeProperty(key)
	def set(A,**B):
		for(C,D)in B.items():A._element._dom_element.style.setProperty(C,D)
	@property
	def visible(self):return self._element._dom_element.style.visibility
	@visible.setter
	def visible(self,value):self._element._dom_element.style.visibility=value
class ContainerElement(Element):
	def __init__(B,*C,children=_A,dom_element=_A,style=_A,classes=_A,**D):
		super().__init__(dom_element=dom_element,style=style,classes=classes,**D)
		for A in list(C)+(children or[]):
			if isinstance(A,(Element,ElementCollection)):B.append(A)
			else:B._dom_element.insertAdjacentHTML('beforeend',A)
	def __iter__(A):yield from A.children
class ClassesCollection:
	def __init__(A,collection):A._collection=collection
	def __contains__(A,class_name):
		for B in A._collection:
			if class_name in B.classes:return True
		return False
	def __eq__(B,other):A=other;return isinstance(A,ClassesCollection)and B._collection==A._collection
	def __iter__(A):yield from A._all_class_names()
	def __len__(A):return len(A._all_class_names())
	def __repr__(A):return f"ClassesCollection({A._collection!r})"
	def __str__(A):return' '.join(A._all_class_names())
	def add(A,*B):
		for C in A._collection:C.classes.add(*B)
	def contains(A,class_name):return class_name in A
	def remove(A,*B):
		for C in A._collection:C.classes.remove(*B)
	def replace(A,old_class,new_class):
		for B in A._collection:B.classes.replace(old_class,new_class)
	def toggle(A,*B):
		for C in A._collection:C.classes.toggle(*B)
	def _all_class_names(B):
		A=set()
		for C in B._collection:
			for D in C.classes:A.add(D)
		return A
class StyleCollection:
	def __init__(A,collection):A._collection=collection
	def __getitem__(A,key):return[A.style[key]for A in A._collection._elements]
	def __setitem__(A,key,value):
		for B in A._collection._elements:B.style[key]=value
	def __repr__(A):return f"StyleCollection({A._collection!r})"
	def remove(A,key):
		for B in A._collection._elements:B.style.remove(key)
class ElementCollection:
	@classmethod
	def wrap_dom_elements(A,dom_elements):return A([Element.wrap_dom_element(A)for A in dom_elements])
	def __init__(A,elements):A._elements=elements;A._classes=ClassesCollection(A);A._style=StyleCollection(A)
	def __eq__(A,obj):return isinstance(obj,ElementCollection)and obj._elements==A._elements
	def __getitem__(B,key):
		A=key
		if isinstance(A,int):return B._elements[A]
		if isinstance(A,slice):return ElementCollection(B._elements[A])
		return B.find(A)
	def __iter__(A):yield from A._elements
	def __len__(A):return len(A._elements)
	def __repr__(A):return f"{A.__class__.__name__} (length: {len(A._elements)}) {A._elements}"
	def __getattr__(A,name):return[getattr(A,name)for A in A._elements]
	def __setattr__(C,name,value):
		B=value;A=name
		if A.startswith('_'):super().__setattr__(A,B)
		else:
			for D in C._elements:setattr(D,A,B)
	@property
	def classes(self):return self._classes
	@property
	def elements(self):return self._elements
	@property
	def style(self):return self._style
	def find(B,selector):
		A=[]
		for C in B._elements:A.extend(C.find(selector))
		return ElementCollection(A)
class a(ContainerElement):0
class abbr(ContainerElement):0
class address(ContainerElement):0
class area(Element):0
class article(ContainerElement):0
class aside(ContainerElement):0
class audio(ContainerElement):0
class b(ContainerElement):0
class base(Element):0
class blockquote(ContainerElement):0
class body(ContainerElement):0
class br(Element):0
class button(ContainerElement):0
class canvas(ContainerElement):
	def download(A,filename='snapped.png'):B=a(download=filename,href=A._dom_element.toDataURL());A.append(B);B._dom_element.click()
	def draw(E,what,width=_A,height=_A):
		C=height;B=width;A=what
		if isinstance(A,Element):A=A._dom_element
		D=E._dom_element.getContext('2d')
		if B or C:D.drawImage(A,0,0,B,C)
		else:D.drawImage(A,0,0)
class caption(ContainerElement):0
class cite(ContainerElement):0
class code(ContainerElement):0
class col(Element):0
class colgroup(ContainerElement):0
class data(ContainerElement):0
class datalist(ContainerElement,HasOptions):0
class dd(ContainerElement):0
class del_(ContainerElement):0
class details(ContainerElement):0
class dialog(ContainerElement):0
class div(ContainerElement):0
class dl(ContainerElement):0
class dt(ContainerElement):0
class em(ContainerElement):0
class embed(Element):0
class fieldset(ContainerElement):0
class figcaption(ContainerElement):0
class figure(ContainerElement):0
class footer(ContainerElement):0
class form(ContainerElement):0
class h1(ContainerElement):0
class h2(ContainerElement):0
class h3(ContainerElement):0
class h4(ContainerElement):0
class h5(ContainerElement):0
class h6(ContainerElement):0
class head(ContainerElement):0
class header(ContainerElement):0
class hgroup(ContainerElement):0
class hr(Element):0
class html(ContainerElement):0
class i(ContainerElement):0
class iframe(ContainerElement):0
class img(Element):0
class input_(Element):0
class ins(ContainerElement):0
class kbd(ContainerElement):0
class label(ContainerElement):0
class legend(ContainerElement):0
class li(ContainerElement):0
class link(Element):0
class main(ContainerElement):0
class map_(ContainerElement):0
class mark(ContainerElement):0
class menu(ContainerElement):0
class meta(ContainerElement):0
class meter(ContainerElement):0
class nav(ContainerElement):0
class object_(ContainerElement):0
class ol(ContainerElement):0
class optgroup(ContainerElement,HasOptions):0
class option(ContainerElement):0
class output(ContainerElement):0
class p(ContainerElement):0
class param(ContainerElement):0
class picture(ContainerElement):0
class pre(ContainerElement):0
class progress(ContainerElement):0
class q(ContainerElement):0
class s(ContainerElement):0
class script(ContainerElement):0
class section(ContainerElement):0
class select(ContainerElement,HasOptions):0
class small(ContainerElement):0
class source(Element):0
class span(ContainerElement):0
class strong(ContainerElement):0
class style(ContainerElement):0
class sub(ContainerElement):0
class summary(ContainerElement):0
class sup(ContainerElement):0
class table(ContainerElement):0
class tbody(ContainerElement):0
class td(ContainerElement):0
class template(ContainerElement):0
class textarea(ContainerElement):0
class tfoot(ContainerElement):0
class th(ContainerElement):0
class thead(ContainerElement):0
class time(ContainerElement):0
class title(ContainerElement):0
class tr(ContainerElement):0
class track(Element):0
class u(ContainerElement):0
class ul(ContainerElement):0
class var(ContainerElement):0
class video(ContainerElement):
	def snap(E,to=_A,width=_A,height=_A):
		H='CANVAS';G='Element to snap to must be a canvas.';C=height;B=width;A=to;B=B if B is not _A else E.videoWidth;C=C if C is not _A else E.videoHeight
		if is_none(A):A=canvas(width=B,height=C)
		elif isinstance(A,Element):
			if A.tag!='canvas':D=G;raise TypeError(D)
		elif getattr(A,'tagName','')==H:A=canvas(dom_element=A)
		elif isinstance(A,str):
			F=document.querySelectorAll(A)
			if F.length==0:D='No element with selector {to} to snap to.';raise TypeError(D)
			if F[0].tagName!=H:D=G;raise TypeError(D)
			A=canvas(dom_element=F[0])
		A.draw(E,B,C);return A
class wbr(Element):0
ELEMENT_CLASSES=[a,abbr,address,area,article,aside,audio,b,base,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del_,details,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input_,ins,kbd,label,legend,li,link,main,map_,mark,menu,meta,meter,nav,object_,ol,optgroup,option,output,p,param,picture,pre,progress,q,s,script,section,select,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr]
Element.register_element_classes(ELEMENT_CLASSES)
class Page:
	def __init__(A):A.html=Element.wrap_dom_element(document.documentElement);A.body=Element.wrap_dom_element(document.body);A.head=Element.wrap_dom_element(document.head)
	def __getitem__(A,selector):return A.find(selector)
	@property
	def title(self):return document.title
	@title.setter
	def title(self,value):document.title=value
	def append(A,*B):A.body.append(*B)
	def find(A,selector):return ElementCollection.wrap_dom_elements(document.querySelectorAll(selector))
page=Page()`,"websocket.py":`import js
from pyscript.ffi import create_proxy
from pyscript.util import as_bytearray,is_awaitable
code='code'
protocols='protocols'
reason='reason'
methods=['onclose','onerror','onmessage','onopen']
def add_listener(socket,onevent,listener):
	A=listener;B=create_proxy(A)
	if is_awaitable(A):
		async def D(e):await B(EventMessage(e))
		C=D
	else:C=lambda e:B(EventMessage(e))
	setattr(socket,onevent,C)
class EventMessage:
	def __init__(A,event):A._event=event
	def __getattr__(B,attr):
		A=getattr(B._event,attr)
		if attr=='data'and not isinstance(A,str):
			if hasattr(A,'to_py'):return A.to_py()
			return memoryview(as_bytearray(A))
		return A
class WebSocket:
	CONNECTING=0;OPEN=1;CLOSING=2;CLOSED=3
	def __init__(E,**A):
		D=A['url']
		if protocols in A:B=js.WebSocket.new(D,A[protocols])
		else:B=js.WebSocket.new(D)
		B.binaryType='arraybuffer';object.__setattr__(E,'_ws',B)
		for C in methods:
			if C in A:add_listener(B,C,A[C])
	def __getattr__(A,attr):return getattr(A._ws,attr)
	def __setattr__(B,attr,value):
		C=value;A=attr
		if A in methods:add_listener(B._ws,A,C)
		else:setattr(B._ws,A,C)
	def close(B,**A):
		if code in A and reason in A:B._ws.close(A[code],A[reason])
		elif code in A:B._ws.close(A[code])
		else:B._ws.close()
	def send(B,data):
		A=data
		if isinstance(A,str):B._ws.send(A)
		else:
			C=js.Uint8Array.new(len(A))
			for(D,E)in enumerate(A):C[D]=E
			B._ws.send(C)`,"workers.py":`import js as _js
from polyscript import workers as _workers
_get=_js.Reflect.get
def _set(script,name,value=''):script.setAttribute(name,value)
class _ReadOnlyProxy:
	def __getitem__(A,name):return _get(_workers,name)
	def __getattr__(A,name):return _get(_workers,name)
workers=_ReadOnlyProxy()
async def create_named_worker(src='',name='',config=None,type='py'):
	C=name;B=config;from json import dumps
	if not src:D='Named workers require src';raise ValueError(D)
	if not C:D='Named workers require a name';raise ValueError(D)
	A=_js.document.createElement('script');A.type=type;A.src=src;_set(A,'worker');_set(A,'name',C)
	if B:_set(A,'config',isinstance(B,str)and B or dumps(B))
	_js.document.body.append(A);return await workers[C]`}}),we.push("import pyscript as _pyscript"),we.push(...["_Path","_path","_os","_pyscript"].map(e=>`del ${e}`)),we.push(`
`);const dn=we.join(`
`),ca=ie.join(`
`),ee=e=>Ht.main[e],Gr=e=>Ht.worker[e],je=(e,t,n,r)=>{e[n]=()=>{const s=r?[r]:[];return s.push(...t(n)),s.map(L).join(`
`)}},mn=(e,t)=>{const n=t==="mpy"?dn.replace(ca,""):dn,r={};return je(r,e,"codeBeforeRun",n),je(r,e,"codeBeforeRunAsync",n),je(r,e,"codeAfterRun"),je(r,e,"codeAfterRunAsync"),r},me=(e,t)=>{const n=[...Gr(t)];if(n.length){const r=fn(e[`_${t}`]||(t.endsWith("Async")?async(o,a,...i)=>{for(const l of i)await l(o,a)}:(o,a,...i)=>{for(const l of i)l(o,a)})),s=n.map(fn).join(", ");return Function(`return(w,x)=>(${r})(w,x,...[${s}])`)()}},N=Jr({typeof:"function"}),V=Jr({typeof:"string"}),ua=`
    import builtins
    def input(prompt=""):
        raise Exception("\\n           ".join([
            "input() doesn't work when PyScript runs in the main thread.",
            "Consider using the worker attribute: https://pyscript.github.io/docs/2023.11.2/user-guide/workers/"
        ]))

    builtins.input = input
    del builtins
    del input
`,Ht={main:{onWorker:new N,onReady:new N,onBeforeRun:new N,onBeforeRunAsync:new N,onAfterRun:new N,onAfterRunAsync:new N,codeBeforeRun:new V([ua]),codeBeforeRunAsync:new V,codeAfterRun:new V,codeAfterRunAsync:new V},worker:{onReady:new N,onBeforeRun:new N,onBeforeRunAsync:new N([({interpreter:e})=>{e.registerJsModule("_pyscript",{fs:{ERROR:"storage permissions not granted",NAMESPACE:"@pyscript.fs"},interpreter:e})}]),onAfterRun:new N,onAfterRunAsync:new N,codeBeforeRun:new V,codeBeforeRunAsync:new V,codeAfterRun:new V,codeAfterRunAsync:new V}};var pa={get core(){return M(()=>import("./codemirror-CcGcOibd-BVsXGh2A.js"),__vite__mapDeps([7,8,9,10,11,12]),import.meta.url)},get state(){return M(()=>import("./codemirror_state-BIAL8JKm-Be3YhqMm.js"),[],import.meta.url)},get python(){return M(()=>import("./codemirror_lang-python-DTyea3yJ-BZasxBoF.js"),__vite__mapDeps([13,10,9,8,12]),import.meta.url)},get language(){return M(()=>import("./codemirror_language-CGC3ORqm-mPRFkECd.js"),__vite__mapDeps([10,9,8]),import.meta.url).then(function(e){return e.x})},get view(){return M(()=>import("./codemirror_view-C6Wj-LSg-6ooZVm47.js"),__vite__mapDeps([8,9]),import.meta.url).then(function(e){return e.t})},get commands(){return M(()=>import("./codemirror_commands-7YlBSWsE-CXNltha8.js"),__vite__mapDeps([11,9,8,10]),import.meta.url)}},fa=Object.freeze({__proto__:null,default:pa});/*! (c) PyScript Development Team */const _n=({tagName:e})=>e==="SCRIPT",[da,ma]=[...Ge.entries()].map(([e,t])=>async function(n,r){await Nt.get(e).plugins;const s=Vo.call(new Ko(null,zr.get(e)),n,{...r,type:t});return q(s.sync,Ur),s.ready}),[{PyWorker:Ea,MPWorker:va,hooks:Ba,config:_a,whenDefined:Ca},ya]=yn("@pyscript/core",{PyWorker:da,MPWorker:ma,hooks:Ht,config:{},whenDefined:zo}),ha=e=>e?.interpreter&&Nr(e.interpreter),zr=new Map;for(const[e,t]of Ge){if(ya)break;const n=(d,_,y)=>{_?y.then(()=>le(d,e,"done")):le(d,e,"done")},{config:r,configURL:s,plugins:o,error:a}=Nt.get(e);let i=0;const l=(d=e)=>`${d}-${i++}`,c=async(d,_,y)=>{if(d.hasAttribute("src"))try{return await Lr(d.getAttribute("src")).then(Or)}catch(g){_.stderr(g)}if(y)return L(d.textContent);const p=L(hn(d.innerHTML));return console.warn(`Deprecated: use <script type="${e}"> for an always safe content parsing:
`,p),p};let u,f=!1;const m=({XWorker:d,interpreter:_,io:y})=>{f||(f=!0,_.registerJsModule("_pyscript",{PyWorker:function(...p){const g=d(...p);return g.onerror=({error:B})=>y.stderr(B),g},fs:ta,interpreter:_,js_import:(...p)=>Promise.all(p.map(g=>import(g))),get target(){return _n(u)?u.target.id:u.id}}))};a||o().then(()=>{const d=new Map,_={main:{...mn(ee,e),async onReady(y,p){m(y);for(const g of ee("onReady"))await g(y,p);if(d.has(p)){let{message:g}=d.get(p);d.delete(p);const B=g===jr;return g=`(${z.CONFLICTING_CODE}) ${g} for `,g+=p.cloneNode(B).outerHTML,void y.io.stderr(g)}if(_n(p)){const g=!Te(p),B=p.getAttribute("target"),k=B?It(p,B):document.createElement("script-py");if(!B){const{head:F,body:P}=document;F.contains(p)?P.append(k):p.after(k)}k.id||(k.id=l()),te(p,"target",{value:k}),le(p,e,"ready"),n(p,g,y["run"+(g?"Async":"")](await c(p,y.io,!0)))}else p._wrap.resolve(y);console.debug("[pyscript/main] PyScript Ready")},onWorker(y,p){q(p.sync,Ur);for(const g of ee("onWorker"))g(y,p)},onBeforeRun(y,p){u=p,ke(ee,y,p,"onBeforeRun")},onBeforeRunAsync:(y,p)=>(u=p,ke(ee,y,p,"onBeforeRunAsync")),onAfterRun(y,p){ke(ee,y,p,"onAfterRun")},onAfterRunAsync:(y,p)=>ke(ee,y,p,"onAfterRunAsync")},worker:{...mn(Gr,e),get onReady(){return me(this,"onReady")},get onBeforeRun(){return me(this,"onBeforeRun")},get onBeforeRunAsync(){return me(this,"onBeforeRunAsync")},get onAfterRun(){return me(this,"onAfterRun")},get onAfterRunAsync(){return me(this,"onAfterRunAsync")}}};zr.set(e,_),Go(e,{config:r,configURL:s,interpreter:t,hooks:_,env:`${e}-script`,version:ha(r),onerror(y,p){d.set(p,y)}}),customElements.define(`${e}-script`,class extends HTMLElement{constructor(){q(super(),{_wrap:X(),srcCode:"",executed:!1})}get id(){return super.id||(super.id=l())}set id(y){super.id=y}async connectedCallback(){if(!this.executed){this.executed=!0;const y=!Te(this),{io:p,run:g,runAsync:B}=await this._wrap.promise;this.srcCode=await c(this,p,!this.childElementCount),this.replaceChildren(),this.style.display="block",le(this,e,"ready"),n(this,y,(y?B:g)(this.srcCode))}}})}),_a[e]=structuredClone(r)}export{pa as $,Go as D,ea as K,Ba as L,Ko as M,Ge as N,Vo as P,ts as S,ha as U,Nr as X,wa as a,Cn as c,nr as j,q as k,W as m,pt as o,Or as q,X as t,L as v,dn as w,ua as x};
