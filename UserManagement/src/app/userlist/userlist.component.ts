import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(    private router: Router,    private toaster: ToastrService,

    ) { }
  user_records:any=[];
  is_loggin:boolean=false;

  ngOnInit(): void {
    this.is_loggin=(localStorage.getItem('email')!=undefined && localStorage.getItem('email')!='' && localStorage.getItem('email')!=null)?true:false;
    if(!this.is_loggin)
    {
      this.toaster.info("Login First","Info");
      this.router.navigate(['/login'])
    }
    this.fetchUsers();
  }
fetchUsers()
{
  this.user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

}
}
