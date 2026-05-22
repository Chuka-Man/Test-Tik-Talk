import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../interfaces/profile.interfaces';
import {Pageble} from '../interfaces/pagebl.interface';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileServices {
  http = inject(HttpClient);

  baseApUrl ='https://icherniakov.ru/yt-course'

  me = signal<Profile | null>(null)

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApUrl}/account/test_accounts`)

  }

  getAccount  (id: string  ) {
    return this.http.get<Profile>(`${this.baseApUrl}/account/${id  }`)

  }

   getMe() {
    return this.http.get<Profile>(`${this.baseApUrl}/account/me`)
      .pipe(
         tap( res=>this.me.set(res)
         )
      )
  }

   getSubscribersShortlist( subsAmount = 3){
    return this.http.get<Pageble<Profile>>(`${this.baseApUrl}/account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, subsAmount)),
      )
  }


   patchProfile(profile: Partial<Profile>) {
     return this.http.patch<Profile>(
       `${this.baseApUrl}/account/me`,
       profile

     )
   }

   uploadAvatar(file: File)  {

    const fd = new FormData();
    fd.append('image', file);
     return this.http.post<Profile>(
       `${this.baseApUrl}/account/upload_image`,
       fd
     )
   }
}



