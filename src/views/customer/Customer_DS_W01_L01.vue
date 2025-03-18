<script>
//Customer_DS_W01_L01
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
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
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>채무조정요청권 신청</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['title-view']">
        카메라로 QR코드를 확인하시고 모바일로 진행해주세요.<br />
        채무조정 요청 대상여부를 확인하기 위해 <br />
        본인인증 절차가 필요합니다.
      </div>

      <div :class="$style['image-view']">
        <img src="@/assets/images/contents/qr-dept-relief.png" alt="QR Code" />
      </div>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_DS_W01_L01.scss';
</style>
