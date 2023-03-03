<template>
	 <div id="taday" style="width: 100%;height:100%;margin-top:15px;" class="datayline"></div> 
</template>

<script>
import _getdata from '@/commit/market'
export default {
	data(){
		return{
			date:[],
			mydata:[],
			liu:[],
			interval3:null
		}
	},
	mounted(){
		this.echarts()
		this.interval3 = window.setInterval(() => {
      setTimeout(this.echarts, 0);
    }, 120000);
	},
	beforeDestroy() {
    clearInterval(this.interval3);
     this.interval3 = null;
  },
	methods:{
		echarts() {
       var that = this;
       _getdata.weekliu().then(res => {
		//    console.log(res)
        if(res.data.return_code == 0){
			that.date = res.data.datas.date
          that.mydata = res.data.datas.gcdqklwee
          that.liu = [];
          that.mydata.forEach((res,index) => {
            // if(index%2==0) {
            that.liu.push(res.innum)
            // }
          })
          that.rows();
        } 
      });
    },
		rows(){
    		var myChart = this.$echarts.init(document.getElementById('taday'));
			   myChart.setOption({
				tooltip: {
					trigger: 'axis',
					transitionDuration:0,
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#2BDC70'
						},
						lineStyle: {
							color: "#162B5F",
						}
					}
				},
				axisLabel:{
					color:"white",
				},   
				xAxis: {
					type: 'category',
					data: this.date,
					boundaryGap: true,
					axisLine: {
						lineStyle: {
							color: '#1870AF'
						}
					},
				},
				yAxis: {
					type: 'value',
					min: 0,
					minInterval: 1,
					// max: 40,
					// interval: 10,
					color:'white', 
					splitLine: {//分割线配置
						show:false,
					},
					position: 'left',
					axisLine: {
						lineStyle: {
							color: '#1870AF'
						}
					},
					// data: ['1', '4', '8', '12', '16', '20', '24'],
				},
				 grid: {
					left: "10",
					right: "10",
					bottom: "5",
					top: "20",
					containLabel: true
				},
				 axisLine: {
					lineStyle: {
						color: "white"
					}
				},
				 axisTick: {
					lineStyle: {
						// color: "white"
					},
					onZero: true
				},
				series: [//图表相应的参数
					{
						name:'人流量',
						type:'bar',
						stack: '总量',
						data:this.liu,
						itemStyle: {
							normal: {
								color: "#1870AF",
								label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'white',
                            fontSize: 12
                        }
                    }
							}
						}
					},
				],
				

		
		})

		}
	}


}
</script>

<style lang="scss">
</style>