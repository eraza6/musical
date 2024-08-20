import { Concert } from '../../shared/models/concert.model';
import { Genre } from '../../shared/models/genre.model';

export interface HomeState {
  genres: Genre[];
  concerts: Concert[];
}
