import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

/* Pipe que se encarga del calculo de la edad.
*
* @param value - Valor de la fecha de nacimiento que obtiene de la consulta del API
*
* @returns Si el personale tiene fecha de nacimiento devuelve la Edad sino un "-"
*/
  transform(value: string): unknown {

    let splitConvertFormat = value.split("-");
    let datFormat = new Date(splitConvertFormat[2] + '/' + splitConvertFormat[1] + '/' + splitConvertFormat[0]);
    
    if( splitConvertFormat[0].length <= 2) {
  
    const bdate = new Date(datFormat);
    
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    var _Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    if(Number.isNaN(_Age))
    {
      return "-";
    }
    else{

      return _Age;
    }


    }
    else{

      const usFormat = new Date(splitConvertFormat[0] + '/' + splitConvertFormat[1] + '/' + splitConvertFormat[2]);
      
      const timeDiff = Math.abs(Date.now() - usFormat.getTime() );
      var _Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

      if(Number.isNaN(_Age))
      {
        return "-";
      }
      else{

        return _Age;
      }


    }



  }

}
