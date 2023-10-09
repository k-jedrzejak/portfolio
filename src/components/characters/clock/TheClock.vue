<template>
  <TheClockSvg
    :secondTransform="secondTransform"
    :secondShadowTransform="secondShadowTransform"
    :minuteTransform="minuteTransform"
    :minuteShadowTransform="minuteShadowTransform"
    :hourTransform="hourTransform"
    :hourShadowTransform="hourShadowTransform"
  />
</template>

<script>
import TheClockSvg from "./TheClockSvg.vue";

export default {
  name: "AstroMagento",
  components: { TheClockSvg },
  props: {
    isPlaying: Boolean,
  },
  data() {
    return {
      rotation: {
        Second: 0,
        SecondShadow: 0,
        Minute: 0,
        MinuteShadow: 0,
        Hour: 0,
        HourShadow: 0,
      },
    };
  },
  methods: {
    updateClockHands() {
      const currentDate = new Date();
      const seconds = currentDate.getSeconds();
      const minutes = currentDate.getMinutes() + seconds / 60;
      const hours = currentDate.getHours() + minutes / 60;

      this.setRotation("Second", seconds * 6);
      this.setRotation("SecondShadow", seconds * 6);
      this.setRotation("Minute", minutes * 6);
      this.setRotation("MinuteShadow", minutes * 6);
      this.setRotation("Hour", hours * 30);
      this.setRotation("HourShadow", hours * 30);
    },
    setRotation(hand, degree) {
      this.rotation[hand] = degree;
    },
  },
  mounted() {
    this.updateClockHands();
    this.intervalId = setInterval(this.updateClockHands, 1000);
  },

  computed: {
    secondTransform() {
      return `rotate(${this.rotation.Second}, 256, 256)`;
    },
    secondShadowTransform() {
      return `rotate(${this.rotation.SecondShadow}, 253, 259)`;
    },
    minuteTransform() {
      return `rotate(${this.rotation.Minute}, 256, 256)`;
    },
    minuteShadowTransform() {
      return `rotate(${this.rotation.MinuteShadow}, 254, 258)`;
    },
    hourTransform() {
      return `rotate(${this.rotation.Hour}, 256, 256)`;
    },
    hourShadowTransform() {
      return `rotate(${this.rotation.HourShadow}, 255, 257)`;
    },
  },
};
</script>
