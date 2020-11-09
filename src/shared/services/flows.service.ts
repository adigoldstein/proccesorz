import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlowsService {

  constructor(private http: HttpClient) {
  }

  getFlows(): any {
    return this.http.get('assets/flows.json');
  }
}
