import { Injectable } from '@angular/core';
import { cat_url } from './../shared/url';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getFact() {
    return this.http.get<any>(cat_url);
  }
}
