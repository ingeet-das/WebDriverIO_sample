describe('suite async', () => {
    it('test', async () => { // pay attention to `async` keyword
        const el = await $('body') // note `await` keyword
        await el.click()

        await browser.pause(500)

        console.log(browser.capabilities) // static properties should not be awaited

        // this WON'T WORK! You can't chain functions like this.
        await $('body').click()
        // instead you need to:
        await (await $('body')).click()
    })
})