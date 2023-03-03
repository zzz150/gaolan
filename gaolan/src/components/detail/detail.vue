<template>
  <div id="page">
    <Top></Top>
    <div id="one">
      <div id="left">
        <div class="left_one">
          <div class="now_c">区域实时交易情况</div>
          <div style="width:100%;height:100%;">
            <div class="now">
              <div class="now_b">
                <div class="now_d">
                  <img src="../../assets/images/jiaoyi.png" alt="">
                </div>
                <div class="now_e">
                  <div class="now_f">交易额</div>
                  <div class="now_g">512300元</div>
                </div>
              </div>
              <div class="now_b">
                <div class="now_d">
                  <img src="../../assets/images/jiaoyishu.png" alt="">
                </div>
                <div class="now_e">
                  <div class="now_f">交易数</div>
                  <div class="now_g">512300元</div>
                </div>
              </div>
              <div class="now_b">
                <div class="now_d">
                  <img src="../../assets/images/liang.png" alt="">
                </div>
                <div class="now_e">
                  <div class="now_f">交易量</div>
                  <div class="now_g">512300元</div>
                </div>
              </div>
              <div class="now_b">
                <div class="now_d">
                  <img src="../../assets/images/liang.png" alt="">
                </div>
                <div class="now_e">
                  <div class="now_f">商户数</div>
                  <div class="now_g">5123</div>
                </div>
              </div>
              <div class="now_b">
                <div class="now_d">
                  <img src="../../assets/images/liang.png" alt="">
                </div>
                <div class="now_e">
                  <div class="now_f">电子秤数</div>
                  <div class="now_g">512</div>
                </div>
              </div>
            </div>

            <div class="now_a"></div>

            </div>


        </div>
        <div class="left_two">
          <div class="left_three">
            <div class="rank">
              <div class="rank_a"></div>
              <div class="rank_b">近一年交易情况</div>
            </div>
            <div class="jiaoyi">
              <Jiaoyi></Jiaoyi>
            </div>
          </div>
          <div class="left_three">
            <!-- 交易走势图 -->
            <div class="rank">
              <div class="rank_a"></div>
              <div class="rank_b">交易分时走势图</div>
            </div>
            <div class="jiaoyi_a">
              <Zoushi></Zoushi>
            </div>
          </div>
        </div>
      </div>

      <div id="right">
        <div class="right_one">
          <div class="rank">
            <div style="display:flex;align-items:center;">
            <div class="rank_a"></div>
            <div class="rank_b">体温检测变化</div>
            </div>
            <!-- <div class="rank_c">
              <div
                class="rank_d"
                v-for="(item, index) in list"
                :key="index"
                @click="tab(index)"
                :class="{ active: num == index }"
              >
                {{ item }}
              </div>
            </div> -->
          </div>
          <div class="yi">
            <Tiwen></Tiwen>
            <!-- <div v-show="num == 0" class="yi_a">
              <div class="yi_b">
                <div class="yi_c">交易额</div>
                <p>（元）</p>
                <div class="home_c_num">
                  <div
                    class="home_c_num_cnt"
                    v-for="(item, ind) in marketList1"
                    :key="ind"
                    v-if="ind < 9"
                    :class="{
                      'number-item': !isNaN(item),
                      'mark-item': isNaN(item)
                    }"
                  >
                    <span v-if="!isNaN(item)">
                      <i ref="numberItem1">0123456789</i>
                    </span>
                    <span class="comma" v-else>{{ item }}</span>
                  </div>
                </div>
              </div>
              <div class="yi_b">
                <div class="yi_c">交易数</div>
                <p>（笔）</p>
                <div class="home_c_num">
                  <div
                    class="home_c_num_cnt"
                    v-for="(item, ind) in marketList2"
                    :key="ind"
                    v-if="ind < 9"
                    :class="{
                      'number-item': !isNaN(item),
                      'mark-item': isNaN(item)
                    }"
                  >
                    <span v-if="!isNaN(item)">
                      <i ref="numberItem2">0123456789</i>
                    </span>
                    <span class="comma" v-else>{{ item }}</span>
                  </div>
                </div>
              </div>
              <div class="yi_b">
                <div class="yi_c">交易量</div>
                <p>（kg）</p>
                <div class="home_c_num">
                  <div
                    class="home_c_num_cnt"
                    v-for="(item, ind) in marketList3"
                    :key="ind"
                    v-if="ind < 9"
                    :class="{
                      'number-item': !isNaN(item),
                      'mark-item': isNaN(item)
                    }"
                  >
                    <span v-if="!isNaN(item)">
                      <i ref="numberItem3">0123456789</i>
                    </span>
                    <span class="comma" v-else>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div> -->
            <div v-show="num == 1" class="yi_a"></div>
            <div v-show="num == 2" class="yi_a"></div>
          </div>
        </div>

        <div class="right_two">
          <div class="rank">
            <div style="display:flex;align-items:center;">
            <div class="rank_a"></div>
            <div class="rank_b">热销菜品排名Top5</div>
            </div>
            <div class="rank_c">（单位:kg）</div>
          </div>
          <div class="caipin">
            <Caipin></Caipin>
          </div>
        </div>

        <div class="right_three">
          <!-- 营业额排名 -->
          <div class="rank">
            <div class="rank_a"></div>
            <div class="rank_b">今日营业额排名Top10</div>
          </div>
          <div class="rank_c">
            <Rank></Rank>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/top";
import Rank from "./rank.vue";
import Jiaoyi from "./jiaoyi.vue";
import Zoushi from "./zoushi.vue";
import Caipin from "./caipin.vue";
import gramLine from "../../echarts/gram_lined.vue";
import Tiwen from "./tiwen.vue";
export default {
  name: "page",
  components: {
    Top,
    Rank,
    Jiaoyi,
    Zoushi,
    Caipin,
    gramLine,
    Tiwen
  },
  data() {
    return {
      list: ["本日", "本月", "本年"],
      num: 0,
      marketList1: ["0", "0", "0", "5", "0"],
      marketList2: ["0", "2", "0", "5", "4", "3", "0", "0"],
      marketList3: ["0", "0", "0", "5", "0", "3"]
    };
  },
  mounted() {
    this.setNumberTransform();
    this.setNumberTransform2();
    this.setNumberTransform3();
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    // 设置文字滚动
    setNumberTransform() {
      //  /实时交易数
      const numberItems = this.$refs.numberItem1; // 拿到数字的ref，计算元素数量
      var numberArr = this.marketList1.filter(item => !isNaN(item));
      // console.log(numberArr)
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    },
    setNumberTransform2() {
      // 本月交易量
      const numberItems = this.$refs.numberItem2; // 拿到数字的ref，计算元素数量
      var numberArr = this.marketList2.filter(item => !isNaN(item));
      // console.log(numberArr)
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    },
    setNumberTransform3() {
      // 本月交易量
      const numberItems = this.$refs.numberItem3; // 拿到数字的ref，计算元素数量
      var numberArr = this.marketList3.filter(item => !isNaN(item));
      // console.log(numberArr)
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    }
  }
};
</script>

<style lang="scss" >
#one {
  width: 100%;
  height: 96%;
  display: flex;
  padding-top: 85px;
  box-sizing: border-box;
  color: white;
  justify-content: space-around;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 999;
}
#left {
  width: 63%;
  height: 100%;
  .left_one {
    width: 100%;
    height: 60%;
    background: url("../../assets/images/bg_border.png");
    background-size: 100% 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .now_c{
      width:2%;
      text-align:center;
      font-size:16px;
      color:#23ffff;
      margin-left:1.3%;
    }
    .now{
      // width:25%;
      // height:100%;
      display:flex;
      padding-top:2%;
      .now_b{
        width:20%;
        height:22%;
        // margin-top:12%;
        display:flex;
        align-items: center;
        // justify-content: space-between;
        .now_d{
          width:22%;
          height:68%;
          margin-left:10%;
          img{
            width:100%;
            height:100%;
            display:flex;
          }
        }
        .now_e{
          margin-left:15%;
          .now_f{
            color:white;
            font-size:17px;
          }
          .now_g{
            color:#71ffff;
            font-size:18px;
            margin-top:8px;
          }
        }
      }
    }
    .now_a{
      width:92%;
      height:71%;
      border:1px solid white;
      margin-left:5%;
      margin-top:2%;
    }
  }
  .left_two {
    width: 100%;
    height: 36.5%;
    margin-top: 1.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_three {
      width: 49%;
      height: 100%;
      background: url("../../assets/images/bg_border.png");
      background-size: 100% 100%;
      .rank {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        .rank_a {
          width: 4px;
          height: 13px;
          background: #28fafb;
          margin-left: 15px;
        }
        .rank_b {
          margin-left: 7px;
          font-size: 16px;
          color: #7decff;
        }
      }
      .jiaoyi {
        width: 100%;
        height:86%;
        margin-top: 5px;
        color: white;
      }
      .jiaoyi_a {
        width:100%;
        height:86%;
        color: white;
      }
    }
  }
}
#right {
  width: 33%;
  height: 100%;
  .right_one {
    width: 100%;
    height: 30%;
    background: url("../../assets/images/bg_border.png");
    background-size: 100% 100%;
    .rank {
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rank_a {
        width: 4px;
        height: 13px;
        background: #28fafb;
        margin-left: 15px;
      }
      .rank_b {
        margin-left: 7px;
        font-size: 16px;
        color: #7decff;
      }
      .rank_c {
        width: 140px;
        height: 25px;
        color: white;
        font-size: 13px;
        display: flex;
        align-items: center;
        margin-right: 30px;
        border-radius: 5px;
        border: 1px solid #4c8fd5;
        .rank_d {
          width: 33%;
          height: 100%;
          border-right: 1px solid #4c8fd5;
          text-align: center;
          line-height: 25px;
          color: white;
        }
        .active {
          background: #1fcdff;
        }
      }
    }
    .yi {
      width:100%;
      height:100%;
      // border:1px solid yellow;
      .yi_a {
        width: 92%;
        margin-left: 2.5%;
        height:100%;
        .yi_b {
          width: 100%;
          display: flex;
          align-items: center;
          height:33%;
          .yi_c {
            font-size: 16px;
          }
          .home_c_num {
            display: flex;
            margin-left:15px;
            .home_c_num_cnt {
              width: 32px;
              height: 30px;
              margin-left: 1px;
              // background-color: #5CBDFC;
              background-image: url("../../assets/images/num.png");
              background-size: 100% 100%;
              line-height: 30px;
            }
          }
          .number-item {
            // width: 41px;
            // height: 75px;
            list-style: none;
            margin-right: 5px;
            border-radius: 4px;
            // border:1px solid rgba(221,221,221,1);
            & > span {
              position: relative;
              display: inline-block;
              margin-right: 10px;
              width: 100%;
              height: 100%;
              writing-mode: vertical-rl;
              text-orientation: upright;
              overflow: hidden;
              & > i {
                font-style: normal;
                position: absolute;
                top: 8px;
                left: 50%;
                transform: translate(-50%, 0);
                transition: transform 1s ease-in-out;
                letter-spacing: 10px;
              }
            }
          }
        }
      }
    }
  }
  .right_two {
    width: 100%;
    height: 32%;
    background: url("../../assets/images/bg_border.png");
    background-size: 100% 100%;
    margin-top: 3%;
    .rank {
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rank_a {
        width: 4px;
        height: 13px;
        background: #28fafb;
        margin-left: 15px;
      }
      .rank_b {
        margin-left: 7px;
        font-size: 16px;
        color: #7decff;
      }
      .rank_c {
        color: white;
        font-size: 16px;
        margin-right: 30px;
      }
    }
    .caipin {
      width:100%;
      height:100%;
    }
  }
  .right_three {
    width: 100%;
    height: 33%;
    margin-top: 2%;
    background: url("../../assets/images/bg_border.png");
    background-size: 100% 100%;
    overflow: hidden;
    .rank {
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      .rank_a {
        width: 4px;
        height: 13px;
        background: #28fafb;
        margin-left: 15px;
      }
      .rank_b {
        margin-left: 7px;
        font-size: 16px;
        color: #7decff;
      }
    }
    .rank_c {
      margin-top: 5px;
    }
  }
}
</style>