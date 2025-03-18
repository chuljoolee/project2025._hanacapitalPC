<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'agent001',
        text: '할부',
        to: '/agent/Agent_P02_p001',
      },
      {
        name: 'agent002',
        text: '승계',
        to: '/agent/Agent_P03_p002',
      },
      {
        name: 'agent003',
        text: '수도',
        to: '/agent/Agent_P09_p001',
      },
      {
        name: 'agent004',
        text: '산',
        to: '/agent/Agent_P10_p001',
      },
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <HeaderBase type="agentTest" :nav="nav" />
</template>
