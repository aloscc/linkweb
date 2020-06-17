import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../core/models/user';
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

  postUser(user: User): Observable<any> {
    return this.http.post(`${baseUrl}/users`, user, httpOptions);
  }

  udpateUser(user: Partial<User>): Observable<any> {
    return this.http.patch(`${baseUrl}/users`, user, httpOptions);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/users/${userId}`);
  }
}
