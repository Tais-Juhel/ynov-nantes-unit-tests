const helperTodoCreation = (req) => {

    if (!req.body || !req.body.text || req.body.test === '') {
        return false;
    }
    return true;
}

const helperTypeId = (req) => {

    if (!req.body || typeof req.body.id != "number" ) {
        return false;
    }
    return true;
}

module.exports = { 
    helperTodoCreation,
    helperTypeId
}