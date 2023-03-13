import { ChainablePromiseElement } from 'webdriverio'

import Page from './page'

class SecurePage extends Page {

    public get flashAlert () {
        return $('#flash')
    }
}

export default new SecurePage()
