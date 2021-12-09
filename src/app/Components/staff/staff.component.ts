import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExampleService } from 'src/app/Services/example.service';

/**
 * @title Basic use of `<table app-staff>`
 */

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  dataSourceStaff = new MatTableDataSource();
  
  displayedColumns = ["name", "patronus", "dateOfBirth", "image"]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private example: ExampleService, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.getfromJson();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceStaff.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceStaff.paginator) {
      this.dataSourceStaff.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    this.dataSourceStaff.paginator = this.paginator;
    this.dataSourceStaff.sort = this.sort;
  }


/* Metodo que se encarga de realizar la llamada al servicio
*
*/
  getfromJson(){

    this.example.getstaff().subscribe(
      (data) => 
      { this.dataSourceStaff.data = data, // lleno el dataSource de la tabla en la llamada para su llenado
      console.log(this.dataSourceStaff),
      
    // Muestro el mensaje de OK
    this.snackBar.open('Lista de Profesores cargada correctamente!', 'Aceptar', { duration: 5000, panelClass:['green-snackbar']});
     }
      );

  }


}