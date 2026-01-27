import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PistasComponent } from './components/pistas/pistas.component';
import { SiginComponent } from './components/auth/sigin/sigin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,NavbarComponent,FooterComponent,HomeComponent,ProfileComponent,LoginComponent,PistasComponent,SiginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'padel_pantano';
}
