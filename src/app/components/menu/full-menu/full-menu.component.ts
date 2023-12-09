import {Component, EventEmitter, inject, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuDictionary} from '../menu.dictionary';

@Component({
  selector: 'full-menu-component',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './full-menu.component.html',
  styleUrl: './full-menu.component.scss'
})
export class FullMenuComponent {

dictionary = inject(MenuDictionary)
}
