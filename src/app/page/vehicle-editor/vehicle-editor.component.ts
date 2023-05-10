import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { VehicleService } from 'src/app/service/vehicle.service';
import { VehicleListComponent } from 'src/app/common/vehicle-list/vehicle-list.component';
import { Vehicle } from 'src/app/model/vehicle';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-editor',
  templateUrl: './vehicle-editor.component.html',
  styleUrls: ['./vehicle-editor.component.scss']
})
export class VehicleEditorComponent {


  ar: ActivatedRoute = inject(ActivatedRoute);

  router: Router = inject(Router);

  vehicleService = inject(VehicleService);


    vehicle$ = this.ar.params.pipe(switchMap(params => this.vehicleService.get(params['id'])),
    map( vehicle => {
      vehicle.date = this.formatDate(vehicle.expiration_date);
      return vehicle;
    })
    );

    formatDate(expiration_date: number): string {
      const date = new Date(expiration_date*1);
      const year = date.getFullYear();
      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      const day = date.getDate() < 10 ? '0' + date.getDate()  : date.getDate() ;
      return `${year}-${month}-${day}`;
    }

  onUpdate(vehicle: Vehicle): void{
    vehicle.expiration_date = new Date(vehicle.date || 0).getTime();
    delete vehicle.date;
    this.vehicleService.update(vehicle).subscribe(
      () => this.router.navigate(['/list'])
    );
  }
  


}
