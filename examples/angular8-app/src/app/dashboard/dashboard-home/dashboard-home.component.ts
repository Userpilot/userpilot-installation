import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title
    ) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('Userpilot Angular 8 - Dashboard');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
}
