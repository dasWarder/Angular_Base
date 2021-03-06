import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  text: string = 'Some form text';
  inputText: string = '';
  textColor: string = '';

  releaseText = () : void => {
    this.text = this.inputText;
  }
}
