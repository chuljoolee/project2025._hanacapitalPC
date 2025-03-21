<script>
// IF_P03_p002
// IF_P03_p004
// IF_P03_p006
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IF_P03_l002 from '@/views/inventoryFinance/IF_P03_l002.vue';

import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    BankLogo,
    TextButton,
    BasicTooltip,
    IF_P03_l002,
    iconInformation,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      accountError001: false,
      accountError002: false,
      repaymentMethodError001: false,
      repaymentMethodError002: false,
      repaymentMethodError003: false,
      repaymentAmountError001: false,
      repaymentAmountError002: false,
      repaymentAmountError003: false,
      dateError: false,
    });

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'inventoryFinance003');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    return {
      state,
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">중도상환</PageTitle>
        <template v-slot:right>
          <StepProgress :total="4" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        선택한 계약상품의 중도상환 신청을 위해<br />
        조건을 입력 또는 선택해 주세요
      </PageMainText>
    </PageHead>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="[$style['division-info'], 'row-margin-item-small']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="text-title-2 font-weight-medium">20고5678</div>
              </li>
              <li
                :class="[
                  $style['division-info__item'],
                  $style['division-info__item--small'],
                  'flex-box__cell flex-1',
                ]"
              >
                <BasicTooltip
                  :classNames="{ button: 'display-block' }"
                  type="large"
                >
                  <div
                    class="text-body-3 color-gray-tertiary row-margin-item-small ellipsis"
                  >
                    BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021 텍스트가
                    길어지면 말줄임처리되어 보여지고, 차종 Text hover 시에
                    Tooltip으로 모든 정보가 보여집니다.
                  </div>

                  <template v-slot:contents>
                    <section :class="$style['tooltip-section']">
                      <p :class="$style['tooltip-section__title']">
                        BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
                        텍스트가 길어지면 말줄임처리되어 보여지고, 차종 Text
                        hover 시에 Tooltip으로 모든 정보가 보여집니다.
                      </p>
                    </section>
                  </template>
                </BasicTooltip>
              </li>
            </ul>
          </div>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue :wrap="true">
        <KeyValueItem>
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>2019.05.30 ~ 2019.06.30</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>결제예정금액</KeyValueTitle>
          <KeyValueText>3,500,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle>결제회차</KeyValueTitle>
          <KeyValueText>1/1 (매월 11일)</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">중도상환 조건 입력</h3>
      <BoxCheckList :wrap="true" :col="3">
        <BoxCheckListItem>
          <BoxCheck
            name="IF_P03_p002_condition"
            id="IF_P03_p002_condition001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>오늘 즉시 출금</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="IF_P03_p002_condition" id="IF_P03_p002_condition002">
            <BoxCheckLabel>가상계좌 입금</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck name="IF_P03_p002_condition" id="IF_P03_p002_condition003">
            <BoxCheckLabel>중도상환 시뮬레이션</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <div class="row-margin-contents">
        <!-- Case : 오늘 즉시 출금 선택시 -->
        <div>
          <FormList>
            <FormListItem
              titleText="즉시 출금 계좌"
              target="#IF_P03_p002_account001"
              :selectOnly="true"
            >
              <FormInvalid :error="state.accountError001">
                <InputBlock :error="state.accountError001">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '농협은행 52438123435',
                        },
                        {
                          value: '2',
                          label: '신한 123-456-789012',
                        },
                        {
                          value: '3',
                          label: '우리 123-456-789012',
                        },
                      ]"
                      title="즉시 출금 계좌"
                      inputId="IF_P03_p002_account001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <!-- Case : 출금 가능 계좌가 없을 시 -->
            <FormListItem
              titleText="즉시 출금 계좌"
              target="#IF_P03_p002_account002"
              :selectOnly="true"
              :disabled="true"
            >
              <FormInvalid :error="state.accountError002">
                <InputBlock :error="state.accountError002" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :options="[
                        {
                          value: '1',
                          label: '즉시출금 가능한 계좌가 없습니다',
                        },
                      ]"
                      title="즉시 출금 계좌"
                      inputId="IF_P03_p002_account002"
                      defaultValue="1"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <!-- //Case : 출금 가능 계좌가 없을 시 -->

            <FormListItem
              titleText="중도상환방법"
              target="#IF_P03_p002_repaymentMethod001"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentMethodError001">
                <InputBlock
                  :error="state.repaymentMethodError001"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="중도상환방법"
                      id="IF_P03_p002_repaymentMethod001"
                      defaultValue="전체상환"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="상환금액"
              target="#IF_P03_p002_repaymentAmount001"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentAmountError001">
                <InputBlock
                  :error="state.repaymentAmountError001"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="상환금액"
                      id="IF_P03_p002_repaymentAmount001"
                      :useDelete="false"
                      align="right"
                      defaultValue="7,400,000"
                      :disabled="true"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-1">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </div>
        <!-- //Case : 오늘 즉시 출금 선택시 -->

        <!-- Case : 가상계좌 입금 선택시 -->
        <div>
          <BasicBox theme="tertiary">
            <KeyValue align="left" :wrap="true">
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="004" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">국민</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="011" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">농협</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="020" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">우리</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="081" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">하나</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="088" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">신한</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText>123-456-78901234</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <div class="inline-wrap align-right row-margin-item-medium">
            <TextButton
              theme="quaternary"
              textSize="regular"
              iconSize="regular"
              @click="layer001Open"
            >
              가상계좌 유의사항
              <template v-slot:rightIcon>
                <iconInformation />
              </template>
            </TextButton>
          </div>

          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="중도상환방법"
              target="#IF_P03_p002_repaymentMethod002"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentMethodError002">
                <InputBlock
                  :error="state.repaymentMethodError002"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="중도상환방법"
                      id="IF_P03_p002_repaymentMethod002"
                      defaultValue="전체상환"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem
              titleText="상환금액"
              target="#IF_P03_p002_repaymentAmount002"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentAmountError002">
                <InputBlock
                  :error="state.repaymentAmountError002"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="상환금액"
                      id="IF_P03_p002_repaymentAmount002"
                      :useDelete="false"
                      align="right"
                      defaultValue="7,400,000"
                      :disabled="true"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-1">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </div>
        <!-- //Case : 가상계좌 입금 선택시 -->

        <!-- Case : 중도상환 시뮬레이션 선택시 -->
        <div>
          <FormList>
            <FormListItem
              titleText="중도상환방법"
              target="#IF_P03_p002_repaymentMethod003"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentMethodError003">
                <InputBlock
                  :error="state.repaymentMethodError003"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="중도상환방법"
                      id="IF_P03_p002_repaymentMethod003"
                      defaultValue="전체상환"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem titleText="입금일자" target="#IF_P03_p002_dateButton">
              <FormInvalid :error="state.dateError">
                <InputBlock :error="state.dateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="입금일자"
                      id="IF_P03_p002_date"
                      buttonId="IF_P03_p002_dateButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem
              titleText="상환금액"
              target="#IF_P03_p002_repaymentAmount003"
              :disabled="true"
            >
              <FormInvalid :error="state.repaymentAmountError003">
                <InputBlock
                  :error="state.repaymentAmountError003"
                  :disabled="true"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="상환금액"
                      id="IF_P03_p002_repaymentAmount003"
                      :useDelete="false"
                      align="right"
                      defaultValue="7,400,000"
                      :disabled="true"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-1">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </div>
        <!-- //Case : 중도상환 시뮬레이션 선택시 -->
      </div>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>중도상환금액 조회</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <IF_P03_l002 ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/IF_P03_p002.scss';
</style>
