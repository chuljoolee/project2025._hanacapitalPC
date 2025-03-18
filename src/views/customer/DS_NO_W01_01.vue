<script>
// DS_NO_W01_01
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

import LocationBar from '@/components/ui/layout/LocationBar.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
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

    return {};
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
            to: '/',
          },
          {
            text: '내정보관리',
            to: '/',
          },
          {
            text: '회원 탈퇴',
            // to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle
        >통지문서조회를 위해<br />
        본인인증이 필요합니다
      </PageTitle>
    </PageHead>

    <h2 class="text-title-1">본인인증</h2>
    <div class="row-margin-contents row-margin-bottom-none">
      <BoxCheckList :wrap="true" :col="3">
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList004"
            id="testBoxCheckList004_001"
          >
            <BoxCheckLabel>휴대폰</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList004"
            id="testBoxCheckList004_002"
          >
            <BoxCheckLabel>공동인증서</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="testBoxCheckList004"
            id="testBoxCheckList004_003"
          >
            <BoxCheckLabel>신용카드</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </div>
    <div class="row-margin-contents row-margin-bottom-none bg-gray">
      본인인증 공통 모듈 사용
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P16_p002.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" scoped>
.bg-gray {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 436px;
  background: #f5f5f5;
  font-size: 20px;
  color: #000;
  font-weight: bold;
}
</style>
