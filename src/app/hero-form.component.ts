import { Component } from '@angular/core';
import { Hero }  from './hero';
import {NgForm} from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {CountryService} from './country.service';
import {CountryComponent} from './country.component';
import {CityComponent} from './city.component';
import 'rxjs/add/observable/of';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  providers: [CountryService]
})

export class HeroFormComponent {
  ngf :NgForm;
  counter: number;
  dataArray = [];
  dept = [
    'Accounts',
    'Audit',
    'Sales',
    'Marketing'
  ];
  nationality = ['Pakistani', 'Arabian',
    'Turkish', 'American'];

  model = new Hero(18, 'Ayesha', this.nationality[1], 'Chuck Overstreet', true, true, false, false, this.dept[0], '01/01/1990');
  submitted = false;
  filteredList= [];
  tdDept: string;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();

  selectedCountry: CountryComponent;
  selectedCity: CityComponent;
  countries: CountryComponent[];
  cities: CityComponent[];
  constructor(private _countryService: CountryService){
    this.selectedCountry = new CountryComponent('Select', 'Select Country');
    this.selectedCity = new CityComponent('Select', 'Select Country', 'Select City');
    this.countries = this._countryService.getCountries();

  };
  ngOnInit() {

  }
  onSelect(countryid: string) {
    this.cities = this._countryService.getCities().filter((item) => item.countryid == countryid);
    console.log(this.cities);
  }
  filteredValues(val: string){
    if (val) {
      const filterValue = val.toLowerCase();
      return this.dept.filter(state => state.toLowerCase().startsWith(filterValue));
    }
    return this.dept;
  }

  onSubmit(form: NgForm) {


    this.submitted = true;
    this.counter = -1;
    if (this.model.id === null) {this.model.id = 0}
    if(this.model.id > 0) {
      for (let formControl in form.form.controls) {

        if (formControl === 'name') {
          if (form.form.controls.name.dirty) {
            this.dataArray[this.counter += 1] = 'name:' + this.model.name;
          }
        } else if (formControl === 'managmentSkill') {
          if (form.form.controls.managmentSkill.dirty) {
            this.dataArray[this.counter += 1] = 'managmentSkill:' + this.model.managmentSkill;

          }

        } else if (formControl === 'nationality') {
          if (form.form.controls.nationality.dirty) {
            this.dataArray[this.counter += 1] = 'nationality:' + this.model.nationality;

          }
        }
      }
    }else {

      this.dataArray[this.counter += 1] = 'name:'+this.model.name;
      this.dataArray[this.counter += 1] = 'managmentSkill:'+this.model.managmentSkill;
      this.dataArray[this.counter += 1] = 'nationality:'+this.model.nationality;
    }
    console.log(this.dataArray);
  }
  newEmployee(form:NgForm){
    console.log(form);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
