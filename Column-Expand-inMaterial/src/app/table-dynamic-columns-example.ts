import { Component } from "@angular/core";

export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}

const ELEMENT_DATA: any[] = [
  {
    "2011": 10000,
    "2012": 12000,
    "2013": 13000,
    "2014": 16000,
    name: "A",
    ps: 2000
  },
  {
    "2011": 0,
    "2012": 12000,
    "2013": 13000,
    "2014": 16000,
    name: "B",
    ps: 3000
  },
  { "2011": 0, "2012": 0, "2013": 12000, "2014": 15000, name: "C", ps: 4000 },
  {
    "2011": 5000,
    "2012": 6000,
    "2013": 7000,
    "2014": 9000,
    name: "D",
    ps: 12000
  }
];

/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: "table-dynamic-columns-example",
  styleUrls: ["table-dynamic-columns-example.css"],
  templateUrl: "table-dynamic-columns-example.html"
})
export class TableDynamicColumnsExample {
  displayedColumns: string[] = ["name", "2011", "2012", "2013", "2014"];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  isExpnd = false;
  selectedColumn: any;

  addColumn() {
    this.columnsToDisplay.push("2011");
  }

  exp(col: any, indx: any) {
    console.log("COLDETAILS", col);
    console.log("COLDETAILS", indx);
    if (indx > 0) {
      if (this.selectedColumn == col) {
        this.selectedColumn = null;
      } else {
        this.selectedColumn = col;
      }
    }
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
