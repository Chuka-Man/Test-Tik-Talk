import {Component, inject} from '@angular/core';
import {Svg} from '../svg/svg';
import {RouterLink} from '@angular/router';
import {SubscriberCard} from './subscriber-card/subscriber-card';
import {Profile} from '../../data/services/profile';
import {ProfileServices} from '../../data/services/profile.services';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {firstValueFrom} from 'rxjs';
import {ImgUrlPipe} from '../../heplers/pipe/img-url-pipe';

@Component({
  selector: 'app-sidebar',
  imports: [
    Svg,
    RouterLink,
    SubscriberCard,
    AsyncPipe,
    ImgUrlPipe
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {
  profileService: ProfileServices = inject(ProfileServices);

  subscribers$ = this.profileService.getSubscribersShortlist();

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },

    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats',
    },

    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    }
  ]

  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }
}
