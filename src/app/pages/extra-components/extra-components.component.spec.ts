import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraComponentsComponent } from './extra-components.component';

describe('ExtraComponentsComponent', () => {
  let component: ExtraComponentsComponent;
  let fixture: ComponentFixture<ExtraComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
