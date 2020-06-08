import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(message:string, type :string, position:string, time:number){
    alertify.set('notifier','delay', time);
    alertify.set('notifier','position', position);
    if(type==="error"){    
      alertify.error(message);
    }
  }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {}
    });
  }

   success(message: string,position:string, time:number) {
    alertify.set('notifier','delay', time);
    alertify.set('notifier','position', position);
    alertify.success(message);
  }

  error(message: string,position:string, time:number) {
    alertify.set('notifier','delay', time);
    alertify.set('notifier','position', position);
    alertify.error(message);
  }

  warning(message: string,position:string, time:number) {
    alertify.set('notifier','delay', time);
    alertify.set('notifier','position', position);
    alertify.warning(message);
  }

  message(message: string,position:string, time:number) {
    alertify.set('notifier','delay', time);
    alertify.set('notifier','position', position);
    alertify.message(message);
  }
}
