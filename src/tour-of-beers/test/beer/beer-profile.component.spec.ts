/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { Component, DebugElement } from "@angular/core";
import BeerProfileComponent from '../../beer/beer-profile.component';
import { By } from "@angular/platform-browser";

describe('Component for beer profile, class tests', () => {

    let component;
    let router;

    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])]
        });
        router = TestBed.get(Router);
        component = new BeerProfileComponent(router);
    });

    it('on init hook is called', () => {
        const mockBeer: any = {
            rating: 1,
            country: 'it'
        };
        component.beer = mockBeer;
        component.ngOnInit();
        expect(component.ratingStars).toEqual([1]);
        expect(component.avatarCssClasses).toEqual(['flag-icon', 'flag-icon-it']);
    });

    it('editBeerProfile is called', () => {
        const testValue = 'test';
        const mockBeer: any = {
            code: testValue
        };
        component.beer = mockBeer;
        spyOn(router, 'navigate');
        component.editBeerProfile();
        expect(router.navigate).toHaveBeenCalledWith(['/edit'], { queryParams: { code: testValue } });
    });
});

describe('Component for beer profile, behavioural test', () => {

    let component: BeerProfileComponent;
    let fixture: ComponentFixture<BeerProfileComponent>;
    let profileEditButtonElement: DebugElement;
    let router: Router;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]), MatCardModule, MatButtonModule, MatIconModule],
            declarations: [BeerProfileComponent]
        });

        fixture = TestBed.createComponent(BeerProfileComponent);
        router = TestBed.get(Router);
        component = fixture.componentInstance;

        profileEditButtonElement = fixture.debugElement.query(By.css('button'));
    });

    it('Edit button is clicked, router should redirect to the edit page', () => {
        const testValue = 'test';
        const mockBeer: any = {
            code: testValue
        };
        component.beer = mockBeer;
        spyOn(router, 'navigate');
        profileEditButtonElement.triggerEventHandler('click', null);
        expect(router.navigate).toHaveBeenCalledWith(['/edit'], { queryParams: { code: testValue } });
    });
});