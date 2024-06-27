
<template>
    <FlyUnicornSvg class="unicorn" @change="openGame" />
</template>

<script>
import FlyUnicornSvg from './FlyUnicornSvg.vue';
import gsap from 'gsap';
import {loopSineInOut} from '@/constants';

export default ({
    name: 'FlyUnicorn',
    props: ['game'],
    components: { FlyUnicornSvg},
    data() {
        return {
            unicorn: null,
        }
    },
    methods: {
      unicornAnimation() {
        const uni = document.querySelectorAll('#unicorn');
        const uniFringe = document.querySelectorAll('#unicorn .hair1');
        const uniEye = document.querySelector('#unicorn .eye');
        const uniHair = document.querySelectorAll('#unicorn .hair2');
        const umbrella = document.querySelector('#unicorn .umbrella');
        const umbrellaStick = document.querySelectorAll('#unicorn .umbrella-stick');
        const hand = document.querySelectorAll('#unicorn .hand');
        const timeline = gsap.timeline();
  
        uniFringe.forEach(hair => {
          timeline
            .fromTo(hair, {rotateZ: 0}, {
              rotateZ: 5,
              duration: 1.3,
              transformOrigin: "100% 50%",
              ...loopSineInOut,
            },0 )
        })

        uniHair.forEach(hair => {
          timeline
            .fromTo(hair, {y: 0, x: -1}, {
              y: 1,
              x: 1,
              duration: 1.3,
              transformOrigin: "50% 50%",
              ...loopSineInOut
            },0 )
        })

        timeline
       /* unicorn */	
        .fromTo(uni, { rotateZ: 1}, {
          rotateZ: "random(2, 6)",
          duration: "random(1, 2)",
          ...loopSineInOut,
          repeatRefresh: true
        },0)
        /* umbrella */	
        .fromTo(umbrella, {rotateZ: -2, x: 1}, {
              rotateZ: 2,
              x: 1,
              duration: 1,
              transformOrigin: "50% 50%",
              ...loopSineInOut
            },0 )

        /* umbrella stick */	
        .fromTo(umbrellaStick, {rotateZ: -2, x: -2.5}, {
            rotateZ: 2,
            x: -2.5,
            duration: 1,
            transformOrigin: "50% 50%",
            ...loopSineInOut
        },0 )

        /* hand  */	
        .fromTo(hand, {rotateZ: 2}, {
            rotateZ: -2,
            duration: 1,
            transformOrigin: "100% 100%",
            ...loopSineInOut
          },0 )

        /* eye  */	
        .fromTo(uniEye, {scaleY: 1},{
          scaleY: 1,
          transformOrigin: '50% 50%',
          repeat: -1,
          duration: 2,
          repeatDelay: .2,
        },0)

        .fromTo(uniEye, {scaleY: .1},{
          scaleY: 1,
          transformOrigin: '50% 50%',
          repeat: -1,
          delay: 2,
          duration: .2,
          repeatDelay: 2,
        },1)
      },

      moveUnicorn(element) {
        let pxPerSecond = 50;
        let newPos = {
          x:gsap.utils.random(-window.innerWidth, window.innerWidth * 2),
          y:gsap.utils.random(-window.innerHeight, window.innerHeight * 2)
        }

        let curPos = {
          x:gsap.getProperty(element, "x"),
          y:gsap.getProperty(element, "y")
        }

        let deltaX = curPos.x - newPos.x
        let deltaY = curPos.y - newPos.y
        let distance = Math.hypot(deltaX, deltaY)
        let duration = distance / pxPerSecond

        gsap.to(element, {
          x: newPos.x, 
          y: newPos.y, 
          duration: duration, 
          ease:"none",
          onComplete: this.moveUnicorn, 
          onCompleteParams:[element]
        }) 

        curPos.x > newPos.x ? 
          gsap.to(element,{scaleX: 1, duration: 0}) : 
          gsap.to(element,{scaleX: -1, duration: 0});
        },

        doubleTapUnicorn(element) {
          let lastClick = 0;
          element.addEventListener('touchstart', () => {
            let date = new Date();
            let time = date.getTime();
            
            const time_between_taps = 200; 
            if (time - lastClick < time_between_taps) {
              this.openGame();
            }
            lastClick = time;
          }, {passive: true})
        },

        doubleClickUnicorn(element) {
          element.addEventListener('dblclick', () => {
            this.openGame();
          })
        },

        openGame() {
          this.setGame = true
          this.$emit('openGame')
        },
    },
    
    mounted() {
      this.unicorn = document.querySelector('.unicorn');
      this.unicornAnimation();
      this.moveUnicorn(this.unicorn);
      this.doubleTapUnicorn(this.unicorn);
      this.doubleClickUnicorn(this.unicorn);
    },

});

</script>


<style lang="scss" scoped>

#unicorn {
  @include size(34vw, auto);
  @include absolute(30%, null, null, 10%);
  z-index: 2000;
  cursor: pointer;

    @media screen and (min-width: $screen-desktop) {
      @include size(12vw, auto); 
    }
}
</style>

