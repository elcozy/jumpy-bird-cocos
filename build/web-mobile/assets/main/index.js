System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,o,n,e,r,s,a,h,p,d,l,u,c;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,n=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,a=i.CCFloat,h=i.RigidBody2D,p=i.CircleCollider2D,d=i.Animation,l=i.Vec3,u=i.tween,c=i.Component}],execute:function(){var g,m,y,f,b,v,j;r._RF.push({},"27f497v4BZLr5XnWgimds1j","Bird",void 0);var C=s.ccclass,w=s.property;i("Bird",(g=C("Bird"),m=w({type:a,tooltip:"how high does he fly?"}),y=w({type:a,tooltip:"how long does he fly?"}),g((v=t((b=function(i){function t(){for(var t,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r))||this,n(t,"jumpHeight",v,e(t)),n(t,"jumpDuration",j,e(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t.hitSomething=void 0,t.startedFlying=!1,t}o(t,i);var r=t.prototype;return r.onLoad=function(){this.resetBird(),this.getComponent(h).awakeOnLoad=!0,this.getComponent(p).sensor=!0,this.getComponent(h).enabled=!1,this.birdAnimation=this.getComponent(d)},r.resetBird=function(){this.birdLocation=new l(0,0,0),this.node.setPosition(this.birdLocation),this.hitSomething=!1},r.fly=function(){var i=this;this.startedFlying||(this.getComponent(h).enabled=!0,this.startedFlying=!0),this.birdAnimation.stop(),console.log("jump",this.node.position.y,this.jumpHeight),u(this.node.position).to(this.jumpDuration,new l(this.node.position.x,this.node.position.y+this.jumpHeight,0),{easing:"smooth",onUpdate:function(t,o){i.node.position=t}}).start(),this.birdAnimation.play()},t}(c)).prototype,"jumpHeight",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),j=t(b.prototype,"jumpDuration",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),f=b))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/BirdAudio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,o,r,t,n,u,c,l,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){n=e.cclegacy,u=e._decorator,c=e.AudioClip,l=e.AudioSource,a=e.Component}],execute:function(){var p,s,d,f,y,h,A;n._RF.push({},"3088c0fmCJMx6VK2FJojcSJ","BirdAudio",void 0);var b=u.ccclass,g=u.property;e("BirdAudio",(p=b("BirdAudio"),s=g({type:[c],tooltip:"place audio clip here"}),d=g({type:l,tooltip:"place audio node here"}),p((h=i((y=function(e){function i(){for(var i,o=arguments.length,n=new Array(o),u=0;u<o;u++)n[u]=arguments[u];return i=e.call.apply(e,[this].concat(n))||this,r(i,"clips",h,t(i)),r(i,"audioSource",A,t(i)),i}return o(i,e),i.prototype.onAudioQueue=function(e){this.clips[e]},i}(a)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=i(y.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Results.ts","./Bird.ts","./PipePool.ts","./BirdAudio.ts"],(function(e){var t,i,r,o,n,s,u,l,a,p,c,d,h,f,b,y,g,m,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,u=e.Component,l=e.CCInteger,a=e.director,p=e.input,c=e.Input,d=e.Node,h=e.KeyCode,f=e.Collider2D,b=e.Contact2DType},function(e){y=e.Results},function(e){g=e.Bird},function(e){m=e.PipePool},function(e){v=e.BirdAudio}],execute:function(){var C,A,O,S,P,w,G,k,B,_,z,E,Q,T,D,K,I;n._RF.push({},"03e89I7PitIeoKAmIEGNUrk","GameCtrl",void 0);var R=s.ccclass,L=s.property;e("GameCtrl",(C=R("GameCtrl"),A=L({type:u,tooltip:"Add ground prefab owner here"}),O=L({type:l,tooltip:"Change the speed of ground"}),S=L({type:l,tooltip:"Change the speed of pipes"}),P=L({type:y,tooltip:"Add results here"}),w=L({type:g,tooltip:"Add Bird node"}),G=L({type:m,tooltip:"Add canvas here"}),k=L({type:v,tooltip:"add audio controller"}),C((z=t((_=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,r(t,"ground",z,o(t)),r(t,"speed",E,o(t)),r(t,"pipeSpeed",Q,o(t)),r(t,"result",T,o(t)),r(t,"bird",D,o(t)),r(t,"pipeQueue",K,o(t)),r(t,"clip",I,o(t)),t.isOver=void 0,t}i(t,e);var n=t.prototype;return n.onLoad=function(){this.initListener(),this.result.resetScore(),this.isOver=!0,a.pause()},n.onClickOrSpace=function(){1==this.isOver&&(this.resetGame(),this.bird.resetBird(),this.startGame()),0==this.isOver&&(this.bird.fly(),this.clip.onAudioQueue(0))},n.initListener=function(){var e=this;p.on(c.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(d.EventType.TOUCH_START,(function(){e.onClickOrSpace()}))},n.onKeyDown=function(e){switch(e.keyCode){case h.KEY_A:this.gameOver();break;case h.KEY_P:this.result.addScore();break;case h.SPACE:this.onClickOrSpace();break;case h.KEY_Q:this.resetGame(),this.bird.resetBird()}},n.gameOver=function(){this.result.showResult(),this.isOver=!0,this.clip.onAudioQueue(3),a.pause()},n.startGame=function(){this.result.hideResult(),a.resume()},n.resetGame=function(){this.result.resetScore(),this.pipeQueue.reset(),this.isOver=!1},n.passPipe=function(){this.result.addScore(),this.clip.onAudioQueue(1)},n.createPipe=function(){this.pipeQueue.addPool()},n.contactGroundPipe=function(){var e=this.bird.getComponent(f);e&&e.on(b.BEGIN_CONTACT,this.onBeginContact,this)},n.onBeginContact=function(e,t,i){this.bird.hitSomething=!0,console.log("bird hit something"),this.clip.onAudioQueue(2)},n.birdStruck=function(){this.contactGroundPipe(),1==this.bird.hitSomething&&this.gameOver()},n.update=function(){0==this.isOver&&this.birdStruck()},t}(u)).prototype,"ground",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=t(_.prototype,"speed",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),Q=t(_.prototype,"pipeSpeed",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),T=t(_.prototype,"result",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(_.prototype,"bird",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=t(_.prototype,"pipeQueue",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(_.prototype,"clip",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=_))||B));n._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameCtrl.ts"],(function(t){var i,o,e,n,r,a,s,h,p,u,d;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,h=t.UITransform,p=t.Vec3,u=t.Component},function(t){d=t.GameCtrl}],execute:function(){var c,m,l,g,S,L,x,f,y,b,v;r._RF.push({},"d54a1uCERVB1bU98oqO5R+N","Ground",void 0);var w=a.ccclass,G=a.property;t("Ground",(c=w("Ground"),m=G({type:s,tooltip:"Ground 1 is here"}),l=G({type:s,tooltip:"Ground 2 is here"}),g=G({type:s,tooltip:"Ground 3 is here"}),S=G({type:s,tooltip:"Ground 4 is here"}),c((f=i((x=function(t){function i(){for(var i,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return i=t.call.apply(t,[this].concat(r))||this,e(i,"ground1",f,n(i)),e(i,"ground2",y,n(i)),e(i,"ground3",b,n(i)),e(i,"ground4",v,n(i)),i.groundWidth=void 0,i.tempStartLocation1=new p,i.tempStartLocation2=new p,i.tempStartLocation3=new p,i.tempStartLocation4=new p,i.gameCtrlSpeed=new d,i.gameSpeed=void 0,i}o(i,t);var r=i.prototype;return r.onLoad=function(){this.startUp()},r.startUp=function(){this.gameSpeed=this.gameCtrlSpeed.speed,this.groundWidth=this.ground1.getComponent(h).width,this.tempStartLocation1.x=0,this.tempStartLocation2.x=this.groundWidth,this.tempStartLocation3.x=2*this.groundWidth,this.tempStartLocation4.x=3*this.groundWidth,this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3),this.ground4.setPosition(this.tempStartLocation4)},r.update=function(t){this.tempStartLocation1=this.ground1.position,this.tempStartLocation2=this.ground2.position,this.tempStartLocation3=this.ground3.position,this.tempStartLocation4=this.ground4.position,this.tempStartLocation1.x-=this.gameSpeed*t,this.tempStartLocation2.x-=this.gameSpeed*t,this.tempStartLocation3.x-=this.gameSpeed*t,this.tempStartLocation4.x-=this.gameSpeed*t;var i=function(t){if(!t.length)return null;for(var i=t[0],o=1;o<t.length;o++)t[o]>i&&(i=t[o]);return i}([this.tempStartLocation1.x,this.tempStartLocation2.x,this.tempStartLocation3.x,this.tempStartLocation4.x])+this.groundWidth;this.tempStartLocation1.x<=-this.groundWidth&&(this.tempStartLocation1.x=i),this.tempStartLocation2.x<=-this.groundWidth&&(this.tempStartLocation2.x=i),this.tempStartLocation3.x<=-this.groundWidth&&(this.tempStartLocation3.x=i),this.tempStartLocation4.x<=-this.groundWidth&&(this.tempStartLocation4.x=i),this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3),this.ground4.setPosition(this.tempStartLocation4)},i}(u)).prototype,"ground1",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=i(x.prototype,"ground2",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=i(x.prototype,"ground3",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=i(x.prototype,"ground4",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=x))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Bird.ts","./BirdAudio.ts","./GameCtrl.ts","./Ground.ts","./PipePool.ts","./Pipes.ts","./Results.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PipePool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var o,i,t,r,p,l,n,a,s,c,P;return{setters:[function(e){o=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){p=e.cclegacy,l=e._decorator,n=e.Prefab,a=e.Node,s=e.instantiate,c=e.NodePool,P=e.Component}],execute:function(){var u,h,f,d,b,y,m;p._RF.push({},"7d65af8tPtC1r+dROtMVaql","PipePool",void 0);var v=l.ccclass,g=l.property;e("PipePool",(u=v("PipePool"),h=g({type:n,tooltip:"The prefab of pipes"}),f=g({type:a,tooltip:"Where the new pipes go"}),u((y=o((b=function(e){function o(){for(var o,i=arguments.length,p=new Array(i),l=0;l<i;l++)p[l]=arguments[l];return o=e.call.apply(e,[this].concat(p))||this,t(o,"prefabPipes",y,r(o)),t(o,"pipePoolHome",m,r(o)),o.pool=new c,o.createPipe=null,o}i(o,e);var p=o.prototype;return p.initPool=function(){for(var e=0;e<3;e++){var o=s(this.prefabPipes);0==e?this.pipePoolHome.addChild(o):this.pool.put(o)}},p.addPool=function(){this.pool.size()>0?this.createPipe=this.pool.get():this.createPipe=s(this.prefabPipes),this.pipePoolHome.addChild(this.createPipe)},p.reset=function(){this.pipePoolHome.removeAllChildren(),this.pool.clear(),this.initPool()},o}(P)).prototype,"prefabPipes",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=o(b.prototype,"pipePoolHome",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=b))||d));p._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,p,s,n,a,r,h,c,d,m;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,p=t.assertThisInitialized},function(t){s=t.cclegacy,n=t._decorator,a=t.Node,r=t.find,h=t.UITransform,c=t.Vec3,d=t.screen,m=t.Component}],execute:function(){var P,l,u,S,f,b,v;s._RF.push({},"54223m7ZkBNWIpA65On3clY","Pipes",void 0);var y=n.ccclass,g=n.property,L=function(t,i){return Math.random()*(i-t)+t};t("Pipes",(P=y("Pipes"),l=g({type:a,tooltip:"Top Pipe"}),u=g({type:a,tooltip:"Bottom Pipe"}),P((b=i((f=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return i=t.call.apply(t,[this].concat(s))||this,o(i,"topPipe",b,p(i)),o(i,"bottomPipe",v,p(i)),i.tempStartLocation=new c(0,0,0),i.scene=d.windowSize,i.game=void 0,i.pipeSpeed=void 0,i.tempSpeed=void 0,i.pipeWidth=void 0,i.bottomPipeY=void 0,i.hasPassedBird=void 0,i}e(i,t);var s=i.prototype;return s.onLoad=function(){this.game=r("GameCtrl").getComponent("GameCtrl"),this.pipeSpeed=this.game.pipeSpeed,this.initPos(),this.hasPassedBird=!1},s.initPos=function(){this.tempStartLocation.x=this.scene.width,this.pipeWidth=this.bottomPipe.getComponent(h).width;var t=L(300,380),i=L(20,400);this.tempStartLocation.y=i,this.bottomPipeY=i-t,this.topPipe.setPosition(this.tempStartLocation.x,i),this.bottomPipe.setPosition(this.tempStartLocation.x,i-t)},s.update=function(t){this.tempSpeed=this.pipeSpeed*t,this.tempStartLocation=this.topPipe.position,this.tempStartLocation.x-=this.tempSpeed,this.bottomPipe.setPosition(this.tempStartLocation.x,this.bottomPipeY),this.topPipe.setPosition(this.tempStartLocation),this.topPipe.position.x<=this.scene.width/2&&!this.hasPassedBird&&(this.hasPassedBird=!0,this.game.passPipe()),this.topPipe.position.x<=2.2*-this.pipeWidth&&(this.game.createPipe(),this.destroy())},i}(m)).prototype,"topPipe",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=i(f.prototype,"bottomPipe",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=f))||S));s._RF.pop()}}}));

System.register("chunks:///_virtual/Results.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,o,c,n,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){c=e.cclegacy,n=e._decorator,s=e.Label,l=e.Component}],execute:function(){var a,u,h,p,S,d,g,f,b;c._RF.push({},"e364eMm6PtP4rxcXBGLTrd3","Results",void 0);var y=n.ccclass,v=n.property;e("Results",(a=y("Results"),u=v({type:s,tooltip:"Current Score"}),h=v({type:s,tooltip:"High Score"}),p=v({type:s,tooltip:"Try Again?"}),a((g=t((d=function(e){function t(){for(var t,r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return t=e.call.apply(e,[this].concat(c))||this,i(t,"scoreLabel",g,o(t)),i(t,"highScore",f,o(t)),i(t,"resultEnd",b,o(t)),t.maxScore=0,t.currentScore=void 0,t}r(t,e);var c=t.prototype;return c.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},c.resetScore=function(){this.updateScore(0),this.hideResult(),this.scoreLabel.string=""+this.currentScore},c.addScore=function(){this.updateScore(this.currentScore+1)},c.showResult=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highScore.string="High Score is: "+this.maxScore,this.highScore.node.active=!0,this.resultEnd.node.active=!0},c.hideResult=function(){this.highScore.node.active=!1,this.resultEnd.node.active=!1},t}(l)).prototype,"scoreLabel",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=t(d.prototype,"highScore",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(d.prototype,"resultEnd",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=d))||S));c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});