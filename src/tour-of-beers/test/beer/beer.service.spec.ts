import { TestBed, inject } from '@angular/core/testing';
import BeerService from '../../beer/beer.service';

describe('BeerService', () => {

    beforeEach(() => {
  
      TestBed.configureTestingModule({
        providers: [
            BeerService
        ]
      });
    });

    describe('getBeers()', () => {

        it('should return a Beer[]',
            inject([BeerService], (beerService) => {
    
            const result = beerService.getBeers();

            expect(result.length).toBeGreaterThan(0);
        }));
    });

    describe('deleteBeer()', () => {

        it('should delete an existing beer',
            inject([BeerService], (beerService) => {
    
            const mockBeerOne = {
                code: 'first'
            };

            const mockBeerTwo = {
                code: 'second'
            };

            beerService.beersRepository = [mockBeerOne, mockBeerTwo];

            beerService.deleteBeer(mockBeerOne);

            expect(beerService.beersRepository).toEqual([mockBeerTwo]);
        }));

        it('should not delete a not-existing beer',
            inject([BeerService], (beerService) => {
    
            const mockBeerOne = {
                code: 'first'
            };

            const mockBeerTwo = {
                code: 'second'
            };

            beerService.beersRepository = [mockBeerTwo];

            beerService.deleteBeer(mockBeerOne);

            expect(beerService.beersRepository).toEqual([mockBeerTwo]);
        }));
    });

    describe('addBeer()', () => {

        it('should add a new beer',
            inject([BeerService], (beerService) => {
    
            const mockBeerOne = {
                code: 'first'
            };

            const mockBeerTwo = {
                code: 'second'
            };

            beerService.beersRepository = [mockBeerOne];

            beerService.addBeer(mockBeerTwo);

            expect(beerService.beersRepository).toEqual([mockBeerOne, mockBeerTwo]);
        }));
    });

    describe('createBeer()', () => {

        it('should create a new beer',
            inject([BeerService], (beerService) => {
    
            const result = beerService.createBeer();

            expect(result.code).toBeTruthy();
            expect(result.name).toBeNull();
            expect(result.country).toBeNull();
            expect(result.alcoholPercentage).toBeNull();
            expect(result.description).toBeNull();
            expect(result.rating).toBeNull();
            expect(result.picture).toBeNull();
            expect(result.active).toBeTruthy();
        }));
    });
});