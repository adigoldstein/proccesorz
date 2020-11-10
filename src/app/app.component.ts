import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }


  items: MenuItem[];

  ngOnInit(): void {




    this.items = [
      {label: 'Blah blah'},
      {label: 'Blue'},
      {label: 'And link', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
    ];
  }

  showSidebar(): boolean {
    const url = this.router.url;
    return !(url === '/sign-up' || url === '/log-in');
  }


}
