<script>
// PF_P07_p017
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    FormInvalid,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalidMessage,
    BasicInput,
    BasicBox,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      typeError: false,
      usageError: false,
      usageInputError: false,
      ageError: false,
      incomeError: false,
      assetError: false,
      expensesError: false,
      debtError: false,
      creditScoreError: false,
      careerError: false,
      salesError: false,
      totalAssetsError: false,
      creditRatingAgencyError: false,
      creditRatingError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '개인금융',
            to: '/',
          },
          {
            text: '온라인 약정',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">온라인 약정</PageTitle>
        <template v-slot:right>
          <StepProgress :total="7" :current="4" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"
        >적합성 · 적정성 화면서의 <br />
        체크리스트를 작성해 주세요</PageMainText
      >
      <PageSubText align="left">
        본 확인서는 「금융소비자 보호에 관한 법률」에 의거하여<br />
        손님의 재산상황, 금융상품 취득·처분 경험 등을 파악하여, 손님께서
        신청하신 상품이 손님의 상황에 적합·적정한지 여부를 확인하기 위해
        활용됩니다.<br /><br />
        아래 체크리스트에 손님의 상황에 부합하거나 가장 가까운 항목을 정확히
        선택(체크표시(v)) 하여 주시기 바랍니다.
      </PageSubText>
    </PageHead>

    <section>
      <FormList>
        <FormListItem titleText="전문금융소비자 해당여부" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_BoxCheckList001"
                  id="PF_P07_p007_BoxCheckList001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>전문금융소비자</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_BoxCheckList001"
                  id="PF_P07_p007_BoxCheckList001_002"
                >
                  <BoxCheckLabel>일반금융소비자</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <!-- Case : 전문금융소비자 선택시 노출 -->
            <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
              전문금융소비자 : 국가기관, 한국은행, 금융회사, 상시근로자 5인 이상
              법인·조합·단체, 대출모집인, SPC 등
            </NoticeText>
            <!-- //Case : 전문금융소비자 선택시 노출 -->
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="자금용도"
          target="#PF_P07_p007_purpose"
          :selectOnly="true"
        >
          <FormInvalid :error="state.usageError">
            <InputBlock :error="state.usageError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '차량구입자금',
                    },
                    {
                      value: '2',
                      label: '주택자금',
                    },
                    {
                      value: '3',
                      label: '경조사금',
                    },
                    {
                      value: '4',
                      label: '타기관 대출금상환',
                    },
                    {
                      value: '5',
                      label: '교육비',
                    },
                    {
                      value: '6',
                      label: '의료비',
                    },
                    {
                      value: '7',
                      label: '가계자금',
                    },
                    {
                      value: '8',
                      label: '사업자금(운전자금)',
                    },
                    {
                      value: '9',
                      label: '기타',
                    },
                  ]"
                  title="자금용도 선택하기"
                  inputId="PF_P07_p007_purpose"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 자금용도 - '기타' 항목 선택 시 노출 -->
        <FormListItem
          titleText="자금용도 직접 입력"
          target="#PF_P07_p007_PurposeInput"
        >
          <FormInvalid :error="state.usageInputError">
            <InputBlock :error="state.usageInputError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="자금용도 직접 입력"
                  id="PF_P07_p007_PurposeInput"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 자금용도 - '기타' 항목 선택 시 노출 -->

        <!-- Case : 일반금융소비자 선택 시 노출 -->
        <FormListItem
          titleText="연령"
          target="#PF_P07_p007_age"
          :disabled="true"
        >
          <FormInvalid :error="state.ageError">
            <InputBlock :error="state.ageError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="연령"
                  id="PF_P07_p007_age"
                  defaultValue="만 29세"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="연간소득" :forceFocus="true">
          <FormInvalid :error="state.incomeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_income"
                  id="PF_P07_p007_income1"
                >
                  <BoxCheckLabel>5천만원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_income"
                  id="PF_P07_p007_income2"
                >
                  <BoxCheckLabel
                    >5천만원 이상<br />
                    ~ 1억원 미만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_income"
                  id="PF_P07_p007_income3"
                >
                  <BoxCheckLabel>1억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="보유자산" :forceFocus="true">
          <FormInvalid :error="state.assetError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_asset"
                  id="PF_P07_p007_asset1"
                >
                  <BoxCheckLabel>1억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_asset"
                  id="PF_P07_p007_asset2"
                >
                  <BoxCheckLabel
                    >1억원 이상<br />
                    ~ 10억원 미만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_asset"
                  id="PF_P07_p007_asset3"
                >
                  <BoxCheckLabel>10억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 일반금융소비자 선택 시 노출 -->

        <!-- Case : 전문금융소비자 선택 시 노출 -->
        <FormListItem titleText="업력" target="#PF_P07_p007_careerPeriod">
          <FormInvalid :error="state.careerError">
            <InputBlock :error="state.careerError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  type="number"
                  pattern="\d*"
                  :useDelete="false"
                  title="업력"
                  id="PF_P07_p007_careerPeriod"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">년</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="매출액" :forceFocus="true">
          <FormInvalid :error="state.salesError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_sales"
                  id="PF_P07_p007_sales1"
                >
                  <BoxCheckLabel>5억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_sales"
                  id="PF_P07_p007_sales2"
                >
                  <BoxCheckLabel
                    >5억원 이상<br />
                    ~ 50억원 미만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_sales"
                  id="PF_P07_p007_sales3"
                >
                  <BoxCheckLabel>50억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="순이익" :forceFocus="true">
          <FormInvalid :error="state.netProfitError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_netProfit"
                  id="PF_P07_p007_netProfit1"
                >
                  <BoxCheckLabel>1억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_netProfit"
                  id="PF_P07_p007_netProfit2"
                >
                  <BoxCheckLabel>1억원 이상 <br />~ 10억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_netProfit"
                  id="PF_P07_p007_netProfit3"
                >
                  <BoxCheckLabel>10억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="총자산" :forceFocus="true">
          <FormInvalid :error="state.totalAssetsError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_totalAssets"
                  id="PF_P07_p007_totalAssets1"
                >
                  <BoxCheckLabel>10억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_totalAssets"
                  id="PF_P07_p007_totalAssets2"
                >
                  <BoxCheckLabel
                    >10억원 이상 <br />~ 100억원 미만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_totalAssets"
                  id="PF_P07_p007_totalAssets3"
                >
                  <BoxCheckLabel>100억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 전문금융소비자 선택 시 노출 -->

        <FormListItem
          titleText="고정지출"
          target="#PF_P07_p007_fixedExpenses"
          :selectOnly="true"
        >
          <FormInvalid :error="state.expensesError">
            <InputBlock :error="state.expensesError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '연간소득(매출)의 50% 미만',
                    },
                    {
                      value: '2',
                      label: '연간소득(매출)의 50% 이상 70% 미만',
                    },
                    {
                      value: '3',
                      label: '연간소득(매출)의 70% 이상 100% 미만',
                    },
                    {
                      value: '4',
                      label: '연간소득(매출)의 100% 이상',
                    },
                  ]"
                  title="고정지출 선택하기"
                  inputId="PF_P07_p007_fixedExpenses"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="부채" :forceFocus="true">
          <FormInvalid :error="state.debtError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_debt"
                  id="PF_P07_p007_debt1"
                >
                  <BoxCheckLabel>5천만원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_debt"
                  id="PF_P07_p007_debt2"
                >
                  <BoxCheckLabel>5천만원 이상 <br />~ 5억원 미만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_debt"
                  id="PF_P07_p007_debt3"
                >
                  <BoxCheckLabel>5억원 이상</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 일반금융소비자 선택 시 노출 -->
        <FormListItem
          titleText="신용점수"
          target="#PF_P07_p007_creditScore"
          :disabled="true"
        >
          <FormInvalid :error="state.creditScoreError">
            <InputBlock :error="state.creditScoreError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="신용점수"
                  id="PF_P07_p017_creditScore"
                  defaultValue="726점 (평가사 : NICE신용평가)"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 일반금융소비자 선택 시 노출 -->

        <!-- Case : 전문금융소비자 선택 시 노출 -->
        <FormListItem titleText="신용평가사" :forceFocus="true">
          <FormInvalid :error="state.creditRatingAgencyError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_creditRatingAgency"
                  id="PF_P07_p007_creditRatingAgency1"
                >
                  <BoxCheckLabel>NICE 신용평가</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_creditRatingAgency"
                  id="PF_P07_p007_creditRatingAgency2"
                >
                  <BoxCheckLabel>한국기업평가</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="PF_P07_p007_creditRatingAgency"
                  id="PF_P07_p007_creditRatingAgency3"
                >
                  <BoxCheckLabel>한국신용평가</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="신용등급"
          target="#PF_P07_p017_creditRating"
          :selectOnly="true"
        >
          <FormInvalid :error="state.creditRatingError">
            <InputBlock :error="state.creditRatingError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'AAA',
                    },
                    {
                      value: '2',
                      label: 'AA+',
                    },
                    {
                      value: '3',
                      label: 'AA',
                    },
                    {
                      value: '4',
                      label: 'AA-',
                    },
                    {
                      value: '5',
                      label: 'A+',
                    },
                    {
                      value: '6',
                      label: 'A',
                    },
                    {
                      value: '7',
                      label: 'A-',
                    },
                  ]"
                  title="신용등급 선택하기"
                  inputId="PF_P07_p017_creditRating"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 전문금융소비자 선택 시 노출 -->

        <FormListItem
          titleText="변제계획"
          target="#PF_P07_p017_creditPlan"
          :selectOnly="true"
        >
          <FormInvalid :error="state.creditRatingError">
            <InputBlock :error="state.creditRatingError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '매월 1일',
                    },
                    {
                      value: '2',
                      label: '매월 5일',
                    },
                    {
                      value: '3',
                      label: '매월 11일',
                    },
                    {
                      value: '4',
                      label: '매월 15일',
                    },
                    {
                      value: '5',
                      label: '매월 21일',
                    },
                  ]"
                  title="변제계획 선택하기"
                  inputId="PF_P07_p017_creditPlan"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h2 class="text-title-1">적합성·적정성 확인</h2>

      <BasicBox className="row-margin-contents">
        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              당사에 제공한 적합성·적정성 관련 정보는 본인의 재산상황, 용도 등의
              정보를 정확히 알려드린 것입니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              본인이 제공한 정보가 정확하지 않거나, 정보에 변경사항이 발생한
              경우에는 적합성·적정성 판단이 달라질 수 있음을 설명 받았습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              상기 목적을 위해 본인의 개인정보를 수집, 이용, 제공하는 것에
              동의합니다.
            </div>
          </li>
        </ol>
      </BasicBox>

      <CheckBox id="PF_P07_p007_check" theme="tertiary">
        <CheckBoxObject />
        <CheckBoxLabelText
          :classNames="{
            text: ['text-body-1', 'font-weight-medium'],
          }"
        >
          본인은 당사에서 제공한 적합성·적정성 관련 정보와 관련하여 위 사항에
          동의합니다.
        </CheckBoxLabelText>
      </CheckBox>

      <div class="row-margin-contents-small row-margin-bottom-none">
        <p
          class="text-body-1 color-gray-tertiary font-weight-light align-right"
        >
          0000년 00월 00일
        </p>
        <p class="text-body-1 align-right row-margin-item-group">
          신청인(또는 연대보증인) 김하나 (서명/인)
        </p>
      </div>

      <BasicBox theme="tertiary" className="row-margin-container-medium">
        <p class="text-body-2 color-gray font-weight-medium">
          본 확인서는 [금융소비자 보호에 관한 법률] 제 17조 및 제 18조에 따라
          작성되었습니다.
        </p>
      </BasicBox>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">이전</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p007.scss';
</style>
