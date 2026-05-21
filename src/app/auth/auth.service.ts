import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';
import {TokenResponse} from './ auth.interface';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class  AuthService {
  http = inject(HttpClient)
  Router = inject(Router)
  cookieService = inject(CookieService)
  baseApUrl = 'https://icherniakov.ru/yt-course/auth/'


  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token =  this.cookieService.get('token')
      this.refreshToken =  this.cookieService.get('refreshToken')

    }
    return !!this.token;
  }


    login(payload: { username: string, password: string }) {
    const fd = new FormData();

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http
      .post <TokenResponse>(`${this.baseApUrl}token`, fd,)
      .pipe( tap (value => this.saveToken(value))
       )
  }

  refreshAuthToken() {
    return this.http.post<TokenResponse>(
      `${this.baseApUrl}refresh`,
      {
        refresh_token: this.refreshToken
      }
    ) .pipe(
      tap(value => this.saveToken(value)),
    catchError( err => {
        this.logout()
        return throwError(err)
      })
    )
  }
   logout() {
    this.cookieService.deleteAll()
     this.refreshToken = null;
    this.token = null;
    this.Router.navigate(['/login']);
   }

saveToken( res: TokenResponse) {
  this.token = res.access_token;
  this.refreshToken = res.refresh_token;

  this.cookieService.set('token', this.token);
  this.cookieService.set('refreshToken', this.refreshToken  );

}

}
