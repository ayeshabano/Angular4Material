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
  MdSelectModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdTabsModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTooltipModule, MdProgressSpinnerModule
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
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdProgressSpinnerModule
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
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdProgressSpinnerModule
  ]
})
export class MaterialModule {}
