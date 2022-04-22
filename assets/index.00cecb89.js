import{o as c,c as _,p as y,a as $,b as i,r as p,d,w as h,F as w,e as v,f,g as k,T as x,n as P,h as S,t as g,i as I,j as D,k as H}from"./vendor.aaca27d0.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};L();var m=(e,o)=>{const s=e.__vccOpts||e;for(const[r,t]of o)s[r]=t;return s};const N={name:"Home",date(){return{}},methods:{HomePath(){this.$router.push("/")}}},G=e=>(y("data-v-5f13306e"),e=e(),$(),e),V=G(()=>i("h1",null,"Vue PWA Demo",-1)),A=[V];function B(e,o,s,r,t,n){return c(),_("div",null,A)}var M=m(N,[["render",B],["__scopeId","data-v-5f13306e"]]);const R={name:"app",components:{},data(){return{}}},T={id:"nav"},O=v("Home"),F=v("Camera"),W=v("Geolocation");function E(e,o,s,r,t,n){const a=p("router-link"),l=p("PDFJSViewer"),u=p("router-view");return c(),_(w,null,[i("div",T,[d(a,{to:"/"},{default:h(()=>[O]),_:1}),d(a,{to:"/camera"},{default:h(()=>[F]),_:1}),d(a,{to:"/geolocation"},{default:h(()=>[W]),_:1}),d(l,{path:`${e.path}`,fileName:`${e.name}`},null,8,["path","fileName"])]),d(u)],64)}var j=m(R,[["render",E]]);const J={props:{src:{type:String,default:null}}},U=["src"];function Y(e,o,s,r,t,n){return c(),_("img",{src:s.src},null,8,U)}var q=m(J,[["render",Y],["__scopeId","data-v-7c3257a8"]]);const z={components:{Photo:q},props:{photos:{type:Array,default:()=>[]}}};function K(e,o,s,r,t,n){const a=p("photo");return c(),f(x,{class:"photos-container",name:"list-animated"},{default:h(()=>[(c(!0),_(w,null,k(s.photos,l=>(c(),f(a,{class:"list-animated-item",key:l.id,src:l.src,onRemove:u=>s.photos.splice(s.photos.findIndex(b=>b.id===l.id),1)},null,8,["src","onRemove"]))),128))]),_:1})}var Q=m(z,[["render",K],["__scopeId","data-v-711d790a"]]);const X={components:{PhotosGallery:Q},data(){return{photos:[],mediaStream:null,videoDevices:[],facingMode:"environment",counter:0,switchingCamera:!1}},methods:{async StartRecording(e){this.facingMode=e;let o=this.$refs.video;return this.mediaStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:e}}),o.srcObject=this.mediaStream,await o.play()},async TakePhoto(){let e=this.$refs.video,o=this.$refs.canva,s=e.videoWidth,r=e.videoHeight;o.width=s,o.height=r;let t=o.getContext("2d");t.save(),this.facingMode==="user"?(t.scale(-1,1),t.drawImage(e,s*-1,0,s,r)):t.drawImage(e,0,0),t.restore(),this.photos.push({id:this.counter++,src:o.toDataURL("image/png")})},async switchCamera(){this.switchingCamera=!0,this.mediaStream.getVideoTracks().forEach(o=>{o.stop()}),await this.StartRecording(this.facingMode==="environment"?"user":"environment"),this.switchingCamera=!1}},async mounted(){const e=await navigator.mediaDevices.enumerateDevices();this.videoDevices=e.filter(o=>o.kind==="videoinput"),await this.StartRecording(this.videoDevices.length===1?"user":"environment")}},Z={class:"wrapper"},ee={style:{display:"none"},ref:"canva"},te=["disabled"],oe={class:"photo-button-container"};function ne(e,o,s,r,t,n){const a=p("b-icon"),l=p("photos-gallery");return c(),_("div",Z,[i("video",{class:P(["video",t.facingMode==="user"?"front":""]),ref:"video"},null,2),i("canvas",ee,null,512),t.videoDevices.length>1?(c(),_("button",{key:0,class:"switch-button",onClick:o[0]||(o[0]=(...u)=>n.switchCamera&&n.switchCamera(...u)),disabled:t.switchingCamera},[d(a,{pack:"fas",icon:"sync-alt"})],8,te)):S("",!0),i("div",oe,[i("button",{class:"button photo-button",onClick:o[1]||(o[1]=(...u)=>n.TakePhoto&&n.TakePhoto(...u))},[d(a,{pack:"fas",icon:"camera"})])]),d(l,{class:"gallery",photos:t.photos},null,8,["photos"])])}var se=m(X,[["render",ne],["__scopeId","data-v-1ea4b62e"]]);const ae={data(){return{myCoordinates:{lat:0,lng:0}}},created(){},methods:{locatorButtonPressed(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.myCoordinates.lat=e.coords.latitude,this.myCoordinates.lng=e.coords.longitude},e=>{console.log(e.message)}):console.log("Your browser does not support geolocation API")}}},C=e=>(y("data-v-1c5cbf54"),e=e(),$(),e),re={id:"app"},ie=C(()=>i("h1",null,"Geolocation",-1)),ce=C(()=>i("h2",null,"Your coordinates:",-1));function de(e,o,s,r,t,n){return c(),_("div",re,[ie,ce,i("p",null,g(t.myCoordinates.lat)+" Latitude, "+g(t.myCoordinates.lng)+" Longitude",1),i("button",{class:"button",onClick:o[0]||(o[0]=(...a)=>n.locatorButtonPressed&&n.locatorButtonPressed(...a))})])}var le=m(ae,[["render",de],["__scopeId","data-v-1c5cbf54"]]);const _e=[{path:"/",name:"Home",component:M},{path:"/camera",name:"Camera",component:se},{path:"/geolocation",name:"Geolocation",component:le}],ue=I({history:D(),routes:_e});H(j).use(ue).mount("#app");
