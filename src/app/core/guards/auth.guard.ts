import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncdecService } from '../services/common-services/encdec.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private encdecService:EncdecService) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem("userDetails"))
        {
            let userDetails =JSON.parse(this.encdecService.encdec(localStorage.getItem("userDetails"), "decrypt"));
            if(userDetails.user_type){
                if(userDetails.user_type ==="USER"){
                    this.router.navigate(['/menu/users']);
                }
                else if(userDetails ==="ADMIN"){

                }
                else{
                    return true;
                }
            }
            else{
                return true;
            }
            
          
        }
       return true;
    }
}



