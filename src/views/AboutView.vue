<template>
  <div id="about" ref="about" class="container">
    div
    <div class="pic"></div>
    <div class="static-container">
      <h1 class="title" v-motion
        :initial="{ opacity: 0,  y: -80 }"
        :enter="{ opacity: 1,  y: 0,transition: {delay: 300, duration: 800, ease: 'linear'} }">about(<span class="params color">karolina</span>)</h1>

      <TextBlock v-motion
        :initial="{ opacity: 0,  x: -80 }"
        :enter="{ opacity: 1,  x: 0,transition: {delay: 1000, duration: 800, ease: 'linear'} }">
        <div class="first-fold">
          <ul class="about-contact">
            <li v-for="link in data.links" :key="link.url">
              <a :href="link.url" :title="link.title" target="_blank">
                {{ link.label || null }}
                <component v-if="link.icon" :is="link.icon" />
              </a>
            </li>
            <li v-if="data.cv">
              Download my
              <a
                :href="`./${data.cv.file}`"
                :title="data.cv.title"
                target="_blank"
                class="cv"
              >
                {{ data.cv.label }}
              </a>
            </li>
          </ul>

          <p class="color">
            <span v-for="(line, i) in data.description" :key="i">
              {{ line }}<br />
            </span>
          </p>
          <p class="gray" v-if="data.experiences">
            <span v-for="(line, i) in data.subtitles" :key="i">
              // {{ line }}<br />
            </span>
            // {{ data.experiences[0].position }} @
            {{ data.experiences[0].company }}
          </p>
        </div>

        <div class="about-grid">
          <h2>Skills</h2>
          <div class="columns fluent">
            <ul>
              <li v-for="(skills, i) in data.skills" :key="i">
                {{ skills.join(', ') }}<br />
              </li>
            </ul>
          </div>

          <h2>Experience</h2>
          <div class="columns experience">
            <ul>
              <li v-for="(experience, i) in data.experiences" :key="i">
                <strong class="color">{{ experience.position }}</strong>
                <br />
                @ {{ experience.company }}<br />
                {{ experience.time || null }}
              </li>
            </ul>
          </div>

          <h2>Languages</h2>
          <div class="columns languages">
            <ul>
              <li v-for="(langs, level) in data.languages" :key="level">
                <span class="">// {{ level }}</span
                ><br />
                <span v-for="[locale, label] in langs" :key="locale"
                  ><span class="color">{{ locale }}</span> {{ label }}<br
                /></span>
              </li>
            </ul>
          </div>

          <h2>Also busy with</h2>
          <div class="columns busy">
            <ul>
              <li v-for="busy in data.busy" :key="busy">{{ busy }}</li>
            </ul>
          </div>
        </div>
      </TextBlock>
    </div>
    <SpineLine />
  </div>
</template>

<script>
import TextBlock from '../components/TextBlock.vue';
import GithubIcon from '@/components/icon/GithubIcon.vue';
import LinkedInIcon from '@/components/icon/LinkedInIcon.vue';
import SpineLine from '@/components/SpineLine.vue';
import { fetchData, removeBodyClass, addBodyClass} from '@/utils';
import { ref, onMounted } from 'vue';

export default {
  name: 'AboutView',
  components: { TextBlock, GithubIcon, LinkedInIcon, SpineLine },
  data() {
    return {
      data: {},
    }
  },
  async mounted() {
    this.data = await fetchData()
  },
  setup(){
    const about = ref();
    onMounted(() => {
      if(about.value) {
        removeBodyClass("home");
        addBodyClass("about");
      }
    })
    return {about}
  },

}
</script>

<style lang="scss" scoped>

$myImgPath: '../assets/me9.jpg';

.page-about {
  .header-bg {
    opacity: 0;
    visibility: hidden;
  }
}

#about {
  .pic {
    @include size(90vw);
    @include fixed(10vh, $right: -67%);
    transform: scaleX(-1);
    pointer-events: none;
    display: block;
    z-index: 0;
    aspect-ratio: 1;
    @include bg-image($myImgPath, contain, right );
    border-radius: 50%;

    @media screen and (min-width: $screen-desktop) {
      @include size(85vw);
      @include fixed(70%, $left: 0);
      background-position: left;
      transform: translate(0, -50%);
      border-radius: 0;
      opacity: 1;
    }
  }
  .static-container {
    padding-top: 30vh;
    @media screen and (min-width: $screen-desktop) {
      .static-container {
        padding-top: 30vh;
      }   
    }
  }
  .about-contact {
    @include flex();
    list-style: none;
    margin: 2rem 0;

    li {
      @include flex();
      flex: 0 0 auto;
      list-style: none;
      margin: 0 1rem 0 0;
      color: $color-white;
    }

    a {
      @include flex();
      flex: 0 0 auto;
      text-decoration: none;
      &.cv {
        background: $color-primary;
        @include size(auto, 2rem);
        padding: 0 1rem;
        border-radius: 3rem;
        margin-left: 0.5rem;
        line-height: 2rem;

        &:hover {
          background: $color-magenta-dark;
        }
      }

      .ico {
        @include size(1.5rem, 1.5rem);
        flex: 0 0 auto;
        overflow: visible;
        fill: $color-primary;
        stroke-width: 2px;
        transition: all 400ms ease-out;
      }

      &:hover {
        .ico {
          fill: $color-gray;
        }
      }
    }

    @media screen and (max-width: $screen-mobile) {
      flex-flow: row wrap;

      li {
        &:last-child {
          flex: 0 0 100%;
          margin: 1rem 0 0;
        }
      }
    }
  }

  .about-grid {
    @include size(65vw);
    padding: 3rem 0 0 0;
    margin-right: -25vw;
  
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .columns {
      margin-bottom: 2rem;
    }

    ul {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;
    }

    li {
      list-style: none;
      margin: 0;
      font-size: 1rem;
      line-height: 1.5em;
      color: $color-gray;
    }
   .tools {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;

      ul {
        display: block;
      }
    }

    @media screen and (max-width: $screen-desktop) {
      @include size(calc(100vw - 4rem));
      padding: 3rem 1rem 0 0;
      margin: 0;
    }

    @media screen and (max-width: $screen-tablet) {
      ul {
        grid-template: 1fr / repeat(3, 1fr);
      }

      .tools {
        grid-template: 1fr / repeat(3, 1fr);

        ul {
          display: block;
        }
      }
    }

    @media screen and (max-width: $screen-mobile) {
      ul {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;
      }

      .tools {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;

        ul {
          display: block;
        }
      }
    }
  }
}
</style>
