import { Selector, t } from 'testcafe'

class loginform {
    constructor() {
        //Selectors
        this.email = Selector('#email')
        this.passw = Selector('#password')
        this.send = Selector('.submitButton')
        this.forgotpassword = Selector('.link').withText('Forgot your password?')
        this.confirmation = Selector('.largeHeader')
        this.dashboard = Selector('.welcomeMessage_welcome_3HJGdl4NAXGj80roVXIC4N')
        this.errormessage = Selector('.help_for_password')
        this.confpassword = Selector('#password_confirmation')
        this.sociallogin = Selector('.googleButton')
        this.enteremailsocial = Selector('#identifierId')
        this.next = Selector('.VfPpkd-RLmnJb')
        this.enterpasswordsocial = Selector('.whsOnd')

    }

    async signing_in(username, password) {
        await t
            .typeText(this.email, username, { replace: true })
            .typeText(this.passw, password, { replace: true })
            .click(this.send)
    }
    async enter_email(text) {
        await t
            .typeText(this.email, text, { replace: true })
    }

    async user_reg(username, passwoord, c_password) {
        await t
            .typeText(this.email, username, { replace: true })
            .typeText(this.password, passwoord, { replace: true })
            .typeText(this.confpassword, c_password, { replace: true })
            .click(this.send)
    }

    async user_reg_sociallogin(enemail, enpassword) {
        await t
            .typeText(this.enteremailsocial, enemail, { replace: true })
            .click(this.next)
            .typeText(this.enterpasswordsocial, enpassword, { replace: true })
            .click(this.next)
    }
}
export default loginform