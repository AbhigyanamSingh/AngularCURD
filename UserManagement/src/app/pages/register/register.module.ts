import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonFunctionModule } from 'src/app/common/commonFunction.module';
import { SharedPipesModule } from 'src/app/pipes/shared-pipes.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SharedServicesModule } from 'src/app/shared/shared-services.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CommonFunctionModule,
    SharedPipesModule,
    FormsModule,
    SharedServicesModule,
    MatCardModule,
    MatInputModule,
        RegisterRoutingModule
  ],
  exports:[RegisterComponent]
})
export class RegisterModule { }
