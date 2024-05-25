import { CommonModule } from '@angular/common';
import { Component, signal, effect, untracked } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {


  userName = signal('Jane Doe');

  complexData = signal([{ id: 1 }], {
    equal: (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
  });

  userTwo = signal('David');

  logEffect = effect(() => {
    const untrackedValue = untracked(() => this.userTwo());
    console.log(`Login without dependency: ${untrackedValue}`);
  });

  myEffect = effect((onCleanup) => {
    const timer = setTimeout(() => {
      //some logic
    }, 1000);

    onCleanup(() => clearTimeout(timer));
  });

  constructor() {

    effect(() => {
      console.log('User name change to:', this.userName());
      localStorage.setItem('userName', this.userName())
    });

    console.log(this.userName());

    this.userName.set('lllllllllllleeeee');
    console.log(this.userName());

    this.userName.update((name2) => name2.toUpperCase());
    console.log(this.userName());

  }

  change() {
    //random String
    //this.userName.set(Math.random().toString());
    this.userName.set(Math.random().toString());
  };
}
