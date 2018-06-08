import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'tour-of-beers-app',
  templateUrl: './tour-of-beers-app.component.html'
})
export default class TourOfBeersAppComponent {
    
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

        iconRegistry.addSvgIcon('star_rate', sanitizer.bypassSecurityTrustResourceUrl('assets/star_rate.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/delete.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg'));
    }
}
