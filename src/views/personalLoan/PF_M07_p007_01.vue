<script>
// PF_M07_p007_01
import { ref, reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      birthDateError: false,
      nameError: false,
    });

    const layer = ref(null);

    onMounted(() => {
      store.ui.header.setTitle(() => '적합성·적정성 원칙 확인서(가계용)');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'menu',
          onClick: () => {
            alert('전체메뉴 클릭');
          },
        },
      ]);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <PageTextGroup>
        <PageMainText>
          적정성 판단 보고서 열람을 위해<br />
          생년월일을 입력해 주세요
        </PageMainText>
        <PageSubText></PageSubText>
      </PageTextGroup>
    </div>

    <FormList>
      <FormListItem titleText="생년월일" titleOptionalText="(6자리)" target="">
        <FormInvalid :error="state.birthDateError">
          <InputBlock :error="state.birthDateError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="생년월일 (6자리)"
                id=""
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_M07_p007_01.scss';
</style>
