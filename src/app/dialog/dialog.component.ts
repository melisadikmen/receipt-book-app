import { Component, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { YemekData } from '../yemek-data.const';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainModel } from '../yemekDetails';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() yemeklerData: MainModel | undefined = {};
  private MainModel:Array<string>=[];
  yemekData = YemekData;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: string) { }
}
