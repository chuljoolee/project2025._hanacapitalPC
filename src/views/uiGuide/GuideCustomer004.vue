<!-- 철주차장님 작업 -->
<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
//import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

import Customer_P14_l002 from '@/views/customer/Customer_P14_l002.vue';
import Customer_P14_l003 from '@/views/customer/Customer_P14_l003.vue';
import Customer_P14_l004 from '@/views/customer/Customer_P14_l004.vue';
import Customer_P14_l005 from '@/views/customer/Customer_P14_l005.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    //AlertPopup,
    Customer_P14_l002,
    Customer_P14_l003,
    Customer_P14_l004,
    Customer_P14_l005,
  },
  setup() {
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);

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

    return {
      layer002,
      layer003,
      layer004,
      layer005,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
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
        <BasicButton @click="layer002Open">
          필수약관 미동의 시, 노출되는 알럿<br />
          Customer_P14_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          마케팅 동의 철회 확인 <br />
          Customer_P14_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          마케팅 처리 완료<br />Customer_P14_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          마케팅 철회값 미선택 <br />Customer_P14_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>
    <Customer_P14_l002 ref="layer002" />
    <Customer_P14_l003 ref="layer003" />
    <Customer_P14_l004 ref="layer004" />
    <Customer_P14_l005 ref="layer005" />
  </PageContents>
</template>
