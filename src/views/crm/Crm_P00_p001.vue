<script>
// Crm_P00_p001
import { onMounted, onUnmounted, reactive } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import Crm_P00_p002 from '@/views/crm/Crm_P00_p002.vue';

import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    Crm_P00_p002,

    SearchForm,
    SearchFormList,
    SearchFormItem,
    SimpleSelect,
    SimpleInput,
    SimpleDatepicker,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CheckBox,
    TextButton,
    CheckBoxObject,
    BasicHr,

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
      store.ui.header.setActive(() => 'crm001');
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
  data() {
    return {
      show: false,
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
          <SearchFormItem class="grid_colspan2">
            <template v-slot:key><span class="tit">접수일자</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleDatepicker
                  title="조회기간 시작 날짜"
                  :classNames="{ wrap: 'input-width-large' }"
                  :max="state.searchMaxDate"
                  v-model="state.searchMinDate"
                />
              </div>
              <div class="flex-box__cell">
                <div class="text-body-3">~</div>
              </div>
              <div class="flex-box__cell">
                <SimpleDatepicker
                  title="조회기간 종료 날짜"
                  :classNames="{ wrap: 'input-width-large' }"
                  :min="state.searchMinDate"
                  v-model="state.searchMaxDate"
                />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <!-- S: 240404 수정 -->
            <template v-slot:key><span class="tit">상담그룹</span></template
            ><!-- E: 240404 수정 -->
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
            <template v-slot:key><span class="tit">진행상태</span></template>
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
            <template v-slot:key><span class="tit">상담상태</span></template>
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
            <template v-slot:key><span class="tit">고객명</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
              </div>
            </div>
          </SearchFormItem>
          <SearchFormItem>
            <template v-slot:key><span class="tit">접수번호</span></template>
            <div class="flex-box">
              <div class="flex-box__cell">
                <SimpleInput :classNames="{ wrap: 'input-width-large' }" />
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
        손님 접수 목록
        <ButtonList align="right" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton size="small" :line="true">상담원 변경</BasicButton>
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
          <col width="10%" />
          <col width="11%" />
          <col width="10%" />
          <col width="10%" />
          <col width="6%" />
          <col width="10%" />
          <col width="12%" />
          <col width="5%" />
          <col width="6%" />
          <col width="12%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <CheckBox
                id="testCheckBox000"
                :onlyObject="true"
                theme="tertiary"
              >
                <CheckBoxObject />
              </CheckBox>
            </th>
            <th>접수일</th>
            <th>접수번호</th>
            <th>진행상태</th>
            <th>상품대분류</th>
            <th>손님명</th>
            <th>고객구분</th>
            <th>생년월일(사업자번호)</th>
            <!-- S: 240404 수정 -->
            <th>상담그룹</th>
            <!-- E: 240404 수정 -->
            <th>상담원</th>
            <th>견적번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">
              <CheckBox
                id="testCheckBox001"
                :onlyObject="true"
                theme="tertiary"
              >
                <CheckBoxObject />
              </CheckBox>
            </td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                @click="show = !show"
              >
                <a href="#detailSection" class="txtcolor"
                  >2024030900001</a
                ></TextButton
              >
            </td>
            <td class="txt-center">동의완료</td>
            <td class="txt-center">렌터카</td>
            <td class="txt-center">홍길동</td>
            <td class="txt-center">개인사업자</td>
            <td class="txt-center">000-000-*****</td>
            <td class="txt-center">A</td>
            <td class="txt-center">정하나</td>
            <td class="txt-center">A00000000000007</td>
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

      <div v-if="show" class="pt_100" id="detailSection">
        <BasicHr theme="quaternary" className="row-margin-contents" />
        <div class="mt_100">
          <Crm_P00_p002 class="mt_60" />
        </div>
      </div>
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
  grid-template-columns: repeat(4, 1fr);
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
.pt_100 {
  padding-top: 100px;
}
.mt_100 {
  margin-top: 100px;
}
.txtcolor {
  color: #00a69e;
}
</style>
