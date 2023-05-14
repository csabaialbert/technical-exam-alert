import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {

  vehicleService = inject(VehicleService);

  vehicleList$ = this.vehicleService.getAll();
  today = new Date();
  currentTimestamp$ = this.today.getTime();



 sort()
 {
  this.vehicleList$ = this.vehicleList$.pipe(map((vehicle) =>{ vehicle.sort((a , b ) => {
    return a.expiration_date < b.expiration_date ? -1 : 1;
  });
  return vehicle;
}))
 }
 a$ = this.sort();
  


  onRemoveVehicle(vehicle:Vehicle): void {
    if(!confirm('Are you sure you want to remove this vehicle?')) {
      return;
    }
    else{
    this.vehicleService.delete(vehicle.id).subscribe(
      () => this.vehicleList$ = this.vehicleService.getAll()
      );
  }
  }
}
