<template>
  <div class="Table">
    <table cellspacing ="2" cellpadding ="2">
      <tr style="color:#3486DA">
        <th class="tab_title" >市场名称</th>
        <th class="tab_title">使用率</th>

        <th class="tab_title">使用数量</th>
        <th class="tab_title">配发数量</th>
      </tr>
      <tr v-for="(item,index) in mydata" :key="index">
        <td>{{item.agencyName}}</td>
        <td>{{item.userRate}}%</td>

        <td>{{item.usenum}}</td>
        <td>{{item.bindnum}}</td>
      </tr>
      
    </table>
  </div>
</template>

<script>
import _getdata from '../commit/getdata';
export default {
  data() {
    return {
      mydata: [
        { name: "324",
          num: '纬四路农贸市场',
          utilizationRate:'100%',
          distributionNum: "2131", 
        },{ name: "234",
           num: '经八路农贸市场',
          utilizationRate:'100%',
          distributionNum: "21321", 
        },{ name: "3",
          utilizationRate:'100%',
           num: '多之彩市场',
          distributionNum: "2131", 
        },{ name: "4",
          utilizationRate:'100%',
          num: '燕庄农贸市场',
          distributionNum: "6575", 
        }
        
      ]
    };
  },
  mounted(){
    this.chenglist()
  },
  methods:{
    chenglist(){
      var that = this
      var data ={
        id:1457,
        page:1,
        limit:5,
      }
      _getdata.cheng(data).then(res =>{
        that.mydata = res.data.datas.list
      })
    }
  }
};
</script>
<style scoped lang='scss'>
// @import '../../assets/css/echarts.scss';
.Table {
  // border: 2px solid #3486da;
  color: white;
  font-weight: 500;
  width: 99%;
  line-height: 100%;
  table {
    width: 100%;
    tr {
      width: 100%;
      th{
        font-size: 15px; 
        //  width: 20%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        // border: 1px solid  rgba(0,0,0,0);
        background-color: rgba(52,134,218,0.7);
        color: #ffffff;
        font-weight: 600;
      }
      td {
        // width: 25%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: rgba(34,63,132,0.7);
        font-size: 14px;
      }
    }
  }
}
.tab_title{
 
}
</style>