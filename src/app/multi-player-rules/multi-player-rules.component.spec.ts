import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayerRulesComponent } from './multi-player-rules.component';

describe('MultiPlayerRulesComponent', () => {
  let component: MultiPlayerRulesComponent;
  let fixture: ComponentFixture<MultiPlayerRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayerRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayerRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
