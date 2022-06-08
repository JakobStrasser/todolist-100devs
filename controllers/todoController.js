const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')
const Todo = require('../models/todoModel')

// @desc    Get todos
// @route   GET /api/todos
// @access  Public
const readTodos = asyncHandler(async (request,response) => {
    const todos = await Todo.find()
    const itemsLeft = await Todo.countDocuments({completed: false})
    response.render('../views/todo', {info: todos, left: itemsLeft})
})

// @desc    Create a todo item
// @route   POST /api/todos
// @access  Public
const createTodo  = asyncHandler(async (request, response) => {
    console.log(`Creating todo item ${request}`)
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }
  
    const todo = await Todo.create({
        text: request.body.text
    })
    response.redirect('/api/todos/')
})

// @desc    Update a todo item with id
// @route   PUT /api/todos/:id
// @access  Public
const toggleComplete = asyncHandler(async (request, response) => {
    const todo =  await Todo.findById(request.params.id)
    if(!todo) {
        response.status(400)
        throw new Error('Todo item not found')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(request.params.id, {text: todo.text, completed: !todo.completed}, {new: true})
    response.json(todo)
})


// @desc    Delete todo item with id
// @route   DELETE /api/todos/:id
// @access  Public
const deleteTodo = asyncHandler(async (request, response) => {
    const todo =  await Todo.findById(request.params.id)
    if(!todo) {
        response.status(400)
        throw new Error('Todo item not found')
    }

    await todo.remove()
    response.status(200).json({id: request.params.id}) 
})

module.exports = {
    readTodos,
    createTodo,
    toggleComplete, 
    deleteTodo
}