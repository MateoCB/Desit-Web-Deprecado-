import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Central {
  id: string;
  barrio: string;
  estado: number;
}

interface HistorialCentral {
  fecha: string;
  estado: number;
}

@Component({
  selector: 'app-admin-centrales',
  templateUrl: './centrales.component.html',
  styleUrls: ['./centrales.component.scss']
})
export class CentralesComponent implements OnInit {

  // Para cualquier estado
  private connection: any;
  estadosComponente: string[] = ['Lista de Centrales', 'Ver Central'];
  estadoActualComponente: number = 0;


  // Para Estado: Ver todas
  centrales: Central[];
  estados: string[] = ['Nunca se conectó', 'Conectado', 'Desconectado', 'Pérdida de Conexión'];

  // Para Estado: Ver central específica
  centralIdSeleccionada: string;
  datosHistorial: HistorialCentral[];

  constructor(private http: HttpClient) {
    this.http.get<Central[]>('api/centrales').subscribe(res => {
      this.centrales = res;
    });
    // TODO: dejar el codigo comentado de arriba
    //this.centrales = [{"id":"SR-A01","barrio":"Alta Cordoba","estado":2},{"id":"SR-A02","barrio":"Alta Cordoba","estado":2},{"id":"SR-A08","barrio":"Los Paraísos","estado":2}];
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

  verCentrales() {
    this.estadoActualComponente = 0
  }

  /**
   * Visualiza una central en específico
   */
  verCentral(id: string) {
    this.estadoActualComponente = 1;
    this.centralIdSeleccionada = id;

    this.http.get<HistorialCentral[]>('api/centrales/' + id).subscribe(res => {
      this.datosHistorial = res;
    });
  }

}
