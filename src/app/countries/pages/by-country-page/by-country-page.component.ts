import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;


  constructor(
    private countriesService: CountriesService
  ) { }

  searchByCountry(term: string) {
    this.isLoading = true;

    this.countriesService.searchCountry(term)
      .subscribe(country => {
        this.countries = country;
        this.isLoading = false;
      })
  }

}
