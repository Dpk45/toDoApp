import ToDo from '../models/todo.model';
import { Observable } from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map'

@Injectable()
export class ToDoService{
    api_url = 'http://localhost:3000';
    todoUrl = `${this.api_url}/api/todos`;

    constructor(private _http: HttpClient){
        
    }

}
