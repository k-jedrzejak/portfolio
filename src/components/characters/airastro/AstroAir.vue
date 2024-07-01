<template>
  <div id="astroAir">
    <AstroAirSvg ref="astroAirSvg" />
  </div>
</template>

<script>
import AstroAirSvg from "./AstroAirSvg.vue";
import { loopSineInOut } from "@/constants";
import { setAnimation } from "../switchAnimation";
import { isProxy, toRaw } from "vue";

export default {
  name: "AstroAir",
  components: { AstroAirSvg },
  mixins: [setAnimation],
  props: {
    isPlaying: Boolean,
  },
  methods: {
    init() {
      const astro = this.$refs.astroAirSvg.$refs.astroAir;
      const head = this.$refs.astroAirSvg.$refs.astroAirHead;
      const hand = this.$refs.astroAirSvg.$refs.astroAirArm;

      let timeline;
      if (isProxy(this.timeline)) {
        timeline = toRaw(this.timeline);
      }

      if (window.matchMedia(`(max-width: 576px)`).matches) {
        timeline.fromTo(
          astro,
          { y: -30, x: 10, rotate: -25 },
          {
            rotateZ: -30,
            y: "random(-30, -30)",
            x: "random(10, 40)",
            duration: "random(4, 7)",
            ...loopSineInOut,
            repeatRefresh: true,
          },
          0
        );
      } else {
        timeline.fromTo(
          astro,
          { y: 10, x: 0, rotateZ: -10 },
          {
            y: "random(-20, -100)",
            x: "random(0, 400)",
            rotateZ: 10,
            duration: "random(4, 7)",
            ...loopSineInOut,
            repeatRefresh: true,
          },
          0
        );
      }

      timeline
        .fromTo(
          head,
          { x: -10, rotateZ: 0 },
          {
            x: 10,
            rotateZ: "random(0, 4)",
            duration: "random(1, 2)",
            repeatDelay: 1,
            transformOrigin: "50% 50%",
            ...loopSineInOut,
            repeatRefresh: true,
          },
          0
        )
        .fromTo(
          hand,
          { y: 5, rotateZ: 0 },
          {
            y: 1,
            rotateZ: "random(9,12)",
            duration: 1,
            repeatDelay: 2,
            transformOrigin: "10% 80%",
            ...loopSineInOut,
          },
          0
        );
    },
  },
};
</script>
