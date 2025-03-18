<script>
// Company_P01_p002
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
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
            text: '회사소개',
            to: '/',
          },
          {
            text: 'CEO 소개',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>CEO 소개</PageTitle>
      <PageSubText :classNames="{ wrap: 'font-weight-regular' }">
        모두의 기쁨, 그 하나를 위해<br />
        하나캐피탈은 손님 여러분과 함께 성장하며 세계로, 미래로 나아가겠습니다.
      </PageSubText>
    </PageHead>

    <div :class="$style['ceo-layout']">
      <div :class="$style['ceo-layout__item']">
        <p class="row-margin-item-group">
          존경하는 하나캐피탈 손님 여러분,<br />
          안녕하십니까? 대표이사 김용석입니다.
        </p>
        <p class="row-margin-item-group">
          하나캐피탈은 하나금융그룹의 미션인 ‘함께 성장하며 행복을 나누는
          금융’을 실천하며,<br />  손님 여러분께 필요한 금융서비스를 제공하기
          위해 끊임없이 노력하고 있습니다.
        </p>
        <p class="row-margin-item-group">
          저희 임직원들은 도덕성과 책임감을 바탕으로, 손님과 함께 성장하며<br />
          행복을 만들어가는 금융을 이루기 위해 윤리경영을 실천하고 있습니다.
        </p>
        <p class="row-margin-item-group">
          손님의 행복을 최우선으로 삼는 하나캐피탈은<br />
          항상 손님의 곁에서 믿음직한 금융 파트너로 함께 걸어가겠습니다.<br />오늘도
          한 걸음 더 나아가는 마음으로 최선을 다하겠습니다.
        </p>
        <p class="row-margin-item-group">감사합니다.</p>

        <div class="row-margin-container-medium">
          <p
            class="text-body-3 color-gray-tertiary font-weight-light row-margin-small"
          >
            하나캐피탈 ㈜ 대표이사
          </p>
          <p class="text-body-3 font-weight-medium">김용석</p>
        </div>
      </div>

      <div :class="$style['ceo-layout__item']">
        <div :class="$style['image-view']">
          <img src="@/assets/images/contents/ceo-introduction.png" alt="" />
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p002.scss';
</style>
