import { Pipe, PipeTransform } from '@angular/core';
import CountryService from './country.service';
import { Country } from './country.model';

@Pipe({name: 'isoCountryName'})
export default class IsoCountryNamePipe implements PipeTransform {

    private isoCountryNameMap: {[isoCode:string]: string} = {
        'cz': 'Czech Republic',
        'it': 'Italy',
        'jp': 'Japan'
    };

    constructor (private countryService: CountryService) {
        this.isoCountryNameMap = {};
        const availableCountries = this.countryService.getAvailableCountries();
        availableCountries.forEach((country: Country) => {
            this.isoCountryNameMap[country.isoCode] = country.name;
        });
    }

    transform(isoCode: string): string {
        return this.isoCountryNameMap[isoCode];
    }
}