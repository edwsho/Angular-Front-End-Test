import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExampleService } from 'src/app/Services/example.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  activated : Boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', activated:true},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', activated:false},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', activated:false},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', activated:true},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', activated:false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', activated:true},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', activated:true},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', activated: true},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', activated:false},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', activated:true},
];



@Component({
  selector: 'app-page-not-founf',
  templateUrl: './page-not-founf.component.html',
  styleUrls: ['./page-not-founf.component.css']
})
export class PageNotFounfComponent implements OnInit { 


  dataSource = new MatTableDataSource();
  //displayedColumns = ["fecha", "hora", "carretera", "pk", "probabilidad", "Acciones"];

  displayedColumns = ["latitude", "longitude"]
  
  //displayedColumns = ['position', 'name', 'weight', 'symbol', 'activated'];
  //dataSource = ELEMENT_DATA;



  constructor() { }

  ngOnInit(): void {


  }
}
