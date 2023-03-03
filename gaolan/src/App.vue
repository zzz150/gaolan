<template>
  <div id="app"  @mousemove="getMousePos">
    <!-- <img src="./assets/logo.png"> -->
     <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <img src="./assets/images/dela.png" alt="" class="zoomError" v-show="isShow" @click="toggleFullscreen">
    <router-view/>
  </div>
</template>

<script>
export default {
   name: 'App',
  data() {
    return {
      icon1:require("./assets/images/backgroundImg.png"),
      isShow:false,
       // 设置flag用于判断是否进入全屏
      flag:0
    }
  },
  methods:{
        getMousePos(event) {
          var e = event || window.event;
          var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
          var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
          var x = e.pageX || e.clientX + scrollX;
          var y = e.pageY || e.clientY + scrollY;
    //	    return { 'x': x, 'y': y };
          // console.log({'x':x,'y': y });
          if(y >150){
            this.isShow = false
          } if(y<10){
            this.isShow = true
          }
        },
          // 点击按钮触发的方法
    toggleFullscreen() {
      // this.flag++;
      // this.flag % 2 == 0
      //   ? this.outFullCreeen(document)
      //   : this.FullCreeen(document.documentElement);
         
        ipc.send('news') //注册的指令。send到主进程main.js中
    },
    // 进入全屏的方法
    FullCreeen(element) {
      let el = element;
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
        // Element.requestFullscreen() 此方法用于发出异步请求使元素进入全屏模式。
        // 调用此API并不能保证元素一定能够进入全屏模式。如果元素被允许进入全屏幕模式，
        // document对象会收到一个fullscreenchange事件，通知调用者当前元素已经进入全屏模式。如果全屏请求不被许可，则会收到一个fullscreenerror事件。
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
	//退出全屏的方法
    outFullCreeen(element) {
      let el = element;
      let cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
  },
  mounted(){
   
    // window.addEventListener('scroll', this.handleScrollx, true)
  }
}
</script>

<style>
body,html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('./assets/images/backgroundImg.png');
  background-size:100% 100%;
  background-repeat: no-repeat;
  /* text-align: center;
  color: #2c3e50; */
}
.zoomError{
  width: 60px;
  height: 60px;
  position: fixed;
  top: 70px;
  left: 48%;
  z-index: 1000;
  /* animation: cprighta 0.8s; */
  /* border: 1px solid #ffffff; */
  /* transition: 0.3s; */
  transition: all 1.5s ease;
}
.zoomError:target {left: 0px;top: 70px;}
@keyframes cprighta {
      from {
       top:0px;
      }
      to {
        top: 70px;
      }
      0% {
        opacity: 0; /*初始状态 透明度为0*/
        /* top:-70px; */
      }
      50% {
        opacity: 0.5; /*中间状态 透明度为0*/
        /* top: 40px; */
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
        /* top: 70px; */
      }
    }
</style>
