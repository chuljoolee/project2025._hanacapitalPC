<script>
// Customer_DS_W01
import { onMounted, onUnmounted, ref } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Customer_DS_W01_L01 from '@/views/customer/Customer_DS_W01_L01.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,

    Customer_DS_W01_L01,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer006');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });

    return {
      layer001,
      layer001Open,
    };
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
            text: '금융소비자보호',
            to: '/',
          },
          {
            text: '금융소비자권리',
            to: '/',
          },
          {
            text: '채무조정 요청권',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>채무조정 요청권</PageTitle>
      <PageSubText
        :classNames="{
          wrap: 'font-weight-regular',
        }"
      >
        「개인금융채권의 관리 및 개인금융채무자의 보호에 관한 법률」 제35조에
        따라 개인금융채권을 연체한 채무자는<br />
        채권금융회사에 채무조정을 요청할 수 있습니다. 다만, 심사결과에 따라
        채무조정이 거절될 수도 있습니다.
      </PageSubText>
    </PageHead>

    <div class="row-margin-container-medium row-margin-bottom-none">
      <h2 class="text-big-3">신청대상</h2>

      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-contents">대상자</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </section>
      <section class="row-margin-contents row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          채무조정 요청이 불가한 경우
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정의 합의가 해제된 후 3개월이 지나지 않은 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인금융채권의 존재 여부나 범위에 대하여 소송, 조정 등의 소송 진행
              중인 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              신복위 채무조정 진행중이거나 합의의 효력이 상실되지 않은 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법원의 회생·간이회생·개인회생 또는 파산·면책 절차가 진행 중인
              경우율 : 약정이율+3% (법정최고금리 연 20% 이내)
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법원 회생 계획을 인가받은 후 회생절차·간이회생절차 폐지 또는
              개인회생절차 예외 결정이 확정되니 않은 경우
            </div>
          </li>
        </ul>
      </section>
      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-contents">
          채무조정 요청을 거절할 수 있는 경우
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정 요청이 불가한 채권인 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정 요청 서류에 대한 금융회사의 수정 요청에 3회 이상 따르지
              않은 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정 절차가 끝난 후 변제능력에 현저한 변동이 없음에도 불구하고
              채무조정을 다시 요청하는 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              소멸시효가 완성된 채권인 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융회사 내부기준 등에 따라 심사결과가 ‘거절＇인 경우
            </div>
          </li>
        </ul>
      </section>
    </div>

    <div class="row-margin-block-small row-margin-bottom-none">
      <h2 class="text-big-3">신청방법 및 관련서류</h2>

      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-contents">신청방법</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              영업점 신청: 영업점 관련 서류 제출을 통한 채무조정 요청
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비대면 신청: 온라인/어플리케이션을 통해 채무조정 요청
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray',
              'text-title-4',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">※</div>
            <div :class="$style['basic-list__content']">
              금융회사에 따라 신청방법이 다를 수 있음
            </div>
          </li>
        </ul>
      </section>
      <section class="row-margin-contents row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">
          채무조정 요청시 필요서류
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">채무조정요청서</div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">채무조정안</div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인금융채무자의 변제능력에 관한 서류
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인(신용)정보조회·수집·이용·제공 동의서
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              그 밖에 채무조정에 필요한 서류 (금융회사 채무조정 내부 기준에 따라
              판단)
            </div>
          </li>
        </ul>
      </section>
      <section class="row-margin-contents row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">채무조정 내용</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              원리금 감면 또는 이자율 조정
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              새로운 대출을 통한 기존 채무의 변제
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">분할 변제</div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">변제기간 연장</div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray',
              'text-title-4',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">※</div>
            <div :class="$style['basic-list__content']">
              금융회사에 따라 적용 내용이 다를 수 있음
            </div>
          </li>
        </ul>
      </section>
      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-contents">채무조정 절차</h3>
        <div :class="$style['step--horizontal']">
          <ul :class="$style['step__list']">
            <li :class="[$style['step__item'], 'step__height']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>요청 (채무자)</strong><br /><br />
                    금융회사에 채무조정을<br />
                    요청합니다.<br />
                    (구비서류 제출)
                  </p>
                </div>
              </div>
            </li>
            <li :class="[$style['step__item'], 'step__height']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 2</div>
                  <p :class="$style['step__text']">
                    <strong>심사 및 결과통지<br />(금융회사)</strong
                    ><br /><br />
                    채무조정 심사 후 결과를<br />
                    통지합니다.<br />
                    (10영업일 이내)
                  </p>
                </div>
              </div>
            </li>
            <li :class="[$style['step__item'], 'step__height']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 3</div>
                  <p :class="$style['step__text']">
                    <strong>동의 (채무자)</strong><br /><br />
                    금융회사가 통지한<br />
                    채무조정 내용에 대해<br />
                    동의 여부를 결정합니다.<br />
                    (10영업일 이내)
                  </p>
                </div>
              </div>
            </li>
            <li :class="[$style['step__item'], 'step__height']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 4</div>
                  <p :class="$style['step__text']">
                    <strong>채무조정서 작성<br />(금융회사)</strong><br /><br />
                    채무자가 동의한 채무조정<br />
                    내용에 대해 조정서를<br />
                    작성합니다.
                  </p>
                </div>
              </div>
            </li>
            <li :class="[$style['step__item'], 'step__height']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 5</div>
                  <p :class="$style['step__text']">
                    <strong>합의 (채무자)</strong><br /><br />
                    조정서에 날인하면<br />
                    채무조정 합의가<br />
                    성립됩니다.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="row-margin-block row-margin-bottom-none">
      <h2 class="text-big-3">채무조정 지원제도 안내</h2>

      <section class="row-margin-contents">
        <h3 class="text-title-1 row-margin-contents">
          신용회복위원회 채무조정
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개요: 채무를 정상적으로 상환할 수 없는 과중 채무자를 대상으로
              상환기간 연장, 이자율 조정, 채무감면 등을 통해 본인의 상환능력에
              맞게 채무를 조정하는 절차
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              신청방법: 신용회복위원회(16OO-5500) 통해 상담 및 신청 가능
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-contents row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">법원의 개인회생</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개요: 채무를 정상적으로 상환할 수 없는 개인 채무자를 대상으로
              채권자 등 이해관계인의 법률 관계를 조정함으로써 채무자의 효율적
              회생과 채권자의 이익을 도모하기 위하여 마련된 절차
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              신청방법: 대한법률구조공단(132) 또는 신용회복위원회(16OO-5500)
              통해 상담 및 신청 가능
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-contents row-margin-block-small">
        <h3 class="text-title-1 row-margin-contents">법원의 개인파산·면책</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개요: 채무를 정상적으로 상환할 수 없는 개인 채무자를 대상으로
              채권자 등 이해관계인의 법률 관계를 조정함으로써 채무자의 효율적
              회생과 채권자의 이익을 도모하기 위하여 마련된 절차
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-title-2',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              신청방법: 대한법률구조공단(132) 또는 신용회복위원회(16OO-5500)
              통해 상담 및 신청 가능
            </div>
          </li>
        </ul>
      </section>
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton @click="layer001Open">채무조정요청권 신청</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>

  <Customer_DS_W01_L01 ref="layer001" />
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_DS_W01.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" scoped>
.step__height {
  min-height: 235px;
}
</style>
