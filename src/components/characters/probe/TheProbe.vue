<template>
  <TheProbeSvg ref="theProbeSvg" />
</template>

<script>
import TheProbeSvg from "./TheProbeSvg";
import { loopSineInOut } from "@/constants";
import { setAnimation } from "../switchAnimation";
import { isProxy, toRaw } from "vue";

export default {
  name: "TheProbe",
  components: { TheProbeSvg },
  mixins: [setAnimation],
  props: {
    isPlaying: Boolean,
  },
  methods: {
    init() {
      const bulb = this.$refs.theProbeSvg.$refs.bulb;

      let timeline;
      if (isProxy(this.timeline)) {
        timeline = toRaw(this.timeline);
      }

      timeline.fromTo(
        bulb,
        { scale: 1, filter: "brightness(0.7)" },
        {
          scale: 1.2,
          filter: "brightness(2)",
          duration: 1,
          repeatDelay: 1,
          transformOrigin: "50% 50%",
          ...loopSineInOut,
          repeatRefresh: true,
        },
        0
      );
    },
  },
};
</script>
