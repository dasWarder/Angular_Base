import {Component, Input} from '@angular/core';
import { Card } from '../interfaces/icard.type';

type ButtonText = 'show' | 'hide';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  card!: Card;

  isAvailable: boolean = false;

  title = 'My card title';
  text = 'My card text';
  imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  value: ButtonText = 'show';
  inputText: string = '';

  getUserInfo = (): string => {
    return `User name is Alex Petrov,he is 24 years old`;
  }

  showInfo = (): void => {
    this.isAvailable = !this.isAvailable;
    this.value = this.isAvailable ? 'hide' : 'show';
  }

  inputHandler = (value: string) => {
      this.inputText = value;
  }

  releaseText = () => {
    this.card.text = this.inputText;
  }
}
