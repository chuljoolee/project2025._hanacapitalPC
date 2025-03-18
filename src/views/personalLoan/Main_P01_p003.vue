<script>
// Main_P01_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconApt from '@/assets/images/icon/apt.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';
import IconVip from '@/assets/images/icon/vip.svg?component';
import IconStock from '@/assets/images/icon/stock.svg?component';
import IconRealEstateSecurity from '@/assets/images/icon/real-estate-security.svg?component';
import IconHome from '@/assets/images/icon/home.svg?component';
// import IconMortgage from '@/assets/images/icon/mortgage-loan.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageSubText,
    PageTitle,
    TextButton,
    IconPig,
    IconBuilding,
    IconApt,
    IconCarSecurity,
    IconVip,
    IconStock,
    IconRealEstateSecurity,
    IconHome,
    // IconMortgage,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'personalLoan');
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
            text: '개인금융',
            to: '/personal-loan/Main_P01_p003',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>신속하면서 믿을 수 있는 개인대출!</PageTitle>
      <PageSubText>
        넉넉한 한도와 합리적인 금리<br />
        하나캐피탈의 개인금융 상품을 만나보세요!
      </PageSubText>
    </PageHead>

    <div :class="[$style['product-list'], $style['product-list--col-4']]">
      <ul :class="$style['product-list__list']">
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconPig />
            </div>
            <h3 :class="$style['product-list__title']">e하나신용대출</h3>
            <p :class="$style['product-list__text']">
              소득이 있다면<br />
              쉽고 빠른 신용대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconBuilding />
            </div>
            <h3 :class="$style['product-list__title']">행복아파트론</h3>
            <p :class="$style['product-list__text']">
              아파트 소유자를 위한<br />
              무담보 아파트 대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconApt />
            </div>
            <h3 :class="$style['product-list__title']">아파트론</h3>
            <p :class="$style['product-list__text']">
              무담보·무설정<br />
              아파트 소유자 신용대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconCarSecurity />
            </div>
            <h3 :class="$style['product-list__title']">원큐자동차담보대출</h3>
            <p :class="$style['product-list__text']">
              내 차만 있다면<br />
              특별한도와 금리혜택을
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconVip />
            </div>
            <h3 :class="$style['product-list__title']">우수고객추가대출</h3>
            <p :class="$style['product-list__text']">
              중도상환수수료 없는<br />
              쉽고 빠른 신용대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconHome />
            </div>
            <h3 :class="$style['product-list__title']">e임대주택론</h3>
            <p :class="$style['product-list__text']">
              임대보증금을 담보로<br />
              빠르고 간편한 대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>

        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconRealEstateSecurity />
            </div>
            <h3 :class="$style['product-list__title']">사업자주택담보대출</h3>
            <p :class="$style['product-list__text']">
              개인사업자를 대상으로<br />
              사업자금을 지원하는 담보대출
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconStock />
            </div>
            <h3 :class="$style['product-list__title']">스탁론</h3>
            <p :class="$style['product-list__text']">
              주식매입자금을 위한<br />
              금융서비스
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <!-- s: 250225 추가 -->
        <li :class="$style['product-list__item']">
          <div :class="$style['product-list__block']">
            <div :class="$style['product-list__icon']">
              <IconApt />
            </div>
            <h3 :class="$style['product-list__title']">하나모기지론</h3>
            <p :class="$style['product-list__text']">
              상환게획에 따라<br />최대 40년까지
            </p>
            <div :class="$style['product-list__link']">
              <TextButton
                theme="secondary"
                :underline="true"
                textSize="regular"
                tagName="RouterLink"
                to=""
                :classNames="{ wrap: $style['product-list__link-button'] }"
              >
                바로가기
              </TextButton>
            </div>
          </div>
        </li>
        <!-- e:// 250225 추가 -->
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/Main_P01_p003.scss';
</style>
