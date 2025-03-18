<script>
import CrmHeaderBase from '@/layouts/CrmHeaderBase.vue';

export default {
  components: {
    CrmHeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'crm001',
        text: '상담목록',
        to: '/crm/Crm_P00_p001',
      },
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <CrmHeaderBase type="crm" :nav="nav" />
</template>
