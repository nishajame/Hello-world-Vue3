<template>
    <div>
        <label>{{label}}</label>
        <input id="inputNumber" type="number"
                :name="name"
                :value="value"
                @input="$emit('input',$event.target.value)"
                :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'NumberInput',
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
    #inputNumber{
    margin-left: 5.5%;
    margin-bottom: 1%;
}
</style>