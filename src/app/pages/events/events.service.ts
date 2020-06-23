import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CreateEventModel, UpdateEventModel} from './models';

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<any> {
    const serviceUrl = `${baseUrl}/events`;
    return this.httpClient.get(serviceUrl);
  }

  getEvent(eventId: number): Observable<any> {
    const serviceUrl = `${baseUrl}/events/${eventId}`;
    return this.httpClient.get(serviceUrl);
  }

  createEvent(createEvent: CreateEventModel): Observable<any> {
    const serviceUrl = `${baseUrl}/events`;
    return this.httpClient.post(serviceUrl, createEvent, httpOptions);
  }

  updateEvent(
    eventId: number,
    event: Partial<UpdateEventModel>,
  ): Observable<any> {
    const serviceUrl = `${baseUrl}/events/${eventId}`;
    return this.httpClient.patch(serviceUrl, event, httpOptions);
  }

  deleteEvent(eventId: number): Observable<any> {
    const serviceUrl = `${baseUrl}/events/${eventId}`;
    return this.httpClient.delete(serviceUrl);
  }
}
