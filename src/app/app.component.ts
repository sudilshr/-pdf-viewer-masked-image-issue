import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ngx-extended-pdf-viewer
    [src]="pdfSrc"
  ></ngx-extended-pdf-viewer>`,
})
export class AppComponent {
  pdfSrc = '/assets/sandwich-masked.pdf';
}
