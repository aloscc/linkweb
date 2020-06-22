import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProfileDto} from './dto/profile.dto';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<any> {
    return this.http.get(`${baseUrl}/users/${userId}`);
  }

  udpateUser(userId: number, user: Partial<ProfileDto>): Observable<any> {
    return this.http.patch(`${baseUrl}/users/${userId}`, user, httpOptions);
  }
}
