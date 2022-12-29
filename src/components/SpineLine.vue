<template>

    <div class="spine">

    <div class="spine-target">
    </div>
    </div>

</template>

<script>
import gsap from 'gsap';


export default {
  name: 'SpineLine',
  methods: {
  init() {
    const spine = document.querySelector('.spine');
		const spineTarget = document.querySelector('.spine-target');
        
    const tl = gsap.timeline();

			
			tl
			.from(spine, {
        yPercent: 200,
				duration: 4,
        ease: "back.out(1.7)"
			},0)
			.to(spine,{
				yPercent: 0
			},
      )
      .from(spineTarget, {
        duration: .2,
                scale: 0,
        transformOrigin: "-50% -100%"
      })
        }
      },
         mounted() {
        this.init();
    }
  
}
</script>

<style lang="scss">
.spine {
  pointer-events: none;
  position: fixed;
  top: 50vh;
  bottom: 0;
  left: calc(25vw - 2rem);
  z-index: 2;
  width: 1px;
  background: linear-gradient(0deg, rgba(222,12,120,0) 0%, rgba(222,12,120,0.3508753843334209) 26%, rgba(222,12,120,1) 100%);  @media screen and (max-width: 1024px) {
    left: 1rem;
  }
}
.spine-target {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: calc(1rem - 20px);
  width: 9px;
  height: 9px;
  z-index: 2;
  background: $color-primary;
  border-radius: 50%;
}
</style>
