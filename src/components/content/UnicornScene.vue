<template>
    <div class="unicornScene">
        <FlyUnicorn />
      <SceneSection id="unicorn1">
      <template #animeContainer>
            <FlyUnicorn />
      </template>
      </SceneSection>
    </div>
  </template>
  
  <script>
    import SceneSection from '../SceneSection.vue'
    import FlyUnicorn from '../characters/unicorn/FlyUnicorn.vue';

    export default {
        name: 'UnicornScene',
        components: {FlyUnicorn, SceneSection}
    }
  </script>
  