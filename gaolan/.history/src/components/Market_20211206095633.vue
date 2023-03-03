<template>
  <div>
    <Top></Top>
    <div class="title">杲村党群服务中心智慧数据平台</div>
    <div class="home">
      <div class="home_l">
        <!-- 场馆简介 -->
        <div class="home_tableone">
          <div class="home_table_cnt">
            <div class="jj_title">场馆简介</div>
            <div class="jj_cont">
              <vue-seamless-scroll
                :class-option="classOptions"
                :data="jianinfo"
                v-if="noxun"
              >
                <div class="quill-editor">
                  <div class="ql-container ql-snow">
                    <div
                      class="ql-editor"
                      v-html="item.brief"
                      v-for="(item, index) in jianinfo"
                      :key="index"
                    >
                      {{ item.brief }}
                    </div>
                  </div>
                </div>
              </vue-seamless-scroll>
              <div class="quill-editor">
                <div class="ql-container ql-snow">
                  <div
                    class="ql-editor"
                    v-html="item.brief"
                    v-for="(item, index) in jianinfo"
                    :key="index"
                    v-if="!noxun"
                  >
                    {{ item.brief }}
                  </div>
                </div>
              </div>
              <div class="content">
                <el-carousel
                  height="100%"
                  class="ss"
                  indicator-position="none"
                  :interval="20000"
                >
                  <el-carousel-item
                    v-for="(item, index) in jjimglist"
                    :key="index"
                    class="imss"
                  >
                    <img :src="item" alt="" />
                  </el-carousel-item>
                  <el-carousel-item
                    v-for="(item, index) in jjimglists[0]"
                    :key="index"
                    class="imss"
                  >
                    <img :src="item" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
        <!-- 场馆活动公告 -->
        <div class="home_tabletwo">
          <div class="home_table_cnt">
            <div class="gg_title">场馆活动公告</div>
            <div class="gg_cont" ref="getHeight">
              <vue-seamless-scroll
                :class-option="classOption"
                :data="gaoinfo"
                v-if="noxuna"
              >
                <div class="quill-editor">
                  <div class="ql-container ql-snow">
                    <div
                      class="ql-editor"
                      v-html="item.notice"
                      v-for="(item, index) in gaoinfo"
                      :key="index"
                    >
                      {{ item.notice }}
                    </div>
                  </div>
                </div>
              </vue-seamless-scroll>
              <div class="quill-editor">
                <div class="ql-container ql-snow">
                  <div
                    class="ql-editor"
                    v-html="item.notice"
                    v-for="(item, index) in gaoinfo"
                    :key="index"
                    v-if="!noxuna"
                  >
                    {{ item.notice }}
                  </div>
                </div>
              </div>
              <div class="content">
                <el-carousel
                  height="100%"
                  class="ss"
                  indicator-position="none"
                  :interval="20000"
                >
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                    class="imss"
                  >
                    <img :src="item" alt="" />
                  </el-carousel-item>
                  <el-carousel-item
                    v-for="(item, index) in imglists[0]"
                    :key="index"
                    class="imss"
                  >
                    <img :src="item" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_c">
        <div class="home_c_bar">
          <div class="info">
            <div class="info_title">场馆数量</div>
            <div class="info_num">{{ totalnum }}</div>
          </div>
          <div class="info">
            <div class="info_title">开放数量</div>
            <div class="info_num">{{ opennum }}</div>
          </div>
          <div class="info">
            <div class="info_title">今日人流</div>
            <div class="info_num">{{ renliu }}</div>
          </div>
        </div>
        <!-- 地图 -->
        <div class="home_c_bus">
          <iframe
            src=""
            frameborder="0"
            style="width:100%;height:100%;border-radius:20px;overflow: hidden;"
          ></iframe>

          <!-- <video id="video" width="100%" height="100%" preload>
                <source src="https://static.appstore.czfw.cn/video-jiayou2.mp4" type='video/mp4'>
      </video> -->
        </div>
        <div class="home_c_line">
          <div class="home_c_line_l">
            <div class="home_table_cnt">
              <div class="xc_title">政策宣传/通知</div>
              <div class="xc_cont">
                <vue-seamless-scroll
                  :class-option="classOptions"
                  :data="xcinfo"
                  v-if="noxuns"
                >
                  <div class="quill-editor">
                    <div class="ql-container ql-snow">
                      <div
                        class="ql-editor"
                        v-html="item.publicity"
                        v-for="(item, index) in xcinfo"
                        :key="index"
                      >
                        {{ item.publicity }}
                      </div>
                    </div>
                  </div>
                </vue-seamless-scroll>
                <div class="quill-editor">
                  <div class="ql-container ql-snow">
                    <div
                      class="ql-editor"
                      v-html="item.publicity"
                      v-for="(item, index) in xcinfo"
                      :key="index"
                      v-if="!noxuns"
                    >
                      {{ item.publicity }}
                    </div>
                  </div>
                </div>
                <div class="content">
                  <el-carousel
                    height="100%"
                    class="ss"
                    indicator-position="none"
                    :interval="20000"
                  >
                    <el-carousel-item
                      v-for="(item, index) in xcimg"
                      :key="index"
                      class="imss"
                    >
                      <img :src="item" alt="" />
                    </el-carousel-item>
                    <el-carousel-item
                      v-for="(item, index) in xcimgs[0]"
                      :key="index"
                      class="imss"
                    >
                      <img :src="item" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_r">
        <div class="home_tablethree">
          <div class="home_table_cnt">
            <div class="t_title">疫情防控人员检测</div>
            <div class="t_cont">
              <TableCheng></TableCheng>
            </div>
          </div>
        </div>
        <div class="home_tablefour">
          <div class="home_table_cnt">
            <div class="week">一周人流量分析图</div>
            <div class="week_cont">
              <tadayLine></tadayLine>
            </div>
          </div>
        </div>
        <div class="home_tablefive">
          <div class="home_table_cnt">
            <div class="year">全年人流量走势图</div>
            <div class="year_cont">
              <brokenLine></brokenLine>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from "vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import gramLine from "@/echarts/gram_lined";
import brokenLine from "./market/brokenLine";
import tableFrom from "@/echarts/table";
import Market from "../echarts/market.vue";
import tadayLine from "../echarts/tadayLine.vue";
import Bar from "../echarts/bar.vue";
import TableCheng from "./market/tableCheng.vue";
import Top from "./top.vue";
import Caipin from "./market/caipin.vue";
import _getdata from "@/commit/market";
// import orderData from '@/echarts/tadayLine';
import { PrefixZero } from "@/commit/history";
import vueSeamlessScroll from "vue-seamless-scroll";

import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import videoPlayer from "vue-video-player";
Vue.use(videoPlayer);

import "videojs-flash";
export default {
  name: "Home",
  components: {
    videoPlayer,
    gramLine,
    brokenLine,
    tableFrom,
    Market,
    tadayLine,
    Bar,
    TableCheng,
    Top,
    Caipin,
    vueSeamlessScroll
  },
  data() {
    return {
      videoSrc: "",
      // 视频播放
      videoOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/hls",
            // src: 'rtmp://150.138.213.138:20377/live/10100300_1010030001000_12221S3846KE_0_0?token=A5EE08E3434E8D8E3D6DCDEF02000000'
            src: "rtmp://58.200.131.2:1935/livetv/cctv1"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      marketList1: ["0", "0", "0", "5", "0"],
      marketList2: ["0", "2", "0", "5", "4", "3", "0", "0"],
      marketList3: ["0", "0", "0", "5", "0", "3"],
      partype: "",
      chengNum: 0,
      marketNum: 0,
      interval: null,
      mydata: [1],
      // text: [
      //   "活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公活动公告馆活动馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公告场馆活动公"
      // ],
      gaoinfo: [],
      screenX: "",
      imglist: [],
      imglists: [],
      jianinfo: [],
      jjimglist: [],
      jjimglists: [],
      xcinfo: [],
      xcimg: [],
      xcimgs: [],
      noxun: true,
      noxuna: true,
      noxuns: true,
      renliu: "",
      totalnum: "",
      opennum: ""
    };
  },
  mounted() {
    this.getRem();
    // console.log(this.$refs.getHeight.offsetHeight)

    // console.log(this.$refs.detailDom.offsetHeight)
    // console.log(document.getElementsByClassName("gg_cont").clientHeight);
    // console.log(document.getElementsByClassName("content")[1].clientHeight);
    this.gginfo();
    this.interval = setInterval(() => {
      setTimeout(this.gginfo, 0);
    }, 120000);
    this.jianjie();
    this.interval = setInterval(() => {
      this.jianjie();
    }, 60000);
    this.zcxuanchuan();
    this.interval = setInterval(() => {
      this.zcxuanchuan();
    }, 60000);
    this.todayliu();
    this.interval = setInterval(() => {
      this.todayliu();
    }, 120000);
    this.changguannum();
    this.interval = setInterval(() => {
      this.changguannum();
    }, 30000);
    window.frames[0].location = "http://1.194.233.154:8080/";
    // window.frames[0].location = "http://192.168.0.111:8080/";
  },
  beforeDestroy() {
    clearInterval(this.interval);
    this.interval = null;
    // console.log("beforDestroy");
  },
  computed: {
    classOption() {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0 // 单步运动停止的时间(默认值1000ms)
      };
    },
    classOptions() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  methods: {
    // 场馆数量
    changguannum() {
      var that = this;
      _getdata.cgnum().then(res => {
        // console.log(res)
        if (res.data.return_code == 0) {
          that.totalnum = res.data.datas[0].totalnum;
          that.opennum = res.data.datas[0].opennum;
        }
      });
    },
    // 今日人流
    todayliu() {
      var that = this;
      _getdata.toliu().then(res => {
        // console.log(res)
        if (res.data.return_code == 0) {
          that.renliu = res.data.datas[0].innum;
        }
      });
    },
    getRem() {
      // console.log('getRem');
      // const defaultRem = 16;
      // let winWidth = window.innerWidth;
      // console.log("winWidth:" + winWidth);
      // let rem = (winWidth / 375) * defaultRem;
      // console.log(rem);
      // return rem;
    },
    // 获取公告内容
    gginfo() {
      var that = this;
      that.imglist = [];
      that.imglists = [];
      _getdata.gonggaoinfo().then(res => {
        console.log(res)
        if (res.data.return_code == 0) {
          if (res.data.datas[0].state == 1) {
            that.gaoinfo = [];
            that.gaoinfo = res.data.datas;
            let jj = that.gaoinfo[0].notice;
            for (var i = 0; i < jj.length; i++) {
              // console.log(i)
              if (i > 150) {
                that.noxuna = true;
              } else {
                that.noxuna = false;
              }
            }
          } else if (res.data.datas[0].state == 2) {
            that.gaoinfo = [];
            if (
              res.data.datas[0].image != "" &&
              res.data.datas[0].image != null
            ) {
              that.imglist.push(res.data.datas[0].image);
            } else if (
              res.data.datas[0].images != "" &&
              res.data.datas[0].images != null
            ) {
              that.imglists.push(res.data.datas[0].images);
            }
          }
        }
      });
    },
    // 获取简介信息
    jianjie() {
      var that = this;
      that.jjimglist = [];
      that.jjimglists = [];
      _getdata.jianjieinfo().then(res => {
        // console.log(res);
        if (res.data.return_code == 0) {
          if (res.data.datas[0].state == 1) {
            that.jianinfo = [];
            that.jianinfo = res.data.datas;
            let cc = that.jianinfo[0].brief;
            for (var i = 0; i < cc.length; i++) {
              if (i > 100) {
                that.noxun = true;
              } else {
                that.noxun = false;
              }
            }
          } else if (res.data.datas[0].state == 2) {
            that.jianinfo = [];
            if (
              res.data.datas[0].image != "" &&
              res.data.datas[0].image != null
            ) {
              that.jjimglist.push(res.data.datas[0].image);
            } else if (
              res.data.datas[0].images != "" &&
              res.data.datas[0].images != null
            ) {
              that.jjimglists.push(res.data.datas[0].images);
            }
          }
        }
      });
    },
    // 获取政策宣传/通知
    zcxuanchuan() {
      var that = this;
      that.xcimg = [];
      that.xcimgs = [];
      _getdata.xctzinfo().then(res => {
        // console.log(res)
        if (res.data.return_code == 0) {
          if (res.data.datas[0].state == 1) {
            that.xcinfo = [];
            that.xcinfo = res.data.datas;
            let sx = that.xcinfo[0].publicity;
            for (var i = 0; i < sx.length; i++) {
              // console.log(i)
              if (i > 100) {
                that.noxuns = true;
              } else {
                that.noxuns = false;
              }
            }
            // console.log(that.xcinfo)
          } else if (res.data.datas[0].state == 2) {
            that.xcinfo = [];
            if (
              res.data.datas[0].image != "" &&
              res.data.datas[0].image != null
            ) {
              that.xcimg.push(res.data.datas[0].image);
            } else if (
              res.data.datas[0].images != "" &&
              res.data.datas[0].images != null
            ) {
              that.xcimgs.push(res.data.datas[0].images);
            }
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" >
.seamless {
  width: 100%;
  overflow: hidden;
}
.ql-container.ql-snow {
  border: none !important;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  color: white;
  font-size: 38px;
  width: 100%;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  letter-spacing: 2px;
  border:1px solid yellow;
  background-image: url('../assets/images/header.png');
  background-size:90%;
}
.home {
  width: 100%;
  height: 92%;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  justify-content: space-between;
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 7%;
  z-index: 100;
  // border: 1px solid red;
}
/* // 整体三部分 */
.home_l {
  width: 26%;
  height: 100%;
  .home_tableone {
    width: 100%;
    height: 50%;
    margin-bottom: 5%;
    margin-top: 2%;
    .home_table_cnt {
      width: 100%;
      height: 100%;
      background: url("../assets/images/jianjie.png") no-repeat;
      background-size: 100% 100%;
      .jj_title {
        height: 8%;
        color: white;
        display: flex;
        align-items: center;
        font-size: 23px;
        padding-left: 7%;
        font-weight:600;
      }
      .jj_cont {
        width: 94%;
        height: 85%;
        margin: 3% auto;
        color: black;
        font-size: 17px;
        font-weight: 700;
        line-height: 28px;
        // border:1px solid blue;
        overflow: hidden;
        .content {
          width: 100%;
          height: 100%;
          .ss {
            height: 100%;
            width: 100%;
            el-carousel-item {
              width: 100%;
              height: 100%;
            }
            .imss {
              width: 100%;
              height: 100%;
              // border:2px solid blue;
              img {
                // width:100%;
                height: 100%;
                display: flex;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
  .home_tabletwo {
    width: 100%;
    height: 45%;
    .home_table_cnt {
      width: 100%;
      height: 100%;
      background: url("../assets/images/gong.png") no-repeat;
      background-size: 100% 100%;
      .gg_title {
        height: 9%;
        color: white;
        display: flex;
        align-items: center;
        font-size: 23px;
        padding-left: 7%;
        font-weight:600;
      }
      .gg_cont {
        width: 94%;
        height: 84%;
        margin: 3% auto;
        color: black;
        font-size: 17px;
        font-weight: 700;
        line-height: 28px;
        overflow: hidden;
        // border:1px solid yellow;
        .content {
          width: 100%;
          height: 100%;
          // border:2px solid greenyellow;
          .ss {
            height: 100%;
            width: 100%;
            el-carousel-item {
              width: 100%;
              height: 100%;
            }
            .imss {
              width: 100%;
              height: 100%;
              // border:2px solid blue;
              img {
                // width:100%;
                height: 100%;
                display: flex;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
}
.home_c {
  flex: 1;
  // width: 44%;
  height: 100%;
  // border:1px solid #ffffff;
  padding: 0 15px;
  // border:1px solid green;
}
.home_r {
  width: 26%;
  height: 100%;
  .home_tablethree {
    width: 100%;
    height: 43%;
    margin-bottom: 3%;
    margin-top: 2%;
    .home_table_cnt {
      width: 100%;
      height: 100%;
      background: url("../assets/images/jiance.png") no-repeat;
      background-size: 100% 100%;
      .t_title {
        height: 9%;
        display: flex;
        align-items: center;
        color: white;
        padding-left: 4%;
        font-size: 22px;
        font-weight:600;
      }
      .t_cont {
        width: 96%;
        height: 86%;
        margin: 2% auto;
      }
    }
  }
  .home_tablefour {
    width: 100%;
    height: 26%;
    margin-bottom: 3%;
    .home_table_cnt {
      width: 100%;
      height: 100%;
      background: url("../assets/images/renliu.png") no-repeat;
      background-size: 100% 100%;
      .week {
        height: 16%;
        color: white;
        display: flex;
        align-items: center;
        font-size: 22px;
        padding-left: 4%;
        font-weight:600;
      }
      .week_cont {
        width: 92%;
        height: 70%;
        margin: 3% auto;
      }
    }
  }
  .home_tablefive {
    width: 100%;
    height: 25%;
    .home_table_cnt {
      width: 100%;
      height: 100%;
      background: url("../assets/images/renliu.png") no-repeat;
      background-size: 100% 100%;
      .year {
        height: 16%;
        color: white;
        display: flex;
        align-items: center;
        font-size: 22px;
        padding-left: 4%;
        font-weight:600;
      }
      .year_cont {
        width: 92%;
        height: 70%;
        margin: 3% auto;
      }
    }
  }
}
/* // 中间部分 */
.home_c_bar {
  width: 100%;
  height: 14%;
  display: flex;
  color: #ffffff;
  justify-content: space-around;
  align-items: center;
  .info {
    width: 26%;
    height: 70%;
    background: url("../assets/images/bg.png") no-repeat;
    background-size: 100% 100%;
    .info_title {
      width: 100%;
      height: 40%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 23px;
      letter-spacing: 1px;
    }
    .info_num {
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #b23c4c;
      font-size: 28px;
      font-weight: bold;
    }
  }
}
.home_c_bus {
  width: 100%;
  height: 51%;
  margin-bottom: 15px;
  padding: 10px 15px;
  box-sizing: border-box;
  // display:flex;
  // justify-content: space-between;
  // border:1px solid yellow;
  
}
.home_c_line {
  width: 100%;
  height: 32%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
// 中间底部
.home_c_line_l {
  width: 100%;
  height: 100%;
  // border:1px solid blue;
  .home_table_cnt {
    width: 100%;
    height: 100%;
    background: url("../assets/images/xuan.png") no-repeat;
    background-size: 100% 100%;
    .xc_title {
      height: 14%;
      display: flex;
      align-items: center;
      color: white;
      padding-left: 4%;
      font-size: 23px;
      font-weight:600;
    }
    .xc_cont {
      width: 95%;
      height: 72%;
      margin: 2% auto;
      color: black;
      font-size: 17px;
      font-weight: 700;
      line-height: 28px;
      overflow: hidden;
      // text-align:center;
      border: none;
      // .ql-container.ql-snow{
      //   border:none;
      // }
      .content {
        width: 100%;
        height: 100%;
        .ss {
          height: 100%;
          width: 100%;
          el-carousel-item {
            width: 100%;
            height: 100%;
          }
          .imss {
            width: 100%;
            height: 100%;
            // border:2px solid blue;
            img {
              // width:100%;
              height: 100%;
              display: flex;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
}
</style>
