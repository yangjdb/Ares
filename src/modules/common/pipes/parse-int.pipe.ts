import { ArgumentMetadata, HttpException, HttpStatus, Pipe, PipeTransform } from '@nestjs/common';

@Pipe()
export class ParseIntPipe implements PipeTransform<string> {
    async transform(value: string, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
        }
        return val;
    }
}
