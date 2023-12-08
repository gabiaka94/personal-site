import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resumee',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './resumee.component.html',
  styleUrl: './resumee.component.scss'
})
export class ResumeeComponent {

  pathCvToDownload = '/assets/curriculum/en.pdf';
  pathCvToPreview = '/assets/curriculum/en-dark.pdf';
  printCv() {
    window.open(this.pathCvToDownload, '_blank')
  }
}
