<script>
// PF_P07_l004_002 스탁론 약관
import { ref } from 'vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
          <PopupTitle>스탁론 약관</PopupTitle>
        </ModalPopupHead>
      </template>

      <div style="text-align: center">
        워드 파일 상세<br />
        내용참고 <br />
        (파일명: 스탁론 약관)<br /><br />
        추후 추가 예정
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
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_l004.scss';
</style>
<style lang="scss" scoped>
.marginTop {
  margin-top: 0;
}

.newContentList {
  .newContentListItem {
    .newListSymbol {
      &:before {
        width: 3px;
        height: 3px;
        background: #15181f;
      }
    }
  }
  .newContentListItem + .newContentListItem {
    margin-top: 12px;
  }

  .paddingLeft {
    padding-left: 12px;
  }
  .depth3_marginTop {
    margin-top: 8px;
  }
}
</style>
