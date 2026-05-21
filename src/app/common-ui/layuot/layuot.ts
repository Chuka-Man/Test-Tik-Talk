import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../sidebar/sidebar';
import {ProfileServices} from '../../data/services/profile.services';

@Component({
  selector: 'app-layuot',
  imports: [
    RouterOutlet,
    Sidebar
  ],
  templateUrl: './layuot.html',
  styleUrl: './layuot.scss',
})
export class Layuot {


}
