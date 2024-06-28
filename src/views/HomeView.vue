<template>
  <div id="home" ref="home" class="container">
    <IntroScene />
    <ExpScene />
    <CeScene :isPlaying="isPlaying.AstroTime" />
    <AdrinoScene :isPlaying="isPlaying.UfoRhino" />
    <AuroraScene :isPlaying="isPlaying.AstroMagento" />
    <EuroScene :isPlaying="isPlaying.ToasterPlanet" />
    <PracaScene :isPlaying="isPlaying.AstroWork" />
    <SpineLine />
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IntroScene from "@/components/content/IntroScene.vue";
import AdrinoScene from "@/components/content/AdrinoScene.vue";
import AuroraScene from "@/components/content/AuroraScene.vue";
import EuroScene from "@/components/content/EuroScene.vue";
import PracaScene from "@/components/content/PracaScene.vue";
import ExpScene from "@/components/content/ExpScene.vue";
import { ref, onMounted } from "vue";
import { removeBodyClass, addBodyClass } from "@/utils";
import SpineLine from "@/components/SpineLine.vue";
import CeScene from "@/components/content/CeScene.vue";

export default {
  name: "HomeView",
  components: {
    IntroScene,
    AdrinoScene,
    AuroraScene,
    EuroScene,
    PracaScene,
    ExpScene,
    SpineLine,
    CeScene,
  },
  data() {
    return {
      isPlaying: {
        AstroMagento: false,
        UfoRhino: false,
        ToasterPlanet: false,
        AstroWork: false,
        AstroTime: false,
      },
    };
  },
  methods: {
    playExpSection() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#exp",
            start: "top 80%",
            end: "+=900",
            scrub: 3,
            pin: false,
          },
        })
        .set("#clouds", {
          autoAlpha: 1,
        })
        .from(
          ".cloud-1",
          {
            yPercent: 70,
            xPercent: 40,
          },
          0
        )
        .to(
          ".cloud-1",
          {
            yPercent: -70,
            xPercent: -40,
            autoAlpha: 0,
          },
          0.5
        )
        .from(
          ".cloud-2",
          {
            yPercent: 40,
            xPercent: -100,
          },
          0
        )
        .to(
          ".cloud-2",
          {
            yPercent: -40,
            xPercent: 100,
            autoAlpha: 0,
          },
          0.5
        )
        .from(
          ".cloud-3",
          {
            yPercent: 85,
            xPercent: -60,
          },
          0
        )
        .to(
          ".cloud-3",
          {
            yPercent: -85,
            xPercent: 60,
            autoAlpha: 0,
          },
          0.5
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#exp",
            start: "top 70%",
            end: "+=900",
            scrub: 1,
            pin: false,
          },
        })
        .set("#exp .title-container", {
          autoAlpha: 1,
        })
        .from(
          "#exp .title",
          {
            autoAlpha: 0,
            y: 100,
            duration: 1700,
          },
          0
        )
        .from(
          "#exp .text",
          {
            autoAlpha: 0,
            y: -100,
            duration: 700,
          },
          0
        )
        .to("#exp .title, #exp .text", {
          autoAlpha: 0,
          duration: 700,
          y: -100,
        });
    },

    playCe() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ceTitle",
            end: "+=800",
            start: "top 50%",
            scrub: 2,
            pin: false,
            onEnter: () => (this.isPlaying.AstroTime = true),
            onLeaveBack: () => (this.isPlaying.AstroTime = false),
          },
        })
        .set("#ceTitle .title-container", {
          autoAlpha: 1,
        })
        .set("#ce1 .animations-container", {
          autoAlpha: 0.8,
        })
        .from(
          "#ceTitle .title",
          {
            autoAlpha: 0,
            y: 200,
            rotateY: 360,
            duration: 2000,
          },
          0
        )
        .from(
          "#ceTitle .text",
          {
            autoAlpha: 0,
            x: -50,
            duration: 1000,
          },
          0
        )
        .from(
          "#ceLogo",
          {
            autoAlpha: 0,
            yPercent: -20,
            duration: 2500,
          },
          0
        )
        .from(
          "#astroTime",
          {
            autoAlpha: 0,
            xPercent: 0,
            duration: 10000,
          },
          0
        )
        .from(
          "#clock",
          {
            autoAlpha: 0,
            yPercent: 100,
            duration: 10000,
          },
          0
        )
        .to("#ceTitle .title, #ceTitle .text", {
          autoAlpha: 0,
          duration: 900,
          y: -200,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ce2",
            start: "top 35%",
            end: "+=800",
            scrub: 1,
            pin: false,
            onLeave: () => (this.isPlaying.AstroTime = false),
            onEnterBack: () => (this.isPlaying.AstroTime = true),
          },
        })
        .to("#ceLogo", {
          yPercent: 100,
          duration: 5000,
          autoAlpha: 0,
        })
        .addLabel("endOfCeLogo")
        .to(
          "#astroTime",
          {
            duration: 4500,
            autoAlpha: 0,
            yPercent: -100,
          },
          "endOfCeLogo"
        )
        .to(
          "#clock",
          {
            duration: 4500,
            yPercent: 100,
            autoAlpha: 0,
          },
          "endOfCeLogo"
        );
    },

    playAdrino() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#adrinoTitle",
            end: "+=800",
            start: "top 70%",
            scrub: 1,
            pin: false,
            onEnter: () => (this.isPlaying.UfoRhino = true),
            onLeaveBack: () => (this.isPlaying.UfoRhino = false),
          },
        })
        .set("#adrinoTitle .title-container", {
          autoAlpha: 1,
        })
        .set("#adrino1 .animations-container", {
          autoAlpha: 0.8,
        })
        .from(
          "#adrinoTitle .title",
          {
            autoAlpha: 0,
            y: 200,
            rotateX: 360,
            duration: 2000,
          },
          0
        )
        .from(
          "#adrinoTitle .text",
          {
            autoAlpha: 0,
            rotateX: 270,
            y: 300,
            duration: 2000,
          },
          0
        )
        .from(
          "#adrinoLogo",
          {
            autoAlpha: 0,
            scale: 1,
            x: -300,
            duration: 3000,
          },
          0
        )
        .from(
          "#ufoRhino",
          {
            autoAlpha: 0,
            xPercent: 20,
            scale: 0.2,
            duration: 10000,
          },
          0
        )
        .to("#adrinoTitle .title, #adrinoTitle .text", {
          autoAlpha: 0,
          duration: 900,
          y: -200,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#adrino2",
            start: "top 85%",
            end: "+=800",
            scrub: 1,
            pin: false,
          },
        })
        .to("#adrinoLogo", {
          scale: 1,
          x: 1000,
          autoAlpha: 0,
          //rotateX: 360,
          duration: 1300,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#adrino4",
            start: "top 5%",
            end: "+=800",
            scrub: 1,
            pin: false,
            onLeave: () => (this.isPlaying.UfoRhino = false),
            onEnterBack: () => (this.isPlaying.UfoRhino = true),
          },
        })
        .to("#ufoRhino", {
          xPercent: -50,
          yPercent: -30,
          duration: 25000,
          scale: 0,
        });
    },

    playAurora() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#auroraTitle",
            end: "+=800",
            start: "top 50%",
            scrub: 2,
            pin: false,
            onEnter: () => (this.isPlaying.AstroMagento = true),
            onLeaveBack: () => (this.isPlaying.AstroMagento = false),
          },
        })
        .set("#auroraTitle .title-container", {
          autoAlpha: 1,
        })
        .set("#aurora1 .animations-container", {
          autoAlpha: 0.8,
        })
        .from(
          "#auroraTitle .title",
          {
            autoAlpha: 0,
            y: -200,
            rotateX: 360,
            duration: 2000,
          },
          0
        )
        .from("#auroraTitle .text", {
          autoAlpha: 0,
          rotateX: 270,
          y: 200,
          duration: 2000,
        })
        .from(
          "#acLogo",
          {
            autoAlpha: 0,
            scale: 0.2,
            rotateX: 270,
            y: 200,
            duration: 2100,
          },
          0
        )
        .from(
          "#astroMagento",
          {
            autoAlpha: 0,
            xPercent: 20,
            scale: 0.2,
            duration: 10000,
          },
          0
        )
        .to("#auroraTitle .title, #auroraTitle .text", {
          autoAlpha: 0,
          duration: 900,
          y: -200,
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#aurora2",
            start: "top 95%",
            end: "+=900",
            scrub: 1,
            pin: false,
          },
        })
        .to("#acLogo", {
          scale: 0,
          y: -300,
          rotateX: 360,
          duration: 500,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#aurora3",
            start: "top 5%",
            end: "+=900",
            scrub: 1,
            pin: false,
            onLeave: () => (this.isPlaying.AstroMagento = false),
            onEnterBack: () => (this.isPlaying.AstroMagento = true),
          },
        })
        .to("#astroMagento", {
          xPercent: -800,
          duration: 25000,
          scale: 2.5,
        });
    },

    playEuro() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#euroTitle",
            start: "top 50%",
            end: "+=900",
            scrub: 1,
            pin: false,
            onEnter: () => (this.isPlaying.ToasterPlanet = true),
            onLeaveBack: () => (this.isPlaying.ToasterPlanet = false),
          },
        })
        .set("#euroTitle .title-container", {
          autoAlpha: 1,
        })
        .set("#euro1 .animations-container", {
          autoAlpha: 0.8,
        })
        .from(
          "#euroTitle .title",
          {
            autoAlpha: 0,
            x: -400,
            rotateY: 270,
            duration: 3000,
          },
          1
        )
        .from(
          "#euroTitle .text",
          {
            autoAlpha: 0,
            rotateY: 270,
            x: 400,
            duration: 3000,
          },
          1
        )
        .from("#euroLogo", {
          autoAlpha: 0,
          scale: 0.2,
          yPercent: 100,
          duration: 2000,
        })
        .from(
          "#planetScene",
          {
            autoAlpha: 0,
            duration: 800,
          },
          0
        )
        .to("#euroTitle .title, #euroTitle .text", {
          autoAlpha: 0,
          duration: 800,
          y: -200,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#euro2",
            start: "top 95%",
            end: "+=900",
            scrub: 1,
            pin: false,
          },
        })
        .to("#euroLogo", {
          autoAlpha: 0,
          scale: 0,
          duration: 2000,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#euro3",
            start: "top 95%",
            end: "+=2000",
            scrub: 1,
            pin: false,
            onLeave: () => (this.isPlaying.ToasterPlanet = false),
            onEnterBack: () => (this.isPlaying.ToasterPlanet = true),
          },
        })
        .to("#planetScene", {
          scale: 0,
          xPercent: 70,
          yPercent: -50,
          duration: 8000,
          transformOrigin: "50% 50%",
          rotate: 360,
        });
    },

    playPraca() {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#pracaTitle",
            start: "top 50%",
            end: "+=1200",
            scrub: 1,
            pin: false,
            onEnter: () => (this.isPlaying.AstroWork = true),
            onLeaveBack: () => (this.isPlaying.AstroWork = false),
          },
        })
        .set("#pracaTitle .title-container", {
          autoAlpha: 1,
        })
        .set("#praca1 .animations-container", {
          autoAlpha: 1,
        })
        .from("#pracaTitle .title", {
          autoAlpha: 0,
          y: -200,
          rotateX: 270,
          duration: 1000,
        })
        .from("#pracaTitle .text", {
          autoAlpha: 0,
          rotateX: 270,
          y: 200,
          duration: 1000,
        })
        .from("#pracaLogo", {
          autoAlpha: 0,
          scale: 0.4,
          yPercent: 300,
          duration: 1000,
        })
        .from(
          "#astroWork",
          {
            autoAlpha: 0,
            xPercent: 20,
            duration: 4000,
          },
          0
        )
        .to("#pracaTitle .title, #pracaTitle .text", {
          autoAlpha: 0,
          duration: 1200,
          y: -200,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#praca2",
            start: "top top",
            end: "+=1",
            scrub: 1,
            pin: false,
          },
        })
        .to("#pracaLogo", {
          autoAlpha: 0,
          rotate: 0,
          x: -200,
          duration: 100,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#praca3",
            start: "top top",
            end: "+=1",
            scrub: 1,
            pin: false,
            onLeave: () => (this.isPlaying.AstroWork = false),
            onEnterBack: () => (this.isPlaying.AstroWork = true),
          },
        })
        .to("#astroWork", {
          xPercent: -100,
          duration: 2500,
          opacity: 0,
          scale: 2,
        });
    },
  },

  mounted() {
    this.playExpSection();
    this.playCe();
    this.playAdrino();
    this.playAurora();
    this.playEuro();
    this.playPraca();
  },

  setup() {
    const home = ref();
    onMounted(() => {
      if (home.value) {
        removeBodyClass("about");
        addBodyClass("home");
      }
    });

    return {
      home,
    };
  },
};
</script>

<style lang="scss">
.desc-scene .static-container {
  min-height: 100vh;
  perspective: 900px;
  perspective-origin: 50% 50vh;
  padding-top: 0;
  position: relative;
}
</style>
