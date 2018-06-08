import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Beer } from '../beer/beer.model';
import BeerService from '../beer/beer.service';

@Component({
  selector: 'beer-edit',
  templateUrl: './beer-edit.component.html'
})
export default class BeerEditComponent implements OnInit {
    private beerCode: string;
    private beerToEdit: Beer;

    constructor (private router: Router, private route: ActivatedRoute, private beerService: BeerService) {
        this.route.queryParams.subscribe((queryParameters:{[label:string]: string}) => {
            this.beerCode = queryParameters['code'];
        });
    }

    ngOnInit(): void {
        if (this.beerCode) {
            const allBeers = this.beerService.getBeers();
            this.beerToEdit = allBeers.find((beer: Beer) => beer.code == this.beerCode);
        }
    }

    public isWrongBeerCode (): boolean {
        return !!this.beerCode && !this.beerToEdit;
    }

    public goToNewBeerPage (): void {
        this.router.navigate(['/edit']);
    }

    public goToHomePage (): void {
        this.router.navigate(['/home']);
    }
}
