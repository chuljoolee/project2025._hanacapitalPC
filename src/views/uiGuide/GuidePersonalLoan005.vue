<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import PF_P07_l001 from '@/views//personalLoan/PF_P07_l001.vue';
import PF_P07_l002 from '@/views/personalLoan/PF_P07_l002.vue';
import PF_P07_l003 from '@/views/personalLoan/PF_P07_l003.vue';
import PF_P07_l101 from '@/views/personalLoan/PF_P07_l101.vue';
import PF_P07_l301 from '@/views/personalLoan/PF_P07_l301.vue';
import PF_P07_l004_001 from '@/views/personalLoan/PF_P07_l004_001.vue';
import PF_P07_l004_002 from '@/views/personalLoan/PF_P07_l004_002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PF_P07_l001,
    PF_P07_l002,
    PF_P07_l003,
    PF_P07_l101,
    PF_P07_l301,
    PF_P07_l004_001,
    PF_P07_l004_002,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          주민 등록법 안내 팝업<br />PF_P07_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          소득정보 자동제출 팝업<br />PF_P07_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          월납입금 조회<br />PF_P07_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          약관보기 팝업<br />PF_P07_l101
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          대출 전 주요 체크포인트 팝업<br />PF_P07_l301
        </BasicButton>
      </ButtonListItem>
      <!-- S: 240524 수정 -->
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          금융취약 소비자 우선설명 팝업<br />PF_P07_l004_001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          스탁론 약관<br />PF_P07_l004_002
        </BasicButton>
      </ButtonListItem>
      <!-- // E: 240524 수정 -->
    </ButtonList>

    <PF_P07_l001 ref="layer001" />
    <PF_P07_l002 ref="layer002" />
    <PF_P07_l003 ref="layer003" />
    <PF_P07_l101 ref="layer004" />
    <PF_P07_l301 ref="layer005" />
    <PF_P07_l004_001 ref="layer006" />
    <PF_P07_l004_002 ref="layer007" />
  </PageContents>
</template>
