import {Component, OnInit} from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  items: MegaMenuItem[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Flows', icon: 'pi pi-fw pi-sitemap',
        items: [
          [
            {
              label: 'Flows-list',
              items: [{label: 'Go to flows-list', routerLink: ['flows/flows-list']}]
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
      },

      {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Setting 2',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Setting 3',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      }
    ];
  }

}
