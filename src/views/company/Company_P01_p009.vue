<script>
// Company_P01_p009
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
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
      <PageTitle>하나금융그룹</PageTitle>
    </PageHead>

    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="Company_P01_p009_001">비전과 미션</NavTabButton>
        <NavTabButton link="Company_P01_p009_002">핵심가치</NavTabButton>
        <NavTabButton link="Company_P01_p009_003">관계사</NavTabButton>
      </NavTab>

      <!-- S: 240516 수정 -->
      <!-- 비전과 미션 -->
      <UiTabPanel name="Company_P01_p009_001">
        <section class="section01">
          <div :class="$style['image-view']">
            <img src="@/assets/images/contents/company-1.png" alt="" />
          </div>
          <div class="content_wrap">
            <!-- 미션 -->
            <div class="content_box mission">
              <div class="content_title">
                <p class="title">미션</p>
              </div>
              <div class="content_desc">
                <picture class="mission_img01">
                  <img src="@/assets/images/contents/mission-1.png" alt="" />
                </picture>
                <picture class="mission_img02">
                  <img src="@/assets/images/contents/mission-2.png" alt="" />
                </picture>
                <p class="desc">
                  하나금융그룹의 미션은 시대적 요구와 변화에 적극적으로 동참하며
                  기업의 사회적 책임을다하겠다는 의지의 선언입니다.
                </p>
                <p class="desc">
                  하나금융그룹은 보다 나은 사회를 만들기 위해, 함께 노력하는
                  모든 이해관계자가 성장할 수 있는 활동을 지원하고, 지속
                  가능한<br />
                  성장과 사회적 책임을 균형 있게 이루어 나가는 ‘행복한 성장’을
                  추구합니다.
                </p>
                <p class="desc">
                  지금껏 그래왔듯이 하나금융그룹은 본연의 역할을 충실히
                  수행하면서 모든 이해관계자들과는 성장 이익을 함께 나누고
                  금융을 통한<br />
                  공유가치 창출을 통해 사회구성원들의 행복 추구에 적극 동참할
                  것입니다.
                </p>
              </div>
            </div>
            <!-- // 미션 -->

            <!-- 2030 비전 -->
            <div class="content_box vision">
              <div class="content_title">
                <p class="title">2030 비전</p>
              </div>
              <div class="content_desc">
                <div class="sub_title_wrap">
                  <p class="sub_title">
                    하나로 연결된 모두의 금융<br />
                    All Connected in Hana Finance
                  </p>
                  <p class="desc">
                    하나만의 혁신적인 플랫폼을 통해 모든 사람이 마음껏 금융을
                    즐기고 신뢰를 바탕으로 금융의 새로운 가치를 창출하자는
                    의미를<br />
                    담고 있습니다.
                  </p>
                  <p class="desc">
                    '하나'만의 방식으로 '연결'하여 '모두'가 함께 누리게 될 금융
                    그 이상의 '금융'
                  </p>
                  <p class="desc">
                    새로운 서비스와 인재들을 연결해 진화된 금융 세상을
                    실현시키는 하나의 노력이 시작됩니다.
                  </p>
                </div>
                <div class="group">
                  <p class="title">하나로</p>
                  <p class="desc">
                    빠르고 과감한 도전정신을 기반으로 변화를 주도하며 디지털
                    시대에 누구에게나 쉽고 편리한 새로운 경험을 제공하고 올바른
                    금융을<br />실천하겠다는 신뢰와 혁신의 의지를 나타냅니다.
                  </p>
                  <p class="desc">
                    쉽고 편리한 서비스, 새롭고 차별화된 손님 경험, 지속 가능하고
                    신뢰할 수 있는 가치를 하나만의 방식으로 실현해 나갈
                    것입니다.
                  </p>
                  <picture class="vision_img01">
                    <img src="@/assets/images/contents/vision-1.png" alt="" />
                  </picture>
                </div>

                <div class="group">
                  <p class="title">연결된</p>
                  <p class="desc">
                    언제, 어디서나, 누구에게나 함께 연결되고, 현재와 미래를
                    이어주는, 금융을 넘어 모두가 필요로 하는 가치를 맺어주는
                    것을 의미합니다.
                  </p>
                  <p class="desc">
                    디지털 금융 혁신을 통해, 한층 더 진화된 금융 플랫폼을
                    구현하여 언제/어디서나/누구나 필요로 하는 금융서비스를
                    제공하여 새로운 세상을 만들어 나간다는 하나금융그룹의
                    다짐입니다.
                  </p>
                  <picture class="vision_img02">
                    <img src="@/assets/images/contents/vision-2.png" alt="" />
                  </picture>
                </div>

                <div class="group">
                  <p class="title">모두의 금융</p>
                  <p class="desc">
                    언제, 어디서나, 누구에게나 함께 연결되고, 현재와 미래를
                    이어주는, 금융을 넘어 모두가 필요로 하는 가치를 맺어주는
                    것을 의미합니다.
                  </p>
                  <p class="desc">
                    디지털 금융 혁신을 통해, 한층 더 진화된 금융 플랫폼을
                    구현하여 언제/어디서나/누구나 필요로 하는 금융서비스를
                    제공하여 새로운 세상을 만들어 나간다는 하나금융그룹의
                    다짐입니다.
                  </p>
                  <picture class="vision_img03">
                    <img src="@/assets/images/contents/vision-3.png" alt="" />
                  </picture>
                </div>
                <div class="desc_wrap">
                  <p class="desc">
                    하나금융그룹은 1971년 창립 이래 변화무쌍한 전략과 적극적인
                    사업모델 전환으로 시장 변화에 따른 무수한 경영 위기들을
                    극복하여<br />국내 선도 금융 그룹으로 자리매김하였으며, 최근
                    금융 사업을 둘러싼 대내외 환경의 급격한 변화에 적극적이고
                    효과적으로 대응하기 위해<br />
                    새로운 비전과 전략목표를 수립하게 되었습니다.
                  </p>
                  <p class="desc">
                    하나금융그룹의 비전은 1. 하나만의 방식으로 2.
                    시공/미래/가치를 연결하여 3. 모두가 함께 누리게 될 금융 그
                    이상의 금융의 의미를<br />
                    담았습니다. 이를 통해 혁신적인 플랫폼으로 모든 사람들 이
                    마음껏 금융을 즐기고, 신뢰를 바탕으로 한 금융의 새로운
                    가치를<br />
                    창출해 나아가고자 합니다.
                  </p>
                  <p class="desc">
                    손님 중심 미래형 혁신 사업모델을 기반으로 단순 성장 중심이
                    아닌 가치 중심 도약을 추구하여 손님, 주주, 사회와 함께
                    대한민국을 넘어<br />
                    아시아 No.1 금융그룹이 될 수 있도록 노력할 것입니다.
                  </p>
                </div>
              </div>
            </div>
            <!-- // 2030 비전 -->

            <!-- 전략목표 -->
            <div class="content_box value">
              <div class="content_title">
                <p class="title">전략목표</p>
              </div>
              <div class="content_desc">
                <div class="group">
                  <p class="title"><span>O.N.E.</span> value 2030</p>
                  <picture class="value_img01">
                    <img src="@/assets/images/contents/value-1.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
            <!-- // 전략목표 -->
          </div>
        </section>
      </UiTabPanel>
      <!-- // 비전과 미션 -->

      <!-- 핵심가치 -->
      <UiTabPanel name="Company_P01_p009_002">
        <section class="section02">
          <h3 class="text-big-1 row-margin-contents-group">
            POWER on Integrity
          </h3>
          <p class="text-title-2">
            <strong>하나금융그룹</strong>은 하나인만의 생각하는 방식, 창조적이고
            강력한 기업문화를 가지고 있습니다.<br />
            하나인들이 공유하고 실천하는 핵심가치는 기업 활동에 있어서
            가치판단과 행동의 기준이 되는 가장 소중한 무형자산입니다.
          </p>

          <div :class="[$style['image-view'], 'row-margin-block-group']">
            <img src="@/assets/images/contents/company-2.png" alt="" />
          </div>
        </section>
      </UiTabPanel>
      <!-- // 핵심가치 -->

      <!-- 관계사 -->
      <UiTabPanel name="Company_P01_p009_003">
        <section class="section03">
          <h2 class="hanaFG_logo">
            <img src="@/assets/images/contents/hanaFG_logo.png" alt="" />
          </h2>
          <p class="desc">
            * 백분율은 모회사가 보유한 해당 자회사의 지분율입니다. (2023년 12월
            31일 기준)
          </p>
          <div :class="$style['image-view']">
            <img src="@/assets/images/contents/company-3.png" alt="" />
          </div>
          <div class="ratio_wrap">
            <ol>
              <li>1) 지분율 : 하나금융티아이 95.1%, 하나캐피탈 4.9%</li>
              <li>2) 지분율 : 하나캐피탈 55%, 인도네시아KEB하나은행 30%</li>
              <li>3) 지분율 : 하나캐피탈 75%, 하나은행 25%</li>
            </ol>
          </div>
        </section>
      </UiTabPanel>
      <!-- // 관계사 -->
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P01_p009.scss';
</style>

<style lang="scss" scoped>
/* 비전과 미션 */
.section01 {
  .content_wrap {
    margin-top: 100px;

    .content_box {
      display: flex;
      justify-content: space-between;

      .content_title {
        align-self: start;
        position: sticky;
        position: -webkit-sticky;
        top: 164px;
        width: 322px;

        .title {
          font-size: 24px;
          font-weight: 700;
          padding-right: 40px;
          word-break: keep-all;
          margin: 0;
        }
      }
      .content_desc {
        width: calc(100% - 322px);

        picture {
          img {
            display: block;
          }
        }
        .mission_img02 img {
          margin: 80px auto 60px;
        }
      }

      &.mission {
        .content_desc {
          .desc:nth-of-type(1) {
            border-top: 1px solid #e0e0e0;
            padding-top: 60px;
            margin-top: 0;
          }
        }
      }

      &.vision {
        .content_desc {
          .sub_title_wrap {
            &:after {
              content: '';
              display: block;
              margin: 60px auto 40px;
              height: 1px;
              background: #e0e0e0;
            }

            .sub_title {
              font-weight: 700;
              color: #00a69e;
              margin: 0;
            }
          }

          .group {
            margin-top: 80px;

            &:nth-of-type(3) {
              margin-top: 140px;
            }

            .title {
              font-weight: 700;
            }
            .vision_img01 {
              img {
                margin: 40px auto 60px;
              }
            }
            .vision_img02 {
              img {
                margin: 40px auto 0;
              }
            }
            .vision_img03 {
              img {
                margin: 40px auto 60px;
              }
            }
          }
          .desc_wrap {
            &:before {
              content: '';
              display: block;
              height: 1px;
              background: #e0e0e0;
              margin-bottom: 40px;
            }
          }
        }
      }

      &.value {
        .group {
          .title {
            font-weight: 700;
            span {
              color: #e56267;
            }
          }
          .value_img01 {
            img {
              margin-top: 40px;
            }
          }
        }
      }
    }
    .content_box + .content_box {
      margin-top: 160px;
    }
  }
}
/* // 비전과 미션 */

/* 관계사 */
.section03 {
  .hanaFG_logo {
  }
  .desc {
    margin: 24px 0 12px;
    text-align: right;
    font-size: 14px;
    color: #8f8f8f;
  }
  .ratio_wrap {
    margin-top: 40px;

    ol {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 14px;
        color: #757575;
        line-height: 21px;
      }
    }
  }
}
/* // 관계사 */
</style>

<!-- E: 240516 수정 -->
