import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [

      {
        label: 'Hello user',
        icon: 'pi pi-fw pi-users',
        items: [
          {label: 'Logout', icon: 'pi pi-fw pi-sign-out', command: () => this.onLogout()},
        ]
      }
    ];
  }

  onLogout(): void {
    alert('Loged out');
  }
}




