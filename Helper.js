import {t} from 'testcafe'
import loginnform from '../Testcafe-Testing/Page-objects/Pages/loginnform'

const logs = new loginnform()

export async function login(username, password)
{
    
    await t.click(logs.login)
    await t.typeText(logs.email,username)
    await t.typeText(logs.password,password)
    await t.click(logs.send)
}
