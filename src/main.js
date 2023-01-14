import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from '@vueuse/motion'
import gsap from 'gsap'


library.add(faLinkedin, faGithub);
createApp(App)
    .use(router)
    .use(MotionPlugin)
    .use(gsap)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
