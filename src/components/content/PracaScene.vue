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
    @include absolute(15%, null, null, 10%);
    @include size(70vw);
    z-index: 10;
  }

  #astroWork {
    @include absolute(null, 3rem, 5rem, null);
    @include size(55vw, auto);
  }


  // Tablet
  @media screen and (min-width: $screen-tablet) {
    #pracaLogo {
      @include size(40vw);
      @include absolute(20%, null, null, 10%);
    }

    #astroWork {
      @include size(30vw, auto);
    }
  }

  // Desktop
  @media screen and (min-width: $screen-desktop) {
    #pracaLogo {
      @include size(30vw);
      @include absolute(20%, null, null, 25%);
    }
    #astroWork {
      @include absolute(null, 8rem, 3rem, null);
    }
  }
    
  </style>