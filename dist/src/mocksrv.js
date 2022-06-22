"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createServer = exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var chalk_1 = __importDefault(require("chalk"));
var route_collection_1 = require("./route-collection");
var route_factory_1 = require("./route-factory");
var Server = /** @class */ (function () {
    function Server(definitions, port) {
        if (port === void 0) { port = 5000; }
        this.port = 5000;
        this.express = (0, express_1["default"])();
        this.definitions = definitions;
        this.port = port;
    }
    Server.prototype.run = function () {
        var _this = this;
        var route = new route_factory_1.RouteFactory(route_collection_1.RouteCollection);
        this.definitions.bind(route)();
        route_collection_1.RouteCollection.all().forEach(function (route) {
            if (typeof route.path === 'undefined') {
                throw new Error("No path given for route");
            }
            if (typeof route.requestType === 'undefined') {
                throw new Error("".concat(route.path, " has no request type"));
            }
            _this.express[route.requestType](route.path, function (_, res) {
                Object.entries(route.headers).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    res.set(key, value);
                });
                res.status(route.statusCode);
                res.send(route.resolver());
            });
        });
        this.express.listen(this.port, function () {
            console.log(chalk_1["default"].green("MockSrv Listening on Port ".concat(_this.port, ":")) + (" http://localhost:".concat(_this.port)));
        });
    };
    return Server;
}());
exports.Server = Server;
function createServer(definitions, port) {
    if (port === void 0) { port = 5000; }
    var mocksrv = new Server(definitions, port);
    mocksrv.run();
}
exports.createServer = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3Nydi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2Nrc3J2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE2RDtBQUM3RCxnREFBeUI7QUFDekIsdURBQXFEO0FBQ3JELGlEQUErQztBQUcvQztJQU1JLGdCQUFZLFdBQXlDLEVBQUUsSUFBbUI7UUFBbkIscUJBQUEsRUFBQSxXQUFtQjtRQUZoRSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBR2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBTyxHQUFFLENBQUE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUVNLG9CQUFHLEdBQVY7UUFBQSxpQkE2QkM7UUE1QkcsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBWSxDQUFDLGtDQUFlLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFBO1FBRTlCLGtDQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBWTtZQUV2QyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTthQUM3QztZQUVELElBQUksT0FBTyxLQUFLLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtnQkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFHLEtBQUssQ0FBQyxJQUFJLHlCQUFzQixDQUFDLENBQUE7YUFDdkQ7WUFFRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUc7Z0JBRS9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7d0JBQVgsR0FBRyxRQUFBLEVBQUUsS0FBSyxRQUFBO29CQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDdkIsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBSyxDQUFDLEtBQUssQ0FBQyxvQ0FBNkIsS0FBSSxDQUFDLElBQUksTUFBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBcUIsS0FBSSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSx3QkFBTTtBQTRDbkIsU0FBZ0IsWUFBWSxDQUFDLFdBQXlDLEVBQUUsSUFBbUI7SUFBbkIscUJBQUEsRUFBQSxXQUFtQjtJQUN2RixJQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDN0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ2pCLENBQUM7QUFIRCxvQ0FHQyJ9