import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as crypto from 'crypto-js';
// npm install @types/crypto-js

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  constructor() { }

  encrypt(value : string) : string{
    return crypto.AES.encrypt(value, environment.SECREAT.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return crypto.AES.decrypt(textToDecrypt, environment.SECREAT.trim()).toString(crypto.enc.Utf8);
  }
}
