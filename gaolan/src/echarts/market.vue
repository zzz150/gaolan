<template>
  <div id="r_btm" style="width:100%;height:100%"></div>
</template>

<script>
export default {
data(){
  return{}
},
mounted(){
this.efcs()
},
methods:{
    efcs(){
      let myChart = this.$echarts.init(document.getElementById("r_btm"));
       myChart.setOption({
           legend: {
            data: ["实时产线效率", "实时产品合格率"],
            textStyle: {
              color: "#8AB4E1"
            },
            top: "20px"
          },
          axisLabel: {
          color: "white"
        },
        tooltip: {
          trigger: "axis",
        },
          xAxis: {
            type: "category",
            boundaryGap: false,
            show:true,
            
            data: ["1", "3", "5", "7", "9", "11", "13", "15"],
            name: '日',
            color: "white",
            lineStyle:{ //textStyle里面写x轴下的字体的样式
            color:'#ffffff',
            fontSize:13
            }
          　　　　　　　
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
            left: "0px",
            right: "20px",
            bottom: "10px",
            containLabel: true
          },
          series: [
            
          {
            name:"实时产线效率",
            data: [820, 932, 934, 690, 630, 720,820, 932],
            type: 'line',
            smooth: true,
            color:"#FE3483",
             markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "实时产品合格率",
            data: [120, 200, 150, 80, 70, 110, 130 ,532,],
            type: "line",
            color: "#4A67D0",
            smooth: true,
             markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
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
            }
          }
        ]
       })
    },
}
}
</script>

<style>

</style>
