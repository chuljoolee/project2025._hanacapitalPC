<script>
// Customer_P22_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });
  },
};
</script>

<template>
  <PageContents size="wide">
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '금융소비자보호',
          },
          {
            text: '민원창구·유익정보',
            to: '/',
          },
          {
            text: '소비자권익보호 유익한 정보',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>소비자권익보호 유익한 정보</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
        >소비자권익보호를 위해 추가로 유익한 정보를 얻으시려면 아래 사이트에서
        확인해 보시면 됩니다</PageSubText
      >
    </PageHead>

    <div>
      <section class="row-margin-block-small sc-container">
        <div>
          <section class="row-margin-containemedium">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="[$style['basic-list__content'], 'basic-title']">
                  금융감독원
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <TextButton
                  theme="secondary"
                  :underline="true"
                  textSize="regular"
                  tagName="RouterLink"
                  to=""
                  class="btn-text"
                >
                  www.fss.or.kr/fss
                </TextButton>
              </li>
            </ul>
          </section>
          <section class="row-margin-container-medium">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="[$style['basic-list__content'], 'basic-title']">
                  여신금융협회 소비자지원센터
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <TextButton
                  theme="secondary"
                  :underline="true"
                  textSize="regular"
                  tagName="RouterLink"
                  to=""
                  class="btn-text"
                >
                  customer.crefia.or.kr
                </TextButton>
              </li>
            </ul>
          </section>
          <section class="row-margin-container-medium">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="[$style['basic-list__content'], 'basic-title']">
                  공정거래위원회 소비자정책
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <TextButton
                  theme="secondary"
                  :underline="true"
                  textSize="regular"
                  tagName="RouterLink"
                  to=""
                  class="btn-text"
                >
                  ftc.go.kr/www/contents.do?key=115
                </TextButton>
              </li>
            </ul>
          </section>
          <section class="row-margin-container-medium">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="[$style['basic-list__content'], 'basic-title']">
                  은행연합회 연락중지청구시스템(두낫콜)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <TextButton
                  theme="secondary"
                  :underline="true"
                  textSize="regular"
                  tagName="RouterLink"
                  to=""
                  class="btn-text"
                >
                  portal.kfb.or.kr/consumer/donotcall.php
                </TextButton>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P21_p002.scss';
</style>

<style lang="scss" scoped>
.sc-container {
  width: 450px;
  margin: 0 auto;

  .color-green {
    font-style: normal;
    color: #00a69e;
    font-weight: 500;
  }

  .btn-text {
    margin-left: 12px;
  }

  .basic-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
