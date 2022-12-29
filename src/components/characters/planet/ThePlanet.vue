<template>
    <div id="planetScene" class="planet-scene">
        <div class="planet-wrapper">
          <TheToaster />
          <div class="planet"></div>
        </div>
    </div>
</template>

<script>
import TheToaster from '../toster/TheToaster.vue';
import gsap from 'gsap';

export default({
  name: "ThePlanet",
  components: {TheToaster},
  methods: {
    init() {
      const planet = document.querySelector('.planet');

      gsap.timeline({repeat: -1})
      .from(planet, {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 250,
      })
    }
  },
  mounted() {
      this.init()
  }
})
</script>


<style lang="scss" scoped>
.planet {
  @include bg-image("./planet.png");
  }
</style>