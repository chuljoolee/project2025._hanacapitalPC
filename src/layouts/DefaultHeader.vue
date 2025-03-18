<script>
import HeaderBase from '@/layouts/HeaderBase.vue';

export default {
  components: {
    HeaderBase,
  },
  setup() {
    const nav = [
      {
        name: 'auto',
        text: '자동차',
        to: '/auto/Main_P01_p002',
        child: [
          {
            name: 'auto001',
            text: '다이렉트 장기렌터카',
            to: '/auto/AF_P01_p001',
          },
          {
            name: 'auto002',
            text: '다이렉트 오토리스',
            to: '/auto/AF_P02_p001',
          },
          {
            name: 'auto003',
            text: '오토할부',
            to: '/auto/AF_P03_p001',
          },
          {
            name: 'auto004',
            text: '오토론',
            to: '/auto/AF_P04_p001',
          },
          {
            name: 'auto005',
            text: '중고차 오토론',
            to: '/auto/AF_P06_p001',
          },
          {
            name: 'auto006',
            text: '오토승계',
            to: '/auto/AF_P07_p001',
          },
        ],
      },
      {
        name: 'personalLoan',
        text: '개인대출',
        to: '/personal-loan/Main_P01_p003',
        child: [
          {
            name: 'personalLoan001',
            text: 'e하나신용대출',
            to: '/personal-loan/PF_P01_p001',
          },
          {
            name: 'personalLoan002',
            text: '행복아파트론',
            to: '/personal-loan/PF_P02_p001',
          },
          {
            name: 'personalLoan003',
            text: '아파트론',
            to: '/personal-loan/PF_P03_p001',
          },
          {
            name: 'personalLoan004',
            text: '원큐자동차담보대출',
            to: '/personal-loan/PF_P04_p001',
          },
          {
            name: 'personalLoan005',
            text: '우수고객추가대출',
            to: '/personal-loan/PF_P05_p001',
          },
          {
            name: 'personalLoan006',
            text: 'e임대주택론',
            to: '/personal-loan/PF_P06_p001',
          },
          {
            name: 'personalLoan007',
            text: '사업자주택담보대출',
            to: '/personal-loan/PF_P09_p001',
          },
          {
            name: 'personalLoan008',
            text: '스탁론',
            to: '/personal-loan/PF_P07_p000',
          },
        ],
      },
      {
        name: 'business',
        text: '의료기·설비',
        to: '/business/BF_P00_main',
        child: [
          {
            name: 'business001',
            text: '일반리스',
            to: '/business/BF_P05_p001',
          },
          {
            name: 'business002',
            text: '일반할부',
            to: '/business/BF_P06_p001',
          },
          {
            name: 'business003',
            text: '내구재할부',
            to: '/personal-loan/PF_P10_p001',
          },
        ],
      },
      {
        name: 'onlineBranch',
        text: '마이페이지',
        to: '/online-branch/MI_P00_p001',
        child: [
          {
            name: 'onlineBranch001',
            text: '진행상태조회',
            to: '/additional-service/My_P02_p002',
          },
          {
            name: 'onlineBranch002',
            text: '계약정보',
            to: '/online-branch/MI_P00_p002',
          },
          {
            name: 'onlineBranch003',
            text: '내정보관리',
            to: '/online-branch/MI_P01_p000',
          },
          {
            name: 'onlineBranch004',
            text: '온라인청구서',
            to: '/online-branch/MI_P06_p001',
          },
          {
            name: 'onlineBranch005',
            text: '증명서 조회/발급',
            to: '/online-branch/MI_P07_p001',
          },
          {
            name: 'onlineBranch006',
            text: '서류등록',
            to: '/additional-service/My_P05_p011',
          },
        ],
      },
      /* 250122 고객센터 메뉴 삭제 */
      // {
      //   name: 'customer',
      //   text: '고객센터',
      //   to: '/customer/Customer_P00_p001',
      //   child: [
      //     {
      //       name: 'customer001',
      //       text: 'FAQ',
      //       to: '/customer/Customer_P01_p001',
      //     },
      //     {
      //       name: 'customer002',
      //       text: '고객상담',
      //       to: '/customer/Customer_P02_p001',
      //     },
      //     {
      //       name: 'customer003',
      //       text: '공지사항',
      //       to: '/customer/Customer_P03_p001',
      //     },
      //     {
      //       name: 'customer004',
      //       text: '이벤트',
      //       to: '/customer/Customer_P04_p001',
      //     },
      //     {
      //       name: 'customer005',
      //       text: '개인정보이용 현황',
      //       to: '/customer/Customer_P14_p001',
      //     },
      //     {
      //       name: 'customer006',
      //       text: '금융소비자보호',
      //       to: '/customer/Customer_P09_p001',
      //     },
      //     {
      //       name: 'customer007',
      //       text: '전자민원접수',
      //       to: '/customer/Customer_P15_p001',
      //     },
      //     {
      //       name: 'customer008',
      //       text: '그룹사간 고객정보 제공내역 조회',
      //       to: '/customer/Customer_P16_p001',
      //     },
      //     {
      //       name: 'customer009',
      //       text: '인증센터',
      //       to: '/customer/Customer_P11_p001',
      //     },
      //     {
      //       name: 'customer010',
      //       text: '대출계산기',
      //       type: 'button',
      //       click: () => {
      //         alert('대출계산기 클릭');
      //       },
      //     },
      //     {
      //       name: 'customer011',
      //       text: '전화상담신청',
      //       to: '/additional-service/Etc_P01_p001',
      //     },
      //   ],
      // },
      /* // 250122 고객센터 메뉴 삭제 */
    ];

    return {
      nav,
    };
  },
};
</script>

<template>
  <HeaderBase :nav="nav" />
</template>
