<template>
  <div class="ceScene">
    <TitleSection scene="ceTitle">
      <TitleFunction
        selectorId="ceSolutions"
        subtitle="// currently"
      ></TitleFunction>
    </TitleSection>

    <SceneSection id="ce1">
      <TextBlock>
        <p>Currently, I'm weaving the first chapter of my Canadian saga</p>
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
  opacity: 0.6;

  svg {
    @include size(35vh, 35vh);
  }
}

#astroTime {
  @include absolute(-4vh, 2vh, null, null);
  @include size(250px, 100vh);
  transform: scaleX(-1);
  z-index: 3;
  opacity: 0.8;
}

#clock {
  @include size(200px, 100vh);
  @include absolute(8vh, 2vh, null, null);
  opacity: 0.8;
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #ceLogo {
    @include absolute(3vw, null, null, 35vw);

    svg {
      @include size(30vw, 30vw);
    }
  }

  #astroTime {
    @include size(400px, 100vh);
    opacity: 1;
    @include absolute(-16vh, -3vh, null, null);
  }

  #clock {
    @include size(290px,100vh);
    @include absolute(1vh, -1vh, null, null);
    opacity: 1;
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #ceLogo {
    @include absolute(0vw, -5vw, null, initial);
    svg {
      @include size(20vw, 20vw);
    }
  }

  #astroTime {
    @include absolute(0, null, null, 5vh);
    transform: scaleX(1);
    @include size(initial);
    @include size(400px,100vh);

  }

  #clock {
    @include absolute(21vh, null, null, 2vh);
    @include size(350px, 100vh);
  }
}
</style>
