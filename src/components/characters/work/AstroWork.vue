<template>
	<AstroWorkSvg/>
</template>

<script>
import AstroWorkSvg from './AstroWorkSvg.vue';
import gsap from 'gsap';
import {loop, loopSineinOut} from '@/constants'

export default ({
	name: "AstroWork",
	components: {AstroWorkSvg},
	methods: {
		init() {
			const astro = document.querySelectorAll('#astroWork');
            const stars = document.querySelectorAll('#astroWork .star');
			const hand = document.querySelectorAll('#astroWork #hand');
			const head = document.querySelectorAll('#astroWork #head');
			const light = document.querySelectorAll('#astroWork #light');
			const tl = gsap.timeline();

			/* stars */	
		
            stars.forEach((star) => {
              
				tl.from(star, {
					rotate: 360,
                    scale: 1,
                    transformOrigin: "50%, 50%",
					duration: 5,
					...loopSineinOut
				},0)
                .to(star, {
                    scale: .6,
                    duration: 3,
					...loop
                },0)
      
		});

		tl


		.from(astro, {
			y: -10,
			x: 0,
			rotate: 0,
			...loopSineinOut
		}, 0)
		.to(astro, {
			x: 20,
			duration:2,
			...loopSineinOut
		}, 0)
		.to(astro, {
			rotate: 40,
			transformOrigin: '50% 50%',
			duration:7,
			...loopSineinOut
		}, 0)
		.to(astro, {
			y:20,
			transformOrigin: '50% 50%',
			duration:2,
			...loopSineinOut
		}, 0)

		// /* hand  */	
		.from(hand, {
			rotateZ: 12,
			y: -2,
			duration: .3,
			transformOrigin: '50% 50%',
			...loopSineinOut
		},0)
		.to(hand, {
			rotateZ: 0,
			y: 2,
			duration: .5,
			...loopSineinOut
		},1)

		/* head  */	
		.from(head, {
			rotateZ:0,
			duration: 3,
			transformOrigin: '50% 50%',
			...loopSineinOut
		},0)
		.to(head, {
			rotateZ: -20,
			y: 2,
			duration: 3,
			...loopSineinOut
		},1)

		/* light  */	
		.from(light, {
			opacity:.1,
			duration: 1,
			...loopSineinOut
		},0)
		.to(light, {
			opacity:.4,
			duration: 3,
			...loopSineinOut
		},0)
		
		}
	},
	mounted() {
		this.init()
	}
	
})
</script>
