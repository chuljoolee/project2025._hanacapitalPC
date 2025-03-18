<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Crm_Pop_p001 from '@/views/crm/Crm_Pop_p001.vue';
import Crm_Pop_p002 from '@/views/crm/Crm_Pop_p002.vue';
import Crm_Pop_p003 from '@/views/crm/Crm_Pop_p003.vue';
import Crm_Pop_p004 from '@/views/crm/Crm_Pop_p004.vue';
import Crm_Pop_p005 from '@/views/crm/Crm_Pop_p005.vue';
import Crm_Pop_p006 from '@/views/crm/Crm_Pop_p006.vue';
import Crm_Pop_p007 from '@/views/crm/Crm_Pop_p007.vue';
import Crm_Pop_p008 from '@/views/crm/Crm_Pop_p008.vue';
import Crm_Pop_p009 from '@/views/crm/Crm_Pop_p009.vue';
import Crm_Pop_p010 from '@/views/crm/Crm_Pop_p010.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    Crm_Pop_p001,
    Crm_Pop_p002,
    Crm_Pop_p003,
    Crm_Pop_p004,
    Crm_Pop_p005,
    Crm_Pop_p006,
    Crm_Pop_p007,
    Crm_Pop_p008,
    Crm_Pop_p009,
    Crm_Pop_p010,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);

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
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer010,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
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
          상담원 변경<br />Crm_Pop_p001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          상담 이력<br />Crm_Pop_p002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          운영자 추가<br />Crm_Pop_p003
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          제휴사 추가<br />Crm_Pop_p004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">
          상담원 추가<br />Crm_Pop_p005
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">
          관리자 변경<br />Crm_Pop_p006
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer007Open">
          삭제 버튼 클릭 후<br />관리자 체크 후<br />Crm_Pop_p007
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer008Open">
          삭제 버튼 클릭 후<br />‘확인’ 클릭 시<br />Crm_Pop_p008
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer009Open">
          삭제 버튼 클릭 후<br />상담원 체크 후 삭제 클릭시 <br />Crm_Pop_p009
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer010Open">
          삭제 버튼 클릭 후<br />상담원 체크 후 삭제 클릭시 <br />Crm_Pop_p010
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Crm_Pop_p001 ref="layer001" />
    <Crm_Pop_p002 ref="layer002" />
    <Crm_Pop_p003 ref="layer003" />
    <Crm_Pop_p004 ref="layer004" />
    <Crm_Pop_p005 ref="layer005" />
    <Crm_Pop_p006 ref="layer006" />
    <Crm_Pop_p007 ref="layer007" />
    <Crm_Pop_p008 ref="layer008" />
    <Crm_Pop_p009 ref="layer009" />
    <Crm_Pop_p010 ref="layer010" />
  </PageContents>
</template>
