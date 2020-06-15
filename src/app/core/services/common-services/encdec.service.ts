import { Injectable } from '@angular/core';
// import * as CryptoJS  from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncdecService {
  encPassword: string = "mediaapp";
  decPassword: string = "mediaapp";
  constructor() { }

  // encdec(data: string, conversion: string) {
  //   if (conversion == "encrypt") {
  //     return CryptoJS.AES.encrypt(data.trim(), this.encPassword.trim()).toString();
  //   }
  //   else {
  //     return CryptoJS.AES.decrypt(data.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);
  //   }
  // }


}
