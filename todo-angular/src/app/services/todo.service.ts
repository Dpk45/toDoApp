import ToDo from '../models/todo.model';
import { Observable } from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService{
    api_url = 'http://localhost:3000';
    todoUrl = 
}
