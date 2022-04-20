import { Action } from '@ngrx/store';
import {FriendsActionType, saveFriend} from './friends.actions';

describe('FriendsActions', () => {
    it('should create a save friend action', () => {
        const action: Action = saveFriend({
            id: 1,
            name: 'David',
            age: 21,
            weight: 150,
            friends: []
        });
        expect(action.type).toEqual(FriendsActionType.SAVE_FRIEND);
    });
});