<template>
  <div id="gram_line" style="height:100%" class="gramline">
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
export default {
  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("gram_line"));
      // 绘制图表
      myChart.setOption({

      grid: {
         left: '5',
        right: '5',
        bottom: '-8',
        top:'20',
        containLabel: true
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
        //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
        // legend: {
        //     data: ["月订单","总订单"], //对应的是name
        //     textStyle:{
        //         color:'#8AB4E1',
        //     },	
        //     top:'20px'
        // },
        //配置X轴
        xAxis: {
          //坐标轴类型
          type: "category",
          //配置类目名称。 可以逐一设置，具体看文档
          data: [ "纬四路市场","经八路市场", "燕庄市场", "多之彩市场", "新世纪","岳砦市场" ],
          //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
          axisPointer: {
            show: true, //show 必须写，开关的作用
            type: "shadow"
          },
          axisLabel: {
            color: "#8AB4E1",
            rotate:'-15',//坐标轴文字旋转角度
            show : true,
            margin: 20, //刻度标签与轴线之间的距离
            boundaryGap: [0, 0.01],
            nameGap:{
              //  default: 15
            },
            textStyle : {
                color : '#8AB4E1',
                align : 'right',
                fontSize: 10,
                // top:10
            }
          }
        },
        //配置Y轴
        yAxis: [
          {
            type: "value", //坐标轴类型
            // name: "实体查阅", //名称
            min: 0, //最小值
             //最大值
             min: 1,//列数
            color:'#8AB4E1',
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              formatter: "{value}", //字符串模板 
              color: "#8AB4E1"
            },splitLine: {//分割线配置
						show:false,
						lineStyle: {
							color: "#162B5F",
						}
					}
          },
        //   {
        //     type: 'value',
        //     min: 0,
        //     max: 100,
        //     interval: 20,
        //     axisLabel: {
        //       color: "#8AB4E1",
        //        formatter: '{value}%',

        //     },splitLine: {//分割线配置
				// 		// show:false,
				// 		lineStyle: {
				// 			color: "#162B5F",
				// 		}
				// 	}
        // }
        ],
        //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
        series: [
          // {
          //   name: "订单已完成",
          //   type: "bar",
          //   data: [16, 30, 44, 23, 23, 25],
          //   itemStyle: {
          //     //图形的颜色。默认指向全局的option.color
          //     color: "#4466F4"
          //   },
          //    barWidth : 10
          // },
          //  {
          //   name: "月订单",
          //   type: "bar",
          //   data: [15, 25, 40, 20, 20, 22],
          //   barCategoryGap:3,
          //   itemStyle: {
          //     //图形的颜色。默认指向全局的option.color
          //     color: "#FF106E"
          //   },
          //    barWidth :10
          // },
          {
            name: "总订单",
            type: "bar",
            data: [31, 55, 84, 37, 43, 45],
            barCategoryGap:3,
            itemStyle: {
              //图形的颜色。默认指向全局的option.color
              color: "#0de59c"
            },
             barWidth : 20
          },
          // {
          //   name: "完成率",
          //   type: "line",
          //   data: [45, 54, 66, 50, 40, 32, 43, 76, 65, 55, 87, 75],
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
          //           color: "rgba(68,240,255,255)"
          //         },
          //         {
          //           offset: 1,
          //           color: "rgba(10,10,10,0)"
          //         }
          //       ])
          //     },
          //     itemStyle: {
          //       normal: {
          //           color: '#44F0FF'
          //       }
          //   }
          //   }
          // }
        ],
        //图表的颜色
        color: [
          "#CCC",
          "#AFA",
          "#61a0a8",
          "#d48265",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ]
      });
      //鼠标事件
      myChart.on("click", function(params) {
        // console.log(params);
      });
    }
  }
};
</script>

<style lang="scss">
// @import '../../../assets/css/echarts.scss';
</style>