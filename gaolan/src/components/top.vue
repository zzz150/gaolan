<template>
  <div id="header_top" >
   
      <div id="nav">
        <!-- <img src="../assets/images/LOGO.png" alt="" class="header_LOGO"> -->
        <div class="dataTime_l">
            <div class="date">
              <img src="../assets/images/date.png" alt="">
            </div>
          <div class="riqi">{{mytime}}</div>
          </div>
         <div class="dataTime_du" style="">
           <div class="warm">
             <img src="../assets/images/warm.png" alt="">
           </div>
         <div class="ti">{{tianqi}}&nbsp;&nbsp;{{now}}℃</div>
         </div>
      </div>
  </div>
</template>

<script>
import _getdata from '../commit/market';
export default {
   name: 'header_top',
  data() {
    return {
      // navIcon1:require("../assets/images/bg_top_tit.png"),
      // bgSize:'80% 80%',
      tabShow:0,
      mytime:'',
      weatherList:[],
      now:'',
      tianqi:''
    }
  },
  mounted(){
    setInterval(this.getNowFormatDate,1000);
    this.weather()
  },
  methods:{
    //获取当前时间
    getNowFormatDate() {
      var date = new Date();
      var year = date.getFullYear();
      var week = date.getDay();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds(); 
      var weeks = ["日","一","二","三","四","五","六"]; 
      var getWeek = "星期" + weeks[week];
      this.mytime =  year+'.'+month+'.'+day+'  '+getWeek+' ' +hour+':'+minute+':'+second+' '
      // console.log(this.mytime)  
      },
    tabday(e){
        this.tabShow = e
    },
    weather(){
      var that = this;
      var data ={
        city:"郑州"
      }
       _getdata.today(data).then(res =>{
         that.weatherList = res.data.data.forecast
         that.tianqi = that.weatherList[0].type
          that.now = res.data.data.wendu
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#header_top{
    width: 100%;
    height: 100%;
    /* border: 1px solid rgb(255, 253, 253); */
    position: absolute;
    top: 0;
    z-index: 100;
}
#nav {
  width: 100%;
  box-sizing: border-box;
  min-width: 9%;
  // font-weight: bold;
  color: #fff;
  height: 85px;
  // line-height: 85px;
  /* padding: 20px; */
  font-size: 26px;
  text-align: center;
  // border: 1px solid #ffffff;
   
   position: relative;
  //  animation: cpbottom 0.7s linear forwards;
 /* top: 0; */
  
}
@keyframes cpbottom {
      from {
        top: -85px;
      }
      to {
        top: 0;
      }
      0% {
        opacity: 0; /*初始状态 透明度为0*/
      }
      50% {
        opacity: 0.5; /*中间状态 透明度为0*/
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
      }
    }
.dataTime_l{ //现在时间
  color: #ffffff;
  position: absolute;
  font-size: 17px;
  left:50px;
  font-size: 18px;
  top: 20px;
  display:flex;
  align-items: center;
  height: 70px;
  line-height: 70px;
  .date{
    width:18px;
    height:15px;
    img{
      width:100%;
      height:100%;
      display:flex;
    }
  }
  .riqi{
    color:white;
    margin-left:10px;
    font-size:24px;
  }
}
.dataTime_du{
  position: absolute;
  height: 70px;
  line-height: 70px;
  font-size: 18px;
  right: 50px;
  top: 20px;
  display:flex;
  align-items: center;
  .warm{
    width:20px;
    height:20px;
    img{
      width:100%;
      height:100%;
      display:flex;
    }
  }
  .ti{
    margin-left:10px;
    font-size:24px;
  }
}
.header_LOGO{
  width: 150px;
  position: absolute;
  left: 30px;
  top: 20px;
}
</style>
