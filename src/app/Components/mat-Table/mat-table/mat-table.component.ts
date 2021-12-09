import { ViewChild,Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ExampleService } from 'src/app/Services/example.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent {

  selected = 'option0';
  
  dataSource = new MatTableDataSource();
  
  displayedColumns = ["name", "patronus", "dateOfBirth", "image"]

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor( private example: ExampleService, private snackBar : MatSnackBar ) { }

  ngOnInit(): void {

    //this.getfromJson("gryffindor");

  }

  /* Metodo el cual se encarga de la paginacion y filtrado de la tabla
  *
  * @param event - Evento con la informacion para que se pueda realizar el filtrado y la 
  * paginacion de la tabla
  *
  */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


/* Metodo el cual se encarga de obtener la casa seleccionada por el usuario e invocar al metodo 
* que llama a la API
*
* @param change - Manejador del evento para obetner el valor el cual selecciono el usuario
*
*/
  getSelected(change: MatSelectChange) {

    console.log(change.value);

    this.getfromJson(change.value);

  }


/* Metodo que se encarga de realizar la llamada a la API
*
* @param house - Nombre de la casa la cual se quiere consultar.
*
*/
  getfromJson( house : string ){

    // Hago la llamada y se guarda todo en Objetos
    console.log(house);

    this.example.getCoordinates(house).subscribe(
      (data) => 
      { this.dataSource.data = data, // lleno el dataSource de la tabla en la llamada para su llenado
      console.log(this.dataSource),

    // Muestro el mensaje de OK
    this.snackBar.open('Lista de personajes de: ' + house +' cargadas!', 'Aceptar', { duration: 5000, panelClass:['green-snackbar']});
     }
      );

  }





}
