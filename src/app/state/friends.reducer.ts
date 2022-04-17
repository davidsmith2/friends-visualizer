import { createReducer, on } from "@ngrx/store";
import * as AppActions from './friends.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface Friend {
    id: number;
    name: string;
    friends: Array<number>;
    age: number;
    weight: number;
}

export interface State extends EntityState<Friend> { }

export function selectFriendId(friend: Friend): number {
    return friend.id;
}

export const adapter: EntityAdapter<Friend> = createEntityAdapter<Friend>({
    selectId: selectFriendId
});

export const friendsReducer = createReducer(
    adapter.getInitialState(),
    on(AppActions.saveFriend, (state, friend: Friend) => {
        return adapter.addOne(friend, state);
    })
);
