import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  username = '';
  password: '';

  constructor() {
  }

  ngOnInit(): void {

  }

  onLogin(): void {
    console.log(this.username, this.password);
  }

}
