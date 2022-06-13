<template>
  <div id="div"> 
    <h1>
      Data Binding
    </h1> 
    <!-- <keep-alive> -->
    <component id="component" v-for="(field,index) in schema"
          :key="index"
          :is="field.fieldType"
          :value="value"
          v-model="field.name"
           @input-text="updateForm(field.name, $event)"
          v-bind="field"> 
    </component>  
    <!-- </keep-alive> -->
    <p>
      Test {{formData.firstName}}
      <!-- Hello {{formData.firstName}} {{formData.lastName}}, I hear you are {{formData.age}} years old. -->
      <!-- Hello  {{lastName}}, I hear you are {{age}} years old. -->
    </p>  
  </div>
</template>

<script>
import TextInput from '../components/v3/TextInput.vue'
import NumberInput from '../components/v3/NumberInput.vue'
import SelectList from '../components/v3/SelectList.vue'
import { getCurrentInstance } from "vue";


export default {
//   name: 'HomeDemo',
  components: {
    TextInput,
    NumberInput,
    SelectList,
  },
  props:["value","name"],
    
  data(){
    return{
      formData:this.value||{},
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
          value: ""
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName",
          value: ""
        },
        {
          fieldType: "TextInput",
          placeholder: "Last Name",
          label: "Last Name",
          name: "lastName",
          value: ""
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          name: "age",
          label: "Age",
          minValue: 0,
          value: ""
        }
      ]
    };
  },
  methods:{
        updateForm(fieldName, value){
            console.log(value);
            const instance = getCurrentInstance();

           this.formData = instance.ctx.formData;
            // this.$set(this.formData, fieldName, value);
            // const result = Reflect.set(this.formData,fieldName, value);
            
            //this.$set( this.formData,fieldName, value);
            this.$emit('input-text', this.formaData);

            // return result
        }
    }
};
</script>

<style>
#div{
  text-align: center;
  justify-content: center;
}
/* #component{
    margin-left: 1%;
    margin-right: 2%;
    justify-content: space-between; 
}*/
</style>