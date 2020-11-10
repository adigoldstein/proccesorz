import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessorsListComponent } from './proccessors-list.component';

describe('ProccessorsListComponent', () => {
  let component: ProccessorsListComponent;
  let fixture: ComponentFixture<ProccessorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProccessorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
