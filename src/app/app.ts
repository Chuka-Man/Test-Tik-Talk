import  {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {ProfileServices} from './data/services/profile.services';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {Profile} from './data/interfaces/profile.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard, RouterOutlet],


  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
