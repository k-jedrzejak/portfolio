<template>
	<TheToasterSvg/>
</template>

<script>
import TheToasterSvg from './TheToasterSvg.vue';
import { toggleGsapAnimations} from '@/utils';
import {loop, loopSineinOut, loopJump} from '@/constants'
import gsap from 'gsap';

const timeline = gsap.timeline();

export default ({
	name: "TheToaster",
	components: {TheToasterSvg},
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

			console.log(breadEyesPupils)
		/* stars */	
		
		stars.forEach((star, index) => {
			if(index%2 == 0) {
				timeline.from(star, {
					rotate: -360,
					y: 100,
					transformOrigin: '100% 50%',
					duration: 4,
					...loopSineinOut
				})
			}
			else{
				timeline.from(star, {
					y: 60,
					rotateZ: 360,
					transformOrigin: '50% 50%',
					duration: index + 1 ,
					delay: index + 1,
					repeatDelay: index + 1,
					...loopSineinOut
				},0)
			}

			timeline.to(star, {
				scale: .5,
				duration: 1,
				...loopSineinOut
			},0)
		});


		timeline

		/* toaster */	
		.from(toaster, {
			y: 0,
			duration:1,
			...loop
		}, 0)
		.to(toaster, {
			y: 40,
			rotate: -4,
			transformOrigin: '50% 50%',
			duration:1,
			...loopJump
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
		.from(tosterEyes, {
			scaleY: 0.1,
            transformOrigin: '50% 50%',
			repeat: -1,
			repeatDelay: 2,
		},0)
		.to(tosterEyes, {
			scaleY: 1,
			transformOrigin: '50% 50%',
            repeat: -1,
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
			.from(eye, {
			scaleY: 0.1,
			repeat: -1,
			repeatDelay: 6,
			transformOrigin: '50% 50%',
			},0)
			.to(eye, {
				scaleY: 1,
				repeat: -1,
				repeatDelay: 6,
				transformOrigin: '50% 50%',
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
