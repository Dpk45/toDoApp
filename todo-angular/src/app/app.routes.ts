import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToDoComponent } from './components/todo.component'

const appRoutes: Routes =[
    {
         path: '',
         component: ToDoComponent
    }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);