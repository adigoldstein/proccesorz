import {Component, OnInit} from '@angular/core';
import {FlowsService} from '../../../shared/services/flows.service';
import {ActivatedRoute, Router,} from '@angular/router';

@Component({
  selector: 'app-flows-list',
  templateUrl: './flows-list.component.html',
  styleUrls: ['./flows-list.component.scss']
})
export class FlowsListComponent implements OnInit {

  constructor(private flowsService: FlowsService,
              private router: Router) {
  }

  flows: any[];
  loading: boolean;

  ngOnInit(): void {
    this.loading = true;
    this.getData();

  }

  getData(): void {
    this.flowsService.getFlows$().subscribe(data => {
      this.flows = data;
      if (data) {
        this.loading = false;
      }
    });
  }


  onRowClick(flow): void {
    this.router.navigate(['flows', flow.id]);
  }
}
