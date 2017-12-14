import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToDoService } from './services/todo.service'
import { routing, appRoutingProviders } from "./app.routes"

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/todo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [ToDoService, appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
