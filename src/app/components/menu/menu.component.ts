import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'menu-component',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() onNavigate: EventEmitter<string> = new EventEmitter<string>();

  goToPage(route: string){
    this.onNavigate.emit(route);
  }
}
