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
    const timeline = gsap.timeline();

			timeline
      .from(spine, {
        yPercent: 200,
				duration: 2,
        ease: "back.out(1.7)"
			},0)
			.to(spine,{
				yPercent: 0
			},
      )
      .from(spineTarget, {
        duration: .2,
                scale: 0,
        transformOrigin: "50% 50%"
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
  @include size(1px);
  @include fixed(calc(50vh - 9px), null, 0,  calc(25vw - 2rem));
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(0deg, rgba(222, 12, 120, 0) 0%, rgba(222, 12, 120, 0.3508753843334209) 26%, rgba(222, 12, 120, 1) 100%);

  @media screen and (max-width: 1024px) {
    left: 1rem;
  }
}

.spine-target {
  @include size(9px, 9px);
  pointer-events: none;
  @include absolute(-4.5px, null, null, calc(1rem - 20px));
  z-index: 2;
  background: $color-primary;
  border-radius: 50%;
}

</style>
