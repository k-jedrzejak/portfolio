<template>
  <section :id="scene" class="scene"  >
    <div class="title-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleSection',
  props: {
    scene: String,
  },
}
</script>

<style lang="scss">

.scene {
  min-height: 100vh;
}
.title-container {
  @include size(100vw, 100vh);
  @include fixed(0, $left:0);
  @include flex(flex-start, center);
  flex-flow: column nowrap;
  z-index: 0;
  visibility: hidden;
  perspective: 900px;
  perspective-origin: 50% 50vh;
  padding: 0 1rem 0 25vw;
  
  .title {
    margin-right: 0;
    padding-right: 0;
  }

  @media screen and (max-width: $screen-desktop) {
    padding-left: 4rem;
  }

  @media screen and (max-width: $screen-mobile) {
    padding: 0 1rem 0 2rem;
  }
}
</style>
