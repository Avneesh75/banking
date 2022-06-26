import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsavingComponent } from './viewsaving.component';

describe('ViewsavingComponent', () => {
  let component: ViewsavingComponent;
  let fixture: ComponentFixture<ViewsavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
