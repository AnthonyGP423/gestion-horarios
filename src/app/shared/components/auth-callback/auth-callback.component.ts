import { Component, OnInit } from '@angular/core';
import { GoogleApiServiceService } from '../../../services/google-api.service.service';
import {ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private googleApiService: GoogleApiServiceService
  ){}
  ngOnInit(): void {
    const accessToken = this.googleApiService.getAccesTokenFronUrl();
    if(accessToken){
      localStorage.setItem('googleAuthToken', accessToken);
      this.router.navigate(['/principal']);
    } else{
      console.error('No se encontro el token');
    }
  }

}
