import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStorageService } from './shared/services/storage/local-storage.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { CommonModule } from '@angular/common';
import { Observable} from 'rxjs';
// import { fromEvent } from 'rxjs/observable/fromEvent';
// import { of} from 'rxjs/observable/of';
// import { merge} from 'rxjs/observable/merge';


import { mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalStorageService]
})
export class AppComponent {
  public toastConfig: ToasterConfig = new ToasterConfig({
  positionClass: 'toast-top-right',
  animation: 'fade',
  showCloseButton: true,
  limit: 1
  });
  notificationList: any = {};
  notificationLength: any = 0;
  online$: Observable<boolean>;
  public OnlineStatus: boolean=false;
  constructor(
  public _localStorageService: LocalStorageService,
  private router: Router,
  private toasterService: ToasterService,
  ) {
    
  }
  ngOnInit() {
  }
 
 
}