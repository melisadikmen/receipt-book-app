import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RecipeDatas, YemekData } from '../yemek-data.const';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, MatIconModule, RouterOutlet],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  yemekData = YemekData;
  recipeDatas = RecipeDatas;

  constructor(public dialog: MatDialog, private router: Router) { }
  openDialog(event: string) {
    const dialogRef = this.dialog.open<DialogComponent>(DialogComponent, {
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


