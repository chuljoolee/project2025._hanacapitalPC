<script>
// Customer_P14_p005
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
            text: '부가서비스',
          },
          {
            text: '온라인약정',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>약관에 동의해 주세요</PageTitle>
    </PageHead>

    <!-- <div>// [공통 > 본인인증] 내용 노출</div> -->

    <section class="row-margin-block-small row-margin-bottom-none">
      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__depth']">
          <li :class="$style['agree-list__depth-item']">
            <div :class="$style['agree-list__depth-head']">
              <CheckBox
                id="My_P06_p011_agree_001"
                :classNames="{
                  wrap: $style['agree-list__depth-checkbox'],
                }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  서비스 이용약관 전체동의
                </CheckBoxLabelText>
              </CheckBox>
            </div>
            <div :class="$style['agree-list__depth-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="My_P06_p011_agree_001_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인정보 필수적 수집·이용 전체 동의
                      </CheckBoxLabelText>
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <BasicButton inline="true" class="btnView"
                        >보기</BasicButton
                      >
                    </div>
                  </div>
                </li>

                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="My_P06_p011_agree_001_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인정보 필수적 수집·이용
                      </CheckBoxLabelText>
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
                      id="My_P06_p011_agree_001_002"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        고유식별정보 필수적 수집·이용
                      </CheckBoxLabelText>
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
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p005.scss';
</style>

<style lang="scss" scoped>
.btnView {
  font-size: 14px;
  letter-spacing: -0.02em;
  height: 40px;
  min-height: 40px;
  padding: 12px;
  font-weight: 500;
}
._agree-list__head_4yro6_100 {
  align-items: center;
}
</style>
