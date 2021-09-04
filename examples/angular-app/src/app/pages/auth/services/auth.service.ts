import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models';

import {Userpilot} from 'userpilot';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(): void {
    localStorage.setItem('token', 'token');

    console.info('[Userpilot] Userpilot.identify() after login');
    console.warn('[Userpilot] Replace {userId} with the logged in user identifier');
    this.getUser().subscribe((user) => {
      Userpilot.identify(user.id,{
        name: user.name,
        email: user.email,
        created_at: new Date(),
      });
    });
  }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John Doe',
      id: '123987',
      email: 'john@site-domain.com',
    });
  }
}
