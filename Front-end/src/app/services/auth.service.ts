import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/product/list']);
      return false;
    } 
    return true;
  }
}
