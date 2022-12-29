<template>
  <SceneSection id="intro">
      <h1 class="title">
        <div 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1,  transition: { delay: 800, duration: 1000,ease: 'easeIn'} }"
        >karolina</div>
       
        <div class="color" 
        v-motion
        :initial="{ opacity: 0,  y: -800, rotate: 1420 }"
        :enter="{ opacity: 1,  y: 0, scale: 1, rotate: 0,transition: {delay: 1000, duration: 1500, ease: 'linear'} }"
        >.j</div>
      </h1>

      <TextBlock
        v-motion
        :initial="{ opacity: 0,  x: -80 }"
        :enter="{ opacity: 1,  x: 0,transition: {delay: 1700, duration: 800, ease: 'linear'} }">
        <div class="color">Karolina Jedrzejak</div>
        <div class="gray">Frontend developer</div>
      </TextBlock>
</SceneSection>
</template>

<script>
import TextBlock from '@/components/TextBlock.vue'
import SceneSection from '../SceneSection.vue'

export default {
  name: 'IntroScene',
  components: { TextBlock, SceneSection},
}
</script>


<!-- <style lang="scss" scoped>
.intro-container {
  padding: calc(50vh - 3.5rem) 0 0;
  margin: 0 25vw;
  min-height: 100vh;
  perspective: 900px;
  perspective-origin: 50% 50vh;

  .text {
    .color {
      margin-bottom: $indent-s;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 0 4rem 0 calc(4rem + 1px);
  }

  @media screen and (max-width: 568px) {
    margin: 0 2rem 0 calc(2rem + 1px);
  }
}

.scene-intro {
    .title {
      display: flex;
    }
  }
</style> -->