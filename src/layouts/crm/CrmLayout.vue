<script>
import CrmHeader from '@/layouts/crm/CrmHeader.vue';
// import ShortFooter from '@/layouts/ShortFooter.vue';

export default {
  components: {
    CrmHeader,
    // ShortFooter,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <CrmHeader />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <!-- <div :class="$style['layout__foot']">
      <ShortFooter />
    </div> -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/crm/CrmLayout.scss';
</style>
