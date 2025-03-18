<script>
// DS_NO_W01_02 통지문서조회
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
// import ButtonList from '@/components/ui/button/ButtonList.vue';
// import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import DS_NO_W01_02_L01 from '@/views/customer/DS_NO_W01_02_L01.vue';
import DS_NO_W01_02_L02 from '@/views/customer/DS_NO_W01_02_L02.vue';
import DS_NO_W01_02_L03 from '@/views/customer/DS_NO_W01_02_L03.vue';

import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    // ButtonList,
    // ButtonListItem,
    DS_NO_W01_02_L01,
    DS_NO_W01_02_L02,
    DS_NO_W01_02_L03,
    LocationBar,
    PageHead,
    PageTitle,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
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

    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
    };
  },
};
</script>

<template>
  <PageContents size="max">
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
            text: '통지',
            to: '/',
          },
          {
            text: '통지문서조회',
            // to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>통지문서조회</PageTitle>
    </PageHead>

    <h2 class="text-title-1">통지 문서</h2>
    <div class="row-margin-contents row-margin-bottom-none">
      <!-- Case : 조회 결과 있을 때 -->
      <div :class="[$style['basic-table'], 'custom-table']">
        <table>
          <colgroup>
            <col style="width: 200px" />
            <col />
            <col />
            <col style="width: 184px" />
            <col style="width: 338px" />
            <col style="width: 184px" />
            <col />
            <col style="width: 200px" />
          </colgroup>
          <thead>
            <tr>
              <th>채권번호</th>
              <th>게시일자</th>
              <th>대출일자</th>
              <th>대출금액</th>
              <th>상품명</th>
              <th>출금잔액</th>
              <th>채무자</th>
              <th>통지 문서</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">D12332423434343</td>
              <td rowspan="2">24.08.01</td>
              <td rowspan="2">24.08.01</td>
              <td rowspan="2">30,000,000원</td>
              <td rowspan="2">소비자신용대출_아파트론_행복아파트론</td>
              <td rowspan="2">30,000,000원</td>
              <td rowspan="2">김하나 김하</td>
              <td>
                <BasicButton
                  @click="layer001Open"
                  size="small"
                  class="font-weight-regular"
                >
                  기한이익상실 예정 통지서
                </BasicButton>
              </td>
            </tr>
            <tr>
              <td style="border-left: 1px solid #e0e0e0">
                <BasicButton
                  @click="layer002Open"
                  size="small"
                  class="font-weight-regular"
                >
                  주택경매 예정 통지서
                </BasicButton>
              </td>
            </tr>
            <tr>
              <td>D12332423434343</td>
              <td>24.08.01</td>
              <td>24.08.01</td>
              <td>30,000,000원</td>
              <td>
                소비자신용대출_아파트론_행복아파트론텍스트 3줄 케이스
                케이스케이스 케이스케이스 케이스케이스 케이스케이스 케이스
              </td>
              <td>30,000,000원</td>
              <td>홍길동</td>
              <td>
                <BasicButton
                  @click="layer002Open"
                  size="small"
                  class="font-weight-regular"
                >
                  주택경매 예정 통지서
                </BasicButton>
              </td>
            </tr>
            <tr>
              <td>D12332423434343</td>
              <td>24.08.01</td>
              <td>24.08.01</td>
              <td>30,000,000원</td>
              <td>소비자신용대출_아파트론_행복아파트론</td>
              <td>30,000,000원</td>
              <td>홍길동</td>
              <td>
                <BasicButton
                  @click="layer003Open"
                  size="small"
                  class="font-weight-regular"
                >
                  채권양도 예정 통지서
                </BasicButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- // Case : 조회 결과 있을 때 -->

      <!-- Case : 조회 결과 없을 때 -->
      <!-- <div :class="[$style['empty'], $style['empty--secondary']]">
        <p :class="$style['empty__text']">
          고객님의 정보로 제공된 내역이 없습니다.
        </p>
      </div> -->
      <!-- // Case : 조회 결과 없을 때 -->
    </div>

    <PaginationNav>
      <PaginationNavArrow type="prev" :disabled="true" />
      <PaginationNavNumber :active="true">1</PaginationNavNumber>
      <PaginationNavNumber>2</PaginationNavNumber>
      <PaginationNavNumber>3</PaginationNavNumber>
      <PaginationNavNumber>4</PaginationNavNumber>
      <PaginationNavNumber>5</PaginationNavNumber>
      <PaginationNavNumber>6</PaginationNavNumber>
      <PaginationNavNumber>7</PaginationNavNumber>
      <PaginationNavEllipsis />
      <PaginationNavNumber>999</PaginationNavNumber>
      <PaginationNavArrow type="next" />
    </PaginationNav>

    <!-- <ButtonList>
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          기한이익상실 예정 통지서 조회<br />DS_NO_W01_02_L01
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          대출모집법인소속 임직원 조회<br />Customer_P20_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          하나캐피탈 전화권유 판매원 조회<br />Customer_P20_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList> -->

    <DS_NO_W01_02_L01 ref="layer001" />
    <DS_NO_W01_02_L02 ref="layer002" />
    <DS_NO_W01_02_L03 ref="layer003" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P16_p002.scss';
</style>

<style lang="scss" scoped>
.custom-table {
  table {
    td {
      padding: 15px 15px;
    }
  }
}
</style>
