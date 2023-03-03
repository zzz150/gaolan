<template>
  <div class="Table">
    <table cellspacing ="1" cellpadding ="1">
      <tr style="color:#3486DA">
        <th>交易市场</th>
        <th>交易时间</th>
        <th>重量(kg)</th>
        <th>金额(元)</th>
      </tr>
      <tr v-for="(item,index) in mydata" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.num}}</td>
        <td>{{item.state}}</td>
        <td>{{item.OEE}}</td>
      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [
        { name: "丰乐市场",
          num: '2020.11.18',
          state: "2.4", 
          OEE: "12"
        },{ name: "文苑市场",
           num: '2020.11.18',
          state: "2.4", 
          OEE: "12"
        },{ name: "中州大道市场",
           num: '2020.11.18',
          state: "2.4", 
          OEE: "12"
        },{ name: "文苑市场",
          num: '2020.11.18',
          state: "2.4", 
          OEE: "12"
        }
        
      ]
    };
  }
};
</script>
<style scoped lang='scss'>
// @import '../../assets/css/echarts.scss';
.Table {
  border: 2px solid #3486da;
  color: white;
  font-weight: 500;
  width: 99%;
  line-height: 100%;
  table {
    width: 100%;
    tr {
      width: 100%;
      th{
        font-size: 15px;  width: 25%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #3486da;
      }
      td {
        width: 25%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #3486da;
        font-size: 14px;
      }
    }
  }
}
</style>