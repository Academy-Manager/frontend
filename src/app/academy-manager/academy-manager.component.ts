import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';

@Component({
  selector: 'app-academy-manager',
  templateUrl: './academy-manager.component.html',
  styleUrls: ['./academy-manager.component.scss']
})
export class AcademyManagerComponent implements OnInit {

  public showAdminSidebar: boolean = false;
  

  constructor(
    private userService: UserServiceService
  ) {
    if (this.userService.isAdmin()) {
      this.showAdminSidebar = true;
    }
  }

  ngOnInit() {
  }

   /* public isAdmin(): boolean {
    if (this.userService.isAdmin()) {
      return true;
    }
    return false;
    
  } */

}
