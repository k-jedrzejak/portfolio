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
import { setAnimation } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';

export default({
  name: "ThePlanet",
  components: {TheToaster},
  mixins: [setAnimation],
  props: {
      isPlaying: Boolean,
  },
  methods: {
    init() {
      const planet = document.querySelector('.planet');

      let timeline;
			if (isProxy(this.timeline)){
				timeline = toRaw(this.timeline);
			}
      
      timeline
      .from(planet, {
        rotate: 360,
        transformOrigin: '50% 50%',
        duration: 250,
        repeat: -1
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.planet {
  @include bg-image("./planet.webp");
}
</style>