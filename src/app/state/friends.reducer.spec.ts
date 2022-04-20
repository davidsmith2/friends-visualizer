import { saveFriend } from './friends.actions';
import {Friend, friendsReducer, State} from './friends.reducer';

describe('FriendsReducer', () => {
    it('should save a friend', () => {
        const friend: Friend = {
            id: 1,
            name: 'David',
            age: 21,
            weight: 150,
            friends: []
        };
        const state: State = friendsReducer({
            ids: [],
            entities: {}
        }, saveFriend(friend));
        expect(state.ids).toEqual([1]);
        expect(state.entities[1]).toBeDefined();
    });
});