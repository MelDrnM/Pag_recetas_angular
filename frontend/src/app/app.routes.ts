import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RecipeDetail } from './components/recipe-detail/recipe-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipe/:id', component: RecipeDetail }
];