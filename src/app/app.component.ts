import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveFriend } from './state/friends.actions';
import { Friend } from './state/friends.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secureworks-coding-challenge';

  constructor(private store: Store<any>) { }

  saveFriend(friend: Friend) {
    this.store.dispatch(saveFriend(friend));
  }
}
