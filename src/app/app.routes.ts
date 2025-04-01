import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RecipesComponent } from '../Components/recipes/recipes.component';


export const routes: Routes =[
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:RecipesComponent
      }
    ]
  }
];
