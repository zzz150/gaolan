<template>
  <div class="Table">
    <table cellspacing ="2" cellpadding ="2">
      <tr style="color:#3486DA">
        <th class="tab_title" style="width:20%">排名</th>
        <th class="tab_title">菜场名称</th>
        <th class="tab_title">交易量（kg）</th>
      </tr>
      <tr v-for="(item,index) in mydata" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.num}}</td>
        <td>{{item.state}}</td>
      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [
        { name: "1",
          num: '纬四路农贸市场',
          state: "2131", 
        },{ name: "2",
           num: '经八路农贸市场',
          state: "21321", 
        },{ name: "3",
           num: '多之彩市场',
          state: "2131", 
        },{ name: "4",
          num: '燕庄农贸市场',
          state: "6575", 
        }
        
      ]
    };
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
        height: 36px;
        line-height: 36px;
        text-align: center;
        // border: 1px solid  rgba(0,0,0,0);
        background-color: rgba(52,134,218,0.7);
        color: #ffffff;
        font-weight: 600;
      }
      td {
        // width: 25%;
        height: 36px;
        line-height: 36px;
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