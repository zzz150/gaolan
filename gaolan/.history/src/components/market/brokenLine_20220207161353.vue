<template>
    <div id="zhe" style="width: 100%;height:100%;color:white;" class="brokenLine_box"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import _getdata from '@/commit/market'
export default {
  data(){
    return {
      interval3: null,
      mydata:[],
      num:[],
      liu:[]
    }
  },
    mounted() {
    this.echarts();
   this.interval3 = window.setInterval(() => {
      setTimeout(this.echarts, 0);
    }, 108000000);
  },
  beforeDestroy() {
    clearInterval(this.interval3);
     this.interval3 = null;
    // console.log("beforDestroy");
  },
  methods: {
     echarts() {
       var that = this;
      var data = {
        id:1410
      }
       _getdata.yearliu(data).then(res => {
          // console.log(res)
        if(res.data.return_code == 0){
          that.mydata = res.data.datas.date
          that.num = res.data.datas.gcdqkiyear
          that.liu = [];
          that.num.forEach((res,index) => {
            that.liu.push(res.innum)
          })
          that.rows();
        } 
      });
    },
    rows() {
      var mChart = this.$echarts.init(document.getElementById("zhe"));
      mChart.setOption({
        tooltip: {
            trigger: 'axis',
            transitionDuration:0,
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        axisLabel: {
          color: "#8AB4E1"
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.mydata,
           axisLine : {
                lineStyle : {
                    color : '#1870AF'
                }
            },
            axisLabel:{
              textStyle:{
                color:'white'
              }
            }
        },
        yAxis: {
          type: "value",
           splitLine: {//分割线配置
						show:false,
          },
          axisLine : {
                lineStyle : {
                    color : '#1870AF'
                }
            },
             axisLabel:{
              textStyle:{
                color:'white'
              }
            }
        },
        grid: {
          left: "10px",
          right: "20px",
          bottom: "10px",
          top:'25',
          containLabel: true
        },
        axisLine: {
          lineStyle: {
            color: "red"
          }
        },
        axisTick: {
          lineStyle: {
            color: "white"
          },
          onZero: true
        },
        series: [
          {
            name:'人流量',
            data:this.liu,
            type: "line",
            tooltip: {
              triggerOn: "none",
              position: function(pt) {
                return [pt[0], 130];
              }
            },
            toolbox: {
              itemSize: 25,
              top: 55,
              feature: {
                dataZoom: {
                  yAxisIndex: "none"
                },
                restore: {}
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                ])
              }
            },
            itemStyle: {
              normal: {
                color: "white",
                label : {show: true},
                lineStyle:{ 
color:'#1870AF' //改变折线颜色
} 
              },
            },
          },
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '../../assets/css/echarts.scss';
</style>