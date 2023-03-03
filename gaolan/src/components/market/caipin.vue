<template>
    <div id="caipin" style="width: 100%;height:100%;"></div>
</template>

<script>
import _getdata from '@/commit/market'
export default {
  data() {
    return {
      partype:[],
      nameList:[],
      interval:null
    };
  },
  mounted() {  
    this.parTypeNam();
  },
 
  methods: {
    parTypeNam(){
      var that = this;
      var data = {
        id:1410,
        top:5,
      }
      _getdata.getMonthdatabyTypeNametopnum(data).then(res =>{
        if(res.data.return_code == 0){
          that.partype = res.data.datas
          that.partype.forEach(res => {
            that.nameList.push(res.name)
          })
          that.cai();
        }
      })
    },
    cai() {
      var myChart = this.$echarts.init(document.getElementById("caipin"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:["#2bdc70",'#c23531',"#d9c701",'#29a0f7','#f38051'],
        legend: {
        orient: 'vertical',
        right: 10,
        data: this.nameList,
        textStyle: {
            color: "#fff"
          }
    },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: this.partype,
            name:'热销菜品',
            // [
            //   { value: 1380030.96, name: "青菜" },
            //   { value: 755731.24, name: "青椒" },
            //   { value: 591441.84, name: "土豆" },
            //   { value: 230005.16, name: "小葱" },
            //   { value: 164289.1, name: "胶菜" }
            // ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>