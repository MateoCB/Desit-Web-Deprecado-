import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component'

// Defino todas las direcciones de los componentes
const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
