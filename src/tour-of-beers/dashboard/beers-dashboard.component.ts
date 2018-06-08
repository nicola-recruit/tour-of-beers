import { Component } from '@angular/core';

import { Beer } from '../beer/beer.model';
import BeerDashboardService from './beers-dashboard.service';

@Component({
  selector: 'beers-dashboard',
  templateUrl: './beers-dashboard.component.html'
})
export default class BeersDashboardComponent {

    private beerList: Beer[];

    constructor (private beerDashboardService: BeerDashboardService){
        this.beerList = beerDashboardService.getBeerSelectionList();
    }
}
