import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Central {
  id: string;
  barrio: string;
  estado: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  centrales: Central[];
  estados: string[] = ['Nunca se conectó', 'Conectado', 'Desconectado', 'Pérdida de Conexión'];
  constructor(private http: HttpClient) {
    this.http.get<Central[]>('api/centrales').subscribe(res => {
      this.centrales = res;
    });
  }

  ngOnInit() {
  }

}
