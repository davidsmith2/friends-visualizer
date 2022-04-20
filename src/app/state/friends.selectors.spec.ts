import { EntityState } from '@ngrx/entity';
import { Friend } from './friends.reducer';
import {selectFriendEntities } from './friends.selectors';

describe('FriendsSelectors', () => {
    it('should select friend entities', () => {
        const initialState: EntityState<Friend> = {
            ids: [1],
            entities: {
                1: {
                    id: 1,
                    name: 'David',
                    age: 21,
                    weight: 150,
                    friends: []
                }
            }
        };
        const friendEntities: Array<Friend> = selectFriendEntities.projector(initialState);
        expect(friendEntities.length).toEqual(1);
    });

});