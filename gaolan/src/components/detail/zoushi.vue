<template>
    <div id="mains" style="width: 100%;height:100%;"></div>
</template>

<script>
import _getdata from '@/commit/market'
export default {
  data() {
    return {
      mydata:[],
      house:[],
      myMoney:[]
    };
  },
  mounted() {
    
    this.get24total()

  },
  methods: {
    get24total(){
      var that = this;
      var data = {
        id:1459
      }
      _getdata.get24total(data).then(res =>{
        if(res.data.return_code == 0){
          that.mydata = res.data.datas
          // var name = []
          that.mydata.forEach((res,index) => {
            if(index%2==0) {
            that.myMoney.push(res.money)
            that.house.push(res.h);
            }
          })
          that.zoushi();
        }
      })
    },
    zoushi() {
      var myChart = this.$echarts.init(document.getElementById("mains"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: this.house,
         
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c0d9ff",
              align: "right",
              fontSize: 10 /*文字大小*/
            }
          },
          axisLine: {
            lineStyle: {
              color: "#c0d9ff" //轴的颜色
            }
          },
          axisTick: {
            lineStyle: {
              color: "#3486DA" //轴上点的颜色
            }
          }
        },
         grid: {
					left: "10",
					right: "10",
					bottom: "10",
					top: "30",
					containLabel: true
				},
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#c0d9ff",
              align: "right",
              fontSize: 10 /*文字大小*/
            }
          },
          axisLine: {
            lineStyle: {
              color: "#c0d9ff" //轴的颜色
            }
          },
          axisTick: {
            lineStyle: {
              color: "#3486DA" //轴上点的颜色
            }
          }
        },
        series: [
          {
            data: this.myMoney,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#f4ffff",
                lineStyle: {
                  color: "#0ff0ff"
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss">
</style>