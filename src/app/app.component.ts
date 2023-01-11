import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toSend: string = 'frfr';
  newValue = [];
  sendName(event) {
    //console.log(event);
    this.toSend = event;
  }
  dispalyChild(event) {
    console.log('--', event);
    this.newValue = this.newValue === undefined ? [] : event;
  }
}
