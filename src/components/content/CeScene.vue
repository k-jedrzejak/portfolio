<template>
  <div class="ceScene">
    <TitleSection scene="ceTitle">
      <TitleFunction
        selectorId="ceSolutions"
        subtitle="// August 2023 to June 2024"
      ></TitleFunction>
    </TitleSection>
    <SceneSection id="ce1">
      <TextBlock>
        <p>I wove the first chapter of my Canadian tale</p>
        <p class="big">
          as a
          <strong class="color">Software Developer</strong><br />
        </p>
        <p>charting digital frontiers in this vast northern expanse</p>
        <p class="big">
          @
          <a
            href="https://www.ce-solutions.ca/"
            target="_blank"
            title="Visit CE Solutions website"
            >CE Solutions</a
          >.
        </p>
        <p>
          Software Development Agency that create cost effective solutions to
          save customers money.
        </p>
      </TextBlock>
      <template #animeContainer>
        <CeLogo />
        <div id="astro-clock-container">
          <AstroTime :isPlaying="isPlaying" />
          <TheClock :isPlaying="isPlaying" />
        </div>
      </template>
    </SceneSection>

    <SceneSection id="ce2">
      <TextBlock>
        <p>Where hours blend and days merge,</p>
        <p class="big">
          I brought clarity with a tool to
          <strong class="color">master</strong> one's work-time balance.
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
import CeLogo from "../logotypes/CE/CeLogo.vue";
import AstroTime from "../characters/astronaut/AstroTime.vue";
import TheClock from "../characters/clock/TheClock.vue";

export default {
  name: "CeScene",
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    CeLogo,
    AstroTime,
    TheClock,
  },
  props: {
    isPlaying: Boolean,
  },
};
</script>

<style lang="scss">
#astro-clock-container {
  position: relative;
  height: 100vh;
}
#ceLogo {
  @include absolute(5vh, null, null, 50%);
  transform: translateX(-50%);
  filter: brightness(0.7);
  z-index: 4;
  svg {
    @include size(35vh, 35vh);
  }
}
#astroTime {
  @include absolute(21vh, 2vh, null, null);
  @include size(30vh, 100vh);
  transform: scaleX(-1);
  z-index: 3;
  filter: brightness(0.9)
}

#clock {
  @include size(26vh, 100vh);
  @include absolute(34vh, 0, null, null);
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #ceLogo {
    @include absolute(3vw, null, null, 50%);

    svg {
      @include size(40vw, 40vw);
    }
  }

  #astroTime {
    @include size(40vh);
    @include absolute(-13vh, -3vh, null, null);
  }

  #clock {
    @include size(30vh);
    @include absolute(3vh, -2vh, null, null);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #ceLogo {
    @include absolute(0vw, -15vh, null, initial);
    filter: brightness(1);
    svg {
      @include size(25vw, 25vw);
    }
  }

  #astroTime {
    @include absolute(0, null, null, 0);
    transform: scaleX(1);
    @include size(initial);
    @include size(55vh);
    filter: brightness(1);
  }

  #clock {
    @include absolute(21vh, null, null, 0);
    @include size(45vh);
    filter: brightness(1.2);
  }
}
</style>
