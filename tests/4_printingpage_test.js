import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe';
import Printing_page from '../Page-objects/Pages/Printing_Page'
import loginform from '../Page-objects/Pages/loginnform'
import sidenav from '../Page-objects/Components/sidenav'

const getPageUrl = ClientFunction(() => window.location.href);
const sidenavi = new sidenav()
const signin = new loginform()
const Printing = new Printing_page()
fixture`UI tests on Print dashboard`
    .page(`https://app.stage.charly.education/`)

    .beforeEach(async t => {
        //Runs before each test
        await t.maximizeWindow()
        await t.setPageLoadTimeout(0)
    })

test(`1. Navigate to print dashbaord`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.print)

    //Assertion using text
    await t.expect(Printing.Upload.exists).ok()
    //Assertion using URL
    await t.expect(getPageUrl()).contains('printdashboard');
})


test(`2. Select a pdf document through print dashboard`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.print)
    await t.click(Printing.openpdf)
    await t.click(Printing.selectpdf)

    //Assertion using URL
    await t.expect(getPageUrl()).contains('learnview');
})