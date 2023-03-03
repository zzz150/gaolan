<template>
    <div id="main" style="width: 100%;height:100%;"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.jiaoyi();
  },
  methods: {
    jiaoyi() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "white"
            }
          }
        },
         grid: {
					left: "10",
					right: "10",
					bottom: "10",
					top: "50",
					containLabel: true
				},
        legend: {
          data: ["交易数", "交易额", "交易量"],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
              "1月",
              "2月",
              "3月"
            ],
            axisPointer: {
              type: "shadow"
            },
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
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "万笔/千吨",
            min: 40,
            max: 160,
            interval: 20,
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
          {
            type: "value",
            name: "万元",
            min: 8000,
            max: 20000,
            interval: 2000,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#c0d9ff",
                align: "left",
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
          }
        ],
        series: [
          {
            name: "交易数",
            type: "bar",
            data: [45, 49, 70, 60, 56, 76, 135, 160, 55, 50, 64, 83],
            itemStyle: {
              //图形的颜色。默认指向全局的option.color
              color: "#ffbbae"
            },
          },
          {
            name: "交易量",
            type: "bar",
            data: [45, 49, 70, 60, 56, 76, 135, 160, 55, 50, 64, 83],
            itemStyle: {
              //图形的颜色。默认指向全局的option.color
              color: "#4cfdf5"
            },
          },
          {
            name: "交易额",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              //图形的颜色。默认指向全局的option.color
              color: "#eee5d6"
            },
            data: [
              9000,
              10000,
              11000,
              12000,
              9000,
              15000,
              18000,
              15000,
              13000,
              12000,
              11000,
              11000
            ]
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>