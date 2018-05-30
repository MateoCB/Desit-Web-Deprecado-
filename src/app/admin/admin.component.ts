import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Central {
  Id: string;
  Barrio: string;
  Estado: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  centrales: Central[];
  constructor(private http: HttpClient) {
    this.centrales = [{Id: "asd", Barrio: "Alta Cba", Estado: 0}, {Id: "qqqqq", Barrio: "Alta qqqCba", Estado: 5}];
  }

  ngOnInit() {
  }

}
