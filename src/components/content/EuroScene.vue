<template>
    <div class="euroScene">
      <TitleSection scene="euroTitle">
        <TitleFunction selectorId="euroNet" subtitle="// from: August 2019" subtitle2="// to: February 2021"></TitleFunction>
      </TitleSection>
  
      <SceneSection id="euro1">
        <TextBlock>
          <p>From August 2019 to February 2021 </p>
          <p class="big">
            I was
            <strong class="color">Junior Frontend Developer</strong> <br/>
            @ Euro-Net. 
            </p>
          <p>
            Euro-Net owns two of the largest eCommerce with electronics in Poland - 
            <a 
                href="https://www.euro.com.pl/" 
                target="_blank"
                title="Visit RTV Euro AGD website"> RTV Euro AGD</a> and 
            <a 
                href="https://www.oleole.pl/" 
                target="_blank"
                title="Visit OleOle.pl website">OleOle.pl</a> 
          </p>
        </TextBlock>
        <template #animeContainer>
          <ThePlanet />
          <EuroLogo />
          <!-- <div class="euro-background"></div> -->
        </template>
      </SceneSection>
  
      <SceneSection id="euro2">
        <TextBlock>
          <p class="big"><strong class="color">Creating and implementation landing pages of products and promotions</strong></p>
          <p>were my responsibilites.</p>
        </TextBlock>
      </SceneSection>

      <SceneSection id="euro3">
        <TextBlock>
          <p>As there were many products and promotions</p> 
          <p class="big"><strong class="color">the code had to be light and optimized</strong> not to burden the main pages.</p>
        </TextBlock>
      </SceneSection>
    </div>
  </template>
  
  <script>
  import TitleSection from '../TitleSection.vue'
  import TitleFunction from '../TitleFunction.vue'
  import TextBlock from '../TextBlock.vue'
  import SceneSection from '../SceneSection.vue'
  import EuroLogo from '../logotypes/Euro/EuroLogo.vue'
  import ThePlanet from '../characters/planet/ThePlanet.vue'

  export default {
    name: 'AuroraScene',
    components: {
      TitleSection,
      TitleFunction,
      TextBlock,
      SceneSection,
      EuroLogo,
      ThePlanet
    }
  }
  </script>

<style lang="scss" >
#euroLogo {
  @include absolute(30%, null, null, 50%);
  transform: translate(-50%, -50%);
  @include size(70vw);
  opacity: .6;
} 

#toaster {
	@include relative(null, null, -12rem, -1rem);
  @include size(200px);
    z-index: 9;
}

.planet {
  @include size(60rem, 60rem);
  @include relative(-2rem, null, null, -25rem);
}

// .euro-background {
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   background: url('../../assets/galaxy.jpg') no-repeat center;
//   background-size: cover;
//   opacity: 0.2;
//   z-index: -1;
// }


  // Tablet
@media screen and (min-width: $screen-tablet) {
    #euroLogo {
    @include size(50vw);
    } 

    .planet {
    @include size(80rem, 80rem);
  }

  #toaster {
  @include size(350px);}
}


  // Desktop
@media screen and (min-width: $screen-desktop) {
  #euroLogo {
    @include absolute(20%, null, null, null);
    @include size(40vw);
  } 

  #toaster {
		@include relative(null, null, -8rem, -2rem);
  @include size(450px);
    z-index: 9;
  }

  .planet {
    @include size(100rem, 100rem);
    @include relative(-3rem, null, null, -35rem);
  }
}
</style>