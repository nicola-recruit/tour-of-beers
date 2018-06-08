import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CountryService from '../common/country.service';
import BeerService from '../beer/beer.service';
import { Beer } from '../beer/beer.model';
import { Country } from '../common/country.model';
import { Location } from '@angular/common';

@Component({
    selector: 'beer-edit-form',
    templateUrl: './beer-edit-form.component.html',
    styleUrls: ['./beer-edit-form.component.css']
})
export default class BeerEditFormComponent implements OnInit {

    @Input() beerProfile: Beer;

    private beerToEdit: Beer;
    private countryList: Country[];
    private beerEditFormGroup: FormGroup;

    constructor(private formBuilder:FormBuilder, private countryService: CountryService, 
        private beerService: BeerService, private location: Location) { 
        this.countryList = this.countryService.getAvailableCountries();
    }

    public ngOnInit(): void {
        if (this.isNewBeerProfile()) {
            this.beerToEdit = this.beerService.createBeer();
        } else {
            this.beerToEdit = this.beerProfile;
        }
        this.beerEditFormGroup  = this.createFormGroup(this.beerToEdit);
    }

    private isNewBeerProfile (): boolean {
        return !this.beerProfile;
    }

    private createFormGroup (beer: Beer): FormGroup {
        return this.formBuilder.group({
            name: [beer.name, [Validators.required]],
            alcoholPercentage: [beer.alcoholPercentage, [Validators.pattern(/^[1-9]?[0-9]\.\d{1}$/)]],
            description: [beer.description],
            rating: [beer.rating, [Validators.required, Validators.pattern(/^[1-5]$/)]],
            country: [beer.country, [Validators.required]],
            picture: [beer.picture, [Validators.required, Validators.pattern('https?://.+$')]]
        });
    }

    public getFlagClasses (isoCode: string): string[] {
        return ['flag-icon', 'flag-icon-' + isoCode ];
    }

    public cancel(): void {
        this.location.back();
    }

    public submit(): void {
        Object.assign(this.beerToEdit, this.beerEditFormGroup.value);
        if (this.isNewBeerProfile()) {
            this.beerService.storeBeer(this.beerToEdit);
        }
        this.location.back();
    }
}