<template>
  <HeaderSection/>
  <router-view :key="$route.fullPath"></router-view>
  <FooterSection />
</template>

<script>
    import 'animate.css';
    import HeaderSection from '@/components/HeaderSection.vue'
    import FooterSection from '@/components/FooterSection.vue'
    // import SpineLine from './components/SpineLine.vue'


export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection,
    // SpineLine
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
  @include relative;
  z-index: 1;
  min-height: 100vh;
  @include transition;

  &:after {
    content: '';
    display: block;
    @include absolute(50vh, null, 50vh, calc(25vw - 2rem));
    @include size(1px);
    z-index: 99;
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
    @include size(100%, 5px);
    @include fixed(0, null, null, 0);
    background: $color-primary;
    z-index: 1031;
  }

  .peg {
    display: block;
    @include absolute($right: 0);
    @include size(100px, 100%);
    opacity: 1;
  }
}

.nprogress-custom-parent {
  overflow: hidden;
  @include relative;

  #nprogress {
    .spinner,
    .bar {
      @include absolute;
    }
  }
}
</style>
