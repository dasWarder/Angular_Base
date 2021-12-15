import {Component} from '@angular/core';
import {Card} from "./interfaces/icard.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggle: boolean = true;

  cards: Array<Card> = [
    {title: 'Card 1', text: 'This is card 1'},
    {title: 'Card 2', text: 'This is card 2'},
    {title: 'Card 3', text: 'This is card 3'}
  ];

  toggleCards = () => {
    this.toggle = !this.toggle;
  }

}
