<template>
  <div id="home" ref="home" class="container"> 
    <IntroScene />
    <ExpScene />
    <AdrinoScene  :isPlaying="isPlaying.UfoRhino"/>
    <AuroraScene :isPlaying="isPlaying.AstroMagento"/>
    <EuroScene :isPlaying="isPlaying.ToasterPlanet"/>
    <PracaScene :isPlaying="isPlaying.AstroWork"/>
    <SpineLine />
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import IntroScene from "@/components/content/IntroScene.vue";
import AdrinoScene from '@/components/content/AdrinoScene.vue';
import AuroraScene from '@/components/content/AuroraScene.vue';
import EuroScene from '@/components/content/EuroScene.vue';
import PracaScene from '@/components/content/PracaScene.vue';
import ExpScene from '@/components/content/ExpScene.vue';
import { ref, onMounted } from 'vue';
import { removeBodyClass, addBodyClass} from '@/utils';
import SpineLine from '@/components/SpineLine.vue';

export default {
  name: 'HomeView',
  components: {
    IntroScene,
    AdrinoScene,
    AuroraScene,
    EuroScene,
    PracaScene,
    ExpScene,
    SpineLine,
  },
  data() {
    return {
      isPlaying: {
        AstroMagento: false,
        UfoRhino: false,
        ToasterPlanet: false,
        AstroWork: false,
      }
    }
  },
  methods: {
    playMyCV() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
          scrollTrigger: {
            trigger: '#exp',
            start: "top 50%",
            end: "+=900",
            scrub: .5,
            pin: false
          }
        })
        .set('#clouds', {
          autoAlpha: 1
        })
        .from('.cloud-1', {
          yPercent: 70,
          xPercent: 40,
        }, 0)
        .to('.cloud-1', {
          yPercent: -70,
          xPercent: -40,
          alpha: 0,
        }, 0.5)
        .from('.cloud-2', {
          yPercent: 40,
          xPercent: -100,
        }, 0)
        .to('.cloud-2', {
          yPercent: -40,
          xPercent: 100,
          alpha: 0,
        }, 0.5)
        .from('.cloud-3', {
          yPercent: 85,
          xPercent: -60,
        }, 0)
        .to('.cloud-3', {
          yPercent: -85,
          xPercent: 60,
          alpha: 0,
        }, 0.5)

      gsap.timeline({
          scrollTrigger: {
            trigger: '#exp',
            start: "top 50%",
            end: "+=600",
            scrub: .5,
            pin: false
          }
        })
        .set('#exp .title-container', {
          autoAlpha: 1
        })
        .from('#exp .title', {
          alpha: 0,
          y: 100,
          duration: 700
        }, 0)
        .from('#exp .text', {
          alpha: 0,
          y: -100,
          duration: 400
        }, 0)
        .to('#exp .title, #exp .text', {
          autoAlpha: 0,
          duration: 700,
          y: -100
        })

      gsap.timeline({
        scrollTrigger: {
          trigger: '#intro',
          start: "top 50%",
          end: "+=600",
          scrub: .5,
          pin: false
        }
      })
    },

    playAdrino() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
          scrollTrigger: {
            trigger: "#adrinoTitle",
            end: "+=800",
            start: "top 70%",
            scrub: 2,
            pin: false,
            onEnter: () => this.isPlaying.UfoRhino = true,
            onLeaveBack: () => this.isPlaying.UfoRhino = false,
          }
        })
        .set('#adrinoTitle .title-container', {
          autoAlpha: 1
        })
        .set('#adrino1 .animations-container', {
          autoAlpha: .8
        })
        .from('#adrinoTitle .title', {
          alpha: 0,
          y: 200,
          rotateX: 360,
          duration: 2000
        }, 0)
        .from('#adrinoTitle .text', {
          alpha: 0,
          rotateX: 270,
          y: 300,
          duration: 2000
        }, 0)
        .from("#adrinoLogo", {
          alpha: 0,
          scale: 0.2,
          y: 200,
          duration: 2100
        }, 0)
        .from("#ufoRhino", {
          alpha: 0,
          xPercent: 20,
          scale: 0.2,
          duration: 10000
        }, 0)
        .to('#adrinoTitle .title, #adrinoTitle .text', {
          autoAlpha: 0,
          duration: 900,
          y: -200
        })
        .to("#adrinoLogo", {
          scale: 0,
          yPercent: 300,
          rotateX: 360,
          duration: 500
        })

      gsap.timeline({
          scrollTrigger: {
            trigger: "#adrino2",
            start: "top 5%",
            end: "+=800",
            scrub: 1,
            pin: false,
            onLeave: () => this.isPlaying.UfoRhino = false,
            onEnterBack: () => this.isPlaying.UfoRhino = true
          }
        })
        .to("#ufoRhino", {
          xPercent: -50,
          yPercent: -30,
          duration: 25000,
          scale: 0
        })
    },

    playAurora() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
          scrollTrigger: {
            trigger: '#auroraTitle',
            start: "top 70%",
            end: "+=800",
            scrub: .5,
            pin: false
          }
        })

      gsap.timeline({
          scrollTrigger: {
            trigger: "#auroraTitle",
            end: "+=800",
            start: "top 30%",
            scrub: 2,
            pin: false,
            onEnter: () => this.isPlaying.AstroMagento = true,
            onLeaveBack: () => this.isPlaying.AstroMagento = false,
          }
        })
        .set('#auroraTitle .title-container', {
          autoAlpha: 1
        })
        .set('#aurora1 .animations-container', {
          autoAlpha: .8
        })
        .from('#auroraTitle .title', {
          alpha: 0,
          y: -200,
          rotateX: 360,
          duration: 2000
        }, 0)
        .from('#auroraTitle .text', {
          alpha: 0,
          rotateX: 270,
          y: 200,
          duration: 2000
        })
        .from("#acLogo", {
          alpha: 0,
          scale: 0.2,
          rotateX: 270,
          y: 200,
          duration: 2100
        }, 0)
        .from("#astroMagento", {
          alpha: 0,
          xPercent: 20,
          scale: 0.2,
          duration: 10000
        }, 0)
        .to('#auroraTitle .title, #auroraTitle .text', {
          autoAlpha: 0,
          duration: 900,
          y: -200
        })
        .to("#acLogo", {
          scale: 0,
          y: -300,
          rotateX: 360,
          duration: 500
        })

      gsap.timeline({
          scrollTrigger: {
            trigger: "#aurora3",
            start: "top 5%",
            end: "+=900",
            scrub: 1,
            pin: false,
            onLeave: () => this.isPlaying.AstroMagento = false,
            onEnterBack: () => this.isPlaying.AstroMagento = true
          }
        })
        .to("#astroMagento", {
          xPercent: -550,
          duration: 25000,
          scale: 2
        })
    },

    playEuro() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
          scrollTrigger: {
            trigger: "#euroTitle",
            start: "top 50%",
            end: "+=600",
            scrub: 1,
            pin: false,
            onEnter: () => this.isPlaying.ToasterPlanet = true,
            onLeaveBack: () => this.isPlaying.ToasterPlanet = false
          }
        })
        .set('#euroTitle .title-container', {
          autoAlpha: 1
        })
        .set('#euro1 .animations-container', {
          autoAlpha: .8
        })
        .from('#euroTitle .title', {
          alpha: 0,
          x: -400,
          rotateY: 270,
          duration: 3000
        }, 1)
        .from('#euroTitle .text', {
          alpha: 0,

          rotateY: 270,
          x: 400,
          duration: 3000
        }, 1)
        .from("#euroLogo", {
          alpha: 0,
          scale: 0.2,
          yPercent: 100,
          duration: 2000
        })
        .from("#planetScene", {
          alpha: 0,
          duration: 800
        }, 0)
        .to('#euroTitle .title, #euroTitle .text', {
          autoAlpha: 0,
          duration: 800,
          y: -200
        })
        .to("#euroLogo", {
          scale: 0,
          duration: 2000
        })


      gsap.timeline({
          scrollTrigger: {
            trigger: "#euro3",
            start: "top 95%",
            end: "+=2000",
            scrub: 1,
            pin: false,
            onLeave: () => this.isPlaying.ToasterPlanet = false,
            onEnterBack: () => this.isPlaying.ToasterPlanet = true
          }
        })
        .to("#planetScene", {
          scale: 0,
          xPercent: 70,
          yPercent: -50,
          duration: 8000,
          transformOrigin: '50% 50%',
          rotate: 360
        })
    },

    playPraca() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
          scrollTrigger: {
            trigger: "#pracaTitle",
            start: "top 30%",
            end: "+=600",
            scrub: 1,
            pin: false,
            onEnter: () => this.isPlaying.AstroWork = true,
            onLeaveBack: () => this.isPlaying.AstroWork = false,
          }
        })
        .set('#pracaTitle .title-container', {
          autoAlpha: 1
        })
        .set('#praca1 .animations-container', {
          autoAlpha: 1
        })
        .from('#pracaTitle .title', {
          alpha: 0,
          y: -200,
          rotateX: 270,
          duration: 1000
        })
        .from('#pracaTitle .text', {
          alpha: 0,
          rotateX: 270,
          y: 200,
          duration: 1000
        })
        .from("#pracaLogo", {
          alpha: 0,
          scale: 0.2,
          yPercent: 100,
          duration: 600
        })
        .from("#astroWork", {
          alpha: 0,
          xPercent: 20,
          duration: 4000
        }, 0)
        .to('#pracaTitle .title, #pracaTitle .text', {
          autoAlpha: 0,
          duration: 1200,
          y: -200
        })
        .to("#pracaLogo", {
          alpha: 0,
          rotate: 0,
          y: -1000,
          duration: 1000
        })

      gsap.timeline({
          scrollTrigger: {
            trigger: "#praca3",
            start: "top top",
            end: "+=1",
            scrub: 1,
            pin: false,
            onLeave: () => this.isPlaying.AstroWork = false,
            onEnterBack: () => this.isPlaying.AstroWork = true
          }
        })
        .to("#astroWork", {
          xPercent: -100,
          duration: 2500,
          opacity: 0,
          scale: 2
        })
    },
  },
  
  mounted() {
    this.playMyCV();
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
    })

    return {
      home
    }
  },
}
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