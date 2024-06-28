<template>
  <div id="infoBubble">Something exciting is coming soon!</div>
</template>

<script>
export default {
  name: "InfoBubble",
};
</script>

<style scoped lang="scss">
#infoBubble {
  color: $color-black;
  background: $color-white;
  border: 2px solid $color-magenta;
  padding: $indent-xxs;
  border-radius: $indent-xxs;
  font-size: 9px;
}
</style>
