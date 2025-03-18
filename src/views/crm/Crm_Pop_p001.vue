<script>
// Crm_Pop_p001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    RadioButton,
    RadioButtonObject,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="small">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>상담원 변경</PopupTitle>
        </ModalPopupHead>
      </template>

      <div class="container">
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="상담원 이름 검색어"
              placeholder="상담원 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>

        <div class="m_2010">
          <p class="text-body-3 color-gray">
            <strong class="font-weight-medium color-green">999</strong> 건
          </p>
        </div>

        <div class="scroll-container">
          <div class="scroll-container mxh-378">
            <table class="table-type-01 none-search">
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>

            <table class="table-type-01">
              <colgroup>
                <col width="10%" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr>
                  <th>선택</th>
                  <th>상담원</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">
                    <RadioButton
                      name="testRadioButton004"
                      id="testRadioButton004_001"
                      :onlyObject="true"
                    >
                      <RadioButtonObject />
                    </RadioButton>
                  </td>
                  <td class="txt-center">김하나</td>
                </tr>
                <tr>
                  <td class="txt-center">
                    <RadioButton
                      name="testRadioButton004"
                      id="testRadioButton004_002"
                      :onlyObject="true"
                    >
                      <RadioButtonObject />
                    </RadioButton>
                  </td>
                  <td class="txt-center">김둘</td>
                </tr>
                <tr>
                  <td class="txt-center">
                    <RadioButton
                      name="testRadioButton004"
                      id="testRadioButton004_003"
                      :onlyObject="true"
                    >
                      <RadioButtonObject />
                    </RadioButton>
                  </td>
                  <td class="txt-center">김셋</td>
                </tr>
                <tr>
                  <td class="txt-center">
                    <RadioButton
                      name="testRadioButton004"
                      id="testRadioButton004_004"
                      :onlyObject="true"
                    >
                      <RadioButtonObject />
                    </RadioButton>
                  </td>
                  <td class="txt-center">김넷</td>
                </tr>
                <tr>
                  <td class="txt-center">
                    <RadioButton
                      name="testRadioButton004"
                      id="testRadioButton004_005"
                      :onlyObject="true"
                    >
                      <RadioButtonObject />
                    </RadioButton>
                  </td>
                  <td class="txt-center">김다섯</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton
              size="regular"
              :line="true"
              theme="quaternary"
              @click="layerSlotProps.close()"
              >취소</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular">저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>
<style>
.m_2010 {
  margin: 20px auto 10px;
}
.mb_20 {
  margin-bottom: 20px;
}
</style>
