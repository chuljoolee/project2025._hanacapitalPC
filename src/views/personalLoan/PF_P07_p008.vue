<script>
// PF_P07_p008
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    RoundStatus,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
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
            text: '개인금융',
            to: '/',
          },
          {
            text: '스탁론',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">스탁론</PageTitle>
        <template v-slot:right>
          <StepProgress :total="5" :current="2" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">상품설명서를 확인해 주세요</PageMainText>
    </PageHead>

    <div :class="$style['agree-list']">
      <ul :class="$style['agree-list__depth']">
        <li :class="$style['agree-list__depth-item']">
          <ul :class="$style['agree-list__list']">
            <li :class="$style['agree-list__item']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="PF_P07_p008_agree001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>가계대출(스탁론) 설명서</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
                    <span :class="$style['agree-list__link-text']">
                      상세보기
                    </span>
                  </button>
                </div>
              </div>
            </li>
            <li :class="$style['agree-list__item']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="PF_P07_p008_agree001_002"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>
                    본인은 하나캐피탈 주식회사와 대출 거래를 함에 있어 금융회사
                    직원과 상담하여 위에서 설명한 내용을 포함하여 대출 거래의
                    주요내용 및 고객부담비용에 대하여 충분히 설명을 듣고
                    이해하였음을 확인합니다.
                  </CheckBoxLabelText>
                </CheckBox>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- S: 240524 수정 -->
    <ul
      :class="[
        $style['basic-list'],
        $style['basic-list--regular'],
        $style['basic-list--regular-margin'],
      ]"
      class="marginTop"
    >
      <li :class="[$style['basic-list__item'], 'font-weight-regular']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              만 65세 이상, 은퇴자, 주부인 경우 「금융취약 소비자 우선설명」
              내용을 확인해주세요.
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <TextButton
                textSize="regular"
                theme="secondary"
                :underline="true"
                :block="true"
                :classNames="{ wrap: $style['right-button'] }"
              >
                확인하기
              </TextButton>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- // E: 240524 수정 -->

    <!-- Case : '다음' 선택시 노출 -->
    <section class="row-margin-block-small row-margin-bottom-none">
      <h3 class="text-title-1 row-margin-contents">약관동의</h3>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree002"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>여신거래 기본 약관</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree003"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>전자금융거래 약관</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree004"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <!-- S: 240524 수정 -->
                    <CheckBoxLabelText>스탁론 약관</CheckBoxLabelText>
                    <!-- E: 240524 수정 -->
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree005"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >투자자(고객)보호 유의안내 및 동의서</CheckBoxLabelText
                    >
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree006"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>대출약정서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree007"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>근질권 설정 계약서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree008"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>계좌운용규칙</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <!-- S: 240524 수정 -->
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree009"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>고객정보 취급방침</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree010"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>출금이체 신청서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="PF_P07_p008_agree011"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >법인 또는 단체의 실제소유자 확인서</CheckBoxLabelText
                    >
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <!-- // E: 240524 수정 -->
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <!-- // Case : '다음' 선택시 노출 -->

    <ButtonList>
      <ButtonListItem>
        <BasicButton :disabled="true">다음</BasicButton>
        <!-- Case: 대출약정 약관 동의 후 -->
        <!-- <BasicButton>다음</BasicButton> :disabled="true" 빼기 -->
        <!-- // Case: 대출약정 약관 동의 후 -->
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PF_P07_p008.scss';
</style>

<style lang="scss" scoped>
.marginTop {
  margin-top: 60px;
}
</style>
