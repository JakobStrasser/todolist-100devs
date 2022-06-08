const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    microsoftId: {
        type: String,
        required: [true, 'Please add a id value']
    },
    displayName: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)