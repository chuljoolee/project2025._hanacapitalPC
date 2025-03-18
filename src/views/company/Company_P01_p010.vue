<script>
// Company_P01_p010
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
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
            text: '회사소개',
            to: '/',
          },
          {
            text: '하나금융그룹',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle
        >하나캐피탈 캐릭터
        <strong class="colorDeco">'별웅이'</strong></PageTitle
      >
      <p class="PageDesc">
        하나캐피탈의 새로운 캐릭터<br /><strong>‘별웅이’</strong>를소개합니다.
      </p>
    </PageHead>

    <section>
      <div class="character-wrap">
        <div class="character-img">
          <img src="@/assets/images/contents/character-1.png" alt="별웅이" />
        </div>
      </div>
      <div class="character-wrap">
        <p class="title">별웅이 응용동작</p>
        <div class="character-img">
          <img
            src="@/assets/images/contents/character-2.png"
            alt="별웅이 응용동작"
          />
        </div>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p009.scss';
</style>

<style lang="scss" scoped>
.colorDeco {
  color: #00a69e;
}
.PageDesc {
  text-align: center;
  margin: 0;
  font-size: 18px;

  strong {
    color: #00a69e;
    font-weight: 700;
  }
}

.character-wrap {
  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  .desc {
    color: #666;
    font-size: 18px;
    line-height: -0.02em;
    font-weight: 300;
    margin-top: 4px;
    margin: 0;

    strong {
      color: #00a69e;
      font-weight: 700;
    }
  }
  .character-img {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    margin-top: 24px;

    img {
      display: block;
      margin: 40px auto;
    }
  }
  & + & {
    margin-top: 80px;
  }
}
</style>
