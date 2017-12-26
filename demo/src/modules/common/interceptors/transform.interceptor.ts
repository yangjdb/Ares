import {ExecutionContext, Interceptor, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Interceptor()
export class TransformInterceptor implements NestInterceptor {
    public intercept(
        dataOrRequest,
        context: ExecutionContext,
        stream$: Observable<any>
    ): Observable<any> {
        return stream$.map(data => ({data}));
    }
}
