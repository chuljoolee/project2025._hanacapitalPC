<script>
// DS_NO_W01_02_L03
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,

    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>채권양도 예정 통지서</PopupTitle>
          <template v-slot:sub> </template>
        </ModalPopupHead>
      </template>

      <div>
        <p>
          수신인 : 홍길동 (00.00.00) 귀하<br />
          주소 : (우편번호) 주소 동, 부속 주소 <br /><br />

          하나캐피탈(주)이 귀하에 대하여 가지는 아래 표시 채권을 20XX년 XX월
          XX일자로 양수 예정인에 양도할 예정임을 통지합니다. 채권양도에 따라
          대상채권의 모든 원금, 이자, 비용 및 이에 수반하는 일체의 권리도 양수
          예정인에게 이전될 예정임을 알려드립니다.<br /><br />

          아울러 『신용정보의 이용 및 보호에 관한 법률』, 『개인정보 보호법』 및
          금융위원회 고시 『신용정보업 감독 규정』에 따라 하나캐피탈(주)은
          채무자의 개인신용정보를 양수 예정인에게 이전･제공할 예정이며, 양수
          예정인은 같은 법 및 규정에 따라 본 양도예정채권과 관련한 귀하의
          개인(신용)정보를 관리ㆍ등록하게 될 예정임을 알려드립니다.<br /><br />

          또한, 귀하께서 개인금융채권을 연체한 경우에는 『개인금융채권의 관리 및
          개인금융채무자의 보호에 관한 법률』 제35조에서 정하는 바에 따라
          하나캐피탈(주)에게 채무조정을 요청할 수 있습니다(단, 동법
          제35조제1항제1호~제6호의 사유에 해당하는 경우에는 채무조정을 요청할 수
          없습니다).채무조정 요청의 절차·방법은 하나캐피탈(주)의 게시판과 인터넷
          홈페이지(www.hanacapital.co.kr)에서 확인할 수 있으며, 본 통지서 도달
          후 10영업일 내에 채무조정 요청이 없는 경우 아래 표시 채권이 예정대로
          양도될 수 있음을 알려드립니다.<br /><br />

          양도예정채권 명세<br />
          (20XX년 XX월 XX일 기준)
        </p>
      </div>

      <div class="row-margin-container-medium">
        <div class="row-margin-item-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h4 class="text-title-2 font-weight-medium">
                  소비자신용대출_아파트론_행복아파트론
                </h4>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>계좌번호</KeyValueTitle>
                <KeyValueText>0000000000000</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이자</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>최초대출원금</KeyValueTitle>
                <KeyValueText>99,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>법적절차비용</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출원금잔액</KeyValueTitle>
                <KeyValueText>999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>소멸시효 완성여부</KeyValueTitle>
                <KeyValueText> 부 </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </div>
        <div class="row-margin-item-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h4 class="text-title-2 font-weight-medium">
                  소비자신용대출_아파트론_행복아파트론
                </h4>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>계좌번호</KeyValueTitle>
                <KeyValueText>0000000000000</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이자</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>최초대출원금</KeyValueTitle>
                <KeyValueText>99,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>법적절차비용</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출원금잔액</KeyValueTitle>
                <KeyValueText>999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>소멸시효 완성여부</KeyValueTitle>
                <KeyValueText> 부 </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </div>
        <div class="row-margin-item-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h4 class="text-title-2 font-weight-medium">
                  소비자신용대출_아파트론_행복아파트론
                </h4>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>계좌번호</KeyValueTitle>
                <KeyValueText>0000000000000</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>이자</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>최초대출원금</KeyValueTitle>
                <KeyValueText>99,999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>법적절차비용</KeyValueTitle>
                <KeyValueText> 999,999 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>대출원금잔액</KeyValueTitle>
                <KeyValueText>999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>소멸시효 완성여부</KeyValueTitle>
                <KeyValueText> 부 </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </div>
        <NoticeText class="row-margin-item-medium"
          >이자, 법적절차비용 등 채권액은 변동될 수 있습니다.</NoticeText
        >
        <NoticeText class="row-margin-item-medium"
          >상각채권을 양도한 겨우 양도시점에 장래에 발생할 이자채권이
          면제됩니다.
        </NoticeText>
        <NoticeText class="row-margin-item-medium"
          >우편물 일괄발송에 따라 신용회복위원회 채무조정, 회생채무자,
          파산채무자 및 면책자에게도 본 통지서가 송달될 수 있으나, 이미 진행중인
          절차에 효력에 미치는 영향은 없습니다.</NoticeText
        >
        <NoticeText class="row-margin-item-medium"
          >상기 소멸시효 완성여부는 당사가 판단한 것으로, 소멸시효 완성여부에
          대한 채무자의 판단이 다른 경우에는 증빙을 갖추어 추심을 중단할 것을
          요구하는 등 항변할 수 있습니다.
        </NoticeText>
        <NoticeText class="row-margin-item-medium"
          >채권양도 예정 통지 이후 채권 양수도 대상에서 제외될 수 있으며, 양도
          예정일 이후 당사 또는 양수인측(양수 예정인)에 양도 여부를 확인할 수
          있습니다.</NoticeText
        >
        <NoticeText class="row-margin-item-medium"
          >채권추심업무 처리절차(변제독촉장 송부, 방문추심, 가압류 신청 등 법적
          조치 등)와 채무자의 불법추심 대응요령(소멸시효 완성채권 추심시
          추심중단 요청 및 증빙자료 제출 등)이 당사
          홈페이지(www.hanacapital.co.kr)에 공시되어 있습니다.</NoticeText
        >
        <p class="row-margin-container-medium">
          관련 상담 문의는 하나캐피탈(주)(1800-1110)로 연락주시기 바랍니다.<br />
          0000년 00월 00일<br /><br />

          <strong>양도예정인</strong> <br />
          하나캐피탈 주식회사 서울 강남 테헤란로 127, 20층
        </p>
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
