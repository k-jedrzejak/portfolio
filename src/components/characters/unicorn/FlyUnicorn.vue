
<template>
    <FlyUnicornSvg class="unicorn"/>
</template>

<script>
import FlyUnicornSvg from './FlyUnicornSvg.vue';
import gsap from 'gsap';

export default ({
    name: 'FlyUnicorn',
    components: { FlyUnicornSvg },
    data() {
        return {
            unicorn: null,
        }
    },
    methods: {
        init(element) {
          let pxPerSecond = 50;

          function moveUnicorn(element) {
            let newPos = {
              x:gsap.utils.random(-window.innerWidth / 2, window.innerWidth * 1.5),
              y:gsap.utils.random(-window.innerHeight / 2, window.innerHeight * 1.5)
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
               onComplete: moveUnicorn, 
               onCompleteParams:[element]
            }) 

            curPos.x > newPos.x ? 
            gsap.to(element,{scaleX: 1, duration: 0}) : 
            gsap.to(element,{scaleX: -1, duration: 0});
          }
            moveUnicorn(element);
        },

        doubleTapUnicorn(element) {
          let lastClick = 0;
          element.addEventListener('touchstart', (event) => {
            let date = new Date();
            let time = date.getTime();
            
            const time_between_taps = 200; 
            event.preventDefault(); 
            
            if (time - lastClick < time_between_taps) {
              // to do
            }
            lastClick = time;
          })
        },

        doubleClickUnicorn(element) {
          element.addEventListener('dblclick', () => {
             // to do
          })
        }
    },
    
    mounted() {
      this.unicorn = document.querySelector('.unicorn');
      this.init(this.unicorn);
      this.doubleTapUnicorn(this.unicorn);
      this.doubleClickUnicorn(this.unicorn);
    }
});

</script>

<style lang="scss" scoped>

#unicorn {
  @include size(20vw, auto);
  @include absolute(30%, null, null, -10%);
  z-index: 2000;

    @media screen and (min-width: $screen-desktop) {
      @include size(10vw, auto); 
    }
}
</style>

