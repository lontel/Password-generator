import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password = '';
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  passLength = 0;

  onChangeLetters() {
    this.includesLetters = !this.includesLetters
  }

  onChangeNumber() {
    this.includesNumbers = !this.includesNumbers
  }

  onChangeSymbol() {
    this.includesSymbols = !this.includesSymbols
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)){
      this.passLength = parsedValue
    }
  }

    handleButton() {

    let validChars = ''

    const validLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ'
    const validNumbers = '0123456789'
    const validSymbols = '±!@#$%^&*()'

    if(this.includesLetters) {
      validChars += validLetters
    }

    if(this.includesNumbers) {
      validChars += validNumbers
    }

    if(this.includesSymbols) {
      validChars += validSymbols
    }

    let generatedPass = ''
    for (let i = 0; i < this.passLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPass += validChars[index]
    }

    this.password = generatedPass
  }
}
