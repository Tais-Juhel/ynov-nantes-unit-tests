const ToDo = require('../../toDoModel');

describe("Todo Model", () => {

    it("create and read todo", async () => {
        const res = await request.post('/todo')
            .send({
                text: 'test'
            });

        const todo = await ToDo.findOne({
            text: 'test'
        }); //create

        expect(todo.text).toBeTruthy(); //read
    });


});