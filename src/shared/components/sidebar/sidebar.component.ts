import {Component, OnInit} from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {FlowsService} from '../../services/flows.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private flowsService:FlowsService) {
  }

  items: MegaMenuItem[];
  flows: any[]


  ngOnInit(): void {
    this.flowsService.setFlows(); // Get data and store it on service for the entire app

    this.flowsService.getFlows$().subscribe(data => {
      this.flows = data;

    });

    this.items = [
      {
        label: 'Flows', icon: 'pi pi-fw pi-sitemap',
        items: [
          [
            {
              label: 'Flows-list',
              items: [{label: 'Go to flows-list', routerLink: ['flows']}]
            },
            {
              label: 'My flows',
              items: [{label: 'Flow 1', routerLink:['link-here']}, {label: 'Flow 2'}, {label: 'Flow 3'}]
            }
          ],
        ]
      },
      {
        label: 'Processors', icon: 'pi pi-fw pi-sliders-v',
        items: [
          [
            {
              label: 'Processors-list',
              items: [{label: 'Go to flows-list', routerLink: ['processors']}]
            },
            {
              label: 'My flows',
              items: [{label: 'Flow 1', routerLink:['link-here']}, {label: 'Flow 2'}, {label: 'Flow 3'}]
            }
          ],
        ]
      },
      {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
            },
            {
              label: 'User 4',
              items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
            },
            {
              label: 'User 6',
              items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
            }
          ]
        ]
      }
    ];
  }

}
