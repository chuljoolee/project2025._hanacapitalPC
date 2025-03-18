<script>
// Crm_Pop_p007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    AlertPopup,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
        <PopupTitle>
          <span class="color-green">홍길동</span>
          상담원을<br />삭제하시겠습니까?
        </PopupTitle>
      </template>

      <PopupText>소속: 스타오토모빌 </PopupText>

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
              >아니오</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()"
              >예</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>
