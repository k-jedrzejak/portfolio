<template>
    <div>
          <button
            title="Open menu"
            type="button"
            class="header-nav-button"
            @click="openMenu">
            <span class="dots dot1"></span>
            <span class="dots dot2"></span>
            <span class="dots dot3"></span>
        </button>
        <nav class="nav animate__animated animate__fadeIn">
            <button
                title="Close menu"
                type="button"
                class="header-nav-button-close"
                @click="closeMenu">
                <span class="label">✕</span>
            </button>
            <ul class="nav-items">
                <li class="nav-item"
                    v-for="(router, index) in this.links"
                    :key="index">
                    <a  :href="$router.resolve({name: router.name}).href"  
                        :title= router.name
                        :id="`${router.name.replace('.','')}`"
                        class="nav-link" >{{router.name}}</a>
                </li>
                <li class="nav-item">
                    <a :href="`mailto:${data.email}`" 
                        title="Send me an email" 
                        class="nav-link">.contact</a >
                </li>
                <li
                    v-for="(link, index) in socialLinks"
                    :key="index"
                    class="nav-item social-item">
                    <a
                        :href="link.url"
                        :title="link.title"
                        class="nav-link social-link"
                        target="_blank">
                        <font-awesome-icon :icon="['fab', link.icon]"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
    import {fetchData} from '@/utils';
    import {routes} from '../router/index';

    export default {
        name: 'NavSection',
        data() {
            return {
                data: {},
                links: routes,
                socialLinks: [
                    {
                        name: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/kjedrzejak/',
                        icon: 'linkedin'
                    }, {
                        name: 'GitHub',
                        url: 'https://github.com/k-jedrzejak',
                        icon: 'github'
                    }
                ]
            }
        },
        async mounted() {
            this.data = await fetchData()   
            let activeRouterName = this.$router.currentRoute.value.name.replace('.','')
            let activeNavItem = document.querySelector(`#${activeRouterName}`)
            activeRouterName  === activeNavItem.id ? activeNavItem.classList.add('active') : ''; 
        },
        methods: {
            openMenu() {
                this.$emit('openMenu')
            },
            closeMenu() {
                this.$emit('closeMenu')
            }
        },

       
    }
</script>
  
<style lang="scss">
  @import '@/scss/layout/_navigation.scss';
</style>