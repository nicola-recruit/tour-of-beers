import {　Component, Input, OnInit　} from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from './beer.model';

@Component({
    selector: 'beer-profile',
    templateUrl: './beer-profile.component.html',
    styleUrls: ['./beer-profile.component.css']
})
export default class BeerProfileComponent implements OnInit {

    @Input() beer: Beer;

    private ratingStars: number[];
    private avatarCssClasses: string[];

    constructor (private router: Router) {}

    public ngOnInit (): void {

        this.ratingStars = Array(this.beer.rating).fill(1);
        this.avatarCssClasses = ['flag-icon', 'flag-icon-' + this.beer.country ];
    }

    public editBeerProfile (): void {
        this.router.navigate(['/edit'], { queryParams: { code: this.beer.code } });
    }
}