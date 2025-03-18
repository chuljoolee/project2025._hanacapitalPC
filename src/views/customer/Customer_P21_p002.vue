<script>
// Customer_P21_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
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
            text: '금융소비자권리',
          },
          {
            text: '위법계약해지권',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>위법계약해지권</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">위법계약 해지권이란?</h3>

          <p class="font-weight-light text-body-1 color-gray-secondary">
            금융상품판매업자등(금융회사·신용카드·대출·리스할부모집인)이
            금융소비자 보호에 관한 법률의 적합성원칙(법 제17조 제3항),<br />
            적정성원칙(법 제18조 제2항), 설명의무(법 제19조 제1항, 제3항),
            불공정영업행위의 금지(법 제20조 제1항), 부당권유 금지(법 제21조)를
            위반하여<br />
            금융상품에 관한 계약을 체결한 경우, 금융소비자가 계약 해지를 요구할
            수 있는 권리
          </p>
        </div>

        <div>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              위법계약 해지 대상 금융상품
            </h3>

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
                <div :class="$style['basic-list__content']">
                  대출, 할부금융, 시설대여(리스), 오토론 등
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">*</div>
                <div :class="$style['basic-list__content']">
                  21.03.25일 이후 계약이 체결되었으며, 금융소비자와 금융회사 간
                  계속적 거래가 이루어지고, 금융소비자가 해지 시 재산상 불이익이
                  발생하는 금융상품
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">해지신청 가능기한</h3>

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
                <div :class="$style['basic-list__content']">
                  금융소비자가 계약 체결에 대한 위반사항을 안 날로부터 1년
                  이내에 신청 가능 (단, 해당 기간이 계약 체결일로부터 5년 이내의
                  범위에 있어야 함)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">신청 방법</h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
                'row-margin-item-group',
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
                <div :class="$style['basic-list__content']">
                  당사 양식은
                  <em class="color-green"
                    >전체메뉴>고객센터>서식다운로드>[금융소비자보호법 권리]
                    위법계약해지 신청서</em
                  >로 가셔서 다운로드 하시면 됩니다.<br />
                  신청서 제출(계약체결 지점·센터/콜센터)하시면 위법계약해지여부
                  검토 후 안내해 드립니다.
                </div>
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
.color-green {
  font-style: normal;
  color: #00a69e;
  font-weight: 500;
}

.basic-content {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
}
</style>
