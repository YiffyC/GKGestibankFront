import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachedClientsComponent } from './attached-clients.component';

describe('AttachedClientsComponent', () => {
  let component: AttachedClientsComponent;
  let fixture: ComponentFixture<AttachedClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachedClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
