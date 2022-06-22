# About mocksrv

mocksrv is a simple library to mock server responses for frontend development without connecting a real server. It uses simple functional programming paradigms to spin up a mock server that is running in the background.

**THIS PROJECT IS A WORK IN PROGRESS**

# Example

```ts
import { Request } from "express";
import { createServer } from "./src/mocksrv";
import { email, name, repeat } from "./src/models";
import { RouteFactory } from "./src/route-factory";

createServer(function(this: RouteFactory) {
    this.get('/people', (request: Request) => ({
        people: repeat(() => ({
            name: name(),
            email: email(),
        }), 5)
    }))
})
```

This will spin up a mocksrv instance that exposes the GET route `/people` with the following response:

```
{
  "people": [
    {
      "name": "Violet Flatley",
      "email": "Theresia91@yahoo.com",
      "id": 1
    },
    {
      "name": "Teresa Kozey",
      "email": "Turner_Langworth51@yahoo.com",
      "id": 2
    },
    {
      "name": "Alejandro Emard",
      "email": "Lia_Kshlerin18@hotmail.com",
      "id": 3
    },
    {
      "name": "Mario Schinner",
      "email": "Quentin29@yahoo.com",
      "id": 4
    },
    {
      "name": "Pete Crooks",
      "email": "Wilmer23@gmail.com",
      "id": 5
    }
  ]
}
```

# Todos

- Write tests
- Complex models