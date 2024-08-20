import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { Concert } from '../shared/models/concert.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable, combineLatest, map, startWith, switchMap } from 'rxjs';
import { SearchBarService } from './services/search-bar.service';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadGenres, loadConcerts } from './store/home.actions';
import { selectConcerts, selectGenres } from './store/home.selectors';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  store = inject(Store);

  genres$ = this.store.select(selectGenres);

  initialConcerts$ = this.store.select(selectConcerts);
  filteredConcerts$ = new Observable<Concert[]>();

  searchBarService = inject(SearchBarService);

  currentGenre = new FormControl(0);

  layoutService = inject(LayoutService);

  ngOnInit() {
    this.store.dispatch(loadGenres());
    this.store.dispatch(loadConcerts());

    const filterByGenre$ = this.currentGenre.valueChanges.pipe(
      startWith(0),
      switchMap((genreId) =>
        this.initialConcerts$.pipe(
          map((concerts) =>
            genreId === 0
              ? concerts
              : concerts.filter((concert) => concert.genreId === genreId)
          )
        )
      )
    );

    this.filteredConcerts$ = combineLatest([
      filterByGenre$,
      this.searchBarService.currentValue$,
    ]).pipe(
      map(([concerts, searchValue]) =>
        concerts.filter((concert) =>
          searchValue === ''
            ? true
            : concert.description
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        )
      )
    );
  }
}
