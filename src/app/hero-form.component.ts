import { Component } from '@angular/core';
import { Hero }  from './hero';
import {NgForm} from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {CountryService} from './country.service';
import {CountryComponent} from './country.component';
import {CityComponent} from './city.component';
import 'rxjs/add/observable/of';
import { Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  providers: [CountryService]
})

export class HeroFormComponent {
  ngf :NgForm;
  counter: number;
  chipsCountry = [];
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
  removable: boolean = true;
  selectedCountry: CountryComponent;
  selectedCity: CityComponent;
  countries: CountryComponent[];
  cities: CityComponent[];

  animal: string;
  name: string;


  constructor(private _countryService: CountryService, public dialog: MdDialog){
    this.selectedCountry = new CountryComponent('Select', 'Select Country');
    this.selectedCity = new CityComponent('Select', 'Select Country', 'Select City');
    this.countries = this._countryService.getCountries();

  };
  ngOnInit() {

  }
  onSelect(countryid: string) {
    this.cities = this._countryService.getCities().filter((item) => item.countryid == countryid);
 //   console.log(this.cities);
  }
  onSelectCity(cityid: string){
    let index = this.chipsCountry.indexOf(cityid);
    if (index < 0) {
      this.chipsCountry.push(cityid);
    }
  }

  remove(id: any): void {
    let index = this.chipsCountry.indexOf(id);

    if (index >= 0) {
      this.chipsCountry.splice(index, 1);
    }
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

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  setGreen(){
    this.animal = "http://startalkcreate.org/lpg/server-side/db-operations-learning-plan.php?color=green"
  }

  setRed(){
    this.animal = "http://startalkcreate.org/lpg/server-side/db-operations-learning-plan.php?color=red"
  }
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


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
 web: any;
 site: string;
  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any, private domSanitizer : DomSanitizer) {
    this.site = data.animal;

  }
ngOnInit(){
  this.web = this.domSanitizer.bypassSecurityTrustResourceUrl(this.site);
}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
