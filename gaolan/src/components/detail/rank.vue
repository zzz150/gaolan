<template>
  <div class="Table">
    <table cellspacing="2" cellpadding="2">
      <tr style="color:#3486DA">
        <th class="tab_title">排名</th>
        <th class="tab_title">摊位号</th>
        <th class="tab_title">经营户</th>
        <th class="tab_title">交易量(kg)</th>
      </tr>
    </table>
    <vue-seamless-scroll
      :data="mydata"
      class="seamless-warp"
      :class-option="classOption"
    >
      <table cellspacing="2" cellpadding="2">
        <tr v-for="(item, index) in mydata" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.utilizationRate }}</td>
          <td>{{ item.distributionNum }}</td>
        </tr>
      </table>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import _getdata from '@/commit/market'
export default {
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      mydata: [
        {
          name: "330215488336",
          num: "1",
          utilizationRate: "华立峰",
          distributionNum: "185680.19"
        },
        {
          name: "330215488337",
          num: "2",
          utilizationRate: "王英彪",
          distributionNum: "185680.19"
        },
        {
          name: "330215488338",
          utilizationRate: "朱炳宣",
          num: "3",
          distributionNum: "185680.19"
        },
        {
          name: "330215488339",
          utilizationRate: "王真勇",
          num: "4",
          distributionNum: "185680.19"
        },
        {
          name: "330215488339",
          utilizationRate: "王真勇",
          num: "4",
          distributionNum: "185680.19"
        },
        {
          name: "330215488339",
          utilizationRate: "王真勇",
          num: "4",
          distributionNum: "185680.19"
        }
      ]
    };
  },
  computed:{
    classOption() {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 32, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted(){
    // this.get24total()

  },
  methods: {
     get24total(){
      var that = this;
      var data = {
        id:1410
      }
      _getdata.get24total(data).then(res =>{
        // console.log(res.data)
        if(res.data.return_code == 0){
          // that.mydata = res.data.datas
          // var name = []
          // that.partype.forEach(res => {
          //   name.push(res.name)
          // })
          // that.nameList = name
          // that.cai()
        }
      })
    },
  }
};
</script>

<style lang="scss">
.seamless-warp {
  width: 100%;
  overflow: hidden;
}
.Table {
  // border: 2px solid #3486da;
  color: white;
  font-weight: 500;
  width: 99%;
  line-height: 100%;
  overflow: hidden;
  // height:90%;
  table {
    width: 95%;
    margin-left: 15px;
    tr {
      width: 95%;
      th {
        font-size: 15px;
         width: 25%;
        height: 27px;
        line-height: 27px;
        text-align: center;
        // border: 1px solid  rgba(0,0,0,0);
        background-color: rgba(52, 134, 218, 0.7);
        color: #ffffff;
        font-weight: 600;
        // border:1px solid red;
      }
      td {
        width: 25%;
        height: 27px;
        line-height: 27px;
        text-align: center;
        background-color: rgba(34, 63, 132, 0.7);
        font-size: 14px;
      }
    }
  }
}
</style>