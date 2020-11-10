import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowsService {

  constructor(private http: HttpClient) {
    this.flows = new BehaviorSubject<any>(null);
    this.selectedFlow = new BehaviorSubject<any>(null);
  }

  flows: BehaviorSubject<any>;
  selectedFlow: BehaviorSubject<any>;


  setFlows(): any {
    this.http.get('assets/flows.json').subscribe(data => {
      this.flows.next(data);
    });
  }

  getFlows$(): any {
    return this.flows.asObservable();
  }

  getFlowById$(id: string): any {
    if (this.flows.getValue()) {
      this.selectedFlow.next(this.flows.getValue().filter(f => f.id === id)[0]);
      return this.selectedFlow.asObservable();
    }
  }
}
