let Author = require('mongoose').model('Author');

let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
        Author.find().sort({
                name: 1
            })
            .then(author => res.json(author)) // all responses just spit json
            .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(errorHandler.bind(res));
    },
    create(req, res) {
        console.log(req.body);
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(errorHandler.bind(res));
    },

    update(req, res) {
        console.log("this is  req.body form data from update in task.js:", req.body);
        Author.update({
                _id: req.params.id
            }, {
                name: req.body.name
            }, {
                new: true,
                runValidators: true
            })
            .then(author => {
                console.log("task data from update successful", author);
                res.json(author);
            })
            .catch(errorHandler.bind(res));
    },

    // update(req, res) {
    //     console.log("this is  req.body form data from update in task.js:", req.body);
    //     Author.findByIdAndUpdate(req.params.id, req.body, {
    //                 new: true,
    //                 // runValidators: true
    //             }

    //         )
    //         .then(author => {
    //             console.log("task data from update successful", author);
    //             res.json(author);

    //         })
    //         .catch(errorHandler.bind(res));
    // },



    destroy(req, res) {
        Author.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },

    // destroy(req, res) {
    //   Task.findByIdAndRemove(req.params.id)
    //     .then(result => res.json(result))
    //     .catch(errorHandler.bind(res));
    // },
};