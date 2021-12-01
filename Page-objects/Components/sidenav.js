import {Selector,t} from 'testcafe'

class sidenav{
    constructor(){
        this.profile = Selector('#layout_sidenav_profile')
        this.language = Selector('#layout_sidenav_language')
        this.invite_frineds = Selector('#layout_sidenav_invite_friends')
        this.help = Selector('#layout_sidenav_help')
        this.tutor = Selector('#layout_sidenav_video')
        this.print = Selector('#layout_sidenav_print_jobs')
        this.workspace_button = Selector('#layout_sidenav_material')
        this.logo = Selector('#layout_header_logo')
        this.language_button = Selector('#layout_sidenav_language')
        this.deutche = Selector('#de')
        this.english = Selector('#en')
    }
}export default sidenav