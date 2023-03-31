const jsonServer = require("json-server");
const server = create();
const router = _router("database.json");
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
console.log("json-server");
