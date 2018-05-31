import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

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

  private connection: any;
  centrales: Central[];
  estados: string[] = ['Nunca se conectó', 'Conectado', 'Desconectado', 'Pérdida de Conexión'];
  constructor(private http: HttpClient) {
    /*this.http.get<Central[]>('api/centrales').subscribe(res => {
      this.centrales = res;
    });*/
    this.centrales = [{"id":"SR-A01","barrio":"Alta Cordoba","estado":2},{"id":"SR-A02","barrio":"Alta Cordoba","estado":2},{"id":"SR-A08","barrio":"Los Paraísos","estado":2}];
  }

  ngOnInit() {

    // Creo la conexión y conecto al admin...
    this.connection = new WebSocketManager("ws://192.168.1.10:5000/messages");
    this.connection.onConnected = (id) => {
      this.connection.invoke('Handshake', 'int', 69, 'string', 'franco', 'string', 'asdasd', (res, err) => {
        if (err != null || res == null) return;

        var ress: boolean = res;
        if (ress) {
          console.log("Autenticado!!!!");
        }
      })
      console.log(this.connection.id);
    };

    this.connection.onDisconnected = () => {
      // TODO: pongo algo acá?
    };

    this.connection.methods.ChangeCentralState = (num, centralId, estado) => {
      for(var i = 0; i < this.centrales.length; i++) {
        if (this.centrales[i].id == centralId) {
          this.centrales[i].estado = estado;
          break;
        }
      }
    };

    this.connection.connect();
  }

}
