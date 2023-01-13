<template>
  <header id="header">
    <div class="header-container">
      <div class="breadcrumbs animate__animated animate__slideInLeft">{{ $route.name }}</div>

      <NavSection @openMenu="openMenu" @closeMenu="closeMenu"/>
    </div>
  </header>
</template>
<script>

import NavSection from '@/components/NavSection.vue';
import { removeBodyClass, addBodyClass} from '@/utils';

export default {
  name: 'HeaderSection',
  components: { NavSection },
  props: ['progress'],
  data() {
    return {
      data: {},
    }
  },
    methods: {
    openMenu() {
      addBodyClass('is-nav-open')
    },
    closeMenu() {
      removeBodyClass('is-nav-open')
    },
  }
}
</script>

<style lang="scss">
    @import '@/scss/layout/_header.scss';
</style>