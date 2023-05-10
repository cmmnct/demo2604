import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../services/card.service';
import { Observable } from 'rxjs';
import { Card } from "../models/card/card";


@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css']
})
export class MemorygameComponent implements OnInit {

  cardService = inject(CardService);
  cardArray$?: Observable<Card[]>
  cardArray:Card[]=[]

  constructor() { }

  ngOnInit(): void {
    this.cardArray$ = this.cardService.getCards$();
    this.cardService.getCards$().subscribe(cardData => this.cardArray = cardData);
  }

}
