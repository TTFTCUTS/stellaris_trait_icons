(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.hu(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.hv(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dm(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={d7:function d7(){},
aw:function(a){return new H.af("Field '"+a+"' has not been initialized.")},
dH:function(a){return new H.af("Local '"+a+"' has not been initialized.")},
en:function(a,b,c){return a},
d6:function(){return new P.aG("No element")},
af:function af(a){this.a=a},
cZ:function cZ(){},
ar:function ar(){},
N:function N(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ac:function ac(){},
ey:function(a){var t,s=H.ex(a)
if(s!=null)return s
t="minified:"+a
return t},
hh:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.L.b(a)},
k:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bX(a)
return t},
aD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cb:function(a){return H.f6(a)},
f6:function(a){var t,s,r
if(a instanceof P.h)return H.z(H.a9(a),null)
if(J.b4(a)===C.w||u.B.b(a)){t=C.j(a)
if(H.dN(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.dN(r))return r}}return H.z(H.a9(a),null)},
dN:function(a){var t=a!=="Object"&&a!==""
return t},
e:function(a,b){if(a==null)J.d1(a)
throw H.d(H.cM(a,b))},
cM:function(a,b){var t,s="index"
if(!H.eg(b))return new P.P(!0,b,s,null)
t=H.bU(J.d1(a))
if(b<0||b>=t)return P.d5(b,a,s,null,t)
return P.f8(b,s)},
h_:function(a){return new P.P(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.bs()
t=new Error()
t.dartException=a
s=H.hw
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
hw:function(){return J.bX(this.dartException)},
D:function(a){throw H.d(a)},
ew:function(a){throw H.d(P.aq(a))},
U:function(a){var t,s,r,q,p,o
a=H.hq(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.t([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cg(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
ch:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dS:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dL:function(a,b){return new H.br(a,b==null?null:b.method)},
d8:function(a,b){var t=b==null,s=t?null:b.method
return new H.bm(a,s,t?null:b.receiver)},
a3:function(a){if(a==null)return new H.ca(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.aa(a,a.dartException)
return H.fZ(a)},
aa:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fZ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aC(s,16)&8191)===10)switch(r){case 438:return H.aa(a,H.d8(H.k(t)+" (Error "+r+")",f))
case 445:case 5007:return H.aa(a,H.dL(H.k(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.eB()
p=$.eC()
o=$.eD()
n=$.eE()
m=$.eH()
l=$.eI()
k=$.eG()
$.eF()
j=$.eK()
i=$.eJ()
h=q.u(t)
if(h!=null)return H.aa(a,H.d8(H.aX(t),h))
else{h=p.u(t)
if(h!=null){h.method="call"
return H.aa(a,H.d8(H.aX(t),h))}else{h=o.u(t)
if(h==null){h=n.u(t)
if(h==null){h=m.u(t)
if(h==null){h=l.u(t)
if(h==null){h=k.u(t)
if(h==null){h=n.u(t)
if(h==null){h=j.u(t)
if(h==null){h=i.u(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.aa(a,H.dL(H.aX(t),h))}}return H.aa(a,new H.bC(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.aF()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.aa(a,new P.P(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.aF()
return a},
V:function(a){var t
if(a==null)return new H.aR(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.aR(a)},
ha:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.length
for(t=H.y(b),s=t.c,t=t.Q[1],r=0;r<h;){q=r+1
p=a[r]
r=q+1
o=a[q]
s.a(p)
t.a(o)
if(typeof p=="string"){n=b.b
if(n==null)n=b.b=b.R()
m=b.E(n,p)
if(m==null)b.I(n,p,b.F(p,o))
else m.b=o}else if(typeof p=="number"&&(p&0x3ffffff)===p){l=b.c
if(l==null)l=b.c=b.R()
m=b.E(l,p)
if(m==null)b.I(l,p,b.F(p,o))
else m.b=o}else{k=b.d
if(k==null)k=b.d=b.R()
j=J.bW(p)&0x3ffffff
i=b.ab(k,j)
if(i==null)b.I(k,j,[b.F(p,o)])
else{q=b.aj(i,p)
if(q>=0)i[q].b=o
else i.push(b.F(p,o))}}}return b},
hg:function(a,b,c,d,e,f){u.Y.a(a)
switch(H.bU(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.cq("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hg)
a.$identity=t
return t},
f1:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bw().constructor.prototype):Object.create(new H.ab(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.Q
if(typeof s!=="number")return s.B()
$.Q=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.dB(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}u.K.a(d)
k.$S=H.eY(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dB(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
eY:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eq,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.eW:H.eV
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
eZ:function(a,b,c,d){var t=H.dz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dB:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.f0(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.eZ(s,!q,t,b)
if(s===0){q=$.Q
if(typeof q!=="number")return q.B()
$.Q=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.d3()+";return "+o+"."+H.k(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.Q
if(typeof q!=="number")return q.B()
$.Q=q+1
n+=q
return new Function("return function("+n+"){return this."+H.d3()+"."+H.k(t)+"("+n+");}")()},
f_:function(a,b,c,d){var t=H.dz,s=H.eX
switch(b?-1:a){case 0:throw H.d(new H.bu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
f0:function(a,b){var t,s,r,q,p,o,n=H.d3(),m=$.dx
if(m==null)m=$.dx=H.dw("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.f_(s,!q,t,b)
if(s===1){q="return function(){return this."+n+"."+H.k(t)+"(this."+m+");"
p=$.Q
if(typeof p!=="number")return p.B()
$.Q=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+n+"."+H.k(t)+"(this."+m+", "+o+");"
p=$.Q
if(typeof p!=="number")return p.B()
$.Q=p+1
return new Function(q+p+"}")()},
dm:function(a,b,c,d,e,f,g){return H.f1(a,b,c,d,!!e,!!f,g)},
eV:function(a,b){return H.bT(v.typeUniverse,H.a9(a.a),b)},
eW:function(a,b){return H.bT(v.typeUniverse,H.a9(a.c),b)},
dz:function(a){return a.a},
eX:function(a){return a.c},
d3:function(){var t=$.dy
return t==null?$.dy=H.dw("self"):t},
dw:function(a){var t,s,r,q=new H.ab("self","target","receiver","name"),p=J.dF(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.eT("Field name "+a+" not found."))},
h5:function(a){if(a==null)H.h0("boolean expression must not be null")
return a},
h0:function(a){throw H.d(new H.bG(a))},
hu:function(a){throw H.d(new P.bd(a))},
hc:function(a){return v.getIsolateTag(a)},
hv:function(a){return H.D(new H.af(a))},
i9:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hk:function(a){var t,s,r,q,p,o=H.aX($.ep.$1(a)),n=$.cN[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cT[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.fy($.el.$2(a,o))
if(r!=null){n=$.cN[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cT[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.cY(t)
$.cN[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cT[o]=t
return t}if(q==="-"){p=H.cY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eu(a,t)
if(q==="*")throw H.d(P.dT(o))
if(v.leafTags[o]===true){p=H.cY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eu(a,t)},
eu:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ds(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cY:function(a){return J.ds(a,!1,null,!!a.$iT)},
ho:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cY(t)
else return J.ds(t,c,null,null)},
he:function(){if(!0===$.dp)return
$.dp=!0
H.hf()},
hf:function(){var t,s,r,q,p,o,n,m
$.cN=Object.create(null)
$.cT=Object.create(null)
H.hd()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ev.$1(p)
if(o!=null){n=H.ho(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hd:function(){var t,s,r,q,p,o,n=C.n()
n=H.al(C.o,H.al(C.p,H.al(C.k,H.al(C.k,H.al(C.q,H.al(C.r,H.al(C.t(C.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.ep=new H.cQ(q)
$.el=new H.cR(p)
$.ev=new H.cS(o)},
al:function(a,b){return a(b)||b},
hq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cg:function cg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
br:function br(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
ca:function ca(a){this.a=a},
aR:function aR(a){this.a=a
this.b=null},
a5:function a5(){},
bz:function bz(){},
bw:function bw(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a){this.a=a},
bG:function bG(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a,b){this.a=a
this.b=b
this.c=null},
ax:function ax(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
eb:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cM(b,a))},
bo:function bo(){},
bp:function bp(){},
ah:function ah(){},
aA:function aA(){},
aB:function aB(){},
bq:function bq(){},
aP:function aP(){},
aQ:function aQ(){},
dP:function(a,b){var t=b.c
return t==null?b.c=H.de(a,b.z,!0):t},
dO:function(a,b){var t=b.c
return t==null?b.c=H.aU(a,"F",[b.z]):t},
dQ:function(a){var t=a.y
if(t===6||t===7||t===8)return H.dQ(a.z)
return t===11||t===12},
f9:function(a){return a.cy},
b3:function(a){return H.df(v.typeUniverse,a,!1)},
a2:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.e4(a,s,!0)
case 7:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.de(a,s,!0)
case 8:t=b.z
s=H.a2(a,t,c,a0)
if(s===t)return b
return H.e3(a,s,!0)
case 9:r=b.Q
q=H.b1(a,r,c,a0)
if(q===r)return b
return H.aU(a,b.z,q)
case 10:p=b.z
o=H.a2(a,p,c,a0)
n=b.Q
m=H.b1(a,n,c,a0)
if(o===p&&m===n)return b
return H.dc(a,o,m)
case 11:l=b.z
k=H.a2(a,l,c,a0)
j=b.Q
i=H.fW(a,j,c,a0)
if(k===l&&i===j)return b
return H.e2(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.b1(a,h,c,a0)
p=b.z
o=H.a2(a,p,c,a0)
if(g===h&&o===p)return b
return H.dd(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.bY("Attempted to substitute unexpected RTI kind "+d))}},
b1:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a2(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
fX:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a2(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
fW:function(a,b,c,d){var t,s=b.a,r=H.b1(a,s,c,d),q=b.b,p=H.b1(a,q,c,d),o=b.c,n=H.fX(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bM()
t.a=r
t.b=p
t.c=n
return t},
t:function(a,b){a[v.arrayRti]=b
return a},
h6:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eq(t)
return a.$S()}return null},
es:function(a,b){var t
if(H.dQ(b))if(a instanceof H.a5){t=H.h6(a)
if(t!=null)return t}return H.a9(a)},
a9:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.dh(a)}if(Array.isArray(a))return H.cH(a)
return H.dh(J.b4(a))},
cH:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
y:function(a){var t=a.$ti
return t!=null?t:H.dh(a)},
dh:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.fI(a,t)},
fI:function(a,b){var t=a instanceof H.a5?a.__proto__.__proto__.constructor:b,s=H.fw(v.typeUniverse,t.name)
b.$ccache=s
return s},
eq:function(a){var t,s,r
H.bU(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.df(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
fH:function(a){var t,s,r,q=this
if(q===u.K)return H.aY(q,a,H.fL)
if(!H.W(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.aY(q,a,H.fO)
t=q.y
s=t===6?q.z:q
if(s===u.q)r=H.eg
else if(s===u.i||s===u.cY)r=H.fK
else if(s===u.N)r=H.fM
else r=s===u.y?H.ee:null
if(r!=null)return H.aY(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.hi)){q.r="$i"+t
return H.aY(q,a,H.fN)}}else if(t===7)return H.aY(q,a,H.fF)
return H.aY(q,a,H.fD)},
aY:function(a,b,c){a.b=c
return a.b(b)},
fG:function(a){var t,s=this,r=H.fC
if(!H.W(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.fz
else if(s===u.K)r=H.fx
else{t=H.b5(s)
if(t)r=H.fE}s.a=r
return s.a(a)},
dk:function(a){var t,s=a.y
if(!H.W(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dk(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fD:function(a){var t=this
if(a==null)return H.dk(t)
return H.n(v.typeUniverse,H.es(a,t),null,t,null)},
fF:function(a){if(a==null)return!0
return this.z.b(a)},
fN:function(a){var t,s=this
if(a==null)return H.dk(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.b4(a)[t]},
fC:function(a){var t,s=this
if(a==null){t=H.b5(s)
if(t)return a}else if(s.b(a))return a
H.ec(a,s)},
fE:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ec(a,t)},
ec:function(a,b){throw H.d(H.e1(H.dV(a,H.es(a,b),H.z(b,null))))},
dl:function(a,b,c,d){var t=null
if(H.n(v.typeUniverse,a,t,b,t))return a
throw H.d(H.e1("The type argument '"+H.z(a,t)+"' is not a subtype of the type variable bound '"+H.z(b,t)+"' of type variable '"+c+"' in '"+d+"'."))},
dV:function(a,b,c){var t=P.be(a),s=H.z(b==null?H.a9(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
e1:function(a){return new H.aS("TypeError: "+a)},
x:function(a,b){return new H.aS("TypeError: "+H.dV(a,null,b))},
fL:function(a){return a!=null},
fx:function(a){if(a!=null)return a
throw H.d(H.x(a,"Object"))},
fO:function(a){return!0},
fz:function(a){return a},
ee:function(a){return!0===a||!1===a},
hY:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.x(a,"bool"))},
i_:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool"))},
hZ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool?"))},
i0:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"double"))},
i2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double"))},
i1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double?"))},
eg:function(a){return typeof a=="number"&&Math.floor(a)===a},
bU:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.x(a,"int"))},
i4:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int"))},
i3:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int?"))},
fK:function(a){return typeof a=="number"},
i5:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"num"))},
i7:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num"))},
i6:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num?"))},
fM:function(a){return typeof a=="string"},
aX:function(a){if(typeof a=="string")return a
throw H.d(H.x(a,"String"))},
i8:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String"))},
fy:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String?"))},
fT:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.z(a[r],b)
return t},
ed:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=H.t([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)C.a.n(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.e(a4,k)
n=C.y.B(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.z(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.z(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.z(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.z(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.z(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
z:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.z(a.z,b)
return t}if(m===7){s=a.z
t=H.z(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.z(a.z,b)+">"
if(m===9){q=H.fY(a.z)
p=a.Q
return p.length!==0?q+("<"+H.fT(p,b)+">"):q}if(m===11)return H.ed(a,b,null)
if(m===12)return H.ed(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.e(b,o)
return b[o]}return"?"},
fY:function(a){var t,s=H.ex(a)
if(s!=null)return s
t="minified:"+a
return t},
e5:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
fw:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.df(a,b,!1)
else if(typeof n=="number"){t=n
s=H.aV(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.aU(a,b,r)
o[b]=p
return p}else return n},
fu:function(a,b){return H.e6(a.tR,b)},
ft:function(a,b){return H.e6(a.eT,b)},
df:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.e0(H.dZ(a,null,b,c))
s.set(b,t)
return t},
bT:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.e0(H.dZ(a,b,c,!0))
r.set(c,s)
return s},
fv:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dc(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a1:function(a,b){b.a=H.fG
b.b=H.fH
return b},
aV:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.I(null,null)
t.y=b
t.cy=c
s=H.a1(a,t)
a.eC.set(c,s)
return s},
e4:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fr(a,b,s,c)
a.eC.set(s,t)
return t},
fr:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.W(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.I(null,null)
r.y=6
r.z=b
r.cy=c
return H.a1(a,r)},
de:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fq(a,b,s,c)
a.eC.set(s,t)
return t},
fq:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.W(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.b5(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.b5(r.z))return r
else return H.dP(a,b)}}q=new H.I(null,null)
q.y=7
q.z=b
q.cy=c
return H.a1(a,q)},
e3:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fo(a,b,s,c)
a.eC.set(s,t)
return t},
fo:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.W(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.aU(a,"F",[b])
else if(b===u.P||b===u.T)return u.r}r=new H.I(null,null)
r.y=8
r.z=b
r.cy=c
return H.a1(a,r)},
fs:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.I(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a1(a,t)
a.eC.set(r,s)
return s},
bS:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fn:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
aU:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bS(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.I(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a1(a,s)
a.eC.set(q,r)
return r},
dc:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.bS(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.I(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a1(a,p)
a.eC.set(r,o)
return o},
e2:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.bS(n)
if(k>0){t=m>0?",":""
s=H.bS(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fn(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.I(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a1(a,p)
a.eC.set(r,s)
return s},
dd:function(a,b,c,d){var t,s=b.cy+("<"+H.bS(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fp(a,b,c,s,d)
a.eC.set(s,t)
return t},
fp:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a2(a,b,s,0)
n=H.b1(a,c,s,0)
return H.dd(a,o,n,c!==n)}}m=new H.I(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a1(a,m)},
dZ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
e0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.fi(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.e_(a,s,i,h,!1)
else if(r===46)s=H.e_(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.a0(a.u,a.e,h.pop()))
break
case 94:h.push(H.fs(a.u,h.pop()))
break
case 35:h.push(H.aV(a.u,5,"#"))
break
case 64:h.push(H.aV(a.u,2,"@"))
break
case 126:h.push(H.aV(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.db(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.aU(q,o,p))
else{n=H.a0(q,a.e,o)
switch(n.y){case 11:h.push(H.dd(q,n,p,a.n))
break
default:h.push(H.dc(q,n,p))
break}}break
case 38:H.fj(a,h)
break
case 42:q=a.u
h.push(H.e4(q,H.a0(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.de(q,H.a0(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.e3(q,H.a0(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.bM()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
H.db(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.e2(q,H.a0(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.db(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.fl(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.a0(a.u,a.e,j)},
fi:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
e_:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.e5(t,p.z)[q]
if(o==null)H.D('No "'+q+'" in "'+H.f9(p)+'"')
d.push(H.bT(t,p,o))}else d.push(q)
return n},
fj:function(a,b){var t=b.pop()
if(0===t){b.push(H.aV(a.u,1,"0&"))
return}if(1===t){b.push(H.aV(a.u,4,"1&"))
return}throw H.d(P.bY("Unexpected extended operation "+H.k(t)))},
a0:function(a,b,c){if(typeof c=="string")return H.aU(a,c,a.sEA)
else if(typeof c=="number")return H.fk(a,b,c)
else return c},
db:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a0(a,b,c[t])},
fl:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a0(a,b,c[t])},
fk:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.bY("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.bY("Bad index "+c+" for "+b.i(0)))},
n:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.W(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.W(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.n(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.n(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.n(a,b.z,c,d,e)
if(s===6)return H.n(a,b.z,c,d,e)
return s!==7}if(s===6)return H.n(a,b.z,c,d,e)
if(q===6){t=H.dP(a,d)
return H.n(a,b,c,t,e)}if(s===8){if(!H.n(a,b.z,c,d,e))return!1
return H.n(a,H.dO(a,b),c,d,e)}if(s===7){t=H.n(a,u.P,c,d,e)
return t&&H.n(a,b.z,c,d,e)}if(q===8){if(H.n(a,b,c,d.z,e))return!0
return H.n(a,b,c,H.dO(a,d),e)}if(q===7){t=H.n(a,b,c,u.P,e)
return t||H.n(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Y)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.n(a,l,c,k,e)||!H.n(a,k,e,l,c))return!1}return H.ef(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.ef(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.fJ(a,b,c,d,e)}return!1},
ef:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.n(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.n(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.n(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.n(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.n(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
fJ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.n(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.e5(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.n(a,H.bT(a,b,m[q]),c,s[q],e))return!1
return!0},
b5:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.W(a))if(s!==7)if(!(s===6&&H.b5(a.z)))t=s===8&&H.b5(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hi:function(a){var t
if(!H.W(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
W:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
e6:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bM:function bM(){this.c=this.b=this.a=null},
bJ:function bJ(){},
aS:function aS(a){this.a=a},
ex:function(a){return v.mangledGlobalNames[a]},
hp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ds:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cP:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.dp==null){H.he()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.dT("Return interceptor for "+H.k(t(a,p))))}r=a.constructor
q=r==null?null:r[J.dG()]
if(q!=null)return q
q=H.hk(a)
if(q!=null)return q
if(typeof a=="function")return C.z
t=Object.getPrototypeOf(a)
if(t==null)return C.m
if(t===Object.prototype)return C.m
if(typeof r=="function"){Object.defineProperty(r,J.dG(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
dG:function(){var t=$.dY
return t==null?$.dY=v.getIsolateTag("_$dart_js"):t},
dF:function(a,b){a.fixed$length=Array
return a},
b4:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.at.prototype
return J.bl.prototype}if(typeof a=="string")return J.a6.prototype
if(a==null)return J.ae.prototype
if(typeof a=="boolean")return J.bk.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.h)return a
return J.cP(a)},
cO:function(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.h)return a
return J.cP(a)},
eo:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.h)return a
return J.cP(a)},
hb:function(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.ai.prototype
return a},
K:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof P.h)return a
return J.cP(a)},
d0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b4(a).C(a,b)},
eL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cO(a).j(a,b)},
eM:function(a,b,c){return J.eo(a).v(a,b,c)},
eN:function(a,b,c,d){return J.K(a).az(a,b,c,d)},
eO:function(a,b,c,d){return J.K(a).ag(a,b,c,d)},
eP:function(a){return J.K(a).gk(a)},
bW:function(a){return J.b4(a).gq(a)},
eQ:function(a){return J.eo(a).gA(a)},
d1:function(a){return J.cO(a).gl(a)},
eR:function(a){return J.K(a).gak(a)},
eS:function(a,b){return J.hb(a).am(a,b)},
bX:function(a){return J.b4(a).i(a)},
G:function G(){},
bk:function bk(){},
ae:function ae(){},
Z:function Z(){},
bt:function bt(){},
ai:function ai(){},
S:function S(){},
v:function v(a){this.$ti=a},
c6:function c6(a){this.$ti=a},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
at:function at(){},
bl:function bl(){},
a6:function a6(){}},P={
fc:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.h1()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.b2(new P.cl(r),1)).observe(t,{childList:true})
return new P.ck(r,t,s)}else if(self.setImmediate!=null)return P.h2()
return P.h3()},
fd:function(a){self.scheduleImmediate(H.b2(new P.cm(u.M.a(a)),0))},
fe:function(a){self.setImmediate(H.b2(new P.cn(u.M.a(a)),0))},
ff:function(a){u.M.a(a)
P.fm(0,a)},
fm:function(a,b){var t=new P.cF()
t.aq(a,b)
return t},
bZ:function(a,b){var t=H.en(a,"error",u.K)
return new P.ap(t,b==null?P.d2(a):b)},
d2:function(a){var t
if(u.C.b(a)){t=a.gL()
if(t!=null)return t}return C.u},
f3:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=null,c=!1,b=a1.h("u<p<0>>"),a=new P.u($.l,b)
e.a=null
e.b=0
e.c=null
t=new P.c0(e)
s=new P.c1(e)
e.d=null
r=new P.c2(e)
q=new P.c3(e)
p=new P.c5(e,d,c,a,s,q,t,r)
try{for(k=a0.length,j=u.P,i=0,h=0;i<a0.length;a0.length===k||(0,H.ew)(a0),++i){o=a0[i]
n=h
o.a1(new P.c4(e,n,a,d,c,t,r,a1),p,j)
h=++e.b}if(h===0){k=a
k.D(H.t([],a1.h("v<0>")))
return k}e.a=P.c8(h,null,a1.h("0?"))}catch(g){m=H.a3(g)
l=H.V(g)
if(e.b===0||H.h5(c)){k=m
f=l
H.en(k,"error",u.K)
$.l!==C.b
if(f==null)f=P.d2(k)
b=new P.u($.l,b)
b.at(k,f)
return b}else{s.$1(m)
q.$1(l)}}return a},
fh:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.G()
b.a=a.a
b.c=a.c
P.aj(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.ad(r)}},
aj:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.cJ(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aj(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.cJ(d,d,l.b,k.a,k.b)
return}g=$.l
if(g!==h)$.l=h
else g=d
b=b.c
if((b&15)===8)new P.cA(q,c,p).$0()
else if(j){if((b&1)!==0)new P.cz(q,k).$0()}else if((b&2)!==0)new P.cy(c,q).$0()
if(g!=null)$.l=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.h("F<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.H(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.fh(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.H(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
fR:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.eU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
fQ:function(){var t,s
for(t=$.ak;t!=null;t=$.ak){$.b_=null
s=t.b
$.ak=s
if(s==null)$.aZ=null
t.a.$0()}},
fV:function(){$.di=!0
try{P.fQ()}finally{$.b_=null
$.di=!1
if($.ak!=null)$.dv().$1(P.em())}},
ej:function(a){var t=new P.bH(a),s=$.aZ
if(s==null){$.ak=$.aZ=t
if(!$.di)$.dv().$1(P.em())}else $.aZ=s.b=t},
fU:function(a){var t,s,r,q=$.ak
if(q==null){P.ej(a)
$.b_=$.aZ
return}t=new P.bH(a)
s=$.b_
if(s==null){t.b=q
$.ak=$.b_=t}else{r=s.b
t.b=r
$.b_=s.b=t
if(r==null)$.aZ=t}},
hs:function(a){var t=null,s=$.l
if(C.b===s){P.b0(t,t,C.b,a)
return}P.b0(t,t,s,u.M.a(s.ah(a)))},
fA:function(a,b,c){var t,s,r=a.aF(),q=$.eA()
if(r!==q){t=u.O.a(new P.cI(b,c))
q=r.$ti
s=$.l
r.M(new P.a8(new P.u(s,q),8,t,null,q.h("@<1>").t(q.c).h("a8<1,2>")))}else b.N(c)},
cJ:function(a,b,c,d,e){P.fU(new P.cK(d,e))},
eh:function(a,b,c,d,e){var t,s=$.l
if(s===c)return d.$0()
$.l=c
t=s
try{s=d.$0()
return s}finally{$.l=t}},
ei:function(a,b,c,d,e,f,g){var t,s=$.l
if(s===c)return d.$1(e)
$.l=c
t=s
try{s=d.$1(e)
return s}finally{$.l=t}},
fS:function(a,b,c,d,e,f,g,h,i){var t,s=$.l
if(s===c)return d.$2(e,f)
$.l=c
t=s
try{s=d.$2(e,f)
return s}finally{$.l=t}},
b0:function(a,b,c,d){var t
u.M.a(d)
t=C.b!==c
if(t)d=!(!t||!1)?c.ah(d):c.aD(d,u.H)
P.ej(d)},
cl:function cl(a){this.a=a},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
cF:function cF(){},
cG:function cG(a,b){this.a=a
this.b=b},
ap:function ap(a,b){this.a=a
this.b=b},
c1:function c1(a){this.a=a},
c3:function c3(a){this.a=a},
c0:function c0(a){this.a=a},
c2:function c2(a){this.a=a},
c5:function c5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
c4:function c4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
a8:function a8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cr:function cr(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
cu:function cu(a){this.a=a},
cv:function cv(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a){this.a=a},
cz:function cz(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a
this.b=null},
aH:function aH(){},
ce:function ce(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
cc:function cc(a){this.a=a},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(){},
cI:function cI(a,b){this.a=a
this.b=b},
aW:function aW(){},
cK:function cK(a,b){this.a=a
this.b=b},
bQ:function bQ(){},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function(a,b){return new P.aM(a.h("@<0>").t(b).h("aM<1,2>"))},
dW:function(a,b){var t=a[b]
return t===a?null:t},
da:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
dX:function(){var t=Object.create(null)
P.da(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
dJ:function(a,b,c){return b.h("@<0>").t(c).h("dI<1,2>").a(H.ha(a,new H.av(b.h("@<0>").t(c).h("av<1,2>"))))},
f4:function(a,b,c){var t,s
if(P.dj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.t([],u.s)
C.a.n($.A,a)
try{P.fP(a,t)}finally{if(0>=$.A.length)return H.e($.A,-1)
$.A.pop()}s=P.dR(b,u.V.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dE:function(a,b,c){var t,s
if(P.dj(a))return b+"..."+c
t=new P.by(b)
C.a.n($.A,a)
try{s=t
s.a=P.dR(s.a,a,", ")}finally{if(0>=$.A.length)return H.e($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dj:function(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
fP:function(a,b){var t,s,r,q,p,o,n,m=a.gA(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.k(m.gp())
C.a.n(b,t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.e(b,-1)
s=b.pop()
if(0>=b.length)return H.e(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.m()){if(k<=4){C.a.n(b,H.k(q))
return}s=H.k(q)
if(0>=b.length)return H.e(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.m();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.e(b,-1)
l-=b.pop().length+2;--k}C.a.n(b,"...")
return}}r=H.k(q)
s=H.k(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.n(b,n)
C.a.n(b,r)
C.a.n(b,s)},
dK:function(a){var t,s={}
if(P.dj(a))return"{...}"
t=new P.by("")
try{C.a.n($.A,a)
t.a+="{"
s.a=!0
a.X(0,new P.c9(s,t))
t.a+="}"}finally{if(0>=$.A.length)return H.e($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aM:function aM(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aN:function aN(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ay:function ay(){},
m:function m(){},
az:function az(){},
c9:function c9(a,b){this.a=a
this.b=b},
ag:function ag(){},
aO:function aO(){},
f2:function(a){if(a instanceof H.a5)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
c8:function(a,b,c){var t,s
if(a<0||a>4294967295)H.D(P.f7(a,0,4294967295,"length",null))
t=J.dF(H.t(new Array(a),c.h("v<0>")),c)
if(a!==0&&b!=null)for(s=0;s<t.length;++s)t[s]=b
return t},
f5:function(a,b){var t,s,r=H.t([],b.h("v<0>"))
for(t=a.length,s=0;s<t;++s)C.a.n(r,b.a(a[s]))
return r},
dR:function(a,b,c){var t=J.eQ(b)
if(!t.m())return a
if(c.length===0){do a+=H.k(t.gp())
while(t.m())}else{a+=H.k(t.gp())
for(;t.m();)a=a+c+H.k(t.gp())}return a},
be:function(a){if(typeof a=="number"||H.ee(a)||null==a)return J.bX(a)
if(typeof a=="string")return JSON.stringify(a)
return P.f2(a)},
bY:function(a){return new P.ao(a)},
eT:function(a){return new P.P(!1,null,null,a)},
eU:function(a,b,c){return new P.P(!0,a,b,c)},
f8:function(a,b){return new P.aE(null,null,!0,a,b,"Value not in range")},
f7:function(a,b,c,d,e){return new P.aE(b,c,!0,a,d,"Invalid value")},
d5:function(a,b,c,d,e){var t=H.bU(e==null?J.d1(b):e)
return new P.bj(t,!0,a,c,"Index out of range")},
ci:function(a){return new P.bD(a)},
dT:function(a){return new P.bB(a)},
fa:function(a){return new P.aG(a)},
aq:function(a){return new P.bc(a)},
j:function j(){},
ao:function ao(a){this.a=a},
bA:function bA(){},
bs:function bs(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aE:function aE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bj:function bj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bD:function bD(a){this.a=a},
bB:function bB(a){this.a=a},
aG:function aG(a){this.a=a},
bc:function bc(a){this.a=a},
aF:function aF(){},
bd:function bd(a){this.a=a},
cq:function cq(a){this.a=a},
o:function o(){},
q:function q(){},
h:function h(){},
bR:function bR(){},
by:function by(a){this.a=a},
am:function(a){var t,s,r,q
if(u.I.b(a)){t=J.eP(a)
s=t.constructor===Array
s.toString
if(s){s=typeof CanvasPixelArray!=="undefined"
s.toString
if(s){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}}return a}s=a.data
s.toString
r=a.height
r.toString
q=a.width
q.toString
return new P.aT(s,r,q)},
h7:function(a){if(a instanceof P.aT)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){}},W={
d9:function(a,b,c,d,e){var t=c==null?null:W.ek(new W.co(c),u.z)
t=new W.aL(a,b,t,!1,e.h("aL<0>"))
t.ae()
return t},
fB:function(a){var t,s="postMessage" in a
s.toString
if(s){t=W.fg(a)
return t}else return u.k.a(a)},
fg:function(a){var t=window
t.toString
if(a===t)return u.w.a(a)
else return new W.bI()},
ek:function(a,b){var t=$.l
if(t===C.b)return a
return t.aE(a,b)},
c:function c(){},
b6:function b6(){},
b7:function b7(){},
b9:function b9(){},
a4:function a4(){},
bb:function bb(){},
L:function L(){},
c_:function c_(){},
a_:function a_(a,b){this.a=a
this.$ti=b},
b:function b(){},
a:function a(){},
i:function i(){},
E:function E(){},
bf:function bf(){},
as:function as(){},
bh:function bh(){},
M:function M(){},
X:function X(){},
Y:function Y(){},
a7:function a7(){},
f:function f(){},
aC:function aC(){},
H:function H(){},
bv:function bv(){},
bF:function bF(){},
aI:function aI(){},
d4:function d4(a){this.$ti=a},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aL:function aL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
R:function R(){},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
bI:function bI(){},
bK:function bK(){},
bL:function bL(){},
bO:function bO(){},
bP:function bP(){}},F={
dq:function(){var t=$.e8
return t==null?H.D(H.aw("inputCanvas")):t},
er:function(){var t=$.e9
return t==null?H.D(H.aw("inputCtx")):t},
et:function(){var t=$.ea
return t==null?H.D(H.aw("outputCanvas")):t},
J:function(){var t=$.e7
return t==null?H.D(H.aw("ctx")):t},
bV:function(){var t=$.dg
return t==null?H.D(H.aw("images")):t},
hl:function(){var t,s,r,q,p,o,n,m,l,k="querySelectorAll",j=document,i=j.querySelector("#file")
i.toString
u.J.a(i)
C.d.S(i,"click",new F.cW(i))
C.d.S(i,"change",F.hm())
i=j.querySelector("#inputcanvas")
i.toString
t=u.E
$.e8=t.a(i)
i=F.dq()
C.c.sK(i,29)
C.c.sJ(i,29)
i=F.dq().getContext("2d")
i.toString
$.e9=i
i=j.querySelector("#outputcanvas")
i.toString
$.ea=t.a(i)
i=F.et()
C.c.sK(i,29)
C.c.sJ(i,29)
i=F.et().getContext("2d")
i.toString
$.e7=i
i=u.R
$.dg=P.dD(u.N,i)
s=H.t([],u.u)
t=u.h
H.dl(i,t,"T",k)
i=j.querySelectorAll("img")
i.toString
r=u.W
q=new W.a_(i,r)
for(i=new H.N(q,q.gl(q),r.h("N<m.E>")),p=u.f,r=r.h("m.E");i.m();){o=r.a(i.d)
n=C.a.gV(J.eS(C.a.gaJ(o.src.split("/")),"."))
m=$.dg;(m==null?H.D(H.aw("images")):m).v(0,n,o)
o=new W.aJ(o,"load",!1,p)
C.a.n(s,o.gV(o))}H.dl(u.S,t,"T",k)
j=j.querySelectorAll("input[type='radio']")
j.toString
i=u.D
l=new W.a_(j,i)
for(j=new H.N(l,l.gl(l),i.h("N<m.E>")),i=i.h("m.E"),t=u.o;j.m();)C.d.a5(i.a(j.d),"click",t.a(F.hn()),null)
P.f3(s,u.A).al(new F.cX(),u.H)},
ht:function(a){u.z.a(a)
F.dt()},
hj:function(a){var t,s
u.z.a(a)
t=new FileReader()
t.toString
s=u.t.a(new F.cV(t))
u.Z.a(null)
W.d9(t,"load",s,!1,u.p)
s=u.J.a(J.eR(a)).files
if(0>=s.length)return H.e(s,0)
t.readAsDataURL(s[0])},
hr:function(){var t,s,r,q,p=u.N,o=P.dD(p,p)
p=document
p.toString
H.dl(u.S,u.h,"T","querySelectorAll")
p=p.querySelectorAll("input[type='radio']")
p.toString
t=u.D
s=new W.a_(p,t)
for(p=new H.N(s,s.gl(s),t.h("N<m.E>")),t=t.h("m.E");p.m();){r=t.a(p.d)
q=r.checked
q.toString
if(q){q=r.name
q.toString
r=r.value
r.toString
o.v(0,q,r)}}return o},
dt:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="outputtype",a1="outputcolour",a2=F.hr(),a3=P.am(F.er().getImageData(0,0,29,29)),a4=$.h9.j(0,a2.j(0,"inputcolour")).$2(a3,a2),a5=F.bV().j(0,"mask_"+H.k(a2.j(0,a0)))
a5.toString
t=F.bV().j(0,"border_"+H.k(a2.j(0,a0)))
t.toString
s=F.bV().j(0,"icon_"+H.k(a2.j(0,a1)))
s.toString
F.J().clearRect(0,0,29,29)
F.J().drawImage(a5,0,0)
r=P.am(F.J().getImageData(0,0,29,29))
F.J().clearRect(0,0,29,29)
F.J().drawImage(t,0,0)
q=P.am(F.J().getImageData(0,0,29,29))
F.J().clearRect(0,0,29,29)
F.J().drawImage(s,0,0)
p=P.am(F.J().getImageData(0,0,29,29))
F.J().clearRect(0,0,29,29)
o=P.am(F.J().getImageData(0,0,29,29))
s=$.du.j(0,a2.j(0,a1))
s.toString
n=J.d0(a2.j(0,"border"),"true")
for(a5=J.K(o),t=J.K(p),m=J.K(r),l=J.cO(a4),k=J.K(q),j=0;j<29;++j)for(i=0;i<29;++i){h=i*29+j
g=h*4
f=l.j(a4,h)
if(n){e=k.gk(q)
if(g>=e.length)return H.e(e,g)
f*=e[g]/255}e=a5.gk(o)
d=s[0]
c=t.gk(p)
if(g>=c.length)return H.e(c,g)
b=1-f
c=C.e.W(d*255*f+c[g]*b)
if(g>=e.length)return H.e(e,g)
e[g]=c
c=a5.gk(o)
e=g+1
d=s[1]
a=t.gk(p)
if(e>=a.length)return H.e(a,e)
a=C.e.W(d*255*f+a[e]*b)
if(e>=c.length)return H.e(c,e)
c[e]=a
a=a5.gk(o)
e=g+2
c=s[2]
d=t.gk(p)
if(e>=d.length)return H.e(d,e)
b=C.e.W(c*255*f+d[e]*b)
if(e>=a.length)return H.e(a,e)
a[e]=b
b=a5.gk(o)
e=g+3
a=m.gk(r)
if(g>=a.length)return H.e(a,g)
a=a[g]
if(e>=b.length)return H.e(b,e)
b[e]=a}C.f.aM(F.J(),o,0,0)},
h4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
u.j.a(b)
t=P.c8(841,0,u.i)
s=b.j(0,"inputcolour")
s.toString
for(r=s==="white",q=s==="black",s=s==="alpha",p=J.K(a),o=0;o<29;++o)for(n=0;n<29;++n){m=n*29+o
l=m*4
if(s){k=p.gk(a)
j=l+3
if(j>=k.length)return H.e(k,j)
C.a.v(t,m,k[j]/255)}else if(q){k=p.gk(a)
if(l>=k.length)return H.e(k,l)
C.a.v(t,m,1-k[l]/255)}else if(r){k=p.gk(a)
if(l>=k.length)return H.e(k,l)
C.a.v(t,m,k[l]/255)}}return t},
h8:function(a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u.j.a(a3)
t=document.createElement("canvas")
t.toString
C.c.sK(t,29)
C.c.sJ(t,29)
t=t.getContext("2d")
t.toString
s=a3.j(0,"inputtype")
s.toString
r=a3.j(0,"inputcolour")
r.toString
s=F.bV().j(0,"mask_"+s)
s.toString
C.f.ai(t,s,0,0)
q=P.am(t.getImageData(0,0,29,29))
t.clearRect(0,0,29,29)
s=F.bV().j(0,"icon_"+r)
s.toString
C.f.ai(t,s,0,0)
p=P.am(t.getImageData(0,0,29,29))
o=P.c8(841,0,u.i)
for(t=J.K(a2),s=J.K(q),n=J.K(p),m=0;m<29;++m)for(l=0;l<29;++l){k=l*29+m
j=k*4
i=t.gk(a2)
if(j>=i.length)return H.e(i,j)
i=i[j]
h=t.gk(a2)
g=j+1
if(g>=h.length)return H.e(h,g)
h=h[g]
f=t.gk(a2)
e=j+2
if(e>=f.length)return H.e(f,e)
f=f[e]
d=n.gk(p)
if(j>=d.length)return H.e(d,j)
d=d[j]
c=n.gk(p)
if(g>=c.length)return H.e(c,g)
c=c[g]
b=n.gk(p)
if(e>=b.length)return H.e(b,e)
a=F.dn(i/255,h/255,f/255,d/255,c/255,b[e]/255)
b=n.gk(p)
if(j>=b.length)return H.e(b,j)
b=b[j]
c=n.gk(p)
if(g>=c.length)return H.e(c,g)
c=c[g]
d=n.gk(p)
if(e>=d.length)return H.e(d,e)
d=d[e]
f=$.du.j(0,r)
a0=F.dn(b/255,c/255,d/255,f[0],f[1],f[2])
if(a0<0.00001)a0=0.00001
i=t.gk(a2)
if(j>=i.length)return H.e(i,j)
i=i[j]
h=t.gk(a2)
if(g>=h.length)return H.e(h,g)
g=h[g]
h=t.gk(a2)
if(e>=h.length)return H.e(h,e)
e=h[e]
h=$.du.j(0,r)
a1=C.e.aG((1-F.dn(i/255,g/255,e/255,h[0],h[1],h[2]))*(a/a0),0,1)
h=s.gk(q)
if(j>=h.length)return H.e(h,j)
C.a.v(o,k,a1*(h[j]/255))}return o},
dn:function(a,b,c,d,e,f){var t=a-d,s=b-e,r=c-f
return Math.sqrt(t*t+s*s+r*r)},
cW:function cW(a){this.a=a},
cX:function cX(){},
cV:function cV(a){this.a=a},
cU:function cU(a){this.a=a}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.d7.prototype={}
J.G.prototype={
C:function(a,b){return a===b},
gq:function(a){return H.aD(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.bk.prototype={
i:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$icL:1}
J.ae.prototype={
C:function(a,b){return null==b},
i:function(a){return"null"},
gq:function(a){return 0},
$iq:1}
J.Z.prototype={
gq:function(a){return 0},
i:function(a){return String(a)}}
J.bt.prototype={}
J.ai.prototype={}
J.S.prototype={
i:function(a){var t=a[$.ez()]
if(t==null)return this.ap(a)
return"JavaScript function for "+J.bX(t)},
$iad:1}
J.v.prototype={
n:function(a,b){H.cH(a).c.a(b)
if(!!a.fixed$length)H.D(P.ci("add"))
a.push(b)},
gV:function(a){if(a.length>0)return a[0]
throw H.d(H.d6())},
gaJ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.d(H.d6())},
i:function(a){return P.dE(a,"[","]")},
gA:function(a){return new J.b8(a,a.length,H.cH(a).h("b8<1>"))},
gq:function(a){return H.aD(a)},
gl:function(a){return a.length},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cM(a,b))
return a[b]},
v:function(a,b,c){H.cH(a).c.a(c)
if(!!a.immutable$list)H.D(P.ci("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cM(a,b))
a[b]=c},
$io:1,
$ip:1}
J.c6.prototype={}
J.b8.prototype={
gp:function(){return this.$ti.c.a(this.d)},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.ew(r))
t=s.c
if(t>=q){s.sa2(null)
return!1}s.sa2(r[t]);++s.c
return!0},
sa2:function(a){this.d=this.$ti.h("1?").a(a)}}
J.au.prototype={
T:function(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=C.h.gY(b)
if(this.gY(a)===t)return 0
if(this.gY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gY:function(a){return a===0?1/a<0:a<0},
W:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.d(P.ci(""+a+".floor()"))},
aG:function(a,b,c){if(C.h.T(b,c)>0)throw H.d(H.h_(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aC:function(a,b){var t
if(a>0)t=this.aB(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aB:function(a,b){return b>31?0:a>>>b},
$iO:1,
$ian:1}
J.at.prototype={$ir:1}
J.bl.prototype={}
J.a6.prototype={
B:function(a,b){return a+b},
am:function(a,b){var t=H.t(a.split(b),u.s)
return t},
i:function(a){return a},
gq:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl:function(a){return a.length},
$idM:1,
$iw:1}
H.af.prototype={
i:function(a){var t="LateInitializationError: "+this.a
return t}}
H.cZ.prototype={
$0:function(){var t=new P.u($.l,u.U)
t.as(null)
return t},
$S:7}
H.ar.prototype={}
H.N.prototype={
gp:function(){return this.$ti.c.a(this.d)},
m:function(){var t,s=this,r=s.a,q=J.cO(r),p=q.gl(r)
if(s.b!==p)throw H.d(P.aq(r))
t=s.c
if(t>=p){s.sa3(null)
return!1}s.sa3(q.U(r,t));++s.c
return!0},
sa3:function(a){this.d=this.$ti.h("1?").a(a)}}
H.ac.prototype={}
H.cg.prototype={
u:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.br.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bm.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.bC.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ca.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.aR.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iB:1}
H.a5.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.ey(s==null?"unknown":s)+"'"},
$iad:1,
gaS:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bz.prototype={}
H.bw.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.ey(t)+"'"}}
H.ab.prototype={
C:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.ab))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gq:function(a){var t,s=this.c
if(s==null)t=H.aD(this.a)
else t=typeof s!=="object"?J.bW(s):H.aD(s)
return(t^H.aD(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.cb(u.K.a(t))+"'")}}
H.bu.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.bG.prototype={
i:function(a){return"Assertion failed: "+P.be(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gZ:function(){return new H.ax(this,H.y(this).h("ax<1>"))},
j:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.E(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.E(q,b)
r=s==null?o:s.b
return r}else return p.aI(b)},
aI:function(a){var t,s,r=this.d
if(r==null)return null
t=this.ab(r,J.bW(a)&0x3ffffff)
s=this.aj(t,a)
if(s<0)return null
return t[s].b},
X:function(a,b){var t,s,r=this
H.y(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.aq(r))
t=t.c}},
F:function(a,b){var t=this,s=H.y(t),r=new H.c7(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.d0(a[s].a,b))return s
return-1},
i:function(a){return P.dK(this)},
E:function(a,b){return a[b]},
ab:function(a,b){return a[b]},
I:function(a,b,c){a[b]=c},
ax:function(a,b){delete a[b]},
R:function(){var t="<non-identifier-key>",s=Object.create(null)
this.I(s,t,s)
this.ax(s,t)
return s},
$idI:1}
H.c7.prototype={}
H.ax.prototype={
gl:function(a){return this.a.a},
gA:function(a){var t=this.a,s=new H.bn(t,t.r,this.$ti.h("bn<1>"))
s.c=t.e
return s}}
H.bn.prototype={
gp:function(){return this.$ti.c.a(this.d)},
m:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.aq(r))
t=s.c
if(t==null){s.sa4(null)
return!1}else{s.sa4(t.a)
s.c=t.c
return!0}},
sa4:function(a){this.d=this.$ti.h("1?").a(a)}}
H.cQ.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.cR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.cS.prototype={
$1:function(a){return this.a(H.aX(a))},
$S:10}
H.bo.prototype={$idA:1}
H.bp.prototype={}
H.ah.prototype={
gl:function(a){return a.length},
$iT:1}
H.aA.prototype={$io:1,$ip:1}
H.aB.prototype={
gl:function(a){return a.length},
j:function(a,b){H.eb(b,a,a.length)
return a[b]},
$ifb:1}
H.bq.prototype={
gl:function(a){return a.length},
j:function(a,b){H.eb(b,a,a.length)
return a[b]}}
H.aP.prototype={}
H.aQ.prototype={}
H.I.prototype={
h:function(a){return H.bT(v.typeUniverse,this,a)},
t:function(a){return H.fv(v.typeUniverse,this,a)}}
H.bM.prototype={}
H.bJ.prototype={
i:function(a){return this.a}}
H.aS.prototype={}
P.cl.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.ck.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:11}
P.cm.prototype={
$0:function(){this.a.$0()},
$S:4}
P.cn.prototype={
$0:function(){this.a.$0()},
$S:4}
P.cF.prototype={
aq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b2(new P.cG(this,b),0),a)
else throw H.d(P.ci("`setTimeout()` not found."))}}
P.cG.prototype={
$0:function(){this.b.$0()},
$S:0}
P.ap.prototype={
i:function(a){return H.k(this.a)},
$ij:1,
gL:function(){return this.b}}
P.c1.prototype={
$1:function(a){return this.a.c=a},
$S:12}
P.c3.prototype={
$1:function(a){return this.a.d=u.l.a(a)},
$S:13}
P.c0.prototype={
$0:function(){var t=this.a.c
return t==null?H.D(H.dH("error")):t},
$S:14}
P.c2.prototype={
$0:function(){var t=this.a.d
return t==null?H.D(H.dH("stackTrace")):t},
$S:15}
P.c5.prototype={
$2:function(a,b){var t,s,r=this
u.K.a(a)
u.l.a(b)
t=r.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||r.c)r.d.w(a,b)
else{r.e.$1(a)
r.f.$1(b)}}else if(s===0&&!r.c)r.d.w(r.r.$0(),r.x.$0())},
$S:16}
P.c4.prototype={
$1:function(a){var t,s,r=this,q=r.x
q.a(a)
s=r.a;--s.b
t=s.a
if(t!=null){J.eM(t,r.b,a)
if(s.b===0)r.c.D(P.f5(t,q))}else if(s.b===0&&!r.e)r.c.w(r.f.$0(),r.r.$0())},
$S:function(){return this.x.h("q(0)")}}
P.a8.prototype={
aK:function(a){if((this.c&15)!==6)return!0
return this.b.b.a0(u.m.a(this.d),a.a,u.y,u.K)},
aH:function(a){var t=this.e,s=u.A,r=u.K,q=a.a,p=this.$ti.h("2/"),o=this.b.b
if(u.Q.b(t))return p.a(o.aO(t,q,a.b,s,r,u.l))
else return p.a(o.a0(u.v.a(t),q,s,r))}}
P.u.prototype={
a1:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).h("1/(2)").a(a)
t=$.l
if(t!==C.b){c.h("@<0/>").t(q.c).h("1(2)").a(a)
if(b!=null)b=P.fR(b,t)}s=new P.u(t,c.h("u<0>"))
r=b==null?1:3
this.M(new P.a8(s,r,a,b,q.h("@<1>").t(c).h("a8<1,2>")))
return s},
al:function(a,b){return this.a1(a,null,b)},
M:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.M(a)
return}s.a=r
s.c=t.c}P.b0(null,null,s.b,u.M.a(new P.cr(s,a)))}},
ad:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.ad(a)
return}n.a=t
n.c=o.c}m.a=n.H(a)
P.b0(null,null,n.b,u.M.a(new P.cx(m,n)))}},
G:function(){var t=u.F.a(this.c)
this.c=null
return this.H(t)},
H:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
av:function(a){var t,s,r,q=this
q.a=1
try{a.a1(new P.cu(q),new P.cv(q),u.P)}catch(r){t=H.a3(r)
s=H.V(r)
P.hs(new P.cw(q,t,s))}},
N:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
t=s.G()
r.c.a(a)
s.a=4
s.c=a
P.aj(s,t)},
D:function(a){var t,s=this
s.$ti.c.a(a)
t=s.G()
s.a=4
s.c=a
P.aj(s,t)},
w:function(a,b){var t,s,r=this
u.l.a(b)
t=r.G()
s=P.bZ(a,b)
r.a=8
r.c=s
P.aj(r,t)},
as:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("F<1>").b(a)){this.aw(a)
return}this.au(t.c.a(a))},
au:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.b0(null,null,t.b,u.M.a(new P.ct(t,a)))},
aw:function(a){this.$ti.h("F<1>").a(a)
this.av(a)},
at:function(a,b){u.l.a(b)
this.a=1
P.b0(null,null,this.b,u.M.a(new P.cs(this,a,b)))},
$iF:1}
P.cr.prototype={
$0:function(){P.aj(this.a,this.b)},
$S:0}
P.cx.prototype={
$0:function(){P.aj(this.b,this.a.a)},
$S:0}
P.cu.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.D(q.$ti.c.a(a))}catch(r){t=H.a3(r)
s=H.V(r)
q.w(t,s)}},
$S:3}
P.cv.prototype={
$2:function(a,b){this.a.w(u.K.a(a),u.l.a(b))},
$S:17}
P.cw.prototype={
$0:function(){this.a.w(this.b,this.c)},
$S:0}
P.ct.prototype={
$0:function(){this.a.D(this.b)},
$S:0}
P.cs.prototype={
$0:function(){this.a.w(this.b,this.c)},
$S:0}
P.cA.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.a_(u.O.a(r.d),u.A)}catch(q){t=H.a3(q)
s=H.V(q)
r=n.c&&u.n.a(n.b.a.c).a===t
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.bZ(t,s)
p.b=!0
return}if(m instanceof P.u&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.al(new P.cB(o),u.A)
r.b=!1}},
$S:0}
P.cB.prototype={
$1:function(a){return this.a},
$S:18}
P.cz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a0(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.a3(m)
s=H.V(m)
r=this.a
r.c=P.bZ(t,s)
r.b=!0}},
$S:0}
P.cy.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=u.n.a(n.a.a.c)
q=n.b
if(q.a.aK(t)&&q.a.e!=null){q.c=q.a.aH(t)
q.b=!1}}catch(p){s=H.a3(p)
r=H.V(p)
q=u.n.a(n.a.a.c)
o=n.b
if(q.a===s)o.c=q
else o.c=P.bZ(s,r)
o.b=!0}},
$S:0}
P.bH.prototype={}
P.aH.prototype={
gl:function(a){var t,s,r=this,q={},p=new P.u($.l,u.a)
q.a=0
t=H.y(r)
s=t.h("~(1)?").a(new P.ce(q,r))
u.Z.a(new P.cf(q,p))
W.d9(r.a,r.b,s,!1,t.c)
return p},
gV:function(a){var t,s=this,r=H.y(s),q=new P.u($.l,r.h("u<1>"))
r.h("~(1)?").a(null)
u.Z.a(new P.cc(q))
t=W.d9(s.a,s.b,null,!1,r.c)
t.aL(new P.cd(s,t,q))
return q}}
P.ce.prototype={
$1:function(a){H.y(this.b).c.a(a);++this.a.a},
$S:function(){return H.y(this.b).h("~(1)")}}
P.cf.prototype={
$0:function(){this.b.N(this.a.a)},
$S:0}
P.cc.prototype={
$0:function(){var t,s,r,q,p
try{r=H.d6()
throw H.d(r)}catch(q){t=H.a3(q)
s=H.V(q)
r=t
p=s
if(p==null)p=P.d2(r)
this.a.w(r,p)}},
$S:0}
P.cd.prototype={
$1:function(a){P.fA(this.b,this.c,H.y(this.a).c.a(a))},
$S:function(){return H.y(this.a).h("~(1)")}}
P.bx.prototype={}
P.cI.prototype={
$0:function(){return this.a.N(this.b)},
$S:0}
P.aW.prototype={$idU:1}
P.cK.prototype={
$0:function(){var t=u.K.a(H.d(this.a))
t.stack=this.b.i(0)
throw t},
$S:0}
P.bQ.prototype={
aP:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.l){a.$0()
return}P.eh(q,q,this,a,u.H)}catch(r){t=H.a3(r)
s=H.V(r)
P.cJ(q,q,this,u.K.a(t),u.l.a(s))}},
aQ:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.b===$.l){a.$1(b)
return}P.ei(q,q,this,a,b,u.H,c)}catch(r){t=H.a3(r)
s=H.V(r)
P.cJ(q,q,this,u.K.a(t),u.l.a(s))}},
aD:function(a,b){return new P.cD(this,b.h("0()").a(a),b)},
ah:function(a){return new P.cC(this,u.M.a(a))},
aE:function(a,b){return new P.cE(this,b.h("~(0)").a(a),b)},
a_:function(a,b){b.h("0()").a(a)
if($.l===C.b)return a.$0()
return P.eh(null,null,this,a,b)},
a0:function(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(a)
d.a(b)
if($.l===C.b)return a.$1(b)
return P.ei(null,null,this,a,b,c,d)},
aO:function(a,b,c,d,e,f){d.h("@<0>").t(e).t(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.l===C.b)return a.$2(b,c)
return P.fS(null,null,this,a,b,c,d,e,f)}}
P.cD.prototype={
$0:function(){return this.a.a_(this.b,this.c)},
$S:function(){return this.c.h("0()")}}
P.cC.prototype={
$0:function(){return this.a.aP(this.b)},
$S:0}
P.cE.prototype={
$1:function(a){var t=this.c
return this.a.aQ(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.aM.prototype={
gl:function(a){return this.a},
gZ:function(){return new P.aN(this,H.y(this).h("aN<1>"))},
j:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.dW(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.dW(r,b)
return s}else return this.ay(b)},
ay:function(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a7(a)]
s=this.aa(t,a)
return s<0?null:t[s+1]},
v:function(a,b,c){var t,s=this,r=H.y(s)
r.c.a(b)
r.Q[1].a(c)
if(b!=="__proto__"){t=s.b
s.ar(t==null?s.b=P.dX():t,b,c)}else s.aA(b,c)},
aA:function(a,b){var t,s,r,q,p=this,o=H.y(p)
o.c.a(a)
o.Q[1].a(b)
t=p.d
if(t==null)t=p.d=P.dX()
s=p.a7(a)
r=t[s]
if(r==null){P.da(t,s,[a,b]);++p.a
p.e=null}else{q=p.aa(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
X:function(a,b){var t,s,r,q,p,o=this,n=H.y(o)
n.h("~(1,2)").a(b)
t=o.a8()
for(s=t.length,r=n.c,n=n.Q[1],q=0;q<s;++q){p=t[q]
b.$2(r.a(p),n.a(o.j(0,p)))
if(t!==o.e)throw H.d(P.aq(o))}},
a8:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=P.c8(j.a,null,u.A)
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){i[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){i[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){i[q]=m[k];++q}}}return j.e=i},
ar:function(a,b,c){var t=H.y(this)
t.c.a(b)
t.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.da(a,b,c)},
a7:function(a){return J.bW(a)&1073741823},
aa:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.d0(a[s],b))return s
return-1},
$ibi:1}
P.aN.prototype={
gl:function(a){return this.a.a},
gA:function(a){var t=this.a
return new P.bN(t,t.a8(),this.$ti.h("bN<1>"))}}
P.bN.prototype={
gp:function(){return this.$ti.c.a(this.d)},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.d(P.aq(q))
else if(r>=s.length){t.sa6(null)
return!1}else{t.sa6(s[r])
t.c=r+1
return!0}},
sa6:function(a){this.d=this.$ti.h("1?").a(a)}}
P.ay.prototype={$io:1,$ip:1}
P.m.prototype={
gA:function(a){return new H.N(a,this.gl(a),H.a9(a).h("N<m.E>"))},
U:function(a,b){return this.j(a,b)},
i:function(a){return P.dE(a,"[","]")}}
P.az.prototype={}
P.c9.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.k(a)
s.a=t+": "
s.a+=H.k(b)},
$S:19}
P.ag.prototype={
X:function(a,b){var t,s,r=H.y(this)
r.h("~(1,2)").a(b)
for(t=this.gZ(),t=t.gA(t),r=r.Q[1];t.m();){s=t.gp()
b.$2(s,r.a(this.j(0,s)))}},
gl:function(a){var t=this.gZ()
return t.gl(t)},
i:function(a){return P.dK(this)}}
P.aO.prototype={}
P.j.prototype={
gL:function(){return H.V(this.$thrownJsError)}}
P.ao.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.be(t)
return"Assertion failed"}}
P.bA.prototype={}
P.bs.prototype={
i:function(a){return"Throw of null."}}
P.P.prototype={
gP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gO:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gP()+p+n
if(!r.a)return m
t=r.gO()
s=P.be(r.b)
return m+t+": "+s}}
P.aE.prototype={
gP:function(){return"RangeError"},
gO:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.k(r):""
else if(r==null)t=": Not greater than or equal to "+H.k(s)
else if(r>s)t=": Not in inclusive range "+H.k(s)+".."+H.k(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.k(s)
return t}}
P.bj.prototype={
gP:function(){return"RangeError"},
gO:function(){if(H.bU(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl:function(a){return this.f}}
P.bD.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bB.prototype={
i:function(a){var t="UnimplementedError: "+this.a
return t}}
P.aG.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bc.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.be(t)+"."}}
P.aF.prototype={
i:function(a){return"Stack Overflow"},
gL:function(){return null},
$ij:1}
P.bd.prototype={
i:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.cq.prototype={
i:function(a){return"Exception: "+this.a}}
P.o.prototype={
gl:function(a){var t,s=this.gA(this)
for(t=0;s.m();)++t
return t},
i:function(a){return P.f4(this,"(",")")}}
P.q.prototype={
gq:function(a){return P.h.prototype.gq.call(C.x,this)},
i:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
C:function(a,b){return this===b},
gq:function(a){return H.aD(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.bR.prototype={
i:function(a){return""},
$iB:1}
P.by.prototype={
gl:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.b6.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.b7.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.b9.prototype={}
W.a4.prototype={
sJ:function(a,b){a.height=b},
sK:function(a,b){a.width=b},
$ia4:1,
$iba:1}
W.bb.prototype={
aM:function(a,b,c,d){a.putImageData(P.h7(b),c,d)
return},
ai:function(a,b,c,d){return a.drawImage(b,c,d)}}
W.L.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.a_.prototype={
gl:function(a){return this.a.length},
j:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.e(t,b)
return this.$ti.c.a(t[b])}}
W.b.prototype={
i:function(a){var t=a.localName
t.toString
return t},
$ib:1}
W.a.prototype={
gak:function(a){return W.fB(a.target)},
$ia:1}
W.i.prototype={
ag:function(a,b,c,d){u.o.a(c)
if(c!=null)this.a5(a,b,c,d)},
S:function(a,b,c){return this.ag(a,b,c,null)},
a5:function(a,b,c,d){return a.addEventListener(b,H.b2(u.o.a(c),1),d)},
az:function(a,b,c,d){return a.removeEventListener(b,H.b2(u.o.a(c),1),!1)},
$ii:1}
W.E.prototype={$iE:1}
W.bf.prototype={
gl:function(a){var t=a.length
t.toString
return t},
j:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.d(P.d5(b,a,null,null,null))
t=a[b]
t.toString
return t},
U:function(a,b){if(b>=a.length)return H.e(a,b)
return a[b]},
$iT:1,
$io:1,
$ip:1}
W.as.prototype={
gaN:function(a){var t,s=a.result
if(u.x.b(s)){t=new Uint8Array(s,0)
return t}return s}}
W.bh.prototype={
gl:function(a){return a.length}}
W.M.prototype={
gk:function(a){var t=a.data
t.toString
return t},
$iM:1}
W.X.prototype={
san:function(a,b){a.src=b},
$iX:1,
$iba:1}
W.Y.prototype={
saR:function(a,b){a.value=b},
$iY:1,
$idC:1}
W.a7.prototype={}
W.f.prototype={
i:function(a){var t=a.nodeValue
return t==null?this.ao(a):t},
$if:1}
W.aC.prototype={
gl:function(a){var t=a.length
t.toString
return t},
j:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.d(P.d5(b,a,null,null,null))
t=a[b]
t.toString
return t},
U:function(a,b){if(b>=a.length)return H.e(a,b)
return a[b]},
$iT:1,
$io:1,
$ip:1}
W.H.prototype={$iH:1}
W.bv.prototype={
gl:function(a){return a.length}}
W.bF.prototype={$iba:1}
W.aI.prototype={$icj:1}
W.d4.prototype={}
W.aK.prototype={}
W.aJ.prototype={}
W.aL.prototype={
aF:function(){var t=this
if(t.b==null)return $.d_()
t.af()
t.b=null
t.sac(null)
return $.d_()},
aL:function(a){var t,s=this
s.$ti.h("~(1)?").a(a)
if(s.b==null)throw H.d(P.fa("Subscription has been canceled."))
s.af()
t=W.ek(new W.cp(a),u.z)
s.sac(t)
s.ae()},
ae:function(){var t,s=this.d
if(s!=null&&!0){t=this.b
t.toString
J.eO(t,this.c,s,!1)}},
af:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.o.a(s)
if(r)J.eN(t,this.c,s,!1)}},
sac:function(a){this.d=u.o.a(a)}}
W.co.prototype={
$1:function(a){return this.a.$1(u.z.a(a))},
$S:1}
W.cp.prototype={
$1:function(a){return this.a.$1(u.z.a(a))},
$S:1}
W.R.prototype={
gA:function(a){return new W.bg(a,this.gl(a),H.a9(a).h("bg<R.E>"))}}
W.bg.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.sa9(J.eL(t.a,s))
t.c=s
return!0}t.sa9(null)
t.c=r
return!1},
gp:function(){return this.$ti.c.a(this.d)},
sa9:function(a){this.d=this.$ti.h("1?").a(a)}}
W.bI.prototype={$ii:1,$icj:1}
W.bK.prototype={}
W.bL.prototype={}
W.bO.prototype={}
W.bP.prototype={}
P.aT.prototype={$iM:1,
gk:function(a){return this.a}}
P.bE.prototype={
gak:function(a){var t=a.target
t.toString
return t}}
F.cW.prototype={
$1:function(a){u.z.a(a)
C.d.saR(this.a,null)
return null},
$S:5}
F.cX.prototype={
$1:function(a){u.e.a(a)
return F.dt()},
$S:20}
F.cV.prototype={
$1:function(a){var t,s
u.p.a(a)
H.hp("test?")
t=document.createElement("img")
t.toString
C.l.S(t,"load",new F.cU(t))
s=C.v.gaN(this.a)
s.toString
C.l.san(t,H.aX(s))},
$S:21}
F.cU.prototype={
$1:function(a){var t,s
u.z.a(a)
t=F.dq()
s=this.a
C.c.sK(t,s.width)
C.c.sJ(t,s.height)
F.er().drawImage(s,0,0)
F.dt()},
$S:5};(function aliases(){var t=J.G.prototype
t.ao=t.i
t=J.Z.prototype
t.ap=t.i})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._static_2
t(P,"h1","fd",2)
t(P,"h2","fe",2)
t(P,"h3","ff",2)
s(P,"em","fV",0)
t(F,"hn","ht",1)
t(F,"hm","hj",1)
r(F,"dr","h4",6)
r(F,"C","h8",6)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.d7,J.G,J.b8,P.j,H.a5,P.o,H.N,H.ac,H.cg,H.ca,H.aR,P.ag,H.c7,H.bn,H.I,H.bM,P.cF,P.ap,P.a8,P.u,P.bH,P.aH,P.bx,P.aW,P.bN,P.aO,P.m,P.aF,P.cq,P.q,P.bR,P.by,W.d4,W.R,W.bg,W.bI,P.aT])
r(J.G,[J.bk,J.ae,J.Z,J.v,J.au,J.a6,H.bo,H.bp,W.i,W.b9,W.bb,W.c_,W.a,W.bK,W.M,W.bO])
r(J.Z,[J.bt,J.ai,J.S])
s(J.c6,J.v)
r(J.au,[J.at,J.bl])
r(P.j,[H.af,P.bA,H.bm,H.bC,H.bu,P.ao,H.bJ,P.bs,P.P,P.bD,P.bB,P.aG,P.bc,P.bd])
r(H.a5,[H.cZ,H.bz,H.cQ,H.cR,H.cS,P.cl,P.ck,P.cm,P.cn,P.cG,P.c1,P.c3,P.c0,P.c2,P.c5,P.c4,P.cr,P.cx,P.cu,P.cv,P.cw,P.ct,P.cs,P.cA,P.cB,P.cz,P.cy,P.ce,P.cf,P.cc,P.cd,P.cI,P.cK,P.cD,P.cC,P.cE,P.c9,W.co,W.cp,F.cW,F.cX,F.cV,F.cU])
s(H.ar,P.o)
s(H.br,P.bA)
r(H.bz,[H.bw,H.ab])
s(H.bG,P.ao)
s(P.az,P.ag)
r(P.az,[H.av,P.aM])
r(H.ar,[H.ax,P.aN])
s(H.ah,H.bp)
s(H.aP,H.ah)
s(H.aQ,H.aP)
s(H.aA,H.aQ)
r(H.aA,[H.aB,H.bq])
s(H.aS,H.bJ)
s(P.bQ,P.aW)
s(P.ay,P.aO)
r(P.P,[P.aE,P.bj])
r(W.i,[W.f,W.as,W.aI])
r(W.f,[W.b,W.L])
s(W.c,W.b)
r(W.c,[W.b6,W.b7,W.a4,W.bh,W.X,W.Y,W.a7,W.bv])
s(W.a_,P.ay)
s(W.E,W.b9)
s(W.bL,W.bK)
s(W.bf,W.bL)
s(W.bP,W.bO)
s(W.aC,W.bP)
r(W.a,[W.H,P.bE])
s(W.bF,W.a7)
s(W.aK,P.aH)
s(W.aJ,W.aK)
s(W.aL,P.bx)
t(H.aP,P.m)
t(H.aQ,H.ac)
t(P.aO,P.m)
t(W.bK,P.m)
t(W.bL,W.R)
t(W.bO,P.m)
t(W.bP,W.R)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",O:"double",an:"num",w:"String",cL:"bool",q:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(a)","~(~())","q(@)","q()","q(a)","p<O>(M,bi<w,w>)","F<q>()","@(@)","@(@,w)","@(w)","q(~())","@(h)","@(B)","h()","B()","~(h,B)","q(h,B)","u<@>(@)","~(h?,h?)","~(p<@>)","~(H)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fu(v.typeUniverse,JSON.parse('{"bt":"Z","ai":"Z","S":"Z","hy":"a","hE":"a","hx":"b","hG":"b","hK":"b","hI":"i","hJ":"i","hX":"H","hA":"c","hH":"f","hD":"f","hB":"L","hL":"L","hz":"a7","bk":{"cL":[]},"ae":{"q":[]},"Z":{"ad":[]},"v":{"p":["1"],"o":["1"]},"c6":{"v":["1"],"p":["1"],"o":["1"]},"au":{"O":[],"an":[]},"at":{"O":[],"r":[],"an":[]},"bl":{"O":[],"an":[]},"a6":{"w":[],"dM":[]},"af":{"j":[]},"ar":{"o":["1"]},"br":{"j":[]},"bm":{"j":[]},"bC":{"j":[]},"aR":{"B":[]},"a5":{"ad":[]},"bz":{"ad":[]},"bw":{"ad":[]},"ab":{"ad":[]},"bu":{"j":[]},"bG":{"j":[]},"av":{"ag":["1","2"],"dI":["1","2"]},"ax":{"o":["1"]},"bo":{"dA":[]},"ah":{"T":["1"]},"aA":{"m":["r"],"T":["r"],"p":["r"],"o":["r"],"ac":["r"]},"aB":{"m":["r"],"fb":[],"T":["r"],"p":["r"],"o":["r"],"ac":["r"],"m.E":"r"},"bq":{"m":["r"],"T":["r"],"p":["r"],"o":["r"],"ac":["r"],"m.E":"r"},"bJ":{"j":[]},"aS":{"j":[]},"ap":{"j":[]},"u":{"F":["1"]},"aW":{"dU":[]},"bQ":{"aW":[],"dU":[]},"aM":{"ag":["1","2"],"bi":["1","2"]},"aN":{"o":["1"]},"ay":{"m":["1"],"p":["1"],"o":["1"]},"az":{"ag":["1","2"]},"O":{"an":[]},"r":{"an":[]},"p":{"o":["1"]},"w":{"dM":[]},"ao":{"j":[]},"bA":{"j":[]},"bs":{"j":[]},"P":{"j":[]},"aE":{"j":[]},"bj":{"j":[]},"bD":{"j":[]},"bB":{"j":[]},"aG":{"j":[]},"bc":{"j":[]},"aF":{"j":[]},"bd":{"j":[]},"bR":{"B":[]},"c":{"b":[],"f":[],"i":[]},"b6":{"b":[],"f":[],"i":[]},"b7":{"b":[],"f":[],"i":[]},"a4":{"b":[],"f":[],"i":[],"ba":[]},"L":{"f":[],"i":[]},"a_":{"m":["1"],"p":["1"],"o":["1"],"m.E":"1"},"b":{"f":[],"i":[]},"bf":{"m":["E"],"R":["E"],"p":["E"],"T":["E"],"o":["E"],"m.E":"E","R.E":"E"},"as":{"i":[]},"bh":{"b":[],"f":[],"i":[]},"X":{"b":[],"f":[],"i":[],"ba":[]},"Y":{"dC":[],"b":[],"f":[],"i":[]},"a7":{"b":[],"f":[],"i":[]},"f":{"i":[]},"aC":{"m":["f"],"R":["f"],"p":["f"],"T":["f"],"o":["f"],"m.E":"f","R.E":"f"},"H":{"a":[]},"bv":{"b":[],"f":[],"i":[]},"bF":{"b":[],"f":[],"i":[],"ba":[]},"aI":{"cj":[],"i":[]},"aK":{"aH":["1"]},"aJ":{"aK":["1"],"aH":["1"]},"aL":{"bx":["1"]},"bI":{"cj":[],"i":[]},"aT":{"M":[]},"bE":{"a":[]}}'))
H.ft(v.typeUniverse,JSON.parse('{"ar":1,"ah":1,"ay":1,"az":2,"aO":1}'))
0
var u=(function rtii(){var t=H.b3
return{n:t("ap"),x:t("dA"),E:t("a4"),h:t("b"),C:t("j"),z:t("a"),J:t("dC"),Y:t("ad"),d:t("F<@>"),j:t("bi<w,w>"),I:t("M"),R:t("X"),S:t("Y"),V:t("o<@>"),u:t("v<F<@>>"),s:t("v<w>"),b:t("v<@>"),T:t("ae"),g:t("S"),L:t("T<@>"),e:t("p<@>"),P:t("q"),K:t("h"),p:t("H"),l:t("B"),N:t("w"),B:t("ai"),w:t("cj"),f:t("aJ<a>"),W:t("a_<X>"),D:t("a_<Y>"),U:t("u<q>"),c:t("u<@>"),a:t("u<r>"),y:t("cL"),m:t("cL(h)"),i:t("O"),A:t("@"),O:t("@()"),v:t("@(h)"),Q:t("@(h,B)"),q:t("r"),G:t("0&*"),_:t("h*"),k:t("i?"),r:t("F<q>?"),X:t("h?"),F:t("a8<@,@>?"),o:t("@(a)?"),Z:t("~()?"),t:t("~(H)?"),cY:t("an"),H:t("~"),M:t("~()")}})();(function constants(){C.c=W.a4.prototype
C.f=W.bb.prototype
C.v=W.as.prototype
C.l=W.X.prototype
C.d=W.Y.prototype
C.w=J.G.prototype
C.a=J.v.prototype
C.h=J.at.prototype
C.x=J.ae.prototype
C.e=J.au.prototype
C.y=J.a6.prototype
C.z=J.S.prototype
C.m=J.bt.prototype
C.i=J.ai.prototype
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.n=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.t=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.p=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.r=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.k=function(hooks) { return hooks; }

C.b=new P.bQ()
C.u=new P.bR()})();(function staticFields(){$.dY=null
$.Q=0
$.dy=null
$.dx=null
$.ep=null
$.el=null
$.ev=null
$.cN=null
$.cT=null
$.dp=null
$.ak=null
$.aZ=null
$.b_=null
$.di=!1
$.l=C.b
$.A=H.t([],H.b3("v<h>"))
$.e8=null
$.e9=null
$.ea=null
$.e7=null
$.dg=null
$.du=function(){var t=H.b3("v<O>")
return P.dJ(["positive",H.t([0,0.12941176470588237,0.11372549019607843],t),"negative",H.t([0.12941176470588237,0.011764705882352941,0],t),"super",H.t([0,0.16470588235294117,0.16862745098039217],t),"overtuned",H.t([0.08235294117647059,0.058823529411764705,0.011764705882352941],t),"hive",H.t([0.9215686274509803,0.8666666666666667,0.7450980392156863],t),"machine",H.t([0,0.15294117647058825,0.1568627450980392],t),"megacorp",H.t([0.050980392156862744,0.050980392156862744,0.0196078431372549],t),"psi",H.t([0.054901960784313725,0.0196078431372549,0.09019607843137255],t),"physics",H.t([0,0.08235294117647059,0.13725490196078433],t),"society",H.t([0.03137254901960784,0.10588235294117647,0.050980392156862744],t),"engineering",H.t([0.13725490196078433,0.10588235294117647,0],t),"bugyellow",H.t([0.14901960784313725,0.11764705882352941,0.0196078431372549],t),"bugblue",H.t([0,0.09019607843137255,0.10980392156862745],t)],u.N,H.b3("p<O>"))}()
$.h9=P.dJ(["alpha",F.dr(),"black",F.dr(),"white",F.dr(),"positive",F.C(),"negative",F.C(),"super",F.C(),"overtuned",F.C(),"hive",F.C(),"machine",F.C(),"megacorp",F.C(),"psi",F.C(),"physics",F.C(),"society",F.C(),"engineering",F.C(),"bugyellow",F.C(),"bugblue",F.C()],u.N,H.b3("p<O>(M,bi<w,w>)"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"hC","ez",function(){return H.hc("_$dart_dartClosure")})
t($,"ia","d_",function(){return C.b.a_(new H.cZ(),H.b3("F<q>"))})
t($,"hM","eB",function(){return H.U(H.ch({
toString:function(){return"$receiver$"}}))})
t($,"hN","eC",function(){return H.U(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"hO","eD",function(){return H.U(H.ch(null))})
t($,"hP","eE",function(){return H.U(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"hS","eH",function(){return H.U(H.ch(void 0))})
t($,"hT","eI",function(){return H.U(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"hR","eG",function(){return H.U(H.dS(null))})
t($,"hQ","eF",function(){return H.U(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"hV","eK",function(){return H.U(H.dS(void 0))})
t($,"hU","eJ",function(){return H.U(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"hW","dv",function(){return P.fc()})
t($,"hF","eA",function(){return u.U.a($.d_())})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.G,MediaError:J.G,NavigatorUserMediaError:J.G,OverconstrainedError:J.G,PositionError:J.G,SQLError:J.G,ArrayBuffer:H.bo,ArrayBufferView:H.bp,Uint8ClampedArray:H.aB,CanvasPixelArray:H.aB,Uint8Array:H.bq,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.b6,HTMLAreaElement:W.b7,Blob:W.b9,HTMLCanvasElement:W.a4,CanvasRenderingContext2D:W.bb,CDATASection:W.L,CharacterData:W.L,Comment:W.L,ProcessingInstruction:W.L,Text:W.L,DOMException:W.c_,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,USBConnectionEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,EventTarget:W.i,File:W.E,FileList:W.bf,FileReader:W.as,HTMLFormElement:W.bh,ImageData:W.M,HTMLImageElement:W.X,HTMLInputElement:W.Y,HTMLAudioElement:W.a7,HTMLMediaElement:W.a7,Document:W.f,DocumentFragment:W.f,HTMLDocument:W.f,ShadowRoot:W.f,XMLDocument:W.f,Attr:W.f,DocumentType:W.f,Node:W.f,NodeList:W.aC,RadioNodeList:W.aC,ProgressEvent:W.H,ResourceProgressEvent:W.H,HTMLSelectElement:W.bv,HTMLVideoElement:W.bF,Window:W.aI,DOMWindow:W.aI,IDBVersionChangeEvent:P.bE})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,EventTarget:false,File:true,FileList:true,FileReader:true,HTMLFormElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLAudioElement:true,HTMLMediaElement:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,IDBVersionChangeEvent:true})
H.ah.$nativeSuperclassTag="ArrayBufferView"
H.aP.$nativeSuperclassTag="ArrayBufferView"
H.aQ.$nativeSuperclassTag="ArrayBufferView"
H.aA.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=F.hl
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
