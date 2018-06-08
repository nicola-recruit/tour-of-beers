import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../beer/beer.model';
import BeerService from '../beer/beer.service';

@Component({
  selector: 'beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export default class BeersListComponent {

    private displayedColumns: string[] = ['code', 'name', 'country', 'alcoholPercentage', 'actions'];

    constructor (private beerService: BeerService, private router: Router) {}

    public getBeerList (): Beer[] {
        return this.beerService.getBeers();
    }

    public editBeerProfile (beer: Beer): void {
        this.router.navigate(['/edit'], { queryParams: { code: beer.code } });
    }

    public deleteBeerProfile (beer: Beer): void {
        this.beerService.deleteBeer(beer);
    }
}
