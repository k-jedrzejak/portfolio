
<template>
    <UfoRhinoSvg />
</template>

<script>
import UfoRhinoSvg from './UfoRhinoSvg.vue';
import {loopSineInOut, loopBounce, basicLoop} from '@/constants';
import { setAnimation } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';

export default ({
    name: 'UfoRhino',
    components: { UfoRhinoSvg },
	mixins: [setAnimation],
	props: {
      isPlaying: Boolean,
    },
    methods: {
        init() {
		const rhino = document.querySelector('#ufoRhino #Rhino');
		const shadow = document.querySelector('#ufoRhino #bottomshadow');
		const clouds = document.querySelectorAll('#ufoRhino .cloud');
		const lasers = document.querySelectorAll('#ufoRhino .laser');
		const eye = document.querySelector('#ufoRhino .eye');
		const mouth = document.querySelector('#ufoRhino .mouth');
		const ufo = document.querySelector('#ufoRhino #ufo');
		const btns = document.querySelectorAll('#ufoRhino .btn');
		const grass = document.querySelectorAll('#ufoRhino .grass')

		let timeline;
		if (isProxy(this.timeline)){
			timeline = toRaw(this.timeline);
		}		

		/* grass */
		grass.forEach((item) => {
			timeline
			.fromTo(item, {rotateZ: 4}, {
				rotateZ: "random(-7, 3)",
				duration: "random(1, 3)",
				transformOrigin: "50% 50%",
				...loopSineInOut,
				repeatRefresh: true
			},0)
		})

		/* btns */	
		btns.forEach((btn) => {
			timeline
			.fromTo(btn, {opacity: 1},{
				opacity:.4,
				duration: 1,
				...loopBounce
			})
		})

		/* laser */	
		lasers.forEach((laser) => {
			timeline
			.fromTo(laser, {opacity: 1}, {
				opacity:"random(0.3, 1)",
				duration: "random(0.3, 1.3)",
				...loopSineInOut,
				repeatRefresh: true,
			},0)
		})
	
		/* clouds */	
		clouds.forEach((cloud, index) => {
			if(index%2 == 0) {
				timeline
				.fromTo(cloud,{x: 30}, {
					x: "random(-30, 20)",
					duration: index + 3 ,
					...loopSineInOut,
					repeatRefresh: true,
				},0)
			}
			else{
				timeline
				.fromTo(cloud, {x: -30}, {
					x: "random(-20, 20)",
					duration: "random(1, 3)" ,
					...loopSineInOut,
					repeatRefresh: true,
				},0)
			}
		});

		timeline
		/* rhino  */
			.fromTo(rhino, {y: 10}, {
				y: "random(-60, -30)",
				duration: 3,
				...loopSineInOut,
				repeatRefresh: true
			},0)

		/* shadow  */	
			.from(shadow, {
				transformOrigin: '50% 50%',
				scaleX: 1.1,
				scaleY: 0.5,
				duration: 3,
				repeatDelay: 0,
				...basicLoop
			},0)
			.to(shadow, {
				transformOrigin: '50% 50%',
				scaleX: .8,
				scaleY: 1,
				duration: 3,
				repeatDelay: 0,
				...basicLoop
			},1)
			.from(shadow, {
				rotateZ: -6,
				duration: 2,
				transformOrigin: '50% 50%',
				repeatDelay: 3,
				...basicLoop
			},0)
			.to(shadow, {
				rotateZ: 2,
				duration: 2,
				transformOrigin: '50% 50%',
				repeatDelay: 3,
				...basicLoop
			},0)
		/* alien eye  */	
			.fromTo(eye, {scaleY: 1},{
				scaleY: 1,
				transformOrigin: '50% 50%',
				repeat: -1,
				duration: 2,
				repeatDelay: .2,
			},0)
			.fromTo(eye, {scaleY: .1},{
				scaleY: 1,
				transformOrigin: '50% 50%',
				repeat: -1,
				delay: 2,
				duration: .2,
				repeatDelay: 2,
			},1)
		/* alien mouth  */
			.fromTo(mouth, {scaleY: 1}, {
				scaleY: .1,
				duration: 1,
				transformOrigin: '4% 4%',
				repeatDelay: 4,
				...loopSineInOut
			},0)

		/* ufo */
			.fromTo(ufo,{rotateZ: 6},{
				rotateZ: -2,
				duration: 2,
				repeatDelay: 3,
				...loopSineInOut
			},0)
        }
    },
});

</script>
