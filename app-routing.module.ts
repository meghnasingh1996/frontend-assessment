import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from 'src/app/cocktail/cocktail.component';
import { ListComponentComponent } from 'src/app/list-component/list-component.component';

const routes: Routes = [
  {
    path:'',
    component: CocktailComponent
  },
  {
    path:'list',
    component: ListComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
