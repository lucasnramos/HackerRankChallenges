import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sortBy: string;
  sortByEvent(event: any) {
    console.log('Event received', event)
    this.sortBy = event.target.value;
  }
}
