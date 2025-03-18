<script>
// DS_NO_W01_02_L01
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

import BasicHr from '@/components/ui/common/BasicHr.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicHr,

    NoticeText,
  },
  setup() {
    const state = reactive({
      nameError: false,
      phoneError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>기한의 이익 상실 예정 통지서</PopupTitle>
          <template v-slot:sub> </template>
        </ModalPopupHead>
      </template>

      <div>
        <p>
          김하나고객님 항상 하나캐피탈을 이용해주셔서 감사합니다.<br />
          하나캐피탈에서 이용중이신 상품이 「개인금융채권의 관리 및
          개인금융채무자의 보호에 관한 법률」제6조제1항에 의거, 아래와 같이
          <b>기한의 이익 상실 사유가 발생</b>하여 당초 상환기일에도 불구하고
          <b>기한의 이익이 상실될 예정인 바,</b> 아래와 같이 알려드립니다.
        </p>
      </div>

      <div :class="$style['contents-wrap']">
        <section class="row-margin-container-medium">
          <h3 class="text-body-1">1. 대상여신</h3>
          <p class="text-body-4 row-margin-item-small">기준일자 : 20XX.11.22</p>
          <!-- table -->
          <div
            :class="[
              $style['basic-table'],
              $style['basic-table--secondary'],
              'row-margin-item-group',
              'custom-table',
            ]"
          >
            <table>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 105px" />
                <col />
                <col style="width: 165px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="2" class="align-left">차 주</th>
                  <td class="align-left">김하나</td>
                  <th class="align-left">연대 보증인</th>
                  <td class="align-left">김하나</td>
                </tr>
                <tr>
                  <th colspan="2" class="align-left">계좌번호</th>
                  <td class="align-left">545-**-*****</td>
                  <th class="align-left">대출일자</th>
                  <td class="align-left">2023.06.07</td>
                </tr>
                <tr>
                  <th colspan="2" class="align-left">만기일자</th>
                  <td class="align-left">2024.08.10</td>
                  <th class="align-left">대출잔액(원)</th>
                  <td class="align-left">36개월</td>
                </tr>
                <tr>
                  <th colspan="2" class="align-left">연체시작일</th>
                  <td colspan="3" class="align-left">2023.06.07</td>
                </tr>
                <tr>
                  <th rowspan="4" class="align-left">연체금액(원)</th>
                  <th class="align-left">미납원리금</th>
                  <td colspan="3" class="align-left">
                    원금 : 30,000,000원, 이자 : 30,000,000원
                  </td>
                </tr>
                <tr>
                  <th class="align-left">연체이자</th>
                  <td colspan="3" class="align-left">30,000,000원</td>
                </tr>
                <tr>
                  <th class="align-left">비용</th>
                  <td colspan="3" class="align-left">30,000,000원</td>
                </tr>
                <tr>
                  <th class="align-left">합계</th>
                  <td colspan="3" class="align-left">30,000,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
          <NoticeText
            >기준일자가 경과한 이후 연체금액은 변동됨을
            알려드립니다.</NoticeText
          >
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">2. 관련 통지사항</h3>
          <!-- table -->
          <div
            :class="[
              $style['basic-table'],
              $style['basic-table--secondary'],
              'row-margin-item-group',
              'custom-table',
            ]"
          >
            <table>
              <colgroup>
                <col style="width: 240px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>기한의 이익 상실 예정일</td>
                  <td class="align-left">2023.08.10</td>
                </tr>
                <tr>
                  <td>기한의 이익 상실 원인</td>
                  <td class="align-left">연체로 인한 채무 미변제</td>
                </tr>
                <tr>
                  <td>기한의 이익 상실 효과</td>
                  <td class="align-left">
                    계약해지(전액청구) 및 법적절차 진행
                  </td>
                </tr>
                <tr>
                  <td>
                    채무조정 요건과<br />
                    요청 절차·방법
                  </td>
                  <td class="align-left">
                    첨부문서 ‘채무조정의 요건, 요청절차 및 방법’ 참조
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
          <NoticeText
            >기한이익상실일은 채무자보호법 제6조제2항에 따라 통지가 도달한
            날로부터 10영업일이 지난 날로 변경될 수 있습니다.</NoticeText
          >
        </section>

        <div class="row-margin-container-medium">
          <p class="text-body-3">
            아울러, 기한의 이익이 상실된 경우라도 원리금 상환 등
            <b>거래가 정상화된 경우에는 기한의 이익이 부활될 수 있으며,</b>
            「서민의 금융생활 지원에 관한 법률」에 따른 채무조정절차, 「채무자
            회생 및 파산에 관한 법률」에 따른 회생, 간이회생, 개인회생, 파산,
            면책절차 등 <b>채무조정제도의 도움을 받을 수 있음</b>을
            알려드립니다.<br /><br />연체금액 및 기간에 따라 한국신용정보원에
            연체정보가 등록 및 공유될 수 있으며, 연체등록 정보가 해제 되더라도
            연체관련 기록이 최대 1년 동안 남아있을 수 있어 금융거래에 불편이
            초래될 수 있음을 유의하시기 바랍니다.<br /><br />
            ※ 채권추심업무 처리절차(변제독촉장 송부, 방문추심, 가압류 신청 등
            법적 조치 등)와 채무자의 불법추심 대응요령(소멸시효 완성채권 추심시
            추심중단 요청 및 증빙자료 제출 등)이 당사
            홈페이지(www.hanacapital.co.kr)에 공시되어 있습니다.<br />
            ※ 자세한 사항은 하나캐피탈(주) 고객센터(1800-1110)로 문의주시길
            바랍니다.<br /><br />
            0000년 00월 00일<br />
            하나캐피탈 주식회사
          </p>
        </div>
      </div>

      <BasicHr theme="tertiary" className="row-margin-block" />

      <div>
        <h2 class="text-title-1">채무조정의 요건, 요청절차 및 방법</h2>
        <section class="row-margin-container-medium">
          <h3 class="text-body-1">1. 채무조정의 요건</h3>
          <p class="text-body-3 row-margin-item-small">
            채무자는 아래의 경우를 제외하고 원금(최초실행금액) 3천만원 미만의
            개인금융채권을 연체한 경우 채권금융회사 등에 채무조정을 요청할 수
            있습니다.
          </p>

          <p class="text-body-3 row-margin-contents">
            ■ 채무자가 채무조정을 요청할 수 없는 경우<br />
            ① 「개인채무자보호법 제40조에 따라 채무조정의 합의가 해제된 후
            3개월이 지나지 아니한 경우<br />
            ② 개인금융채권의 존재 여부나 범위에 대하여 소송, 조정, 중재 등이
            진행 중인 경우<br />
            ③ 「서민의 금융생활 지원에 관한 법률」 제72조에 따른 채무조정 절차가
            진행 중인 경우<br />④ 「서민의 금융생활 지원에 관한 법률」 제74조
            제1항에 따른 채무조정의 합의가 성립된 후 합의의 효력이 상실되지
            아니한 경우
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">2. 채무조정의 요청 절차 및 방법</h3>
          <p class="text-body-3 row-margin-item-small">
            채무자는 채무조정을 요청하려는 경우 아래의 서류를 채권금융회사 등에
            제출하여야하며, 채권금융회사 등은 채무조정 요청을 받은 날로부터
            10영업일 이내*에 채무조정 여부에 관한 결정 내용을 채무자에게
            통지합니다.
          </p>

          <p class="text-body-3 row-margin-contents">
            *아래의 서류에 미비한 사항이 있어 수정‧보완하는 기간은 기한 산정에서
            제외됩니다.<br />
            ① 채무조정 요청서<br />
            ② 채무조정안<br />
            ③ 개인금융채무자의 변제능력에 관한 자료<br />
            ④ 개인(신용)정보 수집·이용·제공·조회 동의서
          </p>

          <p class="text-body-3 row-margin-item-small">
            채권금융회사 등이 채무조정안을 제안하거나 채무조정을 결정하여
            채무조정안을 통지한 경우 채무자는 채무조정안을 통지받은 날부터
            10영업일 이내에 동의여부를 결정하고, 동의하는 경우 조정서를 작성하여
            서명날인 또는 기명날인 하여야 합니다.
          </p>

          <p class="text-body-3 row-margin-contents">
            아래의 경우에는 채무조정의 요청이 거절될 수 있습니다. <br />
            ① 채무자가 채무조정을 요청할 수 없는 경우(1. 채무조정의 요건 참고)에
            해당<br />
            ② 채무조정 요청 시 제출한 서류에 미비한 사항이 있어 채권금융회사
            등이 수정‧보완을 요청하였음에도 3회 이상 따르지 않은 경우<br />
            ③ 채권금융회사 등이 채무조정 요청을 거절하거나, 채권금융회사 등이
            결정‧채무조정안에 채무자가 동의하지 않은 등 「개인채무자보호법」
            제39조에 따라 채무조정 절차가 종료된 채권에 대해 채무조정을 다시
            요청하는 경우<br />
            ④ 소멸시효가 완성된 채무
          </p>

          <p class="text-body-3 row-margin-contents">
            아래의 경우에는 채무조정의 합의가 해제될 수 있습니다.<br />
            ① 채무자가 3개월 이상 채무조정에 의한 변제계획을 이행하지 아니한
            경우(실업, 3개월 이상 입원치료가 필요한 질병 진단 등
            ｢개인채무자보호법｣ 및 하위법령에서 정하는 사정이 있는 경우는
            제외되나, 이 경우에도 6개월 이상 채무조정에 의한 변제계획을 이행하지
            아니하면 합의 해제 가능)<br />
            ② 채무자가 사망하거나 실종선고를 받은 경우<br />
            ③ 채무자가 변제계획을 이행하는 과정에서 허위사실 신고, 재산의 도피
            은닉, 책임재산 감소행위 등을 한 사실이 발견되는 경우<br />
            ④ 채무자가 개춴금융회사 등에 채무조정 합의의 해제를 요청한 경우<br />
            ⑤ 채무자가 회생계획인가결정, 변제계획인가결정 또는 면책결정을 받은
            경우<br />
            ⑥ 채무자가 다른 채무조정 절차를 신청하여 확정된 경우
          </p>

          <p class="text-body-3 row-margin-item-small">
            채권추심 위탁 예정인 경우 채무조정 절차가 끝나기 전까지 채권추심
            위탁이 보류됩니다. 채무조정은 『개인채무자보호법』 제37조에 따라
            하나캐피탈의 채무조정 내부기준에 의해 처리되며, 동법 시행령 제39조에
            따라 해당업무를 채권추심회사 또는 신용회복위원회에 위탁할 수
            있습니다.
          </p>
        </section>
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P20_l001.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" scoped>
.custom-table {
  table {
    th.align-left {
      background: none;
    }
    tbody {
      tr:nth-child(n + 6):nth-child(-n + 8) {
        th {
          border-left: 1px solid #e0e0e0;
        }
      }
    }
  }
}
</style>
