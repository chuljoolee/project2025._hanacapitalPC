<script>
// Crm_Pop_p010
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import SimpleInput from '@/components/ui/form/SimpleInput.vue';
// import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,

    SimpleInput,
    // SimpleSelect,
    FormInvalidMessage,
    FormHelpText,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      testError001: false,
    });

    return {
      layer,
      state,
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
          <PopupTitle>견적서 발송</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <PopupText>견적서 받으실 분의 정보를 입력해주세요.</PopupText>

        <table class="table-type-01 mt10">
          <colgroup>
            <col width="30%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title required">이름</td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td class="title required">휴대폰 번호</td>
              <td>
                <div class="flex-box align-items-start">
                  <div class="flex-box__cell flex-1">
                    <SimpleInput
                      :error="state.testError001"
                      title="title"
                      placeholder=""
                    >
                      <template v-slot:bottom>
                        <FormInvalidMessage
                          >등록 불가한 계정입니다.
                        </FormInvalidMessage>
                        <FormHelpText>-없이 숫자만 입력해 주세요 </FormHelpText>
                      </template>
                    </SimpleInput>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
            <BasicButton size="regular">발송하기</BasicButton>
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
.mb_20 {
  margin-bottom: 20px;
}
.mt10 {
  margin-top: 10px;
}
</style>
