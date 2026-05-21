import {Component, inject, input} from '@angular/core';
import {Profile} from '../../data/interfaces/profile.interfaces';
import {ImgUrlPipe} from '../../heplers/pipe/img-url-pipe';
import {ProfileServices} from '../../data/services/profile.services';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-header',
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.scss',
})
export class ProfileHeader {
  profile = input<Profile>();

}
