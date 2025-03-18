<script>
// Agent_P01_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>에이전트 메인<br />테스트 페이지입니다.</PageTitle>
    </PageHead>
    <div class="container main">
      <div class="flex-container main-container aifs">
        <div class="flex-container fw">
          <div class="title w100p">
            공지사항

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="flex-container fw">
          <div class="title w100p">
            교육정보

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex-container main-container aifs">
        <div class="flex-container fw">
          <div class="title w100p">
            업무절차

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex-container fw">
          <div class="title w100p">
            각종서식다운로드

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P01_test.scss';
</style>
