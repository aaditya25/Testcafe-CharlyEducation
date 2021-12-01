import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe';
import loginfrom from '../Page-objects/Pages/loginnform'

const getPageUrl = ClientFunction(() => window.location.href);
const signin = new loginfrom()
fixture`Tests for User login form`
    .page(`https://app.stage.charly.education/`)

    .beforeEach(async t => {
        //Runs before each test
        await t.maximizeWindow()
        await t.setPageLoadTimeout(0)
        await t.wait(100)
    })

test(`1. Try Logging in into Charly Education with Invalid credentials`, async t => {
    //Here goes all the tests
    signin.signing_in('InvalidUser', 'aditya123')

    //Assertion using text
    await t.expect(signin.errormessage.exists).ok()
})

test(`2.Try Logging in into Charly Education with valid credentials`, async t => {
    //Here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')

    //Assertion using text
    await t.expect(signin.dashboard.innerText).contains('Hey Aditya')
    //Assertion using URL
    await t.expect(getPageUrl()).contains('dashboard');
})


