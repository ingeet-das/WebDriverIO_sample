class Base{
    async shortPause(){
        browser.pause(2000)
    }
    async mediumPauese(){
        browser.pause(5000)
    }
    async longPauese(){
        browser.pause(8000)
    }
}
export default new Base()