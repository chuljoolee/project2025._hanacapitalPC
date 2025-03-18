<script>
// My_P03_l004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    StepProgress,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    PageSubText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'onlineBranch');
      store.ui.header.setDepthActive(() => 'onlineBranch006');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '진행상태 조회',
          },
          {
            text: '온라인 약정',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">온라인 약정</PageTitle>
        <template v-slot:right>
          <StepProgress :total="7" :current="4" />
        </template>
      </PageHeadRow>
      <PageMainText align="left"
        >금융상품 판매 대리·중개업자의<br />
        고지의무수행 확인서를 확인해 주세요</PageMainText
      >
      <PageSubText align="left">
        본 확인서는 「금융소비자 보호에 관한 법률」 제26조 등에 의거하여<br />
        금융상품 판매 대리ㆍ중개업자가 고객님께 고지해야 하는 사항을 정확히
        수행했는지 확인하기 위해 활용됩니다.<br /><br />
        아래 사항에 대하여 확인하신 후, 고지 여부를 체크하여 서명해 주시기
        바랍니다.
      </PageSubText>
    </PageHead>

    <section>
      <BasicBox className="row-margin-contents">
        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1-1.</div>
            <div :class="$style['basic-list__content']">
              (온라인 업자가 아닌 대출모집인의 경우) 금융상품 판매
              대리·중개업자가 고객님에게 등록증을 제시하고, 하나캐피탈주식회사에
              전속된 대리·중개업자임을 고지하였습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1-2.</div>
            <div :class="$style['basic-list__content']">
              (리스·할부모집인, 온라인 업자 대출모집인등 기타의 경우) 금융상품
              판매 대리·중개업자가 고객님에게 등록증을 제시하고,
              하나캐피탈주식회사에 비전 속 대리·중개업자임을 고지하였습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2-1.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자는 하나캐피탈주식회사로부터 금융상품
              모집 및 계약서 징구등의 업무를 위탁받아 수행하며, 금융상품 계약
              체결권을 부여받지 아니한 경우, 금융상품 계약을 체결할 수 없습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2-2.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자는 하나캐피탈주식회사로부터 제공받는
              소정의 수수료이외에 금품, 그 밖의 재산상 이익을 요구하거나 수취할
              수 없습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              고객님께서 제공한 신용정보 또는 개인 정보는 하나캐피탈주식회사가
              보유·관리합니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">4-1.</div>
            <div :class="$style['basic-list__content']">
              하나캐피탈 주식회사가 고의 또는 과실로 금융소비자보호에 관한
              법률을 위반하여 고객님에게 손해를 발생시킨 경우에는 그 손해를
              배상할 책임이 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-1',
              'color-gray-secondary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">4-2.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자가 대리·중개 업무를 할 때 고객님에게
              손해를 발생시킨 경우, 하나캐피탈주식회사 및 해당 금융상품 판매
              대리·중개업자에게 손해배상 책임이 인정될 수 있습니다. 다만,
              하나캐피탈주식회사가 해당 금융상품판매 대리·중개업자의 선임과 그
              업무 감독에 대하여 적절한 주의를 하였고 손해를 방지하기 위하여
              노력한 경우에는 하나캐피탈주식회사가 면책될 수 있습니다.
            </div>
          </li>
        </ol>
      </BasicBox>

      <CheckBox id="PF_P07_p007_check" theme="tertiary">
        <CheckBoxObject />
        <CheckBoxLabelText
          :classNames="{
            text: ['text-body-1', 'font-weight-medium'],
          }"
        >
          본인은 당사에서 제공한 적합성·적정성 관련 정보와 관련하여 위 사항에
          동의합니다.
        </CheckBoxLabelText>
      </CheckBox>

      <BasicBox theme="tertiary" className="row-margin-container-medium">
        <p class="text-body-2 color-gray font-weight-medium">
          위 고지 여부 확인 내용은 사실과 다름 없으며 본인이 직접 작성하였음을
          확인합니다.
        </p>
      </BasicBox>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">취소</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/additionalService/My_P05_p011.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
