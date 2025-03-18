<script>
// DS_NO_W01_02_L02
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicHr,
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
          <PopupTitle>주택 경매 예정 통지서</PopupTitle>
          <template v-slot:sub> </template>
        </ModalPopupHead>
      </template>

      <div>
        <p>
          귀하의 대출이 현재까지 정상화되지 않아 아래의 주택에 대하여 경매실행
          예정임을 알려드립니다.<br />
          ※「개인금융채권의 관리 및 개인금융채무자의 보호에 관한 법률」제8조 및
          동법 시행령 제9조<br /><br />
          경매신청예정일까지 대출금이 정상화되지 않을 경우, 부득이 아래
          담보목적물에 대하여 경매실행 예정임을 통지하오니 대출금 정상화 및
          채무상환 등에 관한 상담을 원하시는 경우에는 채무조정 요청 가능
          기한까지 아래 담당자에게 연락하여 주시기 바랍니다.<br /><br />
          또한, 귀하의 도움이 될 수 있는 채무조정 지원제도에 대해서도
          알려드리니, 참고바랍니다<br /><br />

          담당자 : 홍길동<br />
           전화번호 : 02-2037-0000
        </p>
      </div>

      <div :class="$style['contents-wrap']">
        <section class="row-margin-container-medium">
          <h3 class="text-body-1">1. 수신인 기본사항</h3>
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
                <col style="width: 160px" />
                <col style="width: 200px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>연락처</th>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>홍길동</td>
                  <td>010-1234-5678</td>
                  <td>
                    서울시 강남구 테헤란로 123 하나금융그룹 강남사옥 하나캐피탈
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">2. 대출 등 정보</h3>
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
                <col style="width: 87px" />
                <col style="width: 149px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th rowspan="2" class="align-left">성명</th>
                  <th class="align-left">계좌번호</th>
                  <td class="align-left">D000000000000</td>
                </tr>
                <tr>
                  <th class="align-left">잔액</th>
                  <td class="align-left">30,000,000원</td>
                </tr>
                <tr>
                  <th rowspan="3" class="align-left">기한이익 상실</th>
                  <th class="align-left">사유</th>
                  <td class="align-left">
                    기한이익상실에 대한 상세한 사유를 쓰면 됨
                  </td>
                </tr>
                <tr>
                  <th class="align-left">사유발생일</th>
                  <td class="align-left">2024.09.24</td>
                </tr>
                <tr>
                  <th class="align-left">상실일</th>
                  <td class="align-left">2024.09.24</td>
                </tr>
                <tr>
                  <th rowspan="2" class="align-left">경매정보</th>
                  <th class="align-left">경매신청예정일</th>
                  <td class="align-left">2024.09.24</td>
                </tr>
                <tr>
                  <th class="align-left">
                    채무조정 요청<br />
                    가능 기한
                  </th>
                  <td class="align-left">2024.09.24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">3. 경매신청 대상 주택(담보목적물)</h3>
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
                <col style="width: 160px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>소유주</th>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>홍길동</td>
                  <td>서울시 강남구 테헤란로 123 하나금융그룹 강남사옥</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
        </section>

        <div class="row-margin-container-medium">
          <p class="text-body-1">
            ※ 주택경매 예정의 통지가 도달한 날부터 10영업일 이내에 채무조정을
            요청할 수 있으며, 같은 기간 내에 요청이 없을 경우 예정대로 경매가
            진행됩니다.<br />
            ※ 채권추심업무 처리절차(변제독촉장 송부, 방문추심, 가압류 신청 등
            법적 조치 등)와 채무자의 불법추심 대응요령<br />(소멸시효 완성채권
            추심시 추심중단 요청 및 증빙자료 제출 등)이 당사
            홈페이지(www.hanacapital.co.kr)에 공시되어 있습니다.<br /><br />
            0000년 00월 00일<br /><br />
            하나캐피탈 주식회사<br />
            서울 강남구 테헤란로 127, 20층<br />
            (홈페이지: www.hanacapital.co.kr, 대표전화 : 1800-1110)
          </p>
        </div>
      </div>

      <BasicHr theme="tertiary" className="row-margin-block" />

      <div>
        <h2 class="text-title-1">채무조정 지원제도 안내</h2>
        <section class="row-margin-container-medium">
          <h3 class="text-body-1">1. 채무조정의 요청권</h3>
          <div class="row-margin-item-group">
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (개요) 「개인금융채권의 관리 및 개인금융채무자의 보호에 관한
                  법률」(이하 “「개인채무자보호법」”이라 한다)에 따라 채무 연체
                  발생시 채무자가 금융회사에 직접 채무조정을 요청할 수 있는 권리
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (신청방법) 「개인채무자보호법」에 명시된 채무조정 요청권에
                  대해 상세히 알려드리니, 해당 사항이 있는 고객님께서는 당사
                  홈페이지(www.hanacapital.co.kr) 또는 당사 콜센터(☎1800-1110)에
                  문의하여 주시기 바랍니다.
                </div>
              </li>
            </ul>
          </div>
          <div class="row-margin-contents">
            <p class="text-body-3 color-gray font-weight-bold">
              &lt;참고 : 채무조정 절차&gt;
            </p>
            <div
              :class="[$style['step--horizontal'], 'row-margin-item-medium']"
            >
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="[$style['step__inner'], 'custom-step-inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 1</div>
                      <h4 :class="$style['step__text']">
                        <strong>요청<br />(채무자)</strong>
                      </h4>
                      <p
                        :class="[
                          $style['step__text'],
                          'row-margin-container-regular',
                        ]"
                      >
                        금융회사에 채무조정을 요청합니다 <br />
                        <span class="text-body-3">(구비서류 제출)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="[$style['step__inner'], 'custom-step-inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 2</div>
                      <h4 :class="$style['step__text']">
                        <strong
                          >심사 및<br />
                          결과통지<br />
                          (금융회사)</strong
                        >
                      </h4>
                      <p
                        :class="[
                          $style['step__text'],
                          'row-margin-item-medium',
                        ]"
                      >
                        채무조정 심사 후 결과를 통지합니다 <br />
                        <span class="text-body-3">(10영업일 이내)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="[$style['step__inner'], 'custom-step-inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 3</div>
                      <h4 :class="$style['step__text']">
                        <strong>동의<br />(채무자)</strong>
                      </h4>
                      <p
                        :class="[
                          $style['step__text'],
                          'row-margin-container-regular',
                        ]"
                      >
                        금융회사가 통지한 채무조정 내용에 대해 동의 여부를
                        결정합니다<br />
                        <span class="text-body-3">(10영업일 이내)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="[$style['step__inner'], 'custom-step-inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 4</div>
                      <h4 :class="$style['step__text']">
                        <strong
                          >채무조정서<br />
                          작성<br />
                          (금융회사)</strong
                        >
                      </h4>
                      <p
                        :class="[
                          $style['step__text'],
                          'row-margin-item-medium',
                        ]"
                      >
                        채무자가 동의한 채무조정내용에 대해 조정서를 작성합니다
                      </p>
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="[$style['step__inner'], 'custom-step-inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__badge']">STEP 5</div>
                      <h4 :class="$style['step__text']">
                        <strong
                          >합의<br />
                          (채무자)</strong
                        >
                      </h4>
                      <p
                        :class="[
                          $style['step__text'],
                          'row-margin-container-regular',
                        ]"
                      >
                        조정서에 날인하면 채무조정 합의가 성립됩니다
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="text-body-1 row-margin-item-medium">
                ※ 당사 대출 외에 타사 대출금에 대해서도 함께 채무조정을
                희망하시는 분은, 신용회복위원회(☎1600-5500)를 통해 상담 받으실
                수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">2. 신용회복위원회 채무조정</h3>
          <div class="row-margin-item-group">
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (개요) 채무를 정상적으로 상환할 수 없는 과중 채무자를 대상으로
                  상환기간 연장, 이자율 조정, 채무감면 등을 통해 본인의
                  상환능력에 맞게 채무를 조정하는 절차
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (신청방법) 신용회복위원회(☎1600-5500) 통해 상담 및 신청 가능
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">3. 법원의 개인회생</h3>
          <div class="row-margin-item-group">
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (개요) 채무를 정상적으로 상환할 수 없는 개인 채무자를 대상으로
                  채권자 등 이해관계인의 법률 관계를 조정함으로써 채무자의
                  효율적 회생과 채권자의 이익을 도모하기 위하여 마련된 절차
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (신청방법) 대한법률구조공단(☎132) 또는
                  신용회복위원회(☎1600-5500) 통해 상담 및 신청 가능
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1">4. 법원의 개인파산·면책</h3>
          <div class="row-margin-item-group">
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (개요) 자신의 재산으로 모든 채무를 변제할 수 없는 개인
                  채무자를 대상으로 법원이 모든 채권자가 평등하게 채권을
                  변제받도록 하고 채무자에게는 면책 절차를 통하여 남아있는
                  채무에 대한 변제 책임을 면제하는 절차
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  (신청방법) 대한법률구조공단(☎132) 또는
                  신용회복위원회(☎1600-5500) 통해 상담 및 신청 가능
                </div>
              </li>
            </ul>
          </div>
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
      tr:nth-child(2) th,
      tr:nth-child(4) th,
      tr:nth-child(5) th,
      tr:nth-child(7) th {
        border-left: 1px solid #e0e0e0;
      }
    }
  }
}
.custom-step-inner {
  padding: 24px 18px 24px 24px;
}
</style>
