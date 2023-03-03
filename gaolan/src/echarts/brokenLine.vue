<template>
    <div id="zhe" style="width: 100%;height:100%;color:white;" class="brokenLine_box"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// import _getdata from '../getdata/getdata'
export default {
  data(){
    return {
      interval3: null,
    }
  },
    mounted() {
    // this.echarts();
    // this.list();
this.rows();
  //  this.interval3 = window.setInterval(() => {
  //     setTimeout(this.echarts, 0);
  //   }, 3000);
  },
  // beforeDestroy() {
  //   clearInterval(this.interval3);
  //    this.interval3 = null;
  //   console.log("beforDestroy");
  // },
  methods: {
    //  echarts() {
    //   let token = window.localStorage.getItem("token");
    //   _getdata.echarts(token).then(res => {
    //     if (res.data.code == 1) {
    //       this.myecharts = res.data.data;
    //       console.log(this.myecharts)
    //       // let up_a = [];
    //       // let down_a = [];
    //       // let create_time_a = [];
    //       // this.myecharts.forEach((item, index, arr) => {
    //       //   up_a.push(item.up);
    //       //   down_a.push(item.down);
    //       //   create_time_a.push(item.create_time.slice(11, 16));
    //       //   this.up = up_a;
    //       //   this.down = down_a;
    //       //   this.create_time = create_time_a;
    //       //   this.rows();
    //       // });
    //     } else if (res.data.code == -10000) {
    //       alert(res.data.msg);
    //       this.$router.push({ path: "/" });
    //     }
    //   });
    // },
    rows() {
      var mChart = this.$echarts.init(document.getElementById("zhe"));
      mChart.setOption({
        legend: {
          // data: ["行上流量", "行下流量"],
          data: ["交易量"],
          textStyle: {
            color: "#8AB4E1"
          },
          top: "10px",
        },
        tooltip: {
            trigger: 'axis',
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
          data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"]
        },
        yAxis: {
          type: "value",
           splitLine: {//分割线配置
						// show:false,
						lineStyle: {
							color: "#162B5F",
						}
					}
        },
        grid: {
          left: "10px",
          right: "20px",
          bottom: "15px",
          top:'35',
          containLabel: true
        },
        axisLine: {
          lineStyle: {
            color: "white"
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
            name: "交易量",
            data: [620, 732, 601, 434, 590, 530, 720],
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
                  {
                    offset: 0,
                    color: "rgba(255,35,145,255)"
                  },
                  {
                    offset: 1,
                    color: "rgba(255,35,145,0)"
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: "#FF2391"
              }
            }
          },
          // {
          //   name: "行下流量",
          //   data: [820, 932, 901, 934, 1290, 1330, 1320],
          //   type: "line",
          //   tooltip: {
          //     triggerOn: "none",
          //     position: function(pt) {
          //       return [pt[0], 130];
          //     }
          //   },
          //   toolbox: {
          //     itemSize: 25,
          //     top: 55,
          //     feature: {
          //       dataZoom: {
          //         yAxisIndex: "none"
          //       },
          //       restore: {}
          //     }
          //   },
          //   areaStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //           offset: 0,
          //           color: "rgba(0,49,245,1)"
          //         },
          //         {
          //           offset: 1,
          //           color: "rgba(0,49,245,0)"
          //         }
          //       ])
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       color: "#0031FF"
          //     }
          //   }
          // }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '../../assets/css/echarts.scss';
</style>