<script>
// Crm_Pop_p001
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
          <PopupTitle>운영자 추가</PopupTitle>
        </ModalPopupHead>
      </template>

      <div>
        <table class="table-type-01">
          <colgroup>
            <col width="30%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title required">회사명</td>
              <td><input type="text" disabled placeholder="하나캐피탈" /></td>
            </tr>

            <tr>
              <td class="title required">사업자번호</td>
              <td>
                <input type="text" disabled placeholder="220-81-09337" />
              </td>
            </tr>

            <tr>
              <td class="title required">운영자 ID</td>
              <td>
                <div class="flex-box align-items-start">
                  <div class="flex-box__cell flex-1">
                    <SimpleInput
                      :error="state.testError001"
                      title="title"
                      placeholder="Abc123"
                    >
                      <template v-slot:bottom>
                        <FormInvalidMessage
                          >등록 불가한 계정입니다.
                        </FormInvalidMessage>
                        <FormHelpText>신규등록 가능합니다. </FormHelpText>
                      </template>
                    </SimpleInput>
                  </div>
                  <div class="flex-box__cell flex-box simple-input-height">
                    <div class="flex-box__cell">
                      <BasicButton size="small" theme="quaternary">
                        조회
                      </BasicButton>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td class="title required">운영자 이름</td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td class="title required">운영자 연락처</td>
              <td>
                <input type="text" />
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
.mb_20 {
  margin-bottom: 20px;
}
</style>
