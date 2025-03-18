<script>
// CstmPtct_P00_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconArs from '@/assets/images/icon/ars.svg?component';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconContractGray from '@/assets/images/icon/contract-gray.svg?component';
import IconFaqBlue from '@/assets/images/icon/faq-blue.svg?component';
import IconLocation from '@/assets/images/icon/location.svg?component';
import IconCertificationGray from '@/assets/images/icon/certification-gray.svg?component';
import IconLock from '@/assets/images/icon/lock.svg?component';
import IconPrivacyGuide from '@/assets/images/icon/privacy-guide.svg?component';
import IconWarning from '@/assets/images/icon/warning.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconDownload from '@/assets/images/common/download.svg?component';
import IconPersonMedal from '@/assets/images/icon/person-medal.svg';
import IconInformation2 from '@/assets/images/icon/information-2.svg';
import IconPersonBag from '@/assets/images/icon/person-bag.svg';
import IconVoiceFishing from '@/assets/images/icon/voiceFishing.svg';
import IconWarningArs from '@/assets/images/icon/warningArs.svg';

export default {
  components: {
    RouterLink,
    PageContents,
    LocationBar,
    BasicHr,
    BasicButton,
    EventBanner,
    TextButton,
    RoundStatus,
    IconArs,
    IconCustomer,
    IconContractGray,
    IconFaqBlue,
    IconLocation,
    IconCertificationGray,
    IconLock,
    IconPrivacyGuide,
    IconWarning,
    IconLink,
    IconDownload,
    IconPersonMedal,
    IconInformation2,
    IconPersonBag,
    IconVoiceFishing,
    IconWarningArs,
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
        ]"
      />
    </template>

    <section :class="$style['customer-layout__section']">
      <div class="flex-box row-margin-container-medium">
        <div class="flex-box__cell flex-1">
          <h3 class="text-big-3">금융소비자보호</h3>
        </div>
      </div>
      <div :class="$style['icon-list']">
        <ul :class="[$style['icon-list__list'], 'grid-wrap']">
          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconWarning /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">금융소비자보호</div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호헌장
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호조직
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호공시
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호체계
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호 내부통제규정
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호 우수사례
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconPersonMedal /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">금융소비자권리</div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금리인하요구권
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        청약철회권
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        자료열람요구권
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        위법계약해지권
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconInformation2 /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">민원창구·유익정보</div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        전자민원접수
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        방문·전화권유판매원 조회
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        소비자권익보호 유익한 정보
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융분쟁판례
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        분쟁조정사례
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        분쟁중 소제기 현황
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융소비자보호실태평가
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconVoiceFishing /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  보이스피싱 예방 안내
                </div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        보이스피싱 지킴이
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconPersonBag /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">상품공시실</div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        금융상품통합비교공시
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        여신금융협회상품공시
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        판매중단상품안내
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li :class="[$style['icon-list__item'], 'grid-item']">
            <div :class="[$style['icon-list__block'], 'grid-itemChild']">
              <div :class="$style['icon-list__icon']"><IconWarningArs /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  비대면 금융사고 책임분담기준
                </div>
                <div
                  :class="[$style['customer-links'], 'row-margin-item-medium']"
                >
                  <ul :class="[$style['customer-links__list'], 'flex-column']">
                    <li :class="$style['customer-links__item']">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        대고객 안내문
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P00_p001.scss';
</style>

<style lang="scss" scoped>
.grid-wrap {
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: -30px 0 0 -30px;

  .grid-item {
    margin-top: 0;
    padding: 60px 0 0 30px;

    .grid-itemChild {
      align-items: flex-start;
    }

    .flex-column {
      flex-direction: column;
    }

    & + & {
      padding-left: 30px;
    }
  }

  &:nth-of-type(2) {
    gap: 80px;
  }
}
</style>
