import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: string[] = [];

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get historial() {
    return this.gifsService.historial;
  }

  buscar( item: string) {
   return this.gifsService.buscarGifs( item );
  }

}
