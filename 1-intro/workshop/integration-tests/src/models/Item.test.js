const Item = require("./Item");

describe("Item model", () => {

    it("create and read item", async () => {
        const res = await request.post('/item/add')
            .send({
                name: 'name'
            });

        const item = await Item.findOne({
            name: 'name'
        });

        expect(item.name).toBeTruthy();
    });

    it("update item", async () => {
        const res = await request.post('/item/add')
        .send({
            name: 'name'
        });

        const item = await Item.findOne({
            name: 'name'
        });

        item.name = 'name2';

        expect(item.name).toBe('name2');

    });

    it("delete item", async() => {

        const res = await request.post('/item/add')
        .send({
            name: 'name'
        });

        const item = await Item.findOne({
            name: 'name'
        });

        await item.drop();

        expect(item).toBeNull();

    });
});