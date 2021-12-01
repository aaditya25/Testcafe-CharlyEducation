import { Selector } from 'testcafe'
import workspace_view from '../Page-objects/Pages/Workspace_view'
import loginform from '../Page-objects/Pages/loginnform'
import sidenav from '../Page-objects/Components/sidenav'
import { ClientFunction } from 'testcafe';

const getPageUrl = ClientFunction(() => window.location.href);
const sidenavi = new sidenav()
const signin = new loginform()
const workspace = new workspace_view()
fixture`UI Tests on Workspace`
    .page(`https://app.stage.charly.education/`)

    .beforeEach(async t => {
        //Runs before each test
        await t.maximizeWindow()
        await t.setPageLoadTimeout(0)

    })

test(`1. Navigate to Workspace`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.workspace_button)

    //Assertion using URL
    await t.expect(getPageUrl()).contains('material');
})

test(`2. Try uploading incorrect document format through workspace`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.workspace_button)
    await t.click(workspace.uploadpdf)
    await t.click(workspace.upload_file)
    await t.setFilesToUpload('input[type=file]', ['null.jpg'])

    //Assertion
    await t.expect(workspace.upload_error.innerText).contains('Please load a PDF file.')
})

test(`3. Upload PDF document through workspace`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.workspace_button)
    await t.click(workspace.uploadpdf)
    await t.click(workspace.upload_file)
    await t.setFilesToUpload('input[type=file]', ['testfile.pdf'])

    //Assertion
    await t.expect(workspace.upload_succeed.innerText).contains('Upload succeeded.')

    //Tests continued
    await t.click(workspace.confirm_upload)
    //Assertion using URL
    await t.expect(getPageUrl()).contains('learnview')
})

test(`4. Create a Flashcards deck`, async t => {
    //here goes all the tests
    signin.signing_in('aditya@pluspeter.com', 'aditya123')
    await t.click(sidenavi.workspace_button)
    await t.click(workspace.flashcards)

    //Assertion using elements
    await t.expect(workspace.name_deck.exists).ok()

    //Tests continued
    workspace.deck_name('Test 1')
    await t.click(workspace.submit)

    //Assertion using elements
    await t.expect(workspace.deck_title.exists).ok()

    //Tests continued
    await t.typeText(workspace.sideA, 'side a')
    await t.typeText(workspace.sideB, 'side b')
    await t.click(workspace.save)

    //Assertion using Text
    await t.expect(workspace.count.innerText).contains('Test 1')
});