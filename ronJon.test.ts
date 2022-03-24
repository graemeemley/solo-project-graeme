import { Driver } from "selenium-webdriver/chrome";
import { RonJon } from "./ronJonpageObject";

const ronjon = new RonJon;  

test("search bar", async () => {
    await ronjon.navigate(); 
    await ronjon.driver.manage().window().maximize();
    await ronjon.search("backwater");
    expect(await ronjon.readSearchResults()).toContain("Backwater");
}) 

test("product page", async () => {
    await ronjon.click(ronjon.navyShorts);
    expect(await ronjon.readColorResults()).toContain("navy");
    await ronjon.click(ronjon.sizeSelect);
    await ronjon.click(ronjon.selectSize34);
    expect(await ronjon.readSizeSelect()).toContain("34");
    await ronjon.qtyInput(2);
    expect(await ronjon.readqtyBox()).toContain("2");
    await ronjon.click(ronjon.addToCartButton);
    expect(await ronjon.readNumberInShoppingCart()).toContain("2");
})

test("cart screen", async () => {
    await ronjon.click(ronjon.cartButton);
    expect(await ronjon.readCartTotalsScreen()).toContain("Backwater")
    expect(await ronjon.readCartTotalsScreen()).toContain("34")
    expect(await ronjon.readCartScreenQty()).toContain("2")
    expect(await ronjon.readCartTotalsScreen()).toContain("Navy")
    expect(await ronjon.readCartTotalsScreen()).toContain("$52.00")
    await ronjon.driver.quit()
})

