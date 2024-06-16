import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HorariosListarComponent} from './modules/horarios/horarios-listar/horarios-listar.component';
import { ReservasListarComponent} from './modules/reservas/reservas-listar/reservas-listar.component';
import { UsuariosListarComponent} from './modules/usuarios/usuarios-listar/usuarios-listar.component';
import { MenuBarComponent} from './shared/components/menu-bar/menu-bar.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  {
    path: 'principal', component: MainLayoutComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' }, // Redirige a login como página de inicio
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        {
          path: 'menu', component: HomeComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'horarios' }, // Redirige a horarios por defecto
            { path: 'horarios', component: HorariosListarComponent },
            { path: 'reservas', component: ReservasListarComponent },
            { path: 'usuarios', component: UsuariosListarComponent }
          ]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
