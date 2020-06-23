import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Credentials} from '../interfaces/credentials.interface';
import {SignupModel} from '../models/signup.model';

const baseUrl = `${environment.baseUrl}/auth/`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post(baseUrl + 'signin', credentials, httpOptions);
  }

  register(signup: SignupModel): Observable<any> {
    return this.http.post(baseUrl + 'signup', signup, httpOptions);
  }
}
