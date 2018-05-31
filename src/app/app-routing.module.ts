import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { AdminComponent } from './admin/admin.component';

// Defino todas las direcciones de los componentes
const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'acerca',
    component: AcercaComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin',
    component: AdminComponent,
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
