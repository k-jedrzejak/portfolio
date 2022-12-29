
<template>
    <AstroMagentoSvg />
</template>

<script>
import AstroMagentoSvg from './AstroMagentoSvg.vue';
import gsap from 'gsap';
import {loopSineinOut} from '@/constants'

export default ({
    name: 'AstroMagento',
    components: { AstroMagentoSvg },
    methods: {
        init() {
        const head = document.querySelector('#astroMagento .head');
		const astro = document.querySelector('#astroMagento .astro');
		const handRight = document.querySelectorAll('#astroMagento .hand-right');
		const handLeft = document.querySelector('#astroMagento .hand-left');
		const twine = document.querySelector('#astroMagento .twine');
		const magento = document.querySelector('#astroMagento .magento');
        const tl = gsap.timeline();

        handRight.forEach((item) => {
				tl.from(item, {
					y: "20",
					duration: 2,
					repeatDelay: 4,
					...loopSineinOut
				},0)
			})
			
			tl
			.from(astro, {
				y: 25,
				rotateZ: 1,
				duration: 3,
				...loopSineinOut
			},0)
			.from(head,{
				x: 10,
				rotateZ: 3,
				repeatDelay: 2,
				duration:3,
				transformOrigin: '50% 50%',
				...loopSineinOut
			},0)
			.from(handLeft,{
					rotateZ: -5,
					y: 2,
					duration: 4,
					repeatDelay: 3,
					transformOrigin: '80% 10%',
					...loopSineinOut
					
			},0)
			.from(twine,{
					rotateZ: 20,
					duration: 1,
					transformOrigin: '80% 10%',
					...loopSineinOut
					
			},0)
			.from(twine,{
					y:11,
					duration: 4,
					repeatDelay: 3,
					...loopSineinOut	
			},0)
			.from(magento,{
					rotateZ:2,
					transformOrigin: '50% 100%',
					duration: 4,
					repeatDelay: 1,
					...loopSineinOut
					
			},0)
			.from(magento,{
					rotateZ:-2,
					duration: 4,
					repeatDelay: 1,
					...loopSineinOut
			},0)
        }
    },
    mounted() {
        this.init();
    }
});

</script>
