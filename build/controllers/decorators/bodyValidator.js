"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyValidator() {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, fields, target, key);
    };
}
exports.bodyValidator = bodyValidator;
