
import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class RonJon extends BasePage {


//selectors
searchBar: By = By.xpath('//input[@class="trbox"]')
navyShorts: By = By.xpath('(//a[@id="lnkItem0"])')
sizeSelect: By = By.xpath('(//select[@id="ctrlSelections_Property_2_drpSelection"])')
selectSize34: By = By.xpath('(//option[@value="176692"])')
qtyBox: By = By.xpath('(//input[@id="txtQty"])')
addToCartButton: By = By.xpath('(//input[@id="btnAdd2Cart"])')
cartButton: By = By.xpath('(//span[@class="cartitems"])')



//textFields
searchResults: By = By.xpath('(//tr[@class="vtop"])[3]')
colorResults: By = By.xpath('(//span[@id="ctrlSelections_Property_1_LabelValue_1"])')
numberInShoppingCart: By = By.xpath('(//span[@class="yellow bold"])')
cartTotalsScreen: By = By.xpath('(//div[@class="inter_height_wrapper"])')
cartScreenQty: By = By.xpath('(//input[@id="rptRecipients_ctl00_rptCart_ctl00_txtQty"])')



//methods 
constructor() {
    super({url: "https://www.ronjonsurfshop.com"});
}

async search(searchTerm: string) {
    return this.setInput(this.searchBar, `${searchTerm}\n`)
}

async readSearchResults() {
    return this.getText(this.searchResults)
}

async readColorResults() {
    return this.getText(this.colorResults)
}

async readSizeSelect() {
    return this.getText(this.sizeSelect)
}

async qtyInput(setQuantity: number) {
    return this.setInput(this.qtyBox, `${setQuantity}`)
}

async readqtyBox() {
    return this.getText(this.qtyBox)
}

async readNumberInShoppingCart() {
    return this.getText(this.numberInShoppingCart)
}

async readCartTotalsScreen() {
    return this.getText(this.cartTotalsScreen)
}

async readCartScreenQty() {
    return this.getText(this.cartScreenQty)
}
}