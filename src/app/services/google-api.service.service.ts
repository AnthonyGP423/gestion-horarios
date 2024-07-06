import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiServiceService {
  private clienteid = ''; // <- METE AQUI TU CLIENTE ID
  private redirectUrl = 'http://localhost:4200/auth-callback';

  constructor(private http: HttpClient) { }

  async getUserInfo(token: String): Promise<any>{
    const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    });
    const observable = this.http.get(url, {headers});
    return lastValueFrom(observable);
  }
  
  getAccesTokenFronUrl(): null | string {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');

  }

}
