import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';

export const selectFriendState = createFeatureSelector<fromFriends.State>('friends');

export const selectFriendEntities = createSelector(
    selectFriendState,
    fromFriends.adapter.getSelectors().selectAll
);
