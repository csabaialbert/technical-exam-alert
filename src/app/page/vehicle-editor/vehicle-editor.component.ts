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
      return vehicle;
    })
    );

  onUpdate(vehicle: Vehicle): void{
    this.vehicleService.update(vehicle).subscribe(
      () => this.router.navigate(['/admin'])
    );
  }


}
