import {Component, OnInit} from '@angular/core';
import { ToDoService } from '../services/todo.service'
import ToDo  from '../models/todo.model'

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss']
})

export class ToDoComponent{
    constructor(private _todoService: ToDoService){

    }

    public newToDo: ToDo = new ToDo()

    todosList: ToDo[]
    editTodos: ToDo[] = [];
    ngOnInit(){
        this._todoService.getToDos().subscribe(todos => {
            this.todosList = todos
            console.log("todoList >>>>>", this.todosList)
        })
    }


// create Todo
    createTodo(){
        this._todoService.createToDo(this.newToDo).subscribe((res: any)=>{
            this.todosList.push(res.data);
            this.newToDo = new ToDo();
        })
    }

// update Todo
    editTodo(todo: ToDo){
        console.log(" to edit",todo)
        if(this.todosList.includes(todo)){
            if(!this.editTodos.includes(todo)){
                this.editTodos.push(todo);
            }else{
                this.editTodos.splice(this.editTodos.indexOf(todo), 1)
                this._todoService.editToDo(todo).subscribe(res=>{
                    console.log("updates successfully..............")
                    }, err=>{
                            this.editTodo(todo)
                            console.error('Update Unsuccesful')
                })
            }
        }
    }


// For changing the status of the ToDos, to Done we have created a button. We will make a function doneTodo for that —
    doneTodo(todo: ToDo){
        todo.status = 'Done';
        this._todoService.editToDo(todo).subscribe(res =>{
            console.log("update succesfull")
        }, err=>{
            this.editTodo(todo)
            console.error('Update Unsuccesful')
        })
    } 



// For Checking if the user has entered the enter key to Edit the Todo — we are making a short event handler —
    submitTodo(event, todo: ToDo){
        if(event.keyCode == 13){
            this.editTodo(todo);
        }
    }

// Delete Todo
    deleteTodo(todo){
        console.log("id>>>>>>", todo._id)
        this._todoService.deleteToDo(todo._id).subscribe(res=>{
            this.todosList.splice(this.todosList.indexOf(todo._id), 1)
            console.log("deleted successfully..........")
        })
    }


}