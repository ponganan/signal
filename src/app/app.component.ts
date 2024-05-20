import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  //basic initialize signal
  firstName = signal('Ponganan');

  lastName = signal<string>('Saensuk');

  age = signal<number>(41);

  phoneNumber = signal<number>(66654195222);

  // add computed signal value

  fullName = computed(() => this.fName() + " " + this.mName() + " " + this.lName());

  fName = signal('');
  mName = signal('');
  lName = signal('');

  // test Observable
  // add CommonModule for use Observable 
  address: Observable<string> = of('44 Soi xxx');;

  constructor() {

    //this.demoName = of('Initial Value');

  }

  changeName() {
    // change signal value
    this.firstName.set("JOEY");
  }

  changeFName(value: string) {
    this.fName.set(value);
  }

  changeMName(value: string) {
    this.mName.set(value);
  }

  changeLName(value: string) {
    this.lName.set(value);
  }

}
