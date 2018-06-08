import { Injectable } from '@angular/core';
import { Beer } from '../beer/beer.model';
import BeerService from '../beer/beer.service';

@Injectable()
export default class BeerDashboardService {

    constructor (private beerService: BeerService) {}

    public getBeerSelectionList (): Beer[] {
        const allAvailableBeers = this.beerService.getBeers();
        const sortedBeers = allAvailableBeers.sort((firstBeer: Beer, secondBeer: Beer) => {
            return secondBeer.rating - firstBeer.rating;
        });
        return sortedBeers.slice(0, 3);
    }
}