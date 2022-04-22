const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should have sellin", function() {
    const gildedRose = new Shop([new Item("test", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBeDefined();
  });

  it("should have quality", function() {
    const gildedRose = new Shop([new Item("test", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeDefined();
  });

  it("decrease values", function() {
    const gildedRose = new Shop([new Item("test", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it("quality not over 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("sulfuar doesn't lose quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(30);
  });

});
