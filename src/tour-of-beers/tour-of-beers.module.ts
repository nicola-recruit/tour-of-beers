import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import BeerProfileComponent from './beer/beer-profile.component';
import BeerService from './beer/beer.service';
import BeersDashboardService from './dashboard/beers-dashboard.service';
import BeersDashboardComponent from './dashboard/beers-dashboard.component';
import BeersListComponent from './list/beers-list.component';
import BeerEditComponent from './edit/beer-edit.component';
import BeerEditFormComponent from './edit/beer-edit-form.component';
import TourOfBeersAppComponent from './tour-of-beers-app.component';
import IsoCountryNamePipe from './common/iso-country-code.pipe';
import CountryService from './common/country.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BeersDashboardComponent },
    { path: 'list', component: BeersListComponent },
    { path: 'edit', component: BeerEditComponent }
];

@NgModule({
  declarations: [
    BeerProfileComponent, 
    BeersDashboardComponent, 
    BeersListComponent,
    BeerEditComponent,
    BeerEditFormComponent,
    TourOfBeersAppComponent,
    IsoCountryNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [BeerService, BeersDashboardService, CountryService],
  bootstrap: [TourOfBeersAppComponent]
})
export class TourOfBeersModule { }
