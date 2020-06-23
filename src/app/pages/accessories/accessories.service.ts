import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateAccessorie, UpdateAccessorie, ReadAccessorie} from './models/';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root',
})
export class AccessoriesService {
  constructor(private http: HttpClient) {}
  getAccessories(): Observable<any> {
    return this.http.get(`${baseUrl}/accessories`);
  }

  getAccessorie(accessorieId: number): Observable<any> {
    return this.http.get(`${baseUrl}/accessories/${accessorieId}`);
  }

  createAccessorie(accessorie: CreateAccessorie): Observable<any> {
    return this.http.post(`${baseUrl}/accessories/`, accessorie, httpOptions);
  }

  udpateAccessorie(
    accessorieId: number,
    accessorie: Partial<UpdateAccessorie>,
  ): Observable<any> {
    return this.http.patch(
      `${baseUrl}/accessories/${accessorieId}`,
      accessorie,
      httpOptions,
    );
  }

  deleteAccessorie(accessorieId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/accessories/${accessorieId}`);
  }
}
