import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Item } from './item';

@Injectable({ providedIn: 'root' })
export class ItemService {

  constructor(
    private http: HttpClient
  ) { }

  private itemsUrl = 'https://itunes.apple.com/';

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }

  searchItems(term: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemsUrl}search?term=${term}&media=music&limit=12`)
  }

  getItem(id: number): Observable<Item[]> {
    const url = `${this.itemsUrl}/lookup?id=${id}`;
    return this.http.get<Item[]>(url);
  }
}
