<template>
  <div id="bar_btm" style="width: 100%; height: 100%"></div>
</template>

<script>
import _getdata from '@/commit/market'
export default {
data(){
    return{
        mydata:[],
        value:[],
        name:[]
    }
},
mounted(){

this.getMonthdatabyTypeNametopnum()
},
methods:{
    getMonthdatabyTypeNametopnum(){
      var that = this;
      var data = {
        id:1410,
        top:5,
      }
      _getdata.getMonthdatabyTypeNametopnum(data).then(res =>{
        if(res.data.return_code == 0){
          that.mydata = res.data.datas
        //   // var name = []
          that.mydata.forEach(res => {
            that.name.push(res.name)
            that.value.push(res.value);
          })
          that.efcs();
        //    console.log(that.myMoney,that.house)

        }
      })
    },
    efcs(){
      let myChart = this.$echarts.init(document.getElementById("bar_btm"));
       myChart.setOption({
             textStyle:{
                        color:'#fff',
                        fontSize:'16'
                     },
                    title: {
                        textStyle:{
                            color:'#fff',

                         },
                         left:'50%',
                        text: '',
                       /* subtext: '数据来自网络'*/
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        top:10,    
                        textStyle:{
                            color:'#fff',
                         },
                       /* data: [titleName],*/
                    },
                    grid: {//设置图表位置
                        left: '3%',
                        right: '7%',
                        bottom: '3%',
                        top:'40',
                        containLabel: true
                    },
                    xAxis: {
                        color:'#fff',
                        splitLine : {//去掉网格线
                            show : false
                        }, nameTextStyle :{
                            fontSize: 12,
                             color : '#fff'
                        },
                        position: 'bottom',//X轴位置
                        type: 'value',
                        name:'kg',
                         fontSize: 10,
                        boundaryGap: [0, 0.01],
                        axisLabel : {//坐标轴刻度标签的相关设置
                            rotate:'45',//坐标轴文字旋转角度
                            show : true,
                            textStyle : {
                                color : '#FFF',
                                align : 'right',
                                fontSize: 10
                            }
                        },

                        axisLine : {
                            lineStyle : {
                                color : '#3486DA'
                            }
                        },
                        axisTick : {
                            lineStyle : {
                                color : '#FFF'
                            }
                        },
                    },
                    yAxis: {
                        nameTextStyle :{
                            fontSize: 12,
                             color : '#fff'
                        },
                        type: 'category',//轴的类型分两种 1.category（类别）2.value(值)
                        name:'分类',
                        data: /*da*/this.name,
                        axisLabel : {
                            show : true,
                            textStyle : {
                                color : '#FFF',
                                align : 'right',
                                fontSize: 10    /*文字大小*/
                            }
                        },
                        axisLine : {
                            lineStyle : {
                                color : '#fff'//轴的颜色
                            }
                        },
                        axisTick : {
                            lineStyle : {
                                color : '#3486DA'//轴上点的颜色
                            }
                        },

                    },
                    series: [
                        {
                            name: '交易榜单',
                            type: 'bar',
                            data:this.value /*aa*/,/*请求回来的数据数组*/
                            label : {
                                normal : {
                                    show : true,//显示数字
                                    position : 'right'
                                }
                            },
                            barWidth : 8,//柱子宽度
                            itemStyle : {
                                normal : {
                                    color:'#94D8F6',//柱状的颜色
                                    label : {
                                          textStyle : {
                                              fontSize : '15',//柱状上的显示的文字
                                              color:'#ccecff'
                                          }
                                      }
                                }
                            },

                        }

                    ]

       })
    },
}
}
</script>

<style>
</style>
