describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', async () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signIn = await $('button[id="signin_button"]')
        await signIn.waitForExist({timeout:500})
        await signIn.click()
        const login = await $('input[id="user_login"]')
        await login.waitForExist({timeout:500})
        await login.setValue('Invalid user')
        const password = await $('#user_password')
        password.setValue('invalid')
        const submit = await $('input[type="submit"]')
        await submit.click()
        const err_msg = await $('div[class="alert alert-error"]')
        await err_msg.waitForExist({timeout:5000})
        await expect(err_msg).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', async () => {
        await browser.pause(2000)
        browser.url('http://zero.webappsecurity.com/index.html')
        const signIn = await $('button[id="signin_button"]')
        await signIn.waitForExist({timeout:500})
        await signIn.click()
        const login = await $('input[id="user_login"]')
        await login.waitForExist({timeout:500})
        await login.setValue('username')
        const password = await $('#user_password')
        password.setValue('password')
        await browser.pause(2000)
        const submit = await $('input[type="submit"]')
        await submit.click()
        const pass_msg = await $('h2[class="board-header"]')
        await pass_msg.waitForExist({timeout:5000})
        await expect(pass_msg).toHaveText('Cash Accounts')
    })

    it('Should Log Out', async () => {
        const user_icon = await $('.icon-user')
        await user_icon.waitForExist({timeout:5000})
        await user_icon.click()
        const logout_btn = await $('#logout_link')
        await logout_btn.waitForExist({timeout:5000})
        logout_btn.click()
        await browser.pause(5000)
    })
})