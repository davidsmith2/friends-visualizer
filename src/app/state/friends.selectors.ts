import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';
import { Friend } from './friends.reducer';

export type VizData = {
    nodes: Array<Partial<Friend>>;
    links: Array<{source: number, target: number}>;
}

export const selectFriendState = createFeatureSelector<fromFriends.State>('friends');

export const selectFriendEntities: MemoizedSelector<object, Array<Friend>> = createSelector(
    selectFriendState,
    fromFriends.adapter.getSelectors().selectAll
);

export const selectVizData: MemoizedSelector<object, VizData> = createSelector(
    selectFriendEntities,
    (friends: Array<Friend>) => {
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
    }
);