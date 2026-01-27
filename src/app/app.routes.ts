import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PistasComponent } from './components/pistas/pistas.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';
import { TiendaComponent } from './components/tienda/tienda.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'perfil',component: ProfileComponent},
    {path:'pistas',component:PistasComponent},
    {path:'sigin',component:SiginComponent},
    {path:'tienda',component:TiendaComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', redirectTo:'home', pathMatch:'full'}
]
;
