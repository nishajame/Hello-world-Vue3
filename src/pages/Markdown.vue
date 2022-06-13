<template>
<div class="mkdiv"> 
    <h1 class="mkh1">MarkDown</h1>
<section class="mkdnsection">
    <article class="article" id="Larticle">
        <textarea  id="textarea" :value="text" @input="update" ref="MarkdownTextarea"></textarea>
    </article>
    <article class="article" id="Rarticle" v-html="markedText">
    </article>
</section>
</div>
  
</template>

<script>
import marked from 'marked'
import debounce from '../utilities/mixins/debounce'

export default {
    mixins: [debounce],
    data(){
        return{
            text: "",
        }
    },
    computed:{
        markedText(){
            return marked(this.text)
        },
    },
    methods:{
        update(e){
            const task = () => (this.text = e.target.value)
            this.debounce(task, 500)
            
        },
        
    },
    mounted(){
        this.$refs.MarkdownTextarea.focus();
    }
}
</script>

<style>
#textarea{
    width:100%;
    height: 100%;
}
.mkh1{
    width: 100%;
    text-align: center;
    font-size: 3ex;
    margin-right: 4%;
}
.mkdiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.mkdnsection{
    display: flex;
    width: 70%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
}
.article{
    width: 50%;
}
#Larticle{
    border-color: rgb(133, 129, 129);
    background-color: rgb(252, 247, 247);
}
#Rarticle{
    border-color: rgb(231, 203, 203);
    background-color: rgb(231, 240, 240);
    padding-left: 1%;
    padding-right: 1%;
}
</style>