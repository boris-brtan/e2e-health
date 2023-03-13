import { Given, When, Then } from '@wdio/cucumber-framework'

import LoginPage from '../pageobjects/login.page'
import Page from '../pageobjects/page'
import SecurePage from '../pageobjects/secure.page'

const pages: Record<string, Page> = {
    login: LoginPage,
}

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page].open()
})

When(/^I login with (.+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
})

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveTextContaining(message)
})
