import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  http: HttpClient = inject(HttpClient);

  apiUrl: string = environment.apiUrl;

  entityName: string = 'vehicle';

  constructor() { }

  getAll(): Observable<Vehicle[]> { 
    return this.http.get<Vehicle[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Vehicle> { 
    return this.http.get<Vehicle>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(vehicle: Vehicle): Observable<Vehicle> { 
    return this.http.post<Vehicle>
    (`${this.apiUrl}${this.entityName}`, 
    vehicle
    );
  }
  
  update(vehicle: Vehicle): Observable<Vehicle> { 
    return this.http.patch<Vehicle>
    (`${this.apiUrl}${this.entityName}/${vehicle.id}`, 
    vehicle
    );
  }

  delete(id: number): Observable<Vehicle> { 
    return this.http.delete<Vehicle>(`${this.apiUrl}${this.entityName}/${id}`);
  }

}
