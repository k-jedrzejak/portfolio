<template>
  <AstroTimeSvg />
</template>

<script>
import AstroTimeSvg from "./AstroTimeSvg.vue";
import { gsap } from "gsap";

import { loopBackInOut, loop, loopSineinOut } from "@/constants";
import { setAnimation } from "../switchAnimation";
import { isProxy, toRaw } from "vue";

export default {
  name: "AstroTime",
  components: { AstroTimeSvg },
  mixins: [setAnimation],
  props: {
    isPlaying: Boolean,
  },
  data() {
    return {
      intervalId: null,
    };
  },
  methods: {
    init() {
      const astronaut = document.querySelector("#astronaut");
      const stars = document.querySelectorAll("#astroTime .star");
      const dots = document.querySelectorAll("#astroTime .dot");
      const leftHand = document.querySelector("#hand-left");
      const rightHand = document.querySelector("#hand-right");
      const head = document.querySelector("#astroHead");

      let timeline;
      if (isProxy(this.timeline)) {
        timeline = toRaw(this.timeline);
      }

      /* astronaut */
      timeline.fromTo(
        astronaut,
        { y: -45, x: 0 },
        {
          y: "random(-410, 10)",
          x: "random(-50, 50)",
          duration: "random(2, 4)",
          ...loopSineinOut,
          repeatRefresh: true,
        },
        0
      );

      /* head */
      timeline.fromTo(
        head,
        { rotateZ: -5, y: 90 },
        {
          rotate: 1,
          y: 90,
          repeatDelay: 3,
          duration: "random(1, 6)",
          transformOrigin: "50% 50%",
          ...loopSineinOut,
          repeatRefresh: true,
        },
        0
      );

      /* left hand */
      timeline.fromTo(
        leftHand,
        { rotateZ: -3 },
        {
          rotate: 4,
          duration: 2,
          repeatDelay: 3,
          ...loopSineinOut,
          repeatRefresh: true,
        },
        0
      );

      /* right hand */
      timeline.fromTo(
        rightHand,
        { rotateZ: -4 },
        {
          rotate: 3,
          duration: 2,
          repeatDelay: 3,
          ...loopSineinOut,
          repeatRefresh: true,
        },
        0
      );

      /* stars */
      stars.forEach((star) => {
        timeline.fromTo(
          star,
          { x: 0, y: 0, rotate: 0 },
          {
            x: "random(-1000, 10)",
            y: "random(-1000, 1000)",
            rotate: "random([-360, -180, -30, 30, 180, 360])",
            transformOrigin: "50% 50%",

            duration: 20,
            loop,
            repeatRefresh: true,
          },
          0
        );
      });

      /* dots */
      dots.forEach((dot) => {
        timeline.fromTo(
          dot,
          { scale: 0 },
          {
            scale: "random(0.1, 1)",
            transformOrigin: "50% 50%",
            duration: "random(1, 5)",
            ...loopBackInOut,
            repeatRefresh: true,
            onStart: function () {
              gsap.to(dot, {
                x: "random(-300, 100)",
                y: "random(-1000, 1000)",
                duration: 2,
              });
            },
          },
          0
        );
      });
    },
  },
};
</script>
