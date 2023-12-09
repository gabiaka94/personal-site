import {Component, HostListener, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FullMenuComponent} from './components/menu/full-menu/full-menu.component';
import {HamburgerMenuComponent} from './components/menu/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FullMenuComponent, HamburgerMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'personal-site';

  showHamburgerMenu = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.showHamburgerMenu = window.innerWidth <= 900;
  }

  ngOnInit(): void {
    this.checkWindowSize();
  }
}
