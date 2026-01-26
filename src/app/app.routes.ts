import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PistasComponent } from './components/pistas/pistas.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'perfil',component: ProfileComponent},
    {path:'pistas',component:PistasComponent}
    
];
