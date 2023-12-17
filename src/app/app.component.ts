import {Component, HostListener, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet, RoutesRecognized} from '@angular/router';
import {FullMenuComponent} from './components/menu/full-menu/full-menu.component';
import {HamburgerMenuComponent} from './components/menu/hamburger-menu/hamburger-menu.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FullMenuComponent, HamburgerMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = inject(Title);
  private router = inject(Router);
  showHamburgerMenu = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.showHamburgerMenu = window.innerWidth <= 1030;
  }

  ngOnInit(): void {
    this.checkWindowSize();
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized && data.state.root.firstChild) {
        this.title.setTitle(data.state.root.firstChild.data['title']);
      }
    });
  }
}
