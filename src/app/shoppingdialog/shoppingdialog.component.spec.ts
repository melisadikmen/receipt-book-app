import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingdialogComponent } from './shoppingdialog.component';

describe('ShoppingdialogComponent', () => {
  let component: ShoppingdialogComponent;
  let fixture: ComponentFixture<ShoppingdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
