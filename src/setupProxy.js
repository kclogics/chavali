const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/users", { target: "http://localhost:8080/" }));
  app.use(proxy("/users2", { target: "http://localhost:8080/" }));
  app.use(proxy("/test/*", { target: "http://localhost:8080/" }));
  app.use(proxy("/courses", { target: "http://localhost:8081/" }));
};
