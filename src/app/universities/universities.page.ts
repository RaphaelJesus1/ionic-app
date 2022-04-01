import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  GetUniversitiesResponse,
  parseUniversity,
} from 'src/assets/interfaces/GetUniversitiesResponse';
import { University } from 'src/assets/interfaces/University';

const URL = 'http://universities.hipolabs.com';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.page.html',
  styleUrls: ['./universities.page.scss'],
})
export class UniversitiesPage implements OnInit {
  params: string[] = [];
  universities: University[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient // private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (!params.name && !params.country) {
        return;
      }

      if (params.name) {
        this.params.push(`name=${params.name}`);
      }

      if (params.country) {
        this.params.push(`country=${params.country}`);
      }
    });

    this.requestData();
  }

  requestData() {
    const queryParams =
      this.params.length > 1 ? this.params.join('&') : this.params[0];
    const searchUrl = URL + '/search?' + queryParams;

    this.http.get(searchUrl).subscribe((data: GetUniversitiesResponse[]) => {
      this.universities = data.map((university) => parseUniversity(university));
      console.log(this.universities);
    });
  }
}
