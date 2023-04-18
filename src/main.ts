import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  template: `
    <h1>PdfViewerMaskedImageIssue</h1>
    <ngx-extended-pdf-viewer [src]="pdfSrc"> </ngx-extended-pdf-viewer>
  `,
})
export class App {
  pdfSrc = '/assets/sandwich-masked.pdf';
}

bootstrapApplication(App);
