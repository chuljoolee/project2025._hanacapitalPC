<script>
// Customer_P14_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
//import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
//import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
//import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    //PopupButton,
    PopupText,
    //ModalPopup,
    //ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    AlertPopup,
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
    <AlertPopup>
      <template v-slot:head>
        <PopupTitle></PopupTitle>
      </template>

      <PopupText>
        아래 채널 마케팅 동의를<br />
        철회하시겠습니까?
      </PopupText>
      <PopupText style="width: 100%">
        <div class="bg_box">철회 신청 : 전화</div>
      </PopupText>

      <PopupText align="center"> ※ 마케팅 동의 채널 (SMS, 우편) </PopupText>

      <template v-slot:foot>
        <ButtonList
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
            >
              삭제
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()">
              신청
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>
<style lang="scss" scoped>
.bg_box {
  padding: 20px 0;
  background-color: #f9f9f9;
  font-weight: 700;
  margin: 0 0 12px 0;
  border-radius: 10px; //240529 수정
}
</style>
