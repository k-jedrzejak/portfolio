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
      document.body.classList.add('is-nav-open')
    },
    closeMenu() {
      document.body.classList.remove('is-nav-open')
    },
  }
}
</script>

<style lang="scss">
    @import '@/scss/layout/_header.scss';
</style>