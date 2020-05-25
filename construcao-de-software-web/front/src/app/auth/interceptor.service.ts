// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators';
// import { Router } from '@angular/router';

// import { UserService } from '../shared/user.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private userService: UserService, private router: Router) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     if (req.headers.get('noauth')) return next.handle(req.clone());
//     else {
//       const clonedreq = req.clone({
//         headers: req.headers.set(
//           'Authorization',
//           'Bearer ' + this.userService.getToken()
//         ),
//       });
//       return next.handle(clonedreq).pipe(
//         tap(
//           (event) => {},
//           (err) => {
//             if (err.error.auth == false) {
//               this.router.navigateByUrl('/login');
//             }
//           }
//         )
//       );
//     }
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router:Router){}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token
            }
        })
        return next.handle(request).pipe(
          tap(success=>{

          },err=>{
            if(err.status == 401){
              this.router.navigateByUrl('/login');
            }
          })
        )
    }
    console.log(request);
    return next.handle(request);
  }
}

