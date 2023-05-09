import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './page/alerts/alerts.component';
import { ListComponent } from './page/list/list.component';
import { VehicleEditorComponent } from './page/vehicle-editor/vehicle-editor.component';

const routes: Routes = [
  {
    path: '',
    component:AlertsComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list/vehicle/edit/:id',
    component: VehicleEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
