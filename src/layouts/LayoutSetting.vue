<script>
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { useHead } from '@vueuse/head';

// 레이아웃 설정
import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import NoneLayout from '@/layouts/NoneLayout.vue';
import InventoryFinanceLayout from '@/layouts/inventoryFinance/InventoryFinanceLayout.vue';
import LmBlogLayout from '@/layouts/lmBlog/LmBlogLayout.vue';
import LmBlogPersonalLayout from '@/layouts/lmBlogPersonal/LmBlogPersonalLayout.vue';
import AgentLayout from '@/layouts/agent/AgentLayout.vue';
import CrmLayout from '@/layouts/crm/CrmLayout.vue'; // 20240315

import LoadingLayer from '@/components/ui/layout/LoadingLayer.vue';

import favicon from '@/assets/images/common/favicon.ico';

export default {
  components: {
    RouterView,
    LoadingLayer,
  },
  setup() {
    // html head 셋팅
    useHead({
      title: '하나캐피탈 공식 웹사이트',
      htmlAttrs: {
        lang: 'ko',
      },
      link: {
        rel: 'icon',
        href: favicon,
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: '하나캐피탈 공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '자동차금융, 개인금융, 기업금융 상품정보 및 온라인 대출 상담 및 신청 가능.',
        },
        {
          name: 'subject',
          content: '하나캐피탈(주) IR WebSite',
        },
        {
          name: 'keywords',
          content: '하나캐피탈(주)',
        },
        {
          name: 'copyright',
          content:
            'copyright(c)2011 Hana Capital Co.,Ltd. All rights reserved.',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
    });

    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
      },
    };

    const resize = () => {
      store.ui.scrollBlock.updateScrollLeft();
    };

    onMounted(() => {
      store.ui.common.setUserAgent();
      store.ui.common.setScrollbarsWidth();

      window.addEventListener('resize', resize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resize);
    });

    // 레이아웃 셋팅
    const route = useRoute();
    const layouts = {
      DefaultLayout,
      NoneLayout,
      InventoryFinanceLayout,
      LmBlogLayout,
      LmBlogPersonalLayout,
      AgentLayout,
      CrmLayout, // 20240315
    };
    const layout = computed(() => {
      const { layout } = route.meta;

      if (route.name) {
        return layout ? layouts[layout] : layouts['DefaultLayout'];
      } else {
        return NoneLayout;
      }
    });

    watch(
      () => route.path,
      () => {
        const html = document.getElementsByTagName('html')[0];
        html.scrollTop = 0;
        html.scrollLeft = 0;

        if (store.ui.scrollBlock.isBlocking) {
          store.ui.scrollBlock.update({ top: 0, left: 0 });
        }
      }
    );

    return {
      layout,
    };
  },
};
</script>

<template>
  <LoadingLayer />
  <component :is="layout"><RouterView /></component>
</template>

<style lang="scss" scoped></style>
