import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

@Injectable()
export default class BeerService {

    private beersRepository: Beer[];

    constructor () {
        this.beersRepository = [{
            code: 'AAA001',
            name: 'Moretti',
            country: 'it',
            alcoholPercentage: 4.8,
            description: 'Desc',
            rating: 3,
            picture: 'http://www.alldrink.it/631-thickbox_default/birra-moretti-cl-33x24.jpg',
            active: true
        },{
            code: 'KMD206',
            name: 'Sapporo',
            country: 'jp',
            alcoholPercentage: 5.2,
            description: 'Desc',
            rating: 2,
            picture: 'https://www.wishbeer.com/3817-large_default/sapporo-330ml-5.jpg',
            active: true
        },{
            code: 'CXM506',
            name: 'Kozel Světlý',
            country: 'cz',
            alcoholPercentage: 4.6,
            description: 'Desc',
            rating: 4,
            picture: 'https://cz4.staticac.cz/foto/compressor/7/f/7fab84712b0d4b4f95e425be8582f746.jpg',
            active: true
        }];
    }

    public getBeers (): Beer[] {
        return this.beersRepository;
    }

    public deleteBeer (beerToDelete: Beer): void {
        this.beersRepository = this.beersRepository.filter((beerToFilter) => beerToFilter.code != beerToDelete.code);
    }

    public addBeer (beerToAdd: Beer): void {
        this.beersRepository.push(beerToAdd);
    }

    public createBeer (): Beer {
        const uid = Date.now().toString(36).toLocaleUpperCase();
        const beer = {
            code: uid,
            name: null,
            country: null,
            alcoholPercentage: null,
            description: null,
            rating: null,
            picture: null,
            active: true
        };
        return beer;
    }

    public storeBeer (beer: Beer): void {
        this.beersRepository.push(beer);
    }
}