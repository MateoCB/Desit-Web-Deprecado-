import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { AdminComponent } from './admin/admin.component';
import { CentralesComponent } from './admin/centrales/centrales.component';

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
];

const routesWithChilds: Routes = [
  {
    path: 'admin',
    children: [
      {path: 'centrales', component: CentralesComponent, runGuardsAndResolvers: 'always',},
    ],
    component: AdminComponent,
    runGuardsAndResolvers: 'always',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), RouterModule.forChild(routesWithChilds)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
