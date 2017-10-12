import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

}
