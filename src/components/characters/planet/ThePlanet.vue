<template>
    <div id="planetScene" class="planet-scene">
        <div class="planet-wrapper">
          <TheToaster :isPlaying="isPlaying"/>
          <div class="planet"></div>
        </div>
    </div>
</template>

<script>
import TheToaster from '../toster/TheToaster.vue';
import { toggleGsapAnimations} from '@/utils'
import gsap from 'gsap';

const timeline = gsap.timeline();

export default({
  name: "ThePlanet",
  components: {TheToaster},
  props: {
      isPlaying: Boolean,
  },
  methods: {
    init() {
      const planet = document.querySelector('.planet');
      
      timeline
      .from(planet, {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 250,
        repeat: -1
      })
    }
  },
  mounted() {
    this.init();
    toggleGsapAnimations(this.isPlaying, timeline);
  },
  watch: {
    isPlaying() {
      toggleGsapAnimations(this.isPlaying, timeline);
    },
  },
})
</script>


<style lang="scss" scoped>
.planet {
  @include bg-image("./planet.png");
  }
</style>