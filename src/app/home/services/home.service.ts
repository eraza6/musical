import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HomeApiResponse } from '../home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  private data$ = this.http
    .get<HomeApiResponse>(this.baseUrl + '/api/Home')
    .pipe(shareReplay());

  getData(): Observable<HomeApiResponse> {
    return this.data$;
  }
}
