<script>
// Customer_P09_p005
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

import IconFile from '@/assets/images/icon/file.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    SearchButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    IconFile,
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
            text: '금융소비자보호공시',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>금융소비자보호공시</PageTitle>
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
    <div>
      <div :class="$style['board']">
        <table>
          <colgroup>
            <col style="width: 67px" />
            <col />
            <col style="width: 64px" />
            <col style="width: 120px" />
          </colgroup>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>
                <span :class="$style['board__num']">
                  {{ 101 - i }}
                </span>
              </td>
              <td>
                <RouterLink
                  to="/customer/Customer_P09_p006"
                  :class="$style['board__link']"
                >
                  <span :class="$style['board__title']">
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                  </span>
                </RouterLink>
              </td>
              <td>
                <IconFile class="display-block" />
                <span class="for-a11y">첨부 파일 있음</span>
              </td>
              <td>2022.08.30</td>
            </tr>
            <tr v-for="i in 5" :key="i">
              <td>
                <span :class="$style['board__num']">
                  {{ 96 - i }}
                </span>
              </td>
              <td>
                <RouterLink
                  to="/customer/Customer_P09_p006"
                  :class="$style['board__link']"
                >
                  <span :class="$style['board__title']">
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                    게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                  </span>
                </RouterLink>
              </td>
              <td></td>
              <td>2022.08.30</td>
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
    <!-- // Case : 결과 있을 경우 -->

    <div :class="[$style['logs-wrap'], 'row-margin-block-small']">
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호조직
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호체계
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호웹진
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호공시
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금리인하요구권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  대출계약철회권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  중도상환수수료 면제
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p005.scss';
</style>
