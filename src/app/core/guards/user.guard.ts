import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncdecService } from '../services/common-services/encdec.service';


@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
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
                   return true;
                }
                this.router.navigate(['/auth']);
                return false;
            }
            else{
                this.router.navigate(['/auth']);
                return false;
            }
            
          
        }
        else{
           
            this.router.navigate(['/auth']);
            return false;
        }

        
       
    }
}