import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  searchByCapital(term: string) {
    console.log('desde by-capital-page');
    console.log({ term })
  }

}
