import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  userCollection: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response: User[]) => {
      this.userCollection = response;
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((response: User[]) => {
      this.userCollection = response;
    });
  }

}
