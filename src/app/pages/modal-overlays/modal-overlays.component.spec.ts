import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOverlaysComponent } from './modal-overlays.component';

describe('ModalOverlaysComponent', () => {
  let component: ModalOverlaysComponent;
  let fixture: ComponentFixture<ModalOverlaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOverlaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
