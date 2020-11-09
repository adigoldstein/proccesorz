import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  showSidebar(): boolean {
    const url = this.router.url;
    return !(url === '/sign-up' || url === '/log-in');
  }
}
