import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  model: any;
  @Output() sortByEvent = new EventEmitter();
  constructor() {
    this.model = {
      sortBy: ""
    }
  }

  radioButtonClick(sortBy: string) {
    this.model.sortBy = sortBy;
    this.sortByEvent.emit({ sortBy: this.model.sortBy});
  }

  returnModelState() {
    //return the the model.sortBy vale
    return this.model.sortBy;
  }
}
