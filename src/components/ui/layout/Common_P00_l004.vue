<script>
// Common_P00_l004
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
              <!-- S: 240726 수정 -->
              <!-- 금융소비자보호 -->
              <section :class="$style['nav__section']">
                <h3 :class="$style['nav__title']">
                  <RouterLink
                    to=""
                    :class="$style['nav__title-link']"
                    @click="layerSlotProps.close()"
                  >
                    <span :class="$style['nav__title-text']"
                      >금융소비자보호</span
                    >
                  </RouterLink>
                </h3>
                <div :class="$style['nav__contents']">
                  <div :class="$style['nav__depth']">
                    <ul :class="[$style['nav__depth-list'], 'flex-wrap']">
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
                                  >금융소비자보호헌장</RouterLink
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
                                  >금융소비자보호공시</RouterLink
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
                                  >금융소비자보호 내부통제규정</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >금융소비자보호 우수사례</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >금융소비자권리</span
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
                                  >금리인하요구권</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >청약철회권</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >자료열람요구권</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >위법계약해지권</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >민원창구·유익정보</span
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
                                  >전자민원접수</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >방문·전화권유판매원 조회</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >소비자권익보호 유익한 정보</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <!-- s: 250124 추가 -->
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >보이스피싱 예방 안내</span
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
                                  >보이스피싱 지킴이</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <!-- e:// 250124 추가 -->
                      <!-- s: 250123 추가 -->
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >상품공시실</span
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
                                  >금융상품통합비교공시</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >여신금융협회상품공시</RouterLink
                                >
                              </div>
                            </li>
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >판매중단상품안내</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >비대면 금융사고<br />
                            책임분담기준</span
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
                                  >대고객 안내문</RouterLink
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
              <!-- // 금융소비자보호 -->

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
                          <span :class="$style['nav__depth-text']">FAQ</span>
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >자주하는 질문</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >고객상담</span
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
                                  >상담등록</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >공지사항</span
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
                                  >주요공지</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']">이벤트</span>
                        </div>
                        <div :class="$style['nav__depth-contents']">
                          <ul :class="$style['nav__list']">
                            <li :class="$style['nav__item']">
                              <div :class="$style['nav__text']">
                                <RouterLink
                                  to=""
                                  :class="$style['nav__link']"
                                  @click="layerSlotProps.close()"
                                  >이벤트 현황</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >서식다운로드</span
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
                                  >서식 자료실</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >지점안내</span
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
                                  >지점찾기</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >이용 시 유의사항</span
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
                                  >유의사항</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >고객센터 ARS 안내</span
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
                                  >ARS상담</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
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
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >정책 및 약관</span
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
                                  >약관 자료실</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >개인정보이용 현황</span
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
                                  >개인정보 열람 청구실</RouterLink
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
                            >그룹사간 고객정보<br />
                            제공내역 조회</span
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
                                  >정보제공 현황 조회</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >인증센터</span
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
                                  >공동인증서
                                  <br />내보내기/가져오기</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >대출계산기</span
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
                                  >월납입금 계산</RouterLink
                                >
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li :class="$style['nav__depth-item']">
                        <div :class="$style['nav__depth-title']">
                          <span :class="$style['nav__depth-text']"
                            >전화상담신청</span
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
                                  >전화상담</RouterLink
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
              <!-- // 고객센터 -->
            </div>
            <!-- // E: 240726 수정 -->
          </div>
        </Simplebar>
      </div>
    </nav>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/layout/LayerSiteMap.scss';
</style>

<style lang="scss" scoped>
.flex-wrap {
  > li {
    width: 20%;
  }
}
</style>
