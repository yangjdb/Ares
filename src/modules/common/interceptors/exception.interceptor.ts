import { ExecutionContext, HttpException, HttpStatus, Interceptor, NestInterceptor, } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Interceptor()
export class ExceptionInterceptor implements NestInterceptor {
    intercept(
        dataOrRequest,
        context: ExecutionContext,
        stream$: Observable<any>,
    ): Observable<any> {
        return stream$.catch(err =>
            Observable.throw(
                new HttpException(
                    'Exception interceptor message',
                    HttpStatus.BAD_GATEWAY,
                ),
            ),
        );
    }
}
