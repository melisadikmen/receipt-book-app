import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RecipeDatas, YemekData } from '../../models/yemek-data.const';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { RecipeModel } from '../../models/yemekDetails';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";

@Component({
    selector: 'app-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.scss',
    imports: [MatCardModule, MatButtonModule, MatDialogModule, MatIconModule, RouterOutlet, RecipeCardComponent]
})
export class RecipeComponent {
  yemekData = YemekData;
  recipeDatas = RecipeDatas;

  constructor(private _dialog: MatDialog, private router: Router) { }
  openDialog(event: string) {
    console.log(event)
    const dialogRef = this._dialog.open<DialogComponent>(DialogComponent, {
      data: event,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`, result);
    });
  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
}


