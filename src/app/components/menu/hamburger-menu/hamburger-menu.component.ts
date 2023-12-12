// hamburger-full-full-menu.component.ts

import {Component, ElementRef, HostListener, inject} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuDictionary} from '../menu.dictionary';

@Component({
  selector: 'hamburger-menu-component',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
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
export class HamburgerMenuComponent {
  menuState: 'out' | 'in' = 'out';
  dictionary = inject(MenuDictionary);
  private readonly _elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event', '$event.target'])
  onDocumentClicked(event: MouseEvent, targetElement: HTMLElement) {
    if (targetElement && document.body.contains(targetElement) && !this._elementRef.nativeElement.contains(targetElement)) {
      this.closeMenu();
    }
  }


  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  closeMenu() {
    this.menuState = 'out'
  }

}
