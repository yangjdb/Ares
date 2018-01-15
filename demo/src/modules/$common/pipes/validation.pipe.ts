import {HttpException} from '@nestjs/common';
import {
    ArgumentMetadata,
    HttpStatus,
    Pipe,
    PipeTransform,
} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
    public async transform(value, metadata: ArgumentMetadata) {
        const {metatype} = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
        }
        return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
}
