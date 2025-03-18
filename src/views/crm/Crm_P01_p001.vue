<script>
// Crm_P01_p001
import { onMounted, onUnmounted, reactive } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';

import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,

    SearchForm,
    SearchFormList,
    SearchFormItem,
    SimpleSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
    RadioButton,
    RadioButtonObject,

    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'crm002');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const state = reactive({
      searchMinDate: '2024.04.21',
      searchMaxDate: '2024.04.21',
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <div class="container main">
      <SearchForm>
        <h3 class="for-a11y">상담목록</h3>
        <SearchFormList class="margin_0">
          <SearchFormItem>
            <template v-slot:key><span class="tit">제휴사</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '고객명',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-large' }"
                />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key><span class="tit">상담원</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '고객명',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-large' }"
                />
              </div>
            </div>
          </SearchFormItem>

          <SearchFormItem>
            <template v-slot:key><span class="tit">권한등급</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '고객명',
                    },
                  ]"
                  title="조회기간"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-large' }"
                />
              </div>
            </div>
          </SearchFormItem>
        </SearchFormList>

        <template v-slot:bottom>
          <ButtonList
            :wrap="true"
            :col="5"
            align="center"
            :classNames="{ wrap: 'row-margin-none' }"
          >
            <ButtonListItem>
              <BasicButton
                :classNames="{ wrap: 'btn btn-primary btn-search-02' }"
                >검색</BasicButton
              >
            </ButtonListItem>
          </ButtonList>
        </template>
      </SearchForm>

      <div class="title">
        상담원 목록
        <ButtonList align="right" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton size="small" :line="true">운영자 추가</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <BasicButton size="small" :line="true">제휴사 추가</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <BasicButton size="small" :line="true">상담원 추가</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <BasicButton size="small" :line="true">관리자 변경</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <button class="btn btn-s03">삭제</button>
          </ButtonListItem>
        </ButtonList>
      </div>

      <!-- Case : 조회 결과 없을 경우 -->
      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>
      <!-- // Case : 조회 결과 없을 경우 -->

      <!-- Case : 결과 있을 경우 -->
      <table class="table-type-01">
        <colgroup>
          <col width="5%" />
          <col width="30%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr>
            <th>선택</th>
            <th>소속(제휴사)</th>
            <th>권한등급</th>
            <th>이름</th>
            <th>ID</th>
            <th>연락처</th>
            <th>등록일자</th>
            <th>등록인</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_001"
                :onlyObject="true"
              >
                <RadioButtonObject />
              </RadioButton>
            </td>
            <td class="txt-center">다이렉트오토팀</td>
            <td class="txt-center">운영자</td>
            <td class="txt-center">최보근</td>
            <td class="txt-center">Bogeun</td>
            <td class="txt-center">000-0000-0000</td>
            <td class="txt-center">0000-00-00</td>
            <td class="txt-center">최보근</td>
          </tr>
          <tr>
            <td class="txt-center">
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_002"
                :onlyObject="true"
              >
                <RadioButtonObject />
              </RadioButton>
            </td>
            <td class="txt-center">다이렉트오토팀</td>
            <td class="txt-center">운영자</td>
            <td class="txt-center">최보근</td>
            <td class="txt-center">Bogeun</td>
            <td class="txt-center">000-0000-0000</td>
            <td class="txt-center">0000-00-00</td>
            <td class="txt-center">최보근</td>
          </tr>
          <tr>
            <td class="txt-center">
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_003"
                :onlyObject="true"
              >
                <RadioButtonObject />
              </RadioButton>
            </td>
            <td class="txt-center">다이렉트오토팀</td>
            <td class="txt-center">운영자</td>
            <td class="txt-center">최보근</td>
            <td class="txt-center">Bogeun</td>
            <td class="txt-center">000-0000-0000</td>
            <td class="txt-center">0000-00-00</td>
            <td class="txt-center">최보근</td>
          </tr>
          <tr>
            <td class="txt-center">
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_004"
                :onlyObject="true"
              >
                <RadioButtonObject />
              </RadioButton>
            </td>
            <td class="txt-center">다이렉트오토팀</td>
            <td class="txt-center">운영자</td>
            <td class="txt-center">최보근</td>
            <td class="txt-center">Bogeun</td>
            <td class="txt-center">000-0000-0000</td>
            <td class="txt-center">0000-00-00</td>
            <td class="txt-center">최보근</td>
          </tr>
          <tr>
            <td class="txt-center">
              <RadioButton
                name="testRadioButton004"
                id="testRadioButton004_005"
                :onlyObject="true"
              >
                <RadioButtonObject />
              </RadioButton>
            </td>
            <td class="txt-center">다이렉트오토팀</td>
            <td class="txt-center">운영자</td>
            <td class="txt-center">최보근</td>
            <td class="txt-center">Bogeun</td>
            <td class="txt-center">000-0000-0000</td>
            <td class="txt-center">0000-00-00</td>
            <td class="txt-center">최보근</td>
          </tr>
        </tbody>
      </table>
      <!-- // Case : 결과 있을 경우 -->

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

<style lang="scss" scoped>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>
<style>
.ta_r {
  text-align: right;
}
.margin_0 ul {
  margin: 0 !important;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 16px;
}
.grid_colspan2 {
  grid-column: span 2;
}
.margin_0 ul li {
  padding: 0 !important;
}
.tit {
  display: inline-block;
  width: 60px;
}
.test-section-sub-title {
  display: flex;
  align-items: center;
}
</style>
