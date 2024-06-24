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
                    v-for="(router, index) in this.routes"
                    :key="index">
                    <router-link  
                        :to="{ name: router.name}"  
                        :title= router.name
                        class="nav-link" 
                        >{{router.name}}
                        
                    </router-link>
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
                        <font-awesome-icon :title=link.icon :icon="['fab', link.icon]" aria-hidden="true"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
    import {fetchData} from '@/utils';
    import router from '../router/index';

    export default {
        name: 'NavSection',
        data() {
            return {
                data: {},
                routes: router.options.routes,
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