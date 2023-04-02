import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './user.reducer';

// export const selectUserReducer = (state: RootState): UserState =>
//   state.user.currentUser;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
