import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.state';

const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectGenres = createSelector(
  selectHomeState,
  (state) => state.genres
);

export const selectConcerts = createSelector(
  selectHomeState,
  (state) => state.concerts
);
