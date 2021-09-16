import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';


@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    UserlistRoutingModule
  ],
  exports:[UserlistComponent]
})
export class UserlistModule { }
