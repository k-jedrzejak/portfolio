<template>
  <!-- TO DO: when change component: remove unicornCOntainer and InfoBubble when component change -->
  <div ref="unicornContainer" id="unicornContainer">
    <transition name="fade">
      <InfoBubble v-if="showInfoBubble" />
    </transition>
    <FlyUnicornSvg ref="flyUnicornSvg" @change="openGame" />
  </div>
</template>

<script>
import FlyUnicornSvg from "./FlyUnicornSvg.vue";
import gsap from "gsap";
import { loopSineInOut } from "@/constants";
import InfoBubble from "@/components/InfoBubble.vue";

export default {
  name: "FlyUnicorn",
  props: ["game"],
  components: { FlyUnicornSvg, InfoBubble },
  data() {
    return {
      unicorn: null,
      unicornContainer: null,
      infoBubble: null,
      showInfoBubble: false,
    };
  },
  methods: {
    unicornAnimation() {
      const uni = this.unicorn;
      const uniFringe = uni.querySelectorAll(".hair1");
      const uniEye = uni.querySelector(".eye");
      const uniHair = uni.querySelectorAll(".hair2");
      const umbrella = uni.querySelector(".umbrella");
      const umbrellaStick = uni.querySelectorAll(".umbrella-stick");
      const hand = uni.querySelectorAll(".hand");
      const timeline = gsap.timeline();

      uniFringe.forEach((hair) => {
        timeline.fromTo(
          hair,
          { rotateZ: 0 },
          {
            rotateZ: 5,
            duration: 1.3,
            transformOrigin: "100% 50%",
            ...loopSineInOut,
          },
          0
        );
      });

      uniHair.forEach((hair) => {
        timeline.fromTo(
          hair,
          { y: 0, x: -1 },
          {
            y: 1,
            x: 1,
            duration: 1.3,
            transformOrigin: "50% 50%",
            ...loopSineInOut,
          },
          0
        );
      });

      timeline
        /* unicorn */
        .fromTo(
          uni,
          { rotateZ: 1 },
          {
            rotateZ: "random(2, 6)",
            duration: "random(1, 2)",
            ...loopSineInOut,
            repeatRefresh: true,
          },
          0
        )
        /* umbrella */
        .fromTo(
          umbrella,
          { rotateZ: -2, x: 1 },
          {
            rotateZ: 2,
            x: 1,
            duration: 1,
            transformOrigin: "50% 50%",
            ...loopSineInOut,
          },
          0
        )

        /* umbrella stick */
        .fromTo(
          umbrellaStick,
          { rotateZ: -2, x: -2.5 },
          {
            rotateZ: 2,
            x: -2.5,
            duration: 1,
            transformOrigin: "50% 50%",
            ...loopSineInOut,
          },
          0
        )

        /* hand  */
        .fromTo(
          hand,
          { rotateZ: 2 },
          {
            rotateZ: -2,
            duration: 1,
            transformOrigin: "100% 100%",
            ...loopSineInOut,
          },
          0
        )

        /* eye  */
        .fromTo(
          uniEye,
          { scaleY: 1 },
          {
            scaleY: 1,
            transformOrigin: "50% 50%",
            repeat: -1,
            duration: 2,
            repeatDelay: 0.2,
          },
          0
        )

        .fromTo(
          uniEye,
          { scaleY: 0.1 },
          {
            scaleY: 1,
            transformOrigin: "50% 50%",
            repeat: -1,
            delay: 2,
            duration: 0.2,
            repeatDelay: 2,
          },
          1
        );
    },

    moveUnicorn(element) {
      let pxPerSecond = 50;
      let newPos = {
        x: gsap.utils.random(-window.innerWidth, window.innerWidth * 2),
        y: gsap.utils.random(-window.innerHeight, window.innerHeight * 2),
      };

      let curPos = {
        x: gsap.getProperty(element, "x"),
        y: gsap.getProperty(element, "y"),
      };

      let deltaX = curPos.x - newPos.x;
      let deltaY = curPos.y - newPos.y;
      let distance = Math.hypot(deltaX, deltaY);
      let duration = distance / pxPerSecond;

      gsap.to(element, {
        x: newPos.x,
        y: newPos.y,
        duration: duration,
        ease: "none",
        onComplete: this.moveUnicorn,
        onCompleteParams: [element],
      });

      // TO DO: when change component
      curPos.x > newPos.x
        ? gsap.to(this.unicorn, { scaleX: 1, x: 0, duration: 0 })
        : gsap.to(this.unicorn, { scaleX: -1, x: -50, duration: 0 });
      //   ? gsap.to(element, { scaleX: 1, duration: 0 })
      //   : gsap.to(element, { scaleX: -1, duration: 0 });
    },

    doubleTapUnicorn(element) {
      let lastClick = 0;
      element.addEventListener(
        "touchstart",
        () => {
          let date = new Date();
          let time = date.getTime();

          const time_between_taps = 200;
          if (time - lastClick < time_between_taps) {
            this.openGame();
          }
          lastClick = time;
        },
        { passive: true }
      );
    },

    doubleClickUnicorn(element) {
      element.addEventListener("dblclick", () => {
        this.openGame();
      });
    },

    openGame() {
      this.setGame = true;
      this.$emit("openGame");
      this.showInfoBubble = true;
      setTimeout(() => {
        this.showInfoBubble = false;
      }, 2300);
    },
  },

  mounted() {
    this.unicorn = this.$refs.flyUnicornSvg.$refs.unicorn;
    this.unicornContainer = this.$refs.unicornContainer;
    this.unicornAnimation();

    // TO DO: when change component: change to unicorn
    this.moveUnicorn(this.unicornContainer);
    this.doubleTapUnicorn(this.unicornContainer);
    this.doubleClickUnicorn(this.unicornContainer);
  },
};
</script>

<style lang="scss" scoped>
#unicorn {
  @include size(14vh, auto);

  @media screen and (min-width: $screen-desktop) {
    @include size(18vh, auto);
  }
}

#unicornContainer {
  @include size(15vh, auto);
  @include relative(30%, null, null, 10%);
  z-index: 2000;
  cursor: pointer;

  @media screen and (min-width: $screen-desktop) {
    @include size(10vh, auto);
  }
}

#infoBubble {
  @include absolute(9vh, null, null, 6vh);
  @include size(15vh);

  @media screen and (min-width: $screen-tablet) {
    @include absolute(10vh, null, null, 6vh);
    @include size(14vh);
  }

  @media screen and (min-width: $screen-desktop) {
    @include absolute(11vh, null, null, 7vh);
    @include size(16vh);
  }
}

.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
