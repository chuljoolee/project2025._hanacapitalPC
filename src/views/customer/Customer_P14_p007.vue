<script>
// Customer_P14_p007
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
//import ButtonList from '@/components/ui/button/ButtonList.vue';
//import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
//import TextProgress from '@/components/ui/progress/TextProgress.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    //ButtonList,
    // ButtonListItem,
    BasicButton,
    //TextProgress,
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
            text: '정보이용·제공 조회',
            to: '/',
          },
          {
            text: '계열사 마케팅 목적 동의 현황 조회',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>정보 이용·제공 조회</PageTitle>
    </PageHead>

    <div>
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나금융그룹 계열사의 상품·서비스 안내 및 이용권유 등 마케팅
            목적으로 개인(신용)정보를 수집·이용하는 것에 동의한 고객에 한하여 본
            서비스가 제공됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'font-weight-regular']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            고객님께서 금융상품 신청 후 당사 대출원장 시스템에 등록될 때까지
            일정시간이 소요됨에 따라 본인정보 이용·제공현황 조회가 지연될 수
            있습니다.
          </div>
        </li>
      </ul>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">마케팅 목적 동의 현황</h3>

        <p class="text-body-1 font-weight-regular row-margin-item-group">
          고객님은 현재 하나금융그룹 계열사의 마케팅 영업대상이며, 조회되는
          내용은 다음과 같습니다.<br />
          당사의 마케팅을 원치 않는 경우 [정보이용·제공 동의 철회] 버튼을
          클릭하거나, 고객센터(1800-1110)를 통해 철회할 수 있습니다.
        </p>

        <!-- Case : 동의 현황 조회 완료 시 노출 -->
        <div :class="[$style['basic-table']]">
          <table class="inTbl">
            <colgroup>
              <col style="width: 300px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>동의일자</th>
                <td class="align-left">$동의일자 노출(YYYY-MM-DD)$</td>
              </tr>
              <tr>
                <th>상품서비스 안내수단</th>
                <td class="align-left">
                  $상품서비스 안내수단 노출(글자수 제한 없음)$
                </td>
              </tr>
              <tr>
                <th>동의목적</th>
                <td class="align-left">
                  하나금융그룹 계열사의 상품 또는 서비스의 안내 및 이용 권유<br />
                  하나금융그룹 계열사간의 공동 마케팅
                </td>
              </tr>
              <tr>
                <th>보유 및 이용기간</th>
                <td class="align-left">
                  금융거래 종료일 또는 마케팅 동의 철회일까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // Case : 동의 현황 조회 완료 시 노출 -->

        <!-- Case : 동의 현황 조회 완료_철회 선택 시 내역 없는 경우 노출 -->
        <p :class="$style['not-table']">
          고객님의 정보로 이용된 내역이 없습니다
        </p>
        <!-- // Case : 동의 현황 조회 완료_철회 선택 시 내역 없는 경우 노출 -->
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">
          마케팅 수신정보 철회 신청
        </h3>

        <p class="text-body-1 font-weight-regular">
          철회하실 채널을 선택하신 후 [정보이용·제공 동의 철회 신청] 버튼을
          클릭해 주세요. <br />마케팅 수신정보 철회 시, 이후부터 손님의 정보가
          더 이상 제공되지 않습니다. <br />이미 전달된 정보는 각 고객사에 별도로
          철회를 요청해야 합니다.
        </p>

        <section class="row-margin-contents mt40">
          <h4 class="text-body-1 font-weight-medium row-margin-item-group">
            기존 마케팅 동의 채널
          </h4>
          <div :class="$style['agree-list']">
            <ul
              :class="[
                $style['agree-list__list'],
                $style['agree-list__list--tertiary'],
                $style['agree-list__list--tertiary-no-padding'],
              ]"
            >
              <!-- S: 240529 수정 -->
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree001"
                    @change="testInputEvent"
                    :disabled="true"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>전화</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree002"
                    @change="testInputEvent"
                    :disabled="true"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>SMS</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree003"
                    @change="testInputEvent"
                    :disabled="true"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>우편</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree004"
                    @change="testInputEvent"
                    :disabled="true"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>이메일</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <!-- // E: 240529 수정 -->
            </ul>
          </div>
          <!-- 2 -->
          <h4 class="text-body-1 font-weight-medium row-margin-item-group mt40">
            철회채널
          </h4>
          <div :class="$style['agree-list']">
            <ul
              :class="[
                $style['agree-list__list'],
                $style['agree-list__list--tertiary'],
                $style['agree-list__list--tertiary-no-padding'],
              ]"
            >
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree001_02"
                    @change="testInputEvent"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>전화</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree002_02"
                    @change="testInputEvent"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>SMS</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="Customer_P14_p007_agree003_02"
                    @change="testInputEvent"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>우편</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <!-- S: 240529 수정 -->
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    @change="testInputEvent"
                    :disabled="true"
                    :defaultChecked="true"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>이메일</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <!-- // E: 240529 수정 -->
            </ul>
          </div>

          <div style="width: 224px; margin-top: 24px">
            <BasicButton
              style="font-size: 14px; padding: 13px 12px; min-height: 40px"
              >정보 이용·제공 동의 철회 신청</BasicButton
            ><!-- 240529 수정 -->
          </div>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-body-1 row-margin-item-group">마케팅 목적 제공 동의</h3>

        <p class="text-body-1 font-weight-regular">
          하나캐피탈은 마케팅 목적으로 개인신용정보를 다른회사(제3자)에 제공하지
          않습니다.
        </p>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p007.scss';
</style>

<style lang="scss" scoped>
.btn_c_P14_p007_w200 {
  width: 200px;
}
.mt24 {
  margin-top: 24px;
}
.mt40 {
  margin-top: 40px;
}
</style>
