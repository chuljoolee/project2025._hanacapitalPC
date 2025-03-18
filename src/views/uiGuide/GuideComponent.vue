<script>
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ModalPopup from '@/components/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components/ui/layer/ModalPopupHead.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import SecurityKeypadButton from '@/components/ui/button/SecurityKeypadButton.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import TextProgress from '@/components/ui/progress/TextProgress.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabList from '@/components/ui/tab/UiTabList.vue';
import UiTabButton from '@/components/ui/tab/UiTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import SubTab from '@/components/ui/tab/SubTab.vue';
import SubTabButton from '@/components/ui/tab/SubTabButton.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicBoxFoot from '@/components/ui/common/BasicBoxFoot.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import BankFullLogo from '@/components/ui/imageData/BankFullLogo.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import BasicBannerSlide from '@/components/ui/banner/BasicBannerSlide.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import SelectTableRadioCell from '@/components/ui/table/SelectTableRadioCell.vue';
import UiScroller from '@/components/ui/common/UiScroller.vue';
import ImageBannerSlide from '@/components/ui/banner/ImageBannerSlide.vue';
import SimpleInput from '@/components/ui/form/SimpleInput.vue';
import SimpleSelect from '@/components/ui/form/SimpleSelect.vue';
import SimpleDatepicker from '@/components/ui/form/SimpleDatepicker.vue';
import SearchForm from '@/components/ui/form/SearchForm.vue';
import SearchFormList from '@/components/ui/form/SearchFormList.vue';
import SearchFormItem from '@/components/ui/form/SearchFormItem.vue';
import SearchFormSection from '@/components/ui/form/SearchFormSection.vue';
import SearchFormTitle from '@/components/ui/form/SearchFormTitle.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconStar from '@/assets/images/icon/star-badge.svg?component';
import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCallMint from '@/assets/images/icon/call-mint.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconImgColor from '@/assets/images/icon/img-color.svg?component';
import IconImg from '@/assets/images/icon/img.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';
import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCommision from '@/assets/images/icon/commission.svg?component';
import IconMembershipDriver from '@/assets/images/icon/membership-driver.svg?component';
import IconMembershipCrown from '@/assets/images/icon/membership-crown.svg?component';
import IconMembershipRate from '@/assets/images/icon/membership-rate.svg?component';
import IconMembershipCar from '@/assets/images/icon/membership-car.svg?component';
import IconMembershipBuilding from '@/assets/images/icon/membership-building.svg?component';
import IconDownloadSmall from '@/assets/images/icon/download-small.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';
import IconAssignment from '@/assets/images/icon/assignment.svg?component';
import IconTakingOver from '@/assets/images/icon/taking-over.svg?component';

import ImgMainSample from '@/assets/images/_dummy/main-sample.svg?component';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,

    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupText,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    FullPopup,
    FullPopupHead,
    AlertPopup,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    BasicDatepicker,
    BasicTextarea,
    SecurityInput,
    PartInput,
    SecurityKeypadButton,
    SearchButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    StepProgress,
    TextProgress,
    RoundStatus,
    NoticeText,
    UiTab,
    UiTabList,
    UiTabButton,
    UiTabPanel,
    NavTab,
    NavTabButton,
    FilterTab,
    FilterTabButton,
    SubTab,
    SubTabButton,
    RoundTab,
    RoundTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicBanner,
    EventBanner,
    BasicBannerSlide,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicBoxFoot,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    UnitText,
    BankLogo,
    BankFullLogo,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    CarThumb,
    CarEmblem,
    ColorChip,
    BasicTooltip,
    SelectTable,
    SelectTableRow,
    SelectTableRadioCell,
    UiScroller,
    ImageBannerSlide,
    SimpleInput,
    SimpleSelect,
    SimpleDatepicker,
    SearchForm,
    SearchFormList,
    SearchFormItem,
    SearchFormSection,
    SearchFormTitle,

    IconAdd,
    IconPerson,
    IconBuilding,
    IconCustomer,
    IconLogo,
    IconLink,
    IconSearchMoney,
    IconInterestRate,
    IconStar,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
    IconCallMint,
    IconCompleted,
    IconImgColor,
    IconImg,
    IconTooltip,
    IconMoney,
    IconRate,
    IconDate,
    IconCommision,
    IconMembershipDriver,
    IconMembershipCrown,
    IconMembershipRate,
    IconMembershipCar,
    IconMembershipBuilding,
    IconDownloadSmall,
    IconCall,
    IconAssignment,
    IconTakingOver,

    ImgMainSample,
  },

  setup() {
    const state = reactive({
      testError001: false,
      testMinDate001: '',
      testMaxDate001: '',
      testMinDate002: '',
      testMaxDate002: '',
      testMinDate003: '',
      testMaxDate003: '',
      testSearchMinDate001: '',
      testSearchMaxDate001: '',
    });

    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);
    const layerTest005 = ref(null);
    const layerTest006 = ref(null);
    const layerTest007 = ref(null);
    const testAccordion = ref(null);

    const layerOpenTest001 = (e = {}) => {
      layerTest001.value.open(e.target);
    };
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    const layerOpenTest004 = (e = {}) => {
      layerTest004.value.open(e.target);
    };
    const layerOpenTest005 = (e = {}) => {
      layerTest005.value.open(e.target);
    };
    const layerOpenTest006 = (e = {}) => {
      layerTest006.value.open(e.target);
    };
    const layerOpenTest007 = (e = {}) => {
      layerTest007.value.open(e.target);
    };

    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    const testAccordionAllOpen = () => {
      testAccordion.value.allOpen();
    };
    const testAccordionAllClose = () => {
      testAccordion.value.allClose();
    };

    return {
      BASE_URL,
      modules: [Pagination, A11y],
      state,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      layerTest005,
      layerTest006,
      layerTest007,
      testAccordion,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      layerOpenTest005,
      layerOpenTest006,
      layerOpenTest007,
      testErrorUpdate001,
      testInputEvent,
      testAccordionAllOpen,
      testAccordionAllClose,
    };
  },
};
</script>

<template>
  <div class="test-component-wrap">
    <h1 class="test-title">Components</h1>

    <section class="test-section">
      <h2 class="test-section-title">Layer</h2>
      <div class="test-section-sub">
        <UiLayer ref="layerTest001" v-slot="layerSlotProps">
          <ModalPopup>
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>최대 높이 800px</PopupText>

            <BasicButton
              @click="
                layerSlotProps.close();
                layerOpenTest002();
              "
              >높이 고정 팝업</BasicButton
            >

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest002" v-slot="layerSlotProps">
          <ModalPopup :fix="true">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest004" v-slot="layerSlotProps">
          <ModalPopup size="regular">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 800px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest005" v-slot="layerSlotProps">
          <ModalPopup size="large">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 1240px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest007" v-slot="layerSlotProps">
          <ModalPopup size="wide">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 1300px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest003" v-slot="layerSlotProps">
          <AlertPopup>
            <template v-slot:head>
              <PopupTitle>타이틀</PopupTitle>
            </template>
            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>


            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    @click="layerSlotProps.close()"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular" @click="layerSlotProps.close()"
                    >Button 2</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </template>
          </AlertPopup>
        </UiLayer>

        <UiLayer ref="layerTest006" type="full" v-slot="layerSlotProps">
          <FullPopup>
            <template v-slot:head>
              <FullPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </FullPopupHead>
            </template>

            <PopupText>// contents</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </FullPopup>
        </UiLayer>

        <BasicButton @click="layerOpenTest001">모달 팝업</BasicButton>
        <BasicButton @click="layerOpenTest002"
          >모달 팝업 (높이 고정)</BasicButton
        >
        <BasicButton @click="layerOpenTest004"
          >모달 팝업 (너비 800)</BasicButton
        >
        <BasicButton @click="layerOpenTest005"
          >모달 팝업 (너비 1240)</BasicButton
        >
        <BasicButton @click="layerOpenTest007"
          >모달 팝업 (너비 1300)</BasicButton
        >
        <BasicButton @click="layerOpenTest006">전체 팝업</BasicButton>
        <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BasicButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">button tag</h3>
        <BasicButton>Button</BasicButton>
        <BasicButton :disabled="true">Button</BasicButton>
        <BasicButton theme="secondary">Button</BasicButton>
        <BasicButton theme="secondary" :disabled="true">Button</BasicButton>
        <BasicButton theme="tertiary">Button</BasicButton>
        <BasicButton theme="tertiary" :disabled="true">Button</BasicButton>
        <BasicButton theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>

        <BasicButton :line="true">Button</BasicButton>
        <BasicButton :line="true" :disabled="true">Button</BasicButton>
        <BasicButton :line="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton :line="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a tag</h3>
        <BasicButton tagName="a">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="a" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" :line="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <BasicButton tagName="RouterLink" to="/">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton
          tagName="RouterLink"
          to="/"
          :line="true"
          disabledStyle="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular</h3>
        <BasicButton size="regular">Button</BasicButton>
        <BasicButton size="regular" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="regular" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="regular" theme="secondary">Button</BasicButton>
        <BasicButton size="regular" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="tertiary">Button</BasicButton>
        <BasicButton size="regular" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="regular" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small</h3>
        <BasicButton size="small">Button</BasicButton>
        <BasicButton size="small" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="small" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="small" theme="secondary">Button</BasicButton>
        <BasicButton size="small" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="tertiary">Button</BasicButton>
        <BasicButton size="small" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="small" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">inline style</h3>
        <BasicButton inline="true">Button</BasicButton>
        <BasicButton inline="true" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" inline="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton inline="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">only icon</h3>
        <BasicButton inline="true" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Button List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <ButtonList>
          <ButtonListItem flex="none">
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Left</h3>
        <ButtonList align="left">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <ButtonList align="center">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Right</h3>
        <ButtonList align="right">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Full</h3>
        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>
        <ButtonList :wrap="true">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>
        <ButtonList :wrap="true" :col="3">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 5</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>
        <ButtonList :wrap="true" :col="4">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Text Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextButton>Button</TextButton>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quaternary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quinary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a Tag</h3>
        <TextButton tagName="a" href="">Button</TextButton>
        <TextButton tagName="a" href="" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton tagName="a" href="" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <TextButton tagName="RouterLink" to="">Button</TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="secondary"
          :iconFillAll="true"
        >
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="tertiary"
          :iconFillAll="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">underline</h3>
        <TextButton :underline="true">Button</TextButton>
        <TextButton theme="secondary" :underline="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :underline="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size regular</h3>
        <TextButton iconSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size medium</h3>
        <TextButton iconSize="medium" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="medium" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size large</h3>
        <TextButton iconSize="large" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="large" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">text size regular</h3>
        <TextButton textSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton textSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">text size medium</h3>
        <TextButton textSize="medium" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton textSize="medium" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">block</h3>
        <TextButton :block="true">Button</TextButton>
        <TextButton theme="secondary" :block="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :block="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Loading Icon</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sun-title">Default</h3>

        <div
          style="
            display: inline-block;
            padding: 20px;
            background-color: #bdbdbd;
            box-sizing: border-box;
          "
        >
          <div :class="$style['loading-icon']"></div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ContentsButton>
          <h3 class="text-body-1 row-margin-small">타이틀</h3>
          <KeyValue align="left" margin="small" size="medium">
            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>도로명</KeyValueTitle>
              <KeyValueText>인천 서구 에코로 181</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>입력 주소</KeyValueTitle>
              <KeyValueText>하나금융그룹 로비</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </ContentsButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">CheckBox</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CheckBox id="testCheckBox001" @change="testInputEvent">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox002"
          :defaultChecked="true"
          @change="testInputEvent"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox003" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox004" :disabled="true" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <CheckBox id="testCheckBox005" align="center">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox006" align="center" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox007" align="center" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox008"
          align="center"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <CheckBox id="testCheckBox009" :full="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox010" :full="true" :defaultChecked="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox011" :full="true" :disabled="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox
          id="testCheckBox012"
          :full="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <CheckBox id="testCheckBox013" :onlyObject="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox014"
          :onlyObject="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox015" :onlyObject="true" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox016"
          :onlyObject="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <CheckBox id="testCheckBox017" theme="secondary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox018" theme="secondary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox019" theme="secondary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox020"
          theme="secondary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <CheckBox id="testCheckBox021" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox022" theme="tertiary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox023" theme="tertiary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox024"
          theme="tertiary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quaternary</h3>
        <CheckBox id="testCheckBox025" theme="quaternary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox026"
          theme="quaternary"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox027" theme="quaternary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox028"
          theme="quaternary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quinary</h3>
        <CheckBox id="testCheckBox029" theme="quinary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox030" theme="quinary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox031" theme="quinary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox032"
          theme="quinary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">RadioButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RadioButton
          name="testRadioButton001"
          id="testRadioButton001_001"
          @change="testInputEvent"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001"
          id="testRadioButton001_002"
          :defaultChecked="true"
          @change="testInputEvent"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001d"
          id="testRadioButton001d_001"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001d"
          id="testRadioButton001d_002"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <RadioButton
          name="testRadioButton002"
          id="testRadioButton002_001"
          align="center"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002"
          id="testRadioButton002_002"
          align="center"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002d"
          id="testRadioButton002d_001"
          align="center"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002d"
          id="testRadioButton002d_002"
          align="center"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <RadioButton
          name="testRadioButton003"
          id="testRadioButton003_001"
          :full="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003"
          id="testRadioButton003_002"
          :full="true"
          :defaultChecked="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003d"
          id="testRadioButton003d_001"
          :full="true"
          :disabled="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003d"
          id="testRadioButton003d_002"
          :full="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <RadioButton
          name="testRadioButton004"
          id="testRadioButton004_001"
          :onlyObject="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004"
          id="testRadioButton004_002"
          :onlyObject="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004d"
          id="testRadioButton004d_001"
          :onlyObject="true"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004d"
          id="testRadioButton004d_002"
          :onlyObject="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <RadioButton
          name="testRadioButton005"
          id="testRadioButton005_001"
          theme="secondary"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005"
          id="testRadioButton005_002"
          theme="secondary"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005d"
          id="testRadioButton005d_001"
          theme="secondary"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005d"
          id="testRadioButton005d_002"
          theme="secondary"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <RadioButton
          name="testRadioButton006"
          id="testRadioButton006_001"
          theme="tertiary"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006"
          id="testRadioButton006_002"
          theme="tertiary"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006d"
          id="testRadioButton006d_001"
          theme="tertiary"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006d"
          id="testRadioButton006d_002"
          theme="tertiary"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Check List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="[$style['check-list'], 'row-margin-contents']">
          <ul :class="$style['check-list__list']">
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_001">
                <RadioButtonObject />
                <RadioButtonLabelText>신용평점(등급) 개선</RadioButtonLabelText>
              </RadioButton>
            </li>
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_002">
                <RadioButtonObject />
                <RadioButtonLabelText>재무상태 개선</RadioButtonLabelText>
              </RadioButton>
            </li>
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_003">
                <RadioButtonObject />
                <RadioButtonLabelText>기타 신용도 상승</RadioButtonLabelText>
              </RadioButton>
            </li>
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_004">
                <RadioButtonObject />
                <RadioButtonLabelText>소득증가</RadioButtonLabelText>
              </RadioButton>
            </li>
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_005">
                <RadioButtonObject />
                <RadioButtonLabelText>재산증가</RadioButtonLabelText>
              </RadioButton>
            </li>
            <li :class="$style['check-list__item']">
              <RadioButton name="testCheckList001" id="testCheckList001_006">
                <RadioButtonObject />
                <RadioButtonLabelText>기타 소득증가</RadioButtonLabelText>
              </RadioButton>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Form</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testErrorUpdate001(true)">에러 On</button>
        <button type="button" @click="testErrorUpdate001(false)">
          에러 Off
        </button>

        <FormList>
          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput001"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <template v-slot:innerLeft>text</template>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput001"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>text</template>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    button
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput002"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput002"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="value"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="1234"
                    :readonly="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="인증번호"
            titleOptionalText="(6자리)"
            target="#testInput003"
            :forceFocus="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="testInput003"
                    placeholder="인증번호를 입력해 주세요"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-red">00:00</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'SKT',
                      },
                      {
                        value: '2',
                        label: 'KT',
                      },
                      {
                        value: '3',
                        label: 'LG U+',
                      },
                      {
                        value: '4',
                        label: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        label: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        label: '알뜰폰 LG +',
                      },
                    ]"
                    title="통신사"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
                <template v-slot:right>
                  <!-- Case : 전송 전 -->
                  <BasicButton size="small" theme="quaternary">
                    인증번호 전송
                  </BasicButton>
                  <!-- Case : 전송 전 -->

                  <!-- Case : 전송 후
                  <BasicButton size="small" theme="quaternary">
                    인증번호 재전송
                  </BasicButton>
                  -->
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(6자리)"
            target="#testInput005"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput005"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <PartInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 뒤 7자리 중 첫번째자리"
                    :afterDot="6"
                    :placeholderDot="true"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#testInput006">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput006"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, false, false, false, false]"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput007">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput007" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput010"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput010"
                    :selectable="
                      (option) => {
                        switch (option.value) {
                          case '3':
                          case '4':
                            return false;
                          default:
                            return true;
                        }
                      }
                    "
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput011"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput011"
                    defaultValue="4"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="인도 요청일" target="#testInput012Button">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="인도 요청일"
                    id="testInput012"
                    buttonId="testInput012Button"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" target="#testInput013StartButton">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput013Start"
                    buttonId="testInput013StartButton"
                    :max="state.testMaxDate001"
                    v-model="state.testMinDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput013End"
                    buttonId="testInput013EndButton"
                    :min="state.testMinDate001"
                    v-model="state.testMaxDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.testError001">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_001"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_004"
                  >
                    <BoxCheckLabel>1년</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput014Start"
                    buttonId="testInput014StartButton"
                    :max="state.testMaxDate002"
                    v-model="state.testMinDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput014End"
                    buttonId="testInput014EndButton"
                    :min="state.testMinDate002"
                    v-model="state.testMaxDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이메일" target="#testInput015">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이메일 아이디" id="testInput015" />
                </InputBlockCell>
                <InputBlockCell margin="regular">@</InputBlockCell>
                <InputBlockCell margin="regular" :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'naver.com',
                      },
                      {
                        value: '2',
                        label: 'hanmail.net',
                      },
                      {
                        value: '3',
                        label: 'gmail.com',
                      },
                      {
                        value: '4',
                        label: 'nate.com',
                      },
                      {
                        value: '5',
                        label: 'paran.com',
                      },
                      {
                        value: '6',
                        label: 'dreamwiz.com',
                      },
                      {
                        value: '7',
                        label: 'yahoo.com',
                      },
                      {
                        value: '8',
                        label: 'freechal.com',
                      },
                      {
                        value: '9',
                        label: '직접입력',
                      },
                    ]"
                    title="이메일 도메인"
                    placeholder="선택"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- Case : 직접입력 선택 시 노출 -->
              <InputBlock
                :error="state.testError001"
                :classNames="{
                  wrap: 'row-margin-item-group row-margin-bottom-none',
                }"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이메일 도메인 직접입력"
                    id="testInput015_emailDomainSelf"
                  />
                </InputBlockCell>
              </InputBlock>
              <!-- //Case : 직접입력 선택 시 노출 -->
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            :disabled="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <FormList :wrap="true">
          <FormListItem titleText="이름" target="#testInput016">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput016" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput017">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput017" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput018">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput018" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Search</h3>

        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="아파트 검색어"
              placeholder="동(읍/면) 또는 아파트 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Placeholder</h3>

        <FormList>
          <FormListItem titleText="title text" target="#testInput019">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="title"
                    id="testInput019"
                    placeholder="placeholder"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="title text"
            :selectOnly="true"
            target="#testInput020"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'Option 001',
                      },
                      {
                        value: '2',
                        label: 'Option 002',
                      },
                      {
                        value: '3',
                        label: 'Option 003',
                      },
                      {
                        value: '4',
                        label: 'Option 004',
                      },
                      {
                        value: '5',
                        label: 'Option 005',
                      },
                      {
                        value: '6',
                        label: 'Option 006',
                      },
                      {
                        value: '7',
                        label: 'Option 007',
                      },
                      {
                        value: '8',
                        label: 'Option 008',
                      },
                    ]"
                    title="title"
                    inputId="testInput020"
                    placeholder="placeholder"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="title text"
            :forceFocus="true"
            target="#testInput021"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="title"
                    id="testInput021"
                    placeholder="placeholder"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="title text"
            :forceFocus="true"
            :selectOnly="true"
            target="#testInput022"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'Option 001',
                      },
                      {
                        value: '2',
                        label: 'Option 002',
                      },
                      {
                        value: '3',
                        label: 'Option 003',
                      },
                      {
                        value: '4',
                        label: 'Option 004',
                      },
                      {
                        value: '5',
                        label: 'Option 005',
                      },
                      {
                        value: '6',
                        label: 'Option 006',
                      },
                      {
                        value: '7',
                        label: 'Option 007',
                      },
                      {
                        value: '8',
                        label: 'Option 008',
                      },
                    ]"
                    title="title"
                    inputId="testInput022"
                    placeholder="placeholder"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Simple Input</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <SimpleInput
              :error="state.testError001"
              :maxlength="150"
              :count="true"
              title="title"
              placeholder="placeholder"
            >
              <template v-slot:bottom>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>Helper Text</FormHelpText>
              </template>
            </SimpleInput>
          </div>
          <div class="flex-box__cell flex-box simple-input-height">
            <div class="flex-box__cell">
              <div class="text-body-3">Text</div>
            </div>
          </div>
        </div>

        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <SimpleInput
              :error="state.testError001"
              :maxlength="150"
              :count="true"
              title="title"
              placeholder="disabled placeholder"
              :disabled="true"
            >
              <template v-slot:bottom>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>Helper Text</FormHelpText>
              </template>
            </SimpleInput>
          </div>
          <div class="flex-box__cell flex-box simple-input-height">
            <div class="flex-box__cell">
              <BasicButton size="small" theme="quaternary">
                Button
              </BasicButton>
            </div>
          </div>
        </div>

        <SimpleInput
          :error="state.testError001"
          :maxlength="150"
          :count="true"
          title="title"
          placeholder="disabled placeholder"
          :disabled="true"
          defaultValue="disabled value"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>Helper Text</FormHelpText>
          </template>
        </SimpleInput>

        <SimpleInput
          :error="state.testError001"
          :maxlength="150"
          :count="true"
          title="title"
          placeholder="readonly placeholder"
          :readonly="true"
          defaultValue="readonly value"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>Helper Text</FormHelpText>
          </template>
        </SimpleInput>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Multiple</h3>

        <FormInvalid :error="state.testError001">
          <div class="flex-box align-items-start">
            <div class="flex-box__cell flex-1">
              <SimpleInput
                :error="state.testError001"
                title="title"
                placeholder="placeholder"
              />
            </div>
            <div class="flex-box__cell flex-1">
              <SimpleInput
                :error="state.testError001"
                title="title"
                placeholder="placeholder"
              />
            </div>
            <div class="flex-box__cell flex-box simple-input-height">
              <div class="flex-box__cell">
                <div class="text-body-3">Text</div>
              </div>
            </div>
          </div>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Simple Select</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <FormInvalid :error="state.testError001">
          <SimpleSelect
            :options="[
              {
                value: '1',
                label: '옵션 1',
              },
              {
                value: '2',
                label: '옵션 2',
              },
              {
                value: '3',
                label: '옵션 3',
              },
              {
                value: '4',
                label: '옵션 4',
              },
              {
                value: '5',
                label: '옵션 5 옵션 5 옵션 5',
              },
              {
                value: '6',
                label: '옵션 6',
              },
              {
                value: '7',
                label:
                  '옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7',
              },
              {
                value: '8',
                label: '옵션 8',
              },
              {
                value: '9',
                label: '옵션 9',
              },
              {
                value: '10',
                label: '옵션 10',
              },
              {
                value: '11',
                label: '옵션 11',
              },
              {
                value: '12',
                label: '옵션 12',
              },
            ]"
            :error="state.testError001"
            title="title"
            placeholder="placeholder"
            inputId="testSimpleSelect001"
            :selectable="
              (option) => {
                switch (option.value) {
                  case '3':
                  case '4':
                    return false;
                  default:
                    return true;
                }
              }
            "
          />
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>

        <FormInvalid :error="state.testError001" :disabled="true">
          <SimpleSelect
            :options="[
              {
                value: '1',
                label: '옵션 1',
              },
              {
                value: '2',
                label: '옵션 2',
              },
              {
                value: '3',
                label: '옵션 3',
              },
              {
                value: '4',
                label: '옵션 4',
              },
              {
                value: '5',
                label: '옵션 5 옵션 5 옵션 5',
              },
              {
                value: '6',
                label: '옵션 6',
              },
              {
                value: '7',
                label:
                  '옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7',
              },
              {
                value: '8',
                label: '옵션 8',
              },
              {
                value: '9',
                label: '옵션 9',
              },
              {
                value: '10',
                label: '옵션 10',
              },
              {
                value: '11',
                label: '옵션 11',
              },
              {
                value: '12',
                label: '옵션 12',
              },
            ]"
            :error="state.testError001"
            title="title"
            placeholder="disabled placeholder"
            inputId="testSimpleSelect002"
            :disabled="true"
          />
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>

        <FormInvalid :error="state.testError001" :disabled="true">
          <SimpleSelect
            :options="[
              {
                value: '1',
                label: '옵션 1',
              },
              {
                value: '2',
                label: '옵션 2',
              },
              {
                value: '3',
                label: '옵션 3',
              },
              {
                value: '4',
                label: '옵션 4',
              },
              {
                value: '5',
                label: '옵션 5 옵션 5 옵션 5',
              },
              {
                value: '6',
                label: '옵션 6',
              },
              {
                value: '7',
                label:
                  '옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7 옵션 7',
              },
              {
                value: '8',
                label: '옵션 8',
              },
              {
                value: '9',
                label: '옵션 9',
              },
              {
                value: '10',
                label: '옵션 10',
              },
              {
                value: '11',
                label: '옵션 11',
              },
              {
                value: '12',
                label: '옵션 12',
              },
            ]"
            :error="state.testError001"
            title="title"
            placeholder="disabled placeholder"
            defaultValue="4"
            inputId="testSimpleSelect003"
            :disabled="true"
          />
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Simple Datepicker</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <FormInvalid :error="state.testError001">
          <SimpleDatepicker
            :error="state.testError001"
            title="title"
            id="testSimpleDatepicker001Start"
            buttonId="testSimpleDatepicker001StartButton"
            :onChange="testInputEvent"
          />
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>

        <FormInvalid :error="state.testError001" :disabled="true">
          <SimpleDatepicker
            :error="state.testError001"
            title="title"
            defaultValue="2023.03.04"
            :disabled="true"
          />
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>

        <FormInvalid :error="state.testError001">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <SimpleDatepicker
                :error="state.testError001"
                title="조회기간 시작 날짜"
                id="testSimpleDatepicker002Start"
                buttonId="testSimpleDatepicker002StartButton"
                :max="state.testMaxDate003"
                v-model="state.testMinDate003"
                :onChange="testInputEvent"
              />
            </div>
            <div class="flex-box__cell">
              <div class="text-body-3">~</div>
            </div>
            <div class="flex-box__cell flex-1">
              <SimpleDatepicker
                :error="state.testError001"
                title="조회기간 종료 날짜"
                id="testSimpleDatepicker002End"
                buttonId="testSimpleDatepicker002EndButton"
                :min="state.testMinDate003"
                v-model="state.testMaxDate003"
                :onChange="testInputEvent"
              />
            </div>
          </div>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheck</h2>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">radio</h3>

        <BoxCheck name="testBoxCheck001" id="testBoxCheck001_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck001"
          id="testBoxCheck001_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_003"
          :disabled="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">checkbox</h3>

        <BoxCheck type="checkbox" id="testBoxCheck003_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck type="checkbox" id="testBoxCheck003_003" :disabled="true">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - radio</h3>

        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_001"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - checkbox</h3>

        <BoxCheck :contents="true" type="checkbox" id="testBoxCheck006_001">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheckList</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>

        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <BoxCheckList :wrap="true">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>

        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>

        <BoxCheckList :wrap="true" col="4">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_005"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 5</h3>

        <BoxCheckList :wrap="true" col="5">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_005"
            >
              <BoxCheckLabel>Label 5</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">StepProgress</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <StepProgress :total="4" :current="1" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">TextProgress</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextProgress
          :steps="[
            '본인인증',
            '계약자정보',
            '금융조건',
            '면허정보',
            '약관동의',
            '본인인증',
            'ARS',
          ]"
          :current="1"
        />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextProgress
          :steps="[
            '본인인증',
            '계약자정보',
            '금융조건',
            '면허정보',
            '약관동의',
            '본인인증',
            'ARS',
          ]"
          :current="1"
          :disabled="true"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Agree List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree001All"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
              </div>

              <div :class="$style['agree-list__all-contents']">
                <ul :class="$style['agree-list__depth']">
                  <li :class="$style['agree-list__depth-item']">
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree001_001"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >서비스 이용약관 전체동의</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >온라인 서비스 이용약관</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인정보 필수적 수집 ·
                                이용동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_001_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 제3자 제공 동의(SSO
                                서비스)</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li :class="$style['agree-list__depth-item']">
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree001_002"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >하나캐피탈 멤버십 가입 필수 전체
                          동의(선택사항)</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >하나캐피탈 멤버십 회원 약관</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적 수집 ·
                                이용동의</CheckBoxLabelText
                              >
                            </CheckBox>
                          </div>
                          <ul
                            :class="[
                              $style['agree-list__list'],
                              $style['agree-list__list--secondary'],
                            ]"
                          >
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_002_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적
                                    수집·이용</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별번호 필수적
                                    수집·이용</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_002_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적 조회
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                          </div>
                          <ul
                            :class="[
                              $style['agree-list__list'],
                              $style['agree-list__list--secondary'],
                            ]"
                          >
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_003_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적
                                    조회</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li :class="$style['agree-list__depth-item']">
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree001_003"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >하나캐피탈 멤버십 가입 선택 전체
                          동의(선택사항)</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                    <div :class="$style['agree-list__depth-contents']">
                      <ul :class="$style['agree-list__list']">
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 선택적 수집·이용
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <RoundStatus theme="quinary" :block="true">
                                보통
                              </RoundStatus>
                            </div>
                          </div>
                          <ul
                            :class="[
                              $style['agree-list__list'],
                              $style['agree-list__list--secondary'],
                            ]"
                          >
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_003_001_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >금융상품 안내 및 이용권유를 위한
                                    수집·이용</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_003_001_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >전자적 전송 매체를 통한 광고성정보
                                    수신</CheckBoxLabelText
                                  >
                                </CheckBox>
                                <div :class="$style['agree-list__right']">
                                  <button
                                    type="button"
                                    :class="$style['agree-list__link']"
                                  >
                                    <span
                                      :class="$style['agree-list__link-text']"
                                    >
                                      상세보기
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <ul
                                :class="[
                                  $style['agree-list__list'],
                                  $style['agree-list__list--tertiary'],
                                ]"
                              >
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_001_002_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >전체</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_001_002_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >전화</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_001_002_003"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >문자메시지</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_001_002_004"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >우편</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_003_001_002_005"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >이메일</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree001_003_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 선택적 수집·이용
                                동의</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                          <div :class="[$style['agree-list__contents']]">
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--tertiary'],
                                $style['agree-list__list--tertiary-no-padding'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree001_003_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>전체</CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree001_003_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>SMS</CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree001_003_002_003"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >이메일</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree001_003_002_004"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >App PUSH</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Single</h3>

        <BasicBox className="row-margin-contents">
          <div :class="$style['agree-list']">
            <ul
              :class="[
                $style['agree-list__list'],
                $style['agree-list__list--secondary'],
                $style['agree-list__list--secondary-no-padding'],
              ]"
            >
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="testagree002"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>재고금융 확약서</CheckBoxLabelText>
                  </CheckBox>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['contents-list']">
          <UiAccordion
            tagName="ol"
            :classNames="{ wrap: $style['contents-list__list'] }"
          >
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  2022년형 가솔린 1.0
                </div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <ol
                    :class="[
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          신용대출상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">2</div>
                        <div :class="$style['contents-list__title']">
                          자동차금융 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">3</div>
                        <div :class="$style['contents-list__title']">
                          담보대출 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">4</div>
                        <div :class="$style['contents-list__title']">
                          건설상용 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">5</div>
                        <div :class="$style['contents-list__title']">
                          의료기 산업기계 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">6</div>
                        <div :class="$style['contents-list__title']">
                          주식자금대출 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">0</div>
                        <div :class="$style['contents-list__title']">
                          상담원 연결
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">당사이용고객</div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <UiAccordion
                    tagName="ol"
                    :classNames="{
                      wrap: [
                        $style['contents-list__list'],
                        $style['contents-list__list--secondary'],
                      ],
                    }"
                  >
                    <UiAccordionItem
                      :classNames="{ item: $style['contents-list__item'] }"
                    >
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          기존 거래정보 확인
                        </div>
                        <div :class="$style['contents-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['contents-list__opener'],
                            }"
                          />
                        </div>
                      </div>
                      <UiAccordionLayer>
                        <div :class="$style['contents-list__depth']">
                          <UiAccordion
                            tagName="ol"
                            :classNames="{
                              wrap: [
                                $style['contents-list__list'],
                                $style['contents-list__list--tertiary'],
                              ],
                            }"
                          >
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  1
                                </div>
                                <div :class="$style['contents-list__title']">
                                  당월결제금액
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  2
                                </div>
                                <div :class="$style['contents-list__title']">
                                  최근입금내역
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  3
                                </div>
                                <div :class="$style['contents-list__title']">
                                  중도상환안내
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  4
                                </div>
                                <div :class="$style['contents-list__title']">
                                  승계 및 연장문의
                                </div>
                              </div>
                            </li>
                            <UiAccordionItem
                              :classNames="{
                                item: $style['contents-list__item'],
                              }"
                            >
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  5
                                </div>
                                <div :class="$style['contents-list__title']">
                                  하나멤버스 상담
                                </div>
                                <div :class="$style['contents-list__right']">
                                  <UiAccordionOpener
                                    :classNames="{
                                      button: $style['contents-list__opener'],
                                    }"
                                  />
                                </div>
                              </div>
                              <UiAccordionLayer>
                                <div :class="$style['contents-list__depth-2']">
                                  <ol
                                    :class="[
                                      $style['contents-list__list'],
                                      $style['contents-list__list--quaternary'],
                                    ]"
                                  >
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          1
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          당사 하나멤버스 회원조회
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          2
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          하나멤버스 회원가입
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          3
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          관계사 연결
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          0
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          상담원 연결
                                        </div>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                              </UiAccordionLayer>
                            </UiAccordionItem>
                          </UiAccordion>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>
                    <UiAccordionItem
                      :classNames="{ item: $style['contents-list__item'] }"
                    >
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">0</div>
                        <div :class="$style['contents-list__title']">
                          상담원연결
                        </div>
                        <div :class="$style['contents-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['contents-list__opener'],
                            }"
                          />
                        </div>
                      </div>
                      <UiAccordionLayer>
                        <div :class="$style['contents-list__depth']">
                          <ol
                            :class="[
                              $style['contents-list__list'],
                              $style['contents-list__list--tertiary'],
                            ]"
                          >
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  1
                                </div>
                                <div :class="$style['contents-list__title']">
                                  자동차금융 상담
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  2
                                </div>
                                <div :class="$style['contents-list__title']">
                                  개인금융 상담
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>
                  </UiAccordion>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">기타상담</div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <ol
                    :class="[
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          불법대출 및 보이스피싱
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">2</div>
                        <div :class="$style['contents-list__title']">
                          당사이용 고객이 아닌경우
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">3</div>
                        <div :class="$style['contents-list__title']">
                          상담원연결
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">0</div>
                <div :class="$style['contents-list__title']">상담원연결</div>
              </div>
            </li>
          </UiAccordion>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col - 4</h3>
        <div
          :class="[
            $style['contents-list'],
            $style['contents-list--wrap'],
            $style['contents-list--col-4'],
          ]"
        >
          <UiAccordion
            tagName="ol"
            :classNames="{ wrap: $style['contents-list__list'] }"
          >
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
              :initialOpen="true"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  신규/추가대출 문의
                </div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <ol
                    :class="[
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['contents-list__item']">
                      <UiAccordion
                        tagName="ol"
                        :classNames="{
                          wrap: [
                            $style['contents-list__list'],
                            $style['contents-list__list--secondary'],
                          ],
                        }"
                      >
                        <UiAccordionItem
                          :classNames="{ item: $style['contents-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['contents-list__head']">
                            <div :class="$style['contents-list__symbol']">
                              1
                            </div>
                            <div :class="$style['contents-list__title']">
                              신용대출 상담
                            </div>
                            <div :class="$style['contents-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['contents-list__opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <div :class="$style['contents-list__depth']">
                              <ol
                                :class="[
                                  $style['contents-list__list'],
                                  $style['contents-list__list--tertiary'],
                                ]"
                              >
                                <li :class="$style['contents-list__item']">
                                  <div :class="$style['contents-list__head']">
                                    <div
                                      :class="$style['contents-list__symbol']"
                                    >
                                      1
                                    </div>
                                    <div
                                      :class="$style['contents-list__title']"
                                    >
                                      신규대출상담
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['contents-list__item']">
                                  <div :class="$style['contents-list__head']">
                                    <div
                                      :class="$style['contents-list__symbol']"
                                    >
                                      2
                                    </div>
                                    <div
                                      :class="$style['contents-list__title']"
                                    >
                                      추가대출상담
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">2</div>
                        <div :class="$style['contents-list__title']">
                          자동차금융 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">3</div>
                        <div :class="$style['contents-list__title']">
                          담보대출 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">4</div>
                        <div :class="$style['contents-list__title']">
                          건설상용 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">5</div>
                        <div :class="$style['contents-list__title']">
                          의료기 산업기계 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">6</div>
                        <div :class="$style['contents-list__title']">
                          주식자금대출 상담
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">0</div>
                        <div :class="$style['contents-list__title']">
                          상담원 연결
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
              :initialOpen="true"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">당사 이용고객</div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <UiAccordion
                    tagName="ol"
                    :classNames="{
                      wrap: [
                        $style['contents-list__list'],
                        $style['contents-list__list--secondary'],
                      ],
                    }"
                  >
                    <UiAccordionItem
                      :classNames="{ item: $style['contents-list__item'] }"
                      :initialOpen="true"
                    >
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          기존거래정보 확인
                        </div>
                        <div :class="$style['contents-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['contents-list__opener'],
                            }"
                          />
                        </div>
                      </div>
                      <UiAccordionLayer>
                        <div :class="$style['contents-list__depth']">
                          <UiAccordion
                            tagName="ol"
                            :classNames="{
                              wrap: [
                                $style['contents-list__list'],
                                $style['contents-list__list--tertiary'],
                              ],
                            }"
                          >
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  1
                                </div>
                                <div :class="$style['contents-list__title']">
                                  당월결제금액
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  2
                                </div>
                                <div :class="$style['contents-list__title']">
                                  최근입금내역
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  3
                                </div>
                                <div :class="$style['contents-list__title']">
                                  중도상환안내
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  4
                                </div>
                                <div :class="$style['contents-list__title']">
                                  승계 및 연장문의
                                </div>
                              </div>
                            </li>
                            <UiAccordionItem
                              :classNames="{
                                item: $style['contents-list__item'],
                              }"
                              :initialOpen="true"
                            >
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  5
                                </div>
                                <div :class="$style['contents-list__title']">
                                  하나머니 상담
                                </div>
                                <div :class="$style['contents-list__right']">
                                  <UiAccordionOpener
                                    :classNames="{
                                      button: $style['contents-list__opener'],
                                    }"
                                  />
                                </div>
                              </div>
                              <UiAccordionLayer>
                                <div :class="$style['contents-list__depth-2']">
                                  <ol
                                    :class="[
                                      $style['contents-list__list'],
                                      $style['contents-list__list--quaternary'],
                                    ]"
                                  >
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          1
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          당사 하나머니 회원 조회
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          2
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          하나머니 회원가입
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          3
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          관계사 연결
                                        </div>
                                      </div>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          0
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          상담원 연결
                                        </div>
                                      </div>
                                    </li>
                                  </ol>
                                </div>
                              </UiAccordionLayer>
                            </UiAccordionItem>
                          </UiAccordion>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>
                    <UiAccordionItem
                      :classNames="{ item: $style['contents-list__item'] }"
                      :initialOpen="true"
                    >
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">0</div>
                        <div :class="$style['contents-list__title']">
                          상담원 연결
                        </div>
                        <div :class="$style['contents-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['contents-list__opener'],
                            }"
                          />
                        </div>
                      </div>
                      <UiAccordionLayer>
                        <div :class="$style['contents-list__depth']">
                          <ol
                            :class="[
                              $style['contents-list__list'],
                              $style['contents-list__list--tertiary'],
                            ]"
                          >
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  1
                                </div>
                                <div :class="$style['contents-list__title']">
                                  자동차금융 상담
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  2
                                </div>
                                <div :class="$style['contents-list__title']">
                                  개인금융 상담
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>
                  </UiAccordion>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem
              :classNames="{ item: $style['contents-list__item'] }"
              :initialOpen="true"
            >
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">기타상담</div>
                <div :class="$style['contents-list__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['contents-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['contents-list__contents']">
                  <ol
                    :class="[
                      $style['contents-list__list'],
                      $style['contents-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          불법대출 및 보이스피싱
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">2</div>
                        <div :class="$style['contents-list__title']">
                          당사이용 고객이 아닌경우
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">3</div>
                        <div :class="$style['contents-list__title']">
                          상담원 연결
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">0</div>
                <div :class="$style['contents-list__title']">상담원 연결</div>
              </div>
            </li>
          </UiAccordion>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col - 3</h3>
        <div
          :class="[
            $style['contents-list'],
            $style['contents-list--wrap'],
            $style['contents-list--col-3'],
          ]"
        >
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  대출약정서 Set
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">인감증명서</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">신분증 사본</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  자동이체결제 통장사본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">
                  임대차계약서 사본
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  민영건설은 HUG(주택도시보증공사) 가입증 추가 첨부
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">6</div>
                <div :class="$style['contents-list__title']">
                  주민등록등/초본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">7</div>
                <div :class="$style['contents-list__title']">
                  금융거래확인서
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  대환대출 시
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">8</div>
                <div :class="$style['contents-list__title']">
                  소득증빙서류 등
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents</h3>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  대출약정서 Set
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">인감증명서</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">신분증 사본</div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  자동이체결제 통장사본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div :class="$style['contents-list__title']">
                  임대차계약서 사본
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  민영건설은 HUG(주택도시보증공사) 가입증 추가 첨부
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">6</div>
                <div :class="$style['contents-list__title']">
                  주민등록등/초본
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">7</div>
                <div :class="$style['contents-list__title']">
                  금융거래확인서
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  대환대출 시
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">8</div>
                <div :class="$style['contents-list__title']">
                  소득증빙서류 등
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div
                :class="[
                  $style['contents-list__head'],
                  $style['contents-list__head--vertical-center'],
                ]"
              >
                <div :class="$style['contents-list__symbol']">9</div>
                <div :class="$style['contents-list__title']">
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬<br />
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬<br />
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents Square</h3>
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  PC에서 하나캐피탈 홈페이지<br />
                  <strong class="color-green font-weight-medium"
                    >‘인증센터 > 공동인증서 가져오기’</strong
                  >
                  에 접속해주세요.
                </div>
              </div>
              <div
                :class="[$style['contents-list__depth-3'], 'row-margin-mini']"
              >
                <p class="text-body-2 font-weight-regular color-gray-tertiary">
                  (http://hanacapital.co.kr/cs/cert-center.hnc)
                </p>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  ‘공동인증서 가져오기‘ 버튼을 선택하여 App에 표시된 인증번호
                  8자리를 입력해주세요.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  ‘공동인증서 가져오기’ 버튼을 선택하시면 PC로 인증서 내보내기가
                  완료됩니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div
                :class="[
                  $style['contents-list__head'],
                  $style['contents-list__head--vertical-center'],
                ]"
              >
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬<br />
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬<br />
                  수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬 수직 중앙 정렬
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Select List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
      </div>
      <UiAccordion :classNames="{ wrap: $style['select-list__list'] }">
        <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
          <div :class="$style['select-list__head']">
            <div :class="$style['select-list__title']">Title</div>
            <div :class="$style['select-list__right']">
              <UiAccordionOpener
                :classNames="{ button: $style['select-list__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['select-list__contents']">//Contents</div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem :classNames="{ item: $style['select-list__item'] }">
          <div :class="$style['select-list__head']">
            <div :class="$style['select-list__title']">Title</div>
            <div :class="$style['select-list__right']">
              <UiAccordionOpener
                :classNames="{ button: $style['select-list__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['select-list__contents']">//Contents</div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Option List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
      </div>
      <div :class="$style['option-list']">
        <ul :class="$style['option-list__list']">
          <li :class="$style['option-list__item']">
            <div :class="$style['option-list__block']">
              <CheckBox id="testOptionList_001" theme="secondary" :full="true">
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">
                      <span class="text-title-2 font-weight-medium"
                        >현대 스마트센스</span
                      >
                    </span>
                    <span class="flex-box__cell">
                      <UnitText size="regular" rightUnit="원" align="right">
                        <strong>+ 700,000</strong>
                      </UnitText>
                    </span>
                  </span>
                </CheckBoxLabelText>
              </CheckBox>
            </div>
          </li>
          <li :class="$style['option-list__item']">
            <div :class="$style['option-list__block']">
              <CheckBox id="testOptionList_002" theme="secondary" :full="true">
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">
                      <span class="text-title-2 font-weight-medium"
                        >액티비 플러스</span
                      >
                    </span>
                    <span class="flex-box__cell">
                      <UnitText size="regular" rightUnit="원" align="right">
                        <strong>+ 500,000</strong>
                      </UnitText>
                    </span>
                  </span>
                </CheckBoxLabelText>
              </CheckBox>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">RoundStatus</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RoundStatus>텍스트</RoundStatus>
        <RoundStatus theme="secondary">텍스트</RoundStatus>
        <RoundStatus theme="tertiary">텍스트</RoundStatus>
        <RoundStatus theme="quaternary">텍스트</RoundStatus>
        <RoundStatus theme="quinary">텍스트</RoundStatus>
        <RoundStatus theme="senary">텍스트</RoundStatus>
        <RoundStatus theme="septenary">텍스트</RoundStatus>
        <RoundStatus theme="octonary">텍스트</RoundStatus>
        <RoundStatus theme="nonary">텍스트</RoundStatus>
        <RoundStatus theme="denary">텍스트</RoundStatus>
        <RoundStatus theme="undenary">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size - Large</h3>
        <RoundStatus size="large">텍스트</RoundStatus>
        <RoundStatus theme="secondary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="tertiary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quaternary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quinary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="senary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="septenary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="octonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="nonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="denary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="undenary" size="large">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Block</h3>
        <RoundStatus :block="true">텍스트</RoundStatus>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BasicBox>
          <div :class="$style['icon-box']">
            <div :class="$style['icon-box__icon']">
              <IconStar />
            </div>
            <div :class="$style['icon-box__content']">
              <p class="text-title-1">
                <span class="color-green font-weight-bold">하나프라자</span>님은
                하나캐피탈에 등록된<br />
                <span class="font-weight-bold">정식 모집인</span>입니다
              </p>
            </div>
          </div>
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Step Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    홈페이지/모바일(웹)을 통하여
                    <strong>재렌트 신청 및 견적을 요청</strong>합니다.
                    (신용조회동의)
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPhone />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 2</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트 견적 발송 및 재렌트 상담</strong>을
                    진행합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 3</div>
                  <p :class="$style['step__text']">
                    <strong>서면약정 또는 온라인약정</strong>으로 계약이
                    진행됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPersonalTerms />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 4</div>
                  <p :class="$style['step__text']">
                    입금/지급 <strong>금액을 정산</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 5</div>
                  <p :class="$style['step__text']">
                    계약사항에 대해
                    <strong>이해하였음을 유선상 확인</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCallMint />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 6</div>
                  <p :class="$style['step__text']">
                    <strong>재렌트가 완료</strong>됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompleted />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Horizontal</h3>

        <div :class="[$style['step'], $style['step--horizontal']]">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 1</div>
                  <p :class="$style['step__text']">
                    <strong>입사지원서 작성</strong>후<br />
                    홈페이지 상에 <strong>On-Line 등록</strong>해<br />
                    접수를 진행합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPhone />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 2</div>
                  <p :class="$style['step__text']">
                    입사지원서를 토대로<br />
                    <strong>지원자의 기본능력을<br />평가</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 3</div>
                  <p :class="$style['step__text']">
                    서류전형 합격자들을<br />
                    대상으로<br />
                    <strong>면접을 진행</strong>합니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconPersonalTerms />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__badge']">STEP 4</div>
                  <p :class="$style['step__text']">
                    면접을 전 후하여 회사에서 지정한<br />
                    병원의 종합검진으로
                    <strong
                      >건강진단 결과가 나온 이후 회사규정에 따라<br />
                      최종 합격 여부가 결정</strong
                    >됩니다.
                  </p>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Basic List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Text Symbol</h3>

        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']">4.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']">5.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']">6.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ol>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Medium</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular margin (12px)</h3>
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <NoticeText>Text Text Text Text Text</NoticeText>
        <NoticeText :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">check</h3>
        <NoticeText type="check">Text Text Text Text Text</NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Tab Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiTab v-slot="tabSlotProps" initialOpen="testTab001_003">
          <UiTabList>
            <UiTabButton link="testTab001_001">Tab 1</UiTabButton>
            <UiTabButton link="testTab001_002">Tab 2</UiTabButton>
            <UiTabButton link="testTab001_003">Tab 3</UiTabButton>
            <UiTabButton link="testTab001_004">Tab 4</UiTabButton>
          </UiTabList>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Nav Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <NavTab :useUiTab="true">
            <NavTabButton link="testNavTab001_001">Tab 1</NavTabButton>
            <NavTabButton link="testNavTab001_002">Tab 2</NavTabButton>
            <NavTabButton link="testNavTab001_003">Tab 3</NavTabButton>
            <NavTabButton link="testNavTab001_004">Tab 4</NavTabButton>
          </NavTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testNavTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <NavTab>
          <NavTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </NavTabButton>
          <NavTabButton tagName="RouterLink" to="">Tab 2</NavTabButton>

          <NavTabButton tagName="a" href="" :active="true">
            Tab 3
          </NavTabButton>
          <NavTabButton tagName="a" href="">Tab 4</NavTabButton>

          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">auto</h3>

        <NavTab :auto="true">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 2</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 3</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 4</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 7</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 8</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup</h3>

        <NavTab type="popup">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup Head</h3>

        <NavTab type="popup-head">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Filter Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <FilterTab :useUiTab="true">
            <FilterTabButton link="testFilterTab001_001">Tab 1</FilterTabButton>
            <FilterTabButton link="testFilterTab001_002">Tab 2</FilterTabButton>
            <FilterTabButton link="testFilterTab001_003">Tab 3</FilterTabButton>
            <FilterTabButton link="testFilterTab001_004">Tab 4</FilterTabButton>
          </FilterTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testFilterTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <FilterTab>
          <FilterTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </FilterTabButton>
          <FilterTabButton tagName="RouterLink" to="">Tab 2</FilterTabButton>

          <FilterTabButton tagName="a" href="" :active="true">
            Tab 3
          </FilterTabButton>
          <FilterTabButton tagName="a" href="">Tab 4</FilterTabButton>

          <FilterTabButton tagName="button" type="button" :active="true">
            Tab 5
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            Tab 6
          </FilterTabButton>
        </FilterTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Round Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <RoundTab :useUiTab="true">
            <RoundTabButton link="testRoundTab001_001">Tab 1</RoundTabButton>
            <RoundTabButton link="testRoundTab001_002">Tab 2</RoundTabButton>
            <RoundTabButton link="testRoundTab001_003">Tab 3</RoundTabButton>
            <RoundTabButton link="testRoundTab001_004">Tab 4</RoundTabButton>
          </RoundTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testRoundTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <RoundTab>
          <RoundTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </RoundTabButton>
          <RoundTabButton tagName="RouterLink" to="">Tab 2</RoundTabButton>

          <RoundTabButton tagName="a" href="" :active="true">
            Tab 3
          </RoundTabButton>
          <RoundTabButton tagName="a" href="">Tab 4</RoundTabButton>

          <RoundTabButton tagName="button" type="button" :active="true">
            Tab 5
          </RoundTabButton>
          <RoundTabButton tagName="button" type="button">
            Tab 6
          </RoundTabButton>
        </RoundTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Sub Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <SubTab :useUiTab="true">
            <SubTabButton link="testSubTab001_001">Tab 1</SubTabButton>
            <SubTabButton link="testSubTab001_002">Tab 2</SubTabButton>
            <SubTabButton link="testSubTab001_003">Tab 3</SubTabButton>
            <SubTabButton link="testSubTab001_004">Tab 4</SubTabButton>
          </SubTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testSubTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <SubTab>
          <SubTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </SubTabButton>
          <SubTabButton tagName="RouterLink" to="">Tab 2</SubTabButton>

          <SubTabButton tagName="a" href="" :active="true">
            Tab 3
          </SubTabButton>
          <SubTabButton tagName="a" href="">Tab 4</SubTabButton>

          <SubTabButton tagName="button" type="button" :active="true">
            Tab 5
          </SubTabButton>
          <SubTabButton tagName="button" type="button"> Tab 6 </SubTabButton>
        </SubTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Accordion Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testAccordionAllOpen">모두 열기</button>
        <button type="button" @click="testAccordionAllClose">모두 닫기</button>

        <UiAccordion ref="testAccordion">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps" :initialOpen="true">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Once</h3>

        <UiAccordion :once="true">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">hr</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicHr className="row-margin-contents" />
        <BasicHr theme="secondary" className="row-margin-contents" />
        <BasicHr theme="tertiary" className="row-margin-contents" />
        <BasicHr theme="quaternary" className="row-margin-contents" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>
        <BasicHr type="popup" className="row-margin-contents" />
        <BasicHr
          theme="secondary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="tertiary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="quaternary"
          type="popup"
          className="row-margin-contents"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>// contnets</BasicBox>
        <BasicBox theme="secondary">// contnets</BasicBox>
        <BasicBox theme="tertiary">// contnets</BasicBox>
        <BasicBox theme="quaternary">// contnets</BasicBox>
        <BasicBox theme="quinary">// contnets</BasicBox>
        <BasicBox theme="senary">// contnets</BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Head</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-title-2 font-weight-medium">오토리스 20고5678</h3>
              <div :class="[$style['division-info'], 'row-margin-item-small']">
                <ul :class="$style['division-info__list']">
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">BMW 435d</div>
                  </li>
                  <li :class="$style['division-info__item']">
                    <div class="text-body-3 color-gray-tertiary">
                      L99999999999999
                    </div>
                  </li>
                </ul>
              </div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus theme="secondary" size="large" :block="true">
                정상
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          // contents
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Foot</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>
          // contents
          <BasicBoxFoot>
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>기본차량가격</KeyValueTitle>
                <KeyValueText> 15,500,000 원 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>옵션가격</KeyValueTitle>
                <KeyValueText> + 1,200,000 원 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicHr theme="tertiary" className="row-margin-contents" />

            <KeyValue verticalAlign="center" margin="regular">
              <KeyValueItem>
                <KeyValueTitle
                  :classNames="{
                    title: 'text-title-2 color-black font-weight-medium',
                  }"
                  >총 차량가격</KeyValueTitle
                >
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">
                    <strong>16,700,000</strong>
                  </UnitText>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle
                  :classNames="{
                    title: 'text-title-2 color-black font-weight-medium',
                  }"
                  >월 납입금액</KeyValueTitle
                >
                <KeyValueText>
                  <BasicButton inline="true" size="small">
                    계산하기
                  </BasicButton>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBoxFoot>
        </BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Key Value Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align left</h3>
        <KeyValue align="left">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: small)
        </h3>
        <KeyValue align="left" size="small">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: regular)
        </h3>
        <KeyValue align="left" size="regular">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: medium)
        </h3>
        <KeyValue align="left" size="medium">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align : center</h3>
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Vertical</h3>
        <KeyValue direction="vertical">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">wrap - col 2</h3>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin small</h3>
        <KeyValue margin="small">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular</h3>
        <KeyValue margin="regular">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">division info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['division-info']">
          <ul :class="$style['division-info__list']">
            <li :class="$style['division-info__item']">
              <div class="text-body-4 font-weight-light">2023.01.10</div>
            </li>
            <li :class="$style['division-info__item']">
              <div class="color-green text-body-4 font-weight-medium">
                신용동의
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Empty</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>

        <div :class="[$style['empty'], $style['empty--secondary']]">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice section</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 등록</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 삭제</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Address List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['address-list']">
          <li v-for="i in 3" :key="i" :class="$style['address-list__item']">
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">16997</div>
              <KeyValue align="left" margin="small" size="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>도로명</KeyValueTitle>
                  <KeyValueText
                    >인천 서구 에코로 181 하나금융그룹데이터센터</KeyValueText
                  >
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>지번</KeyValueTitle>
                  <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <button type="button" :class="$style['address-list__button']">
                <span class="for-a11y">선택</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents Button</h3>
        <ul :class="[$style['address-list'], $style['address-list--select']]">
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <div :class="$style['address-list__title']">16997</div>
                <KeyValue align="left" margin="small" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>도로명</KeyValueTitle>
                    <KeyValueText>인천 서구 에코로 181</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>입력 주소</KeyValueTitle>
                    <KeyValueText>하나금융그룹 로비</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <div :class="$style['address-list__title']">16997</div>
                <KeyValue align="left" margin="small" size="medium">
                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>지번</KeyValueTitle>
                    <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{ item: 'text-body-3 color-black' }"
                  >
                    <KeyValueTitle>입력 주소</KeyValueTitle>
                    <KeyValueText>하나금융그룹 로비</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Object</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <IllustObject />
        <IllustObject type="complete" />
        <IllustObject type="error" />
        <IllustObject type="fail" />
        <IllustObject type="license" />
        <IllustObject type="certification" />
        <IllustObject type="appfree" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <IllustInfo>
          <IllustObject type="fail" />
          <IllustInfoTitle>
            만기연장 신청 대상이 아닙니다<br />
            잔여 회차를 확인해 주세요
          </IllustInfoTitle>
          <IllustInfoText>
            <strong>하나캐피탈 스탁론</strong>에<br />
            관심을 가져주셔서 감사합니다.
          </IllustInfoText>
        </IllustInfo>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconPerson /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >개인 (개인사업자)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconBuilding /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">법인</span>
                </span>
              </button>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">
                    고객센터 1800-1110
                  </div>
                  <div :class="$style['icon-list__text']">
                    평일 09:00 ~ 18:00
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><ImgMainSample /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__text']">
                    결제예정금액의 자세한 내역이 궁금하시다면
                  </div>
                  <div :class="$style['icon-list__title']">온라인청구서</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <div :class="[$style['icon-list'], $style['icon-list--wrap']]">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >고객센터 ARS 안내</span
                  >
                  <span :class="$style['icon-list__text']">
                    빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">고객 상담</span>
                  <span :class="$style['icon-list__text']">
                    문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">전자민원접수</span>
                  <span :class="$style['icon-list__text']">
                    불편했던 점을 말씀해주세요.<br />신속히 개선하도록
                    하겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>

        <div
          :class="[
            $style['icon-list'],
            $style['icon-list--wrap'],
            $style['icon-list--col-3'],
          ]"
        >
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >고객센터 ARS 안내</span
                  >
                  <span :class="$style['icon-list__text']">
                    빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">고객 상담</span>
                  <span :class="$style['icon-list__text']">
                    문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">전자민원접수</span>
                  <span :class="$style['icon-list__text']">
                    불편했던 점을 말씀해주세요.<br />신속히 개선하도록
                    하겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Product Detail Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['product-detail']">
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconSearchMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대출가능금액</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="만원">20,000</UnitText>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconInterestRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대출금리</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">13.2</UnitText>
                  <div :class="$style['product-detail__desc-sub']">
                    (36개월 기준)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Small</h3>
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">1억원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">연 5.9~18.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12~120개월</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommision />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료
                </div>
                <div :class="$style['product-detail__desc']">0원</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Main</h3>
        <div
          :class="[$style['product-detail'], $style['product-detail--main']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">1억원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">연 5.9~18.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12~120개월</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommision />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료
                </div>
                <div :class="$style['product-detail__desc']">0원</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Join</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['join']">
          <div :class="$style['join__inner']">
            <div :class="$style['join__icon']"><IconLogo /></div>
            <div :class="$style['join__title']">앱에서 가입하셨나요?</div>
            <TextButton
              :block="true"
              :classNames="{
                wrap: [$style['join__link'], 'color-gray-tertiary'],
              }"
            >
              앱회원 가입
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">PaginationNav</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <!-- Case : 첫번째 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavNumber>6</PaginationNavNumber>
          <PaginationNavNumber>7</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>999</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 첫번째 페이지일 때 -->

        <!-- Case : 중간 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>13</PaginationNavNumber>
          <PaginationNavNumber>14</PaginationNavNumber>
          <PaginationNavNumber :active="true">15</PaginationNavNumber>
          <PaginationNavNumber>16</PaginationNavNumber>
          <PaginationNavNumber>17</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>99</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 중간 페이지일 때 -->

        <!-- Case : 마지막 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>93</PaginationNavNumber>
          <PaginationNavNumber>94</PaginationNavNumber>
          <PaginationNavNumber>95</PaginationNavNumber>
          <PaginationNavNumber>96</PaginationNavNumber>
          <PaginationNavNumber>97</PaginationNavNumber>
          <PaginationNavNumber>98</PaginationNavNumber>
          <PaginationNavNumber :active="true">99</PaginationNavNumber>
          <PaginationNavArrow type="next" :disabled="true" />
        </PaginationNav>
        <!-- // Case : 마지막 페이지일 때 -->
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>

        <!-- Pagination -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Pagination -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">UnitText</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UnitText leftUnit="$">333,389</UnitText>
        <UnitText rightUnit="원">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align right</h3>

        <UnitText leftUnit="$" align="right">333,389</UnitText>
        <UnitText rightUnit="원" align="right">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align center</h3>

        <UnitText verticalAlign="center" leftUnit="$">333,389</UnitText>
        <UnitText verticalAlign="center" rightUnit="원">333,389</UnitText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <UnitText size="regular" leftUnit="$">333,389</UnitText>
        <UnitText size="regular" rightUnit="원">333,389</UnitText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Large</h3>

        <!-- <UnitText size="large" verticalAlign="center" leftUnit="$"
          >333,389</UnitText
        > -->
        <UnitText size="large" rightUnit="원">333,389</UnitText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Table</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>월</th>
                <th>방문자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>합계</td>
                <td>1</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- // table -->
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>
        <!-- table -->
        <div :class="[$style['basic-table'], $style['basic-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
              <col style="width: 160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th class="align-left">이용자</th>
                <td class="align-left">김하나</td>
                <th class="align-left">계약번호</th>
                <td class="align-left">Data</td>
                <th class="align-left">할부원금</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">주민/사업번호</th>
                <td class="align-left">123-12-12345</td>
                <th class="align-left">실행일자</th>
                <td class="align-left">2023.01.01</td>
                <th class="align-left">취급수수료</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">상품종류</th>
                <td class="align-left">Data</td>
                <th class="align-left">할부기간</th>
                <td class="align-left">12개월</td>
                <th class="align-left">유예원금</th>
                <td class="align-left">999,999,999 원</td>
              </tr>
              <tr>
                <th class="align-left">품목명</th>
                <td colspan="5" class="align-left">Data</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- // table -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">SelectTable</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default (toggle)</h3>

        <SelectTable>
          <template v-slot:colgroup>
            <col style="width: 140px" />
            <col style="width: 800px" />
            <col style="width: 160px" />
          </template>

          <template v-slot:head>
            <tr>
              <th>제조사</th>
              <th>모델명</th>
              <th>차량 금액</th>
            </tr>
          </template>

          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow :initialActive="true">
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
        </SelectTable>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Not Toggle</h3>

        <SelectTable>
          <template v-slot:colgroup>
            <col style="width: 80px" />
            <col style="width: 140px" />
            <col style="width: 800px" />
            <col style="width: 160px" />
          </template>

          <template v-slot:head>
            <tr>
              <th>선택</th>
              <th>제조사</th>
              <th>모델명</th>
              <th>차량 금액</th>
            </tr>
          </template>

          <SelectTableRow actionType="select">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow actionType="select" :initialActive="true">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow actionType="select">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow actionType="select">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow actionType="select">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow actionType="select">
            <SelectTableRadioCell />
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
        </SelectTable>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">image view</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['image-view']">
          <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Search List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ul :class="$style['search-list']">
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bill list</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['bill-list']">
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__title']">1회차</div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__title']">2회차</div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__title']">3회차</div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">원금</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">이자</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__sub']">
                    <div :class="$style['bill-list__sub-item']">
                      <dt :class="$style['bill-list__sub-key']">잔액</dt>
                      <dd :class="$style['bill-list__sub-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- 은행 -->
        <BankLogo code="002" />
        <BankLogo code="003" />
        <BankLogo code="004" />
        <BankLogo code="007" />
        <BankLogo code="011" />
        <BankLogo code="020" />

        <!-- 증권 -->
        <BankLogo type="securities" code="261" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : small</h3>
        <!-- 은행 -->
        <BankLogo size="small" code="002" />
        <BankLogo size="small" code="003" />
        <BankLogo size="small" code="004" />
        <BankLogo size="small" code="007" />
        <BankLogo size="small" code="011" />
        <BankLogo size="small" code="020" />

        <!-- 증권 -->
        <BankLogo size="small" type="securities" code="261" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Full Logo</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- 은행 -->

        <!-- 증권 -->
        <BankFullLogo type="securities" code="270" />
        <BankFullLogo type="securities" code="247" />
        <BankFullLogo type="securities" code="264" />
        <BankFullLogo type="securities" code="267" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : large</h3>
        <!-- 은행 -->

        <!-- 증권 -->
        <BankFullLogo size="large" type="securities" code="270" />
        <BankFullLogo size="large" type="securities" code="247" />
        <BankFullLogo size="large" type="securities" code="264" />
        <BankFullLogo size="large" type="securities" code="267" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <KeyValue align="left" margin="regular">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <KeyValue align="left" :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>

    <!--
    <section class="test-section">
      <h2 class="test-section-title">Term List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <UiAccordion :classNames="{ wrap: $style['term-list__list'] }">
          <li :class="$style['term-list__item']">
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">
                온라인 서비스 이용약관
              </div>
              <div :class="$style['term-list__right']">
                <button type="button" :class="$style['term-list__link']">
                  <span :class="$style['term-list__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </li>

          <li :class="$style['term-list__item']">
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">
                <CheckBox id="testCheckBox123321" theme="tertiary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>재고금융 확약서</CheckBoxLabelText>
                </CheckBox>
              </div>
              <div :class="$style['term-list__right']">
                <button type="button" :class="$style['term-list__link']">
                  <span :class="$style['term-list__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </li>

          <UiAccordionItem
            :classNames="{ item: $style['term-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['term-list__head']">
              <div :class="$style['term-list__title']">휴대폰 인증약관</div>
              <div :class="$style['term-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['term-list__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['term-list__contents']">
                <ul
                  :class="[
                    $style['term-list__list'],
                    $style['term-list__list--secondary'],
                  ]"
                >
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        본인확인 이용약관
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        개인정보 수집·이용, 취급위탁 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        통신사 본인확인 이용약관 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li :class="$style['term-list__item']">
                    <div :class="$style['term-list__head']">
                      <div :class="$style['term-list__title']">
                        고유식별정보 처리 동의
                      </div>
                      <div :class="$style['term-list__right']">
                        <button
                          type="button"
                          :class="$style['term-list__link']"
                        >
                          <span :class="$style['term-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>
    -->

    <section class="test-section">
      <h2 class="test-section-title">status-inquiry</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['status-inquiry']">
          <ul :class="$style['status-inquiry__list']">
            <li :class="$style['status-inquiry__item']">
              <button
                type="button"
                :class="[
                  $style['status-inquiry__category'],
                  $style['status-inquiry__category--active'],
                ]"
              >
                <span :class="$style['status-inquiry__number']">10</span>
                <span :class="$style['status-inquiry__text']">전체</span>
              </button>
            </li>
            <li :class="$style['status-inquiry__item']">
              <button type="button" :class="$style['status-inquiry__category']">
                <span :class="$style['status-inquiry__number']">4</span>
                <span :class="$style['status-inquiry__text']">신용동의</span>
              </button>
            </li>
            <li :class="$style['status-inquiry__item']">
              <button type="button" :class="$style['status-inquiry__category']">
                <span :class="$style['status-inquiry__number']">3</span>
                <span :class="$style['status-inquiry__text']">상담</span>
              </button>
            </li>
            <li :class="$style['status-inquiry__item']">
              <button type="button" :class="$style['status-inquiry__category']">
                <span :class="$style['status-inquiry__number']">4</span>
                <span :class="$style['status-inquiry__text']">계약</span>
              </button>
            </li>
            <li :class="$style['status-inquiry__item']">
              <button type="button" :class="$style['status-inquiry__category']">
                <span :class="$style['status-inquiry__number']">4</span>
                <span :class="$style['status-inquiry__text']">심사</span>
              </button>
            </li>
            <li :class="$style['status-inquiry__item']">
              <button type="button" :class="$style['status-inquiry__category']">
                <span :class="$style['status-inquiry__number']">1</span>
                <span :class="$style['status-inquiry__text']">송금</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box Link (logs)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ul :class="$style['logs']">
          <li v-for="i in 2" :key="i" :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="$style['logs__title']">정비</h3>
                </div>
                <div :class="$style['logs__right']">
                  <button
                    type="button"
                    :class="$style['logs__link']"
                    @click="layer001Open"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>
        <ul :class="$style['logs']">
          <li v-for="i in 2" :key="i" :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--secondary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-1']">정비</h3>
                </div>
                <div :class="$style['logs__right']">
                  <button
                    type="button"
                    :class="$style['logs__link']"
                    @click="layer001Open"
                  >
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">금융 리스트</h3>
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-title-2 font-weight-medium">
                    오토리스 20고5678
                  </h3>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
                  >
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 color-gray-tertiary">
                          BMW 435d
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 color-gray-tertiary">
                          L99999999999999
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents"
              />

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>
                    <div class="color-green">6,265,200 원</div>
                  </KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>계약기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2022.02.02</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>12/36</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>05일</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>정비서비스</KeyValueTitle>
                  <KeyValueText>프리미엄</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <div
                :class="[
                  $style['inline-alert'],
                  $style['inline-alert--error'],
                  'row-margin-contents',
                ]"
              >
                <p :class="$style['inline-alert__text']">
                  계약만기일이 180일 남았습니다. 만기안내장을 확인해 주세요.
                </p>
              </div>

              <div :class="[$style['logs__button'], 'row-margin-contents']">
                <ButtonList
                  :wrap="true"
                  align="center"
                  :classNames="{
                    wrap: 'row-margin-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="regular" :line="true"
                      >만기안내장</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-title-2 font-weight-medium">
                    오토론 20고5678
                  </h3>
                  <div
                    :class="[$style['division-info'], 'row-margin-item-small']"
                  >
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 color-gray-tertiary">
                          BMW 435d
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="text-body-3 color-gray-tertiary">
                          L99999999999999
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents"
              />

              <KeyValue :wrap="true">
                <KeyValueItem>
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText>
                    <div class="color-green">6,265,200 원</div>
                  </KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>2021.02.02 ~ 2022.02.02</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>상환방법</KeyValueTitle>
                  <KeyValueText>원금균등상환</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>12/36</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출금액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>999,999,999 원</KeyValueText>
                </KeyValueItem>

                <KeyValueItem>
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>05일</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Upload Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload001"
            :class="$style['upload-button__input']"
          />
          <div :class="$style['upload-button__block']">
            <label for="testUpload001" :class="$style['upload-button__label']"
              >파일첨부</label
            >
          </div>
        </div>

        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload002"
            :class="$style['upload-button__input']"
          />
          <div :class="$style['upload-button__block']">
            <span :class="$style['upload-button__img']">
              <IconImg />
            </span>
            <label for="testUpload002" :class="$style['upload-button__label']"
              >이미지 첨부</label
            >
          </div>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">disabled</h3>
        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload003"
            :class="$style['upload-button__input']"
            :disabled="true"
          />
          <div :class="$style['upload-button__block']">
            <label for="testUpload003" :class="$style['upload-button__label']"
              >파일첨부</label
            >
          </div>
        </div>

        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload004"
            :class="$style['upload-button__input']"
            :disabled="true"
          />
          <div :class="$style['upload-button__block']">
            <span :class="$style['upload-button__img']">
              <IconImg />
            </span>
            <label for="testUpload004" :class="$style['upload-button__label']"
              >이미지 첨부</label
            >
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Upload File List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['upload-file']">
          <ul :class="$style['upload-file__list']">
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton :line="true" theme="quaternary" size="small">
                  삭제
                </BasicButton>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton :line="true" theme="quaternary" size="small">
                  삭제
                </BasicButton>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Inside (padding: 0 24px)</h3>
        <div :class="[$style['upload-file'], $style['upload-file--inside']]">
          <ul :class="$style['upload-file__list']">
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton :line="true" theme="quaternary" size="small">
                  삭제
                </BasicButton>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton :line="true" theme="quaternary" size="small">
                  삭제
                </BasicButton>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Upload Button 함께 사용시</h3>

        <ul class="reset-list">
          <li class="row-margin-contents">
            <div :class="$style['upload-button']">
              <input
                type="file"
                id="My_p05_p003_upload001"
                :class="$style['upload-button__input']"
              />
              <div :class="$style['upload-button__block']">
                <span :class="$style['upload-button__img']">
                  <IconImg />
                </span>
                <label
                  for="My_p05_p003_upload001"
                  :class="$style['upload-button__label']"
                >
                  파일첨부
                </label>
              </div>
            </div>

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
                  <div :class="$style['upload-file__content']">
                    <div :class="$style['upload-file__name']">
                      첨부파일명.jpg
                    </div>
                  </div>
                  <div :class="$style['upload-file__button']">
                    <BasicButton :line="true" theme="quaternary" size="small">
                      삭제
                    </BasicButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div :class="$style['upload-file__content']">
                    <div :class="$style['upload-file__name']">
                      첨부파일명.png
                    </div>
                  </div>
                  <div :class="$style['upload-file__button']">
                    <BasicButton :line="true" theme="quaternary" size="small">
                      삭제
                    </BasicButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div :class="$style['upload-file__content']">
                    <div :class="$style['upload-file__name']">
                      첨부파일명.gif
                    </div>
                  </div>
                  <div :class="$style['upload-file__button']">
                    <BasicButton :line="true" theme="quaternary" size="small">
                      삭제
                    </BasicButton>
                  </div>
                </li>
                <li :class="$style['upload-file__item']">
                  <div :class="$style['upload-file__icon']">
                    <IconImgColor />
                  </div>
                  <div :class="$style['upload-file__content']">
                    <div :class="$style['upload-file__name']">
                      첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                    </div>
                  </div>
                  <div :class="$style['upload-file__button']">
                    <BasicButton :line="true" theme="quaternary" size="small">
                      삭제
                    </BasicButton>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //Case : 파일 첨부 후 -->
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BasicBanner</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BasicBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
        >
          <p class="text-body-2 color-gray-tertiary row-margin-mini">
            하나금융그룹의 생활금융플랫폼!<br />
          </p>
          <p class="text-title-2 font-weight-medium">하나머니 가입하기</p>
        </BasicBanner>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">RouterLink</h3>

        <BasicBanner
          tagName="RouterLink"
          to=""
          thumb="/images/_dummy/banner-money-up.png"
        >
          <p class="text-body-2 color-gray-tertiary row-margin-mini">
            하나금융그룹의 생활금융플랫폼!<br />
          </p>
          <p class="text-title-2 font-weight-medium">하나머니 가입하기</p>
        </BasicBanner>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">EventBanner</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <EventBanner thumb="/images/_dummy/img-area.png" @click="() => {}">
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h4 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h4>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>

        <EventBanner
          thumb="/images/_dummy/img-area.png"
          @click="() => {}"
          :disabledStyle="true"
        >
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h4 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h4>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">RouterLink</h3>

        <EventBanner
          tagName="RouterLink"
          to=""
          thumb="/images/_dummy/img-area.png"
        >
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h4 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h4>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>

        <EventBanner
          tagName="RouterLink"
          to=""
          thumb="/images/_dummy/img-area.png"
          :disabledStyle="true"
        >
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h4 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h4>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">thumbFit (이미지 margin-left: 0)</h3>

        <EventBanner
          :thumbFit="true"
          thumb="/images/_dummy/img-area.png"
          @click="() => {}"
        >
          <div class="inline-wrap row-margin-item-medium">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h4 class="text-title-1 font-weight-medium ellipsis">
            타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
          </h4>
          <p
            class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
          >
            설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출
            최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
          </p>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BasicBannerSlide</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BasicBannerSlide>
          <Swiper :modules="modules" :pagination="{ clickable: true }">
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <BasicBanner
                thumb="/images/_dummy/banner-001.png"
                :action="false"
              >
                <h3 class="text-title-1 row-margin-small">
                  원큐자동차담보대출
                </h3>
                <p class="text-body-1 font-weight-light">
                  자동차 소유 고객을 대상으로 빠르고 편리하게<br />
                  대출이 가능한 금융서비스 입니다.
                </p>
                <div class="inline-wrap row-margin-contents-small">
                  <TextButton
                    textSize="medium"
                    iconSize="medium"
                    tagName="span"
                    :classNames="{ wrap: 'color-gray-tertiary' }"
                  >
                    자세히보기
                    <template v-slot:rightIcon>
                      <IconLink />
                    </template>
                  </TextButton>
                </div>
              </BasicBanner>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink) -->
            <SwiperSlide>
              <BasicBanner
                thumb="/images/_dummy/banner-001.png"
                tagName="RouterLink"
                to=""
              >
                <h3 class="text-title-1 row-margin-small">
                  원큐자동차담보대출
                </h3>
                <p class="text-body-1 font-weight-light">
                  자동차 소유 고객을 대상으로 빠르고 편리하게<br />
                  대출이 가능한 금융서비스 입니다.
                </p>
                <div class="inline-wrap row-margin-contents-small">
                  <TextButton
                    textSize="medium"
                    iconSize="medium"
                    tagName="span"
                    :classNames="{ wrap: 'color-gray-tertiary' }"
                  >
                    자세히보기
                    <template v-slot:rightIcon>
                      <IconLink />
                    </template>
                  </TextButton>
                </div>
              </BasicBanner>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <BasicBanner
                thumb="/images/_dummy/banner-001.png"
                tagName="a"
                href=""
              >
                <h3 class="text-title-1 row-margin-small">
                  원큐자동차담보대출
                </h3>
                <p class="text-body-1 font-weight-light">
                  자동차 소유 고객을 대상으로 빠르고 편리하게<br />
                  대출이 가능한 금융서비스 입니다.
                </p>
                <div class="inline-wrap row-margin-contents-small">
                  <TextButton
                    textSize="medium"
                    iconSize="medium"
                    tagName="span"
                    :classNames="{ wrap: 'color-gray-tertiary' }"
                  >
                    자세히보기
                    <template v-slot:rightIcon>
                      <IconLink />
                    </template>
                  </TextButton>
                </div>
              </BasicBanner>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (a tag) -->
          </Swiper>
        </BasicBannerSlide>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">ImageBannerSlide</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ImageBannerSlide>
          <Swiper :modules="modules" :pagination="{ clickable: true }">
            <!-- Case : 링크 기능 없을 때 -->
            <SwiperSlide>
              <div :class="$style['image-view']">
                <img
                  :src="`${BASE_URL}images/_dummy/banner-002.png`"
                  alt="배너 설명 넣어주세요"
                />
              </div>
            </SwiperSlide>
            <!-- //Case : 링크 기능 없을 때 -->

            <!-- Case : 링크 기능 있을 때 (RouterLink) -->
            <SwiperSlide>
              <RouterLink to="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-002.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </RouterLink>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 -->

            <!-- Case : 링크 기능 있을 때 (a tag) -->
            <SwiperSlide>
              <a href="" class="link-block">
                <div :class="$style['image-view']">
                  <img
                    :src="`${BASE_URL}images/_dummy/banner-002.png`"
                    alt="배너 설명 넣어주세요"
                  />
                </div>
              </a>
            </SwiperSlide>
            <!-- // Case : 링크 기능 있을 때 (a tag) -->
          </Swiper>
        </ImageBannerSlide>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Thumb</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- Case : 이미지 없을 때 -->
        <CarThumb src="" />
        <!-- // Case : 이미지 없을 때 -->

        <!-- Case : 이미지 에러 -->
        <CarThumb src="/images/_dummy/.png" />
        <!-- // Case : 이미지 에러 -->

        <CarThumb src="/images/_dummy/car-thumb.png" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : small</h3>
        <!-- Case : 이미지 없을 때 -->
        <CarThumb size="small" src="" />
        <!-- // Case : 이미지 없을 때 -->

        <!-- Case : 이미지 에러 -->
        <CarThumb size="small" src="/images/_dummy/.png" />
        <!-- // Case : 이미지 에러 -->

        <CarThumb size="small" src="/images/_dummy/car-thumb.png" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : Regular</h3>
        <!-- Case : 이미지 없을 때 -->
        <CarThumb size="regular" src="" />
        <!-- // Case : 이미지 없을 때 -->

        <!-- Case : 이미지 에러 -->
        <CarThumb size="regular" src="/images/_dummy/.png" />
        <!-- // Case : 이미지 에러 -->

        <CarThumb size="regular" src="/images/_dummy/car-thumb.png" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Emblem</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- Case : code 없을 때 -->
        <CarEmblem code="" name="현대" />
        <!-- // Case : code 없을 때 -->

        <!-- Case : 이미지 에러 -->
        <CarEmblem code="dummyCode" name="현대" />
        <!-- // Case : 이미지 에러 -->

        <CarEmblem code="1001" name="현대" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">src 사용시</h3>
        <!-- Case : 이미지 없을 때 -->
        <CarEmblem src="" name="현대" />
        <!-- // Case : 이미지 없을 때 -->

        <!-- Case : 이미지 에러 -->
        <CarEmblem src="/images/_dummy/.png" name="현대" />
        <!-- // Case : 이미지 에러 -->

        <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Color Chip</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ColorChip />
        <!--
        <ColorChip type="text" />
        -->
        <ColorChip :colors="['244, 238, 238']" />
        <ColorChip :colors="['244, 238, 238', '225, 213, 213', '66, 83, 82']" />
        <ColorChip
          :colors="[
            '244, 238, 238',
            '225, 213, 213',
            '66, 83, 82',
            '155, 171, 170',
          ]"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">툴팁(tooltip)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip>
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">자동로그인</h3>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--small-margin'],
                    ]"
                  >
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                        지문인증(Face ID)가 필요합니다.
                      </div>
                    </li>
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만
                        설정이 가능합니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Bottom</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip placement="bottom">
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
                  <p :class="$style['tooltip-section__text']">
                    상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                    수신합니다.
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip type="popup">
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
                  <p :class="$style['tooltip-section__text']">
                    상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                    수신합니다.
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Inline Alert</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['inline-alert']">
          <p :class="$style['inline-alert__text']">인증이 완료되었습니다.</p>
        </div>

        <div :class="[$style['inline-alert'], $style['inline-alert--error']]">
          <p :class="$style['inline-alert__text']">인증이 실패하였습니다.</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Q&A</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['qna']">
          <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
            <UiAccordionItem
              v-for="i in 5"
              :key="i"
              :classNames="{ item: $style['qna__item'] }"
            >
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    [신차할부(오토론)] 신차할부 오토론이란?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__answer']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <section :class="$style['qna__contents']">
                      // 내용 노출<br />
                      차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안
                      원금과 이자가 포함된 원리금을 매월 일정하게 납부하는 대출
                      상품입니다
                    </section>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Product List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['product-list']">
          <ul :class="$style['product-list__list']">
            <li v-for="i in 3" :key="i" :class="$style['product-list__item']">
              <div :class="$style['product-list__block']">
                <div :class="$style['product-list__icon']">
                  <ImgMainSample />
                </div>
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  서브 텍스트 서브 텍스트<br />
                  서브 텍스트 서브 텍스트 서브 텍스트
                </p>
                <div :class="$style['product-list__link']">
                  <TextButton
                    theme="secondary"
                    :underline="true"
                    textSize="regular"
                    tagName="RouterLink"
                    to=""
                    :classNames="{ wrap: $style['product-list__link-button'] }"
                  >
                    바로가기
                  </TextButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col 2</h3>

        <div :class="[$style['product-list'], $style['product-list--col-2']]">
          <ul :class="$style['product-list__list']">
            <li v-for="i in 3" :key="i" :class="$style['product-list__item']">
              <div :class="$style['product-list__block']">
                <div :class="$style['product-list__icon']">
                  <ImgMainSample />
                </div>
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  서브 텍스트 서브 텍스트<br />
                  서브 텍스트 서브 텍스트 서브 텍스트
                </p>
                <div :class="$style['product-list__link']">
                  <TextButton
                    theme="secondary"
                    :underline="true"
                    textSize="regular"
                    tagName="RouterLink"
                    to=""
                    :classNames="{ wrap: $style['product-list__link-button'] }"
                  >
                    바로가기
                  </TextButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col 3</h3>

        <div :class="[$style['product-list'], $style['product-list--col-3']]">
          <ul :class="$style['product-list__list']">
            <li v-for="i in 5" :key="i" :class="$style['product-list__item']">
              <div :class="$style['product-list__block']">
                <div :class="$style['product-list__icon']">
                  <ImgMainSample />
                </div>
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  서브 텍스트 서브 텍스트<br />
                  서브 텍스트 서브 텍스트 서브 텍스트
                </p>
                <div :class="$style['product-list__link']">
                  <TextButton
                    theme="secondary"
                    :underline="true"
                    textSize="regular"
                    tagName="RouterLink"
                    to=""
                    :classNames="{ wrap: $style['product-list__link-button'] }"
                  >
                    바로가기
                  </TextButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col 4</h3>

        <div :class="[$style['product-list'], $style['product-list--col-4']]">
          <ul :class="$style['product-list__list']">
            <li v-for="i in 6" :key="i" :class="$style['product-list__item']">
              <div :class="$style['product-list__block']">
                <div :class="$style['product-list__icon']">
                  <ImgMainSample />
                </div>
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  서브 텍스트 서브 텍스트<br />
                  서브 텍스트 서브 텍스트 서브 텍스트
                </p>
                <div :class="$style['product-list__link']">
                  <TextButton
                    theme="secondary"
                    :underline="true"
                    textSize="regular"
                    tagName="RouterLink"
                    to=""
                    :classNames="{ wrap: $style['product-list__link-button'] }"
                  >
                    바로가기
                  </TextButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Col 5</h3>

        <div :class="[$style['product-list'], $style['product-list--col-5']]">
          <ul :class="$style['product-list__list']">
            <li v-for="i in 8" :key="i" :class="$style['product-list__item']">
              <div :class="$style['product-list__block']">
                <div :class="$style['product-list__icon']">
                  <ImgMainSample />
                </div>
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  서브 텍스트 서브 텍스트<br />
                  서브 텍스트 서브 텍스트 서브 텍스트
                </p>
                <div :class="$style['product-list__link']">
                  <TextButton
                    theme="secondary"
                    :underline="true"
                    textSize="regular"
                    tagName="RouterLink"
                    to=""
                    :classNames="{ wrap: $style['product-list__link-button'] }"
                  >
                    바로가기
                  </TextButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Color</h3>

        <div :class="[$style['product-list'], $style['product-list--col-5']]">
          <ul :class="$style['product-list__list']">
            <li :class="$style['product-list__item']">
              <RouterLink
                to=""
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--secondary'],
                ]"
              >
                <div :class="$style['product-list__icon']">
                  <IconMembershipDriver />
                </div>
                <h3 :class="[$style['product-list__title'], 'color-white']">
                  무료 보험 서비스
                </h3>
                <p :class="[$style['product-list__text'], 'color-white']">
                  '교통상해사망/교통상해후유장해보험’ 서비스를 하나캐피탈 멤버십
                  회원에게는 무료 제공하는 서비스
                </p>
              </RouterLink>
            </li>

            <li :class="$style['product-list__item']">
              <RouterLink
                to=""
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--tertiary'],
                ]"
              >
                <div :class="$style['product-list__icon']">
                  <IconMembershipCrown />
                </div>
                <h3 :class="[$style['product-list__title'], 'color-white']">
                  금리우대 서비스
                </h3>
                <p :class="[$style['product-list__text'], 'color-white']">
                  하나캐피탈 멤버십 회원이 신용대출 상품 이용 시 금리 우대를
                  제공하는 혜택 서비스
                </p>
                <div :class="$style['product-list__bottom']">
                  <p :class="$style['product-list__bottom-label']">
                    모바일전용
                  </p>
                </div>
              </RouterLink>
            </li>

            <li :class="$style['product-list__item']">
              <RouterLink
                to=""
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--quaternary'],
                ]"
              >
                <div :class="$style['product-list__icon']">
                  <IconMembershipRate />
                </div>
                <h3 :class="[$style['product-list__title'], 'color-white']">
                  생활가전 렌탈료<br />
                  할인 서비스
                </h3>
                <p :class="[$style['product-list__text'], 'color-white']">
                  하나캐피탈 제휴처 렌탈 시 렌탈료 할인을 제공하는 혜택 서비스
                </p>
              </RouterLink>
            </li>

            <li :class="$style['product-list__item']">
              <RouterLink
                to=""
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--quinary'],
                ]"
              >
                <div :class="$style['product-list__icon']">
                  <IconMembershipCar />
                </div>
                <h3 :class="[$style['product-list__title'], 'color-white']">
                  자동차 시세조회
                </h3>
                <p :class="[$style['product-list__text'], 'color-white']">
                  매월 업데이트되는 차량정보로 내 차 시세조회가 가능한 혜택
                  서비스
                </p>
                <div :class="$style['product-list__bottom']">
                  <p :class="$style['product-list__bottom-label']">
                    모바일전용
                  </p>
                </div>
              </RouterLink>
            </li>

            <li :class="$style['product-list__item']">
              <RouterLink
                to=""
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--senary'],
                ]"
              >
                <div :class="$style['product-list__icon']">
                  <IconMembershipBuilding />
                </div>
                <h3 :class="[$style['product-list__title'], 'color-white']">
                  부동산 시세조회
                </h3>
                <p :class="[$style['product-list__text'], 'color-white']">
                  매주 업데이트되는 부동산 시세조회를 무료로 이용할 수 있는 혜택
                  서비스
                </p>
                <div :class="$style['product-list__bottom']">
                  <p :class="$style['product-list__bottom-label']">
                    모바일전용
                  </p>
                </div>
              </RouterLink>
            </li>
            <li :class="$style['product-list__item']">
              <div
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--septenary'],
                ]"
              >
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
                  텍스트 텍스트 텍스트
                </p>
              </div>
            </li>
            <li :class="$style['product-list__item']">
              <div
                :class="[
                  $style['product-list__block'],
                  $style['product-list__block--octonary'],
                ]"
              >
                <h3 :class="$style['product-list__title']">타이틀</h3>
                <p :class="$style['product-list__text']">
                  텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
                  텍스트 텍스트 텍스트
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Event List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['event-list']">
          <ul :class="$style['event-list__list']">
            <li v-for="i in 3" :key="i" :class="$style['event-list__item']">
              <!-- Case : 진행중 -->
              <EventBanner
                thumb="/images/_dummy/img-area.png"
                :thumbFit="true"
                tagName="RouterLink"
                to="/customer/Customer_P04_p002"
              >
                <div class="inline-wrap row-margin-item-medium">
                  <RoundStatus size="small" theme="duodenary"
                    >진행중</RoundStatus
                  >
                </div>
                <h3 class="text-title-1 font-weight-medium ellipsis">
                  타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
                </h3>
                <p
                  class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
                >
                  설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명
                  노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
                </p>
                <p
                  class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
                >
                  2022.12.01 ~ 2022.12.31
                </p>
              </EventBanner>
              <!-- // Case : 진행중 -->
            </li>
            <li v-for="i in 2" :key="i" :class="$style['event-list__item']">
              <!-- Case : 종료 -->
              <EventBanner
                thumb="/images/_dummy/img-area.png"
                :thumbFit="true"
                tagName="RouterLink"
                to="/customer/Customer_P04_p002"
                :disabledStyle="true"
              >
                <div class="inline-wrap row-margin-item-medium">
                  <RoundStatus size="small" theme="duodenary">종료</RoundStatus>
                </div>
                <h3 class="text-title-1 font-weight-medium ellipsis">
                  타이틀 노출 최대 1줄 타이틀 노출 최대 1줄 타이틀 노출 최대 1줄
                </h3>
                <p
                  class="text-body-1 font-weight-light row-margin-small multi-ellipsis"
                >
                  설명 노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄 설명
                  노출 최대 2줄 설명 노출 최대 2줄 설명 노출 최대 2줄
                </p>
                <p
                  class="text-body-3 font-weight-light color-gray-tertiary row-margin-item-medium"
                >
                  2022.12.01 ~ 2022.12.31
                </p>
              </EventBanner>
              <!-- // Case : 종료 -->
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board Search Bar</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['board-search-bar']">
          <InputBlock>
            <InputBlockCell>
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '전체',
                  },
                  {
                    value: '2',
                    label: '제목',
                  },
                  {
                    value: '3',
                    label: '내용',
                  },
                ]"
                title="검색 조건 선택"
                defaultValue="1"
                :classNames="{
                  wrap: 'input-width-category',
                }"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicInput
                type="search"
                title="게시물 검색어"
                placeholder="검색어 입력"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board list</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['board']">
          <table>
            <colgroup>
              <col style="width: 67px" />
              <col />
              <col style="width: 103px" />
              <col style="width: 120px" />
              <col style="width: 80px" />
            </colgroup>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>
                  <span :class="$style['board__num']">
                    {{ 101 - i }}
                  </span>
                </td>
                <td>
                  <RouterLink to="" :class="$style['board__link']">
                    <span :class="$style['board__title']">
                      게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물
                      제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                      게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물
                      제목 게시물 제목
                    </span>
                  </RouterLink>
                </td>
                <td>
                  <div :class="$style['board__status']">
                    <RoundStatus size="large">마감</RoundStatus>
                  </div>
                </td>
                <td>2022.08.30</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board Detail</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['board-detail']">
          <div :class="$style['board-detail__head']">
            <div
              :class="[
                $style['board-detail__head-cell'],
                $style['board-detail__head-cell--title'],
              ]"
            >
              <h3 :class="$style['board-detail__title']">게시물 제목</h3>
            </div>
            <div :class="$style['board-detail__head-cell']">관리자</div>
            <div :class="$style['board-detail__head-cell']">2022.08.30</div>
            <div :class="$style['board-detail__head-cell']">23</div>
          </div>

          <section :class="$style['board-detail__contents']">
            // 게시물 내용 노출
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
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
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
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </template>
                  </TextButton>
                </li>
              </ul>
            </div>
          </div>
          <!-- // Case : 첨부 파일 없을시 비노출 -->
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">UiScroller</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiScroller :style="{ height: '200px' }">
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
        </UiScroller>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Agree Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['agree-box']">
          <div :class="$style['agree-box__block']">
            <div :class="$style['agree-box__head']">
              <CheckBox id="Customer_P15_p001_agree" theme="tertiary">
                <CheckBoxObject />
                <CheckBoxLabelText>개인정보 수집·이용 동의</CheckBoxLabelText>
              </CheckBox>
            </div>
            <div :class="$style['agree-box__contents']">
              <UiScroller :classNames="{ wrap: $style['agree-box__scroller'] }">
                <section :class="$style['agree-box__data']">
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                  // 약관 상세 노출 (관리자 등록)<br />
                </section>
              </UiScroller>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Name Card</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['name-card']">
          <p :class="$style['name-card__top-text']">하나캐피탈 대출상담사</p>
          <div :class="$style['name-card__icon']">
            <IconCustomer />
          </div>
          <p :class="$style['name-card__name']">김하나</p>
          <p :class="$style['name-card__mail']">hanakim@capital</p>
          <div :class="$style['name-card__tel']">
            <TextButton tagName="span" :classNames="{ wrap: 'color-green' }">
              <template v-slot:leftIcon>
                <IconCall />
              </template>
              010-1234-5678
            </TextButton>
          </div>
          <p :class="$style['name-card__number']">
            <span :class="$style['name-card__number-item']">
              여신금융협회 등록번호
            </span>
            <span :class="$style['name-card__number-item']"> 1000024254 </span>
          </p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Product Benefit</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['product-benefit']">
          <section :class="$style['product-benefit__section']">
            <div :class="$style['product-benefit__image']">
              <img src="@/assets/images/contents/img-apt-loan.png" alt="" />
            </div>
            <div :class="$style['product-benefit__info']">
              <h3 :class="$style['product-benefit__title']">
                중도상환수수료 면제!
              </h3>
              <p :class="$style['product-benefit__text']">
                언제, 얼마를 상환해도<br />
                상환수수료가 발생하지 않습니다.<br />
                필요 시 바로 상환하여, 이자 부담을 줄여보세요.
              </p>
            </div>
          </section>
          <section :class="$style['product-benefit__section']">
            <div :class="$style['product-benefit__image']">
              <img src="@/assets/images/contents/img-apt-loan.png" alt="" />
            </div>
            <div :class="$style['product-benefit__info']">
              <h3 :class="$style['product-benefit__title']">
                대출최대기간 120개월
              </h3>
              <p :class="$style['product-benefit__text']">
                내 마음대로 최대 120개월까지<br />
                대출기간을 설정하여<br />
                월납입부담을 줄여보세요.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Product Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['product-info']">
          <ul :class="$style['product-info__list']">
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconPerson />
                  </div>
                  <div :class="$style['product-info__title']">대상</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    재직기간 6개월 이상 직장인 그 외 당사기준 충족 손님
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconInterestRate />
                  </div>
                  <div :class="$style['product-info__title']">한도</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    최대 1억원 (최저 300만원)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconRate />
                  </div>
                  <div :class="$style['product-info__title']">금리</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    연 5.9% ~ 18.9%
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconDate />
                  </div>
                  <div :class="$style['product-info__title']">기간</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    12개월 ~ 120개월
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-info__item']">
              <div :class="$style['product-info__block']">
                <div :class="$style['product-info__head']">
                  <div :class="$style['product-info__icon']">
                    <IconRate />
                  </div>
                  <div :class="$style['product-info__title']">금리</div>
                </div>
                <div :class="$style['product-info__contents']">
                  <div :class="$style['product-info__text']">
                    최저 연0.0 ~ 최고 연6.9%
                  </div>
                  <div :class="$style['product-info__sub']">
                    (금융소비자의 개인신용평점에 따라 차등 적용)
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="[$style['icon-info'], 'row-margin-container-medium']">
          <ul :class="$style['icon-info__list']">
            <li :class="$style['icon-info__item']">
              <div :class="$style['icon-info__block']">
                <div :class="$style['icon-info__icon']">
                  <IconAssignment />
                </div>
                <div :class="$style['icon-info__contents']">
                  <div :class="$style['icon-info__title']">양도인</div>
                  <div :class="$style['icon-info__text']">
                    리스 승계 시 위약금이 발생하지 않아 유리합니다.
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['icon-info__item']">
              <div :class="$style['icon-info__block']">
                <div :class="$style['icon-info__icon']">
                  <IconTakingOver />
                </div>
                <div :class="$style['icon-info__contents']">
                  <div :class="$style['icon-info__title']">양수인</div>
                  <div :class="$style['icon-info__text']">
                    초기비용이 상대적으로 저렴하고, 등록 비용이 별도로 발생하지
                    않아 유리합니다.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Search Form</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <SearchForm>
          <h3 class="for-a11y">조회 조건</h3>

          <SearchFormList>
            <SearchFormItem>
              <template v-slot:key>조회기간</template>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <SimpleSelect
                    :options="[
                      {
                        value: '1',
                        label: '직접입력',
                      },
                      {
                        value: '2',
                        label: '1주',
                      },
                      {
                        value: '3',
                        label: '1개월',
                      },
                    ]"
                    title="조회기간"
                    defaultValue="1"
                    :classNames="{ wrap: 'input-width-small' }"
                  />
                </div>
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 시작 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :max="state.testSearchMaxDate001"
                    v-model="state.testSearchMinDate001"
                  />
                </div>
                <div class="flex-box__cell">
                  <div class="text-body-3">~</div>
                </div>
                <div class="flex-box__cell">
                  <SimpleDatepicker
                    title="조회기간 종료 날짜"
                    :classNames="{ wrap: 'input-width-regular' }"
                    :min="state.testSearchMinDate001"
                    v-model="state.testSearchMaxDate001"
                  />
                </div>
              </div>
            </SearchFormItem>

            <SearchFormItem>
              <template v-slot:key>이름</template>
              <SimpleInput
                title="이름"
                :classNames="{ wrap: 'input-width-large' }"
              />
            </SearchFormItem>
          </SearchFormList>

          <template v-slot:bottom>
            <ButtonList
              :wrap="true"
              :col="5"
              align="center"
              :classNames="{ wrap: 'row-margin-none' }"
            >
              <ButtonListItem>
                <BasicButton size="regular" theme="tertiary">조회</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </template>
        </SearchForm>

        <SearchForm>
          <h3 class="for-a11y">시뮬레이터 조건</h3>

          <SearchFormSection>
            <template v-slot:head>
              <SearchFormTitle>상환정보입력</SearchFormTitle>
            </template>

            <SearchFormList>
              <SearchFormItem>
                <template v-slot:key>할부원금</template>
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="할부원금"
                      :classNames="{ wrap: 'input-width-regular' }"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">원</div>
                  </div>
                </div>
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>대출일자</template>
                <SimpleDatepicker
                  title="대출일자"
                  :classNames="{ wrap: 'input-width-regular' }"
                />
              </SearchFormItem>
              <SearchFormItem>
                <template v-slot:key>초회납입일자</template>
                <SimpleDatepicker
                  title="초회납입일자"
                  :classNames="{ wrap: 'input-width-regular' }"
                />
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>상환기간/금리</template>
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="상환기간"
                      :classNames="{ wrap: 'input-width-small' }"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">개월</div>
                  </div>
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="상환금리"
                      :classNames="{ wrap: 'input-width-small' }"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">%</div>
                  </div>
                </div>
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>내구재이자부과구분</template>
                <div class="flex-box">
                  <div class="flex-box__cell flex-box__cell--medium">
                    <RadioButton
                      name="testSearchFormRadioButton001"
                      id="testSearchFormRadioButton001_001"
                      theme="tertiary"
                    >
                      <RadioButtonObject />
                      <RadioButtonLabelText>이자부과</RadioButtonLabelText>
                    </RadioButton>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <RadioButton
                      name="testSearchFormRadioButton001"
                      id="testSearchFormRadioButton001_002"
                      theme="tertiary"
                    >
                      <RadioButtonObject />
                      <RadioButtonLabelText>부분이자</RadioButtonLabelText>
                    </RadioButton>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <RadioButton
                      name="testSearchFormRadioButton001"
                      id="testSearchFormRadioButton001_003"
                      theme="tertiary"
                    >
                      <RadioButtonObject />
                      <RadioButtonLabelText>무이자</RadioButtonLabelText>
                    </RadioButton>
                  </div>
                </div>
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>내구재물품기본금리</template>
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="내구재물품기본금리"
                      :classNames="{ wrap: 'input-width-small' }"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">%</div>
                  </div>
                </div>
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>결제일자</template>
                <SimpleSelect
                  :options="[
                    {
                      value: '1',
                      label: '1일',
                    },
                    {
                      value: '2',
                      label: '2일',
                    },
                    {
                      value: '3',
                      label: '3일',
                    },
                    {
                      value: '4',
                      label: '4일',
                    },
                    {
                      value: '5',
                      label: '5일',
                    },
                    {
                      value: '6',
                      label: '6일',
                    },
                    {
                      value: '7',
                      label: '7일',
                    },
                    {
                      value: '8',
                      label: '8일',
                    },
                  ]"
                  title="결제일자"
                  defaultValue="1"
                  :classNames="{ wrap: 'input-width-small' }"
                />
              </SearchFormItem>
            </SearchFormList>
          </SearchFormSection>

          <SearchFormSection>
            <template v-slot:head>
              <SearchFormTitle>선취수수료</SearchFormTitle>
            </template>

            <SearchFormList>
              <SearchFormItem>
                <template v-slot:key>내구재선취수수료율</template>
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="내구재선취수수료율"
                      :classNames="{ wrap: 'input-width-regular' }"
                      :disabled="true"
                      defaultValue="11.82"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">%</div>
                  </div>
                </div>
              </SearchFormItem>

              <SearchFormItem>
                <template v-slot:key>내구재선취수수료</template>
                <div class="flex-box">
                  <div class="flex-box__cell">
                    <SimpleInput
                      title="내구재선취수수료"
                      :classNames="{ wrap: 'input-width-regular' }"
                      :disabled="true"
                      defaultValue="11,820"
                    />
                  </div>
                  <div class="flex-box__cell">
                    <div class="text-body-3">원</div>
                  </div>
                </div>
              </SearchFormItem>
            </SearchFormList>
          </SearchFormSection>

          <template v-slot:bottom>
            <ButtonList
              :wrap="true"
              :col="5"
              align="center"
              :classNames="{ wrap: 'row-margin-none' }"
            >
              <ButtonListItem>
                <BasicButton size="regular" theme="tertiary">산출</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </template>
        </SearchForm>
      </div>
    </section>

    <!--
    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        내용
      </div>
    </section>
    -->
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
