<template>
  <div>
      <label id="labelId">{{label}}</label>
      <select id="selectId"
      :multiple="multi"
      :value="value"
      @input="$emit('input',$event.target.value)">

      <option v-for="option in options" :key="option">
          {{option}}
      </option>
      
      </select>
  </div>
</template>

<script>
export default {
    name: 'SelectList',
    props: ['multi','options','name','label','value']
}
</script>

<style>
#labelId{
  margin-left: 5%;
  margin-right: 0%;
}
#selectId{
  width: 180px;
  margin-left: 5.5%;
  margin-right: 5%;
  margin-bottom: 1%;
}
</style>