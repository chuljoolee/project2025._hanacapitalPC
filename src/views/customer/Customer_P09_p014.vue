<script>
// Customer_P09_p014
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';

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
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    TextButton,
    IconDownloadSmall,
    BasicSelect,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
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
            text: '고객센터',
            to: '/',
          },
          {
            text: '금융소비자보호',
          },
          {
            text: '상품공시실',
            to: '/',
          },
          {
            text: '판매 중단 상품 안내',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>판매 중단 상품 안내</PageTitle>
    </PageHead>

    <div :class="$style['board-search-bar']">
      <InputBlock>
        <InputBlockCell>
          <BasicSelect
            :options="[
              {
                value: '1',
                label: '전체',
              },
              {
                value: '2',
                label: '제목',
              },
              {
                value: '3',
                label: '내용',
              },
            ]"
            title="검색 조건 선택"
            defaultValue="1"
            :classNames="{
              wrap: 'input-width-category',
            }"
          />
        </InputBlockCell>
        <InputBlockCell :flexible="true" margin="regular">
          <BasicInput
            type="search"
            title="게시물 검색어"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>
    </div>

    <!-- Case : 검색 결과 없을 경우 -->
    <div :class="[$style['empty'], $style['empty--secondary']]">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 경우 -->

    <!-- Case : 결과 있을 경우 -->

    <div class="table__wrap">
      <div :class="[$style['board'], $style['basic-table']]">
        <table>
          <colgroup>
            <col style="width: 67px" />
            <col style="width: 160px" />
            <col />
            <col style="width: 116px" />
          </colgroup>
          <thead>
            <tr>
              <th><span>번호</span></th>
              <th><span>대분류</span></th>
              <th style="text-align: left"><span>제목</span></th>
              <th><span>날짜</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td>
                <span :class="$style['board__num']">
                  {{ 11 - i }}
                </span>
              </td>
              <td>
                <a href="/foo/bar.pdf" download :class="$style['board__link']">
                  <span> 의료기·설비 </span>
                </a>
              </td>
              <td>
                <a href="/foo/bar.pdf" download :class="$style['board__link']">
                  <span
                    :class="[
                      $style['board__title'],
                      $style['board__title--multi'],
                    ]"
                  >
                    상품명
                  </span>
                </a>
              </td>
              <td>2024-07-25</td>
            </tr>
          </tbody>
        </table>
      </div>

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
      <!-- <PaginationNav>
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
      </PaginationNav> -->
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <!-- <PaginationNav>
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
      </PaginationNav> -->
      <!-- // Case : 마지막 페이지일 때 -->
    </div>
    <!-- // Case : 결과 있을 경우 -->
  </PageContents>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p011.scss';
</style>

<style lang="scss" scoped>
.table__wrap {
  thead {
    th {
      padding: 20px;
      border-bottom: 1px solid #e0e0e0;
      word-break: break-all;
      vertical-align: middle;
      font-size: 0.875rem;
      line-height: 1.5;
      letter-spacing: -0.02em;
      font-weight: 400;
      color: #757575;
      text-align: center;
    }
  }
}
</style>
