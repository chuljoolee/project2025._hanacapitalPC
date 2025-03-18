<script>
// PF_M07_p007_02
import { ref, reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    ButtonList,
    KeyValueTitle,
    ButtonListItem,
    KeyValueText,
    BasicButton,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const customClassNames = {
      title: '',
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
      customClassNames,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <PageTextGroup>
        <PageMainText> 적정성 판단 보고서 </PageMainText>
        <PageSubText> </PageSubText>
      </PageTextGroup>
    </div>

    <div class="text-body-4 font-weight-light">
      홍길동님 귀하<br />
      하나캐피탈주식회사로 대출 신청을 해주신 고객님께 깊이 감사드립니다.<br /><br />
      고객님의 소중한 정보를 바탕으로 대출취급 적정성 판단 절차를 진행하였으나 ,
      적정하지 않은 것으로 판단된 것을 유감스럽게 생각합니다.<br /><br />
      동 판단에 대해「금융소비자 보호에 관한 법률」 제 18조에 의거하여 아래와
      같이 안내드립니다.
    </div>

    <section class="row-margin-contents">
      <h4 class="text-body-2 row-margin-item-medium">적정성 판단 결과</h4>
      <KeyValue align="left" margin="regular-small" size="regular-small">
        <KeyValueItem
          :classNames="{
            item: 'text-body-5',
          }"
        >
          <KeyValueTitle>판단 시점</KeyValueTitle>
          <KeyValueText>2024년 12월 11일</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-5',
          }"
        >
          <KeyValueTitle>판단 대상</KeyValueTitle>
          <KeyValueText>스탁론</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-5',
          }"
        >
          <KeyValueTitle>부적정 사유</KeyValueTitle>
          <KeyValueText
            >고객의 채무상환능력 부족<br />
            고객의 채무상환능력 부족
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </section>

    <section>
      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            당사는 신용조회회사 또는 신용정보집중기관으로부터 제공받은 신용정보
            외에 당사가 자체적으로 운영하는 대출심사기준 등에 따라 종합적으로
            적정성을 판단하였습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            또한, 동 평가 결과는 대출 신청 시 귀하께서 제출하신 정보에 따른
            결과이며, 타 금융회사에서 평가한 결과와 다를 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            본 보고서는 「금융소비자 보호에 관한 법률」 제 18조 제2항 및 동법
            시행령 제 12조 제3항 내지 제 4항에 따라 작성되었으며, 고객님께서
            원하지 않는 경우에는 제공하지 않을 수 있습니다.
          </div>
        </li>
      </ul>
      <div class="row-margin-small align-right">
        <span class="text-body-3 color-gray font-weight-light">2024.12.11</span>
        <h3 class="text-body-3 row-margin-small font-weight-medium">
          하나캐피탈 주식회사
        </h3>
      </div>
    </section>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>하나캐피탈 바로가기</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_M07_p007_02.scss';
</style>
