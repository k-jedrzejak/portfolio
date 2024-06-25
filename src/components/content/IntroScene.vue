<template>
  <SceneSection id="intro">
    <h1 class="title">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: { delay: 100, duration: 600, ease: 'easeIn' },
        }"
      >
        karolina
      </div>

      <div
        class="color"
        v-motion
        :initial="{ opacity: 0, y: -800, rotate: 1420 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { delay: 50, duration: 1200, ease: 'linear' },
        }"
      >
        .j
      </div>
    </h1>

    <TextBlock
      v-motion
      :initial="{ opacity: 0, x: -80 }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: { delay: 900, duration: 900, ease: 'linear' },
      }"
    >
      <div class="color">Karolina Jedrzejak</div>
      <div class="gray">Software Developer</div>
    </TextBlock>
  </SceneSection>
</template>

<script>
import TextBlock from "@/components/TextBlock.vue";
import SceneSection from "../SceneSection.vue";

export default {
  name: "IntroScene",
  components: { TextBlock, SceneSection },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;
  display: flex;
}
</style>
