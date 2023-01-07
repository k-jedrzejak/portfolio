<template>
	<AstroWorkSvg/>
</template>

<script>
import AstroWorkSvg from './AstroWorkSvg.vue';
import {loop, loopSineinOut} from '@/constants'
import { toggleGsapAnimations} from '@/utils'
import gsap from 'gsap';

const timeline = gsap.timeline();

export default ({
	name: "AstroWork",
	components: {AstroWorkSvg},
	props: {
		isPlaying: Boolean,
	},
	methods: {
		init() {
			const astro = document.querySelectorAll('#astroWork');
            const stars = document.querySelectorAll('#astroWork .star');
			const hand = document.querySelectorAll('#astroWork #hand');
			const head = document.querySelectorAll('#astroWork #head');
			const light = document.querySelectorAll('#astroWork #light');

			/* stars */	
		
            stars.forEach((star) => {
              
				timeline.from(star, {
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

		timeline
		.from(astro, {
			y: 10,
			x: 0,
			rotate: 0,
			...loopSineinOut
		}, 0)
		.to(astro, {
			x: 20,
			y: -10,
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
		this.init();
		toggleGsapAnimations(this.isPlaying, timeline);
	},
	watch: {
		isPlaying() {
			toggleGsapAnimations(this.isPlaying, timeline);
		},
	},
	
})
</script>
