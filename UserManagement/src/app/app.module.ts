import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
// import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppRoutingModule } from './app-routing.module';


import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
// services

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LocalStorageService } from './shared/services/storage/local-storage.service';
import { CommonUiService } from './shared/services/common-ui.service';
import { CommonFunctionModule } from './common/commonFunction.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { SharedServicesModule } from './shared/shared-services.module';
// import { P2pAvgReportComponent } from './p2p-avg-report/p2p-avg-report.component';
import { ToasterModule } from 'angular2-toaster';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonFunctionModule,
    SharedPipesModule,
    SharedServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToasterModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
    MatFormFieldModule,
    // DeviceDetectorModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    NgxMatSelectSearchModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    NgxMatDrpModule
  ],
  providers: [LocalStorageService, CommonUiService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
