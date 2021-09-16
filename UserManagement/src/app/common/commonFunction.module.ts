import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { LoaderComponent } from './loader/loader.component';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { NoRecordsComponent } from './no-records/no-records.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ApiProgressingComponent } from './api-progressing/api-progressing.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NoRecordsComponent,
    DynamicMenuComponent,
    BreadcrumbComponent,
    ApiProgressingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    SharedPipesModule,
    MatIconModule,
  ],
  exports: [
    LoaderComponent,
    NoRecordsComponent,
    DynamicMenuComponent,
    BreadcrumbComponent,
    MatIconModule,
    ApiProgressingComponent
  ]
})
export class CommonFunctionModule {}
