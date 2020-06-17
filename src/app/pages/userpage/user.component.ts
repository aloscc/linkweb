import {Component, OnInit} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {UsersService} from './users.service';
import {TokenStorageService} from '../../core/auth/token-storage.service';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-user-cmp',
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {
  user = new User(0, '', '', '', '', '', '', 0, 0);
  constructor(
    private usersService: UsersService,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit() {
    const {userId} = this.tokenStorage.getUserToken();
    if (userId) {
      this.usersService.getUser(userId).subscribe(({data}) => {
        this.user = data;
      });
    }
  }
}
