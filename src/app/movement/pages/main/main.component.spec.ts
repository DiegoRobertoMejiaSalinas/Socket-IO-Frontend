import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementMainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MovementMainComponent;
  let fixture: ComponentFixture<MovementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
