<script>
// My_P03_l017
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
      <PageMainText align="left">청구서 수령방법을 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <FormList>
        <FormListItem titleText="전문금융소비자 해당여부" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList
              :wrap="true"
              :col="3"
              :classNames="{ wrap: 'row-margin-block-small' }"
            >
              <BoxCheckListItem>
                <BoxCheck
                  name="My_P03_l017_chk"
                  id="My_P03_l017_chk001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>온라인(SMS)</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l017_chk002">
                  <BoxCheckLabel>이메일</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck name="My_P03_l017_chk" id="My_P03_l017_chk003">
                  <BoxCheckLabel>이메일 + 우편</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이메일" target="#MI_P01_p005_EmailId">
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이메일 아이디" id="My_P03_l017_EmailId" />
              </InputBlockCell>
              <InputBlockCell margin="regular">@</InputBlockCell>
              <InputBlockCell margin="regular" :flexible="true">
                <BasicSelect
                  :options="[
                    {
                      value: '1',
                      label: 'naver.com',
                    },
                    {
                      value: '2',
                      label: 'hanmail.net',
                    },
                    {
                      value: '3',
                      label: 'gmail.com',
                    },
                    {
                      value: '4',
                      label: 'nate.com',
                    },
                    {
                      value: '5',
                      label: 'paran.com',
                    },
                    {
                      value: '6',
                      label: 'dreamwiz.com',
                    },
                    {
                      value: '7',
                      label: 'yahoo.com',
                    },
                    {
                      value: '8',
                      label: 'freechal.com',
                    },
                    {
                      value: '9',
                      label: '직접입력',
                    },
                  ]"
                  title="이메일 도메인"
                  placeholder="선택"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- Case : 직접입력 선택 시 노출 -->
            <!-- <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >

            </InputBlock> -->
            <!-- //Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <section class="marginWrap">
          <FormListItem titleText="우편 수령지" :forceFocus="true">
            <FormInvalid :error="state.typeError">
              <BoxCheckList
                :wrap="true"
                :col="3"
                :classNames="{ wrap: 'row-margin-block-small' }"
              >
                <BoxCheckListItem>
                  <BoxCheck name="My_P03_l017_chk02" id="My_P03_l017_chk004">
                    <BoxCheckLabel>등본지</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck name="My_P03_l017_chk02" id="My_P03_l017_chk005">
                    <BoxCheckLabel>실거주지</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck name="My_P03_l017_chk02" id="My_P03_l017_chk006">
                    <BoxCheckLabel>직장/사업장</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck name="My_P03_l017_chk02" id="My_P03_l017_chk007">
                    <BoxCheckLabel>직장</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck name="My_P03_l017_chk02" id="My_P03_l017_chk08">
                    <BoxCheckLabel>사업장</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>
        </section>
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
<style lang="scss" scoped>
.marginWrap {
  margin-top: 60px;
}
</style>
