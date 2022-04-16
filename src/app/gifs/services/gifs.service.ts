import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string = 'ZNuxms7NuivKODh8n7dnN2BVwmfeDjr0';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial  : string[] = [];

  public resultados: Gif[] = [];

  constructor( private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  get historial() {
    return [...this._historial];
  }

  buscarGifs( query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10)
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query)

      // imprimo los parametros de postman
      console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
        .subscribe((resp: SearchGifsResponse ) => {
          this.resultados = resp.data
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        }) 
  }
    //Peticion fetch con JavaScript utilizo HttpClient para hacer las peticions http
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=ZNuxms7NuivKODh8n7dnN2BVwmfeDjr0&q=dragon ball z&limit=10')
    // .then( resp => {
    //   resp.json().then( data => console.log(data))
    // })

}
