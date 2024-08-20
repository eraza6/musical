import { createReducer, on } from '@ngrx/store';
import { HomeState } from './home.state';
import { loadConcertsSuccess, loadGenresSuccess } from './home.actions';

const initialState: HomeState = {
  genres: [],
  concerts: [],
};

export const homeReducer = createReducer(
  initialState,
  on(loadGenresSuccess, (state, { genres }) => ({ ...state, genres })),
  on(loadConcertsSuccess, (state, { concerts }) => ({ ...state, concerts }))
);
