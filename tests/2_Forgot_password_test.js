import { Selector } from 'testcafe'
import loginform from '../Page-objects/Pages/loginnform'

const signin = new loginform()
fixture`Forgotten Password tests`
    .page(`https://app.stage.charly.education/`)


    .beforeEach(async t => {
        //Runs before each test
        await t.maximizeWindow()
        await t.setPageLoadTimeout(0)
        await t.wait(100)
    })


test('1. User requests a new password to be selected by entering incorrect id', async t => {
    //Here goes all the tests
    await t.click(signin.forgotpassword)
    await t.typeText(signin.email, 'aditya')
    await t.click(signin.send)

    //Assertion using text
    await t.expect(signin.confirmation.innerText).contains('Oops')

})
test('2. User requests a new password to be selected', async t => {
    //Here goes all the tests
    await t.click(signin.forgotpassword)
    await t.typeText(signin.email, 'aditya@pluspeter.com')
    await t.click(signin.send)

    //Assertion using text
    await t.expect(signin.confirmation.innerText).contains('Thanks')

})