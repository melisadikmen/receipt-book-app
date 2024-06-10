import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RecipeModel } from '../../models/yemekDetails';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule,MatButtonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() data: RecipeModel = {};
  @Output() isOpenDialog=new EventEmitter<void>();

  openDialog(description: string) {
    this.isOpenDialog.emit();


   }

}
