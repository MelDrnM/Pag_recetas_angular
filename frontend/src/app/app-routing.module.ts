import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RecipeDetail } from './components/recipe-detail/recipe-detail';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipe/:id', component: RecipeDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }