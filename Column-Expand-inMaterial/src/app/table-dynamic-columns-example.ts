import { Component, OnInit } from "@angular/core";



const ELEMENT_DATA: any[] = [
  {
    name: 'Hydrogen', 
    2010: {fs:1400, ps:1000, apr1:200, apr2:200, mon1:'Jan', mon2:'Jun'}, 
    2011:{ fs:1700, ps:1000, apr1:500, apr2:200, mon1:'Jan', mon2:'Jun'}, 
    2012:{fs:2200, ps:1700, apr1:400, apr2:100, mon1:'Jan', mon2:'Jun'},
    dept:'Radio Active'
  },
  {
    name: 'Carbon',
    2010: {fs:0, ps:0, apr1:0, apr2:0, mon1:'', mon2:''}, 
    2011:{fs:1550,ps:1100, apr1:200, apr2:250, mon1:'Jan', mon2:'Jun'}, 
    2012:{fs:2050, ps:1550, apr1:300, apr2:200, mon1:'Jan', mon2:'Jun'},
    dept:'Radio Inactive'

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
export class TableDynamicColumnsExample implements OnInit{
  displayedColumns: string[] = ['name','dept', '2010', '2011', '2012'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  /* You can make it dynamic column for inner Table applying loop on object 2010, 2011..... and so on  and assign to it*/
  expndDisplayedColumns:string[] = ['PS', 'APR1', 'MON1', 'APR2', 'MON2', 'FS'];
  data: any[] = ELEMENT_DATA;
  selectedColumn: any;

  ngOnInit() {
    console.log(this.columnsToDisplay)
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
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

  exp(col: any, indx: any) {
    console.log("COLDETAILS", col);
    console.log("COLDETAILS Indx", indx);
    if (indx > 1) {
      if (this.selectedColumn == col) {
        this.selectedColumn = null;
      } else {
        this.selectedColumn = col;
      }
    }
  }
}