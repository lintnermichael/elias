import { Component } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  @ViewChild('wikiFrame') wikiFrame?: ElementRef<HTMLIFrameElement>;

  wikiUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/einsatzleiterWiki/pages/start.html');

  constructor(private sanitizer: DomSanitizer) {}

  goBack(): void {
    this.wikiFrame?.nativeElement.contentWindow?.history.back();
  }

  goHome(): void {
    this.wikiFrame?.nativeElement.contentWindow?.location.assign('assets/einsatzleiterWiki/pages/start.html');
  }
}
