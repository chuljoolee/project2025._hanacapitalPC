<script>
// LM_P01_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FloatingWrap from '@/components/ui/layout/FloatingWrap.vue';
import FloatingButton from '@/components/ui/button/FloatingButton.vue';

import IconSearchCompany from '@/assets/images/icon/search-company.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
    StepProgress,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    BasicDatepicker,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FloatingWrap,
    FloatingButton,
    IconSearchCompany,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      name001Error: false,
      name002Error: false,
      idNumber001Error: false,
      idNumber002Error: false,
      phone001Error: false,
      phone002Error: false,
      sendError: false,
    });

    onMounted(() => {
      store.ui.header.setActive(() => 'lmBlog004');
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
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">대출상담</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        신용정보조회동의 여부를 확인하세요
      </PageMainText>
      <PageSubText align="left">
        대출상담은 적법한 절차에 의해 모집한 고객만 등록 가능 합니다.<br />
        모집 과정에서 불법정보 활용 시 대출모집인 모범규준 및 당사 내규에 따라
        계약 해지될 수 있으니 유의하시길 바랍니다.
      </PageSubText>
    </PageHead>

    <FloatingWrap>
      <FloatingButton>
        <template v-slot:topIcon>
          <IconSearchCompany />
        </template>
        빠른 직군 검색
      </FloatingButton>
    </FloatingWrap>

    <div>
      <section>
        <h3 class="text-title-1 row-margin-contents">
          본 고객은 적법한 절차에 의해 모집한 고객임을 확인 합니다.
        </h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              name="LM_P01_p001_type"
              id="LM_P01_p001_type_001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>아니오</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck name="LM_P01_p001_type" id="LM_P01_p001_type_002">
              <BoxCheckLabel>예</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <section class="row-margin-block-small row-margin-bottom-none">
        <h3 class="text-title-1 row-margin-contents">고객 기본정보</h3>

        <FormList>
          <FormListItem titleText="이름" target="#LM_P01_p001_name001">
            <FormInvalid :error="state.name001Error">
              <InputBlock :error="state.name001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="LM_P01_p001_name001" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="생년월일" target="#LM_P01_p001_id001">
            <FormInvalid :error="state.idNumber001Error">
              <InputBlock :error="state.idNumber001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일"
                    id="LM_P01_p001_id001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#LM_P01_p001_phone001">
            <FormInvalid :error="state.phone001Error">
              <InputBlock :error="state.phone001Error">
                <InputBlockCell :flexible="true">
                  <BasicInput title="휴대폰번호" id="LM_P01_p001_phone001" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <ButtonList>
        <ButtonListItem>
          <BasicButton theme="tertiary">신용정보조회동의(URL 발송)</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-title-1 row-margin-contents">신용정보조회 동의내역</h3>

      <FormList>
        <FormListItem titleText="이름" target="#LM_P01_p001_name002">
          <FormInvalid :error="state.name002Error">
            <InputBlock :error="state.name002Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="LM_P01_p001_name002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="생년월일" target="#LM_P01_p001_id002">
          <FormInvalid :error="state.idNumber002Error">
            <InputBlock :error="state.idNumber002Error">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="생년월일"
                  id="LM_P01_p001_id002"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#LM_P01_p001_phone002">
          <FormInvalid :error="state.phone002Error">
            <InputBlock :error="state.phone002Error">
              <InputBlockCell :flexible="true">
                <BasicInput title="휴대폰번호" id="LM_P01_p001_phone002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="URL 발송일" target="#LM_P01_p001_send_button">
          <FormInvalid :error="state.sendError">
            <InputBlock :error="state.sendError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="URL 발송일"
                  id="LM_P01_p001_send"
                  buttonId="LM_P01_p001_send_button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <ul class="reset-list">
      <!-- Case : 신용정보조회동의 완료 -->
      <li class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">김하나</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>생년월일</KeyValueTitle>
              <KeyValueText>123456-2******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>URL발송일</KeyValueTitle>
              <KeyValueText>2022.11.09</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>동의일자</KeyValueTitle>
              <KeyValueText>2022.11.09</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <ButtonList
            :wrap="true"
            align="center"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <ButtonListItem>
              <BasicButton size="regular"> 한도조회 </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </li>
      <!-- // Case : 신용정보조회동의 완료 -->

      <!-- Case : 신용정보조회동의 미동의 상태 -->
      <li class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">김하나</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>생년월일</KeyValueTitle>
              <KeyValueText>123456-2******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
      <!-- // Case : 신용정보조회동의 미동의 상태 -->

      <li v-for="i in 3" :key="i" class="row-margin-contents">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">김하나</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue :wrap="true">
            <KeyValueItem>
              <KeyValueTitle>생년월일</KeyValueTitle>
              <KeyValueText>123456-2******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </li>
    </ul>
  </PageContents>
</template>
