(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-commons"],{a7ca:function(t,e,i){"use strict";var A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player-wrap"},[i("div",{ref:"container",attrs:{id:"container"}})])},o=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("7514"),i("bd86")),n=i("2f62");i("c5f6"),i("34ef"),i("a481"),i("28a5");function r(t){var e=this;if(this._opt=t,this._container=t.container,"string"===typeof t.container&&(this._container=document.querySelector(t.container)),!this._container)throw new Error("Jessibuca need container option");delete this._opt.container,this._canvasElement=document.createElement("canvas"),this._canvasElement.style.position="absolute",this._canvasElement.style.top=0,this._canvasElement.style.left=0,this._container.appendChild(this._canvasElement),this._container.style.overflow="hidden",this._containerOldPostion={position:this._container.style.position,top:this._container.style.top,left:this._container.style.left,width:this._container.style.width,height:this._container.style.height},"absolute"!==this._containerOldPostion.position&&(this._container.style.position="relative"),this._opt.videoBuffer=t.videoBuffer||0,this._opt.text=t.text||"",this._opt.isResize=!1!==t.isResize||t.isResize,this._opt.isFullResize=!0===t.isFullResize&&t.isFullResize,this._opt.isDebug=!0===t.debug,this._opt.timeout="number"===typeof t.timeout?t.timeout:30,this._opt.supportDblclickFullscreen=!0===t.supportDblclickFullscreen,this._opt.showBandwidth=!0===t.showBandwidth,this._opt.operateBtns=Object.assign({fullscreen:!1,screenshot:!1,play:!1,audio:!1},t.operateBtns||{}),this._opt.keepScreenOn=!0===t.keepScreenOn,this._opt.rotate="number"===typeof t.rotate?t.rotate:0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this._gainNode=this._audioContext.createGain(),this._audioEnabled(!0),t.isNotMute||this._audioEnabled(!1),this._onresize=function(){return e.resize()},this._onfullscreenchange=function(){return e._fullscreenchange()},window.addEventListener("resize",this._onresize),document.addEventListener("fullscreenchange",this._onfullscreenchange),this._decoderWorker=new Worker(t.decoder||"worker.js");var i=this;this._hasLoaded=!1,this._stats={buf:0,fps:0,abps:"",vbps:"",ts:""},this._audioPlayBuffers=[],this._opt.supportDblclickFullscreen&&this._canvasElement.addEventListener("dblclick",(function(){i.fullscreen=!i.fullscreen}),!1),this.onPlay=a,this.onPause=a,this.onRecord=a,this.onFullscreen=a,this.onMute=a,this.onLoad=a,this.onLog=a,this.onError=a,this.onTimeUpdate=a,this.onInitSize=a,this._onMessage(),this._initDom(),this._initStatus(),this._initEventListener(),this._hideBtns(),this._initWakeLock(),this._enableWakeLock()}function a(){}function c(){var t=document.fullscreenElement||window.webkitFullscreenElement||document.msFullscreenElement;return void 0===t&&(t=!1),!!t}function h(t){t.resume();var e=t.createBufferSource();e.buffer=t.createBuffer(1,1,22050),e.connect(t.destination),e.noteOn?e.noteOn(0):e.start(0)}function d(t,e){t&&(t.style.display=e?"block":"none")}function l(t){var e=t.split(","),i=atob(e[1]),A=e[0].replace("data:","").replace(";base64",""),o=i.length,s=new Uint8Array(o);while(o--)s[o]=i.charCodeAt(o);return new File([s],"file",{type:A})}function u(t,e){var i=document.createElement("a");i.download=e,i.href=URL.createObjectURL(t),i.click(),URL.revokeObjectURL(t)}function p(t){if(null==t||""===t)return"0 KB/S";var e=parseFloat(t),i=e/1024;return i=i.toFixed(2),i+"KB/S"}function g(t){var e=0;return t>=24?e=2:t>=15&&(e=1),e}function m(){return(new Date).getTime()}r.prototype._initDom=function(){var t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAARVJREFUSMe9laEOglAUhs+5k9lJFpsJ5QWMJoNGbEY0mEy+gr6GNo0a3SiQCegMRILzGdw4hl+Cd27KxPuXb2zA/91z2YXoGRERkX4fvN3A2QxUiv4dFM3n8jZRBLbbVfd+ubJuF4xjiCyXkksueb1uSKCIZYGLBTEx8ekEoV7PkICeVgs8HiGyXoO2bUigCDM4HoPnM7bI8wwJ6Gk0sEXbLSay30Oo2TQkoGcwgFCSQMhxDAvoETEscDiQkJC4LjMz8+XyZ4HrFYWjEQqHQ1asWGWZfmdFAsVINxuw00HhbvfpydpvxWkKTqdYaRCUfUPJCdzv4Gr1uqfli0tOIAzByUT/iCrL6+84y3Bw+D6ui5Ou+jwA8FnIO++FACgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAEl0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvYm9mYW5nLnN2Z8fICi0AAAAASUVORK5CYII=",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAHVJREFUSMftkCESwCAMBEOnCtdXVMKHeC7oInkEeQJXkRoEZWraipxZc8lsQqQZBACAlIS1oqGhhTCdu3oyxyyMcdRf79c5J7SWDBky+z4173rbJvR+VF/e/qwKqIAKqMBDgZyFzAQCoZTpxq7HLDyOrw/9b07l3z4dDnI2IAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMIo/vCcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDD7YgSbAAAASnRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9nZjcwMHM3YjNmdy96YW50aW5nLnN2ZxqNZJkAAAAASUVORK5CYII=",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAaxJREFUSMfNlLFOAkEQhmevAZMjR6OGRBJKsFBzdkYNpYSaWkopIOFRCBWh1ieA+ALGRgutjK0HzV2H5SX7W/zsmY3cnTEhcZovOzcz9+/s7Ir8d4OGht7fBwAgjvEri2OTl1ffSf0xAMBxRIkS1e3Se3+vcszEMe/6OqmT/aN2m1wsNu/o5YVsNHI7BgA4PCRfXzfXCwKy1RLbcXZG9nrkzc12jvT8nPU/PtatOThgAx8fuS4WyZ0de2e+T87n5OcnuVqRsxl5cpImQDnKUc7DA1fVqpimZCu+vCSjiNH9PlmpJNTQ0INBErfeafZRAakC6FWKfH9nwU7H/l6rGdqCOx3y7c3U+aOARsMMp+1vNskwTLjulB23XJL1epqA9OshIiKeJxAIoug7UyA4OuLi6Ynr52deu+NjOy4MSc9Ln8rMDpTLybBpaOjdXbJUIqdTm8a/t2fn/RSQewR24HicTLmGhnbdzcPquvYtGY3+PIR24UKBUXd35v6Sk4lN47+9NXm/FBAEedfGTjw9JYdDm76fm6+hoS8ujGAxT6L9Im7bTKeurvIEb92+AES1b6x283XSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABJdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L2NhbWVyYS5zdmeyubWEAAAAAElFTkSuQmCC",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAALZJREFUSMftVbsORUAQVSj8DomChvh3lU5CoSVCQq2RObeYu8XG3deVoHCak81kds7Oaz3vxRcAAMwztOg6vX9d6/3XFQQC+b7iAoFhYE7Tvx9EIFAcy/ftO3MQGAQkCfM4MmeZWyajiLnvmYuCeduMAuSzvRBVYNluFHCssSgFp7Sq9ALKkjnPf9ubRtkDL27HNT3QtsY9cAjsNAVheHIKBOwD2wpxFHDbJpwmaHH2L1iWx+2BDy8RbXXtqbRBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABTdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L3F1YW5waW5nenVpZGFodWEuc3ZnTBoI7AAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAYJJREFUSMfdVbGKwkAQnQn+geAfWBixUTsVgp3YGKxSWflVNmIjARULwc5KO40ipNHWRgs/wGLniucKa+Jd5ODuuGle5u3szGRmd5bor4iIiMhuB3Sc+HXXBdp2/Lpta7v4dccRJUrUdhtNQIkSVa3C8HwG1uumg34f2OnEB+h0tF1Sv5b+YIsttpZLEhKSdhvscPi8IXFF74GJiYnHY7Cex8zMvFgkbInjmJnv98kqoO30vmhLtaRMB60WtEbDNDudgMUiKiQSzfjOMzFxoQAyCPSfw7/nQZ/PUYnpNGV6OR6BmYzJbzYIoBQCzGaRBDQvJCTdLnTLolg5HN5t6f8V1h/oUT4PrVKJWBotmEzQw+vV3J9Ow851P2/BaoX9Yfh0BrJZYKlk8uUyHOpDeLuBHwzMBJtN2PV6IPUhXK9Nf5cLMAxfluanrmGkRBggtRo03wfq66P/6CsJAnOg+f6rgfZI4BGYiYlHIx048eR6krcnq34kkj1GuVz8+jceo9+SD5A8yGh8CTq7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABNdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L3p1aXhpYW9odWEuc3ZnoCFr0AAAAABJRU5ErkJggg==",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAR9JREFUSMfVlD0LglAYhe9VkwgNihpsjbYQf4JTS7+iuaGxpcGfJjS0NFRLk2NDi6MogafhJGRIX9yEzvJwrx/nvPd9VYh/F3LkyBuN2g3J1QoAgCQhPe/Hxq5Lo+0WlfJ9dYYAgGaTDAIyy/BUnwcwWJlhcLnZkN2ugIBAuy2kkEL2ep8F73S4kjfFcfn6cMj9KLodrWVBiXyf75tMyOOR+4MBOZ8XLXzorboA5UpnM/J0Ivd7+vX7xX2asqGpVKtFXi5sqWmypXefrfIWAACmU/JwKCoun8hu9zA0uk6u13wgirg+n7+bAcsibbt6SB3n9TQXPxwAwHJJpum7M6BcDDQa0SgMaw9QPkJNIxcLMo4ZcDz+eYDqQFLWbqxKV57EtW1WtMbmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAwij+8JwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0wOFQxNjo0Mjo1MyswODowMPtiBJsAAABKdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2dmNzAwczdiM2Z3L2ppbmd5aW4uc3ZnIlMYaQAAAABJRU5ErkJggg==",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAU5JREFUSMftkzGKwlAURf9PULBQwULSCKK1bZAgNuoaFFyAC3AdZg0uQCwshWzAShEEO7Gy0soUCu9Occ3An5nMGCfdzGsO7+Xy3/03iVL/lbAAACiVIBCI77O37Vi9QCDZbEqLm03ycEBUAoHk818v7nYpul5Jz4tf8HBKYa1mcjwmbzd8rG8NFIsU7ffk8UjmcjE3XK+RtB4G2PT75GbDeblMttumfjSKMRCGLxsQCKTReE9KIJDJxDw/SmKxiOZWWh+ntrSlre2WXRAorbTSrZapip7X66kbMKtQUFBQCENznsmQ93vqBhh5r8fO85jAcsnIrcce1yV3uxgD8zl5uZgU+dGBVlrp6GbTKRPwffaDAek45Gz2/M0AAJ0OeTol+w0rFYrOZ3K1MhNJEjEAwHF4cBA8Z8B1zcXV6msv+JMR2yaHQ1LrXx/8Z+sNRxsWcwZeb6UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAEt0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvc2hlbmd5aW4uc3ZnFog1MQAAAABJRU5ErkJggg==",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAPRJREFUSMflVDEOwjAQO0e8gr2sZYVunREbD6ISfAgmkBjpC/hBEQ+AtTWD6QAI0gBlqRfLp+TiXC5n1nXgMUCS5HBoNBqj6IOMMFwuEpsNAABl6d3HihWrOJaBsuRPkGW+c929HAxuYefb6L+R0ZgkMrJYiItCnCT1sl5Y1jwXj0bNniJNJWqujfX7LyrwJh8AYDxWgulU0dPp20IFlxoODm61kpE4VnS9/puBXyPYgH7LbKY3PhwUnUw+NdC4CdW9+71UgyZspwIBB9No3O0klktxUahyx+Pz+lYG0Xzu84lXRqTqwRQAGAzns8R223gUdxZXGcAK5Hp0ClIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6NDI6NTMrMDg6MDCKP7wnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjQyOjUzKzA4OjAw+2IEmwAAAE50RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fZ2Y3MDBzN2IzZncvbHV6aGlzaGlwaW4uc3Zn5Zd7GQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAahJREFUSMdjYBjpgBFd4NZK+f+soQYG//T+yzFuUFUl2cApjEWM/758UZvysPDn3127GBkZGBgY/v4l6ICb9xTWsRbp6/9f9W8N44Jz5xgCGI4wfGFiIttrR/5n/3/U3KyR8rj8t0RdHS5lcAv+//yXzzhZTY1ii2FAmsGZocna+maD3GnWY62tNzbJBbDOffLkxie5eJYwa2uYMhaigzb2/zyGguPH/y9mTGKYYGlJUIMiYxDjHCen/4oMDAxznJzg4k8Z/jP+l5LCCAFCQP30Y5dfXVZWDI7/zzIs8PNjNGJ4/7/r+XNKA4rkoNZ4/lj0V9TmzUxJv0J+F+jrM3YyvPq/acsWujmA2oBkB9y4LifLxhoa+teAzYFtwtWr/8sZxBj9fHxo7oCbprJ72MqOHWNgZGBkYFy1isGGoZahTFSU0hAgOhcQnfph4P7/df9T9u1jPMn4nyHmxIn/bAzLGe7GxTHsZyj+f+zpUwYGBmmG6bQsiMr+L/v/rqlJY9Njm9889fW4lGEUxXCHwAomUgH3vxBG8c+f1WWf9P98sns3oaJ4FAAAbtWqHTT84QYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMDhUMTY6MzU6MjMrMDg6MDBLHbvEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTA4VDE2OjM1OjIzKzA4OjAwOkADeAAAAE50RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fcTM1YTFhNHBtY2MvbHV6aGlzaGlwaW4uc3Zn6xlv1QAAAABJRU5ErkJggg==",c="data:image/gif;base64,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",h="data:image/png;base64,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";function d(t,e){Object.keys(e).forEach((function(i){t.style[i]=e[i]}))}var l={},u=document.createDocumentFragment(),p=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),f=document.createElement("div"),b=document.createElement("div"),w=document.createElement("div"),_=document.createElement("div"),y=document.createElement("div"),E=document.createElement("div"),D=document.createElement("div"),v=document.createElement("div"),B=document.createElement("div"),k=document.createElement("div"),O=document.createElement("div"),L=document.createElement("div"),C=document.createElement("div"),M=document.createElement("div"),U=document.createElement("div");k.innerText=this._opt.loadingText||"",f.innerText=this._opt.text||"",b.innerText="",w.title="播放",y.title="暂停",E.title="截屏",D.title="全屏",v.title="退出全屏",O.title="静音",L.title="取消静音",C.title="录制",M.title="取消录制";var R={height:"38px",zIndex:11,position:"absolute",left:0,bottom:0,width:"100%",background:"rgba(0,0,0)"},Y={position:"absolute",width:"100%",height:"100%"};this._opt.background&&(Y=Object.assign({},Y,{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",backgroundImage:"url('"+this._opt.background+"')"}));var j={position:"absolute",width:"100%",height:"100%",textAlign:"center",color:"#fff",display:"none",backgroundImage:"url('"+c+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"40px 40px"},G={position:"absolute",width:"100%",height:"100%",display:"none",background:"rgba(0,0,0,0.4)",backgroundImage:"url('"+h+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"48px 48px",cursor:"pointer"},z={position:"absolute",width:"100%",top:"60%",textAlign:"center"},S={position:"absolute",top:0,height:"100%",display:"flex",alignItems:"center"},x={display:"none",position:"relative",fontSize:"13px",color:"#fff",lineHeight:"20px",marginLeft:"5px",marginRight:"5px",userSelect:"none"},I={display:"none",position:"relative",width:"16px",height:"16px",marginLeft:"8px",marginRight:"8px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",cursor:"pointer"};d(U,Y),d(p,R),d(B,j),d(_,G),d(k,z),d(g,Object.assign({},S,{left:0})),d(m,Object.assign({},S,{right:0})),d(f,x),d(b,x),d(w,Object.assign({},I,{backgroundImage:"url('"+t+"')"})),d(y,Object.assign({},I,{backgroundImage:"url('"+e+"')"})),d(E,Object.assign({},I,{backgroundImage:"url('"+i+"')"})),d(D,Object.assign({},I,{backgroundImage:"url('"+A+"')"})),d(v,Object.assign({},I,{backgroundImage:"url('"+o+"')"})),d(O,Object.assign({},I,{backgroundImage:"url('"+s+"')"})),d(L,Object.assign({},I,{backgroundImage:"url('"+n+"')"})),d(C,Object.assign({},I,{backgroundImage:"url('"+r+"')"})),d(M,Object.assign({},I,{backgroundImage:"url('"+a+"')"})),B.appendChild(k),this._opt.text&&(g.appendChild(f),l.textDom=f),this._opt.showBandwidth&&(g.appendChild(b),l.speedDom=b),this._opt.operateBtns.screenshot&&(m.appendChild(E),l.screenshotsDom=E),this._opt.operateBtns.play&&(m.appendChild(w),m.appendChild(y),l.playDom=w,l.pauseDom=y),this._opt.operateBtns.audio&&(m.appendChild(L),m.appendChild(O),l.playAudioDom=L,l.quietAudioDom=O),this._opt.operateBtns.fullscreen&&(m.appendChild(D),m.appendChild(v),l.fullscreenDom=D,l.minScreenDom=v),p.appendChild(g),p.appendChild(m),u.appendChild(U),l.bgDom=U,u.appendChild(B),l.loadingDom=B,this._showControl()&&u.appendChild(p),this._opt.operateBtns.play&&(u.appendChild(_),l.playBigDom=_),this._container.appendChild(u),this._doms=l},r.prototype._initWakeLock=function(){var t=this;this._wakeLock=null;var e=this,i=function(){null!==t._wakeLock&&"visible"===document.visibilityState&&e._enableWakeLock()};document.addEventListener("visibilitychange",i),document.addEventListener("fullscreenchange",i)},r.prototype._enableWakeLock=function(){if(this._opt.keepScreenOn&&"wakeLock"in navigator){var t=this;navigator.wakeLock.request("screen").then((function(e){t._wakeLock=e,t._wakeLock.addEventListener("release",(function(){}))}))}},r.prototype._showControl=function(){var t=this,e=!1,i=!1;return Object.keys(this._opt.operateBtns).forEach((function(e){t._opt.operateBtns[e]&&(i=!0)})),(this._opt.showBandwidth||this._opt.text||i)&&(e=!0),e},r.prototype._onMessage=function(){var t=this;this._decoderWorker.onmessage=function(e){var i=e.data;switch(i.cmd){case"init":t._opt.isDebug&&console.log("decoder worker init"),t.setBufferTime(t._opt.videoBuffer),t._decoderWorker.postMessage({cmd:"init",opt:t._opt}),t._hasLoaded||(t._opt.isDebug&&console.log("has loaded"),t._hasLoaded=!0,t.onLoad(),t._trigger("load"));break;case"initSize":t._opt.isDebug&&console.log("initSize"),t._canvasElement.width=i.w,t._canvasElement.height=i.h,t.onInitSize(),t.resize(),t._trigger("videoInfo",{w:i.w,h:i.h}),t.supportOffscreen()?t.bitmaprenderer=t._canvasElement.getContext("bitmaprenderer"):t.render||(t.render=createWebGL(t._initContextGL()));break;case"render":t.loading&&(t.loading=!1,t.playing=!0,t._opt.isDebug&&console.log("clear check loading timeout"),t._clearCheckLoading()),t.playing&&(t.supportOffscreen()?t.bitmaprenderer.transferFromImageBitmap(i.buffer):t.render(t._canvasElement.width,t._canvasElement.height,i.output[0],i.output[1],i.output[2])),t._trigger("timeUpdate",i.ts),t.onTimeUpdate(i.ts),t._updateStats({bps:i.bps,ts:i.ts}),t._checkHeart();break;case"playAudio":t.playing&&!t.quieting&&(t._opt.isDebug&&console.log("playAudio,ts",i.ts),t._playAudio(i.buffer));break;case"print":t.onLog(i.text),t._trigger("log",i.text),t._opt.isDebug&&console.log(i.text);break;case"printErr":t.onLog(i.text),t._trigger("log",i.text),t.onError(i.text),t._trigger("error",i.text),t._opt.isDebug&&console.error(i.text);break;case"initAudioPlanar":t._opt.isDebug&&console.log("initAudioPlanar"),t._initAudioPlanar(i),t._trigger("audioInfo",{numOfChannels:i.channels,length:void 0,sampleRate:i.samplerate});break;default:t._opt.isDebug&&console.log(i),t[i.cmd](i)}}},r.prototype._initEventListener=function(){var t=this;this._doms.playDom&&this._doms.playDom.addEventListener("click",(function(e){e.stopPropagation(),t.play()}),!1),this._doms.playBigDom&&this._doms.playBigDom.addEventListener("click",(function(e){e.stopPropagation(),t.play()}),!1),this._doms.pauseDom&&this._doms.pauseDom.addEventListener("click",(function(e){e.stopPropagation(),t.pause()}),!1),this._doms.screenshotsDom&&this._doms.screenshotsDom.addEventListener("click",(function(e){e.stopPropagation();var i=t._opt.text+""+m();t._screenshot(i)}),!1),this._doms.fullscreenDom&&this._doms.fullscreenDom.addEventListener("click",(function(e){e.stopPropagation(),t.fullscreen=!0}),!1),this._doms.minScreenDom&&this._doms.minScreenDom.addEventListener("click",(function(e){e.stopPropagation(),t.fullscreen=!1}),!1),this._doms.recordDom&&this._doms.recordDom.addEventListener("click",(function(e){e.stopPropagation(),t.recording=!0}),!1),this._doms.recordingDom&&this._doms.recordingDom.addEventListener("click",(function(e){e.stopPropagation(),t.recording=!1}),!1),this._doms.quietAudioDom&&this._doms.quietAudioDom.addEventListener("click",(function(e){e.stopPropagation(),t.cancelMute()}),!1),this._doms.playAudioDom&&this._doms.playAudioDom.addEventListener("click",(function(e){e.stopPropagation(),t.mute()}),!1)},r.prototype.setDebug=function(t){this._opt.isDebug=!!t},r.prototype.mute=function(){this._audioEnabled(!1),this._audioPlayBuffers=[],this.quieting=!0},r.prototype.cancelMute=function(){this._audioEnabled(!0),this.quieting=!1},r.prototype.audioResume=function(){this.cancelMute()},r.prototype.setRotate=function(t){t=parseInt(t,10);var e=[0,90,270];this._opt.rotate!==t&&-1!==e.indexOf(t)&&(this._opt.rotate=t,this.resize())},r.prototype._initStatus=function(){this._loading=!0,this.loading=!0,this._recording=!1,this.recording=!1,this._playing=!1,this.playing=!1,this._audioPlaying=!1,this._quieting=!this._opt.isNotMute,this.quieting=!this._opt.isNotMute,this._fullscreen=!1,this.fullscreen=!1},r.prototype._initBtns=function(){d(this._doms.pauseDom,!0),d(this._doms.screenshotsDom,!0),d(this._doms.fullscreenDom,!0),d(this._doms.quietAudioDom,!0),d(this._doms.textDom,!0),d(this._doms.speedDom,!0),d(this._doms.recordDom,!0),d(this._doms.loadingDom,!1),d(this._doms.playDom,!1),d(this._doms.playBigDom,!1),d(this._doms.bgDom,!1)},r.prototype._hideBtns=function(){var t=this;Object.keys(this._doms).forEach((function(e){"bgDom"!==e&&d(t._doms[e],!1)}))},r.prototype._updateStats=function(t){t=t||{},this._startBpsTime||(this._startBpsTime=m());var e=m(),i=e-this._startBpsTime;if(i<1e3)return this._bps+=t.bps||0,this._stats.fps+=1,void(this._stats.vbps+=parseInt(t.bps||0));this._stats.ts=t.ts,this._doms.speedDom&&(this._doms.speedDom.innerText=p(this._bps)),this._trigger("bps",this._bps),this._trigger("stats",this._stats),this._trigger("performance",g(this._stats.fps)),this._bps=0,this._stats.fps=0,this._stats.vbps=0,this._startBpsTime=e},r.prototype._checkHeart=function(){this._checkHeartTimeout&&(clearTimeout(this._checkHeartTimeout),this._checkHeartTimeout=null);var t=this;this._checkHeartTimeout=setTimeout((function(){t._opt.isDebug&&console.log("check heart timeout"),t._trigger("timeout"),t.recording=!1,t.playing=!1,t._close()}),1e3*this._opt.timeout)},r.prototype._checkLoading=function(){this._checkLoadingTimeout&&(clearTimeout(this._checkLoadingTimeout),this._checkLoadingTimeout=null);var t=this;this._checkLoadingTimeout=setTimeout((function(){t._opt.isDebug&&console.log("check loading timeout"),t._trigger("timeout"),t.playing=!1,t._close(),d(t._doms.loadingDom,!1)}),1e3*this._opt.timeout)},r.prototype._clearCheckLoading=function(){this._checkLoadingTimeout&&(clearTimeout(this._checkLoadingTimeout),this._checkLoadingTimeout=null)},r.prototype._initCheckVariable=function(){this._startBpsTime="",this._bps=0,this._checkHeartTimeout&&(clearTimeout(this._checkHeartTimeout),this._checkHeartTimeout=null)},r.prototype._closeAudio=function(){},r.prototype._initAudioPlanar=function(t){var e=t.channels,i=(t.samplerate,this._audioContext);if(this._audioPlaying=!1,!i)return!1;var A=this;this._playAudio=function(t){var o=[t],s=t[0].length,n=i.createScriptProcessor(s,0,e);n.onaudioprocess=function(t){if(o.length)for(var i=o.shift(),A=0;A<e;A++)for(var n=t.outputBuffer.getChannelData(A),r=0;r<s;r++)n[r]=i[A][r]},n.connect(A._gainNode),A._closeAudio=function(){n.disconnect(A._gainNode),A._gainNode.disconnect(i.destination),delete A._closeAudio,o=[]},A._gainNode.connect(i.destination),A._playAudio=function(t){o.push(t),o.length>5&&o.shift()}}},r.prototype._audioEnabled=function(t){t?(h(this._audioContext),this._audioEnabled=function(t){t?this._audioContext.resume():this._audioContext.suspend()}):this._audioContext.suspend()},r.prototype._isDebug=function(){return this._opt.isDebug},r.prototype.supportOffscreen=function(){return!this._opt.forceNoOffscreen&&"function"==typeof this._canvasElement.transferControlToOffscreen},r.prototype.setTimeout=function(t){"number"===typeof t&&(this._opt.timeout=Number(t))},r.prototype.setScaleMode=function(t){0===t?(this._opt.isFullResize=!1,this._opt.isResize=!1):1===t?(this._opt.isFullResize=!1,this._opt.isResize=!0):2===t&&(this._opt.isFullResize=!0),this.resize()},r.prototype.setVod=function(t){this._opt.vod=t,this._decoderWorker.postMessage({cmd:"init",opt:this._opt})},r.prototype.setNoOffscreen=function(t){this._opt.forceNoOffscreen=t,this._decoderWorker.postMessage({cmd:"init",opt:this._opt})},r.prototype._initContextGL=function(){var t=this._canvasElement,e=null,i=["webgl","experimental-webgl","moz-webgl","webkit-3d"],A=0;while(!e&&A<i.length){var o=i[A];try{var s={preserveDrawingBuffer:!0};this._opt.contextOptions&&(s=Object.assign(s,this._opt.contextOptions)),e=t.getContext(o,s)}catch(n){e=null}e&&"function"===typeof e.getParameter||(e=null),++A}return e},r.prototype.pause=function(){this._close(),this.loading&&d(this._doms.loadingDom,!1),this.recording=!1,this.playing=!1},r.prototype._close=function(){this._closeAudio(),this._audioPlayBuffers=[],this._audioPlaying=!1,delete this._playAudio,this._decoderWorker.postMessage({cmd:"close"}),this._wakeLock&&(this._wakeLock.release(),this._wakeLock=null),this._initCheckVariable()},r.prototype.close=function(){this._close(),this.clearView()},r.prototype.destroy=function(){this._close(),this._decoderWorker.terminate(),window.removeEventListener("resize",this._onresize),window.removeEventListener("fullscreenchange",this._onfullscreenchange),this._initCheckVariable(),this._clearCheckLoading(),this._off(),this._hasLoaded=!1;while(this._container.firstChild)this._container.removeChild(this._container.firstChild);this._wakeLock&&this._wakeLock.release()},r.prototype.clearView=function(){this._contextGL&&this._contextGL.clear(this._contextGL.COLOR_BUFFER_BIT)},r.prototype.play=function(t){if(this.playUrl||t){var e=!1;if(t?(this.playUrl&&(this._close(),e=!0,this.clearView()),this.loading=!0,d(this._doms.bgDom,!1),this._checkLoading(),this.playUrl=t):this.playUrl&&(this.loading?(this._hideBtns(),d(this._doms.fullscreenDom,!0),d(this._doms.pauseDom,!0),d(this._doms.loadingDom,!0),this._checkLoading()):this.playing=!0),this._initCheckVariable(),e){var i=this;setTimeout((function(){i._decoderWorker.postMessage({cmd:"play",url:i.playUrl})}),300)}else this._decoderWorker.postMessage({cmd:"play",url:this.playUrl})}},r.prototype.hasLoaded=function(){return this._hasLoaded},Object.defineProperty(r.prototype,"fullscreen",{set:function(t){t?(c()||this._container.requestFullscreen(),d(this._doms.minScreenDom,!0),d(this._doms.fullscreenDom,!1)):(c()&&document.exitFullscreen(),d(this._doms.minScreenDom,!1),d(this._doms.fullscreenDom,!0)),this._fullscreen!==t&&(this.onFullscreen(t),this._trigger("fullscreen",t)),this._fullscreen=t},get:function(){return this._fullscreen}}),Object.defineProperty(r.prototype,"playing",{set:function(t){t?(d(this._doms.playBigDom,!1),d(this._doms.playDom,!1),d(this._doms.pauseDom,!0),d(this._doms.screenshotsDom,!0),d(this._doms.recordDom,!0),this._quieting?(d(this._doms.quietAudioDom,!0),d(this._doms.playAudioDom,!1)):(d(this._doms.quietAudioDom,!1),d(this._doms.playAudioDom,!0))):(this._doms.speedDom&&(this._doms.speedDom.innerText=""),this.playUrl&&(d(this._doms.playDom,!0),d(this._doms.playBigDom,!0),d(this._doms.pauseDom,!1)),d(this._doms.recordDom,!1),d(this._doms.recordingDom,!1),d(this._doms.screenshotsDom,!1),d(this._doms.quietAudioDom,!1),d(this._doms.playAudioDom,!1)),this._playing!==t&&(t?(this.onPlay(),this._trigger("play")):(this.onPause(),this._trigger("pause"))),this._playing=t},get:function(){return this._playing}}),Object.defineProperty(r.prototype,"recording",{set:function(t){t?(d(this._doms.recordDom,!1),d(this._doms.recordingDom,!0)):(d(this._doms.recordDom,!0),d(this._doms.recordingDom,!1)),this._recording!==t&&(this.onRecord(t),this._trigger("record",t),this._recording=t)},get:function(){return this._recording}}),Object.defineProperty(r.prototype,"quieting",{set:function(t){t?(d(this._doms.quietAudioDom,!0),d(this._doms.playAudioDom,!1)):(d(this._doms.quietAudioDom,!1),d(this._doms.playAudioDom,!0)),this._quieting!==t&&(this.onMute(t),this._trigger("mute",t)),this._quieting=t},get:function(){return this._quieting}}),Object.defineProperty(r.prototype,"loading",{set:function(t){t?(this._hideBtns(),d(this._doms.fullscreenDom,!0),d(this._doms.pauseDom,!0),d(this._doms.loadingDom,!0)):this._initBtns(),this._loading=t},get:function(){return this._loading}}),r.prototype.resize=function(){var t=this._container.clientWidth,e=this._container.clientHeight;this._showControl()&&(e-=38);var i=this._canvasElement.width,A=this._canvasElement.height,o=this._opt.rotate,s=t/i,n=e/A,r=s>n?n:s;this._opt.isResize||s!==n&&(r=s+","+n),this._opt.isFullResize&&(r=s>n?s:n);var a="scale("+r+")";o&&(a+=" rotate("+o+"deg)"),this._opt.isDebug&&console.log("wScale",s,"hScale",n,"scale",r,"rotate",o),this._canvasElement.style.transform=a,this._canvasElement.style.left=(t-i)/2+"px",this._canvasElement.style.top=(e-A)/2+"px"},r.prototype._fullscreenchange=function(){this.fullscreen=c()},r.prototype.changeBuffer=function(t){this._stats.buf=1e3*Number(t),this._decoderWorker.postMessage({cmd:"setVideoBuffer",time:Number(t)})},r.prototype.setBufferTime=function(t){this.changeBuffer(t)},r.prototype.setVolume=function(t){if(this._gainNode){if(t=parseFloat(t),isNaN(t))return;this._isDebug()&&console.log("set volume:",t),this._gainNode.gain.setValueAtTime(t,this._audioContext.currentTime)}},r.prototype.setKeepScreenOn=function(){this._opt.keepScreenOn=!0},r.prototype.setFullscreen=function(t){var e=!!t;this.fullscreen!==e&&(this.fullscreen=e)},r.prototype._screenshot=function(t,e,i){t=t||m();var A={png:"image/png",jpeg:"image/jpeg",webp:"image/webp"},o=.92;"undefined"!==typeof i&&(o=Number(i));var s=this._canvasElement.toDataURL(A[e]||A.png,o);u(l(s),t)},r.prototype.screenshot=function(t,e,i){this._screenshot(t,e,i)};var f=/\s+/;function b(t,e,i){if(t)for(var A=0,o=t.length;A<o;A+=1)t[A].apply(i,e)}r.prototype.on=function(t,e){var i,A,o;if(!e)return this;i=this.__events||(this.__events={}),t=t.split(f);while(A=t.shift())o=i[A]||(i[A]=[]),o.push(e);return this},r.prototype._off=function(){return this.__events?(delete this.__events,this):this},r.prototype._trigger=function(t){var e,i,A,o,s,n=[];if(!(e=this.__events))return this;for(t=t.split(f),o=1,s=arguments.length;o<s;o++)n[o-1]=arguments[o];while(i=t.shift())(A=e[i])&&(A=A.slice()),b(A,n,this);return this};var w=i("4ec3"),_=i("ed08");function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);e&&(A=A.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,A)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var D={name:"JessicaPlayer",jessibuca:null,data:function(){return{}},props:{streamPath:{type:String,default:""}},computed:E({},Object(n["b"])({plugins:function(t){return t.plugins}})),mounted:function(){this.create()},methods:{create:function(){var t=this,e=new r({container:this.$refs.container,videoBuffer:.2,loadingText:"加载中"});e.onLog=function(t){return console.error(t)},e.onLoad=function(){t.play(),t.$emit("doPlayed")},e.on("timeout",(function(){console.log("timeout"),t.$message({type:"error",message:"播放超时"})})),this.$options.jessibuca=e},play:function(){if(this.streamPath){var t=this.getJessibucaHref(),e=t+this.streamPath;this.$options.jessibuca&&this.$options.jessibuca.play(e)}},getJessibucaHref:function(){var t=w["a"].jessibucaHref,e=this.plugins.find((function(t){return"Jessica"===t.Name}));if(e){var i=Object(_["k"])(e.Config);i.ListenAddrTLS&&"https:"===location.protocol?t="wss://"+location.hostname+":"+i.ListenAddrTLS+"/jessica/":i.ListenAddr&&(t="ws://"+location.hostname+":"+i.ListenAddr+"/jessica/")}return t}},destroyed:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy()}},v=D,B=(i("c41f"),i("2877")),k=Object(B["a"])(v,A,o,!1,null,"deaa5e70",null);e["a"]=k.exports},c267:function(t,e,i){},c41f:function(t,e,i){"use strict";i("c267")}}]);