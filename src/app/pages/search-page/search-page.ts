import {Component, inject} from '@angular/core';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';
import {ProfileServices} from '../../data/services/profile.services';
import {Profile} from '../../data/interfaces/profile.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCard
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class  SearchPage {
  profileService = inject(ProfileServices);
  profiles: Profile[] =[]

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val;
      } )
  }

}
