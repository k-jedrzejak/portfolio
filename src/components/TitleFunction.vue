<template>
  <div>
    <h2 class="title">
      <slot></slot>
      <template v-if="params">
        (<span class="params">{{ params }}</span>)
      </template>
      <template v-if="selectorClass">
        .<span class="selector-class">{{ selectorClass }}</span>
    </template>
    <template v-if="selectorId">
        #<span class="selector-id">{{ selectorId }}</span>
    </template>

    </h2>
    <TextBlock v-if="subtitle || subtitle2">
      <p class="gray">{{ subtitle }}</p>
      <p class="gray">{{ subtitle2 }}</p>
    </TextBlock>
  </div>
</template>

<script>
import TextBlock from './TextBlock.vue'

export default {
  name: 'TitleFunction',
  props: ['params', 'selectorClass', 'selectorId', 'subtitle', 'subtitle2'],
  components: { TextBlock },
}
</script>
