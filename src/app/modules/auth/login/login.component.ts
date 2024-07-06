import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
  export class LoginComponent {

    private clientId: string = ''; //<- METE AHI TU CLIENTE ID
    private scopes: string[] = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ];
   
   loginGoogle(){
    const params = {
      client_id: this.clientId,
      scope: this.scopes.join(' '),
      include_granted_scopes: 'true',
      redirect_uri: 'http://localhost:4200/shared/components/auth-callback',
      response_type: 'token',
      state: 'state_parameter_passthrough_value'
    };
    const urlGoogle = 'https://accounts.google.com/o/oauth2/v2/auth?'+ new URLSearchParams(params)
    window.location.href = urlGoogle;

   }
      






  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/principal/menu/inicio']);
  }

  value1: string | undefined;
  value2!: string;

  letra: string[] = [];


  
  }

  
