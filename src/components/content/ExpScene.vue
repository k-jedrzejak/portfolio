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
  
  
<style lang="scss" scoped>

$cloud1Path: '../../assets/clouds-1.webp';
$cloud2Path: '../../assets/clouds-2.webp';
$cloud3Path: '../../assets/clouds-3.webp';

#clouds {
  @include fixed(0,0,0,0);
  visibility: hidden;
}
.cloud{
  @include absolute;
  @include size(215vw, 120vh);
  transform-origin: 50% 50%;
  @include bg-image($cloud1Path, contain, center);
  opacity: 0.6;
    &.cloud-2 {
      @include bg-image($cloud2Path, contain, center);
    }
    &.cloud-3 {
      @include bg-image($cloud3Path, contain, center);
      @include size(200vw, 100vh);
      z-index: -1;
      opacity: 0.25;
    }
  }

  // Desktop
  @media screen and (min-width: $screen-desktop) {
    .cloud {
      @include size(120vw, 120vh);
      &.cloud-3 {
        @include size(100vw, 100vh);
      }
    }
  }
</style>