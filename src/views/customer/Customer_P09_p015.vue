<script>
// Customer_P09_p015
import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IconImgColor from '@/assets/images/icon/img-color.svg?component';
import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageMainText,
    IconImgColor,
    IconDownloadSmall,
    TextButton,
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
            text: '윤리경영',
          },
          {
            text: '인권선언문',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>비대면 금융사고 책임분담기준 대고객 안내문</PageTitle>
      <PageMainText
        :classNames="{
          wrap: 'text-title-2 font-weight-regular',
        }"
      >
        2024년 12월 11일 금융감독원과 제2금융권은 비대면 금융사고 예방 노력
        이행을 상호 약속하는 협약을 체결하였습니다.<br />
        협약에 의하여 캐피탈사는 비대면 금융사고가 발생하여 소비자에게 금전적
        피해가 발생하는 경우 「비대면 금융사고 책임분담기준」에 따라<br />
        금융회사의 예방 노력 수준과 이용자의 과실 정도를 종합적으로 고려하여
        합리적인 범위 내에서 손해를 배상합니다.<br />
        다만 경우에 따라 캐피탈사의 손해배상책임이 없을 수도 있습니다.
      </PageMainText>
    </PageHead>

    <!-- <BasicHr type="contents" theme="quaternary" /> -->

    <div :class="[$style['section-group']]">
      <h2 class="text-big-3 row-margin-contents">적용 및 제외 대상</h2>
      <div :class="$style['section-group__list']">
        <div :class="$style['section-group__item']">
          <section>
            <h3 class="text-title-1 row-margin-contents">적용대상</h3>
            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>사고 유형</th>
                    <th>관계 법령(기준)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>접근매체* 위·변조 사고<br />* 인증서, ID/PW 등</td>
                    <td>「전자금융거래법」 제9조제1항제1호</td>
                  </tr>
                  <tr>
                    <td>
                      전자적 장치 또는 정보통신망에 침입하여 거짓이나 그 밖의
                      부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고
                    </td>
                    <td>「전자금융거래법」 제9조제1항제3호</td>
                  </tr>
                  <tr>
                    <td>
                      (제3자가) 개인정보를 알아내어 대출 등을 실행하여 발생한
                      사고
                    </td>
                    <td>
                      「전기통신기본법」 제2조제1호에 따른 전기통신을 이용하여
                      기망·공갈함으로써 개인정보를 알아내어 발생한 전자금융거래
                      사고에 해당함과 동시에 「전자금융거래법」 제9조제1항제1호
                      또는 제3호에 해당하는 전자금융거래 사고
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div :class="$style['section-group__item']">
          <section class="section-margin">
            <h3 class="text-title-1 row-margin-contents">적용 제외 대상</h3>
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  이용자 본인이 직접 거래지시한 금융거래(가족 사칭, 협박,
                  대출사기 등 제3자의 지시에 의한 금융거래 포함)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  가족 또는 지인에 의한 거래
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  이용자가 접근매체를 양도·양수하거나 질권을 설정하는 등
                  「전자금융거래법」 제6조제3항을 위반한 금융거래
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  법인인 이용자의 기관 내지는 피용자로서 법인을 위한
                  전자금융거래
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  재화의 공급을 가장한 상거래로서 이용자 본인의 의지로
                  신청·계약한 금융거래*<br />
                  <span class="addTxt text-body-5 color-gray-tertiary"
                    >* 물품대금 사기, 물품 하자 및 계약 불이행 사기, 중고거래
                    사기, 인터넷 쇼핑몰 사기 등</span
                  >
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  용역의 제공을 가장한 거래로서 이용자 본인의 의지로 신청·계약한
                  금융거래*<br />
                  <span class="addTxt text-body-5 color-gray-tertiary"
                    >* 알선 및 중개행위 수수료 빙자 관련
                    사기(자동차/부동산/골동품 중개 등), 인터넷 게임아이템 사기,
                    사이버 경매 사기, 사이버 주식 사기, 인터넷 취업 사기
                    등</span
                  >
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  불법적이거나 비정상적인 재화의 공급 또는 용역의 제공 등과
                  관련된 금융거래*<br />
                  <span class="addTxt text-body-5 color-gray-tertiary"
                    >* 몸캠 피싱, 로맨스 피싱, 조건만남 등</span
                  >
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  영업점 창구(직원)을 통한 거래 등 대면 금융거래
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  캐피탈사의 보이스피싱 의심거래 감지 등에 따라 피해 예방 안내를
                  했음에도 불구하고 피해자가 정상 거래를 주장한 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  본 사고 발생 이전에 사고 발생 금융회사에서
                  「전기통신금융사기피해 방지 및 피해금 환급에 관한 특별법」에
                  따른 피해구제 신청(환급 포함)<br />
                  또는 캐피탈사에서 「전자금융거래법」에 따른 전자금융거래 사고
                  배상 신청(배상금 수령 포함)을 한 적이 있는 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  「여신전문금융업법」제2조제1호에 따른 시설대여 및 제13호에
                  따른 할부금융과 관련된 금융거래. 단, 금융거래 과정에서
                  모집인,<br />
                  TM 등과 직접 대면·의사소통 절차가 수반되지 않는 비대면
                  금융거래는 포함
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  사실관계 확인 결과 전자금융사고로 보기 어려운 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  소송 등 법적 분쟁이 진행 중이거나 판결이 확정된 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  이용자와 캐피탈사 사이에 민법 제731조 소정의 화해(합의)가 이미
                  성립된 경우
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  수사기관 등의 수사를 통해 전자금융사고가 아닌 경우로 판명된
                  경우
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div :class="$style['section-group__item']">
          <section class="section-margin">
            <h3 class="text-title-1 row-margin-contents">신청대상 및 접수처</h3>
            <p class="font-weight-light color-gray-secondary">
              신청대상은 2025년 1월 1일 이후 비대면 금융사고가 발생한
              개인(개인사업자)만 해당됩니다.<br />
              법인인 이용자의 기관 내지는 피용자로서 법인을 위하여 이용하는 자는
              제외됩니다.<br />
              신청방법은 비대면 금융사고 발생한 각 캐피탈사 고객센터로
              문의하세요.
            </p>
            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>금융회사</th>
                    <th>전화번호</th>
                    <th>금융회사</th>
                    <th>전화번호</th>
                    <th>금융회사</th>
                    <th>전화번호</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BNK캐피탈</td>
                    <td>1577-2280</td>
                    <td>IBK캐피탈</td>
                    <td>1577-1885</td>
                    <td>IM캐피탈</td>
                    <td>1566-0050</td>
                  </tr>
                  <tr>
                    <td>JB우리캐피탈</td>
                    <td>1688-2300</td>
                    <td>KB캐피탈</td>
                    <td>1544-1200</td>
                    <td>NH농협캐피탈</td>
                    <td>1644-3700</td>
                  </tr>
                  <tr>
                    <td>RCI파이낸셜</td>
                    <td>1588-6750</td>
                    <td>롯데캐피탈</td>
                    <td>1577-7700</td>
                    <td>미래에셋캐피탈</td>
                    <td>1811-6800</td>
                  </tr>
                  <tr>
                    <td>오케이캐피탈</td>
                    <td>1577-5001</td>
                    <td>우리금융캐피탈</td>
                    <td>1544-8600</td>
                    <td>케이카캐피탈</td>
                    <td>1566-2860</td>
                  </tr>
                  <tr>
                    <td>하나캐피탈</td>
                    <td>1800-1110</td>
                    <td>한국캐피탈</td>
                    <td>1522-2299</td>
                    <td>한국투자캐피탈</td>
                    <td>1670-0800</td>
                  </tr>
                  <tr>
                    <td>현대캐피탈</td>
                    <td>1588-2114</td>
                    <td>현대커머셜</td>
                    <td>1577-5200</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p
              class="warn-txt text-body-3 color-gray row-margin-contents-small"
            >
              단, 신청은 비대면 금융사고 발생사실을 안 날로부터 3년 이내에만
              가능합니다.
            </p>
          </section>
        </div>
        <div :class="$style['section-group__item']">
          <section class="section-margin">
            <h3 class="text-title-1 row-margin-contents row-margin-bottom-none">
              신청 시 제출서류 안내
            </h3>
            <p class="font-weight-light color-gray-secondary">
              신청 시 제출하셔야 할 서류는 다음과 같습니다. 구체적인 사안에 따라
              심사과정에서 추가 서류 제출을 요청할 수 있습니다.
            </p>
            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>서류 안내</th>
                    <th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      각 캐피탈사의 신청서(경위서·문진표 포함) 및 개인정보
                      동의서 등
                    </td>
                    <td>캐피탈사 서식</td>
                  </tr>
                  <tr>
                    <td>신청인(이용자)의 실명확인증표</td>
                    <td>고객 제출서류</td>
                  </tr>
                  <tr>
                    <td>
                      사건사고사실확인원 및 진술조서 등 수사기관 자료<br />
                      (결정문 또는 처분서 등 포함)
                    </td>
                    <td>고객 제출서류</td>
                  </tr>
                  <tr>
                    <td>
                      가족관계 증명서류(가족관계증명서 및 주민등록등본 등)
                    </td>
                    <td>(캐피탈사의 요청 시)</td>
                  </tr>
                  <tr>
                    <td>
                      그 외 캐피탈사가 사고조사를 위하여 필요하다고 판단하는
                      서류
                    </td>
                    <td>(캐피탈사의 요청 시)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div :class="$style['section-group__item']">
          <section class="section-margin">
            <h3 class="text-title-1 row-margin-contents">유의사항</h3>
            <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  캐피탈사의 예방 노력 수준과 이용자의 과실 정도를 종합적으로
                  고려하여 합리적인 범위 내에서 분담금액을 결정하며, 경우에 따라
                  캐피탈사의 책임분담이 발생하지 않을 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  조사 결과 확정 시까지 수개월이 소요될 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  사고피해가 여러 캐피탈사에 걸쳐서 발생한 경우, 각각의 대상
                  캐피탈사에 모두 접수하여야 합니다.<br />(예시 : A·B·C 캐피탈사
                  모두에서 피해가 발생한 경우, A·B·C 캐피탈사에 각각 개별접수)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  캐피탈사는 합리적인 판단을 위하여 자료의 보완을 요구할 수
                  있으며, 이용자가 이에 성실하게 응하지 않는 경우 신청을 종결
                  처리할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-1',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  수사 및 조사과정에서 거짓이나 허위 주장이 확인되면 민·형사상
                  처벌이나 불이익을 받을 수 있음을 유의하시기 바랍니다.
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div :class="$style['section-group__item']">
          <section class="section-margin">
            <h3 class="text-title-1 row-margin-contents">첨부파일</h3>
            <!-- Case : 파일 첨부 후 -->
            <div
              :class="[
                $style['upload-file'],
                $style['upload-file--inside'],
                $style['upload-file--child'],
              ]"
            >
              <ul :class="$style['upload-file__list']">
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div
                    :class="[
                      $style['upload-file__content'],
                      'upload-file-flex',
                    ]"
                  >
                    <div :class="$style['upload-file__name']">
                      추가 피해 방지를 위한 후속조치 안내
                    </div>
                    <TextButton
                      iconSize="large"
                      textSize="regular"
                      tagName="a"
                      href="/foo/bar.pdf"
                      download
                    >
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </TextButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div
                    :class="[
                      $style['upload-file__content'],
                      'upload-file-flex',
                    ]"
                  >
                    <div :class="$style['upload-file__name']">
                      비대면 금융사고 책임분담 관련 주요 Q&A
                    </div>
                    <TextButton
                      iconSize="large"
                      textSize="regular"
                      tagName="a"
                      href="/foo/bar.pdf"
                      download
                    >
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </TextButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div
                    :class="[
                      $style['upload-file__content'],
                      'upload-file-flex',
                    ]"
                  >
                    <div :class="$style['upload-file__name']">
                      비대면 금융사고 조사 신청서
                    </div>
                    <TextButton
                      iconSize="large"
                      textSize="regular"
                      tagName="a"
                      href="/foo/bar.pdf"
                      download
                    >
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </TextButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div
                    :class="[
                      $style['upload-file__content'],
                      'upload-file-flex',
                    ]"
                  >
                    <div :class="$style['upload-file__name']">
                      개인(신용)정보 수집, 이용, 제공 동의서
                    </div>
                    <TextButton
                      iconSize="large"
                      textSize="regular"
                      tagName="a"
                      href="/foo/bar.pdf"
                      download
                    >
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </TextButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div
                    :class="[
                      $style['upload-file__content'],
                      'upload-file-flex',
                    ]"
                  >
                    <div :class="$style['upload-file__name']">
                      비대면 금융사고 문진표 (Check-List)
                    </div>
                    <TextButton
                      iconSize="large"
                      textSize="regular"
                      tagName="a"
                      href="/foo/bar.pdf"
                      download
                    >
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </TextButton>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //Case : 파일 첨부 후 -->
          </section>
        </div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/Company_P02_p003.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
.section-margin {
  margin-top: 60px;
}
.warn-txt {
  display: flex;
  align-items: center;
  gap: 6px;
  &::before {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='17' fill='none'%3E%3Cpath fill='%239E9E9E' d='M14.67 8.5a6.67 6.67 0 1 1-13.34 0 6.67 6.67 0 0 1 13.34 0Z'/%3E%3Cpath fill='%23fff' d='M7.33 5.17a.67.67 0 0 1 1.34 0v4a.67.67 0 0 1-1.34 0v-4Zm-.16 6.5a.83.83 0 1 1 1.66 0 .83.83 0 0 1-1.66 0Z'/%3E%3C/svg%3E");
    width: 16px;
    height: 16px;
  }
}
.upload-file-flex {
  display: flex;
  align-items: center;
  margin-top: 0;
  gap: 10px;
}
</style>
