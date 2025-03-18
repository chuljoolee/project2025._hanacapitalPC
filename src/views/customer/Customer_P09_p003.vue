<script>
// Customer_P09_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import TextButton from '@/components/ui/button/TextButton.vue'; //240725 추가

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicBox,
    PageSubText,
    TextButton, //240725 추가
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
            text: '금융소비자보호체계',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>금융소비자보호체계</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        하나캐피탈은 상품개발 및 판매, 사후관리에 대한 내부준칙을 마련하여<br />
        소비자보호 체계를 구축하여 소비자의 관점에서 제도를 운영하고 있습니다.
      </PageSubText>
    </PageHead>

    <div :class="$style['section-group']">
      <div :class="$style['section-group__list']">
        <section :class="$style['section-group__item']">
          <BasicBox
            theme="tertiary"
            :class="{ [$style['section-group__box']]: true, positionBox: true }"
          >
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              금융소비자보호 규정
            </h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  소비자보호 체계 구축
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상품 개발 과정의 소비자보호 (개발단계/판매단계/사후처리단계)
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상품 판매 과정의 소비자보호
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상품 판매 이후의 소비자보호
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  정보제공 강화를 통한 소비자 보호
                </div>
              </li>
            </ul>

            <TextButton
              theme="secondary"
              :underline="true"
              textSize="regular"
              tagName="RouterLink"
              to=""
              :classNames="{
                wrap: [$style['product-list__link-button'], 'textButton'],
              }"
            >
              제정·개정 이력 자세히보기
            </TextButton>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              민원처리프로세스
            </h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  민원접수방법 (홈페이지/전화(1800-1110)/우편 및 방문/ 팩스)
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  <div>
                    민원처리 과정 (민원접수→민원담당자 지정→민원처리→민원회신)
                  </div>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      'row-margin-item',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-gray-tertiary',
                        'text-body-4',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        정상적으로 접수된 민원은 14일 이내(영업일 기준) 답변 및
                        처리를 원칙으로 합니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              상품개발프로세스
            </h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <!-- S: 240725 수정 -->
                <div :class="$style['basic-list__content']">
                  신상품 개발 및 마케팅 정책 수립 시 주관부서와 금융소비자보호
                  총괄부서간<br />
                  사전 협의를 의무화 하고 소비자권익침해 가능성이 있는 경우
                  주관부서에<br />
                  신상품 출시 및 마케팅 중단을 요구 하는 등 소비자 의견을
                  반영하기 위해 노력합니다.
                </div>
                <!-- // E: 240725 수정 -->
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상품개발체크리스트를 통한 소비자 불이익 사항을 점검합니다.
                </div>
              </li>
            </ul>
          </BasicBox>
        </section>

        <section :class="$style['section-group__item']">
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              상품판매준칙
            </h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <!-- 241014 -->
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  재무상태를 파악하여 소비자에게 적합한 금융상품을 안내할 수
                  있도록 한다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  소비자에게 부적정한 상품에 대한 정보를 최대한 제공하고,
                  부적정한 경우 이 사실을 고지한다.
                </div>
              </li>
              <!-- //241014 -->
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  소비자에게 충분한 정보 제공으로 불완전판매를 방지한다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상품관련 중요 사항을 소비자가 이해하기 쉽게 설명한다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  회사의 우월적 지위를 남용하거나 소비자 권익을 침해하는 행위를
                  하지 않는다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  소비자가 적합한 금융상품을 구매하도록 최선의 노력을 다한다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  개인정보의 수집 및 활용이 필요한 경우 목적에 부합하는 최소한의
                  정보만 수집활용한다.
                </div>
              </li>
              <!-- 241014 -->
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융상품 광고 시 관련 법령 준수하여 적합한 상품을 광고한다.
                </div>
              </li>
              <!-- //241014 -->
            </ul>
          </BasicBox>
        </section>

        <section :class="[$style['section-group__item']]">
          <!-- 기존 적용되어있던 $style['section-group__item--full'] 삭제 -->
          <BasicBox theme="tertiary" :class="$style['section-group__box']">
            <h3 class="text-title-2 font-weight-medium row-margin-item">
              민원사무처리 지침
            </h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  민원을 신속하고 공정하게 처리하여 민원인의 불만 해소에 최선의
                  노력을 다합니다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  다른 법령에 특별한 규정이 없는 한 민원접수를 보류하거나
                  거부하지 않습니다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  고객 민원 발생시 민원인의 개인 정보 보호를 위해 최선의 노력을
                  다합니다.
                </div>
              </li>
              <li :class="[$style['basic-list__item'], 'font-weight-regular']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  발생된 민원에 대해서는 즉각적으로 소비자 불만 내용을 파악하고
                  대응합니다.
                </div>
              </li>
            </ul>
          </BasicBox>
        </section>
      </div>
    </div>

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
@import '@/assets/scss/views/customer/Customer_P09_p003.scss';
</style>

<style lang="scss" scoped>
.positionBox {
  position: relative;

  .textButton {
    position: absolute;
    right: 23px;
    top: 23px;
  }
}
</style>
