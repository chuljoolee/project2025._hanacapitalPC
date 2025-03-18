<script>
// My_P03_l018
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
    ButtonList,
    ButtonListItem,
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
      <!-- S: 240521 수정 -->
      <!-- Case.A : '제휴사 중고차' 약정 일 경우 노출  -->
      <PageMainText align="left"
        >대출금 지급 및 자동이체 계좌(본인계좌)를<br />입력해주세요</PageMainText
      >

      <!-- Case.B : '오토리스(금용/운용)'일 경우 노출  -->
      <PageMainText align="left"
        >범칙금 처리 및 자동 이체 정보를 입력해주세요</PageMainText
      >

      <!-- Case.C : '오토할부·오토론·렌터카' 일 경우 노출  -->
      <PageMainText align="left">자동이체 정보를 입력해 주세요</PageMainText>
      <!-- // E: 240521 수정 -->
    </PageHead>
    <section>
      <FormList>
        <!-- S: 240521 수정 -->
        <FormListItem>
          <!-- Case.B : '오토리스(금용/운용)'일 경우 노출  -->
          <ButtonList class="marginTop">
            <ButtonListItem>
              <BasicButton>납세자 변경</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>대납 청구</BasicButton>
            </ButtonListItem>
          </ButtonList>
          <!-- // Case.B : '오토리스(금용/운용)'일 경우 노출  -->
        </FormListItem>
        <!-- // E: 240521 수정 -->

        <FormListItem
          titleText="결제일"
          target="#My_P03_l018_purpose"
          :selectOnly="true"
        >
          <FormInvalid :error="state.usageError">
            <InputBlock :error="state.usageError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '1일',
                    },
                    {
                      value: '2',
                      label: '5일',
                    },
                    {
                      value: '3',
                      label: '11일',
                    },
                    {
                      value: '4',
                      label: '15일',
                    },
                    {
                      value: '5',
                      label: '21일',
                    },
                  ]"
                  title="결제일 선택하기"
                  inputId="My_P03_l018_purpose"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : '오토 할부·론' 일 경우 노출  -->
        <FormListItem
          titleText="은행"
          target="#My_P03_l018_purpose"
          :selectOnly="true"
        >
          <FormInvalid :error="state.usageError">
            <InputBlock :error="state.usageError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: '하나은행',
                    },
                    {
                      value: '2',
                      label: '국민은행',
                    },
                    {
                      value: '3',
                      label: '기업은행',
                    },
                    {
                      value: '4',
                      label: '신한은행',
                    },
                    {
                      value: '5',
                      label: '우리은행',
                    },
                  ]"
                  title="결제일 선택하기"
                  inputId="My_P03_l018_purpose"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : '오토 할부·론' 일 경우 노출  -->

        <FormListItem titleText="계좌번호" target="#My_P03_l018_accountNumber">
          <FormInvalid :error="state.workplaceNameError001">
            <InputBlock :error="state.workplaceNameError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="계좌번호" id="My_P03_l018_accountNumber" />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="small" theme="tertiary"> 확인 </BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>‘-’를 제외하고 입력해주세요</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="예금주명"
          :disabled="true"
          target="#My_P03_l018_name"
        >
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="예금주명"
                defaultValue="김하나"
                :disabled="true"
                id="My_P03_l018_name"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
      </FormList>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">이전</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>계좌인증</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P01_p005.scss';
</style>

<style lang="scss" scoped>
.marginTop {
  margin-top: 0;
}
</style>
