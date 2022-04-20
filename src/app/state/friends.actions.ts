import { Friend } from "./friends.reducer";

import { createAction, props } from '@ngrx/store';

export enum FriendsActionType {
  SAVE_FRIEND = '[Friends] Save Friend'
};

export const saveFriend = createAction(
  FriendsActionType.SAVE_FRIEND,
  props<Friend>()
);
