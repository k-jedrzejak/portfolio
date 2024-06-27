<template>
    <div class="pracaScene">
      <TitleSection scene="pracaTitle">
        <TitleFunction selectorId="pracaPl" subtitle="// from: March 2019" subtitle2="// to: August 2019"></TitleFunction>
      </TitleSection>
  
      <SceneSection id="praca1">
        <TextBlock>
        <p> March 2019 to August 2019</p>
        <p class="big">
          <strong class="color"> Junior Frontend Developer</strong><br/>
          @
          <a
            href="https://www.praca.pl/"
            target="_blank"
            title="Visit Praca.pl website"
          >Praca.pl</a
          >.
        </p>
        <p>
          Praca.pl is one of the largest service with job offers in Poland </p>
      </TextBlock>
      <template #animeContainer>
        <AstroWork :isPlaying="isPlaying"/>
        <PracaLogo />
      </template>
      </SceneSection>
  
      <SceneSection id="praca2">
        <TextBlock>
          <p class="big"><strong class="color">Creating landing pages about specific positions</strong>.</p>
          <p> Landing pages have contained subpages and implemented job offers from the home page.</p>
        </TextBlock>
      </SceneSection>
  
      <SceneSection id="praca3">
        <TextBlock>
         
          <p class="big"><strong class="color">SEO implementation</strong>.</p>
          <p>The most important thing for the pages was to have the highest possible position in Google search results.</p> 
        </TextBlock>
      </SceneSection>
    </div>
</template>
  
<script>
  import TitleSection from '../TitleSection.vue'
  import TitleFunction from '../TitleFunction.vue'
  import TextBlock from '../TextBlock.vue'
  import SceneSection from '../SceneSection.vue'
  import PracaLogo from '../logotypes/Praca/PracaLogo.vue'
  import AstroWork from '../characters/work/AstroWork.vue'

  export default {
    name: 'AuroraScene',
    components: {
      TitleSection,
      TitleFunction,
      TextBlock,
      SceneSection,
      PracaLogo,
      AstroWork
    },
    props: {
        isPlaying: Boolean,
    },
  }
  </script>
  

<style lang="scss">
  #pracaLogo {
    @include absolute(15vh, null, null, 3vh);
    @include size(30vh);
    z-index: 10;
  }

  #astroWork {
    @include absolute(null, 2vh, 8vh, null);
    @include size(52vh, auto);
    filter: brightness(0.9);
  }


  // Tablet
  @media screen and (min-width: $screen-tablet) {
    #pracaLogo {
      @include size(40vh);
      @include absolute(20vh, null, null, 10vh);
      filter:brightness(1.2);
    }

    #astroWork {
      @include size(40vh, auto);
    }
  }

  // Desktop
  @media screen and (min-width: $screen-desktop) {
    #pracaLogo {
      @include size(45vh);
      @include absolute(25vh, null, null, 50vh);
      filter:brightness(1.6);
    }
    #astroWork {
      @include size(65vh);
      @include absolute(null, 8vh, 10vh, null);
      filter: brightness(1);
    }
  }
    
  </style>