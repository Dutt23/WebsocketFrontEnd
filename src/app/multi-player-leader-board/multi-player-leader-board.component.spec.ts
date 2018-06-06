import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPlayerLeaderBoardComponent } from './multi-player-leader-board.component';

describe('MultiPlayerLeaderBoardComponent', () => {
  let component: MultiPlayerLeaderBoardComponent;
  let fixture: ComponentFixture<MultiPlayerLeaderBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPlayerLeaderBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPlayerLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
