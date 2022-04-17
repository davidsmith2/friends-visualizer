import { Friend } from "./friends.reducer";

import { createAction, props } from '@ngrx/store';

export const saveFriend = createAction(
  '[Friends] Save Friend',
  props<Friend>()
);
