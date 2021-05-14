import app from '../page-objects/app'
import base from '../page-objects/base'

describe('Demo Webshop Login-Logout', () => {
    it('Should load home page', async () => {
       app.openHomePage()
       base.shortPause()
    })

    it('Should not be able to login with invalid credentials', async () => {
       await app.performLogin('user@example.com','pass')
       const message = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div > div.page-body > div.customer-blocks > div.returning-wrapper > div.form-fields > form > div.message-error > div > span')
       await expect(message).toHaveText('Login was unsuccessful. Please correct the errors and try again.')
       await browser.saveScreenshot('Fail Login Message.png')
    })

    it('Should be able to login with valid credentials', async () => {
        await app.performLogin('example@test123.com','test123')
        const message = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(1) > a')
        await expect(message).toHaveText('example@test123.com')
        await browser.saveScreenshot('Successful Login.png')
     })
})