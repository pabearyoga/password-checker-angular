// password-checker.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password: string = '';
  firstSectionColor: string = 'gray';
  secondSectionColor: string = 'gray';
  thirdSectionColor: string = 'gray';

  checkPasswordStrength(): void {
    const passwordStrength = this.getStrength(this.password);

    if (this.password.length === 0) {
      this.setAllColors('gray');
    } else if (this.password.length < 8) {
      this.setAllColors('red');
    } else {
      switch (passwordStrength) {
        case 'easy':
          this.setAllColors('red', 'gray', 'gray');
          console.log('easy');
          break;
        case 'medium':
          this.setAllColors('yellow', 'yellow', 'gray');
          console.log('medium');
          break;
        case 'strong':
          this.setAllColors('green', 'green', 'green');
          console.log('strong');
          break;
        default:
          this.setAllColors('gray');
          break;
      }
    }
  }

  setAllColors(first: string, second: string = first, third: string = first): void {
    this.firstSectionColor = first;
    this.secondSectionColor = second;
    this.thirdSectionColor = third;
  }

  getStrength(password: string): string {
    const lettersDigitsSymbolsRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\W)/;
    const lettersDigitsRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    const lettersSymbolsRegex = /^(?=.*[a-zA-Z])(?=.*\W)/;
    const digitsSymbolsRegex = /^(?=.*[0-9])(?=.*\W)/;
    const onlyLettersDigitsSymbolsRegex = /^[a-zA-Z0-9\W]+$/;


    if (lettersDigitsSymbolsRegex.test(password)) {
      return 'strong';
    } else if (lettersDigitsRegex.test(password) || lettersSymbolsRegex.test(password) || digitsSymbolsRegex.test(password)) {
      return 'medium';
    } else if (onlyLettersDigitsSymbolsRegex.test(password)) {
      return 'easy';
    } else {
      return 'invalid';
    }
  }

}
