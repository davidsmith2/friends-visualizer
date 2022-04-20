import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectFriendEntities } from './state/friends.selectors';
import { saveFriend } from './state/friends.actions';
import { Friend } from './state/friends.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secureworks-coding-challenge';
  friends$: Observable<any> = this.store.pipe(select(selectFriendEntities));
  vizData$: Observable<any> = this.friends$.pipe(
    map((friends: Array<Friend>) => {
      const nodes: Array<Partial<Friend>> = friends.map((friend: Friend) => {
        return {
          id: friend.id,
          name: friend.name
        };
      });
      const links: Array<{source: number, target: number}> = [];
      friends.forEach((source: Friend) => {
        if (source.friends) {
          source.friends.forEach((target: number) => {
            links.push({
              source: source.id,
              target: target
            });
          });
        }
      });
      return {nodes, links};
    })
  );

  constructor(private store: Store<any>) { }

  saveFriend(friend: Friend) {
    this.store.dispatch(saveFriend(friend));
  }
}
