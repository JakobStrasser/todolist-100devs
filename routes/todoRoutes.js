const express = require('express')
const router = express.Router()
const {readTodos, createTodo, toggleComplete, deleteTodo} = require('../controllers/todoController')

router.get('/', readTodos)

router.post('/', createTodo )

router.put('/:id',toggleComplete )

router.delete('/:id', deleteTodo)


module.exports = router