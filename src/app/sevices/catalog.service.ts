import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../models/catalog.model';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events');
  }

  getMovieById(id: string): Observable<Film> {
    const url = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/' + id + '/theaters';
    return this.http.get<Film>(url);

  }

}
