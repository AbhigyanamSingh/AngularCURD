import { Component, OnInit,ViewChild,AfterViewInit } from "@angular/core";
import { LocalStorageService } from '../../shared/services/storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    this.titleService.setTitle('Register')
  }
saveData()
{
  let name,email,psw,mobile;
name=this.user_name
email=this.user_email

psw=this.user_psw;
mobile=this.user_mobile;
if(name=='')
{
  this.toaster.error("Enter correct name","Error")
  return false;
}
if(!this.isEmail(email))
{
  this.toaster.error("Enter correct email","Error")
  return false;
}
if(!this.isMobile(mobile))
{
  this.toaster.error("Enter correct mobile","Error")
  return false;
}
console.log(psw)
if(!this.isPasswaord(psw))
{
  this.toaster.error("Enter correct password","Error")
  return false;
}
this.api_progressing.is_save_api=true;

  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name":name,
  "email":email,
  "psw":psw,
  mobile:mobile,
})
this.toaster.success("Data Saved",'success');
localStorage.setItem("users",JSON.stringify(user_records));
}
this.api_progressing.is_save_api=false;

}
isEmail(email) {

  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let status = false;
  if (reg.test(email) == false) {

    status = false;
  }
  else {
    status = true;
  }
  return status;
}
isMobile(value) {

  let status = false;
  if (value.length == 10) {
    status = true;
  }
  else {
    status = false;
  }
  return status;

}
isPasswaord(password) {
  let status = false;
  let reg = /^(?=.*\d).{8,}$/
  if (!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
  ) {
    status = true;
  }


  return status;
}
}
