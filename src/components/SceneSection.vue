<template>
  <section class="scene" >
    <div class="static-container">
      <slot></slot>
    </div>
    <div class="animations-container">
      <slot name="animeContainer"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SceneSection',
  props: {
    intro: Boolean
  }
}
</script>

<style lang="scss">

.scene {
  min-height: 100vh !important;
}

.static-container {
  padding: calc(50vh - 3.5rem) 0 0;
  margin: 0 25vw;
  min-height: 100vh;
  perspective: 900px;
  perspective-origin: 50% 50vh;

  @media screen and (max-width: $screen-desktop) {
    margin: 0 4rem 0 calc(4rem + 1px);
  }

  @media screen and (max-width: $screen-mobile) {
    margin: 0 1rem 0 calc(2rem + 1px);
  }
}

.animations-container {
  @include size(100vw, 100vh);
  @include fixed(0, null, null, 0);
  z-index: -1;
  visibility: hidden;
  perspective: 900px;
  perspective-origin: 50% 50vh;
}

</style>
