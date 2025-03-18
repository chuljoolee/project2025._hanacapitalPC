<script>
// Crm_P00_p001
import { onMounted, onUnmounted, reactive } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiScroller from '@/components/ui/common/UiScroller.vue';

export default {
  components: {
    PageContents,

    SimpleSelect,
    SimpleDatepicker,
    ButtonList,
    ButtonListItem,
    BasicButton,
    UiScroller,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'crm001');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
    });

    const state = reactive({
      searchMinDate: '2024.04.21',
      searchMaxDate: '2024.04.21',
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents size="max">
    <div class="container main">
      <div class="title">상담 상세 내용</div>
      <h3 class="test-section-sub-title">
        상담정보
        <ButtonList
          align="right"
          :classNames="{ wrap: 'row-margin-contents' }"
          style="margin: 0 0 0 auto"
        >
          <ButtonListItem>
            <BasicButton size="small" :line="true">상담저장</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="small" :line="true">상담결과저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </h3>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">손님명</td>
            <td>
              <input type="text" />
            </td>
            <td class="title">접수번호</td>
            <td></td>
            <td class="title">제휴사</td>
            <td></td>
            <td class="title">상담원</td>
            <td></td>
          </tr>

          <tr>
            <td class="title">상담요청시간</td>
            <td></td>
            <td class="title">연락처</td>
            <td></td>
            <td class="title">생년월일</td>
            <td></td>
            <td class="title">사업자번호</td>
            <td></td>
          </tr>

          <tr>
            <td class="title">상담일자</td>
            <td>
              <SimpleDatepicker
                title="조회기간 시작 날짜"
                :classNames="{ wrap: 'input-width-large' }"
                :max="state.searchMaxDate"
                v-model="state.searchMinDate"
              />
            </td>
            <td class="title">손님구분</td>
            <td>
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '고객명',
                  },
                ]"
                title="조회기간"
                defaultValue="1"
                :classNames="{ wrap: 'input-width-large' }"
              />
            </td>
            <td class="title">통화대상</td>
            <td>
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '고객명',
                  },
                ]"
                title="조회기간"
                defaultValue="1"
                :classNames="{ wrap: 'input-width-large' }"
              />
            </td>
            <td class="title">대출진행상태</td>
            <td></td>
          </tr>

          <tr>
            <td class="title"></td>
            <td></td>
            <td class="title"></td>
            <td></td>
            <td class="title">상담결과</td>
            <td>
              <SimpleSelect
                :options="[
                  {
                    value: '1',
                    label: '고객명',
                  },
                ]"
                title="조회기간"
                defaultValue="1"
                :classNames="{ wrap: 'input-width-large' }"
              />
            </td>
            <td class="title">재상담예약일</td>
            <td>
              <SimpleDatepicker
                title="조회기간 시작 날짜"
                :classNames="{ wrap: 'input-width-large' }"
                :max="state.searchMaxDate"
                v-model="state.searchMinDate"
              />
            </td>
          </tr>

          <tr>
            <td class="title">상담내용</td>
            <td colspan="7"><input type="text" /></td>
          </tr>

          <tr>
            <td class="title">상담이력</td>
            <td colspan="7">
              <div class="flex-box">
                <div class="flex-box__cell"><span>10</span> 건</div>
                <div class="flex-box__cell">
                  <button class="btn btn-s03">상담이력 보기</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 class="test-section-sub-title">
        견적정보
        <ButtonList
          align="right"
          :classNames="{ wrap: 'row-margin-contents' }"
          style="margin: 0 0 0 auto"
        >
          <ButtonListItem>
            <BasicButton size="small" :line="true">견적수정</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="small" :line="true">견적재등록</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="small" :line="true">견적서 발송</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </h3>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">견적구분</td>
            <td>다이렉트</td>
            <td class="title">등록일자</td>
            <td>0000-00-00</td>
            <td class="title">견적번호</td>
            <td colspan="3">A00000000000000</td>
          </tr>

          <tr>
            <td class="title">브랜드</td>
            <td>르노코리아</td>
            <td class="title">구입차종</td>
            <td>XM3</td>
            <td class="title">차종/모델</td>
            <td colspan="3">가솔린 1.3 터보 TCe 260</td>
          </tr>
          <!-- S:240328 수정 -->
          <tr>
            <td class="title">옵션</td>
            <td colspan="3">
              <UiScroller :style="{ height: '60px' }">
                - 블랙 가죽 시트 패키지 Ⅱ (1,070,000원)
                <br />
                - 파퓰러 패키지(3,000,000원)<br />
                - 기타기타패지지 기타패키지 기타패키지 기타패키 (1,000,000원)
                <br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
                내용 내용 내용 내용<br />
              </UiScroller>
            </td>
            <td class="title">색상</td>
            <td colspan="3">
              - 마테호른 화이트(무광) (690,000원)<br />
              - 옵시디언 블랙 모노톤 (0원)
            </td>
          </tr>
          <!-- E:240328 수정 -->
          <tr>
            <td class="title">트림</td>
            <td>inspire</td>
            <td class="title">년식</td>
            <td>2023</td>
            <td class="title">출고구분</td>
            <td></td>
            <td class="title">차량구매지</td>
            <td></td>
          </tr>

          <tr>
            <td class="title">차량가격</td>
            <td class="ta_r">28,640,000</td>
            <td class="title">취급지점</td>
            <td>다이렉트오토팀</td>
            <td class="title"></td>
            <td></td>
            <td class="title"></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h3 class="test-section-sub-title">상품정보</h3>
      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">상품분류</td>
            <td>렌터카</td>
            <td class="title">상품상세</td>
            <td>운용(정상)</td>
            <td class="title">이용기간</td>
            <td>60개월</td>
            <td class="title">이용금액</td>
            <td>24,458,668</td>
          </tr>

          <tr>
            <td class="title">출고구분</td>
            <td>특판</td>
            <td class="title">할인액</td>
            <td>3,000,000</td>
            <td class="title">할인액(수기)</td>
            <td>-</td>
            <td class="title">약정주행거리(1년)</td>
            <td>20,000</td>
          </tr>

          <tr>
            <td class="title">운전연령</td>
            <td>만 26세이상</td>
            <td class="title">대물</td>
            <td>1억원</td>
            <td class="title">자손</td>
            <td>1억원</td>
            <td class="title">면책금</td>
            <td>30만원</td>
          </tr>

          <tr>
            <td class="title">정비</td>
            <td>Self Service</td>
            <td class="title">잔존가치</td>
            <td>12,000,000</td>
            <td class="title">보증금</td>
            <td>-</td>
            <td class="title">선납금</td>
            <td>-</td>
          </tr>

          <tr>
            <td class="title"></td>
            <td></td>
            <td class="title"></td>
            <td></td>
            <td class="title" colspan="2">출고전 납입(선납금+보증금)</td>
            <td colspan="2">-</td>
          </tr>
        </tbody>
      </table>

      <h3 class="test-section-sub-title">
        탁송정보
        <ButtonList
          align="right"
          :classNames="{ wrap: 'row-margin-contents' }"
          style="margin: 0 0 0 auto"
        >
          <ButtonListItem>
            <BasicButton size="small" :line="true">수정</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton size="small" :line="true">저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </h3>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
          <col width="10%" />
          <col width="15%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">탁송방식</td>
            <td>1차제조사 +2차외주탁송</td>
            <td class="title">내비게이션</td>
            <td>해당없음</td>
            <td class="title">블랙박스</td>
            <td>아이나비(A300)</td>
            <td class="title">추가용품(원)</td>
            <td>0</td>
          </tr>

          <tr>
            <td class="title">측후면썬팅</td>
            <td>일반(쿠폰)</td>
            <td class="title">측후면투과율</td>
            <td>15%</td>
            <td class="title">전면썬팅</td>
            <td>포함</td>
            <td class="title">전면투과율</td>
            <td>35%</td>
          </tr>

          <tr>
            <td class="title">출고지</td>
            <td>울산</td>
            <td class="title">탁송지</td>
            <td>서울</td>
            <td class="title">제조사 계약번호</td>
            <td><input type="text" /></td>
            <td class="title">차대번호</td>
            <td><input type="text" /></td>
          </tr>

          <tr>
            <td class="title">인수희망일</td>
            <td><input type="text" /></td>
            <td class="title">인수자</td>
            <td><input type="text" /></td>
            <td class="title">인수자 연락처</td>
            <td><input type="text" /></td>
            <td class="title"></td>
            <td></td>
          </tr>

          <tr>
            <td class="title">인수주소</td>
            <!-- S:240416 수정 -->
            <td colspan="7">
              12345<br />서울시 강남구 테헤란로 127 강남사옥 20층
            </td>
            <!-- E:240416 수정 -->
          </tr>
        </tbody>
      </table>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/crm/Crm_P01_p001.scss';
</style>
<style>
.ta_r {
  text-align: right;
}
.margin_0 ul {
  margin: 0 !important;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 16px;
}
.grid_colspan2 {
  grid-column: span 2;
}
.margin_0 ul li {
  padding: 0 !important;
}
.tit {
  display: inline-block;
  width: 60px;
}
.test-section-sub-title {
  display: flex;
  align-items: center;
}
</style>
