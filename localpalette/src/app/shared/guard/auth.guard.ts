import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public  authService : AuthService,
    public router: Router
  ){}
  /**
   * @author Abiel kidane 
   * @param next 
   * @param state 
   * @returns 
   */
  // om brukker ikke logget inn kan en ikke ha tilgang til 
  // bruker dash  hvis brukker ikke er logget inn  så skal 
  // de navigere til loginsiden  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLoggedIn !== true) {
        this.router.navigate(['/login'])
      }
      return true;
      
  }

  
}
