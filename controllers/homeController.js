const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')


// @desc    Get home page
// @route   GET /
// @access  Public
const home = asyncHandler(async (request,response) => {
    response.render('../views/home')
})

module.exports = {
    home
}