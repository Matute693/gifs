import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  @ViewChild('textBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private giftServices: GifsService) {}

  buscar() {
    const valueItem = this.txtBuscar.nativeElement.value;
    if( valueItem.trim().length === 0 ) {
      return;
    }
    this.giftServices.buscarGifs(valueItem);
    this.txtBuscar.nativeElement.value = '';
  }

}
