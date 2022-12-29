
<template>
    <UfoRhinoSvg />
</template>

<script>
import UfoRhinoSvg from './UfoRhinoSvg.vue';
import gsap from 'gsap';
import {loopSineinOut} from '@/constants'

export default ({
    name: 'UfoRhino',
    components: { UfoRhinoSvg },
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
		const grass = document.querySelectorAll('#ufoRhino .grass');

        const tl = gsap.timeline();




		/* grass */	
		grass.forEach((item, index) => {
		tl
		.from(item, {
			rotateZ: 4,
			duration: index + 1,
			delay: index + 1,
			transformOrigin: "50% 50%",
			...loopSineinOut
		},0)
	})

/* btns */	
btns.forEach((btn, index) => {
		tl
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
		tl
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
				tl.from(cloud, {
					x: -30,
					duration: 4,
					...loopSineinOut
				})
			}
			else{
				tl.from(cloud, {
					x: 30,
					duration: index + 1 ,
					delay: index + 1,
					repeatDelay: index + 1,
					...loopSineinOut
				},0)
			}
		});


			tl
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
				...loopSineinOut
			},0)
			.from(shadow, {
				transformOrigin: '50% 50%',
				scaleX: .8,
				scaleY: 1,
				duration: 3,
				...loopSineinOut
			},1)
			.from(shadow, {
			rotateZ: -6,
			duration: 2,
			repeatDelay: 3,
			...loopSineinOut
		},0)
		.to(shadow, {
			rotateZ: 2,
			duration: 2,
			repeatDelay: 3,
			...loopSineinOut
		},0)
			/* alien eye  */	
			.from(eye, {
			scaleY: 0.1,
            transformOrigin: '50% 50%',
			repeat: -1,
			repeatDelay: 2,
		})
		.to(eye, {
			scaleY: 1,
            repeat: -1,
            repeatDelay: 2,
		})
		/* alien mouth  */
		.from(mouth, {
			scaleY: .1,
            transformOrigin: '4% 4%',
			duration: 1,
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
    }
});

</script>
