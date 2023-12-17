import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-resumee',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './resumee.component.html',
  styleUrl: './resumee.component.scss'
})
export class ResumeeComponent {
  gaService = inject(GoogleAnalyticsService)
  pathCvToDownload = '/assets/curriculum/en.pdf';
  pathCvToPreview = '/assets/curriculum/en-dark.pdf';

  printCv() {
    this.gaService.event('download_cv', 'curriculum', 'Curriculum');
    window.open(this.pathCvToDownload, '_blank')
  }
}
