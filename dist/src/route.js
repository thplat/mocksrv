"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RouteProxy = exports.Route = void 0;
var status_1 = require("./status");
var Route = /** @class */ (function () {
    function Route(path, requestType, resolver) {
        this.statusCode = status_1.StatusCode.OK;
        this.resolver = function () { };
        this.headers = {};
        this.path = path;
        this.requestType = requestType;
        this.resolver = resolver;
    }
    return Route;
}());
exports.Route = Route;
var RouteProxy = /** @class */ (function () {
    function RouteProxy(route) {
        this.route = route;
    }
    RouteProxy.prototype.status = function (code) {
        this.route.statusCode = code;
        return this;
    };
    RouteProxy.prototype.headers = function (headers) {
        this.route.headers = __assign(__assign({}, this.route.headers), headers);
    };
    return RouteProxy;
}());
exports.RouteProxy = RouteProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBc0M7QUFHdEM7SUFRSSxlQUFtQixJQUFZLEVBQUUsV0FBd0IsRUFBRSxRQUFvQjtRQUp4RSxlQUFVLEdBQUcsbUJBQVUsQ0FBQyxFQUFFLENBQUE7UUFDMUIsYUFBUSxHQUFHLGNBQU8sQ0FBQyxDQUFBO1FBQ25CLFlBQU8sR0FBMkIsRUFBRSxDQUFBO1FBR3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxzQkFBSztBQWdCbEI7SUFJSSxvQkFBbUIsS0FBc0I7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxJQUFnQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDNUIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLE9BQStCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyx5QkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FDbEIsT0FBTyxDQUNiLENBQUE7SUFDTCxDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGdDQUFVIn0=