let authors = require('./../controllers/authors'); // controller require
let path = require('path');

module.exports = function (app) {
    app.get('/authors/', authors.index);
    app.get('/authors/:id', authors.show);
    app.post('/authors/', authors.create);
    app.put('/authors/:id', authors.update);
    app.delete('/authors/:id', authors.destroy);




    // app.put('/tasks/:id', tasks.update)
    // app.delete('/tasks/:id', tasks.destroy); // passing in controller methods that take req and res can be done this way


    // #### functionally these routes are shorthand for the below example
    // app.get('/example', function(req, res){
    //     tasks.example(req, res);
    // })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};