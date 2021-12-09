import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {


 /* Pipe que se encarga de mostrar realizar la validacion de la imagen proveniente del API
  *
  * @param value - Ruta Http de la imagen alojada en el API
  *
  * @returns Si el personale posee una imagen asociada la devuelve, en caso contrario devuelve una imagen
  * por defecto.
  */

  transform(value: string, ...args: unknown[]): unknown {
    
    console.log(value);

    if( value == "" )
    {
        return "/assets/Imagennodisponible.png";
    }
    else {
       
      return value;
    }
    
  }

}
