import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { AdminComponent } from './admin/admin.component';

// Defino todas las direcciones de los componentes
const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
