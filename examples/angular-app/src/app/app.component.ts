import { Component } from '@angular/core';
import { AuthService } from './pages/auth/services';
import { Observable } from 'rxjs';
import {User} from './pages/auth/models';
import {Userpilot} from 'userpilot';




// Initialize Userpilot
console.info('[Userpilot] Initialize');
console.warn('[Userpilot] Replace {AppToken} with your AppToken');
Userpilot.initialize('{AppToken}');



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private userService: AuthService
  ) {
    const token = localStorage.getItem('token');
    if(token){
      console.info('[Userpilot] Userpilot.identify()');
      console.warn('[Userpilot] Replace {userId} with the logged in user identifier');
      this.userService.getUser().subscribe((user) => {
        if(user.id){
          Userpilot.identify(user.id,{
            name: user.name,
            email: 'john@site-domain.com',
            created_at: new Date(),
          });
        }
        
      });
    }
    
  }
}
