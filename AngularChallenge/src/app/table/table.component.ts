import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  @Input() sortBy: string;
  constructor() {
    this.getDate(this.birthdays[0].birth);
  }

  ngOnChanges() {
    // call arrangeItems on form change
  }

  arrangeItems() {
    // sort the `birthdays` array accordingly
    if (this.sortBy === 'name') {
      // sort by name
    } else {
      // sort by birthday
    }
  }

  compareDates(a, b) {
    // boolean comparator for dates
  }

  compareNames(a: string, b: string): boolean {
    // boolean comparator for names
    return a < b;
  }

  getDate(str: string) {
    // convert the passed date into a human readbale form
    const date = new Date(str);
    const month = date.toLocaleString('default', { month: 'long' })
    const arr = str.split('/');
    return `${month} ${arr[1]} ${arr[2]}`;
  }
}
