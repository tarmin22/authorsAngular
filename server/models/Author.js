let mongoose = require('mongoose');
let uniqueValid = require('mongoose-unique-validator'); // oooo mongoose unique valids!!
let Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: {
        type: String,
        // unique: true,
        required: [true, "Name is required"],
        minlength: [3, "Name must have at least 3 characters!"]
    }

}, {
    timestamps: true
});

AuthorSchema.plugin(uniqueValid, {
    message: `{PATH} must be unique!`
});

mongoose.model('Author', AuthorSchema);