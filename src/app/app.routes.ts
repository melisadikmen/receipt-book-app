import { Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path: "recipe", component:RecipeComponent},
    {path: "shopping-list", component:ShoppingListComponent}
];
