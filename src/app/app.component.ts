import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  data = 50000;
  changeData() {
    this.data =  Math.floor(Math.random() * (10000));
  }
}
