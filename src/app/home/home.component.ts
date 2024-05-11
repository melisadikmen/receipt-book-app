import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { YemekData } from '../yemek-data.const';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterOutlet, MatMenuModule, MatButtonModule]
})
export class HomeComponent {
    yemekData = YemekData;
    constructor(private _router: Router, public cdr: ChangeDetectorRef) {
    }
    goToLink(path: string) {
        this._router.navigateByUrl(path)
    }
}
