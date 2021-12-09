import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private _urlGet : string = "http://hp-api.herokuapp.com/api/characters/house/"
  private _urlgetStaff : string = "http://hp-api.herokuapp.com/api/characters/staff"
  private _urlgetStudents : string = "http://hp-api.herokuapp.com/api/characters/students"
  constructor( private http : HttpClient) { }

 /* Metodo edel servicio el cual se encarga de invocar a la Api, especificamente de la lista de 
  *  personajes
  *
  * @param house - Obtiene como parametro la casa de la cual filtrara los personajes para ser mostradps
  *
  */
    getCoordinates( house : string ){

      console.log(house)

      return this.http.get<any>(this._urlGet + house);

    }


 /* Metodo edel servicio el cual se encarga de invocar a la Api, especificamente de la lista de 
  *  staff
  *
  */
    getstaff(){
      
      return this.http.get<any>(this._urlgetStaff)

    }

    getStudents() {

      return this.http.get<any>(this._urlgetStudents)


    }
    


  
}
