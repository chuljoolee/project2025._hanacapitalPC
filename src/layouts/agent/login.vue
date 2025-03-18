<script></script>

<template>
  <div>
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
            text: '테스트',
            to: '/agent/Agent_P01_test',
          },
        ]"
        theme="secondary"
      />
    </div>

    <ul :class="$style['etc__list']">
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
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/HeaderBase.scss';
</style>
