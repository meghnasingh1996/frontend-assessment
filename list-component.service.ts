import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListComponentService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/randomselection.php');
  }
}
