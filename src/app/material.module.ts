import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdSidenavModule,
  MdInputModule,
  MdAutocompleteModule,
  MdCheckboxModule,
  MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSidenavModule,
    MdInputModule,
    MdAutocompleteModule,
    MdCheckboxModule,
    MdSelectModule
  ]
})
export class MaterialModule {}
