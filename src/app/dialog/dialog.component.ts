import { Component, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YemekData } from '../../models/yemek-data.const';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  yemekData = YemekData;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: string) { }
}
