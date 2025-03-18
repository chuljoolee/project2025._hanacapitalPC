<script>
// LM_P001_p002_001
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
// import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    // IllustInfoText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '온라인지점',
          },
          {
            text: '계약정보',
          },
          {
            text: '만기후처리',
          },
          {
            text: '반환 신청',
            to: '/',
          },
        ]"
      />
    </template>

    <IllustInfo>
      <IllustObject type="complete" />
      <IllustInfoTitle
        >하나모기지론(주택담보대출)<br />
        한도ㆍ금리를 확인하세요</IllustInfoTitle
      >
    </IllustInfo>

    <div class="row-margin-block-small">
      <BasicBox>
        <KeyValue :wrap="false">
          <KeyValueItem>
            <KeyValueTitle>대출한도</KeyValueTitle>
            <KeyValueText>2억원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>6.5%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>신청대출기간</KeyValueTitle>
            <KeyValueText>30년</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
      <NoticeText style="margin-top: 20px"
        >해당 대출 조건은 소득 및 신청한도에 따라 변경될 수
        있습니다.</NoticeText
      >
    </div>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
