import { Component, OnInit,ViewChild,AfterViewInit } from "@angular/core";
import { LocalStorageService } from '../../shared/services/storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService,
    private toaster: ToastrService,
    private titleService: Title,    private router: Router,
    ) { }
    api_progressing:any={
      is_save_api:false,
    }
    user_name=''
    user_email=''
    user_psw=''
    user_mobile=''
    is_loggin:boolean=false;

  ngOnInit(): void {
    this.is_loggin=(localStorage.getItem('email')!=undefined && localStorage.getItem('email')!='' && localStorage.getItem('email')!=null)?true:false;
    if(this.is_loggin)
    {
      this.toaster.info("Already Loggedin","Info");
      this.router.navigate(['/user-list'])
    }
    this.titleService.setTitle('Login')
  }
saveData()
{
  this.api_progressing.is_save_api=true;
  let name,email,psw,mobile;
name=this.user_name
email=this.user_email

psw=this.user_psw;
mobile=this.user_mobile;
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
{
  alert("Login Pass");
  let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
 localStorage.setItem('name',current_user.name);
 localStorage.setItem('email',current_user.email);
 this.router.navigate(['/user-list']);
}
else
{
  alert('Login Fail');
}
this.api_progressing.is_save_api=false;

}
}
