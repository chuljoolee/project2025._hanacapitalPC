<script>
// Common_P11_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    IllustObject,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 내비게이션 Active 세팅
      store.ui.header.setActive(() => 'business');

      // optional : 헤더 내비게이션 2 뎁스 Active 세팅
      store.ui.header.setDepthActive(() => 'business001');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();

      // optional : 헤더 내비게이션 Active 리셋
      store.ui.header.setActive();

      // optional : 헤더 내비게이션 2 뎁스 Active 리셋
      store.ui.header.setDepthActive();
    });
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '통합검색',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>통합검색</PageTitle>
    </PageHead>

    <div class="inputWrap input-width-semiWide">
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
    </div>

    <div>
      <!-- Case : 검색 결과 없을 경우 -->
      <div
        :class="[$style['empty'], $style['empty--secondary'], 'empty--custom']"
      >
        <IllustObject type="credit" />
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 검색 결과 없을 경우 -->
    </div>
  </PageContents>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
@import '@/assets/scss/views/agent/Agent_P01_p001.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
em {
  font-style: normal;
}
.inputWrap {
  margin: 0 auto 60px;
}
.empty--custom {
  border: none;
}
</style>
