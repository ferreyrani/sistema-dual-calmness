import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Calendario', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Contacto emergencia', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Ajustes', url: '/folder/Archived', icon: 'settings' },
    { title: 'Soporte', url: '/folder/Trash', icon: 'trash' },
    { title: 'Educación|Más Info', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Notes', 'Reminders', 'Términos y condiciones'];
  constructor() {}
}
