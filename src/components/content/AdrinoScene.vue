<template>
  <div class="adrinoScene">
    <TitleSection scene="adrinoTitle">
      <TitleFunction
        selectorId="adrino"
        subtitle="// from: December 2022"
        subtitle2="// to: September 2023"
      ></TitleFunction>
    </TitleSection>

    <SceneSection id="adrino1">
      <TextBlock>
        <p>
          From December 2022's start to September 2023's end, my journey
          unfolded
        </p>
        <p class="big">
          as a
          <strong class="color">JavaScript Developer</strong><br />
          @
          <a
            href="https://www.adrino.pl/"
            target="_blank"
            title="Visit Adrino website"
            >Adrino Mobile</a
          >.
        </p>
        <p>
          Adrino's in-house ecosystem consists of original rich media creations,
          classic display adverts, native adverts.
        </p>
      </TextBlock>
      <template #animeContainer>
        <UfoRhino :isPlaying="isPlaying" />
        <AdrinoLogo />
      </template>
    </SceneSection>

    <SceneSection id="adrino2">
      <TextBlock>
        <p>I was responsible for</p>
        <p class="big">
          breathing life into graphic designs using
          <strong class="color">JavaScript</strong> and
          <strong class="color">animations</strong>.
        </p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="adrino3">
      <TextBlock>
        <p>I dove deep into the realm of</p>
        <p class="big">
          crafting <strong class="color">interactive ads</strong> that weren't
          just adverts, but <strong class="color">mini-games</strong> that
          players wanted to immerse in.
        </p>
      </TextBlock>
    </SceneSection>

    <SceneSection id="adrino4">
      <TextBlock>
        <p>In the labyrinth of the digital world,</p>
        <p class="big">
          I sculpted a control panel, becoming the bridge between
          <strong class="color">publishers</strong> and their dazzling
          <strong class="color">advertisements</strong>.
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
import UfoRhino from "../characters/rhino/UfoRhino.vue";
import AdrinoLogo from "../logotypes/Adrino/AdrinoLogo.vue";

export default {
  name: "AdrinoScene",
  components: {
    TitleSection,
    TitleFunction,
    TextBlock,
    SceneSection,
    UfoRhino,
    AdrinoLogo,
  },
  props: {
    isPlaying: Boolean,
  },
};
</script>

<style lang="scss">
#adrinoLogo {
  @include absolute(15vh, null, null, 20vw);
  z-index: 10;
}

#ufoRhino {
  @include absolute(-30vh, 0);
  @include size(320px);
  z-index: 3;
}

// Tablet
@media screen and (min-width: $screen-tablet) {
  #adrinoLogo {
    @include absolute(20vh, null, null, 40vw);
  }

  #ufoRhino {
    @include absolute(-10vh, 0);
    @include size(500px);
  }
}

// Desktop
@media screen and (min-width: $screen-desktop) {
  #adrinoLogo {
    @include absolute(30vh, null, null, 5vw);
  }

  #ufoRhino {
    @include absolute(16vh, 0);
    @include size(auto);
  }
}
</style>
