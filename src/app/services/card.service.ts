import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from "./../models/card/card";



@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardData?:Card[]

  http = inject(HttpClient);

  constructor() { }

  getCards$():Observable<Card[]> {

    return this.http.get<Card[]>('/assets/cards.json');

  

  
  }


}
