<template>
  <section>
    <TitleSection id="exp">
      <TitleFunction selectorClass="experience" subtitle="// WorkShowcase"></TitleFunction>
  
    </TitleSection>
    <div id="clouds">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
  </div>
  </section>




</template>
  
  <script>
import TitleSection from '../TitleSection.vue'
import TitleFunction from '../TitleFunction.vue';
  
  export default {
    name: 'ExpScene',
    components: { TitleSection, TitleFunction },
  }
  </script>
  
  
 <style lang="scss">

#clouds {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
}
.cloud{
    position: absolute;
    width: 120vw;
    height: 120vh;
    transform-origin: 50% 50%;
    background: url('../../assets/clouds-1.png') no-repeat center;
    background-size: contain;
    opacity: 0.6;

    &.cloud-2 {
      background-image: url('../../assets/clouds-2.png');
    }

    &.cloud-3 {
      background-image: url('../../assets/clouds-3.png');
      width: 100vw;
      height: 100vh;
      z-index: -1;
      opacity: 0.25;
    }
  }
</style>