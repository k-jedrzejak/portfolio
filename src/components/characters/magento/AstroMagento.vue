<template>
    <AstroMagentoSvg />
</template>

<script>
import AstroMagentoSvg from './AstroMagentoSvg.vue';
import {loopSineinOut} from '@/constants'
import { character } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';

export default ({
    name: 'AstroMagento',
    components: { AstroMagentoSvg },
	mixins: [character],
	props: {
		isPlaying: Boolean,
	},
    methods: {
        init() {
			let timeline;
			if (isProxy(this.timeline)){
				timeline = toRaw(this.timeline);
			}		

			const head = document.querySelector('#astroMagento .head');
			const astro = document.querySelector('#astroMagento .astro');
			const handRight = document.querySelectorAll('#astroMagento .hand-right');
			const handLeft = document.querySelector('#astroMagento .hand-left');
			const twine = document.querySelector('#astroMagento .twine');

			handRight.forEach((item) => {
			timeline.fromTo(item, {y: -8}, {
				duration: 2, 
				y: 10, 
				repeatDelay: 4,
				...loopSineinOut
				}, 0)
			})
			timeline
			.fromTo(astro, {y: -45, x: 0, rotateZ: -1}, {
				y: "random(-110, 110)",
				x: "random(-10, 100)",
				rotateZ: 1,
				duration: "random(1, 4)",
				...loopSineinOut,
				repeatRefresh: true
			},0)
			.fromTo(head, {x: -10, rotateZ: -3},{
				x: 10,
				rotateZ: 3,
				repeatDelay: 3,
				duration: "random(1, 4)",
				transformOrigin: '50% 50%',
				...loopSineinOut,
				repeatRefresh: true,
			},0)
			.fromTo(handLeft, {y: 5, rotateZ: 5},{
				y: 1,
				rotateZ: -5,
				duration: 4,
				repeatDelay: 3,
				transformOrigin: '80% 10%',
				...loopSineinOut	
			},0)
			.fromTo(twine, {rotateZ: -20}, {
				rotateZ: 20,
				duration: 1,
				transformOrigin: '80% 10%',
				...loopSineinOut			
			},0)
			.fromTo(twine, {y: -11}, {
				y:11,
				duration: 4,
				repeatDelay: 3,
				...loopSineinOut	
			},0)
        },
    },
});

</script>
