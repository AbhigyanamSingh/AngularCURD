import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../shared/services/storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss'],
  providers: [LocalStorageService]
})
export class DynamicMenuComponent implements OnInit {
  constructor(
    public _localStorageService: LocalStorageService,
    private router: Router,
    private toaster: ToastrService
  ) { }
  myControl = new FormControl();

  isOpened = true;
  isclosed = false;
  prevClicked = -1;
  userName = '';
  companyName = '';
  menuList: any = []
  userCode:any=''
is_loggin:boolean=false;
  flaglist = false;
  ngOnInit() {
    console.log('%cStop! You Are Not Allowed', 'color: white; font-size: 30px; font-weight: bold;background:#035168;');
    document.body.scrollTop = 0;
  this.is_loggin=(localStorage.getItem('email')!=undefined && localStorage.getItem('email')!='' && localStorage.getItem('email')!=null)?true:false;
console.log(this.is_loggin) 
this.getMenuList();

}

 
  getMenuList() {
    this.menuList=[];
    if(this.is_loggin)
    {
      this.menuList.push(
        {
        id:'1',
        'parent':'0',
        menuitemname:'Home',
        menuitemicon:'fa fa-th-list',
        aurl:'/home',
        has_submenu:false,
      },
     
      {
        id:'4',
        'parent':'0',
        menuitemname:'User List',
        menuitemicon:'fa fa-th-list',
        aurl:'/user-list',
        has_submenu:false,
      }
      )
    }
    else
    {
    this.menuList.push(
      {
      id:'1',
      'parent':'0',
      menuitemname:'Home',
      menuitemicon:'fa fa-th-list',
      aurl:'/home',
      has_submenu:false,
    },
    {
      id:'2',
      'parent':'0',
      menuitemname:'Register',
      menuitemicon:'fa fa-th-list',
      aurl:'/register',
      has_submenu:false,
    },
    {
      id:'3',
      'parent':'0',
      menuitemname:'Login',
      menuitemicon:'fa fa-th-list',
      aurl:'/login',
      has_submenu:false,
    }
    )
  }
  }
  

  showMenuList(index) {
    this.menuList[index].show = !this.menuList[index].show;
  }



  navigate(url: any, parentMenu: string, isMain: boolean, project: string) {
    
      this.router.navigate([url]);
     
    
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    this.isOpened = false;
    this.isclosed = true;
    const elem: any = document.querySelector(
      '.sublist-ul.active'
    ) as HTMLElement;
    if (elem) {
      elem.style.display = 'block';
    }
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '60px';
    this.isOpened = true;
    this.isclosed = false;
    const elem: any = document.querySelector(
      '.sublist-ul.active'
    ) as HTMLElement;
    if (elem) {
      elem.style.display = 'none';
    }
  }

  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  gotoUp() {
    window.scrollTo(0, 0);
  }
  gotoDown() {
    const element = document.getElementById('body');
    const x = element.clientHeight;
    const y = element.clientWidth;
    window.scrollTo(y, y);
  }


  goHome() {
    window.location.href = '/#' + '/home';
  }
  isMenuIconOpened:boolean=false;
  openMenuNav() {
    document.getElementById('menuNav').style.width = '150px';
    this.isMenuIconOpened = true;
  }

  closeMenuNav() {
    document.getElementById('menuNav').style.width = '0';
    this.isMenuIconOpened = false;
  }


 
  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/new.mp3";
    audio.load();
    audio.play();
  }
  goTo()
  {
    let page_url: any =window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  }

}
