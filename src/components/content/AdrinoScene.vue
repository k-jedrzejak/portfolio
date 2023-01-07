<template>
  <div class="adrinoScene">
    <TitleSection scene="adrinoTitle">
      <TitleFunction selectorId="adrino" subtitle="// currently"></TitleFunction>
    </TitleSection>
   
    <SceneSection id="adrino1">
      <TextBlock>
        <p>Currently</p>
        <p class="big">
          I am a
          <strong class="color">JavaScript Developer</strong><br/>
          @
          <a
            href="https://www.adrino.pl/"
            target="_blank"
            title="Visit Adrino website"
          >Adrino Mobile</a
          >.
        </p>
        <p>
          Adrino's in-house ecosystem consists of original rich media creations, classic display adverts, native adverts.
        </p>
      </TextBlock>
      <template #animeContainer>
        <UfoRhino :isPlaying="isPlaying"/>
        <AdrinoLogo />
      </template>
    </SceneSection>

    <SceneSection id="adrino2">
      <TextBlock>
        <p>I am responsible for</p> 
        <p class="big">breathing life into graphic designs using <strong class="color">JavaScript</strong> and <strong class="color">animations</strong>.</p>
      </TextBlock>
    </SceneSection>
  </div>
</template>

<script>

import TitleSection from '../TitleSection.vue'
import TitleFunction from '../TitleFunction.vue'
import TextBlock from '../TextBlock.vue'
import SceneSection from '../SceneSection.vue'
import UfoRhino from '../characters/rhino/UfoRhino.vue'
import AdrinoLogo from '../logotypes/Adrino/AdrinoLogo.vue'

export default {
  name: 'AdrinoScene',
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    UfoRhino,
    AdrinoLogo
  },
  props: {
      isPlaying: Boolean,
  },
}
</script>

<style lang="scss" >
#adrinoLogo {
  @include absolute(15vh, null, null, 20vw);
  z-index: 10;
}

#ufoRhino {
  @include absolute(-30vh, 0);
  @include size(320px);
  z-index: 3;
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #adrinoLogo {
    @include absolute(20vh, null, null, 40vw);
  }

  #ufoRhino {
    @include absolute(-10vh, 0);
    @include size(500px);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #adrinoLogo {
    @include absolute(20vh, null, null, 5vw);
  }

  #ufoRhino {
    @include absolute(16vh, 0);
    @include size(auto);
  }
}
</style>
