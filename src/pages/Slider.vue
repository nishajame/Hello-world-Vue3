<template>
<div>
    <div>
  <div id="sliderDiv">
    <div id="sliderDiv2" v-for="(color,index) in sliders" :key="color" >
        <transition name="fade">
        <div id="sliderDiv2" v-if="currentSlide == index" :style="color"></div>  
        </transition>
    </div>
    </div>
    </div>
    <div>
    <!-- <div id="dotDiv">
        <div id="dotDiv2">
            <div id="dotDiv3" v-for="(slider,index) in sliders" :key="slider" :style="currentSlide = index? 'background-color:gray':'background-color:white'"></div>
        </div>
    </div>-->
    </div> 
    <!-- <div id="sliderH1div">
        <div id="sliderH1div2">
            <transition name="fade">
            <h1 id="h1" v-if="isTitleShowing">Slider Carousel</h1>
            </transition>
            <button id="btnToggle" @click="isTitleShowing = !isTitleShowing">Toggle Text</button>
        </div>
    </div> -->
</div>
</template>

<script>
export default {
      data(){
        return{
            currentSlide: 1,
            interval: "",
            sliders: ['background-color:lightblue','background-color:lightsalmon','background-color:teal'],
            isTitleShowing: true,
        }
    },
    mounted(){
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1
        }, 1000);
    },
    beforeUnmount(){
        clearInterval(this.interval)
    }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter{
    opacity: 0;
    transform: translateX(-100%);
} .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}

#dotDiv{
    width: 100%;
    height: 340px;
    justify-content: center;
}
#dotDiv2{
    position: absolute;
    width: 100%;
    display: flex;
    bottom: 0%;
    justify-content: center;
}
#dotDiv3{
    width: 50%;
    height: 50%;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 9999px;
    justify-content: center;
    /* background-color: black; */
    /* align-content: center;
    text-align: center; */
}

#btnToggle{
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 10px;
    margin-left: 15%;
    margin-right: 20%;
    width: 100px;
}
#sliderH1div2{
    margin: auto;
}
#h1{
    font-size: 20px;
}
#sliderH1div{
    margin-top: 25%;
    margin-bottom: 5%;
    display: flex;
    width: 100%;
}
#sliderDiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
#sliderDiv2{
    width: 100%;
    height: 350px;
    /* background-color: lightblue; */
    position: absolute;
}

</style>