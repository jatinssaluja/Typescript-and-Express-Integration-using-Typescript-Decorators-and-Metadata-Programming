"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function bodyValidators(fields) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid request");
            return;
        }
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (!req.body[field]) {
                res.status(422).send("Missing property " + field);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) ||
                [];
            var requiredBodyFields = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) ||
                [];
            var validator = bodyValidators(requiredBodyFields);
            if (path) {
                router[method].apply(router, ["" + routePrefix + path].concat(middlewares, [validator,
                    routeHandler]));
            }
        }
    };
}
exports.controller = controller;
