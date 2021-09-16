import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('user_data'));
  }

  getUserEmail() {
    return this.getUserDetails().email;
  }

  getUserName() {
    if (this.getUserDetails()) {
      return this.getUserDetails().first_name + " " + this.getUserDetails().last_name;
    }
  }

  getUserId() {
    if (this.getUserDetails()) {
      return this.getUserDetails().id;
    }
  }

  getEmpDetails() {
    if (localStorage.getItem('company_id') != 'undefined') {
      return JSON.parse(localStorage.getItem('company_id'));
    }
  }

  getEmpRoleId() {
    if (localStorage.getItem('emp_role') != 'undefined') {
      return JSON.parse(localStorage.getItem('emp_role'));
    }
  }

  getCompanyTitle() {
    if (localStorage.getItem('company_title') != 'undefined') {
      return localStorage.getItem('company_title');
    }
  }

  getCompanyLogo() {
    if (localStorage.getItem('company_logo') != 'undefined') {
      return localStorage.getItem('company_logo');
    }
  }

  getEmpCompanyId() {
    return this.getEmpDetails();
  }

  getUserRole() {
    // return this.getUserDetails().role;
    return  localStorage.getItem("emp_role");

  }


  getDashboradAction() {
    if (localStorage.getItem('dashboardAction') != 'undefined') {
      return localStorage.getItem('dashboardAction');
    }
  }
  getClentName() {
    if (localStorage.getItem('client_name') != 'undefined') {
      return localStorage.getItem('client_name');
    }
  }
  getClentID() {
    if (localStorage.getItem('client_id') != 'undefined') {
      return localStorage.getItem('client_id');
    }
  }

  getClentType() {
    if (localStorage.getItem('client_type') != 'undefined') {
      return localStorage.getItem('client_type');
    }
  }
  getUserType() {
    if (localStorage.getItem('user_type') != 'undefined') {
      return localStorage.getItem('user_type');
    }
  }
  getMappingMenuID() {
    if (localStorage.getItem('Mapping_Menu_ID') != 'undefined') {
      return localStorage.getItem('Mapping_Menu_ID');
    }
  }

  getMappingEmployeeID() {
    if (localStorage.getItem('Mapping_Employee_ID') != 'undefined') {
      return localStorage.getItem('Mapping_Employee_ID');
    }
  }

  getmenuListbyRoles() {
    return JSON.parse(localStorage.getItem("menu_lists"))
  }

  getMenuIndex() {
    return localStorage.getItem("menuIndex")
  }

  getSelectedMenu() {
    return localStorage.getItem("selectedMenu")
  }

  getPoId() {
    if (localStorage.getItem('po_id') != 'undefined') {
      return localStorage.getItem('po_id');
    }

  }

  getPoUrl() {
    if (localStorage.getItem('po_url') != 'undefined') {
      return localStorage.getItem('po_url');
    }

  }

  getPoScreen() {
    if (localStorage.getItem('po_screen') != 'undefined') {
      return localStorage.getItem('po_screen');
    }

  }
}

