
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`clicking the draw button displays the div with an id of choices`, async() =>{
    await driver.findElement(By.id("draw")).click()
    const choicesSection = await driver.findElement(By.id("choices"))
    const displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
})

test(`clicking the add to duo button displays the div with an id of player-duo`, async() =>{
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.css(`.bot-btn`)).click()
    const playerDuoSection = await driver.findElement(By.id("player-duo"))
    const displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
})