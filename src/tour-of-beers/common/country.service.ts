import { Injectable } from '@angular/core';
import { Country } from './country.model';

@Injectable()
export default class CountryService {

    private countryList: Country[];

    constructor () {
        this.countryList = [{
            isoCode: 'cz',
            name: 'Czech Republic'
        }, {
            isoCode: 'it',
            name: 'Italy'
        }, {
            isoCode: 'jp',
            name: 'Japan'
        }];
    }

    public getAvailableCountries (): Country[] {
        return this.countryList;
    }
}