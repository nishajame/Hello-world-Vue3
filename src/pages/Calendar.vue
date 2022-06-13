<template>
<div class="Calendar">
  <h1>Calendar  </h1>
  <!-- {{startDay()}} -->
  <!-- <h3><br> {{dayInMonth()}}</h3> -->
  <section class="YearandMonth">
    <h2>{{ currentMonthName }}</h2>
    <h2 class="Year">  {{currentYear}}</h2>
  </section>
  <section class="daynum"> 
      
      <p v-for="day in days" :key="day">{{ day }}</p>
  </section>
  <section class="daynum">
      <p v-for="num in startDay()" :key="num"></p>
      <p v-for="num in dayInMonth()" :key="num" :style="currentDateClass(num)">{{ num }}</p>
  </section>
  <!-- <div class="Calendar"> -->
  <section class="YearandMonth">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
  </section>
  <!-- </div> -->
</div>
</template>

<script>
export default {
    data(){
        return{
            currentDate: new Date().getUTCDate(),
            currentYear: new Date().getFullYear(),
            //currentMonthName: new Date().toLocaleString("default",{month: "long"}),
            currentMonth: new Date().getMonth() ,
            days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        }
    },
    methods:{
        dayInMonth(){
            //const month = new Date().getMonth();
            return new Date(this.currentYear,this.currentMonth + 1,0).getDate();
        },
        startDay(){
            return new Date(this.currentYear,this.currentMonth,1).getDay();
        },
        next(){
            if(this.currentMonth == 11){
                this.currentMonth = 0;
                this.currentYear++;
            }
            else{
                this.currentMonth++;
            }
        },
        prev(){
            if(this.currentMonth == 0){
                this.currentMonth = 11;
                this.currentYear--;
            }
            else{
            this.currentMonth--;
            }
        },
        currentDateClass(num){
            const CalendarFullDate = new Date(this.currentYear,this.currentMonth,num).toDateString();
            const currentFullDate = new Date().toDateString();
            //console.log(CalendarFullDate);
            //console.log(currentFullDate);
            return CalendarFullDate == currentFullDate ? 'color:DodgerBlue' : '';
        },
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month: "long"});
        }
    }
}
</script>

<style>

button{
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 25px ;
}
h3{
    text-align: left;
    margin-left: 32%;
}
.Calendar div {
    text-align: center;
    margin-left: 50%;

}
h2 .Year{
        margin-left: 32%;  
        margin-right: 35%;
}
.YearandMonth{
        justify-content: space-between;
        display: flex;
        margin-left: 32%;  
        margin-right: 35%;
  }
h1 {
    text-align: center;
    margin-left: auto;

}
.daynum {
    text-align: center;
    font-weight: bold;
    display: flex ;
    flex-wrap:wrap;
    margin-left: 30%;
    margin-right: 30%;
}
p{
    width: 13%;
    text-align: center;
}
</style>