const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  
  it("double malus quality", function() {
    const gildedRose = new Shop([new Item("foo", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("never negatif", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie up quality", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("Backstage passes up quality: <10days", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it("Backstage passes up quality: 10days=>", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("Backstage passes up quality: 5days=>", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it("Backstage passes quality concert finished", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
