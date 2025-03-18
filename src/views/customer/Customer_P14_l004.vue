<script>
// Customer_P14_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupText,
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
        하나캐피탈 $2022$년 $12$월 $12$일 <br />수신거부 처리되었습니다.
      </PopupText>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular" @click="layerSlotProps.close()"
              >확인
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>
<style lang="scss" scoped></style>
