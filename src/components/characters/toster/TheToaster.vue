<template>
	<TheToasterSvg/>
</template>

<script>
import TheToasterSvg from './TheToasterSvg.vue';
import {loop, loopSineinOut, loopJump} from '@/constants'
import { setAnimation } from '../switchAnimation';
import { isProxy, toRaw } from 'vue';

export default ({
	name: "TheToaster",
	components: {TheToasterSvg},
	mixins: [setAnimation],
	props: {
      isPlaying: Boolean,
	},
	methods: {
		init() {
			const stars = document.querySelectorAll('#toaster .star');
			const toaster = document.querySelector('.toaster-img');
			const shadow = document.querySelector('.shadow');
			const tosterBtn = document.querySelector('.toster-button');
			const tosterEyes = document.querySelector('.toster-eyes');			
			const tosterMouth = document.querySelector('.toster-mouth');
			const bread = document.querySelector('.bread');
			const breadEyes = document.querySelectorAll('.bread-eye');
			const breadEyesPupils = document.querySelectorAll('.pupil');
			const breadArm1 = document.querySelector('.bread-arm1');
			const breadArm2 = document.querySelector('.bread-arm2');

			let timeline;
			if (isProxy(this.timeline)){
				timeline = toRaw(this.timeline);
			}	

			/* stars */	
			
			stars.forEach((star, index) => {
				if(index%2 == 0) {
					timeline.fromTo(star, {rotate: 360, y: -30},{
						rotate: -360,
						y: 20,
						transformOrigin: '100% 50%',
						duration: 4,
						...loopSineinOut,
					})
				}
				else{
					timeline.fromTo(star, {y: 0, rotate: -360}, {
						y: 60,
						rotateZ: 360,
						transformOrigin: '50% 50%',
						duration: index + 1 ,
						delay: index + 1,
						repeatDelay: index + 1,
						...loopSineinOut,
					},0)
				}

				timeline.fromTo(star, {scale: "random(0.7, 1)"}, {
					scale: .5,
					duration: 1,
					...loopSineinOut,
					repeatRefresh: true
				},0)
			});


			timeline
			/* toaster */	
			.fromTo(toaster, {y: 0, rotate: 0},{
				y: 40,
				rotate: -4,
				duration:1,
				transformOrigin: '50% 50%',
				...loopJump,
				repeatRefresh: true
			}, 0)


			/* shadow */	
			.from(shadow, {
				transformOrigin: '50% 50%',
				scaleX: 1.3,
				scaleY: 0.5,
				opacity: .85,
				duration: 1,
				...loopSineinOut
			})

			/* toaster button */	
			.from(tosterBtn, {
				y: 25,
				duration: 1,
				repeatDelay: 1,
				...loop
			}, 0)

			/* toaster eyes */	
			.fromTo(tosterEyes, {scaleY: 1},{
				scaleY: 1,
				transformOrigin: '50% 50%',
				repeat: -1,
				duration: 2,
				repeatDelay: .2,
			},0)
			.fromTo(tosterEyes, {scaleY: .1},{
				scaleY: 1,
				transformOrigin: '50% 50%',
				repeat: -1,
				delay: 2,
				duration: .2,
				repeatDelay: 2,
			},1)

			/* toaster mouth */	
			.from(tosterMouth, {
				scaleY: 0.1,
				transformOrigin: '50% 50%',
				repeat: -1,
				repeatDelay: 3
			},0)
			.to(tosterMouth, {
				scaleY: 1,
				transformOrigin: '50% 50%',
				repeat: -1,
				repeatDelay: 3,
			},1)

			/* bread*/	
			.from(bread, {
				y: -10,
				x: 0,
				rotate: 0,
				...loopSineinOut
			}, 0)
			.to(bread, {
				x: 20,
				duration:2,
				...loopSineinOut
			}, 0)
			.to(bread, {
				rotate: 40,
				transformOrigin: '50% 50%',
				duration:7,
				...loopSineinOut
			}, 0)
			.to(bread, {
				y:20,
				transformOrigin: '50% 50%',
				duration:2,
				...loopSineinOut
			}, 0)

			/* bread arms */
			.from(breadArm1, {
				rotate: 20,
				duration:1,
				transformOrigin: '50% 50%',
				...loopSineinOut
			}, 0)


			.from(breadArm2, {
				rotate: -30,
				duration:3,
				transformOrigin: '50% 50%',
			}, 0)


			/* bread eyes */
			breadEyes.forEach((eye) => {
				timeline
				.fromTo(eye, {scaleY: 1},{
					scaleY: 1,
					transformOrigin: '50% 50%',
					repeat: -1,
					duration: 3,
					repeatDelay: .2,
				},0)
				.fromTo(eye, {scaleY: .1},{
					scaleY: 1,
					transformOrigin: '50% 50%',
					repeat: -1,
					delay: 3,
					duration: .2,
					repeatDelay: 3,
				},1)
			})
			breadEyesPupils.forEach((pupil) => {
				timeline
				.from(pupil, {
					rotate: 160,
					transformOrigin: '100% 60%',
					duration: 2,
					repeatDelay: 2,
					...loop
				},0)
			})
		}
	}
})
</script>
