import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExampleService } from 'src/app/Services/example.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private example: ExampleService, private snackBar: MatSnackBar ) { }

  imagePath : any;
  _file : File | any; 

  url = "";
  Blob : any;

  yearOfBirth = "" ;

  dataSourceStudents = new MatTableDataSource();
  
  dataSourceSolicitudes = new MatTableDataSource();

  displayedColumns = ["name", "patronus", "dateOfBirth", "image"]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //-- Definicion de los FormGroup

  public edited = false;

  addForm = new FormGroup({

    name : new FormControl('', Validators.compose([ Validators.minLength(3), Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    species : new FormControl('', Validators.compose([Validators.required])),
    gender : new FormControl('',Validators.required),
    house : new FormControl('',Validators.required),
    dateOfBirth : new FormControl('', Validators.required),
    yearOfBirth : new FormControl('', Validators.required),
    wizard : new FormControl(true),
    ancestry : new FormControl('', Validators.compose([Validators.required])),
    eyeColour : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    hairColour : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    wand : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    patronus : new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    hogwartsStudent : new FormControl(true),
    hogwartsStaff : new FormControl(false),
    actor: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    alive : new FormControl(true),
    image : new FormControl('',Validators.required)

  });
//-------------------------------------------

 dataApi: Array<Object> ;
 _Aux:any = {};

  ngOnInit(): void {
  
    this.getfromJson();

    this.fillSolicitudes();

  }

  

  fillSolicitudes() {

    this.dataSourceSolicitudes = JSON.parse(localStorage.getItem('usuario'));
    
    console.log(this.dataSourceSolicitudes);

  }

  activateFormControl() {

    console.log("Pase por activateFormControl");
    this.dataSourceSolicitudes = JSON.parse(localStorage.getItem('usuario'));
    

    if( this.edited == true) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }

  }

  onselectFile(e){

    if(e.target.files){

      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e:any) => {
        this.url = e.target.result;
        this.Blob = reader.result;
        console.log(this.Blob)
      }



    }

  }

  
  addStudent() {
    
    let split = this.addForm.get('dateOfBirth').value.split("-");
    this.yearOfBirth = split[0];

    // Creo un Json con la informacion de la Solicitud.
    const newStudent:JSON = <JSON><unknown>{ 
    name : this.addForm.get('name').value,
    species : this.addForm.get('species').value,
    gender : this.addForm.get('gender').value,
    house : this.addForm.get('house').value,
    dateOfBirth : this.addForm.get('dateOfBirth').value,
    yearOfBirth : this.yearOfBirth,
    wizard : this.addForm.get('wizard').value,
    ancestry : this.addForm.get('ancestry').value,
    eyeColour : this.addForm.get('eyeColour').value,
    hairColour : this.addForm.get('hairColour').value,
    wand : this.addForm.get('wand').value,
    patronus : this.addForm.get('patronus').value,
    hogwartsStudent : this.addForm.get('hogwartsStudent').value,
    hogwartsStaff : this.addForm.get('hogwartsStaff').value,
    actor: this.addForm.get('actor').value,
    alive : this.addForm.get('alive').value,
    image : this.Blob

    }

    if(localStorage.getItem('usuario') == null){

    //   let userTestStatus: {}[] = [
    //     newStudent
    // ];  

       let userTestStatus: Array<Object> = [
         newStudent
     ];  

    
    for (let atributtes in userTestStatus) {

      localStorage.setItem('usuario', JSON.stringify(userTestStatus)); // Creo el LocalStorage
      this.dataApi.push(JSON.parse(JSON.stringify(userTestStatus[atributtes])));
    
    }
    } else {

      this._Aux = JSON.parse(localStorage.getItem('usuario')); // Aca tengo el viejo almacenado en el localStorage

      let userTestStatus: {}[] = this._Aux;

    userTestStatus.push(JSON.parse(JSON.stringify(newStudent))); // agrego el segundo
    localStorage.setItem('usuario', JSON.stringify(userTestStatus)); // Creo el LocalStorage con los anteriores.
    this.dataApi.push(JSON.parse(JSON.stringify(newStudent)));
    }

    // Muestro el mensaje de OK
    this.snackBar.open('Solicitud agregada correctamente!', 'Aceptar', { duration: 5000});

    //Oculto el FormGroup
    this.edited = false;

    // limpio los campos de cada formControl
    this.addForm.reset();
    this.url = '';
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceStudents.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceStudents.paginator) {
      this.dataSourceStudents.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSourceStudents.paginator = this.paginator;
    this.dataSourceStudents.sort = this.sort;
  }


/* Metodo que se encarga de realizar la llamada al servicio
*
*/
  getfromJson(){

    this.example.getStudents().subscribe(
      (data) => 
      { this.dataSourceStudents.data = data, // lleno el dataSource de la tabla en la llamada para su llenado
        this.dataApi = data,
        console.log(this.dataSourceStudents)
     }
      );

  }


  

}
