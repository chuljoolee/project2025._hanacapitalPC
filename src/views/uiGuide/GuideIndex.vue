<script>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const datas = () => [
  /*
  {
    depth1: '',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '', 
        path: '/',
        status: 'ing', // ing, partend, end, moding, confirm
        create: '2023.03.24',
        log: [
          {
            // { date: '2023.03.24', text: '' },
          }
        ],
      },
    ],
  },
  */
  {
    depth1: '2025 프레임아웃 작업리스트',
    datas: [
      {
        depth2: '프레임아웃 작업',
        depth3: '대출상담\nLM_P01_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.07.28',
            text: '빠른 직군 검색 버튼 추가',
          },
          {
            date: '2025.02.20',
            text: '버튼스타일 변경, roundstatus추가',
          },
        ],
      },
      {
        depth2: '',
        depth3: '한도금리 조회 결과\nLM_P01_p002_001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p002_001',
        status: 'end',
        create: '2025.02.20',
        log: [
          // {
          //   date: '2023.07.28',
          //   text: '빠른 직군 검색 버튼 추가',
          // },
        ],
      },
      {
        depth2: '',
        depth3: '한도금리 조회 결과-신청불가\nLM_P01_p002_002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p002_002',
        status: 'end',
        create: '2025.02.20',
        log: [
          // {
          //   date: '2023.07.28',
          //   text: '빠른 직군 검색 버튼 추가',
          // },
        ],
      },
      {
        depth2: '',
        depth3: '메인\nMain_P01_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/Main_P01_p003',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.18',
            text: '타이틀 및 상품 문구 수정, 순서 변경',
          },
          {
            date: '2023.10.16',
            text: '문구 전체 수정 및 사업자주택담보대출 아이콘 교체',
          },
          {
            date: '2025.02.20',
            text: '"하나모기지론" 상품추가',
          },
        ],
      },
      {
        depth2: '',
        depth3: '주택담보대출 상품 소개\nPF_P12_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P12_p001',
        status: 'end',
        create: '2025.02.25',
        log: [
          // {
          //   date: '2023.08.18',
          //   text: '타이틀 및 상품 문구 수정, 순서 변경',
          // },
        ],
      },
    ],
  },
  {
    depth1: '공통',
    datas: [
      {
        depth2: '로딩',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/loading-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.09.27',
            text: '모션 변경',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 1',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.07.19',
            text: '헤더 2뎁스 기능 추가',
          },
          {
            date: '2023.08.10',
            text: '헤더 사이트 타입 선택 메뉴 추가',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 2',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-002',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.07.19',
            text: '헤더 2뎁스 기능 추가',
          },
          {
            date: '2023.08.10',
            text: '헤더 사이트 타입 선택 메뉴 추가',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 3',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-003',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '헤더 2뎁스 기능 추가',
          },
          {
            date: '2023.08.10',
            text: '헤더 사이트 타입 선택 메뉴 추가',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 4',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-004',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '헤더 2뎁스 기능 추가',
          },
          {
            date: '2023.08.10',
            text: '헤더 사이트 타입 선택 메뉴 추가',
          },
        ],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 한개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 두개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '타이틀만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '텍스트만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-004',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2:
          '본인인증\nCommon_P00_p003\nCommon_P00_p004\nCommon_P00_p006\nCommon_P00_p007\nCommon_P00_p008\nCommon_P00_p016',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/identification/Common_P00_p003',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.08.30',
            text: '생년월일, 카드비밀번호 placeholder 추가',
          },
          {
            date: '2023.08.31',
            text: '인증번호 텍스트필드 수정',
          },
          {
            date: '2023.09.01',
            text: '카드비밀번호 placeholder 삭제',
          },
          {
            date: '2023.09.25',
            text: '생년월일 입력 전 빈 동그라미 보이는 기능 적용',
          },
          {
            date: '2023.10.05',
            text: '카드사, 약관동의, 휴대폰번호 항목, 안내문구 추가 및 카드유효기간, 비밀번호 항목 삭제',
          },
        ],
      },
      {
        depth2:
          '본인인증\nCommon_P00_p003\nCommon_P00_p004\nCommon_P00_p006\nCommon_P00_p007\nCommon_P00_p008\nCommon_P00_p016',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/common-001',
        status: 'end',
        create: '2023.10.05',
        log: [],
      },
      {
        depth2: '약관동의',
        depth3: '상세',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/clause-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.31',
            text: 'Common_P00_l001 타이틀 길어지면 말줄임 처리 및 내용 아이프레임 처리',
          },
        ],
      },
      /* s: 250122 추가 */
      {
        depth2: '검색결과_전체',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/Common_P11_p001',
        status: 'end',
        create: '2025.01.22',
        log: [],
      },
      {
        depth2: '검색결과_메뉴',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/Common_P11_p002',
        status: 'end',
        create: '2025.01.22',
        log: [],
      },
      {
        depth2: '검색결과_이벤트',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/Common_P11_p003',
        status: 'end',
        create: '2025.01.22',
        log: [],
      },
      {
        depth2: '검색결과_공지사항',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/Common_P11_p004',
        status: 'end',
        create: '2025.01.22',
        log: [],
      },
      {
        depth2: '검색결과_검색결과 없는 경우',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/Common_P11_p005',
        status: 'end',
        create: '2025.01.22',
        log: [],
      },
      /* e:// 250122 추가 */
      {
        depth2: '직장검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/search-workplace-001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '주소검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/search-address-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.09.21',
            text: 'Common_P00_l003 표준화 주소 없는 케이스 추가',
          },
        ],
      },
      {
        depth2: '대출계산기',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/loan-calculator-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.07.19',
            text: 'Common_P00_p009\n만기 일시상환 케이스 추가 및 대출기간 옵션 수정',
          },
        ],
      },
      {
        depth2: '안내팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/guide-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.07.21',
            text: '팝업추가\n- 접속대기 안내 팝업\n- 초과접속 안내 팝업',
          },
        ],
      },
      {
        depth2: '보안 프로그램 설치 안내\nCommon_P00_p017',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/Common_P00_p017',
        status: 'end',
        create: '2023.07.21',
        log: [
          {
            date: '2023.09.20',
            text: '서브타이틀 문구 수정 및 수동 설치 영역 삭제, 설치 버튼 위치 변경',
          },
        ],
      },
      {
        depth2: '앱 설치 안내\nCommon_P00_p012',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/redirect/Common_P00_p012',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.09.21',
            text: '서브타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '오류 안내\nCommon_P00_p013',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/error/Common_P00_p013',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '404 오류 안내\nCommon_P00_p018',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/error/Common_P00_p018',
        status: 'end',
        create: '2023.10.13',
        log: [],
      },
    ],
  },
  {
    depth1: '메인',
    datas: [
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/main-001',
        status: 'end',
        create: '2023.07.26',
        log: [
          {
            date: '2023.09.05',
            text: 'Main_P01_l001 슬라이드 기능 추가',
          },
        ],
      },
      {
        depth2: '홈\nMain_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/home',
        status: 'end',
        create: '2023.07.26',
        log: [
          {
            date: '2023.07.26',
            text: '아이디 로그인 버튼 클릭하여 로그인 후 메뉴 확인 가능',
          },
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.09.26',
            text: '로그인 영역 여백 조정\n자동차금융 영역 컨텐츠 구성 변경\n일반할부 아이콘 변경',
          },
          {
            date: '2023.10.12',
            text: '의료기설비 영역 아이콘 변경',
          },
          {
            date: '2023.10.16',
            text: '배너 교체 및 컨텐츠 문구 수정',
          },
          {
            date: '2023.10.17',
            text: '이벤트 배너 교체',
          },
          {
            date: '2023.10.18',
            text: '공동인증서 버튼 문구 수정',
          },
          {
            date: '2023.10.19',
            text: '이벤트 영역 배너 타입 수정',
          },
          {
            date: '2023.10.20',
            text: '메인 배너 이미지 교체',
          },
          {
            date: '2023.10.30',
            text: '이벤트 영역 배너 이미지 교체',
          },
        ],
      },
      {
        depth2: '홈\nMain_P01_p001',
        depth3: '안내문\nMain_P01_l002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/home_popup',
        status: 'end',
        create: '2023.10.26',
        log: [],
      },
      {
        depth2: '홈\nMain_P01_p001',
        depth3: '지원 브라우저 안내\nMain_P01_l003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/Main_P01_l003',
        status: 'end',
        create: '2023.12.06',
        log: [],
      },
    ],
  },
  {
    depth1: '회원관리',
    datas: [
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P01_p001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.09.18',
            text: '하단 앱 연결 링크 구성 변경',
          },
        ],
      },
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '비밀번호 변경안내\nMember_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P01_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '로그인\nMember_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-001',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.11',
            text: 'Member_P02_l001 폼 타이틀 수정',
          },
          {
            date: '2023.08.21',
            text: 'Member_P02_l001 마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '성공\nMember_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p002',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '아이디 찾기\nMember_P03_p001',
        depth3: '실패\nMember_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P03_p003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '신규비밀번호 입력\nMember_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p002',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '비밀번호 찾기\nMember_P04_p001',
        depth3: '변경완료\nMember_P04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P04_p003',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p001',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '회원정보 입력\nMember_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p002',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '가입완료\nMember_P05_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p005',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
      {
        depth2: '회원가입\nMember_P05_p001',
        depth3: '앱회원 회원가입\nMember_P05_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/Member_P05_p006',
        status: 'end',
        create: '2023.05.19',
        log: [],
      },
    ],
  },
  {
    depth1: '고객센터',
    datas: [
      {
        depth2: '메인\nCustomer_P00_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P00_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2043.10.14',
            text: '민원창구·유익정보 수정 \n보이스피싱 예방 안내 추가',
          },
        ],
      },
      {
        depth2: 'FAQ\nCustomer_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P01_p001',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.08.25',
            text: '아코디언 오픈 시 노출되는 텍스트 크기 수정',
          },
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '고객상담',
        depth3: '본인인증\nCustomer_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '상담정보 입력\nCustomer_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p002',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '고객상담',
        depth3: '완료\nCustomer_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P02_p003',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '목록\nCustomer_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P03_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세\nCustomer_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P03_p002',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '이벤트',
        depth3: '목록\nCustomer_P04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P04_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '이벤트',
        depth3: '상세\nCustomer_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P04_p002',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '서식다운로드\nCustomer_P12_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P12_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '지점안내\nCustomer_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P05_p001',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.07.21',
            text: '지도 배치 수정',
          },
        ],
      },
      {
        depth2: '홈페이지 이용안내\nCustomer_P13_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P13_p001',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '고객센터 ARS안내\nCustomer_P07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P07_p001',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '보안센터',
        depth3: '프로그램 설치 안내\nCustomer_P17_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P17_p001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.07',
            text: '줄바꿈 수정 및 이미지 교체',
          },
          {
            date: '2023.08.16',
            text: '이미지 교체',
          },
          {
            date: '2023.09.14',
            text: '공동인증서 프로그램 설치 이미지 교체',
          },
        ],
      },
      {
        depth2: '보안센터',
        depth3: '프로그램 삭제 안내\nCustomer_P17_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P17_p002',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.07',
            text: '줄바꿈 수정 및 이미지 교체',
          },
          {
            date: '2023.09.14',
            text: '보안 및 공동인증서 프로그램 삭제 이미지 교체',
          },
          {
            date: '2023.09.15',
            text: '공동인증서 프로그램 삭제 탭 내 문구 수정',
          },
        ],
      },
      {
        depth2: '정책 및 약관\nCustomer_P08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P08_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2024.10.14',
            text: '상품약관 버튼 추가',
          },
        ],
      },
      {
        depth2: '개인정보이용현황',
        depth3: '개인정보열람 청구',
        depth4: '약관 동의/본인인증\nCustomer_P14_p001',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p001',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.11.10',
            text: '상단에 안내문구 및 텍스트 버튼 추가',
          },
          {
            date: '2023.11.21',
            text: '타이틀 하단 문구 삭제 및 버튼 추가',
          },
        ],
      },
      {
        depth2: '개인정보이용현황',
        depth3: '개인정보열람 청구',
        depth4: '통지방법선택\nCustomer_P14_p002',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p002',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '개인정보이용현황',
        depth3: '정보이용 제공 조회',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/customer-002',
        status: 'end',
        create: '2023.07.26',
        log: [],
      },
      {
        depth2: '개인정보이용현황',
        depth3: '정보이용 제공 조회',
        depth4: '약관 동의/본인인증\nCustomer_P14_p003',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '상단에 안내문구 및 텍스트 버튼 추가',
          },
        ],
      },
      {
        depth2: '개인정보이용현황',
        depth3: '정보이용 제공 조회',
        depth4: '신용정보 이용제공사실 조회 완료\nCustomer_P14_p004',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p004',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      // S: 240529 추가
      {
        depth2: '개인정보이용현황',
        depth3: '정보이용 제공 조회',
        depth4: '현황 조회 약관 동의 보기\nCustomer_P14_p005',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p005',
        status: 'end',
        create: '2024.05.29',
        log: [],
      },
      // // E: 240529 추가
      {
        depth2: '개인정보이용현황',
        depth3: '정보이용 제공 조회',
        depth4: '마케팅 목적 동의 현황 조회 완료\nCustomer_P14_p006',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P14_p006',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      // S: 240528 추가(前 철주차장님 작업)
      {
        depth2: '고객센터',
        depth3: '개인정보 이용 현황',
        depth4: '정보이용·제공 조회',
        depth5: '계열사 마케팅 목적 동의 현황 조회\nCustomer_P14_p007',
        depth6: '',
        path: '/customer/Customer_P14_p007',
        status: 'end',
        create: '2024.04.24',
        log: [],
      },
      {
        depth2: '고객센터',
        depth3: '개인정보 이용 현황',
        depth4: '정보이용·제공 조회',
        depth5: '팝업\nGuideCustomer004',
        depth6: '',
        path: '/ui-guide/customer-004',
        status: 'end',
        create: '2024.04.24',
        log: [
          {
            date: '2024.05.02',
            text: 'Customer_P14_l002 , Customer_P14_l003, Customer_P14_l004 , Customer_P14_l005  ',
          },
        ],
      },
      // E: 240528 추가(前 철주차장님 작업)
      {
        depth2: '금융소비자보호',
        depth3: '금융 소비자보호 서브메인\nCstmPtct_P00_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/CstmPtct_P00_p001',
        status: 'end',
        create: '2025.01.22',
        log: [
          {
            date: '2025.01.22',
            text: '서브메인',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호헌장\nCustomer_P09_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호조직\nCustomer_P09_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p002',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호체계\nCustomer_P09_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
          {
            date: '2024.10.14',
            text: '상품판매준칙 수정',
          },
        ],
      },
      // S: 240725 추가
      {
        depth2: '금융소비자보호',
        depth3: '',
        depth4: '금융소비자보호 규정 제정·개정 이력 목록\nCustomer_P09_p010',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p010',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규추가페이지',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호 내부통제규정',
        depth4: '금융소비자보호 내부통제규정 목록\nCustomer_P09_p011',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p011',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규추가페이지',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호 우수사례',
        depth4: '목록\nCustomer_P09_p012',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p012',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규추가페이지',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호 우수사례',
        depth4: '상세\nCustomer_P09_p013',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p013',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규추가페이지',
          },
        ],
      },
      // // E: 240725 추가
      {
        depth2: '금융소비자보호',
        depth3: '',
        depth4: '판매 중단 상품 안내\nCustomer_P09_p014',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p014',
        status: 'end',
        create: '2025.01.23',
        log: [
          {
            date: '2025.01.23',
            text: '신규추가페이지',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '비대면 금융사고 책임분담기준_대고객안내문',
        depth4: '대고객 안내문\nCustomer_P09_p015',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p015',
        status: 'end',
        create: '2025.01.23',
        log: [
          {
            date: '2025.01.23',
            text: '신규추가페이지',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호웹진\nCustomer_P09_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p004',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호공시',
        depth4: '목록\nCustomer_P09_p005',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p005',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '금융소비자보호',
        depth3: '금융소비자보호공시',
        depth4: '상세\nCustomer_P09_p006',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p006',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '금융소비자권리',
        depth3: '금리인하요구권 안내\nCustomer_P09_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p007',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '금융소비자권리',
        depth3: '대출계약철회권 안내\nCustomer_P09_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p008',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      // S: 240725 추가
      {
        depth2: '금융소비자권리',
        depth3: '자료열람요구권\nCustomer_P21_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P21_p001',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규페이지',
          },
        ],
      },
      {
        depth2: '금융소비자권리',
        depth3: '위법계약해지권\nCustomer_P21_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P21_p002',
        status: 'ing',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규페이지',
          },
        ],
      },
      // // E: 240725 추가
      {
        depth2: '금융소비자보호',
        depth3: '중도상환수수료 면제\nCustomer_P09_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P09_p009',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.11.10',
            text: '하단에 버튼 추가',
          },
        ],
      },
      {
        depth2: '전자민원접수',
        depth3: '민원정보 입력\nCustomer_P15_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P15_p001',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '전자민원접수',
        depth3: '접수완료\nCustomer_P15_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P15_p002',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '그룹사간 고객정보 제공내역 조회',
        depth3: '본인인증+J277\nCustomer_P16_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P16_p001',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '그룹사간 고객정보 제공내역 조회',
        depth3: '정보조회\nCustomer_P16_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P16_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '그룹사간 고객정보 제공내역 조회',
        depth3: '정보조회\nCustomer_P16_p002',
        depth4: '통지방법 선택안내\nCustomer_P16_p003',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P16_p003',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '인증센터\nCustomer_P11_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P11_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '인증센터\nCustomer_P11_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/customer-001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '방문·전화권유판매원 조회 \nCustomer_P20_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P20_p001',
        status: 'end',
        create: '2023.12.01',
        log: [],
      },
      // S: 240725 추가
      {
        depth2: '민원창구·유익정보',
        depth3: '소비자권익보호 유익한 정보\nCustomer_P22_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_P22_p001',
        status: 'end',
        create: '2024.07.25',
        log: [
          {
            date: '2024.07.25',
            text: '신규페이지',
          },
        ],
      },
      // //E: 240725 추가
      {
        depth2: '방문·전화권유판매원 조회 \nCustomer_P20_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/customer-003',
        status: 'end',
        create: '2023.12.01',
        log: [],
      },
      // s: 240906 추가
      {
        depth2: '개인채무자보호법 채무조정',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/Customer_DS_W01',
        status: 'end',
        create: '2024.09.06',
        log: [],
      },
      // e:// 240906 추가
      // s: 240912 추가
      {
        depth2: '통지문서조회',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/DS_NO_W01_01',
        status: 'ing',
        create: '2024.09.12',
        log: [],
      },
      {
        depth2: '통지문서조회',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/DS_NO_W01_02',
        status: 'ing',
        create: '2024.09.12',
        log: [],
      },
      // e:// 240912 추가
    ],
  },
  {
    depth1: '개인금융',
    datas: [
      {
        depth2: '메인\nMain_P01_p003',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/Main_P01_p003',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.18',
            text: '타이틀 및 상품 문구 수정, 순서 변경',
          },
          {
            date: '2023.10.16',
            text: '문구 전체 수정 및 사업자주택담보대출 아이콘 교체',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '컨텐츠 문구 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 탭 스탭 수정, "유의사항" 탭 문구 수정, 준법심의필 추가',
          },
          {
            date: '2023.10.19',
            text: '"서류자동제출", "대출최대기간" 영역 이미지 교체',
          },
          {
            date: '2023.10.23',
            text: '"진행절차" step5 추가',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.11.03',
            text: '"대출최대기간" 영역 마침표 추가',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-001',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.06.01',
            text: '팝업 추가\n- 온라인 약정\n- 1원 인증',
          },
          {
            date: '2023.08.07',
            text: '팝업 추가\n- iSAS 설치 팝업',
          },
          {
            date: '2023.08.21',
            text: 'PF_P01_l002 마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.08.23',
            text: 'PF_P01_l002 공동인증서 케이스 추가',
          },
          {
            date: '2023.08.31',
            text: 'PF_P01_l006 입금자명 텍스트필드 수정',
          },
          {
            date: '2023.09.07',
            text: 'PF_P01_l006 문구 수정 및 이미지 변경',
          },
          {
            date: '2023.09.14',
            text: 'PF_P01_l006 타이틀 문구 수정',
          },
          {
            date: '2023.09.15',
            text: 'PF_P01_l006 인증시간 및 재요청 버튼 삭제',
          },
          {
            date: '2023.10.30',
            text: 'PF_P01_l003 qr 코드 이미지 교체',
          },
          {
            date: '2023.11.15',
            text: '팝업 추가\n- PF_P01_l007',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P01_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P01_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p003',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.11.21',
            text: '"연소득" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '대출신청불가\nPF_P01_p007',
        depth6: '',
        path: '/personal-loan/PF_P01_p007',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P01_p004',
        depth5: '한도조회오류\nPF_P01_p008',
        depth6: '',
        path: '/personal-loan/PF_P01_p008',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P01_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p005',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.23',
            text: '비대면 개설 영역 삭제',
          },
          {
            date: '2023.09.15',
            text: '발급일자 항목 텍스트 입력 박스로 변경\n예금주명 입력 항목 추가',
          },
          {
            date: '2023.09.25',
            text: '대출신청금액 항목 금액 표시 추가',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P01_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청실패\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청실패_Fraud 대상자\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '대출신청실패_오류\nPF_P01_p009',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p009_003',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.09.08',
            text: '버튼 문구 수정',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_P01_p001',
        depth3: '한도조회',
        depth4: '자동송금 비대상_신청완료\nPF_P01_p010',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P01_p010',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"상환방법" 항목 타입 수정, "진행절차" 탭 step2 문구 수정',
          },
          {
            date: '2023.10.19',
            text: '"최대한도" , "한도" 항목 문구 수정 및 "상품안내" 탭 항목 텍스트 크기 수정',
          },
          {
            date: '2023.10.23',
            text: '"상품안내" 탭 상환방법 항목 텍스트 굵기 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.06.01',
            text: '팝업 추가\n- 온라인 약정',
          },
          {
            date: '2023.06.14',
            text: '팝업 추가\n- 등기부등본 조회 팝업\n- 등기부등본 확인 팝업',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P02_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P02_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.08.29',
            text: '소득구분 영역 컨텐츠 추가',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P02_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P02_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p005',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.23',
            text: '비대면 개설 영역 삭제',
          },
          {
            date: '2023.11.21',
            text: '"대출신청금액" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '행복아파트론\nPF_P02_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P02_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P02_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '아파트론\nPF_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P03_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 탭 스탭 및 문구 수정',
          },
          {
            date: '2023.10.19',
            text: '서브 타이틀 추가, "상품안내" 탭 항목 텍스트 크기 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 한도 항목 문구 수정, "진행절차" 탭 스탭 문구 수정, "유의사항" 탭 문구 순서 변경',
          },
          {
            date: '2023.10.19',
            text: '"상품안내" 탭 항목 텍스트 크기 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-003',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P04_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P04_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p003',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.11.21',
            text: '"연소득" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P04_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P04_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p005',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.23',
            text: '비대면 개설 영역 삭제',
          },
          {
            date: '2023.11.21',
            text: '"대출신청금액" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_P04_p001',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P04_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P04_p006',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 탭 step2 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-004',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '본인인증\nPF_P05_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '고객정보입력\nPF_P05_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p003',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '한도,금리확인\nPF_P05_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '신청정보입력\nPF_P05_p005',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p005',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.23',
            text: '비대면 개설 영역 삭제',
          },
          {
            date: '2023.11.21',
            text: '"대출신청금액" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '대출신청완료\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 내\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_002',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_P05_p001',
        depth3: '한도조회',
        depth4: '대출신청완료_자동송금 영업시간 외\nPF_P05_p006',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P05_p006_003',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p000',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.09.19',
            text: '계좌운용규칙 열람 버튼 추가',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"유의사항" 탭 문구 수정 및 추가',
          },
          {
            date: '2023.10.23',
            text: '"한도","금리", "추가대출안내" 항목 문구 수정 "이용가이드" 테이블 정렬 수정, "유의사항" 탭 텍스트 굵기 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.11.03',
            text: '"진행절차" 탭 step1 문구 수정',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-005',
        status: 'ing',
        create: '2023.05.26',
        log: [
          {
            date: '2023.06.09',
            text: '팝업 추가\n- 월납입금 조회',
          },
          {
            date: '2023.08.11',
            text: 'PF_P07_l003 타이틀 수정 및 항목 삭제',
          },
          {
            date: '2023.08.21',
            text: 'PF_P07_l002 마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.08.23',
            text: 'PF_P07_l002 공동인증서 케이스 추가',
          },
          {
            date: '2023.08.24',
            text: '팝업추가\n- PF_P07_l101 약관보기 팝업',
          },
          {
            date: '2023.08.25',
            text: '팝업추가\n- PF_P07_l301 대출 전 주요 체크포인트 팝업',
          },
          {
            date: '2024.05.24',
            text: '팝업추가\n- PF_P07_l004_001 금융취약 소비자 우선설명 팝업',
          },
          {
            date: '2024.05.24',
            text: '팝업추가\n- PF_P07_l004_002 스탁론 약관_추후 내용추가 예정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '계좌운영규칙 동의/증권사 선택\nPF_P07_p001',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.10.06',
            text: '증권사 선택 영역 너비 및 정렬 수정',
          },
          {
            date: '2023.10.17',
            text: '증권사 선택 영역 너비 및 정렬 수정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '상품별 안내\nPF_P07_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p002',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.07.19',
            text: '컨텐츠 html 데이터 불러올 수 있게 수정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출 전 주요 체크포인트 확인\nPF_P07_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p003',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.11.01',
            text: '약관 형식 타입 전체 수정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '실명 및 본인인증\nPF_P07_p004',
        depth6: '',
        path: '/personal-loan/PF_P07_p004',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.11',
            text: '연락처 폼 삭제',
          },
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.09.26',
            text: '대출가능금액 항목 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출정보 입력\nPF_P07_p005',
        depth6: '',
        path: '/personal-loan/PF_P07_p005',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.07.19',
            text: '거래유형 라디오로 변경\n손님정보 주민등록번호 항목 포멧 변경',
          },
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.08.30',
            text: '주민등록번호 뒤 첫자리 placeholder 적용',
          },
          {
            date: '2023.09.25',
            text: '주민등록번호 뒤 첫자리 입력 전 빈 동그라미 보이는 기능 적용',
          },
          {
            date: '2023.09.26',
            text: '대출가능금액 및 대출신청금액 항목 금액 표시 추가',
          },
          {
            date: '2023.09.27',
            text: '직장 정보 입력 필수항목 placeholder 적용',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '계약정보 확인\nPF_P07_p006',
        depth6: '',
        path: '/personal-loan/PF_P07_p006',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '적합성/적정성 원칙 확인\nPF_P07_p007',
        depth6: '',
        path: '/personal-loan/PF_P07_p007',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출약정\nPF_P07_p008',
        depth6: '',
        path: '/personal-loan/PF_P07_p008',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청서 작성',
        depth5: '대출입금\nPF_P07_p009',
        depth6: '',
        path: '/personal-loan/PF_P07_p009',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.02',
            text: '폰트 굵기 및 유의사항 컨텐츠 수정',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '대출신청',
        depth4: '대출신청완료\nPF_P07_p010',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p010',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '연장신청',
        depth4: '실명 및 본인인증\nPF_P07_p011',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p011',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '연장신청',
        depth4: '계약정보 확인\nPF_P07_p012',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p012',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '연장신청',
        depth4: '신청완료\nPF_P07_p013',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p013',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      //S: 240513 추가
      {
        depth2: '스탁론\nPF_P07_p000',
        depth3: '',
        depth4: '적합성·적정성 원칙 확인\nPF_P07_p017',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P07_p017',
        status: 'ing',
        create: '2024.05.13',
        log: [],
      },
      // //E: 240513 추가
      {
        depth2: '사업자주택담보대출\nPF_P09_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 한도/금리 항목 문구 수정, 제출서류 항목 순서 및 문구 수정, 부동산 근저당설정 항목 추가, "진행절차" 탭 step 변경 및 문구 수정, 준법심의필 추가',
          },
          {
            date: '2023.10.23',
            text: '"한도", "금리" 항목 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_P09_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-006',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.11.03',
            text: 'PF_P09_l001 마지막 문구 삭제',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_P09_p001',
        depth3: '상담신청',
        depth4: '본인인증/약관동의\nPF_P09_p002',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_P09_p001',
        depth3: '상담신청',
        depth4: '고객정보 입력\nPF_P09_p003',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.11.21',
            text: '"희망한도" 항목 한글 금액 표시 추가',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_P09_p001',
        depth3: '상담신청',
        depth4: '상담신청 완료\nPF_P09_p004',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P09_p004',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '내구소비재할부\nPF_P10_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P10_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.23',
            text: '"금리", "기간" 항목 수정, "상품안내" 탭 중도상환수수료 및 연체이자율 항목 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.27',
            text: '"상환방법" 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: 'e임대주택론\nPF_P06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/PF_P06_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '금리/기간 항목 문구 수정, "상품안내" 탭 금리/기간 문구 수정, 연체이자율 항목 추가 및 내용 전체 텍스트 굵기 수정, 준법심의필 추가',
          },
          {
            date: '2023.10.23',
            text: '"금리" 항목 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: '기업금융',
    datas: [
      {
        depth2: '메인\nBF_P00_main',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/BF_P00_main',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.18',
            text: '타이틀 문구 수정',
          },
          {
            date: '2023.10.12',
            text: '아이콘 전체 수정',
          },
          {
            date: '2023.10.16',
            text: '문구 전체 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '일반리스\nBF_P05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/BF_P05_p001',
        status: 'end',
        create: '2023.07.05',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '금리 항목 문구 수정, "상품안내" 탭 내용 문구 및 텍스트 굵기 수정, "진행절차" 탭 step4 문구 수정',
          },
          {
            date: '2023.10.23',
            text: '"연체이자율" 항목 문구 수정, "진행절차" 탭 step4 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '일반할부\nBF_P06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/BF_P06_p001',
        status: 'end',
        create: '2023.07.05',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 내용 전체 문구 및 텍스트 굵기 수정, "진행절차" 탭 step4 문구 수정',
          },
          {
            date: '2023.10.23',
            text: '"연체이자율" 항목 문구 수정, "진행절차" 탭 step4 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: '온라인지점',
    datas: [
      {
        depth2: '메인\nMI_P00_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.07.27',
            text: '총 남은 원금 없는 케이스 추가',
          },
          {
            date: '2023.08.29',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '계약 현황 영역 케이스 추가',
          },
          {
            date: '2023.10.19',
            text: '메인 메뉴 영역 추가',
          },
        ],
      },
      {
        depth2: '메인\nMI_P00_p001',
        depth3: '계약미보유,\n종료계약만 보유',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p001_empty',
        status: 'end',
        create: '2023.08.25',
        log: [],
      },
      {
        depth2: '메인\nMI_P00_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/online-branch-001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.07',
            text: 'MI_P00_l001 약관 노출 방식 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/online-branch-002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.06.02',
            text: '팝업 추가\n- 반환 신청 확인\n- 구매 신청 확인',
          },
          {
            date: '2023.06.21',
            text: '팝업 추가\n- 계약 상세정보',
          },
          {
            date: '2023.08.30',
            text: 'MI_P00_l003\n모델명, 계약번호 표기법 변경 및 계약 상세정보 영역 케이스 추가',
          },
          {
            date: '2023.08.31',
            text: 'MI_P00_l003\n결제/청구 정보 > 계좌정보 정렬 수정',
          },
          {
            date: '2023.09.01',
            text: 'MI_P00_l003\n결제/청구 정보 > 계좌정보 미세 정렬 수정',
          },
          {
            date: '2023.09.08',
            text: 'MI_P00_l007 즉시출금, 가상계좌 타이틀 케이스 분리',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '계약현황\nMI_P00_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p002',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
          {
            date: '2023.09.08',
            text: '종료된 계약건만 보유 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '자동이체 계좌 변경\nMI_P00_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p003',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.11',
            text: '유의사항 추가',
          },
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p004',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '본인인증\nMI_P00_p005',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p005',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청구 방법/청구지 변경\nMI_P00_p004',
        depth4: '변경완료\nMI_P00_p006',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p006',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p007',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '본인인증\nMI_P00_p008',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p008',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: 'SMS안내 수신/변경\nMI_P00_p007',
        depth4: '변경완료\nMI_P00_p009',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p009',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p010',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '중도상환 조건 입력\nMI_P00_p011',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p011',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.30',
            text: '품목명, 계약번호 표기법 변경 및 상품 정보 영역 케이스 추가',
          },
          {
            date: '2023.10.18',
            text: '텍스트필드을 텍스트 노출 되는 타입으로 변경',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '중도상환신청\nMI_P00_p010',
        depth4: '신청 완료\nMI_P00_p012',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p012',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.30',
            text: '품목명, 계약번호 표기법 변경 및 상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p04_p001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '해지신청',
        depth5: '본인인증\nMy_p04_p002',
        depth6: '',
        path: '/online-branch/My_p04_p002',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '근저당설정 조회/해지신청\nMy_p04_p001',
        depth4: '해지신청',
        depth5: '신청 완료\nMy_p04_p003',
        depth6: '',
        path: '/online-branch/My_p04_p003',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '범칙금/자동차세 조회\nMI_P00_p013',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p013',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록',
        depth4: '계약정보 선택\nMI_P00_p014',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p014',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록',
        depth4: '지정운전자 등록\nMI_P00_p019',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p019',
        status: 'end',
        create: '2023.11.07',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록',
        depth4: '정보 입력\nMI_P00_p015',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p015',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.25',
            text: '모델명, 계약번호 표기법 변경',
          },
          {
            date: '2023.08.30',
            text: '상품 정보 영역 케이스 추가',
          },
          {
            date: '2023.11.07',
            text: '지정운전자 정보 영역 전체 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록',
        depth4: '본인인증\nMI_P00_p018',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p018',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '지정운전자 등록',
        depth4: '등록 완료\nMI_P00_p016',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P00_p016',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.11.07',
            text: '서브 타이틀 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '신청서 작성\nMy_p05_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p002',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.23',
            text: '라디오 버튼 스타일 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '서류등록\nMy_p05_p003',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p003',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.11',
            text: '띄어쓰기 수정 및 안내사항 간격 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '본인인증/약관동의\nMy_p05_p004',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p004',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '금리인하요구권신청\nMy_p05_p001',
        depth4: '신청완료\nMy_p05_p005',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p05_p005',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '신청서 작성\nMy_p06_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p002',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.08.11',
            text: '마지막 타이틀 문구 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '청약철회권신청\nMy_p06_p001',
        depth4: '신청완료\nMy_p06_p004',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_p06_p004',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.11',
            text: '텍스트 띄어쓰기 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/online-branch-003',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.06.21',
            text: '/ui-guide/online-branch-002 에 있는 팝업 일부 옮김',
          },
          {
            date: '2023.07.27',
            text: 'My_P08_l001 렌트, 리스 케이스 분리',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '연장 신청',
        depth5: '연장신청 완료\nMy_P08_p009',
        depth6: '',
        path: '/online-branch/My_P08_p009',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '연장 신청',
        depth5: '계약자 정보 입력(심사요청)\nMy_P08_p010',
        depth6: '',
        path: '/online-branch/My_P08_p010',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '연장 신청',
        depth5: '본인인증/약관동의\nMy_P08_p011',
        depth6: '',
        path: '/online-branch/My_P08_p011',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '연장 신청',
        depth5: '심사서류 등록\nMy_P08_p012',
        depth6: '',
        path: '/online-branch/My_P08_p012',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.18',
            text: '하단 안내 문구 추가',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '연장 신청',
        depth5: '등록 완료(심사요청 완료)\nMy_P08_p013',
        depth6: '',
        path: '/online-branch/My_P08_p013',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '반환 신청',
        depth5: '반환 유의사항 확인\nMy_P08_p014',
        depth6: '',
        path: '/online-branch/My_P08_p014',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '반환 신청',
        depth5: '반환 정보 입력\nMy_P08_p015',
        depth6: '',
        path: '/online-branch/My_P08_p015',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 공통',
        depth4: '반환 신청',
        depth5: '신청 완료\nMy_P08_p016',
        depth6: '',
        path: '/online-branch/My_P08_p016',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '신청전\nMy_P08_p001',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '신청후\nMy_P08_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p002',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '연장 신청',
        depth5: '연장 조건 선택\nMy_P08_p005',
        depth6: '',
        path: '/online-branch/My_P08_p005',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '연장 신청',
        depth5: '계약정보 확인\nMy_P08_p006',
        depth6: '',
        path: '/online-branch/My_P08_p006',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '구매 유의사항 확인\nMy_P08_p017',
        depth6: '',
        path: '/online-branch/My_P08_p017',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '구매 예상비용 확인\nMy_P08_p018',
        depth6: '',
        path: '/online-branch/My_P08_p018',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '명의이전 방법 선택\nMy_P08_p019',
        depth6: '',
        path: '/online-branch/My_P08_p019',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '구매 정보 입력(직접이전)\nMy_P08_p020',
        depth6: '',
        path: '/online-branch/My_P08_p020',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '구매 정보 입력(이전대행)\nMy_P08_p021',
        depth6: '',
        path: '/online-branch/My_P08_p021',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 렌트',
        depth4: '구매 신청',
        depth5: '신청 완료\nMy_P08_p022',
        depth6: '',
        path: '/online-branch/My_P08_p022',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '신청전\nMy_P08_p003',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p003',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.12.08',
            text: '금리, 연체이자율 항목 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '신청후\nMy_P08_p004',
        depth5: '',
        depth6: '',
        path: '/online-branch/My_P08_p004',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '연장 신청',
        depth5: '연장 조건 선택\nMy_P08_p007',
        depth6: '',
        path: '/online-branch/My_P08_p007',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '연장 신청',
        depth5: '계약정보 확인\nMy_P08_p008',
        depth6: '',
        path: '/online-branch/My_P08_p008',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '구매 유의사항 확인\nMy_P08_p023',
        depth6: '',
        path: '/online-branch/My_P08_p023',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '구매예상비용 확인\nMy_P08_p024',
        depth6: '',
        path: '/online-branch/My_P08_p024',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '명의이전 방법 선택\nMy_P08_p025',
        depth6: '',
        path: '/online-branch/My_P08_p025',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '구매 정보 입력(직접이전)\nMy_P08_p026',
        depth6: '',
        path: '/online-branch/My_P08_p026',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '구매 정보 입력(이전대행)\nMy_P08_p027',
        depth6: '',
        path: '/online-branch/My_P08_p027',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(당사명의)',
        depth5: '신청 완료\nMy_P08_p028',
        depth6: '',
        path: '/online-branch/My_P08_p028',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(이용자명의)',
        depth5: '구매 유의사항 확인\nMy_P08_p029',
        depth6: '',
        path: '/online-branch/My_P08_p029',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(이용자명의)',
        depth5: '구매 정보 확인\nMy_P08_p030',
        depth6: '',
        path: '/online-branch/My_P08_p030',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '계약정보',
        depth3: '만기후처리 - 리스',
        depth4: '구매 신청(이용자명의)',
        depth5: '신청 완료\nMy_P08_p031',
        depth6: '',
        path: '/online-branch/My_P08_p031',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '하나머니',
        depth3: '내역조회\nMI_P02_p005\n하나머니 사용/취소\nMI_P02_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P02_p005',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p000',
        status: 'end',
        create: '2023.10.13',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '비밀번호 변경',
        depth4: '정보입력\nMI_P01_p001',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '비밀번호 변경',
        depth4: '본인인증\nMI_P01_p002',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p002',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '비밀번호 변경',
        depth4: '변경완료\nMI_P01_p003',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p003',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p004',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '주소지 변경',
        depth5: '정보변경\nMI_P01_p005',
        depth6: '',
        path: '/online-branch/MI_P01_p005',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.07.27',
            text: '이메일 타이틀 수정 및 직접입력 인풋 추가',
          },
          {
            date: '2023.08.07',
            text: '도메인 placeholder 추가',
          },
        ],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '주소지 변경',
        depth5: '본인인증\nMI_P01_p006',
        depth6: '',
        path: '/online-branch/MI_P01_p006',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '주소지 변경',
        depth5: '변경완료\nMI_P01_p007',
        depth6: '',
        path: '/online-branch/MI_P01_p007',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '연락처 변경',
        depth5: '정보변경\nMI_P01_p008',
        depth6: '',
        path: '/online-branch/MI_P01_p008',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '연락처 변경',
        depth5: '본인인증\nMI_P01_p009',
        depth6: '',
        path: '/online-branch/MI_P01_p009',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '주소지/연락처 변경\nMI_P01_p004',
        depth4: '연락처 변경',
        depth5: '변경완료\nMI_P01_p010',
        depth6: '',
        path: '/online-branch/MI_P01_p010',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '회원 탈퇴',
        depth4: '본인인증\nMI_P01_p011',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p011',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '내정보관리\nMI_P01_p000',
        depth3: '회원 탈퇴',
        depth4: '탈퇴 완료\nMI_P01_p012',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P01_p012',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '온라인청구서\nMI_P06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P06_p001',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.07.27',
            text: '주소 입력 항목 삭제',
          },
          {
            date: '2023.09.11',
            text: '채권번호 항목 위치 수정 및 케이스 추가',
          },
        ],
      },
      {
        depth2: '온라인청구서\nMI_P06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/online-branch-004',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.09.11',
            text: '채권번호 선택 팝업 추가',
          },
        ],
      },
      {
        depth2:
          '증명서 조회/발급\nMI_P07_p001\nMI_P07_p002\nMI_P07_p003\nMI_P07_p004\nMI_P07_p005\nMI_P07_p006\nMI_P07_p007\nMI_P07_p008\nMI_P07_p009',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/online-branch/MI_P07_p001',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.09.06',
            text: '"대출거래현황", "담보내용", "최근 3개월 내 10일 이상 계속된 연체 명세" 다건 케이스 추가',
          },
          {
            date: '2023.09.14',
            text: '채권번호 항목 위치 수정 및 케이스 추가',
          },
        ],
      },
    ],
  },
  {
    depth1: '부가서비스',
    datas: [
      {
        depth2: '진행상태조회',
        depth3: '약관동의/본인인증\nMy_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P02_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '조회 결과\nMy_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P02_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      // S: 240513~14 추가
      {
        depth2: '진행상태조회',
        depth3: '온라인약정\nMy_P03_l004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P03_l004',
        status: 'ing',
        create: '2024.05.13',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '온라인약정\n계약자 정보 입력\nMy_P03_l016',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P03_l016',
        status: 'ing',
        create: '2024.05.13',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '온라인약정\n청구서 수령방법\nMy_P03_l017',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P03_l017',
        status: 'ing',
        create: '2024.05.14',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '온라인약정\n자동이체 정보입력\nMy_P03_l018',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P03_l018',
        status: 'ing',
        create: '2024.05.14',
        log: [],
      },
      {
        depth2: '진행상태조회',
        depth3: '온라인약정\n금융조건 입력\nMy_P03_l021',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P03_l021',
        status: 'ing',
        create: '2024.05.14',
        log: [],
      },
      // //E: 240513~14 추가
      {
        depth2: '서류등록',
        depth3: '약관동의/본인인증\nMy_P05_p011',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p011',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '서류등록',
        depth3: '서류등록\nMy_P05_p012',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p012',
        status: 'end',
        create: '2023.06.02',
        log: [{ date: '2023.08.18', text: '안내 문구 간격 수정' }],
      },
      {
        depth2: '서류등록',
        depth3: '등록완료\nMy_P05_p013',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P05_p013',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '온라인약정',
        depth3: '본인인증\nMy_P06_p011',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p011',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P06_p012',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p012',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P06_p012',
        depth3: '약정안내\nMy_P06_p013',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p013',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P06_p012',
        depth3: '약정완료\nMy_P06_p014',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/My_P06_p014',
        status: 'end',
        create: '2023.10.05',
        log: [],
      },
      {
        depth2: '약정목록\nMy_P06_p012',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/additional-service-001',
        status: 'end',
        create: '2023.05.26',
        log: [
          { date: '2023.06.01', text: '팝업추가\n- 온라인약정 팝업' },
          { date: '2023.08.10', text: 'My_P06_l002 이미지 교체 및 문구 수정' },
        ],
      },
      {
        depth2: '상담등록\nEtc_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/Etc_P01_p001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.07.27',
            text: '법인명 항목 추가',
          },
        ],
      },
      {
        depth2: '상담등록\nEtc_P01_p001',
        depth3: '등록완료\nEtc_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/additional-service/Etc_P01_p002',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
    ],
  },
  {
    depth1: '재고금융 (영업용)',
    datas: [
      {
        depth2: '한도조회\nIF_P08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P08_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.09.25',
            text: '검색 버튼 일반 버튼으로 변경',
          },
        ],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p001',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-001',
        status: 'end',
        create: '2023.06.01',
        log: [
          { date: '2023.06.23', text: '팝업추가\n- 서류확인 미리보기 팝업' },
          { date: '2023.07.28', text: 'IF_P02_l004 내용 전체 수정' },
        ],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '상담신청\nIF_P02_p002',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p002',
        status: 'end',
        create: '2023.06.01',
        log: [
          { date: '2023.08.11', text: '일부 문구 삭제 및 서류등록 영역 추가' },
        ],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '대출약정\nIF_P02_p004',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p004',
        status: 'end',
        create: '2023.06.01',
        log: [
          { date: '2023.08.11', text: '문구 수정 및 국산/수입 케이스 추가' },
        ],
      },
      {
        depth2: '대출신청\nIF_P02_p001',
        depth3: '신규대출신청',
        depth4: '약정완료\nIF_P02_p005',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p005',
        status: 'end',
        create: '2023.06.01',
        log: [
          { date: '2023.08.11', text: '문구 수정 및 국산/수입 케이스 추가' },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.06.01',
            text: '팝업추가\n- 중도상환 입금 예약신청 팝업(오늘 즉시 출금)',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '계약정보 선택\nIF_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '조건입력/선택\nIF_P03_p002\nIF_P03_p004\nIF_P03_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.10.11',
            text: '차량정보 영역 정렬 수정 및 툴팁 추가',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '중도상환 시뮬레이션\nIF_P02_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P02_p007',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '조회결과 및 신청\nIF_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p003',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '신청완료\nIF_P03_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P03_p008',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p001',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '조건입력 및 내역확인\nIF_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p002',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.09.08',
            text: '입금 신청일자 영역 문구 수정',
          },
        ],
      },
      {
        depth2: '만기연장\nIF_P04_p001',
        depth3: '신청완료\nIF_P04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P04_p003',
        status: 'end',
        create: '2023.06.01',
        log: [],
      },
      {
        depth2: '구비서류등록\nIF_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P05_p001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.11',
            text: '탭 추가 및 컨텐츠 수정',
          },
        ],
      },
      {
        depth2: '구비서류등록\nIF_P05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.07.27',
            text: 'IF_P05_l001 차량사진(앞), 차량사진(뒤), 자동차등록원부 항목 삭제',
          },
        ],
      },
      {
        depth2: '종료건 확인\nIF_P06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/IF_P06_p001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.11',
            text: '탭 추가 및 컨텐츠 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: 'LM 블로그 (영업용)',
    datas: [
      {
        depth2: '빠른 대출상담신청 내역\nLM_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P02_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.09',
            text: '소스 전반 재작업',
          },
        ],
      },
      {
        depth2: 'SMS 상담요청 내역\nLM_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P03_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.09',
            text: '소스 전반 재작업',
          },
        ],
      },
      {
        depth2: '접속통계\nLM_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P04_p001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.07.27',
            text: '테이블 내용 수정',
          },
        ],
      },
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.07.28',
            text: '빠른 직군 검색 버튼 추가',
          },
        ],
      },
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-001',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.06.14',
            text: '팝업추가\n- 아파트 검색 팝업\n- 등기부등본 조회 팝업\n- 등기부등본 확인 팝업\n- 사업자 선택 팝업\n- 차량조회 팝업',
          },
          {
            date: '2023.07.07',
            text: '팝업추가\n- 한도 금리 확인 팝업',
          },
          {
            date: '2023.07.27',
            text: 'LM_P01_l009 전세가 항목 삭제',
          },
        ],
      },
      {
        depth2: '대출상담\nLM_P01_p001',
        depth3: '고객정보 입력\nLM_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P01_p002',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.07.27',
            text: '소유지 거주여부 항목 위치 수정',
          },
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
          {
            date: '2023.10.11',
            text: '입사연도, 입사월 항목 삭제 및 입사일 항목 추가, 연소득 항목 금액 표기, 사업자 정보 영역 전체 수정',
          },
          {
            date: '2023.11.28',
            text: '데이트피커 삭제 버튼 추가',
          },
        ],
      },
      {
        depth2: '현황조회\nLM_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/LM_P05_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.09',
            text: '조회 조건 입력 영역 추가',
          },
          {
            date: '2023.08.29',
            text: '조회기간 옵션 수정',
          },
          {
            date: '2023.09.08',
            text: '탭 문구 수정',
          },
        ],
      },
      {
        depth2: '현황조회\nLM_P05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-002',
        status: 'end',
        create: '2023.06.01',
        log: [
          {
            date: '2023.06.02',
            text: '팝업추가\n- 서류등록 팝업',
          },
          {
            date: '2023.08.11',
            text: 'LM_P05_l001 문구 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: 'LM 블로그 - 개인 (영업용)',
    datas: [
      {
        depth2: '홈\nLM_P07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/LM_P07_p001',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '홈\nLM_P07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-personal-001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.16',
            text: 'LM_P07_l001 개인금융, 기업금융, 자동차금융 상품 설명 이용 가능케 수정',
          },
        ],
      },
      {
        depth2: '빠른 대출상담',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-personal-002',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.07.27',
            text: 'LM_P07_l002 약관 내용 변경',
          },
        ],
      },
      {
        depth2: 'SMS 상담',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-personal-003',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '찾아오시는 길\nLM_P07_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/LM_P07_p002',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
    ],
  },
  {
    depth1: '오토금융',
    datas: [
      {
        depth2: '메인\nMain_P01_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/Main_P01_p002',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.18',
            text: '타이틀 및 서브타이틀 문구 수정',
          },
          {
            date: '2023.10.17',
            text: '컨텐츠 내 문구 전체 수정',
          },
        ],
      },
      {
        depth2: '다이렉트 장기렌터카\nAF_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P01_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.18',
            text: '견적조회, 렌터카 상담신청 버튼 삭제',
          },
          {
            date: '2023.08.29',
            text: '차량정보 영역 삭제 및 안내문구 수정',
          },
          {
            date: '2023.09.14',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '다이렉트 장기렌터카\nAF_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-001',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 모바일 진행 URL 전송 팝업',
          },
          {
            date: '2023.08.18',
            text: 'AF_P01_l002 팝업 삭제',
          },
        ],
      },
      {
        depth2: '다이렉트 오토리스\nAF_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P02_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.23',
            text: '버튼 삭제 및 컬러 변경',
          },
          {
            date: '2023.09.18',
            text: '문구 수정 및 항목 추가',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.16',
            text: '금융리스 및 상품안내 영역 항목 추가, 기타 영역 레벨 수정, 유의사항 문구 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '다이렉트 오토리스\nAF_P02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-005',
        status: 'end',
        create: '2023.11.30',
        log: [],
      },
      {
        depth2: '다이렉트 오토리스\nAF_P02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-006',
        status: 'end',
        create: '2024.04.05',
        log: [],
      },
      {
        depth2: '오토할부\nAF_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P03_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '오토할부\nAF_P03_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-002',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.10.26',
            text: '팝업 추가\n -AF_P03_l002\n -AF_P03_l003',
          },
          {
            date: '2023.10.30',
            text: 'AF_P03_l001 qr코드 이미지 교체',
          },
        ],
      },
      {
        depth2: '오토론\nAF_P04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P04_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '원큐다이렉트 오토론\nAF_P05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P05_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '금리 및 기간 영역 문구 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-003',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '차량번호 검색\nAF_P06_p002',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p002',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '제조사/모델 검색\nAF_P06_p003',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.08.11',
            text: '컨텐츠 내 문구 수정',
          },
        ],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '한도조회 결과\nAF_P06_p004',
        depth5: '심사 승인 대상',
        depth6: '',
        path: '/auto/AF_P06_p004_001',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '한도조회 결과\nAF_P06_p004',
        depth5: '기준가격 변경시',
        depth6: '',
        path: '/auto/AF_P06_p004_002',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '한도조회 결과\nAF_P06_p004',
        depth5: '한도 미발생',
        depth6: '',
        path: '/auto/AF_P06_p004_003',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '한도조회 결과\nAF_P06_p004',
        depth5: '시스템심사 & Fraud인 경우',
        depth6: '',
        path: '/auto/AF_P06_p004_004',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '대출신청',
        depth4: '신청완료\n',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p005',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '한도조회',
        depth4: '신청정보 입력\nAF_P06_p006',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p006',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.31',
            text: '차량구입금액 및 대출신청금액 텍스트필드 수정',
          },
        ],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '한도조회',
        depth4: '본인인증/약관동의\nAF_P06_p007',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p007',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '중고차 오토론\nAF_P06_p001',
        depth3: '한도조회',
        depth4: '상담요청\nAF_P06_p008',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P06_p008',
        status: 'end',
        create: '2023.06.23',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p001',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.10.13',
            text: '상품안내 간격 공통 수정',
          },
          {
            date: '2023.10.24',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.10.30',
            text: 'qr 코드 이미지 교체',
          },
          {
            date: '2023.12.05',
            text: '상품안내 전체 수정',
          },
        ],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-004',
        status: 'end',
        create: '2023.06.02',
        log: [
          { date: '2023.06.14', text: '팝업 추가\n- 승계 정보 제공 동의 팝업' },
        ],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양도인 신청',
        depth4: '본인인증\nAF_P07_p002',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p002',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양도인 신청',
        depth4: '승계 차량 선택\nAF_P07_p003',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p003',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양도인 신청',
        depth4: '승계신청 완료\nAF_P07_p004',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p004',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양도인 신청',
        depth4: '승계신청 완료\nAF_P07_p004',
        depth5: '승계 신청 URL 발송 완료\nAF_P07_p005',
        depth6: '',
        path: '/auto/AF_P07_p005',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '본인인증\nAF_P07_p013',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p013',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '승계차량 검색\nAF_P07_p006',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p006',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '리스 승계 정보확인\nAF_P07_p007',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p007',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '렌트 승계 정보확인\nAF_P07_p008',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p008',
        status: 'end',
        create: '2023.06.02',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '양수인 정보 입력\nAF_P07_p009',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p009',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.21',
            text: '마우스 버튼(보안 키패드 버튼) 삭제',
          },
        ],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '신청 완료\nAF_P07_p010',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p010',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '위임동의 요청 완료\nAF_P07_p012',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p012',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '오토승계\nAF_P07_p001',
        depth3: '양수인 신청',
        depth4: '심사서류 등록\nAF_P07_p015',
        depth5: '',
        depth6: '',
        path: '/auto/AF_P07_p015',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.27',
            text: '문구 수정 및 추가',
          },
        ],
      },
    ],
  },
  {
    depth1: '하나캐피탈 멤버십',
    datas: [
      {
        depth2: '메인\nMI_P03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p001',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.08.25',
            text: '아코디언 오픈 시 노출되는 텍스트 크기 수정',
          },
        ],
      },
      {
        depth2: '멤버십 안내\nMI_P03_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p002',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.08.11',
            text: '탈퇴하기 버튼 추가',
          },
          {
            date: '2023.11.07',
            text: '"현대렌탈" 로고 교체',
          },
        ],
      },
      {
        depth2: '회원가입',
        depth3: '본인인증\nMI_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p003',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '회원가입',
        depth3: '가입정보입력\nMI_P03_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p007',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '회원가입',
        depth3: '가입완료\nMI_P03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p004',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '회원탈회',
        depth3: '본인인증\nMI_P03_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p005',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '회원탈회',
        depth3: '탈회완료\nMI_P03_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/membership/MI_P03_p006',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
    ],
  },
  {
    depth1: '하나머니',
    datas: [
      {
        depth2: '하나머니 소개\nMI_P02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/hana-money/MI_P02_p001',
        status: 'end',
        create: '2023.06.09',
        log: [
          {
            date: '2023.07.31',
            text: '이미지 반영',
          },
          {
            date: '2023.10.16',
            text: '이미지 변경 및 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '가입하기\nMI_P02_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/hana-money/MI_P02_p002',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '가입하기\nMI_P02_p002',
        depth3: '회원정보 입력\nMI_P02_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/hana-money/MI_P02_p004',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
      {
        depth2: '가입하기\nMI_P02_p002',
        depth3: '가입완료\nMI_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/hana-money/MI_P02_p003',
        status: 'end',
        create: '2023.06.09',
        log: [],
      },
    ],
  },
  {
    depth1: '회사소개',
    datas: [
      {
        depth2: '메인\nCompany_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p001',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: 'CEO 소개\nCompany_P01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '연혁\nCompany_P01_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p003',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '사업분야\nCompany_P01_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p004',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.07.26',
            text: '글로벌금융 서비스 링크 기능 추가',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: 'IR정보',
        depth4: '목록\nCompany_P01_p005',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p005',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: 'IR정보',
        depth4: '상세\nCompany_P01_p006',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p006',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '지속가능경영',
        depth4: '목록\nCompany_P01_p007',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p007',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '지속가능경영',
        depth4: '상세\nCompany_P01_p008',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p008',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '하나금융그룹\nCompany_P01_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p009',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.07.26',
            text: '이미지 반영',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: '하나금융그룹\nCompany_P01_p010',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P01_p010',
        status: 'end',
        create: '2024.05.16',
        log: [
          {
            date: '2024.05.16',
            text: '새로운 캐릭터 페이지 추가',
          },
          {
            date: '2024.05.20',
            text: '별웅이 아래 문구 삭제',
          },
        ],
      },
      {
        depth2: '윤리경영',
        depth3: '윤리헌장\nCompany_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P02_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '윤리경영',
        depth3: '윤리강령\nCompany_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P02_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '윤리경영',
        depth3: '인권선언문\nCompany_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P02_p003',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '윤리경영',
        depth3: '인권선언문 구성체계\nCompany_P02_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P02_p004',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: 'PR',
        depth3: '보도자료',
        depth4: '목록\nCompany_P03_p001',
        depth5: '',
        depth6: '',
        path: '/company/Company_P03_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: 'PR',
        depth3: '보도자료',
        depth4: '상세\nCompany_P03_p002',
        depth5: '',
        depth6: '',
        path: '/company/Company_P03_p002',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: 'PR',
        depth3: '사회공헌',
        depth4: '목록\nCompany_P03_p003',
        depth5: '',
        depth6: '',
        path: '/company/Company_P03_p003',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: 'PR',
        depth3: '사회공헌',
        depth4: '상세\nCompany_P03_p004',
        depth5: '',
        depth6: '',
        path: '/company/Company_P03_p004',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '투자정보',
        depth3: '재무현황\nCompany_P04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P04_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '투자정보',
        depth3: '영업현황\nCompany_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P04_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '투자정보',
        depth3: '경영공시\nCompany_P04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P04_p003',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '투자정보',
        depth3: '신용등급\nCompany_P04_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P04_p004',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.07.27',
            text: '문구 수정',
          },
        ],
      },
      {
        depth2: '채용정보',
        depth3: '인재상\nCompany_P05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '채용정보',
        depth3: '전형방법\nCompany_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p002',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '채용정보',
        depth3: '인사제도\n복리후생\nCompany_P05_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p003',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '채용정보',
        depth3: '채용공고',
        depth4: '목록\nCompany_P05_p004',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p004',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '채용정보',
        depth3: '채용공고',
        depth4: '상세\nCompany_P05_p005',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p005',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.12.22',
            text: '버튼 케이스 추가',
          },
        ],
      },
      {
        depth2: '채용정보',
        depth3: '채용공고',
        depth4: '상세\nCompany_P05_p005',
        depth5: '',
        depth6: '',
        path: '/company/Company_P05_p005_test',
        status: 'end',
        create: '2024.01.09',
        log: [],
      },
    ],
  },
  {
    depth1: '에이전트 홈페이지 (영업용)',
    datas: [
      {
        depth2: '공통',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/agent-001',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.07.07',
            text: '팝업 추가\n- 상담등록 내역 조회 팝업(내구재할부)\n- 상담등록 내역 조회 팝업(할부승계)\n- 상담/사전승인 내역 조회 팝업\n- 우편번호 검색 팝업\n- 개설은행 조회 팝업\n- 국적 조회 팝업\n- 제조사 팝업\n- 사전신용정보조회동의 URL 발송',
          },
          {
            date: '2023.08.14',
            text: '- Agent_P00_l003 정렬 수정, x버튼 라인 삭제, 상담결과 라디오 버튼 추가\n- Agent_P00_l004 상담결과 라디오 버튼 추가, 정렬 수정, x버튼 라인 삭제\n- Agent_P00_l005 정렬 수정, x버튼 라인 삭제\n- Agent_P00_l007 정렬 수정, x버튼 라인 삭제\n- Agent_P00_l008 정렬 수정, x버튼 라인 삭제\n- Agent_P00_l009 정렬 수정, x버튼 라인 삭제, byte 계산 추가, 전송버튼 수정\n- Agent_P00_l010 정렬 수정, x버튼 라인 삭제\n- Agent_P00_l012 정렬 수정, x버튼 라인 삭제, 조회된 내역 없는 경우 추가',
          },
          {
            date: '2023.08.16',
            text: '- Agent_P00_l009 전송버튼 글자크기 수정',
          },
          {
            date: '2023.10.12',
            text: 'Agent_P00_l003 테이블 내 버튼 색상 변경',
          },
        ],
      },
      {
        depth2: '공통',
        depth3: '오류화면',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P00_p001',
        status: 'end',
        create: '2023.07.07',
        log: [],
      },
      {
        depth2: '메인\nAgent_P01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P01_p001',
        status: 'end',
        create: '2023.07.07',
        log: [],
      },
      {
        depth2: '메인\nAgent_P01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/agent-002',
        status: 'end',
        create: '2023.06.14',
        log: [],
      },
      {
        depth2: '내구재할부',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/agent-003',
        status: 'end',
        create: '2023.06.14',
        log: [
          {
            date: '2023.07.07',
            text: '팝업 추가\n- 판매대리점조회 팝업\n- 품목선택 팝업\n- 상환스케쥴시뮬레이터 팝업\n- 본인확인(본의명의휴대폰소지자) 팝업\n- 하나캐피탈 전자 약정 URL 발송 팝업\n- 판매점 제휴 협약을 위한 개인(신용)정보동의 URL 발송 팝업\n- 하나캐피탈 할부 상담 URL 발송',
          },
          {
            date: '2023.08.14',
            text: '- Agent_P02_l002 정렬 수정, x버튼 라인 삭제, 내구재선취수수료율 → 내구재물품기본금리로 수정\n- Agent_P02_l004 정렬 수정, x버튼 라인 삭제, 스크립트 내용 한줄만 노출\n- Agent_P02_l005 정렬 수정, x버튼 라인 삭제, byte 계산 추가, input default 노출, 전송버튼 수정\n- Agent_P02_l006 정렬 수정, x버튼 라인 삭제, byte 계산 추가, input default 노출, 전송버튼 수정\n- Agent_P02_l007 정렬 수정, x버튼 라인 삭제, byte 계산 추가, input default 노출, 전송버튼 수정',
          },
          {
            date: '2023.08.16',
            text: '- Agent_P02_l005 전송버튼 글자크기 수정\n- Agent_P02_l006 전송버튼 글자크기 수정\n- Agent_P02_l007 전송버튼 글자크기 수정',
          },
          {
            date: '2023.09.19',
            text: '팝업 추가\n- Agent_P02_l008',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '사전동의리스트\nAgent_P02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p001',
        status: 'end',
        create: '2023.07.07',
        log: [{ date: '2023.08.14', text: '조회조건 -> 신청일자로 수정' }],
      },
      {
        depth2: '내구재할부',
        depth3: '상담등록\nAgent_P02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p002',
        status: 'end',
        create: '2023.07.07',
        log: [{ date: '2023.08.14', text: '마우스오버시 열색 변경' }],
      },
      {
        depth2: '내구재할부',
        depth3: '상담등록 내역\nAgent_P02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p003',
        status: 'end',
        create: '2023.07.07',
        log: [
          { date: '2023.08.14', text: '판정결과 삭제' },
          { date: '2023.10.12', text: '테이블 내 버튼 색상 변경' },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '계약등록\nAgent_P02_p004\nAgent_P02_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p004',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '신품여부 -> 납부방법 변경, 설립일자 / 대표업태 / 대표업종 추가, 전화번호 입력칸 변경, 이용인 탭에 설립일자 / 대표업태 / 대표업종 추가, 전화번호 입력칸 변경',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '계약등록내역\nAgent_P02_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p006',
        status: 'end',
        create: '2023.07.07',
        log: [{ date: '2023.10.12', text: '테이블 내 버튼 색상 변경' }],
      },
      {
        depth2: '내구재할부',
        depth3: '대금결제내역\nAgent_P02_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p007',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '동의요청일자 -> 결제일로 수정',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '판매점/품목내역\nAgent_P02_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p008',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '사업자번호 -> 판매점으로 수정',
          },
        ],
      },
      {
        depth2: '내구재할부',
        depth3: '민원접수내역\nAgent_P02_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P02_p009',
        status: 'end',
        create: '2023.07.07',
        log: [],
      },
      {
        depth2: '할부승계',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/agent-004',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '- Agent_P03_l001 정렬 수정, x버튼 라인 삭제\n- Agent_P03_l002 정렬 수정, x버튼 라인 삭제, byte 계산 추가\n- Agent_P03_l003 정렬 수정, x버튼 라인 삭제, byte 계산 추가, input default 추가, 전송버튼 수정\n- Agent_P03_l004 정렬 수정, x버튼 라인 삭제, byte 계산 추가, 하나캐피탈 전자 약정 URL 발송 -> 하나캐피탈 전자 약정 URL 전송으로 수정, 전송버튼 수정',
          },
          {
            date: '2023.08.16',
            text: '- Agent_P03_l003 전송버튼 글자크기 수정\n- Agent_P03_l004 전송버튼 글자크기 수정',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '상담등록\nAgent_P03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '이용자 연대보증인 내역 판정결과 삭제, 마우스오버시 열색 변경',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '상담등록내역\nAgent_P03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p002',
        status: 'end',
        create: '2023.07.07',
        log: [],
      },
      {
        depth2: '할부승계',
        depth3: '계약등록\nAgent_P03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p003',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.14',
            text: '전화번호 입력칸 수정',
          },
        ],
      },
      {
        depth2: '할부승계',
        depth3: '계약등록내역\nAgent_P03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P03_p004',
        status: 'end',
        create: '2023.07.07',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '목록\nAgent_P04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P04_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세\nAgent_P04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P04_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '교육정보',
        depth3: '목록\nAgent_P05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P05_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '교육정보',
        depth3: '상세\nAgent_P05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P05_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '업무절차',
        depth3: '목록\nAgent_P06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P06_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '업무절차',
        depth3: '상세\nAgent_P06_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P06_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '각종서식다운로드',
        depth3: '목록\nAgent_P07_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P07_p001',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '각종서식다운로드',
        depth3: '상세\nAgent_P07_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P07_p002',
        status: 'end',
        create: '2023.06.16',
        log: [],
      },
      {
        depth2: '채권양수도',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/agent-005',
        status: 'end',
        create: '2023.08.16',
        log: [
          {
            date: '2023.08.24',
            text: 'Agent_P09_l001 하단 버튼 고정 기능 제거',
          },
          {
            date: '2023.12.11',
            text: 'Agent_P09_l001 고객명 항목 문구 수정',
          },
        ],
      },
      {
        depth2: '채권양수도',
        depth3: '매입진행내역\nAgent_P09_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '채권양수도',
        depth3: '수납진행내역\nAgent_P09_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p002',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '채권양수도',
        depth3: '사전심사진행내역\nAgent_P09_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p003',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
          {
            date: '2023.12.11',
            text: '테이블 내 "신청금액" 항목 추가',
          },
        ],
      },
      {
        depth2: '채권양수도',
        depth3: '취소/상환금액 확인\nAgent_P09_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p005',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '채권양수도',
        depth3: '연체매각리스트\nAgent_P09_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P09_p006',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '1차정산내역\nAgent_P10_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p001',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
          {
            date: '2023.12.11',
            text: '옵션 및 테이블 항목 수정',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '2차정산내역\nAgent_P10_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p002',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '심사승인내역\nAgent_P10_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p003',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '한도현황\nAgent_P10_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p004',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
      {
        depth2: '선정산',
        depth3: '사전동의내역\nAgent_P10_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/agent/Agent_P10_p005',
        status: 'end',
        create: '2023.07.07',
        log: [
          {
            date: '2023.08.23',
            text: '소스 전면 재작업',
          },
        ],
      },
    ],
  },
  // 20240313
  {
    depth1: 'CRM',
    datas: [
      {
        depth2: '메인',
        depth3: '상담목록',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/crm/Crm_P00_p001',
        status: 'end',
        create: '2024.03.15',
        log: [],
      },
      {
        depth2: '메인',
        depth3: '상담목록',
        depth4: '상담상세',
        depth5: '',
        depth6: '',
        path: '/crm/Crm_P00_p002',
        status: 'end',
        create: '2024.03.15',
        log: [],
      },
      {
        depth2: '메인',
        depth3: '제휴사 관리',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/crm/Crm_P01_p001',
        status: 'end',
        create: '2024.03.15',
        log: [],
      },
      {
        depth2: '메인',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/GuideCrm001',
        status: 'end',
        create: '2024.03.15',
        log: [],
      },
    ],
  },
  // 20240313
];

export default {
  setup() {
    const tableDatas = datas();

    const route = useRoute();

    const statusText = {
      pending: '보류',
      ing: '작업중',
      partend: '부분작업완료',
      end: '작업완료',
      moding: '수정중',
      confirm: '검수완료',
    };
    const dates = (() => {
      const array = [];

      const add = (date) => {
        if (
          typeof date === 'string' &&
          date.length &&
          array.indexOf(date) === -1
        ) {
          array.push(date);
        }
      };

      tableDatas.forEach((item) => {
        item.datas.forEach((data) => {
          add(data.create);

          data.log.sort((a, b) => {
            var dateA = a.date.toUpperCase();
            var dateB = b.date.toUpperCase();
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }
            return 0;
          });

          data.log.forEach((log) => {
            add(log.date);
          });

          if (data.log.length) {
            data.update = data.log[data.log.length - 1].date;
          }
        });
      });

      array.sort();

      return array;
    })();
    const latestDate = dates[dates.length - 1];

    const renderVal = (datas, i, key, testKey) => {
      const val = datas[i][key];
      const testVal = testKey && datas[i][testKey];
      const prevIndex = i - 1;
      const result = val.replace(/\n/g, '<br>');

      if (!(prevIndex >= 0 && datas[prevIndex])) return result;

      const noRender = datas[prevIndex][key] === val;

      if (testVal) {
        if (testVal === datas[prevIndex][testKey] && noRender) {
          return '';
        } else {
          return result;
        }
      } else {
        if (noRender) {
          return '';
        } else {
          return result;
        }
      }
    };

    const printVal = (val) => {
      return val.replace(/\n/g, '<br>');
    };

    const bottomBar = ref(null);
    const fake = ref(null);

    const path = computed(() => {
      return route.path;
    });

    const update = () => {
      if (bottomBar.value && fake.value) {
        const height = bottomBar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && bottomBar.value) {
        bottomBar.value.style.marginLeft = `-${html.scrollLeft}px`;
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      bottomBar,
      fake,
      tableDatas,
      statusText,
      latestDate,
      path,
      renderVal,
      printVal,
    };
  },
};
</script>

<template>
  <div class="contIndex">
    <div class="index-wrap">
      <div class="index">
        <h1 class="index-title">하나캐피탈 - PC</h1>
        <div class="index-gnb">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                :href="`${
                  path.match('guide-index') ? '..' : '.'
                }/ui-guide/component`"
                target="_blank"
                class="index-button"
              >
                컴포넌트 가이드
              </a>
            </div>
          </div>
        </div>
        <div class="index-bottom" ref="bottomBar">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                v-for="(item, i) in tableDatas"
                :key="i"
                :href="`#section${i}`"
                class="index-button"
              >
                {{ item.depth1 }}
              </a>
            </div>
          </div>
        </div>
        <div class="index-datas" id="indexTable">
          <div
            class="index-section"
            v-for="(item, i) in tableDatas"
            :key="i"
            :id="`section${i}`"
          >
            <h2 class="index-section__title">{{ item.depth1 }}</h2>
            <div class="index-table">
              <table>
                <colgroup>
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col />
                  <col width="100px" />
                  <col width="100px" />
                  <col width="110px" />
                  <col width="300px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>depth2</th>
                    <th>depth3</th>
                    <th>depth4</th>
                    <th>depth5</th>
                    <th>depth6</th>
                    <th>path</th>
                    <th>status</th>
                    <th>create</th>
                    <th>update</th>
                    <th>log</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in item.datas" :key="i">
                    <td v-html="renderVal(item.datas, i, 'depth2')"></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth3', 'depth2')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth4', 'depth3')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth5', 'depth4')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth6', 'depth5')"
                    ></td>
                    <td>
                      <a
                        :href="`${path.match('guide-index') ? '..' : '.'}${
                          data.path
                        }`"
                        target="_blank"
                      >
                        {{ data.path }}
                      </a>
                    </td>
                    <td>
                      <span
                        v-if="data.status.length"
                        :class="`index-status index-status--${data.status}`"
                      >
                        {{ statusText[data.status] }}
                      </span>
                    </td>
                    <td
                      :class="{
                        'is-emphasis': latestDate === data.create,
                      }"
                    >
                      {{ data.create }}
                    </td>
                    <td
                      :class="[
                        {
                          'is-emphasis': latestDate === data.update,
                        },
                      ]"
                    >
                      {{ data.update }}
                    </td>
                    <td>
                      <ul v-if="data.log.length" class="index-log">
                        <li
                          v-for="(log, i) in data.log"
                          :key="i"
                          :class="[
                            'index-log__item',
                            {
                              'is-emphasis': latestDate === log.date,
                            },
                          ]"
                        >
                          <div class="index-log__date">
                            <span>[{{ log.date }}]</span>
                          </div>
                          <div
                            class="index-log__text"
                            v-html="printVal(log.text)"
                          ></div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-fake-botttom" ref="fake"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideIndex.scss';
</style>
