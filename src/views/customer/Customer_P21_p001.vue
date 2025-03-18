<script>
// Customer_P21_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
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
            text: '금융소비자권리',
          },
          {
            text: '자료열람요구권',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>자료열람요구권</PageTitle>
    </PageHead>

    <div>
      <section class="row-margin-block-small">
        <div class="row-margin-contents">
          <h3 class="text-title-1 row-margin-small">자료열람요구권이란?</h3>

          <p class="font-weight-light text-body-1 color-gray-secondary">
            금융소비자가 금융소비자 보호에 관한 법률 제36조에 따른 분쟁조정 또는
            소송의 수행 등 권리구제를 위한 목적으로<br />
            금융상품 판매업자 등이 기록 및 유지·관리하는 자료의 열람을 요구할 수
            있는 권리
          </p>
        </div>

        <div>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              열람을 요구할 수 있는 자료의 종류
            </h3>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  계약체결·이행에 관한 자료, 금융상품 등에 관한 광고 자료
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  금융소비자의 권리행사에 관한 자료*
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  내부통제기준의 제정 및 운영 등에 관한 자료
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  업무 위탁에 관한 자료
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">*</div>
                <div :class="$style['basic-list__content']">
                  금융소비자의 자료열람 연기·제한 및 거절에 관한 자료(법 § 28 ④
                  후단, ⑤), 청약의 철회(법 § 46) 및 위법계약의 해지(법 § 47)
                  관련 자료
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1">신청 방법</h3>

            <div
              :class="[$style['basic-list__content'], 'row-margin-item-group']"
            >
              아래 내용을 포함한 자료열람신청서를 작성하여 금융회사에 제출
            </div>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  열람 목적 : 금융소비자 보호에 관한 법률 제36조에따른 분쟁조정
                  신청 내역 또는 소송제기 내역 포함
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  열람 범위 : 열람하고자 하는 자료의 내용 및 해당 자료와 열람
                  목적과의 관계 포함
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  열람 방법 : 당사 양식은
                  <em class="color-green"
                    >고객센터>서식다운로드>[금융소비자보호법 권리]
                    자료열람신청서</em
                  >로 가셔서 다운로드 하시면 됩니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">처리 프로세스</h3>

            <div :class="$style['contents-list']">
              <ol
                :class="[
                  $style['contents-list__list'],
                  $style['contents-list__list--quinary'],
                ]"
              >
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">1</div>
                    <div :class="$style['contents-list__title']">
                      신청서 제출
                    </div>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">2</div>
                    <div :class="$style['contents-list__title']">
                      신청서 접수 및 유관 부서 이관
                    </div>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">3</div>
                    <div :class="$style['contents-list__title']">
                      사실관계 확인 및 수용 여부 결정·소비자 통보
                    </div>
                  </div>
                </li>
              </ol>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--medium'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item-group',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    열람이 가능할 경우 당사는 문서·전화·팩스·이메일·휴대전화
                    문자메시지 등의 방법으로 안내 예정
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="row-margin-container-medium">
            <h3 class="text-body-1 row-margin-item-group">
              열람 제한·거절 사유
            </h3>

            <div
              :class="[$style['basic-list__content'], 'row-margin-item-group']"
            >
              당사는 아래와 같은 사유가 있는 경우 금융소비자에게 문서로 그
              사유를 알리고, 열람을 제한하거나 거절 가능
            </div>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--medium'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  법령에 따라 열람을 제한하거나 거절할 수 있는 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  다른 사람의 생명·신체를 해칠 우려가 있거나 다른 사람의 재산과
                  그 밖의 이익을 부당하게 침해할 우려가 있는 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  [부정경쟁방지 및 영업비밀보호에 관한 법률] 제2조제2호에 따른
                  영업비밀을 현저히 침해할 우려가 있는 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  개인정보의 공개로 인해 사생활의 비밀 또는 자유를 부당하게
                  침해할 우려가 있는 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-1',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  열람하려는 자료가 열람목적과 관련이 없다는 사실이 명백한 경우
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P21_p001.scss';
</style>

<style lang="scss" scoped>
.color-green {
  font-style: normal;
  color: #00a69e;
  font-weight: 500;
}

.basic-content {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
}
</style>
