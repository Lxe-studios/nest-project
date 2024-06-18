import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class NewsPipe implements PipeTransform {
    private schema;
    constructor(schema: any);
    transform(value: any, metadata: ArgumentMetadata): any;
}
