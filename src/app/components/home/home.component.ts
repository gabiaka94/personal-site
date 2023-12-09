import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconsContactComponent} from '../icons-contact/icons-contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IconsContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
