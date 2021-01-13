(self.webpackChunkdrum_machine=self.webpackChunkdrum_machine||[]).push([[179],{5579:(e,t,a)=>{"use strict";var r=a(1919),o=a(7294),n=a(3935);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,o=!1,n=void 0;try{for(var c,m=e[Symbol.iterator]();!(r=(c=m.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==m.return||m.return()}finally{if(o)throw n}}return a}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}e=a.hmd(e),(0,r.setLogLevel)("error");var l={power:!1,kits:[{name:"Heater",id:"kit-1",selected:!0,tracks:[{keyCode:81,id:"heater-1",buttonName:"Q",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",audioName:"Heater 1"},{keyCode:87,id:"heater-2",buttonName:"W",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",audioName:"Heater 2"},{keyCode:69,id:"heater-1",buttonName:"E",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",audioName:"Heater 3"},{keyCode:65,id:"heater-4",buttonName:"A",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",audioName:"Heater 4"},{keyCode:83,id:"clap",buttonName:"S",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",audioName:"Clap"},{keyCode:68,id:"open-hh",buttonName:"D",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",audioName:"Open-HH"},{keyCode:90,id:"kick-n'-hat",buttonName:"Z",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",audioName:"Kick-n'-Hat"},{keyCode:88,id:"kick",buttonName:"X",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",audioName:"Kick"},{keyCode:67,id:"closed-hh",buttonName:"C",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",audioName:"Closed-HH"}]},{name:"Piano",id:"kit-2",selected:!1,tracks:[{keyCode:81,id:"chord-1",buttonName:"Q",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",audioName:"Chord 1"},{keyCode:87,id:"chord-2",buttonName:"W",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",audioName:"Chord 2"},{keyCode:69,id:"chord-3",buttonName:"E",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",audioName:"Chord 3"},{keyCode:65,id:"shaker",buttonName:"A",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",audioName:"Shaker"},{keyCode:83,id:"open-hh",buttonName:"S",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",audioName:"Open-HH"},{keyCode:68,id:"closed-hh",buttonName:"D",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",audioName:"Closed-HH"},{keyCode:90,id:"punchy-kick",buttonName:"Z",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",audioName:"Punchy-Kick"},{keyCode:88,id:"side-stick",buttonName:"X",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",audioName:"Side-Stick"},{keyCode:67,id:"snare",buttonName:"C",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",audioName:"Snare"}]}],volumeLevel:.5},p="SWITCH_POWER",f="VOLUME_LEVEL",y="SELECTED_KIT",h=function(e,t){if(t.type===p)return e.power={power:t.playload.power},d(d({},e),e.power);if(t.type===f)return e.volumeLevel=t.playload.volumeLevel,d({},e);if(t.type===y){var a=e.kits.map((function(e){return e.id===t.playload.id?(e.selected=!0,e):(e.selected=!1,e)}));return d(d({},e),{},{kits:a})}return e},k=function(e){var t=e.appState,a=e.togglePower,r=e.getVolumeLevel,n=e.getSelectedKit,m=e.clipName,u=c(o.useState(!1),2),i=u[0],d=u[1],s=c(o.useState(!1),2),l=s[0],p=s[1],f=c(o.useState(t.volumeLevel),2),y=f[0],h=f[1],k=c(o.useState(""),2),b=k[0],v=k[1],N=c(o.useState(""),2),w=N[0],E=N[1],C=function(e){n(e.target.id),E("")};return o.useEffect((function(){r(y)}),[y]),o.useEffect((function(){var e=t.kits.find((function(e){return!0===e.selected})).name;v(e)}),[t.kits]),o.useEffect((function(){E(m)}),[m]),o.createElement("header",{className:"app-controller"},o.createElement("div",{className:"controller-top"},o.createElement("label",{htmlFor:"on",className:"switch-button ".concat(t.power?"":"off")},o.createElement("input",{type:"checkbox",defaultChecked:"checked",onClick:function(){d(!i),a(i)},name:"switch",id:"on",className:"switch-button-input"})),o.createElement("div",{id:"screen",className:"screen ".concat(t.power?"screen_active":"")},o.createElement("div",{id:"display",className:"screen__clip"},t.power?w:""),o.createElement("div",{id:"display-kit",className:"screen__kit"},t.power?"Kits: ".concat(b):"")),o.createElement("div",{className:"volume"},o.createElement("button",{type:"button",className:"volume__button",onClick:function(){return p(!l)}},o.createElement("i",{className:"volume__icon"},o.createElement("ion-icon",{name:"volume-high-outline"}))),o.createElement("div",{className:"volume__level ".concat(l?"show-volume-level":"")},o.createElement("label",{htmlFor:"volume-range"},o.createElement("input",{type:"range",id:"volume-range",className:"volume__range",min:"0",max:"1",value:y,step:"0.1",onChange:function(e){return h(Number(e.target.value))}}))))),o.createElement("div",{className:"kits"},t.kits.length>0?t.kits.map((function(e){return o.createElement("button",{key:e.id,id:e.id,type:"button",className:"kits__item ".concat(t.power?"kits__item_active":""," ").concat(e.selected&&t.power?"selected-kit":""," "),onClick:C},e.name)})):""))},b=function(e){var t=e.appState,a=e.selectedClip,r=c(o.useState([]),2),n=r[0],i=r[1],d=function(e){var r;switch(!0){case 81==e:r=document.getElementById("Q");break;case 87==e:r=document.getElementById("W");break;case 69==e:r=document.getElementById("E");break;case 65==e:r=document.getElementById("A");break;case 83==e:r=document.getElementById("S");break;case 68==e:r=document.getElementById("D");break;case 90==e:r=document.getElementById("Z");break;case 88==e:r=document.getElementById("X");break;case 67===e:r=document.getElementById("C");break;default:return}!0===t.power&&(r.play(),a(r.closest("button").name))};return o.useEffect((function(){var e,a=t.kits.find((function(e){return!0===e.selected})).tracks;i(function(e){if(Array.isArray(e))return u(e)}(e=a)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}),[t.kits]),o.useEffect((function(){Array.from(document.querySelectorAll(".clip")).forEach((function(e){return e.volume=t.volumeLevel}))}),[t.volumeLevel]),o.useEffect((function(){document.addEventListener("keydown",(function(e){d(e.keyCode)}))}),[]),o.createElement("main",{className:"main"},n.length>0?n.map((function(e){return o.createElement("button",{type:"button",key:e.keyCode,id:e.id,className:"drum-pad ".concat(t.power?"drumpad-active":""),name:e.audioName,onClick:function(e){d(Number(e.target.dataset.keycode))},"data-keycode":e.keyCode},o.createElement("audio",{id:e.buttonName,src:e.url,className:"clip"}),e.buttonName)})):"")},v=function(){var e=c(o.useReducer(h,l),2),t=e[0],a=e[1],r=c(o.useState(""),2),n=r[0],m=r[1];return o.createElement("div",{id:"drum-machine",className:"app"},o.createElement(k,{appState:t,togglePower:function(e){return a({type:p,playload:{power:e}})},getVolumeLevel:function(e){return a({type:f,playload:{volumeLevel:e}})},getSelectedKit:function(e){return a({type:y,playload:{id:e}})},clipName:n}),o.createElement(b,{appState:t,selectedClip:m}))};n.render(o.createElement(v,null),document.getElementById("root")),e.hot.accept()}},0,[[6981,666,216],[5579,666,216]]]);