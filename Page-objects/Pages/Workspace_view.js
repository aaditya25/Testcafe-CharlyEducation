import { Selector, t } from 'testcafe'

class workspace_view {
    constructor() {
        //Selectors
        this.workspaceview = Selector('.welcomeMessage_welcome_3HJGdl4NAXGj80roVXIC4N')
        this.flashcards = Selector('#material_create_deck_button')
        this.name_deck = Selector('.input-component_input_BgrSa4LC7r36z21c9cRPv')
        this.submit = Selector('button').withText('Create')
        this.deck_title = Selector('.flashcards_deckTitle_1E6u86zxOTE1OqEDcVd69k')
        this.sideA = Selector('#A_new > div > p')
        this.sideB = Selector('#B_new > div > p')
        this.save = Selector('button').withText('Save')
        this.count = Selector('.flashcards_deckTitle_1E6u86zxOTE1OqEDcVd69k')
        this.uploadpdf = Selector('#material_upload_button')
        this.upload_file = Selector('.uploadDropzone-component_uploadArea_2nAAqmWoj4yrcjzBqDstyq')
        this.upload_succeed = Selector('.upload-component_success_3miODLv6fZ1aGeYhh1tdZ3')
        this.confirm_upload = Selector('.upload-component_uploadInfoActionButtons_3uhyqIcJhjaiMRzRFOE39W')
        this.upload_error = Selector('.uploadDropzone-component_uploadMessage_31-84SftofKZKJ-I1sAu3B')

        //For sorting
        this.dropdown_menu = Selector('//*[@id="root"]/div[3]/div/div[2]/div/div[2]/div/div[1]/div[2]/button')
        this.creation_date = Selector('//*[@id="modal-root"]/div/div/div/div[2]')
        this.a_z = Selector('//*[@id="modal-root"]/div/div/div/div[1]')


    }
    async deck_name(text) {
        await t
            .typeText(this.name_deck, text, { replace: true })
    }

}
export default workspace_view
