<script>
// My_P03_l021
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    BasicButton,
    BasicDatepicker,

    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      idNumberError: false,
      mailError: false,
      homeNumberError: false,
      phoneError: false,
      addressError001: false,
      addressError002: false,
      dayError001: false,
      bankError: false,
      dateError: false,
      MethodSelectError: false,
      addressMethodSelectError: false,
      amountError: false,
      rateError: false,
      methodError: false,
      commissionError: false,
      residenceTypeError: false,
      additionalTypeError: false,
      routeError: false,
      objectError: false,
      ownerError: false,
      domesticBankNameError: false,
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
            text: '진행상태 조회',
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
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">금융조건을 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <FormList>
        <FormListItem titleText="차량 매매가격" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList
              :wrap="true"
              :col="3"
              :classNames="{ wrap: 'row-margin-block-small' }"
            >
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l021_001">
                  <BoxCheckLabel>+10만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l021_002">
                  <BoxCheckLabel>+100만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l021_003">
                  <BoxCheckLabel>+300만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l021_004">
                  <BoxCheckLabel>+500만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l021_005">
                  <BoxCheckLabel>+1,000만</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormInvalid>
        </FormListItem>

        <FormListItem target="#AF_P06_p006_carAmount" :forceFocus="true">
          <FormInvalid :error="state.carAmountError">
            <InputBlock :error="state.carAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="차량구입금액"
                  id="AF_P06_p006_carAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-1">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <!-- Case : 차량구입금액 입력 시 노출 -->
            <!-- <FormHelpText :classNames="{ wrap: 'align-right' }"
              >천오백삼십만원</FormHelpText
            > -->
            <!-- // Case : 차량구입금액 입력 시 노출 -->
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="인수일자" target="#testInput012Button">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="인수일자"
                  id="My_P03_l021_date"
                  buttonId="testInput012Button"
                  :onChange="testInputEvent"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="차량 판매자" target="#testInput007">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량 판매자" id="testInput007" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">이전</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p005.scss';
</style>
