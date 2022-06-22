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
exports.email = exports.name = exports.repeat = void 0;
var faker_1 = require("@faker-js/faker");
var repeat = function (factory, times) {
    return Array.from({ length: times }, function (value, index) { return (__assign(__assign({}, factory()), { id: index + 1 })); });
};
exports.repeat = repeat;
var name = function () { return faker_1.faker.name.findName(); };
exports.name = name;
var email = function () { return faker_1.faker.internet.email(); };
exports.email = email;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QztBQUVoQyxJQUFNLE1BQU0sR0FBRyxVQUFDLE9BQXFCLEVBQUUsS0FBYTtJQUN2RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEVBQUUsVUFBQyxLQUFjLEVBQUUsS0FBYSxJQUFLLE9BQUEsdUJBQU0sT0FBTyxFQUFFLEtBQUUsRUFBRSxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUcsRUFBakMsQ0FBaUMsQ0FBQyxDQUFBO0FBQzVHLENBQUMsQ0FBQTtBQUZZLFFBQUEsTUFBTSxVQUVsQjtBQUVNLElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFyQixDQUFxQixDQUFBO0FBQWxDLFFBQUEsSUFBSSxRQUE4QjtBQUN4QyxJQUFNLEtBQUssR0FBRyxjQUFNLE9BQUEsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQTtBQUFwQyxRQUFBLEtBQUssU0FBK0IifQ==