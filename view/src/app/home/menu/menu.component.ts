import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  private currentRoute;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.listenEvents();
  }

  listenEvents() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
        }
      });
  }

}
