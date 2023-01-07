
<template>
    <UfoRhinoSvg />
</template>

<script>
import UfoRhinoSvg from './UfoRhinoSvg.vue';
import {loopSineinOut} from '@/constants';
import { toggleGsapAnimations} from '@/utils'
import gsap from 'gsap';

const timeline = gsap.timeline();


export default ({
    name: 'UfoRhino',
    components: { UfoRhinoSvg },
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

		/* grass */
		
		grass.forEach((item) => {
			timeline
			.from(item, {
				rotateZ: 4,
				duration: 2,
				transformOrigin: "50% 50%",
				...loopSineinOut
			},0)
			.to(item, {
				rotateZ: -6,
				duration: 2,
				transformOrigin: "50% 50%",
				...loopSineinOut
			},1)
		})

		/* btns */	
		btns.forEach((btn, index) => {
			timeline
			.from(btn, {
				opacity:.4,
				duration: index + 1,
				delay: index + 1,
				...loopSineinOut
			},0)
			.to(btn, {
				opacity: 1,
				duration: index + 1,
				delay: index + 1,
				...loopSineinOut
			},0)
		})

		/* laser */	
		lasers.forEach((laser) => {
			timeline
			.from(laser, {
				opacity:.4,
				duration: 1,
				...loopSineinOut
			},0)
			.to(laser, {
				opacity: 1,
				duration: 3,
				...loopSineinOut
			},0)
		})
	
	
		/* clouds */	
		
		clouds.forEach((cloud, index) => {
			if(index%2 == 0) {
				timeline
				.from(cloud, {
					x: -30,
					duration: index + 3 ,
					...loopSineinOut
				},0)
				.to(cloud, {
					x: 30,
					duration: index + 3 ,
					...loopSineinOut
				},1)
			}
			else{
				timeline
				.from(cloud, {
					x: 30,
					duration: index + 3 ,
					...loopSineinOut
				},0)
				.to(cloud, {
					x: -30,
					duration: index + 3 ,
					...loopSineinOut
				},1)
			}
		});

		
		timeline

		/* rhino  */
			.from(rhino, {
				y: -60,
				duration: 3,
				...loopSineinOut
			},0)
			.to(rhino, {
				y: 10,
				duration: 3,
				...loopSineinOut
			},1)

		/* shadow  */	
			.from(shadow, {
				transformOrigin: '50% 50%',
				scaleX: 1.1,
				scaleY: 0.5,
				duration: 3,
				repeatDelay: 0,
				...loopSineinOut
			},0)
			.to(shadow, {
				transformOrigin: '50% 50%',
				scaleX: .8,
				scaleY: 1,
				duration: 3,
				repeatDelay: 0,
				...loopSineinOut
			},1)
			.from(shadow, {
				rotateZ: -6,
				duration: 2,
				transformOrigin: '50% 50%',
				repeatDelay: 3,
				...loopSineinOut
			},0)
			.to(shadow, {
				rotateZ: 2,
				duration: 2,
				transformOrigin: '50% 50%',
				repeatDelay: 3,
				...loopSineinOut
			},0)
		/* alien eye  */	
			.from(eye, {
				scaleY: 1,
				duration: .1,
				repeatDelay: 0,
				transformOrigin: '50% 50%',
				...loopSineinOut
			},0)
			.to(eye, {
				scaleY: .1,
				duration: .2,
				repeatDelay: 3,
				transformOrigin: '50% 50%',
				...loopSineinOut
			},1)
		/* alien mouth  */
			.from(mouth, {
				scaleY: 1,
				duration: 1,
				transformOrigin: '4% 4%',
				repeatDelay: 10,
				...loopSineinOut
			},0)
			.to(mouth, {
				scaleY: .1,
				duration: 1,
				transformOrigin: '4% 4%',
				repeatDelay: 3,
				...loopSineinOut
			},0)

		/* ufo */
			.from(ufo, {
				rotateZ: 6,
				duration: 2,
				repeatDelay: 3,
				...loopSineinOut
			},0)
			.to(ufo, {
				rotateZ: -2,
				duration: 2,
				repeatDelay: 3,
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
});

</script>
