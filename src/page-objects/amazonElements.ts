// googlePage.ts
import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const googleCommands = {
  clickLogin(this: AmazonPage) {
    return this
      .click('@login')
  },
  clickEnterEmail(this: AmazonPage){
    return this 
    .click('@enterEmail')
    .setValue('@enterEmail', 'morgisbr@gmail.com')
  },
  clickEmailDone(this: AmazonPage){
    return this
    .click('@emailContinue')
  },
  clickPassword(this: AmazonPage){
    return this
    .click('@userPassword')
    .setValue('@userPassword',"AjitAjit")
  },
  clickSignIn(this: AmazonPage){
    return this
    .click('@signIn')
  },
  clickLanguage(this: AmazonPage){
    return this
    .click('@changeLanguage')
  },
  clickHindiLanguage(this: AmazonPage){
    return this 
    .click('@hindiLanguage')
  },
  clickEnglishLanguage(this: AmazonPage){
    return this 
    .click('@englishLanguage')
  },
  clickLanguageDone(this: AmazonPage){
    return this 
    .click('@languageDone')
  },
  clickAccountList(this: AmazonPage){
    return this 
    .click('@accountList')
  },
  clickContactUs(this: AmazonPage){
    return this
    .click('@contactUs')
  },
  clickReturnsAndOrder(this: AmazonPage){
    return this 
    .click('@returnsAndOrder')
  },
  clickViewItem(this: AmazonPage){
    return this
    .click('@viewItem')
  },
  clickViewOrderDetails(this: AmazonPage){
    return this
    .click('@viewOrderDetails')
  },
  searchProduct(this: AmazonPage){
    return this
    .setValue('@inputSearch', "iphone15")
    .click('#nav-search-submit-button')
  },
  clickYourAddress(this: AmazonPage){
    return this
    .click('@yourAddress')
  },
  clickAddAddress(this: AmazonPage){
    return this
    .click('@addAddress')
  },
  clickAddDetails(this: AmazonPage){
    return this 
    .waitForElementVisible('@addressFullName')
    .setValue('@addressFullName', "John Singh")
    .setValue('@addMobileNumber', "9999999999")
    .clearValue('@addPostalCode')
    .setValue('@addPostalCode', "110059")
    .setValue('@addFlatNumber', "B-34 New Janakpuri")
    .setValue('@addressArea', "Near Buddh Bazar Road")
    .clearValue('@addressCity')
    .setValue('@addressCity', "New Delhi")
    .click('@addressStateDelhi')
   .click('#address-ui-widgets-use-as-my-default')
    // .pause(300000)
  
  }
};

const googlePage: PageObjectModel = {
  url: 'https://www.amazon.in/',
  commands: [googleCommands],
  elements: {
    login: {
      selector: '#nav-link-accountList-nav-line-1',
    },
    enterEmail: {
      selector: '#ap_email',
    },
    emailContinue:{
        selector: 'input#continue'
    },
    userPassword: {
        selector: '#ap_password',
    },
    signIn:{
        selector: '#signInSubmit'
    },
    shoppingCart: {
        selector: '#nav-cart'
    },
    returnsAndOrder:{
        selector: '#nav-orders'
    },
    accountList: {
        selector: '#nav-link-accountList'
    },
    deliveryTo: {
        selector: '#nav-global-location-popover-link'
    },
    pageContent: {
        selector: 'div#pageContent'
    },
    searchBar: {
        selector: 'div#nav-search'
    },
    navFooter: {
        selector: '#navFooter'
    },
    changeLanguage: {
        selector: '#icp-nav-flyout'
    },
    hindiLanguage: {
        selector: '(//div[@class="a-radio a-radio-fancy"])[2]',
        locateStrategy: 'xpath'
    },
    englishLanguage: {
        selector:'(//div[@class="a-radio a-radio-fancy"])[1]',
        locateStrategy: 'xpath'
    },
    languageDone: {
        selector: '(//input[@type="submit"])[5]',
        locateStrategy: 'xpath'
    },
    contactUs:{
        selector: 'div.ya-card-row:nth-of-type(4)>div>a>div'
    },
    chatOption:{
        selector: 'div.a-column.a-span6.a-text-center'
    },
    callOption:{
        selector: 'div.a-column.a-span6.a-text-center:nth-of-type(2)'
    },
    viewItem:{
        selector: '#a-autoid-7-announce'
    },
    viewOrderDetails:{
        selector: 'div.a-box-group>a[href="/gp/css/order-details?orderID=408-2344763-0528359&ref=ppx_pop_dt_b_order_details"]'
    },
    inputSearch: {
      selector: '#twotabsearchtextbox'
    },
    iphone1: {
        selector: 'a[class="a-link-normal _bXVsd_link_36_Co"]'
    },
    iphone2: {
        selector: 'div[data-component-id="11"]'
    },
    yourAddress: {
      selector: 'div.ya-card-row:nth-child(3)>div>a>div'
    },
    addAddress: {
      selector: '#ya-myab-address-add-link>div>div'
    },
    addressFullName: {
      selector: '#address-ui-widgets-enterAddressFullName'
    },
    addMobileNumber: {
      selector: '#address-ui-widgets-enterAddressPhoneNumber'
    },
    addPostalCode: {
      selector: '#address-ui-widgets-enterAddressPostalCode'
    },
    addFlatNumber: {
      selector: '#address-ui-widgets-enterAddressLine1'
    },
    addressArea: {
      selector: '#address-ui-widgets-enterAddressLine2'
    },
    addressCity: {
      selector: 'address-ui-widgets-enterAddressCity'
    },
    addressStateDelhi: {
      selector: '#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId_8'
    }, 
    saveAddress: {
      selector: '#address-ui-widgets-form-submit-button> span > input'
    },
    doneSaveAddress: {
      selector: '#a-autoid-2-announce'
    }
  },
};

export default googlePage;

export interface AmazonPage
  extends EnhancedPageObject<typeof googleCommands,
  typeof googlePage.elements> { }
