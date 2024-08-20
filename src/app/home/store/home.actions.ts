import { createAction, props } from '@ngrx/store';
import { Genre } from '../../shared/models/genre.model';
import { Concert } from '../../shared/models/concert.model';

export const loadGenres = createAction('[Home] Load Genres');
export const loadGenresSuccess = createAction(
  '[Home] Load Genres Success',
  props<{ genres: Genre[] }>()
);

export const loadConcerts = createAction('[Home] Load Concerts');
export const loadConcertsSuccess = createAction(
  '[Home] Load Concerts Success',
  props<{ concerts: Concert[] }>()
);
