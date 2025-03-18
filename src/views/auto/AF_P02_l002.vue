<script>
// AF_P02_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<!-- S: 240408 수정 -->
<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="regular">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>중도해지손해배상금 세부내역</PopupTitle>
        </ModalPopupHead>
      </template>

      <div :class="$style['contents-wrap']">
        <section>
          <h3 class="sub-title text-body-1">
            자동차 운용리스 중도해지 손해배상금
          </h3>
          <span class="sub-txt">(2024.01.02일 이후 계약 체결 건 부터)</span>
        </section>
        <section class="margin-scoped">
          <h3 class="text-body-1 color-green row-margin-item-group">
            중도해지 손해배상금 산식
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            [잔여개월 1년 초과]<br />
            미회수원금 x 중도해지손해배상금률<br /><br />
            [잔여개월 1년 이하]<br />
            미회수원금 x 중도해지손해배상금률 x (잔여기간 월수 / 12개월)
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-body-1 color-green row-margin-item-group">
            중도해지 손해배상금률
          </h3>

          <p class="text-body-3 color-gray-tertiary font-weight-regular">
            경과개월별 차등 (20%~40%)
          </p>
        </section>

        <section>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'row-margin-contents',
              'row-margin-bottom-none',
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'font-weight-regular',
                'color-gray',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                경과개월에 따른 중도해지 손해배상금률 안내표
              </div>
            </li>
          </ul>

          <div :class="[$style['basic-table'], 'row-margin-item-group-small']">
            <table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th colspan="2" rowspan="2">구분</th>
                  <th colspan="5">경과개월</th>
                </tr>
                <tr>
                  <th :class="$style['basic-table__left-line']">12개월 이하</th>
                  <th>24개월 이하</th>
                  <th>36개월 이하</th>
                  <th>48개월 이하</th>
                  <th>60개월 이하</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="5">리스<br />계약<br />기간</td>
                  <td>12개월<br />이하</td>
                  <td>
                    <span class="td-Graytxt">40%<br />(월별차등)</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']">
                    24개월<br />이하
                  </td>
                  <td><span class="td-Graytxt">40%</span></td>
                  <td>
                    <span class="td-Graytxt">35%<br />(월별차등)</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']">
                    36개월<br />이하
                  </td>
                  <td><span class="td-Graytxt">40%</span></td>
                  <td><span class="td-Graytxt">35%</span></td>
                  <td>
                    <span class="td-Graytxt">30%<br />(월별차등)</span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']">
                    48개월<br />이하
                  </td>
                  <td><span class="td-Graytxt">40%</span></td>
                  <td><span class="td-Graytxt">35%</span></td>
                  <td><span class="td-Graytxt">30%</span></td>
                  <td>
                    <span class="td-Graytxt">25%<br />(월별차등)</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']">
                    60개월<br />이하
                  </td>
                  <td><span class="td-Graytxt">40%</span></td>
                  <td><span class="td-Graytxt">35%</span></td>
                  <td><span class="td-Graytxt">30%</span></td>
                  <td><span class="td-Graytxt">25%</span></td>
                  <td>
                    <span class="td-Graytxt">20%<br />(월별차등)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :wrap="true"
          col="3"
          align="center"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton size="regular">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ModalPopup>
  </UiLayer>
</template>
<!-- E: 240408 수정 -->

<style lang="scss" module>
@import '@/assets/scss/views/auto/AF_P02_l001.scss';
</style>

<!-- S: 240408 수정 -->
<style scoped>
.td-Graytxt {
  font-size: 15px !important;
  color: #757575;
}
.margin-scoped {
  margin-top: 16px;
}
</style>
<!-- E: 240408 수정 -->
