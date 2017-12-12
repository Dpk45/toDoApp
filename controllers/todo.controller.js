// Accesing the service we have created.

var TodoService = require('../services/todo.service');


_this = this;

// Async controller function to get list of todods
exports.getTodos = async function(req, res, next){
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;
     try{
        var todos = await TodoService.getToDos({}, page, limit);
        return res.status(200).json({status: 200, data: todos});
     }catch(error){
         console.log(error.message);
         return res.status(400).json({status: 400, message: error.message});
     }
}

// Async controller function to create a new todo
exports.createTodo = async function(req, res, next){
    var todo = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try{
        var todo = await TodoService.createTodo(todo);
        console.log("todo >>>>>>>>", todo)
        res.status(200).json({status: 200, data: todo});
    }catch(errror){
        console.log(">>>>> error in create todo controller >>>>>>", error)
        return res.status(400).json({status: 400, message: error.message});
}
}

// Async controler function to update todo
exports.updateTodo = async function(req, res, next){
    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id is rwequired to update Todo"});
    }

    var id =req.body._id;
    var todo = {
        id,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try{
        var updatedTodo = await TodoService.updateTodo(todo);
        return res.status(200).json(updatedTodo);
    }catch(err){
        res.status(400).json({status: 400, message: error.message});
    }
}

// Ayync controler function to delete todo
exports.deleteTodo = async function(req, res, next){
    var id = req.params.id;

    try{

        var deletedTodo = await TodoService.deleteTodo(id);
        res.status(200).json({status: 200, data: deletedTodo})
    }catch(error){
        res.status(400).json({status: 400, message: error.message});
    }
}