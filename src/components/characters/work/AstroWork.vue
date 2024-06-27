<template>
	<AstroWorkSvg/>
</template>

<script>
import AstroWorkSvg from './AstroWorkSvg.vue';
import {basicLoop, loopBounce, loopSineInOut, loopBackInOut} from '@/constants'
import { setAnimation } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';


export default ({
	name: "AstroWork",
	components: {AstroWorkSvg},
	mixins: [setAnimation],
	props: {
		isPlaying: Boolean,
	},
	data() {
		return { 
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			astroWidth: null,
			astroHeight: null,
		}
	},
	methods: {
		init() {
			const astro = document.querySelector('#astroWork');
            const stars = document.querySelectorAll('#astroWork .star');
			const hand = document.querySelector('#astroWork #hand');
			const head = document.querySelector('#astroWork #head');
			const light = document.querySelector('#astroWork #light');
			this.astroWidth = astro.getBoundingClientRect().width;
			this.astroHeight= astro.getBoundingClientRect().height;

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
					...loopSineInOut
				},0)
                .fromTo(star, { scale: 1.2 }, {
                    scale: .6,
                    duration: 3,
					...basicLoop
                },0)
      
			});

			timeline
			/* hand  */	
			.fromTo(hand, {rotateZ: 0, y: 2}, {
				rotateZ: 12,
				y: -2,
				duration: "random(1, 1.8)",
				transformOrigin: '50% 50%',
				...loopSineInOut,
				repeatRefresh: true
			},0)
			/* head  */	
			.fromTo(head, {rotateZ: 0},{
				rotateZ: 10,
				duration: 3,
				transformOrigin: '30% 50%',
				...loopSineInOut
			},0)
			/* light  */	
			.fromTo(light, {opacity: 0.1}, {
				opacity: "random(0.2, 0.4)",
				duration: "random(3, 6)",
				...loopBounce,
				repeatRefresh: true
			},0)

			const astroMove = (windowWidth, elementWidth, windowHeight, elementHeight) => {
				timeline
					.fromTo(astro, {x: 30, y: 45, rotate: -0}, {
					x: `random(${-windowWidth + elementWidth}, 50)`,
					y: `random(${-windowHeight + elementHeight}, 60)`,
					rotate: "random([-360, -180, -30, 30, 180, 360])",
					duration: 13,
					...loopBackInOut,
					repeatRefresh: true
				}, 0)
			}
			astroMove(this.windowWidth, this.astroWidth, this.windowHeight, this.astroHeight)
		}
	}
})
</script>
