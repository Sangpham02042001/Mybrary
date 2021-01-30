const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const authorSchema = new Shema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Author', authorSchema);