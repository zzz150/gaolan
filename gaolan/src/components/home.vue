<template>
  <div id="home">
    <div id="around">
      <div id="around_a">
        <div class="around_b">
          <div class="left_one">
          <router-link to="/header" class="aa">
            <div class="one_a">首页</div>
          </router-link>
          </div>
          <div class="left_two">
            <div class="one_a">应急指挥</div>
          </div>
          <div class="left_three">
            <div class="one_a">生产管理</div>
          </div>
          <div class="left_four">
            <div class="one_a">工程管理</div>
          </div>
          <div class="left_five">
            <div class="one_a">外业管理</div>
          </div>
        </div>

        <div id="around_c">
          <div id="diqiu-box">
            <div class="diqu">
              <img src="../assets/images/qiu4.png" alt="" />
              <img src="../assets/images/qiu1.png" alt="" class="xkzd" />
              <img src="../assets/images/qiu2.png" alt="" class="dqzd" />
              <img src="../assets/images/qiu3.png" alt="" />
            </div>
            <div class="bottom">
              <div class="bottom_a">
                <img src="../assets/images/di1.png" alt="" />
              </div>
              <div class="bottom_b">
                <img src="../assets/images/di2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="around_d">
          <div class="right_one">
            <div class="one_a">人力资源</div>
          </div>
          <div class="right_two">
            <div class="one_a">财务管理</div>
          </div>
          <div class="right_three">
            <div class="one_a">营业收费</div>
          </div>
          <div class="right_four">
            <div class="one_a">DMA分析</div>
          </div>
          <div class="right_five">
            <div class="one_a">服务热线</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.aa{
  text-decoration:none;
  }
#around {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  color: white;
  box-sizing: border-box;
  #around_a {
    width: 100%;
    height: 76%;
    margin: auto;
    padding-top: 10%;
    float: left;
    box-sizing: border-box;
    .around_b {
      width: 25%;
      // height: 100%;
      position: absolute;
      left: 4%;

      // top: 12%;
      animation: cpleft 0.7s linear forwards;
      .left_one {
        width: 67%;
        height: 10%;
        margin-left: 60%;
        margin-top: 8%;
        background-image: url("../assets/dong/left_one.png");
        background-size: 100% 100%;
        text-align: center;
        line-height: 100%;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .left_one:hover{
        background-image: url("../assets/dong2/left_one.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .left_two {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: 50%;
        background-image: url("../assets/dong/left_two.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .left_two:hover{
        background-image: url("../assets/dong2/left_two.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .left_three {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: 45%;
        background-image: url("../assets/dong/left_three.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .left_three:hover{
        background-image: url("../assets/dong2/left_three.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .left_four {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: 50%;
        background-image: url("../assets/dong/left_four.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .left_four:hover{
        background-image: url("../assets/dong2/left_four.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .left_five {
        width: 67%;
        height: 10%;
        margin-left: 65%;
        margin-top: 8%;
        background-image: url("../assets/dong/left_five.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .left_five:hover{
        background-image: url("../assets/dong2/left_five.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0; /*初始状态 透明度为0*/
      }
      50% {
        opacity: 0.5; /*中间状态 透明度为0*/
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
      }
    }
    #around_c {
      width: 40%;
      // height: 100%;
      position: absolute;
      // top: 20%;
      left: 30%;
      -webkit-animation-name: fadeIn; /*动画名称*/
      -webkit-animation-duration: 0.7s; /*动画持续时间*/
      -webkit-animation-iteration-count: 1; /*动画次数*/
      -webkit-animation-delay: 0s; /*延迟时间*/
      //   float:left;
      #diqiu-box {
        margin: 0 auto;
        width: 40vw;
        height: 40vw;
      }
      .diqu {
        width: 25vw;
        height: 25vw;
        margin: 0 auto;
        position: relative;
      }
      .bottom {
        width: 100%;
        height: 15%;
        position: relative;
       animation: cpbottom 0.7s linear forwards;
        .bottom_a {
          width: 13vw;
          height: 2vw;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
        .bottom_b {
          width: 22vw;
          height: 5vw;
          margin: 0 auto;
          position: absolute;
          left: 23%;
          top: -10px;
          //   z-index:999;
          img {
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
        //   margin:0 auto;
      }
      .diqu img {
        position: absolute;
        width: 100%;
        height: 100%;
        float: left;
      }
      .dqzd {
        animation: dqzd 10s linear infinite;
      }
      .xkzd {
        animation: dqzd 50s linear infinite;
      }
      @keyframes dqzd {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    @keyframes cpbottom {
      from {
        margin-top: 200px;
      }
      to {
        bottom: 0px;
      }
      0% {
        opacity: 0; /*初始状态 透明度为0*/
      }
      50% {
        opacity: 0.5; /*中间状态 透明度为0*/
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
      }
    }
    .around_d {
      width: 25%;
      // height: 100%;
      margin-right: 3%;
      position: absolute;
      // top: 12%;
      right: 0;
      animation: cpright 0.7s linear forwards;
      .right_one {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: -30%;
        background-image: url("../assets/dong/right_one.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .right_one:hover{
        background-image: url("../assets/dong2/right_one.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .right_two {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: -20%;
        background-image: url("../assets/dong/right_two.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .right_two:hover{
        background-image: url("../assets/dong2/right_two.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .right_three {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: -15%;
        background-image: url("../assets/dong/right_three.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .right_three:hover{
        background-image: url("../assets/dong2/right_three.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .right_four {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: -20%;
        background-image: url("../assets/dong/right_four.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .right_four:hover{
        background-image: url("../assets/dong2/right_four.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
      .right_five {
        width: 67%;
        height: 10%;
        margin-top: 8%;
        margin-left: -35%;
        background-image: url("../assets/dong/right_five.png");
        background-size: 100% 100%;
        text-align: center;
        .one_a {
          font-size: 20px;
          color: greenyellow;
          line-height: 380%;
          text-align-last: justify;
          text-align: justify;
          text-justify: distribute-all-lines;
          padding-left: 50px;
          padding-right: 60px;
        }
      }
      .right_five:hover{
        background-image: url("../assets/dong2/right_five.png");
        background-size: 100% 100%;
        .one_a:hover{
          color:orange;
        }
      }
    }
    @keyframes cpleft {
      from {
        margin-left: 200px;
      }
      to {
        margin-left: 0px;
      }
    }
    @keyframes cpright {
      from {
        margin-right: 260px;
      }
      to {
        margin-right: 45px;
      }
    }
  }
}
</style>