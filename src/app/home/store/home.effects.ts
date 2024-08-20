import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../services/home.service';
import {
  loadConcerts,
  loadConcertsSuccess,
  loadGenres,
  loadGenresSuccess,
} from './home.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class HomeEffect {
  actions$ = inject(Actions);
  homeService = inject(HomeService);

  loadGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGenres),
      mergeMap(() =>
        this.homeService
          .getData()
          .pipe(
            map((response) => loadGenresSuccess({ genres: response.genres }))
          )
      )
    )
  );

  loadConcerts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadConcerts),
      mergeMap(() =>
        this.homeService
          .getData()
          .pipe(
            map((response) =>
              loadConcertsSuccess({ concerts: response.concerts })
            )
          )
      )
    )
  );
}
