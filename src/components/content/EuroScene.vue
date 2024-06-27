<template>
  <div class="euroScene">
    <TitleSection scene="euroTitle">
      <TitleFunction
        selectorId="euroNet"
        subtitle="// from: August 2019"
        subtitle2="// to: February 2021"
      ></TitleFunction>
    </TitleSection>

    <SceneSection id="euro1">
      <TextBlock>
        <p>From August 2019 to February 2021</p>
        <p class="big">
          I was a
          <strong class="color">Junior Frontend Developer</strong> <br />
          @ Euro-Net.
        </p>
        <p>
          Euro-Net owns two of the largest eCommerce with electronics in Poland
          -
          <a
            href="https://www.euro.com.pl/"
            target="_blank"
            title="Visit RTV Euro AGD website"
          >
            RTV Euro AGD</a
          >
          and
          <a
            href="https://www.oleole.pl/"
            target="_blank"
            title="Visit OleOle.pl website"
            >OleOle.pl</a
          >
        </p>
      </TextBlock>
      <template #animeContainer>
        <ThePlanet :isPlaying="isPlaying" />
        <EuroLogo />
      </template>
    </SceneSection>

    <SceneSection id="euro2">
      <TextBlock>
        <p>My responsibilites were</p>
        <p class="big">
          <strong class="color"
            >creating and implementing landing pages of products and
            promotions</strong
          >
        </p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="euro3">
      <TextBlock>
        <p>As there were many products and promotions</p>
        <p class="big">
          <strong class="color">the code had to be light and optimized</strong>
          not to burden the main pages.
        </p>
      </TextBlock>
    </SceneSection>
  </div>
</template>

<script>
import TitleSection from "../TitleSection.vue";
import TitleFunction from "../TitleFunction.vue";
import TextBlock from "../TextBlock.vue";
import SceneSection from "../SceneSection.vue";
import EuroLogo from "../logotypes/Euro/EuroLogo.vue";
import ThePlanet from "../characters/planet/ThePlanet.vue";

export default {
  name: "EuroScene",
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    EuroLogo,
    ThePlanet,
  },
  props: {
    isPlaying: Boolean,
  },
};
</script>

<style lang="scss">
#euroLogo {
  @include absolute(20vh, null, null, 50%);
  transform: translate(-50%, -50%);
  @include size(70vw);
  filter: brightness(0.8);
}

#toaster {
  @include relative(null, null, -12rem, -1rem);
  @include size(25vh);
  z-index: 9;
}

.planet {
  @include size(60rem, 60rem);
  @include relative(-2rem, null, null, -25rem);
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #euroLogo {
    @include size(40vw);
  }

  .planet {
    @include size(80rem, 80rem);
  }

  #toaster {
    @include size(38vh);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #euroLogo {
    @include absolute(20%, null, null, null);
    @include size(30vw);
    filter: brightness(0.9);
  }

  #toaster {
    @include relative(null, null, -8rem, -2rem);
    @include size(60vh);
    z-index: 9;
  }

  .planet {
    @include size(100rem, 100rem);
    @include relative(-3rem, null, null, -35rem);
  }
}
</style>
