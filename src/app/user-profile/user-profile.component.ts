import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userName = signal('Jane Doe');

  constructor() {
    console.log(this.userName());

    this.userName.set('lllllllllllleeeee');
    console.log(this.userName());

    this.userName.update((name2) => name2.toUpperCase());
    console.log(this.userName());

  }
}
