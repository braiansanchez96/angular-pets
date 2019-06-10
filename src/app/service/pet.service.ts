import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../shared/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private GET_PETS_URL = "/api/get-pets";

  private ADD_PET_URL = "/api/add-pet";

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get<Pet[]>(this.GET_PETS_URL);
  }

  addPet(body) {
    return this.http.post<any>(this.ADD_PET_URL, body);
  }
}
