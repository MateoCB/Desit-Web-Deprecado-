import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get("api/values").subscribe(res => {
        console.log(res.toString());
    });
  }

  ngOnInit() {
  }

}
