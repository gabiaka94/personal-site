// hamburger-menu.component.ts

import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'hamburger-menu-component',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)',
      })),
      state('out', style({
        transform: 'translateY(-100%)',
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ]
})
export class HamburgerMenuComponent  {
  menuState: string = 'out';


  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
