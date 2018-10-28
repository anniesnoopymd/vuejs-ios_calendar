var vm = new Vue({
   el: "#app",
   data: {
      tags: "日一二三四五六",
      days: [],
      selected_day: 0,
      start_day: 3,
      lunar_pan: 5
   },
   mounted (){
      for(var i=1; i<=31 ; i++){
         var new_day = {
            number: i,
            events:[]
         };
         if(Math.random() < 0.4){
            var count = Math.random() * 3;
            var minute = parseInt(Math.random()*3)*15
            for(var o = 0; o<count;o++){
               new_day.events.push({
                  title: ["整理房間","跟朋友出門","打包行李"][parseInt(Math.random()*3)],
                  time: parseInt(Math.random()*24)+":"+(minute==0?"0":"")+minute
               })
            }
         }
         this.days.push(new_day);
      }
   },
   methods: {
      get_pan(id){
         if(id!=0){
            return null;
         }else{
            return {'margin-left':'calc( '+ this.start_day +' * 100% / 7 )'}
         }
      },
      chinese_num(num){
         var list="十一二三四五六七八九";
         return list[num];
      },
      lunar(num){
         if(num > 30)
            num = num % 30
         if(num <= 10){
            return "初" + this.chinese_num(num%10)
         }else if(num == 20){
            return "二十"
         }else if(num < 20){
            return "十" + this.chinese_num(num%10)
         }else if(num == 30){
            return "三十"
         }else if(num < 30){
            return "廿" + this.chinese_num(num%10)
         }
      }
   }
});