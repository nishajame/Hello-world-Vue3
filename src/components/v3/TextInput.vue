<template>
  <div>
    <label>{{label}}</label>
    <input id="inputText" type="text" 
        :name="name"
        :value="value"
        :placeholder="placeholder"
        @change="$emit('input-text',$event.target.value)">
        ffffff{{value}}
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
        placeholder: String,
        label: String,
        name: String,
        value: String,
    }
  // props: ['placeholder','label','name','value'],
}
</script>

<style>
  #inputText{
    margin-left: 2%;
    margin-bottom: 1%;
}
</style>