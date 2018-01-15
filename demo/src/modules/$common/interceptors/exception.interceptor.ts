import {
    ExecutionContext,
    HttpStatus,
    Interceptor,
    NestInterceptor,
} from '@nestjs/common';
import {HttpException} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Interceptor()
export class ExceptionInterceptor implements NestInterceptor {
    public intercept(dataOrRequest,
                     context: ExecutionContext,
                     stream$: Observable<any>, ): Observable<any> {
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
