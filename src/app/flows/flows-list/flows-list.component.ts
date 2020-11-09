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
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  flows: any[];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // TODO: get it from the server
    console.log('get data');
    this.flowsService.getFlows()
      .subscribe(data => {
        console.log(data);
        this.flows = data;
      });
  }


  onRowClick(flow) {
    console.log(flow);
    this.router.navigate(['flows',flow.id], );

  }
}
