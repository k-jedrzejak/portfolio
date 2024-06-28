<template>
  <div class="airbusScene">
    <TitleSection scene="airbusTitle">
      <TitleFunction
        selectorId="airbus"
        subtitle="// from: August 2018"
        subtitle2="// to: March 2019"
      ></TitleFunction>
    </TitleSection>
    <SceneSection id="airbus1">
      <TextBlock>
        <p>
          Before I charted the digital realms as a Frontend Developer, I
          ventured into space
        </p>
        <p class="big">
          as a
          <strong class="color">Process Engineer</strong><br />
        </p>
        <p>in the space department</p>
        <p class="big">
          @
          <a
            href="https://www.airbus.com/en/our-worldwide-presence/airbus-in-europe/airbus-in-poland"
            target="_blank"
            title="Visit Airbus website"
            >Airbus</a
          >.
        </p>
        <p>
          - Pioneer of a sustainable aerospace industry for a safe and united
          world.
        </p>
      </TextBlock>
      <template #animeContainer>
        <AirbusLogo />
        <div id="astro-clock-container">
          <AstroTime :isPlaying="isPlaying" />
          <TheClock :isPlaying="isPlaying" />
        </div>
      </template>
    </SceneSection>

    <SceneSection id="airbus2">
      <TextBlock>
        <p>My mission echoed among the stars,</p>
        <p class="big">
          working on the <strong class="color">ESA</strong> project -
          <strong class="color">JUICE</strong> probe, destined to unveil the
          secrets of <strong class="color">Jupiter's moons</strong>.
        </p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="airbus3">
      <TextBlock>
        <p>By selecting elements for its</p>
        <p class="big">
          <strong class="color">electrical harnesses</strong> and
          <strong class="color">scripting programs</strong> for machines to test
          them, I bridged the heavens and the earth through precision and
          innovation.
        </p>
      </TextBlock>
    </SceneSection>
  </div>
</template>

By selecting elements for its electrical harnesses and scripting programs for
machines to test these harnesses, I bridged the heavens and the earth through
precision and innovation.

<script>
import TitleSection from "../TitleSection.vue";
import TitleFunction from "../TitleFunction.vue";
import TextBlock from "../TextBlock.vue";
import SceneSection from "../SceneSection.vue";
import AirbusLogo from "../logotypes/Airbus/AirbusLogo.vue";
import AstroTime from "../characters/astronaut/AstroTime.vue";
import TheClock from "../characters/clock/TheClock.vue";

export default {
  name: "AirbusScene",
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    AirbusLogo,
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
#airbusLogo {
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
  filter: brightness(0.9);
}

#clock {
  @include size(26vh, 100vh);
  @include absolute(34vh, 0, null, null);
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #airbusLogo {
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
  #airbusLogo {
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
