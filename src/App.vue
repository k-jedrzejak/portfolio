<template>
<HeaderSection/>
<router-view></router-view>
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

  },
  created() {
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
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
  // padding-bottom: 20vh;
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
}

// general
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: 0;
}

svg {
  title,
  desc {
    display: none;
  }
}

// background
// body {
//   background: var(--bg);
//   transition: background-color 0.4s ease-out;

//   &.blue-background {
//     background: #0497d1;

//     .header-nav-button .dots {
//       background: #000;
//     }

//     .header-nav a {
//       color: #000;
//     }

//     .header-nav a svg,
//     .header-breadcrumb,
//     .header-nav-close-button {
//       color: #411a91;
//       fill: #411a91;
//     }
//   }
// }

/* @element .nav-ico */
.nav-ico {
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  vertical-align: baseline;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: var(--light);

  &.-blank {
    vertical-align: middle;
  }

  // default
  &.-prev {
    transform: rotate(-180deg);
  }

  &.-next {
    transform: rotate(90deg);
  }
}

/*
 * @element .ariaLabel
 * Used just for accessibility info
 */
.ariaLabel {
  display: none;
}

/* @element .title */
.title {

  .func {
    color: var(--purple);
  }

  .params {
    color: $color-primary;
    font-weight: 400;
    letter-spacing: -2px;
  }
}

/* Responsive */
@media screen and (max-width: 1024px) {
  /* @layout */
  .container {
    // padding-bottom: 10vh;

    &:after {
      left: 1rem;
    }
  }

  /* @element .title */
  .title {
    margin-right: -4rem;
    font-size: 3.5rem;
  }

  /* @element .std */
  .text {
    .subtitle {
      margin-right: -4rem;
      font-size: 3.5rem;
      word-spacing: unset;
    }
  }
}

@media screen and (max-width: 568px) {
  /* @element .title */
  .title {
    margin-right: -2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.1;
  }

  /* @element .std */
  .text {
    .subtitle {
      margin-right: -2rem;
      font-size: 2rem;
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
   
    // transform: rotate(3deg) translate(0px, -4px);
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
