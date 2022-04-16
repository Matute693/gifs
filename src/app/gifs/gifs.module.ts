import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { GifsPAgeComponent } from './gifs-page/gifs-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    GifsPAgeComponent,
    BuscadorComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GifsPAgeComponent, BuscadorComponent, ResultadosComponent]
})
export class GifsModule { }
