import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog(): Observable<any> {
    return this.http.get('https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events');
  }

  getMovieById(id: any): Observable<any> {
    const url = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/' + id + '/theaters';
    return this.http.get(url);

  }

}
