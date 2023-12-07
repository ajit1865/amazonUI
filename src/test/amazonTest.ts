

import { NightwatchBrowser } from "nightwatch";

const fetchElements = browser.page.amazonElements();

describe("UI testing of Amazon", () => {
    beforeEach((browser) => {
        fetchElements
            .maximizeWindow()
            .navigate()
            .clickLogin()
            .clickEnterEmail()
            .clickEmailDone()
            .clickPassword()
            .clickSignIn()
            .pause(3000)
            .assert.urlContains("?ref_=nav_ya_signin");
    })
    // it("verify all fields are present on Amazon", () => {
    //     fetchElements
    //         .assert.urlContains("?ref_=nav_ya_signin")
    //         .assert.elementPresent('@shoppingCart')
    //         .assert.elementPresent('@returnsAndOrder')
    //         .assert.elementPresent('@accountList')
    //         .assert.elementPresent('@deliveryTo')
    //         .assert.elementPresent('@pageContent')
    //         .assert.elementPresent('@searchBar')
    //         .assert.elementPresent('@navFooter')
    //         .pause(3000)
    //         .end();
    // }),
    // it("verify user able to change language",()=> {
    //     fetchElements
    //     .clickLanguage()
    //     .clickHindiLanguage()
    //     .clickLanguageDone()
    //     .assert.urlContains("https://www.amazon.in/?ref_=nav_ya_signin&language=hi_IN")
    //     .end();
    // }),
    // it("changing language hindi to english ", ()=> {
    //     fetchElements
    //     .clickLanguage()
    //     .clickEnglishLanguage()
    //     .clickLanguageDone()
    //     .assert.urlContains("https://www.amazon.in/?ref_=nav_ya_signin&language=en_IN")
    //     .end();
    // }),
    // it("verify both chat and call option present on contactUs",()=>{
    //     fetchElements
    //     .clickAccountList()
    //     .clickContactUs()
    //     .assert.elementPresent('@chatOption')
    //     .assert.elementPresent('@callOption')
    //     .end();
    // }),
    // it("verify user able to see previous order details",()=>{
    //     fetchElements
    //     .clickReturnsAndOrder()
    //     .clickViewItem()
    //     .clickViewOrderDetails()
    //     .assert.urlContains("https://www.amazon.in/gp/your-account/order-details?ie=UTF8&orderID=408-2344763-0528359&ref=ppx_pop_dt_b_order_details")
    //     .end();
    // }),
    // it("verify user able to search a product", ()=>{
    //     fetchElements
    //     .searchProduct()
    //     .assert.elementPresent('@iphone1')
    //     .assert.elementPresent('@iphone2')
    //     .assert.urlContains("s?k=iphone15&ref=nb_sb_noss")
    //     .end();
    // }),
    it("verify user should able to add address", () => {
        fetchElements
            .clickAccountList()
            .clickYourAddress()
            .clickAddAddress()
            .clickAddDetails()
            .waitForElementVisible('@saveAddress')
            .click('@saveAddress')
            .assert.elementPresent('#address-ui-address-form')
            // .pause(300000)
            .waitForElementVisible('@doneSaveAddress', 10000)
            .click('@doneSaveAddress')
            .end();
    })

});