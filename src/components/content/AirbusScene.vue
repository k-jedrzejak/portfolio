<template>
  <div class="airbusScene">
    <TitleSection scene="airbusTitle">
      <TitleFunction
        selectorId="airbus"
        subtitle="// from: February 2017"
        subtitle2="// to: October 2018"
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
        <TheJupiter :isPlaying="isPlaying" />
        <AstroAir :isPlaying="isPlaying" />
      </template>
    </SceneSection>

    <SceneSection id="airbus2">
      <TextBlock>
        <p>My mission echoed among the stars</p>
        <p class="big">
          as I worked on the
          <a
            href="https://www.airbus.com/en/space/exploration/solar-system/juice"
            target="_blank"
            title="Visit Juice Project website"
            ><strong class="color">ESA's JUICE probe</strong></a
          >
          project, destined to unveil the secrets of
          <strong class="color">Jupiter's moons</strong>.
        </p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="airbus3">
      <TextBlock>
        <p>By selecting components for its</p>
        <p class="big">
          <strong class="color">electrical harnesses</strong> and
          <strong class="color">developing programs</strong> to test them using
          advanced machinery,
        </p>
        <p>
          I bridged the heavens and the earth through precision and innovation.
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
import AirbusLogo from "../logotypes/Airbus/AirbusLogo.vue";
import TheJupiter from "../characters/jupiter/TheJupiter.vue";
import AstroAir from "../characters/airastro/AstroAir.vue";

export default {
  name: "AirbusScene",
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    AirbusLogo,
    TheJupiter,
    AstroAir,
  },
  props: {
    isPlaying: Boolean,
  },
};
</script>

<style lang="scss">
#airbusLogo {
  @include absolute(5vh, null, null, 50%);
  transform: translateX(-50%);
  filter: brightness(2);
  z-index: 4;

  svg {
    @include size(35vh, 35vh);
  }
}

.jupiter {
  @include size(35vh, 35vh);
  @include absolute(17vh, -2vh, null, null);
  filter: brightness(0.9);
}

.probe {
  @include size(45vh, 45vh);
  @include absolute(12vh, -7vh, null, null);

  #theProbe {
    @include size(10vh, 10vh);
    filter: brightness(0.9);
  }
}

#astroAir {
  @include absolute(null, null, 5vh, 0);
  svg {
    @include size(20vh, 20vh);
    filter: brightness(0.9);
  }
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #airbusLogo {
    @include absolute(15vh, null, null, 22vh);
    svg {
      @include size(30vh, 30vh);
    }
  }
  .jupiter {
    @include size(35vh, 35vh);
    @include absolute(17vh, 8vh, null, null);
  }

  .probe {
    @include size(45vh, 45vh);
    @include absolute(12vh, 3vh, null, null);

    #theProbe {
      @include size(10vh, 10vh);
    }
  }

  #astroAir {
    @include absolute(null, null, 5vh, 0);

    svg {
      @include size(21vh, 24vh);
    }
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #airbusLogo {
    @include absolute(35vh, null, null, 22vh);
    svg {
      @include size(40vh, 20vh);
    }
  }
  .jupiter {
    @include size(50vh, 50vh);
    @include absolute(10vh, 2vh, null, null);
    filter: brightness(1);
  }

  .probe {
    @include size(65vh, 65vh);
    @include absolute(3vh, -5vh, null, null);

    #theProbe {
      @include size(15vh, 15vh);
      filter: brightness(1);
    }
  }

  #astroAir {
    @include absolute(null, null, 5vh, 0);

    svg {
      @include size(32vh, 35vh);
      filter: brightness(1);
    }
  }
}
</style>
