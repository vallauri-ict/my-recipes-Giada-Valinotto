import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    //path di default
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'   //In questo modo matcha soltanto in questo specifico caso e non su qualsiasi caso
  },
  {
    path:'recipes',
    component:RecipesComponent
  },
  {
    path:'shopping-list',
    component: ShoppingListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
