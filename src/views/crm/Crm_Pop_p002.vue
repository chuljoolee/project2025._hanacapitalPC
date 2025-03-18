<script>
// Crm_Pop_p002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,

    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>상담 이력</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <table class="table-type-01">
          <colgroup>
            <col width="6%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
            <col width="*" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>NO</th>
              <th>상담일자</th>
              <th>상담결과</th>
              <th>상담대상</th>
              <th>상담내용</th>
              <th>상담원</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">1</td>
              <td class="txt-center">2024-02-01</td>
              <td class="txt-center">재상담예약</td>
              <td class="txt-center">본인</td>
              <td class="txt-center">1달 뒤 만기로 미리 견적 알아보는 중</td>
              <td class="txt-center">김하나</td>
            </tr>
            <tr>
              <td class="txt-center">2</td>
              <td class="txt-center">2024-02-01</td>
              <td class="txt-center">재상담예약</td>
              <td class="txt-center">본인</td>
              <td class="txt-center">1달 뒤 만기로 미리 견적 알아보는 중</td>
              <td class="txt-center">김하나</td>
            </tr>
            <tr>
              <td class="txt-center">3</td>
              <td class="txt-center">2024-02-01</td>
              <td class="txt-center">재상담예약</td>
              <td class="txt-center">본인</td>
              <td class="txt-center">1달 뒤 만기로 미리 견적 알아보는 중</td>
              <td class="txt-center">김하나</td>
            </tr>
            <tr>
              <td class="txt-center">4</td>
              <td class="txt-center">2024-02-01</td>
              <td class="txt-center">재상담예약</td>
              <td class="txt-center">본인</td>
              <td class="txt-center">1달 뒤 만기로 미리 견적 알아보는 중</td>
              <td class="txt-center">김하나</td>
            </tr>
            <tr>
              <td class="txt-center">5</td>
              <td class="txt-center">2024-02-01</td>
              <td class="txt-center">재상담예약</td>
              <td class="txt-center">본인</td>
              <td class="txt-center">1달 뒤 만기로 미리 견적 알아보는 중</td>
              <td class="txt-center">김하나</td>
            </tr>
          </tbody>
        </table>

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

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :col="5"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>
<style>
.mb_20 {
  margin-bottom: 20px;
}
</style>
