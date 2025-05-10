import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrl: './videos-page.component.css'
})
export class VideosPageComponent {
  videoIds: string[] = [
    '9FCF2Y4lIWk?si=yrQgLreoBH_y9948', // space asshole - chris remo
    'VJ0axgeNbWU?si=tbOZuG-rYV0v8dux' // if i am - my bloody valentine
  ]

  safeVideoUrls: SafeResourceUrl[] = [];
  constructor(private sanitizer: DomSanitizer) {
  this.safeVideoUrls = this.videoIds.map(id =>
    this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)
  );
}
}