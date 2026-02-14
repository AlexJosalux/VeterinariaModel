import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { respuestaApi } from '../models/pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PetService {

  private http=inject(HttpClient);
  private API_PET='https://www.mockdog.dev/api/dogs';

  getPets():Observable<respuestaApi>{
    return this.http.get<respuestaApi>(this.API_PET);
  }
}
