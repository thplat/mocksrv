"use strict";
exports.__esModule = true;
var models_1 = require("./src/models");
function default_1() {
    this.get('/', function () { return ({
        people: (0, models_1.repeat)(function () { return ({
            name: (0, models_1.name)(),
            email: (0, models_1.email)()
        }); }, 5)
    }); })
        .status(404)
        .headers({
        'Authorization': 'Bearer 12346'
    });
    this.get('/person', function () { return ({
        name: (0, models_1.name)(),
        email: (0, models_1.email)()
    }); });
}
exports["default"] = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX21vY2tzcnYuZGVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vX21vY2tzcnYuZGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUNBQWtEO0FBRWxEO0lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBTSxPQUFBLENBQUM7UUFDakIsTUFBTSxFQUFFLElBQUEsZUFBTSxFQUFDLGNBQU0sT0FBQSxDQUFDO1lBQ2xCLElBQUksRUFBRSxJQUFBLGFBQUksR0FBRTtZQUNaLEtBQUssRUFBRSxJQUFBLGNBQUssR0FBRTtTQUNqQixDQUFDLEVBSG1CLENBR25CLEVBQUUsQ0FBQyxDQUFDO0tBQ1QsQ0FBQyxFQUxrQixDQUtsQixDQUFDO1NBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNYLE9BQU8sQ0FBQztRQUNMLGVBQWUsRUFBRSxjQUFjO0tBQ2xDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxDQUFDO1FBQ3ZCLElBQUksRUFBRSxJQUFBLGFBQUksR0FBRTtRQUNaLEtBQUssRUFBRSxJQUFBLGNBQUssR0FBRTtLQUNqQixDQUFDLEVBSHdCLENBR3hCLENBQUMsQ0FBQTtBQUNQLENBQUM7QUFoQkQsK0JBZ0JDIn0=