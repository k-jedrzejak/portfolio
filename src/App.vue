<template>
  <HeaderSection/>
  <router-view :key="$route.fullPath"></router-view>
  <FooterSection />
  <SpineLine />
</template>

<script>
    import 'animate.css';
    import HeaderSection from '@/components/HeaderSection.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import SpineLine from './components/SpineLine.vue'


export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection,
    SpineLine
  },
  methods: {
    scrollTop() {
      window.onbeforeunload = () => window.scroll(0, 0);
    }
  },
  mounted() {
    this.scrollTop();
  }
}
</script>

<style lang="scss">
@import 'scss-reset/_reset.scss';
@import './scss/base/general';

#app {
  overflow: hidden;
  margin: 0 auto;
}

.container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  transition: opacity 0.5s linear;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50vh;
    bottom: 50vh;
    left: calc(25vw - 2rem);
    z-index: 99;
    width: 1px;
    opacity: 0.3;
    background: linear-gradient(0deg, rgba(222,12,120,0) 0%, rgba(222,12,120,0.7710434515603116)1%, rgba(222,12,120,0.8242647400757178) 99%, rgba(222,12,120,0) 100%);  }

    @media screen and (max-width: $screen-desktop){
      &:after {
        left: 1rem;
      }
    }
}

// NProgress custom CSS
#nprogress {
  pointer-events: none;

  .bar {
    background: $color-primary;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }

  .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    opacity: 1;
  }
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;

  #nprogress {
    .spinner,
    .bar {
      position: absolute;
    }
  }
}
</style>
