import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingdialogComponent } from '../shoppingdialog/shoppingdialog.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingData, ShoppingListDatas, YemekData } from '../../models/yemek-data.const';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  yemekData = YemekData;
  ShoppingData = ShoppingData;
  ShoppingListDatas = ShoppingListDatas;
  displayedColumns: string[] = ['title', 'description'];
  dataSource = ShoppingListComponent;
  constructor(public dialog: MatDialog, private router: Router) { }
  openToDialog(event: string) {
    const dialogRef = this.dialog.open<ShoppingdialogComponent>(ShoppingdialogComponent, {
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