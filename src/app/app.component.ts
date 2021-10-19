import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'grid' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Calendario', url: '/calendario', icon: 'calendar' },
    { title: 'Contacto emergencia', url: '/sos', icon: 'heart' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Soporte', url: '/soporte', icon: 'help-circle' },
    { title: 'Educación|Más Info', url: '/informacion', icon: 'information-circle' },
    
  ];
  public labels = ['Notes', 'Reminders', 'Términos y condiciones'];
  constructor() {}
}
