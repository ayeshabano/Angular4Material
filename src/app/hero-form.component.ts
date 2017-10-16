import { Component } from '@angular/core';
import { Hero }  from './hero';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
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
  constructor(){


  };
  ngOnInit() {

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
  newEmployee(){
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
