import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing'
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-form',
  template: '<div>test</div>'
})
export class MockFriendFormComponent {
  @Input() friends: any;
}

@Component({
  selector: 'app-friend-viz',
  template: '<div>test</div>'
})
export class MockFriendVizComponent {
  @Input() data: any;
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockFriendFormComponent,
        MockFriendVizComponent
      ],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'friends-visualizer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('friends-visualizer');
  });

});
