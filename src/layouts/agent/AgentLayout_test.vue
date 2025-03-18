<script>
import AgentHeader_test from '@/layouts/agent/AgentHeader_test.vue';
import ShortFooter from '@/layouts/ShortFooter.vue';

export default {
  components: {
    AgentHeader_test,
    ShortFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <AgentHeader_test />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <ShortFooter />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/agent/AgentLayout.scss';
</style>
