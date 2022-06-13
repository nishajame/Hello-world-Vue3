<template>
  <div>
  <h1 id="head">Fruits {{ fruitCount }}</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" v-bind:key="fruit.name">  
      <div>{{ fruit.name }} <button id="btRemove" v-on:click="remove(index)"> x</button></div>
      </li> 
  </ul>
  <br>
  <form @submit.prevent="addFruit">
    <input v-model="newf" placeholder="Type fruit name here" ref="newfruitRef"/>
    <button id="btAdd" type="submit">Add Fruit</button>
  </form>
  <br> <br><br> <br>
  </div>
</template>

<script>
export default {
    mounted(){
      this.$refs.newfruitRef.focus();
    },
    computed: {
      fruitCount(){
          return this.fruits.length + " fruits";
      },
      
    },
    methods: {
        addFruit(){
          if(this.newf != ''){
            this.fruits.push({name: this.newf}); 
            this.newf = '';
          }    
        },
        remove(index){
            this.fruits = this.fruits.filter((fruit,i) => i != index)
        },
    },
    data(){
      return{
        fname: "Nisha",
        newFruit: "Kiwi",
        fruits: [
          {name: "Apple"},
          {name: "Orange"},
          {name: "Grapes"},
          {name: "Banana"}],
      };
    },
}
</script>

<style>
#head{
  text-align: left;
  margin-left: 10px;
}
  #btAdd{
    border-radius: 0;
    margin-left: 2%;
    background-color: rgb(42, 165, 63);
  }
  #btRemove{
    border-radius: 0;
    margin-left: 2%;
    margin-right: 2%;
    background-color: rgb(184, 11, 118);
  }
</style>