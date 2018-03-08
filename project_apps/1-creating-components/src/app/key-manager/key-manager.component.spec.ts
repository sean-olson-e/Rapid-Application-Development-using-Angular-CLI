import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyManagerComponent } from './key-manager.component';

describe('KeyManagerComponent', () => {
  let component: KeyManagerComponent;
  let fixture: ComponentFixture<KeyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
