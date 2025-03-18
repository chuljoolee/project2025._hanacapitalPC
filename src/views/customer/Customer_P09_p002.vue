<script>
// Customer_P09_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
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
            text: '금융소비자보호조직',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>금융소비자보호조직</PageTitle>
    </PageHead>

    <!-- S: 240725 추가 -->
    <picture class="org-img">
      <img src="@/assets/images/contents/img-organization.png" alt="" />
    </picture>
    <!-- // E: 240725 추가 -->

    <!-- S: 240725 수정 -->
    <div :class="$style['section-group']">
      <div :class="$style['section-group__list']">
        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              금융소비자보호 내부통제위원회
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              금융소비자보호 관련 경영방향 수립, 주요 제도 변경·개선 등<br />
              금융소비자보호에 관한 내부통제를 수행하기 위하여 금융소비자보호<br />
              내부통제위원회 설치·운영하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              금융소비자보호총괄책임자 (CCO)
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              대표이사 직속으로 설치한 금융소비자보호 총괄기관의<br />
              최고책임자로서 금융소비자보호 내부통제체제의 총괄 등<br />
              금융소비자보호 총괄기관의 업무를 수행하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              민원심의위원회
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              접수한 민원에 대하여 공정한 처리 및 합리적 보상을 위하여<br />
              자체적으로 정한 기준에 따라<br />
              민원심의위원회를 설치 운영하고 있습니다.
            </p>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              금융소비자보호총괄부서
            </h3>

            <p class="text-body-2 color-gray-tertiary">
              금융소비자보호에 관한<br />
              내부통제, 금융소비자보호, 민원 처리 및 예방 활동 등의<br />
              업무를 수행하고 있습니다.
            </p>
          </BasicBox>
        </section>
      </div>
    </div>
    <!-- // E: 240725 수정 -->

    <!-- 240725 삭제 -->
    <!-- <div :class="[$style['logs-wrap'], 'row-margin-block-small']">
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호조직
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호체계
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호웹진
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금융소비자보호공시
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  금리인하요구권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  대출계약철회권 안내
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div
            :class="[$style['logs__block'], $style['logs__block--tertiary']]"
          >
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="[$style['logs__title'], 'text-body-3']">
                  중도상환수수료 면제
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <RouterLink to="" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div> -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p002.scss';
</style>

<style lang="scss" scoped>
.org-img {
  margin-bottom: 40px;
}
</style>
