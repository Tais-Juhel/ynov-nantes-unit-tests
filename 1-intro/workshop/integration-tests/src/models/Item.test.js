const Item = require("./Item");

const newitemdata = {
    name: 'name'
};

describe("Item model", () => {

    it("create and read item", async () => {
        const validItem = new Item(newitemdata);
        const savedItem = await validItem.save();
        expect(savedItem.name).toBe(validItem.name);
    });

    it("update item", async () => {

    });

    it("delete item", async() => {

    });
});