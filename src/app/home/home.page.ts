import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { University } from 'src/assets/interfaces/University';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchName: string;
  searchCountry: string;

  constructor(private router: Router) {}

  setName(name: University['name']) {
    if (this.searchName !== name) {
      this.searchName = name;
    }
  }

  setCountry(country: University['country']) {
    if (this.searchCountry !== country) {
      this.searchCountry = country;
    }
  }

  sendRequest(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.searchName,
        country: this.searchCountry,
      },
    };

    this.router.navigate(['university'], navigationExtras);
  }
}
