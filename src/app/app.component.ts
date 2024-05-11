import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, RecipeComponent, ShoppingListComponent]
})
export class AppComponent {
  title = 'recipe-book-app';
}
