"use strict";
exports.__esModule = true;
exports.RouteFactory = void 0;
var types_1 = require("./types");
var route_1 = require("./route");
var RouteFactory = /** @class */ (function () {
    function RouteFactory(routes) {
        this.routes = routes;
    }
    RouteFactory.prototype.get = function (path, model) {
        var route = new route_1.Route(path, types_1.RequestType.GET, model);
        this.routes.add(route);
        return new route_1.RouteProxy(route);
    };
    return RouteFactory;
}());
exports.RouteFactory = RouteFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZS1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLGlDQUFzQztBQUN0QyxpQ0FBNEM7QUFFNUM7SUFJSSxzQkFBbUIsTUFBdUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVNLDBCQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsS0FBeUM7UUFDOUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLG1CQUFXLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sSUFBSSxrQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksb0NBQVkifQ==