<script>
// My_P03_l016
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
      <PageMainText align="left">계약자 정보를 입력해 주세요</PageMainText>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <FormList>
          <FormListItem titleText="휴대전화번호" target="#PF_P01_p005_phone">
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="휴대전화번호" id="PF_P01_p005_phone" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="국적"
            target="#My_P03_l016_national"
            :selectOnly="true"
          >
            <FormInvalid :error="state.bankError">
              <InputBlock :error="state.bankError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '대한민국',
                      },
                    ]"
                    title="국적"
                    inputId="My_P03_l016_national"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="자택주소"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P01_p005_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="자택주소 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="등본지"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="등본지 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="My_P03_l016_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="등본지 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="등본지 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="실거주지"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="실거주지 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="My_P03_l016_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="실거주지 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="실거주지 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <div class="row-margin-contents-group row-margin-contents-group">
            <CheckBox
              id="My_P03_l016_address"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText> 등본지와 주소동일 </CheckBoxLabelText>
            </CheckBox>
          </div>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">직장/사업장 정보</h3>

        <FormList>
          <FormListItem
            titleText="직장/사업장 주소"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장/사업장 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P01_p005_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장/사업장 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장/사업장 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="직장/사업장 전화번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '02',
                      },
                      {
                        value: '2',
                        label: '031',
                      },
                      {
                        value: '3',
                        label: '051',
                      },
                      {
                        value: '4',
                        label: '042',
                      },
                    ]"
                    title="지역번호"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="직장/사업장 전화번호"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">직장 정보</h3>

        <FormList>
          <FormListItem
            titleText="직장주소 (선택)"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P01_p005_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="직장 전화번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '02',
                      },
                      {
                        value: '2',
                        label: '031',
                      },
                      {
                        value: '3',
                        label: '051',
                      },
                      {
                        value: '4',
                        label: '042',
                      },
                    ]"
                    title="지역번호"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="직장 전화번호"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">사업장 정보</h3>

        <FormList>
          <FormListItem
            titleText="사업장주소 (선택)"
            target="#PF_P01_p005_addressSerachButton"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업장 - 우편번호"
                    defaultValue="12345"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="small"
                    theme="tertiary"
                    id="PF_P01_p005_addressSerachButton"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <!-- Case: 주소 검색 및 입력 후 노출 -->
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업장 - 주소"
                    defaultValue="인천광역시 서구 에코로 181"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <InputBlock
                :error="state.addressError001"
                :disabled="true"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업장 - 상세주소"
                    defaultValue="하나아파트 835동 4590호"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- // Case: 주소 검색 및 입력 후 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="사업장 전화번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '02',
                      },
                      {
                        value: '2',
                        label: '031',
                      },
                      {
                        value: '3',
                        label: '051',
                      },
                      {
                        value: '4',
                        label: '042',
                      },
                    ]"
                    title="지역번호"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="사업장 전화번호"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
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
