import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe';
import sidenav from '../Page-objects/Components/sidenav';
import loginfrom from '../Page-objects/Pages/loginnform'

const sidenavi = new sidenav()
const getPageUrl = ClientFunction(() => window.location.href);
const signin = new loginfrom()
fixture`Change the language in Charly Education`
    .page(`https://app.stage.charly.education/`)

    .beforeEach(async t => {
        //Runs before each test
        await t.maximizeWindow()
        await t.setPageLoadTimeout(0)
        await t.wait(100)
    })

test(`1. Change language to Deutche`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.language_button)
    await t.click(sidenavi.deutche)
    await t.expect(sidenavi.language_button.innerText).contains('Sprache')
})

test(`2. Change language to English`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.language_button)
    await t.click(sidenavi.deutche)
    await t.click(sidenavi.english)
    await t.expect(sidenavi.language_button.innerText).contains('Language')

})


