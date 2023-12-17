import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

type IconsTemplate = {
  href: string;
  imgUrl: string;
  clickFn: () => void;
}

@Component({
  selector: 'icons-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons-contact.component.html',
  styleUrl: './icons-contact.component.scss'
})
export class IconsContactComponent {
  gaService = inject(GoogleAnalyticsService)

  icons: IconsTemplate[] = [
    {
      href: 'https://linkedin.com/in/gabriele-miano-7b049a80',
      imgUrl: '/assets/icons/linkedin.svg',
      clickFn: () => {
        console.log('gaa')
        this.gaService.event('open_linkedin', 'social', 'Linkedin')
      }
    },
    {
      href: 'https://github.com/gabiaka94',
      imgUrl: '/assets/icons/github.svg',
      clickFn: () => this.gaService.event('open_github', 'social', 'Github'),
    },
    {
      href: 'https://www.instagram.com/gabiaka94/',
      imgUrl: '/assets/icons/instagram.svg',
      clickFn: () => this.gaService.event('open_instagram', 'social', 'Instagram'),
    }
  ]
}
