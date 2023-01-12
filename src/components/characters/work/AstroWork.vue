<template>
	<AstroWorkSvg/>
</template>

<script>
import AstroWorkSvg from './AstroWorkSvg.vue';
import {loop, loopBounce, loopSineinOut} from '@/constants'
import { setAnimation } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';


export default ({
	name: "AstroWork",
	components: {AstroWorkSvg},
	mixins: [setAnimation],
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

			let timeline;
			if (isProxy(this.timeline)){
				timeline = toRaw(this.timeline);
			}
				

			/* stars */	
            stars.forEach((star) => {
				timeline
				.fromTo(star,  {rotate: -360 }, {
					rotate: 360,
                    transformOrigin: "50%, 50%",
					duration: 5,
					...loopSineinOut
				},0)
                .fromTo(star, { scale: 1.2 }, {
                    scale: .6,
                    duration: 3,
					...loop
                },0)
      
			});

			timeline
			.fromTo(astro, {x: 30, y: 45, rotate: -0}, {
				x: "random(-900, 40)",
				y:"random(-300,30)",
				rotate: "random(-360, 360)",
				duration: 13,
				repeatDelay: 2,
				...loopSineinOut,
				repeatRefresh: true
			}, 0)
			/* hand  */	
			.fromTo(hand, {rotateZ: 0, y: 2}, {
				rotateZ: 12,
				y: -2,
				duration: "random(1, 1.8)",
				transformOrigin: '50% 50%',
				...loopSineinOut,
				repeatRefresh: true
			},0)
			/* head  */	
			.fromTo(head, {rotateZ: 0},{
				rotateZ: 10,
				duration: 3,
				transformOrigin: '30% 50%',
				...loopSineinOut
			},0)
			/* light  */	
			.fromTo(light, {opacity: 0.1}, {
				opacity: "random(0.2, 0.4)",
				duration: "random(3, 6)",
				...loopBounce,
				repeatRefresh: true
			},0)
		}
	}
})
</script>
