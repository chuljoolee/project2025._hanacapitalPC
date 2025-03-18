<script>
import {
  ref,
  computed,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  reactive,
  useCssModule,
  nextTick,
  watch,
} from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiScrollBlockStore } from '@/stores/ui/scrollBlock';
import { useUiHeaderStore } from '@/stores/ui/header';

import DropDownMenu from '@/components/ui/layout/DropDownMenu.vue';

import LayerSiteMap from '@/components/ui/layout/Common_P00_l004.vue';
import LayerSearch from '@/components/ui/layout/Common_P11_l001.vue';

import ImgLogo from '@/assets/images/common/logo-main.svg?component';
import IconMenu from '@/assets/images/common/menu.svg?component';
import IconSearch from '@/assets/images/common/search.svg?component';

export default {
  components: {
    RouterLink,
    DropDownMenu,
    LayerSiteMap,
    LayerSearch,
    ImgLogo,
    IconMenu,
    IconSearch,
  },
  props: {
    type: {
      Type: String,
      default: 'default',
    },
    nav: {
      Type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const timer = {};
    const $style = useCssModule();
    const route = useRoute();

    const store = {
      ui: {
        common: useUiCommonStore(),
        scrollBlock: useUiScrollBlockStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      isFocus: {},
      isHover: {},
      navLayerHeight: 0,
      isDepthFocus: {},
      isDepthHover: {},
    });

    const header = ref(null);
    const fixbar = ref(null);
    const fake = ref(null);
    const siteMap = ref(null);
    const Search = ref(null);
    const navLayer = ref(null);

    const isBlocking = computed(() => {
      return store.ui.scrollBlock.isBlocking;
    });

    const scrollbarsWidth = computed(() => {
      return store.ui.common.scrollbarsWidth;
    });

    const blockingScrollLeft = computed(() => {
      return store.ui.scrollBlock.scrollLeft;
    });

    const isNavLayerShow = computed(() => {
      let isShow = false;

      for (const [key] of Object.entries(state.isFocus)) {
        if (state.isFocus[key]) {
          isShow = true;
          break;
        }
      }

      for (const [key] of Object.entries(state.isHover)) {
        if (state.isHover[key]) {
          isShow = true;
          break;
        }
      }

      return isShow;
    });

    const isDepthEnter = computed(() => {
      let isEnter = false;

      for (const [key] of Object.entries(state.isDepthFocus)) {
        if (state.isDepthFocus[key]) {
          isEnter = true;
          break;
        }
      }

      for (const [key] of Object.entries(state.isDepthHover)) {
        if (state.isDepthHover[key]) {
          isEnter = true;
          break;
        }
      }

      return isEnter;
    });

    const pageType = computed(() => {
      const { type } = props;
      const page = {
        default: '손님',
        inventoryFinance: '재고금융',
        lmBlog: 'LM블로그',
        agent: '에이전트',
        agentTest: '테스트',
      };

      return page[type];
    });

    const update = () => {
      if (fixbar.value && fake.value) {
        const height = fixbar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
        store.ui.header.setHeight(height);
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && header.value) {
        if (isBlocking.value) {
          header.value.style.marginLeft = `-${blockingScrollLeft.value}px`;
        } else {
          header.value.style.marginLeft = `-${html.scrollLeft}px`;
        }
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    const siteMapOpen = (e = {}) => {
      siteMap.value.layer.open(e.target);
    };

    const searchOpen = (e = {}) => {
      Search.value.layer.open(e.target);
    };

    const resetHoverFocus = () => {
      Object.keys(state.isHover).forEach(function (k) {
        state.isHover[k] = false;
      });
      Object.keys(state.isFocus).forEach(function (k) {
        state.isFocus[k] = false;
      });
    };

    const onfocusin = (key, target) => {
      clearTimeout(timer[key] || null);
      resetHoverFocus();
      state.isFocus[key] = true;

      nextTick(() => {
        const depthEl = target
          .closest(`.${$style['nav__item']}`)
          .getElementsByClassName($style['nav__depth']);
        const depthH = depthEl.length && depthEl[0].offsetHeight;

        state.navLayerHeight = depthH;
      });
    };

    const onfocusout = (key) => {
      clearTimeout(timer[key] || null);
      timer[key] = setTimeout(() => {
        state.isFocus[key] = false;
        clearTimeout(timer[key]);
      }, 50);
    };

    const onMouseenter = (key, target) => {
      resetHoverFocus();
      state.isHover[key] = true;

      nextTick(() => {
        const depthEl = target.getElementsByClassName($style['nav__depth']);
        const depthH = depthEl.length && depthEl[0].offsetHeight;

        state.navLayerHeight = depthH;
      });
    };

    const onNavMouseenter = () => {
      clearTimeout(timer.headerNav || null);
    };

    const onNavMouseleave = () => {
      clearTimeout(timer.headerNav || null);
      timer.headerNav = setTimeout(() => {
        resetHoverFocus();
        clearTimeout(timer.headerNav);
      }, 50);
    };

    const onClick = () => {
      resetHoverFocus();
    };

    const resetDepthHoverFocus = () => {
      Object.keys(state.isDepthHover).forEach(function (k) {
        state.isDepthHover[k] = false;
      });
      Object.keys(state.isDepthFocus).forEach(function (k) {
        state.isDepthFocus[k] = false;
      });
    };

    const onDepthfocusin = (key) => {
      resetDepthHoverFocus();
      state.isDepthFocus[key] = true;
    };

    const onDepthfocusout = () => {
      resetDepthHoverFocus();
    };

    const onDepthMouseenter = (key) => {
      resetDepthHoverFocus();
      state.isDepthHover[key] = true;
    };

    const onDepthMouseleave = () => {
      resetDepthHoverFocus();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onBeforeUnmount(() => {
      store.ui.header.setHeight(0);
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    watch(
      () => route.path,
      () => {
        scroll();
        update();
      }
    );

    return {
      store,
      state,
      header,
      fixbar,
      fake,
      siteMap,
      Search,
      navLayer,
      isBlocking,
      scrollbarsWidth,
      isNavLayerShow,
      isDepthEnter,
      pageType,
      siteMapOpen,
      searchOpen,
      onfocusin,
      onfocusout,
      onMouseenter,
      onNavMouseenter,
      onNavMouseleave,
      onClick,
      onDepthfocusin,
      onDepthfocusout,
      onDepthMouseenter,
      onDepthMouseleave,
    };
  },
};
</script>

<template>
  <div :class="$style['top-bar']">
    <div
      ref="fixbar"
      :class="$style['top-bar__fix']"
      :style="`${isBlocking ? `margin-right: ${scrollbarsWidth}px` : ''}`"
    >
      <div
        ref="navLayer"
        :class="[
          $style['nav-layer'],
          {
            'is-show': isNavLayerShow && state.navLayerHeight,
          },
        ]"
        :style="{
          height: state.navLayerHeight + 'px',
        }"
        @mouseenter="onNavMouseenter()"
        @mouseleave="onNavMouseleave()"
      ></div>

      <div ref="header" :class="$style['header-wrap']">
        <header :class="$style['header']">
          <h1 :class="$style['header__logo']">
            <RouterLink to="/main/home" :class="$style['header__logo-link']">
              <ImgLogo />
              <span class="for-a11y">하나캐피탈</span>
            </RouterLink>
          </h1>

          <div :class="$style['nav']">
            <ul
              :class="$style['nav__list']"
              @mouseenter="onNavMouseenter()"
              @mouseleave="onNavMouseleave()"
            >
              <li
                v-for="item in nav"
                :key="item.name"
                :class="[
                  $style['nav__item'],
                  {
                    [$style['nav__item--active']]:
                      store.ui.header.active === item.name,
                    'is-depth-show': isNavLayerShow,
                    'is-focus': state.isFocus[item.name],
                    'is-hover': state.isHover[item.name],
                  },
                ]"
                @focusin="(e) => onfocusin(item.name, e.target)"
                @focusout="onfocusout(item.name)"
                @mouseenter="(e) => onMouseenter(item.name, e.target)"
              >
                <RouterLink :to="item.to" :class="$style['nav__link']">
                  <span :class="$style['nav__text']">{{ item.text }}</span>
                </RouterLink>

                <div v-if="item.child" :class="$style['nav__depth']">
                  <ul :class="$style['nav__depth-list']">
                    <li
                      v-for="childItem in item.child"
                      :key="childItem.name"
                      :class="[
                        $style['nav__depth-item'],
                        {
                          [$style['nav__depth-item--active']]:
                            store.ui.header.depthActive === childItem.name,
                          'is-depth-enter': isDepthEnter,
                          'is-focus': state.isDepthFocus[childItem.name],
                          'is-hover': state.isDepthHover[childItem.name],
                        },
                      ]"
                      @focusin="onDepthfocusin(childItem.name)"
                      @focusout="onDepthfocusout(childItem.name)"
                      @mouseenter="onDepthMouseenter(childItem.name)"
                      @mouseleave="onDepthMouseleave(childItem.name)"
                    >
                      <button
                        v-if="childItem.type === 'button'"
                        type="button"
                        :class="$style['nav__depth-link']"
                        @click="
                          () => {
                            onClick();
                            childItem.click && childItem.click();
                          }
                        "
                      >
                        <span :class="$style['nav__depth-text']">{{
                          childItem.text
                        }}</span>
                      </button>

                      <RouterLink
                        v-else
                        :to="childItem.to"
                        :class="$style['nav__depth-link']"
                        @click="
                          () => {
                            onClick();
                            childItem.click && childItem.click();
                          }
                        "
                      >
                        <span :class="$style['nav__depth-text']">{{
                          childItem.text
                        }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div v-if="type !== 'lmBlogPersonal'" :class="$style['type-menu']">
            <DropDownMenu
              :title="pageType"
              :data="[
                {
                  text: '손님',
                  to: '/main/home',
                },
                {
                  text: '재고금융',
                  to: '/inventory-finance/IF_P08_p001',
                },
                {
                  text: 'LM블로그',
                  to: '/lm-blog/LM_P02_p001',
                },
                {
                  text: '에이전트',
                  to: '/agent/Agent_P01_p001',
                },
                {
                  text: 'CRM',
                  to: '/crm/Crm_P00_p001',
                },
              ]"
              theme="secondary"
            />
          </div>

          <div v-if="type === 'default'" :class="$style['etc']">
            <ul :class="$style['etc__list']">
              <!-- s: 250122 추가 -->
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="[$style['etc__text'], 'color-gray']"
                    >고객센터</span
                  >
                </RouterLink>
              </li>
              <li :class="[$style['etc__item'], 'paddingLeft']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="[$style['etc__text'], 'color-gray']"
                    >소비자보호</span
                  >
                </RouterLink>
              </li>
              <!-- e:// 250122 추가 -->
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']">로그인</span>
                </RouterLink>
              </li>
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']">회원가입</span>
                </RouterLink>
              </li>
            </ul>

            <!-- s: 250122 추가 -->
            <div :class="$style['etc__menu']">
              <button
                type="button"
                :class="$style['menu-button']"
                @click="searchOpen"
              >
                <IconSearch />
                <span class="for-a11y">검색창 열기</span>
              </button>
            </div>
            <!-- e:// 250122 추가 -->

            <div :class="[$style['etc__menu'], 'marginLeft']">
              <button
                type="button"
                :class="$style['menu-button']"
                @click="siteMapOpen"
              >
                <IconMenu />
                <span class="for-a11y">사이트맵 열기</span>
              </button>
            </div>
          </div>

          <div
            v-else-if="
              type === 'inventoryFinance' ||
              type === 'lmBlog' ||
              type === 'agent' ||
              type === 'crm' ||
              type === 'agentTest'
            "
            :class="$style['etc']"
          >
            <ul :class="$style['etc__list']">
              <!-- s: 250204 재고금융, LM블로그, 에이전트 헤더에서의 삭제 요청 -->
              <!-- s: 250122 추가 -->
              <!-- <li :class="$style['etc__item']">
                  <RouterLink to="" :class="$style['etc__link']">
                    <span :class="[$style['etc__text'], 'color-gray']"
                      >고객센터</span
                    >
                  </RouterLink>
                </li>
                <li :class="[$style['etc__item'], 'paddingLeft']">
                  <RouterLink to="" :class="$style['etc__link']">
                    <span :class="[$style['etc__text'], 'color-gray']"
                      >소비자보호</span
                    >
                  </RouterLink>
                </li> -->
              <!-- e:// 250122 추가 -->
              <!-- S: 240404 수정 -->
              <!-- <li :class="$style['etc__item']">
                  <RouterLink to="" :class="$style['etc__link']">
                    <span :class="$style['etc__text']">리스/렌트</span>
                  </RouterLink>
                </li> -->
              <!-- E: 240404 수정 -->
              <!-- e:// 250204 재고금융, LM블로그, 에이전트 헤더에서의 삭제 요청 -->
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']"
                    ><strong class="color-green">김하나</strong>님</span
                  >
                </RouterLink>
              </li>
              <li :class="$style['etc__item']">
                <RouterLink to="" :class="$style['etc__link']">
                  <span :class="$style['etc__text']">로그아웃</span>
                </RouterLink>
              </li>
            </ul>
            <!-- s: 250204 재고금융, LM블로그, 에이전트 헤더에서의 삭제 요청 -->
            <!-- s: 250122 추가 -->
            <!-- <div :class="$style['etc__menu']">
                <button
                  type="button"
                  :class="$style['menu-button']"
                  @click="searchOpen"
                >
                  <IconSearch />
                  <span class="for-a11y">검색창 열기</span>
                </button>
              </div> -->
            <!-- e:// 250122 추가 -->

            <!-- <div :class="[$style['etc__menu'], 'marginLeft']">
                <button
                  type="button"
                  :class="$style['menu-button']"
                  @click="siteMapOpen"
                >
                  <IconMenu />
                  <span class="for-a11y">사이트맵 열기</span>
                </button>
              </div> -->
            <!-- e:// 250204 재고금융, LM블로그, 에이전트 헤더에서의 삭제 요청 -->
          </div>
        </header>
      </div>
    </div>

    <div ref="fake" :class="$style['top-bar__fake']"></div>

    <LayerSiteMap ref="siteMap" v-if="type === 'default'" />
    <LayerSearch ref="Search" v-if="type === 'default'" />
    <!-- 250122 추가 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/HeaderBase.scss';
</style>
<!-- s: 250122 추가 -->
<style lang="scss" scoped>
.paddingLeft {
  padding-left: 10px;
  &:before {
    content: '';
    display: none;
  }
}
.marginLeft {
  margin-left: 20px;
}
</style>
<!-- e:// 250122 추가 -->
