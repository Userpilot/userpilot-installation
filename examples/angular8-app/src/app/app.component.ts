import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show loading indicator
            console.log('Reload Route');

            console.log('@Call userpilot reload!');
        }

        if (event instanceof NavigationEnd) {
            // Hide loading indicator
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
    });

}

}
