const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')
const User = require('../models/userModel')


// @desc    Login
// @route   GET /login/
// @access  Public
const loging = asyncHandler(async (request,response) => {
    const todos = await Todo.find()
    const itemsLeft = await Todo.countDocuments({completed: false})
    response.render('../views/todo', {info: todos, left: itemsLeft})
})

module.exports = {
    home
}