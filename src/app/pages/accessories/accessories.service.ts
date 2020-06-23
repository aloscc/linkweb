import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateAccessory, UpdateAccessory, ReadAccessory} from './models/';
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

  getAccessory(accessoryId: number): Observable<any> {
    return this.http.get(`${baseUrl}/accessories/${accessoryId}`);
  }

  createAccessory(accessory: CreateAccessory): Observable<any> {
    return this.http.post(`${baseUrl}/accessories/`, accessory, httpOptions);
  }

  updateAccessory(
    accessoryId: number,
    accessory: Partial<UpdateAccessory>,
  ): Observable<any> {
    return this.http.patch(
      `${baseUrl}/accessories/${accessoryId}`,
      accessory,
      httpOptions,
    );
  }

  deleteAccessory(accessoryId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/accessories/${accessoryId}`);
  }
}
