import { Component } from '@angular/core';
import { Car }  from './car';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {MdSnackBar} from "@angular/material";



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: []
})


export class ItemComponent {

  dataSourceHero: any;
  model1 = new Car(18, 'Toyota');
  model2 = new Car(19, 'BMW');
  model3 = new Car(20, 'Volvo');
  array: any[];
  displayedColumns = ['id', 'name'];
  json: string;

  constructor(public snackBar: MdSnackBar){
    this.array =  [this.model1, this.model2, this.model3];
    this.json=JSON.stringify(this.array);
    //this.dataSourceHero = new HeroDataSource(this.array);
    this.dataSourceHero = new HeroDataSource(this.json);
    this.snackBar.open('Success', 'Ok', {
      duration: 5000, verticalPosition: "top"
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

export class HeroDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  json: string;

  localCars: Car[]
  /*constructor(private importedCar: Car[]){
    super();
    this.localCar = importedCar;
    /!*
     this.json = JSON.stringify(data);
     this.ele = JSON.parse(this.json);*!/

  }*/
  constructor(private importedCars: string){
    super();
    this.localCars = JSON.parse(importedCars);

  }
  connect(): Observable<Car[]> {

    /*console.log(JSON.stringify(data));*/
    return Observable.of(this.localCars);
  }

  disconnect() {}
}
