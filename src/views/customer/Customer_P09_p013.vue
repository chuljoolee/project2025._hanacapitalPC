<script>
// Customer_P09_p013
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';
import IconRightArrow from '@/assets/images/icon/right-arrow.svg?component';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconDownloadSmall,
    IconRightArrow,
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
            text: '금융소비자보호',
            to: '/',
          },
          {
            text: '금융소비자보호',
          },
          {
            text: '금융소비자보호 우수사례',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>금융소비자보호 우수사례</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div
          :class="[
            $style['board-detail__head-cell'],
            $style['board-detail__head-cell--title'],
          ]"
        >
          <h3 :class="$style['board-detail__title']">
            $제목 노출(글자수 제한 없음)$
          </h3>
        </div>
        <div :class="$style['board-detail__head-cell']">2024-07-16</div>
      </div>

      <section :class="$style['board-detail__contents']">
        $게시물 내용 노출(글자수 제한 없음)$
      </section>

      <!-- Case : 첨부 파일 없을시 비노출 -->
      <div :class="$style['board-detail__foot']">
        <div :class="$style['download-list']">
          <ul :class="$style['download-list__list']">
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 첨부 파일 없을시 비노출 -->
    </div>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/Customer_P09_p012"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P09_p013.scss';
</style>
