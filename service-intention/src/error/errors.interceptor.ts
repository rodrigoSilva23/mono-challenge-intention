import { Injectable, BadGatewayException } from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor {
  intercept(context, next) {
    return next.handle().pipe(
      catchError((err) => {
        console.log('erroor code' + err);
        throw new BadGatewayException();
      }),
    );
  }
}
