import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class NewsPipe implements PipeTransform {
  private schema;
  constructor(schema) {
    this.schema = schema;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value,'111')
    // 修改传参
    // value.id = 11
    const { error } = this.schema.validate(value);
    if (error) {
      return { success: false };
    }
    return value;
  }
}
