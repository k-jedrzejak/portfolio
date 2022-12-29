<template>
  <div class="auroraScene">
    <TitleSection scene="auroraTitle">
      <TitleFunction selectorId="auroraCreation" subtitle="// from: February 2021" subtitle2="// to: December 2022"></TitleFunction>
    </TitleSection>
   
    <SceneSection id="aurora1">
      <TextBlock>
        <p>This adventure lasted from February 2021 to December 2022</p>
        <p class="big">
          I was
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
        <AstroMagento />
        <!-- <div class="aurora-background"></div> -->
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
}
}
</script>

<style lang="scss" >

// .aurora-background {
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   background: url('../../assets/galaxy1.jpg') no-repeat center;
//   opacity: 0.2;
// }


#acLogo {
  @include size(90vw, 90vw);
  @include absolute(10%, null, null, -9vh);
  z-index: 10;
}

#astroMagento {
	@include absolute(-100px, 0);
	@include size(250px);
  z-index: 3;
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #acLogo {
    @include size(50vw, 50vw);
    @include absolute(calc(50% - 30vw), null, null, -10vw);
  }

  #astroMagento {
    @include size(300px);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #acLogo {
    @include absolute(calc(50% - 15vw), null, null, -10vw);
  }

#astroMagento {
	@include size(400px);
}
}

</style>