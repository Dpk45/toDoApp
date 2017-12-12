var ToDo = require('../models/todo.model');

_this = this;

// Async function to get the todo list
exports.getToDos = async function(query, page, limit){
    var options = {
        page,
        limit
    }

    try{
        var todos = await ToDo.paginate(query, options);
        console.log(">>>> todos >>>>>>", todos)
        return todos;

    }catch(error){
        console.log(">>>>>>> error >>>>>>>>>>>>>>>>>>>", error)
        throw Error("Error while paginationg Todos.............")
    }
}

//Async fuction to create todo
exports.createTodo = async function(todo){

    var newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    })

    try{
        var savedTodo = await newTodo.save();
        console.log("savedTod >>>", savedTodo);        
        return savedTodo;
    }catch(error){
        console.log("error during create todo ......");
        throw new Error("error during create todo ......");
    }
}

// Async function to update todo
exports.updateTodo = async function(todo){
    var id = todo.id;
    try{
        // find old todo by id
        var oldTodo = await ToDo.findById(id);
        console.log("\n old todo >>>>>>", oldTodo)

    }catch(error){
        console.log("error >>>>.", error)
        throw new Error("error while finding todo by id");
    }

    if(!oldTodo){
        return false;
    } 

    oldTodo.title = todo.title;
    oldTodo.description = todo.description;
    oldTodo.status = todo.status

    try{
        var savedTodo = oldTodo.save();
        return savedTodo;
    }catch(error){
        console.log("error >>", error);
        throw new Error("Error while updating todo ............")
    }
}

// Async function to delete todo
exports.deleteTodo = async function(id){
    try{
        var deletedTodo = await ToDo.remove({_id : id});
        return deletedTodo;
    }catch(error){
        throw new Error("error while deleting todo....................")
    }
} 
