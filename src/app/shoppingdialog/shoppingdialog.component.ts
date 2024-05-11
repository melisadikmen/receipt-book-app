import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ShoppingModel } from '../yemek-data.const';
import { MainModel } from '../yemekDetails';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shoppingdialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './shoppingdialog.component.html',
  styleUrl: './shoppingdialog.component.scss'
})
export class ShoppingdialogComponent {
  private ShoppingModel: Array<string> = [];
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: ShoppingModel) {
    console.log(dialogData);
  }
}
