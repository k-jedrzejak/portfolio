
<template>
    <FlyUnicornSvg />
</template>

<script>
import FlyUnicornSvg from './FlyUnicornSvg.vue';
import gsap from 'gsap';
let randomNumber = Math.floor( Math.random(100, window.innerWidth));

export default ({
    name: 'FlyUnicorn',
    components: { FlyUnicornSvg },
    methods: {
        init() {
            const tl = gsap.timeline();
            tl
            .to("#unicorn", {
                x: `${randomNumber}`,
  y: "random(-15, 35)",
  ease: "power1.inOut",
  duration: 3, 
  repeatDelay: 10,
  repeat: -1,
  repeatRefresh: true
  });

        }
    },
    mounted() {
        this.init();
    }
});

</script>
