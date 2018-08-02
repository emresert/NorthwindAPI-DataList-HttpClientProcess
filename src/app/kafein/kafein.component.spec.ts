/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KafeinComponent } from './kafein.component';

describe('KafeinComponent', () => {
  let component: KafeinComponent;
  let fixture: ComponentFixture<KafeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafeinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
