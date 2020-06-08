import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // if (localStorage.getItem("userDetails"))
        // {
        //     let userDetails =JSON.parse(localStorage.getItem("userDetails"));
        //     if(userDetails.user_type){
        //         if(userDetails.user_type ==="USER"){
        //            return true;
        //         }
        //         this.router.navigate(['/auth']);
        //         return false;
        //     }
        //     else{
        //         this.router.navigate(['/auth']);
        //         return false;
        //     }
            
          
        // }
        // else{
           
        //     this.router.navigate(['/auth']);
        //     return false;
        // }

        return true;
       
    }
}