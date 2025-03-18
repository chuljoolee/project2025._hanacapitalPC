<script>
// Customer_P00_p001
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

    <section>
      <h3 class="text-big-3 row-margin-container-medium">상담 · 문의</h3>
      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          $style['icon-list--col-3'],
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconArs /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']"
                  >고객센터 ARS 안내</span
                >
                <span :class="$style['icon-list__text']">
                  빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCustomer /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">고객 상담</span>
                <span :class="$style['icon-list__text']">
                  문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconContractGray
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">전자민원접수</span>
                <span :class="$style['icon-list__text']">
                  불편했던 점을 말씀해주세요.<br />신속히 개선하도록 하겠습니다.
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <section>
      <h3 class="text-big-3 row-margin-container-medium">자주 찾는 메뉴</h3>
      <div
        :class="[
          $style['icon-list'],
          $style['icon-list--wrap'],
          $style['icon-list--col-3'],
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconFaqBlue /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">FAQ</span>
                <span :class="$style['icon-list__text']">
                  찾고 싶은 단어나 문장을<br />검색해보세요.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconLocation /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">지점 안내</span>
                <span :class="$style['icon-list__text']">
                  지점 방문이 필요하실 경우<br />하나캐피탈 지점을 확인하세요.
                </span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconCertificationGray
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">인증센터</span>
                <span :class="$style['icon-list__text']">
                  PC와 스마트폰에서<br />인증서를 사용해보세요.
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <BasicHr theme="quaternary" className="row-margin-block" />

    <!-- s: 250124 삭제 -->
    <!-- <section :class="$style['customer-layout__section']">
      <div class="flex-box row-margin-container-medium">
        <div class="flex-box__cell flex-1">
          <h3 class="text-big-3">금융소비자보호</h3>
        </div>
      </div>
      <div :class="$style['icon-list']">
        <ul :class="[$style['icon-list__list'], 'flex-wrap']">
          <li :class="[$style['icon-list__item'], 'flex-item']">
            <div :class="[$style['icon-list__block'], 'flex-itemChild']">
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

          <li :class="[$style['icon-list__item'], 'flex-item']">
            <div :class="[$style['icon-list__block'], 'flex-itemChild']">
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

          <li :class="[$style['icon-list__item'], 'flex-item']">
            <div :class="[$style['icon-list__block'], 'flex-itemChild']">
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
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section> -->

    <!-- <BasicHr theme="quaternary" className="row-margin-block" /> -->
    <!-- e:// 250124 삭제 -->

    <div :class="[$style['customer-layout']]">
      <section :class="$style['customer-layout__section']">
        <div class="flex-box row-margin-container-medium">
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">홈페이지 이용 안내</h3>
          </div>
        </div>
        <div
          :class="
            ([
              $style['icon-list'],
              $style['icon-list--wrap'],
              $style['homepage-guide-list'],
            ],
            'flex-wrap')
          "
        >
          <ul :class="[$style['icon-list__list'], 'flex-item2 flex-ul']">
            <li :class="[$style['icon-list__item']]">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconLock /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">보안센터</div>
                  <ul class="reset-list row-margin-item-medium">
                    <li class="row-margin-item-medium">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        프로그램 설치 안내
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li>
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        프로그램 삭제 안내
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li :class="[$style['icon-list__item']]">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']">
                  <IconPrivacyGuide />
                </div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">
                    개인정보이용 현황
                  </div>
                  <ul class="reset-list row-margin-item-medium">
                    <li class="row-margin-item-medium">
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        개인정보열람 청구
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                    <li>
                      <TextButton
                        iconSize="medium"
                        textSize="medium"
                        :block="true"
                        :classNames="{ wrap: 'color-gray-tertiary' }"
                        tagName="RouterLink"
                        to=""
                      >
                        정보이용 · 제공 조회
                        <template v-slot:rightIcon>
                          <IconLink />
                        </template>
                      </TextButton>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-box row-margin-container-medium flex-margin">
          <div class="flex-box__cell">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
              >정책 및 약관</BasicButton
            >
          </div>
          <div class="flex-box__cell">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
              >이용 시 유의사항</BasicButton
            >
          </div>
          <div class="flex-box__cell">
            <BasicButton
              size="small"
              :line="true"
              theme="quaternary"
              tagName="RouterLink"
              to=""
              >서식 다운로드</BasicButton
            >
          </div>
        </div>
      </section>

      <section :class="[$style['customer-layout__section'], 'flex-item2']">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-big-3">공지사항</h3>
          </div>
          <div class="flex-box__cell">
            <TextButton
              iconSize="medium"
              textSize="medium"
              :block="true"
              :classNames="{ wrap: 'color-gray-tertiary flex-button' }"
            >
              더보기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>

        <div :class="$style['latest-list']">
          <ul :class="$style['latest-list__list']">
            <li v-for="i in 3" :key="i" :class="$style['latest-list__item']">
              <RouterLink to="" :class="$style['latest-list__block']">
                <div
                  :class="[
                    $style['latest-list__cell'],
                    $style['latest-list__cell--title'],
                  ]"
                >
                  <div :class="$style['latest-list__title']">
                    공지사항 타이틀 노출 공지사항 타이틀 노출 공지사항 타이틀
                    노출 공지사항 타이틀 노출
                  </div>
                </div>
                <div :class="[$style['latest-list__cell']]">
                  <div :class="$style['latest-list__date']">2022.08.30</div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P00_p001.scss';
</style>

<style lang="scss" scoped>
.flex-wrap {
  display: flex;
  margin: -30px 0 0 -30px;

  .flex-item {
    flex: 1;
    margin-top: 0;
    padding: 30px 0 0 30px;

    .flex-itemChild {
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

  .flex-item2 {
    margin-top: 24px;
    padding-top: 16px;

    &:nth-of-type(1) {
      flex: 2;
    }
    &:nth-of-type(2) {
      flex: 1;
    }
    &.flex-ul {
      display: flex;

      li {
        flex: 1;
        margin-top: 0;
      }
    }
  }
}

.flex-width {
  flex: 1;
}

.flex-box__cell {
  flex: 1;
}

.flex-margin {
  margin-top: 50px;
}

.flex-button {
  justify-content: flex-end;
}
</style>
