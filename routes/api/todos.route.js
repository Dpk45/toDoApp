var express = require('express');

var router = express.Router();

var toDoController = require('../../controllers/todo.controller');


router.get('/', toDoController.getTodos);

router.post("/", toDoController.createTodo);

router.put('/', toDoController.updateTodo);

router.delete('/:id', toDoController.deleteTodo);


module.exports = router;