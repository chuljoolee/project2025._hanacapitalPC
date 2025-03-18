<script>
// Common_P00_l004 기존
import { ref, computed, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Simplebar from 'simplebar-vue';

import { useUiCommonStore } from '@/stores/ui/common';

import UiLayer from '@/components/ui/layer/UiLayer.vue';

import ImgLogo from '@/assets/images/common/logo-main.svg?component';
import IconClose from '@/assets/images/common/close.svg?component';

export default {
  components: {
    RouterLink,
    Simplebar,
    UiLayer,
    ImgLogo,
    IconClose,
  },
  setup() {
    const route = useRoute();

    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const layer = ref(null);

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    watch(
      () => route.path,
      () => {
        layer.value.close();
      }
    );

    return {
      layer,
      scrollbarsWidth,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <nav :class="$style['site-map']">
      <div
        :class="$style['site-map__head']"
        :style="`padding-right: ${scrollbarsWidth}px`"
      >
        <div :class="$style['site-map__head-inner']">
          <h2 :class="$style['site-map__logo']">
            <RouterLink
              to="/main/home"
              :class="$style['site-map__logo-link']"
              @click="layerSlotProps.close()"
            >
              <ImgLogo />
              <span class="for-a11y">하나캐피탈 사이트맵</span>
            </RouterLink>
          </h2>

          <button
            type="button"
            :class="$style['site-map__close']"
            @click="layerSlotProps.close()"
          >
            <IconClose />
            <span class="for-a11y">사이트맵 닫기</span>
          </button>
        </div>
      </div>
      <div :class="$style['site-map__body']">
        <Simplebar
          data-simplebar-auto-hide="false"
          :class="$style['site-map__body-scroll']"
        >
          <div
            :class="$style['site-map__body-inner']"
            :style="`padding-right: ${scrollbarsWidth}px`"
          >
            <div :class="$style['nav']">
              <!-- Quick Menu -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <span :class="[$style['nav__title-text'], 'color-green']"
                    >Quick Menu</span
                  >
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >진행상태조회</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >서류등록</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >온라인약정</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >우수고객추가대출</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <button
                            type="button"
                            :class="$style['nav__depth-link']"
                          >
                            <span :class="$style['nav__depth-text']"
                              >대출계산기</span
                            >
                          </button>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >전화상담신청</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // Quick Menu -->

              <!-- 오토금융 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">오토금융</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']">오토론</span>
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >오토할부</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >다이렉트 오토리스</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >견적조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >리스신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >중고차 오토론</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >다이렉트 장기렌터카</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >견적조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >렌터카신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 오토금융 -->

              <!-- 개인금융 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">개인금융</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >e하나신용대출</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >한도조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >행복아파트론</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >한도조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >아파트론</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >원큐자동차담보대출</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >한도조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >우수고객추가대출</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >한도조회</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']">스탁론</span>
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >연장신청</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상환신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >내구소비재할부</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >e임대주택론</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >사업자주택담보대출</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상담신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 개인금융 -->

              <!-- 기업금융 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">기업금융</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >의료기리스</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >의료기할부</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >산업재리스</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >상품안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >견적조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >리스신청</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 기업금융 -->

              <!-- 온라인지점 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">온라인지점</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >계약정보</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >계약현황</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >자동이체계좌변경</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >청구방법/청구지변경</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >SMS안내 수신 변경</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >중도상환신청</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >근저당설정해지 조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >범칙금/자동차세 조회</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >내정보관리</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >비밀번호 변경</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >주소지/연락처 변경</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >회원탈퇴</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >증명서조회/발급</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >온라인청구서</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 온라인지점 -->

              <!-- 고객센터 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">고객센터</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']">FAQ</span>
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >고객상담</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >공지사항</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >이벤트</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >서식다운로드</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >지점안내</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >홈페이지 이용안내</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >고객센터 ARS 안내</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >보안센터</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >프로그램 설치 안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >프로그램 삭제 안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >프로그램 장애 안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >정책 및 약관</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >내정보관리</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >개인정보열람 청구</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >정보이용·제공 조회</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >금융소비자보호</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금융소비자보호현장</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금융소비자보호조직</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금융소비자보호체계</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금융소비자보호웹진</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금리인하요구권 안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >대출계약철회권 안내</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >중도상환수수료 면제</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >전자민원접수</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 고객센터 -->

              <!-- 회사소개 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']">회사소개</span>
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >회사소개</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >CEO 소개</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >연혁</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >사업분야</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >IR정보</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >지속가능경영</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >하나금융그룹 윤리강령</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >건강한소리</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']">PR</span>
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >보도자료</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >사회공헌</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >투자정보</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >재무현황</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >영업현황</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >경영공시</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >신용등급</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >채용정보</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >인재상</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >전형방법</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >인사/복리후생</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >채용공고</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 회사소개 -->

              <!-- 하나머니 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <span :class="$style['nav__title-text']">하나머니</span>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >하나머니 소개</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >가입하기</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 하나머니 -->

              <!-- 하나원큐오토 CRM 20240315 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <span :class="$style['nav__title-text']">하나원큐오토</span>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >리스/렌트</span
                          >
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >CRM</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 하나원큐오토 CRM 20240315 -->

              <!-- 회원관리 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <span :class="$style['nav__title-text']">회원관리</span>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >회원가입</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >로그인</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >아이디 찾기</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >비밀번호 찾기</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 회원관리 -->

              <!-- 하나캐피탈 멤버십 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <span :class="$style['nav__title-text']"
                    >하나캐피탈 멤버십</span
                  >
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="$style['nav__depth-list']">
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >멤버십 안내</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >회원가입</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <RouterLink
                            to=""
                            :class="$style['nav__depth-link']"
                            @click="layerSlotProps.close()"
                          >
                            <span :class="$style['nav__depth-text']"
                              >회원탈회</span
                            >
                          </RouterLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- // 하나캐피탈 멤버십 -->
            </div>
          </div>
        </Simplebar>
      </div>
    </nav>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LayerSiteMap.scss';
</style>
