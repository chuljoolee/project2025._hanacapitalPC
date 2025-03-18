<script>
// Common_P11_p004
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
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
// import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

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
    FilterTab,
    FilterTabButton,
    UiTab,
    // UiTabPanel,
    EventBanner,
    RoundStatus,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
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

    <div class="tab-section">
      <h3 class="tab-section-subTitle text-big-3 row-margin-container">
        총 <em class="color-green">26건</em>의 검색결과가 있습니다.
      </h3>

      <FilterTab>
        <UiTab v-slot="tabSlotProps">
          <FilterTab :useUiTab="true">
            <FilterTabButton link="testFilterTab001_001"
              >전체 <em class="num">26</em></FilterTabButton
            >
            <FilterTabButton link="testFilterTab001_002"
              >메뉴 <em class="num">2</em></FilterTabButton
            >
            <FilterTabButton link="testFilterTab001_003"
              >이벤트 <em class="nume">0</em>
            </FilterTabButton>
            <FilterTabButton link="testFilterTab001_004"
              >공지사항 <em class="num">24</em></FilterTabButton
            >
          </FilterTab>

          <!-- <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testFilterTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_004">// Tab 4 Contents</UiTabPanel> -->
        </UiTab>
      </FilterTab>
    </div>

    <div>
      <div class="container main">
        <div class="flex-container main-container aifs">
          <div class="flex-container fw">
            <div class="title w100p">
              <span> 공지사항 <em class="num">24</em>건 </span>

              <div class="btn-container">
                <button class="btn btn-snone">
                  더보기
                  <i class="ico ico-arrow"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Case : 결과 있을 경우 -->
      <div>
        <div :class="$style['board']">
          <table>
            <colgroup>
              <col />
              <col style="width: 120px" />
            </colgroup>
            <tbody>
              <tr v-for="i in 10" :key="i">
                <!-- <td>
                  <span :class="$style['board__num']">
                    {{ 101 - i }}
                  </span>
                </td> -->
                <td>
                  <RouterLink
                    to="/agent/Agent_P06_p002"
                    :class="$style['board__link']"
                  >
                    <span :class="$style['board__title']">
                      소비자
                      <em class="color-green font-weight-bold">신용</em>
                      대출모집인 중개수수료율 개정
                    </span>
                  </RouterLink>
                </td>
                <td>2022.08.30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- // Case : 결과 있을 경우 -->

      <!-- Case : 검색 결과 없을 경우 -->
      <!-- <div :class="[$style['empty'], $style['empty--secondary']]">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div> -->
      <!-- // Case : 검색 결과 없을 경우 -->
      <!-- Case : 첫번째 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
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
</style>
