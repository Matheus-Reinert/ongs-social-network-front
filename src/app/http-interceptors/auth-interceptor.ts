import { UserService } from '../resources/services/user/user.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService:UserService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler){
      const token = this.userService.getAuthorizationToken();
      let request: HttpRequest<any> = req;

      if(token && !this.userService.isTokenExpired(token)){
        request = req.clone({
          headers: req.headers.set('Authorization', token)
        });
      }

      return next.handle(request)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro', error.error.message);
    } else {
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`
      );
    }

    return throwError('Ocorreu um erro, tente novamente')
  }
}
