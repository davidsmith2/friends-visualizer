import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectFriendEntities, selectVizData, VizData } from './state/friends.selectors';
import { saveFriend } from './state/friends.actions';
import { Friend } from './state/friends.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friends-visualizer';
  friends$: Observable<Array<Friend>> = this.store.pipe(select(selectFriendEntities));
  vizData$: Observable<VizData> = this.store.pipe(select(selectVizData));

  constructor(private store: Store<any>) { }

  saveFriend(friend: Friend) {
    this.store.dispatch(saveFriend(friend));
  }
}
