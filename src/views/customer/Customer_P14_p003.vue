<script>
// 철주차장님 작업
// Customer_P14_p003
// Customer_P14_p005
import { reactive, onMounted, onUnmounted } from 'vue'; // 2024.05.02 수정

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
//s 2024.05.02 추가
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
//e 추가

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    NavTab, //추가
    NavTabButton, //추가
    FormList, //추가
    FormListItem, //추가
    FormInvalid, //추가
    InputBlock, //추가
    InputBlockCell, //추가
    BasicInput, //추가
    FormInvalidMessage, //추가
    SecurityInput, //추가
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };
    // s 2024.05.02 추가
    const state = reactive({
      nameError: false,
      idNumberError001: false,
      idNumberError002: false,
      partnershipError: false,
      evaluationError: false,
      possibleAmountError: false,
    });
    // e 추가
    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
    // s 2024.05.02 추가
    return {
      state,
    };
    // e 추가
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
            text: '고객센터',
            to: '/',
          },
          {
            text: '정보이용·제공 조회',
            to: '/',
          },
          {
            text: '계열사 마케팅 목적 동의 현황 조회',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle> 정보 이용·제공 조회 </PageTitle>
      </PageHeadRow>
      <PageMainText>
        <p style="text-align: center">
          정보 이용·제공 현황을 조회시 <br />본인 인증이 필요합니다
        </p>
      </PageMainText>
    </PageHead>
    <!-- // 2024.05.02 수정-->
    <!-- 삭제 -->
    <!--
    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
        'row-margin-block-small',
        'row-margin-top-none',
      ]"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              개인정보 열람 청구를 신청할 수 있습니다.
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                :block="true"
              >
                이동하기
              </TextButton>
            </div>
          </div>
        </div>
      </li>
    </ul>
    -->
    <!-- //삭제 -->
    <!-- 2024.05.02 추가 -->
    <NavTab>
      <NavTabButton tagName="RouterLink" to="" align="center">
        마케팅 목적 동의<br />
        현황 조회
      </NavTabButton>
      <NavTabButton tagName="RouterLink" to="" align="center">
        신용정보 이용제공<br />사실 조회
      </NavTabButton>

      <NavTabButton tagName="a" href="" to="" :active="true" align="center">
        계열사 마케팅 동의<br />현황 조회
      </NavTabButton>
    </NavTab>

    <h3 class="text-title-1 row-margin-contents">본인인증</h3>
    <!--// 2024.05.02  -->
    <BoxCheckList>
      <BoxCheckListItem>
        <BoxCheck name="Customer_P14_p003_type" id="Customer_P14_p003_type_001">
          <BoxCheckLabel>휴대전화 인증</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          name="Customer_P14_p003_type"
          id="Customer_P14_p003_type_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>공동인증서 인증</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
    </BoxCheckList>

    <!-- 2024.05.02 추가 -->
    <div style="margin-top: 30px"></div>
    <FormList
      :classNames="{
        wrap: 'row-margin-block-small row-margin-top-none',
      }"
    >
      <FormListItem titleText="이름" target="#Customer_P14_p003_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="Customer_P14_p003_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#Customer_P14_p003_id">
        <FormInvalid :error="state.idNumberError001">
          <InputBlock :error="state.idNumberError001">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="Customer_P14_p003_id"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, true, true, false, false, false, false]"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>
    <!-- // 2024.05.02 추가 -->
    <div class="row-margin-block-small row-margin-bottom-none">
      // [공통 > 본인인증] 내용 노출
    </div>

    <section class="row-margin-block-small row-margin-bottom-none">
      <!-- 2024.05.02 텍스트 수정 -->
      <h3 class="text-title-1 row-margin-contents">약관에 동의해 주세요</h3>
      <!-- // 2024.05.02 수정 -->

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="Customer_P14_p003_agree_001"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  서비스 이용약관 전체동의
                </CheckBoxLabelText>
              </CheckBox>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="Customer_P14_p003_agree_001_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인(신용)정보 필수적 수집 · 이용동의
                      </CheckBoxLabelText>
                    </CheckBox>
                    <!-- 2024.05.02 수정 -->
                    <div :class="$style['agree-list__right']">
                      <BasicButton size="small"> 보기 </BasicButton>
                    </div>
                    <!-- // 2024.05.02 수정 -->
                  </div>
                  <ul
                    :class="[
                      $style['agree-list__list'],
                      $style['agree-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_agree_001_001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Customer_P14_p003_agree_001_001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            고유식별번호 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p003.scss';
</style>
