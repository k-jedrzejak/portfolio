<template>
  <div class="auroraScene">
    <TitleSection scene="auroraTitle">
      <TitleFunction selectorId="auroraCreation" subtitle="// from: February 2021" subtitle2="// to: December 2022"></TitleFunction>
    </TitleSection>
   
    <SceneSection id="aurora1">
      <TextBlock>
        <p>This adventure lasted from February 2021 to December 2022</p>
        <p class="big">
          I was a
          <strong class="color">Frontend Developer</strong><br/>
          @
          <a
            href="https://www.auroracreation.pl/"
            target="_blank"
            title="Visit AC website"
          >Aurora Creation</a
          >.
        </p>
        <p>
          Software House implementing, simplifying, customizing and developing Magento for top Polish eCommerce brands.
        </p>
      </TextBlock>
      <template #animeContainer>
        <AcLogo />
        <AstroMagento :isPlaying="isPlaying"/>
      </template>
    </SceneSection>

    <SceneSection id="aurora2">
      <TextBlock>
        <p>During that time</p> 
        <p class="big">I delivered <strong class="color">new functionalities and adjusted the appearance of online stores</strong></p>
        <p> based on graphic designs.</p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="aurora3">
      <TextBlock>
        <p>Taking care of</p> 
        <p class="big"><strong class="color">code quality, optimization and improvement of store efficiency</strong>.</p>
      </TextBlock>
    </SceneSection>
  </div>
</template>

<script>

import TitleSection from '../TitleSection.vue'
import TitleFunction from '../TitleFunction.vue'
import TextBlock from '../TextBlock.vue'
import SceneSection from '../SceneSection.vue'
import AcLogo from '../logotypes/AC/AcLogo.vue'
import AstroMagento from '../characters/magento/AstroMagento.vue'

export default {
  name: 'AuroraScene',
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    AcLogo,
    AstroMagento
},
  props: {
      isPlaying: Boolean,
  },
}
</script>

<style lang="scss">
#acLogo {
  @include size(45vh, 45vh);
  @include absolute(10vh, null, null, -9vh);
  z-index: 10;
}

#astroMagento {
  @include absolute(20vh, 0);
  @include size(35vh,100vh);
  z-index: 3;
  filter: brightness(0.9);
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #acLogo {
    @include size(50vh, 50vh);
    @include absolute(15vh, null, null, -10vh);
  }

  #astroMagento {
    @include size(45vh);
    @include absolute(15vh, 0);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #acLogo {
    @include absolute(20vh, null, null, -2vh);
    @include size(60vh, 85vh);
  }

  #astroMagento {
    @include size(50vh, 100vh);
    @include absolute(10vh, 0 null, null);
  }
}

</style>
