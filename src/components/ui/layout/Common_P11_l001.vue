<script>
// Common_P11_l001(헤더 검색창)
import { ref, computed, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Simplebar from 'simplebar-vue';

import { useUiCommonStore } from '@/stores/ui/common';

import UiLayer from '@/components/ui/layer/UiLayer.vue';

import ImgLogo from '@/assets/images/common/logo-main.svg?component';
import IconClose from '@/assets/images/common/close.svg?component';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    RouterLink,
    Simplebar,
    UiLayer,
    ImgLogo,
    IconClose,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
  },
  setup() {
    const route = useRoute();

    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const layer = ref(null);

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    watch(
      () => route.path,
      () => {
        layer.value.close();
      }
    );

    return {
      layer,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <nav class="search">
      <div
        :class="$style['site-map__head']"
        :style="`padding-right: ${scrollbarsWidth}px`"
      >
        <div :class="$style['site-map__head-inner']">
          <h2 :class="$style['site-map__logo']">
            <RouterLink
              to="/main/home"
              :class="$style['site-map__logo-link']"
              @click="layerSlotProps.close()"
            >
              <ImgLogo />
              <span class="for-a11y">하나캐피탈 검색창</span>
            </RouterLink>
          </h2>

          <button
            type="button"
            :class="$style['site-map__close']"
            @click="layerSlotProps.close()"
          >
            <IconClose />
            <span class="for-a11y">사이트맵 닫기</span>
          </button>
        </div>
      </div>
      <div :class="$style['site-map__body']">
        <Simplebar
          data-simplebar-auto-hide="false"
          :class="$style['site-map__body-scroll']"
        >
          <div
            :class="[$style['site-map__body-inner'], 'search__inner']"
            :style="`padding-right: ${scrollbarsWidth}px`"
          >
            <InputBlock>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="search"
                  title="게시물 검색어"
                  placeholder="검색어를 입력하세요"
                />
              </InputBlockCell>
              <InputBlockCell type="search">
                <SearchButton />
              </InputBlockCell>
            </InputBlock>
            <div class="popularKeyword row-margin-container">
              <h2 class="text-title-2 color-green font-weight-bold">
                인기 검색어
              </h2>
              <ol class="popularKeyword__list">
                <li class="popularKeyword__item"><a href="">내대출</a></li>
                <li class="popularKeyword__item">
                  <a href="">e하나신용대출</a>
                </li>
                <li class="popularKeyword__item"><a href="">장기렌터카</a></li>
                <li class="popularKeyword__item"><a href="">오토리스</a></li>
                <li class="popularKeyword__item">
                  <a href="">하나캐피탈 멤버십</a>
                </li>
                <li class="popularKeyword__item"><a href="">내대출</a></li>
                <li class="popularKeyword__item">
                  <a href="">e하나신용대출</a>
                </li>
                <li class="popularKeyword__item"><a href="">장기렌터카</a></li>
                <li class="popularKeyword__item"><a href="">오토리스</a></li>
                <li class="popularKeyword__item"><a href="">하나캐피탈</a></li>
              </ol>
            </div>
          </div>
        </Simplebar>
      </div>
    </nav>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LayerSiteMap.scss';
</style>

<style lang="scss" scoped>
.flex-wrap {
  > li {
    width: 33.33%;
  }
}
.search {
  background: $color-white;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  &__inner {
    width: $contents-width-default-small;
    margin: 0 auto;
  }

  .popularKeyword {
    &__list {
      list-style: none;
      counter-reset: item;
      margin: 20px 0 0 0;
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 16px 100px;
      height: 185px;
    }
    &__item {
      display: flex;
      gap: 12px;
      counter-increment: item;
      color: $color-gray-80;
      a {
        color: $color-gray-80;
        text-decoration: none;
      }
      &::before {
        content: counter(item) ' ';
      }
    }
  }
}
</style>
