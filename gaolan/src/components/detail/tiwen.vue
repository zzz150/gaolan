<template>
  <div id="tiwen" style="width: 100%;height:100%;"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.tiwen();
  },
  methods: {
    tiwen() {
      var myChart = this.$echarts.init(document.getElementById("tiwen"));
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
              lineStyle: {
                color: "#c0d9ff" //轴的颜色
              }
            },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          },
          axisLine: {
              lineStyle: {
                color: "#c0d9ff" //轴的颜色
              }
            },
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气温",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值"
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
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