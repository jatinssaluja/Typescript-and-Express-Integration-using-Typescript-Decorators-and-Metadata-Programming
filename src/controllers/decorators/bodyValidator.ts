import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function bodyValidator(...fields: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, fields, target, key);
  };
}
