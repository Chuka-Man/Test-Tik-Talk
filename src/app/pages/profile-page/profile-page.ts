import {Component, inject} from '@angular/core';
import {ProfileHeader} from '../../common-ui/profile-header/profile-header';
import {AsyncPipe} from '@angular/common';
import {ProfileServices} from '../../data/services/profile.services';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toObservable} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';
import {Svg} from '../../common-ui/svg/svg';
import {ImgUrlPipe} from '../../heplers/pipe/img-url-pipe';
import {PostFeed} from './post-feed/post-feed';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeader,
    AsyncPipe,
    Svg,
    RouterLink,
    ImgUrlPipe,
    PostFeed
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  profileService = inject(ProfileServices)
  route = inject(ActivatedRoute)

  me$ = toObservable(this.profileService.me)
  subscribers$ = this.profileService.getSubscribersShortlist(5 );


  profile$ = this.route.params
    .pipe(
      switchMap(({id}) =>{
        if (id ===  'me') return this.me$

        return  this.profileService.getAccount(id)
      })
    )

}
