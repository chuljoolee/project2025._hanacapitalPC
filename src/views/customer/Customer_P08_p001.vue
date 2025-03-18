<script>
// Customer_P08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    BasicSelect,
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
            text: '정책 및 약관',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>정책 및 약관</PageTitle>
    </PageHead>

    <BoxCheckList :wrap="true" col="4">
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_001"
          :defaultChecked="true"
        >
          <BoxCheckLabel>온라인 서비스 이용약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_002"
        >
          <BoxCheckLabel>휴대폰 인증약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_003"
        >
          <BoxCheckLabel>하나머니 서비스 이용약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_004"
        >
          <BoxCheckLabel>금융약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_005"
        >
          <BoxCheckLabel>개인정보 처리 방침</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_006"
        >
          <BoxCheckLabel>고객정보 취급방침</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_007"
        >
          <BoxCheckLabel>개인(신용)정보관리보호</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_008"
        >
          <BoxCheckLabel>위탁 · 제휴 현황</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_009"
        >
          <BoxCheckLabel>이메일주소 무단수집거부</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_010"
        >
          <BoxCheckLabel>하나RE 멤버십 약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_011"
        >
          <BoxCheckLabel>하나캐피탈 멤버십 약관</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_012"
        >
          <BoxCheckLabel>영상정보처리기기 운영 · 관리 방침</BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <!-- 241014 -->
      <BoxCheckListItem>
        <BoxCheck
          :minSide="true"
          name="Customer_P08_p001_document"
          id="Customer_P08_p001_document_013"
        >
          <BoxCheckLabel>상품약관 </BoxCheckLabel>
        </BoxCheck>
      </BoxCheckListItem>
      <!-- 241014 -->
    </BoxCheckList>

    <FormList
      :wrap="true"
      :classNames="{ wrap: 'row-margin-container-medium' }"
    >
      <FormListItem
        titleText="약관명"
        target="#Customer_P08_p001_name"
        :selectOnly="true"
        :disabled="true"
      >
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicSelect
              :options="[
                {
                  value: '1',
                  label: '온라인 서비스 이용약관',
                },
                {
                  value: '2',
                  label: '휴대폰 인증약관',
                },
                {
                  value: '3',
                  label: '하나머니 서비스 이용약관',
                },
                {
                  value: '4',
                  label: '금융약관',
                },
                {
                  value: '5',
                  label: '개인정보 처리 방침',
                },
                {
                  value: '6',
                  label: '고객정보 취급방침',
                },
                {
                  value: '7',
                  label: '개인(신용)정보관리보호',
                },
                {
                  value: '8',
                  label: '위탁 · 제휴 현황',
                },
                {
                  value: '9',
                  label: '이메일주소 무단수집거부',
                },
                {
                  value: '10',
                  label: '하나RE 멤버십 약관',
                },
                {
                  value: '11',
                  label: '하나캐피탈 멤버십 약관',
                },
                {
                  value: '12',
                  label: '영상정보처리기기 운영 · 관리 방침',
                },
                {
                  value: '13',
                  label: '상품약관',
                },
              ]"
              title="약관명"
              inputId="Customer_P08_p001_name"
              defaultValue="1"
              :disabled="true"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>

      <FormListItem
        titleText="시행일 이력"
        target="#Customer_P08_p001_date"
        :selectOnly="true"
      >
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicSelect
              :options="[
                {
                  value: '1',
                  label: '2022.10.25',
                },
                {
                  value: '2',
                  label: '2022.10.25',
                },
                {
                  value: '3',
                  label: '2022.10.25',
                },
                {
                  value: '4',
                  label: '2022.10.25',
                },
                {
                  value: '5',
                  label: '2022.10.25',
                },
                {
                  value: '6',
                  label: '2022.10.25',
                },
              ]"
              title="시행일 이력"
              inputId="Customer_P08_p001_date"
              defaultValue="1"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>

    <div :class="$style['detail']">
      <section>// 약관 상세 데이터 노출</section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P08_p001.scss';
</style>
