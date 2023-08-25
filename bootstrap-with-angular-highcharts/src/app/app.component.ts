import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isBasicTutorial: boolean = false;

  changePageStatus(): void {
    this.isBasicTutorial = !this.isBasicTutorial;
  }

}
