import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendVizComponent } from './friend-viz.component';

describe('FriendVizComponent', () => {
  let component: FriendVizComponent;
  let fixture: ComponentFixture<FriendVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendVizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
