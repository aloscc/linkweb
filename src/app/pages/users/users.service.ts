import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateUserModel, UpdateUserModel, ReadUserModel} from './models/';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${baseUrl}/users`);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${baseUrl}/users/${userId}`);
  }

  createUser(user: CreateUserModel): Observable<any> {
    return this.http.post(`${baseUrl}/auth/signup`, user, httpOptions);
  }

  udpateUser(userId: number, user: Partial<UpdateUserModel>): Observable<any> {
    return this.http.patch(`${baseUrl}/users/${userId}`, user, httpOptions);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/users/${userId}`);
  }

  fileUpload(obj: any): Observable<any> {
    return this.http.post(`${baseUrl}/file-upload`, obj, httpOptions);
  }
}
