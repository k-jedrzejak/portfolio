import gsap from 'gsap'

export const character = {
  props: {
    isPlaying: Boolean,
  },
  data() {
    return {
      timeline: null,
    }
  },
  mounted() {
    this.timeline = gsap.timeline();
    this.init()
    this.toggleAnimation()
  },
  beforeUnmount() {
    this.destroy()
  },
  watch: {
    isPlaying() {
      this.toggleAnimation()
    },
    svg() {
      this.toggleAnimation()
    },
  },
  methods: {
    destroy() {
      this.timeline.kill()
      this.timeline = null
    },

    toggleGsapAnimations(isPlaying) {
      if (isPlaying) {
        this.timeline.play()
      } else {
        this.timeline.pause()
      }
    },
    toggleAnimation() {
      this.toggleGsapAnimations(this.isPlaying)
    },
  },
}
