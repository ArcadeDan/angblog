import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrl: './videos-page.component.css'
})
export class VideosPageComponent {
  musicIds: string[] = [
    '9FCF2Y4lIWk?si=yrQgLreoBH_y9948', // space asshole - chris remo
    'VJ0axgeNbWU?si=tbOZuG-rYV0v8dux', // if i am - my bloody valentine
    '4Om4meS-SyI?si=lnSc6s4ZHkYFhQ60', // soft as snow (but warm inside) - my bloody valentine
    'XSuViWLfmjM?si=vXNcHPKafxfud7Ah', // heart of chambers - beach house
    'Orlbo9WkZ2E?si=mK0z8jTSgf3ddJMK', // guillotine - death grips
    'DDxlzKQ9D0Q?si=OhogE-88Wo3GmQ50', // pancake - swirlies
    'Q0GecOmPQYA?si=wrEBxP9o6EeMic-o', // roseblood - mazzy star
    'jMOynjuAPvM?si=HfNWfZ_m1b-U7tcq', // jugband blues - pink floyd
    '5BIElTtN6Fs?si=PZEl-86vOnLEVU30', // disorder - joy division
  ]

  videoIds: string[] = [
    'gfVmtaOUER8?si=0E4QWgY2qlvbO__d', // mandelbrot set for idiots
    'HIjso98JGpM?si=Nphy6bhjUqWQp0Cq', // ignorant guide to shoegaze
  ]

  safeVideoUrls: SafeResourceUrl[] = [];
  musicVideoUrls: SafeResourceUrl[] = [];
  constructor(private sanitizer: DomSanitizer) {
  this.musicVideoUrls = this.musicIds.map(id =>
    this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)
  );

  this.safeVideoUrls = this.videoIds.map(id =>
    this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)
  );

}
}