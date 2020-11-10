import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FlowsService} from '../../../shared/services/flows.service';
import {Edge, Node} from '@swimlane/ngx-graph';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  constructor(private route: ActivatedRoute, private flowsService: FlowsService) {
  }

  selectedFlow: any;
  loading: boolean;
  links: Edge[];
  nodes: Node[];

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {

      this.flowsService.getFlowById$(params.id).subscribe(data => {
        this.selectedFlow = data;
        this.loading = false;
        this.setLinksAndNodes();
      });
    });
  }

  setLinksAndNodes(): void {
    this.nodes = [];
    this.links = [];
    // this.nodes = this.selectedFlow.steps.map(step => ({id: step.name, label: step.name}));
    for (const step of this.selectedFlow.steps) {
      this.nodes.push({id: step.name, label: step.name});
      console.log(step.next);
      for (const next of step.next) {
        const linkObject: Edge = {
          id: `${step.name}-to-${next}`,
          source: step.name,
          target: next,
          label: `From ${step.name} to ${next}`
        };
        this.links.push(linkObject);
      }
    }
  }

}
