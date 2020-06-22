import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

const baseUrl = environment.baseUrl;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
    providedIn: 'root',
})
export class EventsService {

    constructor(private httpClient: HttpClient) {
    }

    getEvents(): Observable<any> {
        const serviceURL = `${baseUrl}/events`;
        return this.httpClient.get(serviceURL);
    }


}
