import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmi-calculator';

  weight!: number;
  height!: number;
  bmi!: number;
  bmiDesc!: string;

  onKeyHeight(event: any) {
    this.height = event.target.value / 39.37;
  }

  onKeyWeight(event: any) {
    this.weight = event.target.value / 2.205;
  }

  calculateBMI() {
    this.bmi = this.weight / (this.height * this.height);
    this.bmi = Math.round(this.bmi * 100) / 100;
    if (this.bmi < 18.5) {
      this.bmiDesc = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.bmiDesc = 'Normal weight';
    } else if (this.bmi >= 25 && this.bmi <= 29.9) {
      this.bmiDesc = 'Overweight';
    } else if (this.bmi >= 30) {
      this.bmiDesc = 'Obese';
    } else {
      this.bmiDesc = 'Error';
    }
  }
}
