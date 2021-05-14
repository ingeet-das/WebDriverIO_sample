import app from '../page-objects/app'
import base from '../page-objects/base'
import allureReporter from '@wdio/allure-reporter'

describe('Demo Webshop Add to cart', () => {
    it('Should load home page', async () => {
       app.openHomePage()
       base.shortPause()
    })

    it('Should be able to add item to cart', async () => {
       // await allureReporter.addFeature('Feature') 
        await app.performLogin('example@test123.com','test123')
        const message = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(1) > a')
        await expect(message).toHaveText('example@test123.com')
        await app.addItemToCart('blue jeans')
        await browser.saveScreenshot('Cart Item.png')
        //await app.onComplete()
     })
})