class App{
    async openHomePage(){
        browser.url('http://demowebshop.tricentis.com/')
    }
    async performLogin(user,pass){
        const login = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(2) > a')
        await login.waitForExist()
        await login.click()
        const email = await $('#Email')
        await email.waitForExist()
        await email.setValue(user)
        const password = await $('#Password')
        await password.setValue(pass)
        const submit = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div > div.page-body > div.customer-blocks > div.returning-wrapper > div.form-fields > form > div.buttons > input')
        await submit.waitForExist()
        await submit.click()
    }
    async addItemToCart(item){
        const search_box = await $('#small-searchterms')
        await search_box.waitForExist({timeout:15000})
        await search_box.setValue(item)
        await browser.keys('Enter')
        const add_button = await $('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div > div.page-body > div.search-results > div.product-grid > div > div > div.details > div.add-info > div.buttons > input')
        await add_button.waitForExist({timeout:15000})
        await add_button.click()
        const cart = await $('#topcartlink > a > span.cart-qty')
        await cart.waitForExist({timeout:15000})
        await cart.click()
        const item_cart = await $('.product-name')
        await item_cart.waitForExist({timeout:15000})
       // await expect(item_cart).toHaveAttrContaining('Blue Jeans')
    }

    async onComplete(){
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
export default new App()