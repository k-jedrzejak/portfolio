<template>
  <div id="jupiterScene" class="jupiter-scene">
    <div ref="probe" class="probe">
      <TheProbe :isPlaying="isPlaying" />
    </div>
    <div ref="jupiter" class="jupiter"></div>
  </div>
</template>

<script>
import { setAnimation } from "../switchAnimation";
import { isProxy, toRaw } from "vue";
import TheProbe from "../probe/TheProbe.vue";

export default {
  name: "TheJupiter",
  components: { TheProbe },
  props: {
    isPlaying: Boolean,
  },
  mixins: [setAnimation],
  methods: {
    init() {
      let timeline;

      if (isProxy(this.timeline)) {
        timeline = toRaw(this.timeline);
      }

      timeline
        .from(
          this.$refs.jupiter,
          {
            rotate: 360,
            transformOrigin: "50% 50%",
            duration: 450,
            repeat: -1,
          },
          0
        )
        .from(
          this.$refs.probe,
          {
            rotate: -360,
            transformOrigin: "50% 50%",
            duration: 80,
            repeat: -1,
          },
          0
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.jupiter {
  @include bg-image("./jupiter.webp");
}
</style>
