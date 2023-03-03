<template>
  <div class="table_today">
      <div class="table_today_l">
          <div class="table_today_l_num">
              <div>总批次</div>
              <div>231</div>
          </div>
          <div class="table_today_l_num">
              <div>抽检批次</div>
              <div>171</div>
          </div>
          <div class="table_today_l_num">
              <div>合格率</div>
              <div>89%</div>
          </div>
      </div>
      <div class="table_today_r">
        <table cellspacing ="0" cellpadding ="0">
        <tr style="color:#3486DA;border: 1px solid #ffffff;">
            <th class="tab_title" >摊位号</th>
            <th class="tab_title">商品名称</th>
            <th class="tab_title">检测项</th>
            <!-- <th class="tab_title">检测值</th> -->
            <th class="tab_title">检测结果</th>
            <th class="tab_title"  style="width:30%">发布时间</th>
        </tr>
         </table>
         <vue-seamless-scroll
              :data="mydata"
              class="seamless-warp"
              :class-option="classOption"
            >
        <table cellspacing ="0" cellpadding ="0">
        <!-- <tr style="color:#3486DA;border: 1px solid #ffffff;">
            <th class="tab_title" style="width:20%">摊位号</th>
            <th class="tab_title">商品名称</th>
            <th class="tab_title">检测项</th>
            <th class="tab_title">检测值</th>
            <th class="tab_title">检测结果</th>
            <th class="tab_title">发布时间</th>
        </tr> -->
       
        <tr v-for="(item,index) in mydata" :key="index" style="border: 1px dashed #ffffff;width:100%">
            <td class="tab_title">{{item.mechantNum}}</td>
            <td class="tab_title">{{item.cdname}}</td>
            <td class="tab_title">{{item.chkproject}}</td>
            <!-- <td class="tab_title">{{item.chkresult}}</td> -->
            <td class="tab_title" :class="item.chkresult == '0'? 'heg_coloe':'no_heg_coloe'">{{item.chkresult == '0'? '合格':'不合格'}}</td>
            <td class="" style="width:30%">{{item.chkdate}}</td>
        </tr>
        
        </table>
        </vue-seamless-scroll>
      </div>
   
  </div>
</template>

<script>
import _getdata from '@/commit/market'
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  data() {
    return {
      mydata: [
        { name: "1324243324",
          num: '丰乐市场',
          state: "2131", 
          statenum:'13',  
          statecus:'合格',  
          statetime:'2020-11-21',  
        },{ name: "2346576567",
           num: '中州大道农贸市场',
          state: "21321", 
           statenum:'13',  
          statecus:'合格',  
          statetime:'2020-11-21', 
        },{ name: "3677876877",
           num: '文苑市场',
          state: "2131", 
           statenum:'13',  
          statecus:'合格',  
          statetime:'2020-11-21', 
        },{ name: "4234425451",
          num: '文苑市场',
          state: "6575",
           statenum:'13',  
          statecus:'不合格',  
          statetime:'2020-11-21',  
        },{ name: "4234425451",
          num: '文苑市场',
          state: "6575",
           statenum:'13',  
          statecus:'不合格',  
          statetime:'2020-11-21',  
        }
        
      ]
    };
  },
  components: {
    vueSeamlessScroll
  },
  computed:{
    classOption() {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 36, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted(){
    this.getcheckinfo()
  },
  methods:{
      getcheckinfo(){//获取快检数据
      var that = this;
      var data = {
        id:1410
      }
      _getdata.getcheckinfo(data).then(res =>{
        // console.log(res.data,"//获取快检数据")
        if(res.data.return_code == 0){
          that.mydata = res.data.datas
        }
      })
    }
  }
};
</script>
<style scoped lang='scss'>
// @import '../../assets/css/echarts.scss';
.seamless-warp {
  width: 100%;
  overflow: hidden;
}
.table_today {
  // border: 2px solid #3486da;
  color: white;
  font-weight: 500;
  width: 99%;
  line-height: 100%;
  display: flex;
//   border: 1px solid red;
  padding:10px 20px;
  box-sizing: border-box;
  font-size: 15px;
  .table_today_l{
      width: 15%;
      margin-right: 3%;
      .table_today_l_num{
      // border: 1px solid #fff;
      margin-bottom: 3%;
      display: flex;
      flex-direction:column;
     background: url("../assets/images/border1.png") no-repeat;
      background-size: 100% 100%;
    //   flex-wrap: wrap;
      height: 32%;
      align-items: center;
      justify-content:center;
      &>div{
          width: 100%;
          text-align: center;
      }
    &>div:last-child{
          margin-top: 10px;
      }
      }
  }
  .table_today_r{
      flex: 1;
      height: 215px;
      overflow: hidden;
  }
  table {
    width: 100%;
    background-color: rgba(17,41,101,0.5);
    tr {
      width: 100%;
      
      th{
        font-size: 15px; 
        width: 16%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        
        background-color: rgba(34,63,132,0.7);
        color: #ffffff;
        font-weight: 600;
      }
      td {
        width: 16%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-bottom: 1px  dashed rgba(34,63,132,0.7);
        font-size: 14px;
      }
    }
  }
}
.heg_coloe{
    color: #99FBFF;
    font-weight: 600;
}
.no_heg_coloe{
    color: #FF106E;
    font-weight: 600;

}
</style>