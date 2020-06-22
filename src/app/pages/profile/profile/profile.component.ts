import {Component, OnInit} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {ProfileService} from '../profile.service';
import {TokenStorageService} from '../../../core/auth/token-storage.service';
import {ProfileDto} from '../dto/profile.dto';
import {ObjectCompare} from '../../../core/helpers/object-compare';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile = new ProfileDto();
  objCompare: ObjectCompare;
  constructor(
    private profileService: ProfileService,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit(): void {
    const {userId} = this.tokenStorage.getUserToken();
    if (userId) {
      this.profileService.getUser(userId).subscribe(({data}) => {
        this.profile = {...data, userId};
        this.objCompare = new ObjectCompare({...this.profile});
      });
    }
  }

  onSubmit() {
    const updateProfile: Partial<ProfileDto> = this.objCompare.getObjectDiference(
      this.profile,
    );
    if (updateProfile) {
      this.profileService
        .udpateUser(this.profile.userId, updateProfile)
        .subscribe(data => {});
    }
  }
}
