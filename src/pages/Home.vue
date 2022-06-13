<template>
<div id="homediv"> 
  <h1 id="home">Welcome</h1>
  <h3> Data from .NET -- {{ data }}</h3>

</div>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
  
  setup(){
    const web = [ 'HTML', 'CSS', 'JavaScript' ]
    const data = inject('custName')

    return{
      data,
      web
    }
  }
}
</script>

<style>
#homediv{
    margin-left: 2%;
    margin-right: 2%;
}
#home{
        text-align: center;
    }
</style>